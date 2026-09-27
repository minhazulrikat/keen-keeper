import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="text-7xl font-bold text-primary">404</p>

        <h1 className="mt-4 text-2xl font-semibold">
          Page not found
        </h1>

        <p className="mt-2 text-base-content/60">
          Sorry, we couldn't find the page you're looking for.
        </p>

        <Link href="/" className="btn btn-primary mt-6">
          <Home size={18} />
          Back to Home
        </Link>
      </div>
    </main>
  );
}