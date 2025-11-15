import { NextResponse } from "next/server";
import { db } from "~/server/db";

// Admin şifresi kontrolü
function checkAdminAuth(request: Request): boolean {
  const authHeader = request.headers.get("authorization");
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!authHeader?.startsWith("Bearer ") || !adminPassword) {
    return false;
  }

  const token = authHeader.substring(7).trim();
  return token === adminPassword.trim();
}

// GET - Tüm itirafları getir (admin için)
export async function GET(request: Request) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status"); // 'pending', 'approved', 'all'

    let where = {};
    if (status === "pending") {
      where = { isApproved: false };
    } else if (status === "approved") {
      where = { isApproved: true };
    }

    const confessions = await db.confession.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ confessions });
  } catch (error) {
    console.error("Error fetching confessions:", error);
    return NextResponse.json(
      { error: "İtiraflar yüklenirken bir hata oluştu" },
      { status: 500 },
    );
  }
}
