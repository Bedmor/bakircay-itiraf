import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../../generated/prisma";

const prisma = new PrismaClient();

// Admin şifresi kontrolü
function checkAdminAuth(request: Request): boolean {
  const authHeader = request.headers.get("authorization");
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return false;
  }

  const token = authHeader.substring(7);
  return token === adminPassword;
}

// PATCH - İtirafı onayla/reddet
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = (await request.json()) as { isApproved: boolean };

    const confession = await prisma.confession.update({
      where: { id },
      data: {
        isApproved: body.isApproved,
      },
    });

    return NextResponse.json({
      message: body.isApproved ? "İtiraf onaylandı" : "İtiraf reddedildi",
      confession,
    });
  } catch (error) {
    console.error("Error updating confession:", error);
    return NextResponse.json(
      { error: "İtiraf güncellenirken bir hata oluştu" },
      { status: 500 },
    );
  }
}

// DELETE - İtirafı sil
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 });
  }

  try {
    const { id } = await params;

    await prisma.confession.delete({
      where: { id },
    });

    return NextResponse.json({ message: "İtiraf silindi" });
  } catch (error) {
    console.error("Error deleting confession:", error);
    return NextResponse.json(
      { error: "İtiraf silinirken bir hata oluştu" },
      { status: 500 },
    );
  }
}
