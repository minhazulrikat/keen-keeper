"use client";

import { useInteractions } from "@/Context/InteractionContext";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = {
  call: "#244D3F",
  text: "#36A269",
  video: "#7C3AED",
};

export default function RelationshipChart() {
  const { interactions } = useInteractions();

  const data = [
    {
      name: "Call",
      value: interactions.filter(
        (interaction) => interaction.type === "Call"
      ).length,
      color: COLORS.call,
    },
    {
      name: "Text",
      value: interactions.filter(
        (interaction) => interaction.type === "Text"
      ).length,
      color: COLORS.text,
    },
    {
      name: "Video",
      value: interactions.filter(
        (interaction) => interaction.type === "Video"
      ).length,
      color: COLORS.video,
    },
  ];

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="55%"
            outerRadius="75%"
            paddingAngle={5}
            cornerRadius={8}
            stroke="none"
          >
            {data.map((item) => (
              <Cell
                key={item.name}
                fill={item.color}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}