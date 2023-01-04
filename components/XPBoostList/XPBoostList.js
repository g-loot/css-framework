import React, { useState } from "react";
import { useRouter } from "next/router";

export default function XPBoostList(props) {
  const isAnimated = props.isAnimated || false;
  const { query } = useRouter();
  const isPremium = query.premium === "true" ? true : false;
  const xp = props.xp || 50;
  const size = props.size || "md";
  const type = props.type || "Mission completed";

  return (
    <ul className={`rounded-lg text-left ${size === "sm" ? 'text-sm' : ''}`}>
      <li
        className={`flex gap-3 py-1 items-center ${
          isAnimated ? "animate-slide-in-bottom animate-delay" : ""
        }`}
        style={{ "--delay": "calc( 2 * 0.15s)" }}
      >
        <span className="icon icon-check text-main" />
        <span className="flex-1">{type}</span>
        <span className="text-main text-right">{xp} XP</span>
      </li>
      {isPremium ? (
        <li
          className={`flex gap-3 py-1 items-center ${
            isAnimated ? "animate-slide-in-bottom animate-delay" : ""
          }`}
          style={{ "--delay": "calc( 3 * 0.15s)" }}
        >
          <span className="icon icon-e-add text-main" />
          <span className="flex-1">Premium boost</span>
          <span className="text-main text-right">+50%</span>
        </li>
      ) : (
        <li
          className={`flex gap-3 py-1 items-center ${
            isAnimated ? "animate-slide-in-bottom animate-delay" : ""
          }`}
          style={{ "--delay": "calc( 3 * 0.15s)" }}
        >
          <span className="icon icon-e-remove text-ui-400" />
          <span className="flex-1 text-ui-400 line-through">Premium boost</span>
          <span className="text-ui-400 line-through text-right">
            +50%
          </span>
        </li>
      )}
      <li
        className={`flex gap-3 py-1 items-center ${
          isAnimated ? "animate-slide-in-bottom animate-delay" : ""
        }`}
        style={{ "--delay": "calc( 4 * 0.15s)" }}
      >
        <span className="icon icon-e-add text-main" />
        <span className="flex-1">Clan boost</span>
        <span className="text-main text-right">+10%</span>
      </li>
      <li
        className={`flex gap-3 py-1 items-center ${
          isAnimated ? "animate-slide-in-bottom animate-delay" : ""
        }`}
        style={{ "--delay": "calc( 5 * 0.15s)" }}
      >
        <span className="icon icon-e-add text-main" />
        <span className="flex-1">New user boost</span>
        <span className="text-main text-right">+5%</span>
      </li>
    </ul>
  );
}
