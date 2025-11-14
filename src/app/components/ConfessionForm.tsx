"use client";

import { useState } from "react";

export default function ConfessionForm() {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!content.trim()) {
      setMessage({ type: "error", text: "Lütfen bir itiraf yazın" });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch("/api/confessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });

      const data = (await response.json()) as {
        message?: string;
        error?: string;
      };

      if (response.ok) {
        setMessage({
          type: "success",
          text: data.message ?? "İtirafınız başarıyla gönderildi!",
        });
        setContent("");
      } else {
        setMessage({
          type: "error",
          text: data.error ?? "Bir hata oluştu",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Bağlantı hatası. Lütfen tekrar deneyin.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl rounded-2xl border border-purple-100 bg-white/90 p-8 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-purple-200">
      <h2 className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent">
        İtirafını Yaz
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="İtirafını buraya yaz... (Tamamen anonim ve güvenli)"
            className="h-40 w-full rounded-xl border-2 border-purple-200 bg-gradient-to-br from-white to-purple-50/30 p-4 transition-all duration-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-200 focus:outline-none"
            maxLength={1000}
            disabled={isSubmitting}
          />
          <p className="mt-1 text-right text-sm text-gray-500">
            {content.length}/1000
          </p>
        </div>

        {message && (
          <div
            className={`animate-fade-in rounded-xl p-4 font-medium ${
              message.type === "success"
                ? "border-2 border-green-200 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800"
                : "border-2 border-red-200 bg-gradient-to-r from-red-100 to-pink-100 text-red-800"
            }`}
          >
            {message.text}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !content.trim()}
          className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 font-bold text-white transition-all hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Gönderiliyor..." : "İtirafı Gönder"}
        </button>
      </form>
    </div>
  );
}
