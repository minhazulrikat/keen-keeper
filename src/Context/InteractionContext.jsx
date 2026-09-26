"use client";

import { createContext, useContext, useState } from "react";

const InteractionContext = createContext();
export const InteractionProvider = ({ children }) => {
  const [interactions, setInteractions] = useState([]);

  const addInteraction = ({ friendId, person, type }) => {
    console.log(friendId,person,type,"from context")
    const newInteraction = {
      id: Date.now(),
      friendId,
      person,
      type,
      date: new Date().toISOString(),
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
