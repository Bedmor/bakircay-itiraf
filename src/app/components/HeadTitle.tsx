"use client";
import { useState } from "react";
import Link from "next/link";
export default function HeadTitle() {
  const [counter, setCounter] = useState(0);
  return (
    <h1
      onClick={() => setCounter(counter + 1)}
      className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-3xl font-extrabold text-transparent"
    >
      {counter === 5 ? (
        <Link
          href="/admin"
          className="font-semibold text-gray-600 transition-colors hover:text-blue-600"
        >
          Admin
        </Link>
      ) : (
        "Bakırçay İtiraf"
      )}
    </h1>
  );
}
