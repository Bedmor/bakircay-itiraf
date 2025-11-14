"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Confession {
  id: string;
  content: string;
  isApproved: boolean;
  createdAt: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [confessions, setConfessions] = useState<Confession[]>([]);
  const [filter, setFilter] = useState<"all" | "pending" | "approved">(
    "pending",
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedAuth = localStorage.getItem("adminAuth");
    if (savedAuth) {
      setPassword(savedAuth);
      setIsAuthenticated(true);
      void fetchConfessions("pending", savedAuth);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/admin/confessions?status=all", {
        headers: {
          Authorization: `Bearer ${password}`,
        },
      });

      if (response.ok) {
        setIsAuthenticated(true);
        localStorage.setItem("adminAuth", password);
        void fetchConfessions(filter, password);
      } else {
        setError("Hatalı şifre");
      }
    } catch {
      setError("Bağlantı hatası");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    localStorage.removeItem("adminAuth");
    setConfessions([]);
  };

  const fetchConfessions = async (status: string, authPassword?: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/confessions?status=${status}`, {
        headers: {
          Authorization: `Bearer ${authPassword ?? password}`,
        },
      });

      if (response.ok) {
        const data = (await response.json()) as {
          confessions: Confession[];
        };
        setConfessions(data.confessions);
      }
    } catch (err) {
      console.error("Error fetching confessions:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: string, isApproved: boolean) => {
    try {
      const response = await fetch(`/api/admin/confessions/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({ isApproved }),
      });

      if (response.ok) {
        void fetchConfessions(filter);
      }
    } catch (err) {
      console.error("Error updating confession:", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bu itirafı silmek istediğinize emin misiniz?")) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/confessions/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${password}`,
        },
      });

      if (response.ok) {
        void fetchConfessions(filter);
      }
    } catch (err) {
      console.error("Error deleting confession:", err);
    }
  };

  const handleFilterChange = (newFilter: "all" | "pending" | "approved") => {
    setFilter(newFilter);
    void fetchConfessions(newFilter);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="w-full max-w-md rounded-2xl border border-purple-100 bg-white/90 p-10 shadow-2xl backdrop-blur-lg">
          <div className="mb-8 text-center">
            <div className="mb-4 text-6xl">🔐</div>
            <h1 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-4xl font-extrabold text-transparent">
              Admin Girişi
            </h1>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                🔑 Şifre
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 px-4 py-3 transition-all focus:border-purple-500 focus:ring-4 focus:ring-purple-200 focus:outline-none"
                placeholder="Admin şifrenizi girin"
              />
            </div>
            {error && (
              <div className="rounded-xl border-2 border-red-200 bg-gradient-to-r from-red-100 to-pink-100 p-4 font-semibold text-red-800">
                ⚠️ {error}
              </div>
            )}
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
            >
              🚀 Giriş Yap
            </button>
          </form>
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block text-sm font-semibold text-purple-600 transition-colors hover:scale-105 hover:text-pink-600"
            >
              🏠 ← Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 shadow-lg backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-3xl font-extrabold text-transparent">
            Admin Paneli
          </h1>
          <div className="flex gap-6">
            <Link
              href="/"
              className="font-semibold text-gray-600 transition-colors hover:text-purple-600"
            >
              Ana Sayfa
            </Link>
            <button
              onClick={handleLogout}
              className="font-semibold text-red-600 transition-colors hover:text-red-800"
            >
              Çıkış Yap
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex gap-3">
            <button
              onClick={() => handleFilterChange("pending")}
              className={`rounded-xl px-6 py-3 font-bold shadow-lg transition-all ${
                filter === "pending"
                  ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                  : "bg-white text-gray-700 hover:bg-yellow-50"
              }`}
            >
              Bekleyenler
            </button>
            <button
              onClick={() => handleFilterChange("approved")}
              className={`rounded-xl px-6 py-3 font-bold shadow-lg transition-all ${
                filter === "approved"
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                  : "bg-white text-gray-700 hover:bg-green-50"
              }`}
            >
              Onaylananlar
            </button>
            <button
              onClick={() => handleFilterChange("all")}
              className={`rounded-xl px-6 py-3 font-bold shadow-lg transition-all ${
                filter === "all"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "bg-white text-gray-700 hover:bg-purple-50"
              }`}
            >
              Tümü
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center text-gray-600">Yükleniyor...</div>
        ) : confessions.length > 0 ? (
          <div className="space-y-6">
            {confessions.map((confession) => (
              <div
                key={confession.id}
                className="rounded-2xl border-2 border-purple-100 bg-white/90 p-8 shadow-xl backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <span
                      className={`inline-block rounded-full px-4 py-2 text-sm font-bold shadow-md ${
                        confession.isApproved
                          ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white"
                          : "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                      }`}
                    >
                      {confession.isApproved ? "✅ Onaylandı" : "⏳ Bekliyor"}
                    </span>
                    <span className="ml-3 rounded-lg bg-purple-50 px-3 py-1 text-sm font-semibold text-gray-500">
                      🆔 #{confession.id.slice(0, 8)}
                    </span>
                  </div>
                  <span className="rounded-lg bg-blue-50 px-3 py-1 text-sm font-semibold text-gray-500">
                    🕐 {new Date(confession.createdAt).toLocaleString("tr-TR")}
                  </span>
                </div>
                <p className="mb-6 text-lg leading-relaxed whitespace-pre-wrap text-gray-800">
                  {confession.content}
                </p>
                <div className="flex gap-3">
                  {!confession.isApproved && (
                    <button
                      onClick={() => handleApprove(confession.id, true)}
                      className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                    >
                      ✅ Onayla
                    </button>
                  )}
                  {confession.isApproved && (
                    <button
                      onClick={() => handleApprove(confession.id, false)}
                      className="rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                    >
                      ⚠️ Onayı Kaldır
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(confession.id)}
                    className="rounded-xl bg-gradient-to-r from-red-600 to-pink-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                  >
                    🗑️ Sil
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-purple-100 bg-white/90 p-16 text-center shadow-xl backdrop-blur-sm">
            <p className="text-xl font-semibold text-gray-600">
              Gösterilecek itiraf bulunmuyor.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
