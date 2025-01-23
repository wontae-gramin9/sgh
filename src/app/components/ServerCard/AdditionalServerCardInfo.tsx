import React from "react";
import { IoEarth, IoGameControllerSharp } from "react-icons/io5";

import { PiLetterCircleVFill } from "react-icons/pi";
import { CardType } from "@/app/types/Card";
import PillBadge from "../Badge/PillBadge";

export default function AdditionalServerCardInfo(props: { card: CardType }) {
  const { card } = props;
  const { version, type, region, mods } = card;

  return (
    <div className="flex flex-col items-center gap-2 text-sm">
      <div className="max-w-32">
        <p>
          <PiLetterCircleVFill className="inline" /> {version}
        </p>
        <p>
          <IoGameControllerSharp className="inline" /> {type}
        </p>
        <p>
          <IoEarth className="inline" /> {region}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-1 text-xs">
        {mods.map((mod) => (
          <PillBadge key={mod} color="secondary-li">
            {mod}
          </PillBadge>
        ))}
      </div>
    </div>
  );
}
