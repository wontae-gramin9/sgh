import React from "react";

type PillBadgeProps = {
  color: `${string}-${string}`;
  children: string;
};
export default function PillBadge({ color, children }: PillBadgeProps) {
  return (
    <span
      className={`${
        "bg-" + color
      } rounded-full px-2 py-0.5 text-xs text-background-st`}
    >
      {children}
    </span>
  );
}
