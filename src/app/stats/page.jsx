"use client"
import EmptyState from "@/Component/EmptyState";
import RelationshipChart from "@/Component/RelationshipChart";
import { useInteractions } from "@/Context/InteractionContext";

export default function Stats() {
  const {interactions} = useInteractions();
  return (
    <main className="min-h-[50vh] bg-base-200 px-4 py-8 sm:px-6 lg:py-10">
      <div className="mx-auto max-w-5xl">

        <div className="mb-4">
          <h1 className="text-2xl font-bold tracking-tight text-base-content sm:text-3xl">
            Friendship Analytics
          </h1>
        </div>

        <section className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body p-4 sm:p-6">

            <h2 className="text-sm font-medium text-base-content sm:text-base">
              By Interaction Type
            </h2>

            <div className="flex min-h-64 items-center justify-center py-4 sm:min-h-80">
             {interactions.length === 0 ? <EmptyState/>: <RelationshipChart />} 
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-5 text-xs text-base-content/60">

              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#244D3F]" />
                <span>Call</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#36A269]" />
                <span>Text</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#7C3AED]" />
                <span>Video</span>
              </div>

            </div>

          </div>
        </section>

      </div>
    </main>
  );
}