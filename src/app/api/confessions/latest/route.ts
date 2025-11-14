import { NextResponse } from "next/server";
import { db } from "~/server/db";

// GET - En son onaylı itirafları getir (ana sayfa için)
export async function GET() {
  try {
    const confessions = await db.confession.findMany({
      where: {
        isApproved: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 9, // Ana sayfada 9 itiraf göster
    });

    return NextResponse.json({ confessions });
  } catch (error) {
    console.error("Error fetching latest confessions:", error);
    return NextResponse.json(
      { error: "İtiraflar yüklenirken bir hata oluştu" },
      { status: 500 },
    );
  }
}
