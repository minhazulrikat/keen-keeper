"use client";

import EmptyState from "@/Component/EmptyState";
import { useInteractions } from "@/Context/InteractionContext";
import { Phone, MessageCircle, Video } from "lucide-react";
import { useState } from "react";

export default function Timeline() {
  const { interactions } = useInteractions();
  const [filter, setFilter] = useState("all");
  console.log(filter);
  const filteredInteractions = filter === "all" ? interactions : interactions.filter(interaction => interaction.type.toLowerCase() === filter);

  

  return (
    <main className="min-h-[70vh] bg-base-200 px-4 py-8 sm:px-6 lg:py-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-base-content sm:text-3xl">
            Timeline
          </h1>

          <p className="mt-1 text-sm text-base-content/50 sm:text-base">
            Keep track of your recent interactions and meaningful moments.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-4">
          <select
          
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="select select-sm w-full max-w-xs border-base-300 bg-base-100 text-sm"
          >
            <option value="all">All interactions</option>
            <option value="call">Call</option>
            <option value="text">Texts</option>
            <option value="video">Video calls</option>
          </select>
        </div>

       {filteredInteractions.length===0?(
        <EmptyState></EmptyState>
       ):( <div className="space-y-3">
          {filteredInteractions.map((interaction) => {
            const Icon =
              interaction.type === "Call"
                ? Phone
                : interaction.type === "Text"
                  ? MessageCircle
                  : Video;

            return (
              <article
                key={interaction.id}
                className="card border border-base-300 bg-base-100 shadow-sm transition hover:shadow-md"
              >
                <div className="card-body flex-row items-center gap-3 p-4 sm:p-5">
                  {/* Icon */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <p className="text-sm text-base-content sm:text-base">
                      <span className="font-medium">{interaction.type}</span>{" "}
                      <span className="text-base-content/60">
                        with {interaction.person}
                      </span>
                    </p>

                    <p className="mt-0.5 text-xs text-base-content/50 sm:text-sm">
                      {interaction.date}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>)}
       
      </div>
    </main>
  );
}
