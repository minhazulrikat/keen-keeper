import { Inbox } from "lucide-react";

export default function EmptyState({
  title = "Nothing here yet",
  description = "There is no data to display at the moment.",
}) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center px-6 py-10 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Inbox size={22} strokeWidth={1.8} />
      </div>

      <h3 className="text-base font-semibold text-base-content sm:text-lg">
        {title}
      </h3>

      <p className="mt-1 max-w-sm text-sm text-base-content/50 sm:text-base">
        {description}
      </p>
    </div>
  );
}