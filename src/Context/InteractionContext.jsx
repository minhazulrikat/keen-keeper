"use client";

import { createContext, useContext, useState } from "react";

const InteractionContext = createContext();
export const InteractionProvider = ({ children }) => {
  const [interactions, setInteractions] = useState([]);

  const addInteraction = ({ friendId, person, type }) => {
    const newInteraction = {
      id: Date.now(),
      friendId,
      person,
      type,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };

    setInteractions((prev) => [newInteraction, ...prev]);
  };
  return (
    <InteractionContext.Provider
      value={{
        interactions,
        addInteraction,
      }}
    >
      {children}
    </InteractionContext.Provider>
  );
};

export function useInteractions() {
  return useContext(InteractionContext);
}
