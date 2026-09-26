import FriendCard from "@/Component/FriendCard";
import Hero from "@/Component/Hero";
import StatCard from "@/Component/StatCard";

export default async function Home() {
  // const res = await fetch("http://localhost:3000/friends.json");
  // const friends = await res.json();
  const friends = [];
  return (
    <div className="font-sans mx-auto max-w-7xl px-4">
      <Hero></Hero>
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard value="8" label="Total Friends" />
        <StatCard value="3" label="On Track" />
        <StatCard value="6" label="Need Attention" />
        <StatCard value="12" label="Interactions This Month" />
      </section>

      {/* Friends */}
      <section className="py-8">
        <h2 className="mb-4 text-sm font-semibold">Your Friends</h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </section>
     
    </div>
  );
}
