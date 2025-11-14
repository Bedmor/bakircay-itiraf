import Link from "next/link";
import ConfessionCard from "./components/ConfessionCard";

interface Confession {
  id: string;
  content: string;
  createdAt: string;
}

async function getLatestConfessions() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"}/api/confessions/latest`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return [];
    }

    const data = (await response.json()) as { confessions: Confession[] };
    return data.confessions;
  } catch (error) {
    console.error("Error fetching confessions:", error);
    return [];
  }
}

export default async function HomePage() {
  const latestConfessions = await getLatestConfessions();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 shadow-lg backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-3xl font-extrabold text-transparent">
            İtiraf Sitesi
          </h1>
          <nav className="flex gap-6">
            <Link
              href="/"
              className="font-semibold text-purple-600 transition-colors hover:text-purple-800"
            >
              Ana Sayfa
            </Link>
            <Link
              href="/confessions"
              className="font-semibold text-gray-600 transition-colors hover:text-pink-600"
            >
              Tüm İtiraflar
            </Link>
            <Link
              href="/admin"
              className="font-semibold text-gray-600 transition-colors hover:text-blue-600"
            >
              Admin
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="animate-fade-in mb-12 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-5xl font-extrabold text-transparent">
            Anonim İtiraflarını Paylaş
          </h2>
          <p className="mb-8 text-xl font-medium text-gray-700">
            Kimliğini gizleyerek içini dök. Onaylandıktan sonra yayınlanacak.
          </p>
          <Link
            href="/submit"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:shadow-xl"
          >
            İtiraf Yaz
          </Link>
        </div>

        {/* Latest Confessions */}
        <div className="mb-8">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent">
              Son İtiraflar
            </h3>
            <Link
              href="/confessions"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 font-semibold text-white transition-all hover:shadow-lg"
            >
              Tümünü Gör
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {latestConfessions.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {latestConfessions.map((confession) => (
                <ConfessionCard key={confession.id} confession={confession} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg bg-white p-12 text-center shadow-md">
              <p className="text-gray-600">
                Henüz onaylanmış itiraf bulunmuyor. İlk itirafı sen yap!
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t bg-white py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 İtiraf Sitesi - Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
