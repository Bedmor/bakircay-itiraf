import Link from "next/link";
import ConfessionForm from "../components/ConfessionForm";

export default function SubmitPage() {
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
              className="font-semibold text-gray-600 transition-colors hover:text-purple-600"
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
            Anonim İtirafını Paylaş
          </h2>
          <p className="text-xl font-medium text-gray-700">
            Kimliğini gizleyerek içini dök. Onaylandıktan sonra yayınlanacak.
          </p>
        </div>

        {/* Confession Form */}
        <div className="mx-auto max-w-3xl">
          <ConfessionForm />
        </div>

        {/* Info Section */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-white/80 p-8 shadow-xl backdrop-blur-sm">
          <h3 className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-bold text-transparent">
            Bilgilendirme
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong className="text-purple-600">Gizlilik:</strong> İtirafların
              tamamen anonimdir. Kimlik bilgin saklanmaz.
            </li>
            <li>
              <strong className="text-purple-600">Onay:</strong> Gönderdiğin
              itiraflar, yayınlanmadan önce admin onayından geçer.
            </li>
            <li>
              <strong className="text-purple-600">İçerik:</strong> Lütfen
              saygılı ve kurallara uygun içerikler paylaş.
            </li>
            <li>
              <strong className="text-purple-600">Süreç:</strong> İtirafların
              genellikle 24 saat içinde incelenir ve yayınlanır.
            </li>
          </ul>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            ← Ana Sayfaya Dön
          </Link>
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
