// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Oops! Incorrect URL</p>
      
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        Take me home
      </Link>
    </div>
  );
}