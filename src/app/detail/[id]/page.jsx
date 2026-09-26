import QuickCheckIn from "@/Component/QuickCheckIn";
import StatCard from "@/Component/StatCard";
import Image from "next/image";
import { BsArchive } from "react-icons/bs";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { MdOutlineDeleteOutline } from "react-icons/md";

export default async function FriendDetails({ params }) {
  const { id } = await params;

  const res = await fetch("https://keen-keeper-beige.vercel.app/friends.json");
  const friends = await res.json();
 
  const friend = friends.find((data) => data.id === parseInt(id));

  if(Number(id)> friends.length){
    throw new Response("Page not found",{
      status:404,
    })
  }


  return (
    <main className="min-h-[70vh] mx-auto max-w-7xl px-4 py-6 sm:py-10">
      <div className="mx-auto grid max-w-5xl gap-4 lg:grid-cols-[220px_1fr]">
        {/* LEFT — Profile */}
        <section className="space-y-3">
          <div className="card border border-base-300 bg-base-100 shadow-sm">
            <div className="card-body items-center px-5 py-5 text-center">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <Image
                    src={friend.picture}
                    alt={friend.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
              </div>

              <h1 className="mt-1 text-base font-semibold text-base-content">
                {friend.name}
              </h1>

              <span className="badge badge-error badge-sm">Overdue</span>

              <span className="badge badge-success badge-xs">FAMILY</span>

              <p className="mt-1 text-sm italic text-base-content/60 sm:text-base">
                {friend.bio}
              </p>

              <p className="text-xs text-base-content/50">Preferred: email</p>
            </div>
          </div>

          {/* Actions */}
          <button className="btn btn-sm h-10 w-full bg-base-100 text-sm font-normal shadow-sm">
            <HiOutlineBellSnooze /> Snooze 2 Weeks
          </button>

          <button className="btn btn-sm h-10 w-full bg-base-100 text-sm font-normal shadow-sm">
            <BsArchive /> Archive
          </button>

          <button className="btn btn-sm h-10 w-full bg-base-100 text-sm font-normal text-error shadow-sm">
            <MdOutlineDeleteOutline /> Delete
          </button>
        </section>

        {/* RIGHT */}
        <section className="space-y-4">
          {/* Statistics */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <StatCard
              value={friend.days_since_contact}
              label="Days Since Contact"
            />

            <StatCard value={friend.goal} label="Goal (Days)" />

            <StatCard value="Feb 27, 2026" label="Next Due" large />
          </div>

          {/* Relationship Goal */}
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-primary sm:text-base">
                  Relationship Goal
                </h2>

                <button className="btn btn-ghost btn-xs">Edit</button>
              </div>

              <p className="text-sm text-base-content/70 sm:text-base">
                Connect every{" "}
                <strong className="text-base-content">
                  {friend.goal} days
                </strong>
              </p>
            </div>
          </div>

          {/* Quick Check-In */}
         <QuickCheckIn friend={friend}></QuickCheckIn>
        </section>
      </div>
    </main>
  );
}
