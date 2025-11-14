import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

// GET - Onaylı itirafları getir
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") ?? "1");
    const limit = 18;
    const skip = (page - 1) * limit;

    const [confessions, total] = await Promise.all([
      prisma.confession.findMany({
        where: {
          isApproved: true,
        },
        orderBy: {
          createdAt: "desc",
        },
        skip,
        take: limit,
      }),
      prisma.confession.count({
        where: {
          isApproved: true,
        },
      }),
    ]);

    return NextResponse.json({
      confessions,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching confessions:", error);
    return NextResponse.json(
      { error: "İtiraflar yüklenirken bir hata oluştu" },
      { status: 500 },
    );
  }
}

// POST - Yeni itiraf gönder
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { content: string };

    if (!body.content || body.content.trim().length === 0) {
      return NextResponse.json(
        { error: "İtiraf içeriği boş olamaz" },
        { status: 400 },
      );
    }

    if (body.content.length > 1000) {
      return NextResponse.json(
        { error: "İtiraf en fazla 1000 karakter olabilir" },
        { status: 400 },
      );
    }

    const confession = await prisma.confession.create({
      data: {
        content: body.content.trim(),
      },
    });

    return NextResponse.json(
      {
        message:
          "İtirafınız başarıyla gönderildi. Onaylandıktan sonra yayınlanacak.",
        id: confession.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating confession:", error);
    return NextResponse.json(
      { error: "İtiraf gönderilirken bir hata oluştu" },
      { status: 500 },
    );
  }
}
