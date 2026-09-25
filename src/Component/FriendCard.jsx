
import Image from "next/image";
import Link from "next/link";

const statusStyles = {
  overdue: "badge-error",
  "almost due": "badge-warning",
  "on-track": "badge-success",
};

export default function FriendCard({ friend }) {
  
  return (
    <Link href={`/detail/${friend.id}`}>
    <div  className="card bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      <div className="card-body items-center px-3 py-5 text-center">

        <div className="avatar">
          <div className="w-12 rounded-full">
            <Image
              src={friend.picture}
              alt={friend.name}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        </div>

        <h3 className="mt-1 text-xs font-semibold">
          {friend.name}
        </h3>

        <p className="text-[9px] text-base-content/50">
          {friend.days_since_contact} days ago
        </p>

        {/* Tags */}
        <div className="mt-1 flex flex-wrap justify-center gap-1">

          {friend.tags.map((tag) => (
            <span
              key={tag}
              className="badge badge-ghost badge-xs"
            >
              {tag}
            </span>
          ))}

        </div>

        {/* Status */}
        <span
          className={`badge badge-xs mt-1 ${
            statusStyles[friend.status]
          }`}
        >
          {friend.status}
        </span>

      </div>

    </div>
    </Link>
  );
}