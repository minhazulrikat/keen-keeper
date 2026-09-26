
"use client";


import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-base-200 px-6">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 text-7xl font-bold text-primary sm:text-8xl">
          404
        </div>

        <h1 className="text-2xl font-semibold text-base-content sm:text-3xl">
          Page not found
        </h1>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-base-content/60 sm:text-base">
          Sorry, we could not find the page you are looking for. It may have
          been moved or no longer exists.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary">
            <Home size={18} />
            Go Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="btn btn-outline"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}