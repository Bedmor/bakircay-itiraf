"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ConfessionCard from "../components/ConfessionCard";
import HeadTitle from "../components/HeadTitle";

interface Confession {
  id: string;
  content: string;
  createdAt: string;
}

interface PaginationData {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export default function ConfessionsPage() {
  const [confessions, setConfessions] = useState<Confession[]>([]);
  const [pagination, setPagination] = useState<PaginationData>({
    page: 1,
    limit: 18,
    total: 0,
    totalPages: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void fetchConfessions(1);
  }, []);

  const fetchConfessions = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/confessions?page=${page}`);
      const data = (await response.json()) as {
        confessions: Confession[];
        pagination: PaginationData;
      };

      setConfessions(data.confessions);
      setPagination(data.pagination);
    } catch (error) {
      console.error("Error fetching confessions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    void fetchConfessions(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 shadow-lg backdrop-blur-md">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:gap-0">
          <HeadTitle />
          <nav className="flex flex-wrap justify-center gap-3 sm:gap-6">
            <Link
              href="/"
              className="text-sm font-semibold text-gray-600 transition-colors hover:text-purple-600 sm:text-base"
            >
              Ana Sayfa
            </Link>
            <Link
              href="/confessions"
              className="text-sm font-semibold text-purple-600 transition-colors hover:text-purple-800 sm:text-base"
            >
              Tüm İtiraflar
            </Link>
            <Link
              href="/admin"
              className="text-sm font-semibold text-gray-600 transition-colors hover:text-blue-600 sm:text-base"
            >
              Admin
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="animate-fade-in mb-8 text-center">
          <h2 className="mb-3 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl">
            Tüm İtiraflar
          </h2>
          {!loading && (
            <p className="text-base font-semibold text-gray-700 sm:text-lg md:text-xl">
              Toplam {pagination.total ?? 0} onaylanmış itiraf
            </p>
          )}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="h-48 animate-pulse rounded-2xl bg-linear-to-br from-purple-100 to-pink-100 shadow-lg"
              />
            ))}
          </div>
        ) : confessions.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {confessions.map((confession) => (
                <ConfessionCard key={confession.id} confession={confession} />
              ))}
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page === 1}
                  className="rounded-xl bg-linear-to-r from-purple-600 to-pink-600 px-3 py-2 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 sm:px-6 sm:py-3 sm:text-base"
                >
                  <span className="hidden sm:inline">← Önceki</span>
                  <span className="sm:hidden">←</span>
                </button>

                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: pagination.totalPages }).map((_, i) => {
                    const pageNum = i + 1;
                    const isCurrentPage = pageNum === pagination.page;
                    const shouldShow =
                      pageNum === 1 ||
                      pageNum === pagination.totalPages ||
                      Math.abs(pageNum - pagination.page) <= 1;

                    if (!shouldShow) {
                      if (
                        pageNum === pagination.page - 2 ||
                        pageNum === pagination.page + 2
                      ) {
                        return (
                          <span
                            key={i}
                            className="flex items-center px-2 text-gray-500"
                          >
                            ...
                          </span>
                        );
                      }
                      return null;
                    }

                    return (
                      <button
                        key={i}
                        onClick={() => handlePageChange(pageNum)}
                        className={`rounded-xl px-3 py-2 text-sm font-bold shadow-lg transition-all hover:scale-105 sm:px-4 sm:text-base ${
                          isCurrentPage
                            ? "scale-110 bg-linear-to-r from-purple-600 to-pink-600 text-white"
                            : "bg-white text-gray-700 hover:bg-purple-50"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page === pagination.totalPages}
                  className="rounded-xl bg-linear-to-r from-purple-600 to-pink-600 px-3 py-2 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 sm:px-6 sm:py-3 sm:text-base"
                >
                  <span className="hidden sm:inline">Sonraki →</span>
                  <span className="sm:hidden">→</span>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="rounded-lg bg-white p-6 text-center shadow-md sm:p-12">
            <p className="text-sm text-gray-600 sm:text-base">
              Henüz onaylanmış itiraf bulunmuyor.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-8 border-t bg-white py-4 sm:mt-12 sm:py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p className="text-xs sm:text-sm">
            © 2025 İtiraf Sitesi - Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}
