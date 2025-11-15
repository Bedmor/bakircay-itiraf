interface Confession {
  id: string;
  content: string;
  createdAt: string;
}

export default function ConfessionCard({
  confession,
}: {
  confession: Confession;
}) {
  const date = new Date(confession.createdAt);
  const formattedDate = date.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="group rounded-2xl border border-purple-100 bg-linear-to-br from-white to-purple-50/30 p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-200">
      <div className="mb-4 flex items-start justify-between">
        <span className="rounded-full bg-linear-to-r from-purple-500 to-pink-500 px-4 py-1.5 text-xs font-bold text-white shadow-md">
          #{confession.id.slice(0, 8)}
        </span>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
          {formattedDate}
        </span>
      </div>
      <p className="leading-relaxed whitespace-pre-wrap text-gray-800 transition-colors group-hover:text-gray-900">
        {confession.content}
      </p>
      <div className="mt-4 h-1 w-0 rounded-full bg-linear-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></div>
    </div>
  );
}
