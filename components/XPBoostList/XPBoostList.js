import React, { useState } from "react";
import { useRouter } from "next/router";

export default function XPBoostList(props) {
  const isAnimated = props.isAnimated || false;
  const { query } = useRouter();
  const isPremium = query.premium === "true" ? true : false;
  const xp = props.xp || 50;
  const size = props.size || "md";
  const type = props.type || "Mission completed";
  const isCompleted = props.isCompleted || true;

  return (
    <ul className={`rounded-lg text-left ${size === "sm" ? 'text-sm' : ''}`}>
      <li
        className={`flex gap-3 py-1 items-center ${
          isAnimated ? "animate-slide-in-bottom animate-delay" : ""
        }`}
        style={{ "--delay": "calc( 2 * 0.15s)" }}
      >
        <span className={`icon icon-check text-main`} />
        <span className="flex-1">{type}</span>
        <span className={`text-right ${isCompleted ? 'text-main' : 'text-ui-400'}`}>{xp} XP</span>
      </li>
      {isPremium ? (
        <li
          className={`flex gap-3 py-1 items-center ${
            isAnimated ? "animate-slide-in-bottom animate-delay" : ""
          }`}
          style={{ "--delay": "calc( 3 * 0.15s)" }}
        >
          <span className={`icon ${isCompleted ? 'text-premium-500 icon-e-add' : 'text-ui-400 icon-e-remove'}`} />
          <span className="flex-1">Premium boost</span>
          <span className={`text-right ${isCompleted ? 'text-premium-500' : 'text-ui-400'}`}>+{Math.round(xp * 0.5)}</span>
        </li>
      ) : (
        <li
          className={`flex gap-3 py-1 items-center ${
            isAnimated ? "animate-slide-in-bottom animate-delay" : ""
          }`}
          style={{ "--delay": "calc( 3 * 0.15s)" }}
        >
          <span className="icon icon-lock text-ui-400" />
          <span className="flex-1 text-ui-400">Premium boost</span>
          <span className="icon icon-crown text-lg text-ui-400" />
          <span className="text-ui-400 text-right">
            +{Math.round(xp * 0.5)}
          </span>
        </li>
      )}
      <li
        className={`flex gap-3 py-1 items-center ${
          isAnimated ? "animate-slide-in-bottom animate-delay" : ""
        }`}
        style={{ "--delay": "calc( 4 * 0.15s)" }}
      >
        <span className={`icon ${isCompleted ? 'text-main icon-e-add' : 'text-ui-400 icon-e-remove'}`} />
        <span className="flex-1">Clan boost</span>
        <span className={`text-right ${isCompleted ? 'text-main' : 'text-ui-400'}`}>+{Math.round(xp * 0.1)}</span>
      </li>
      <li
        className={`flex gap-3 py-1 items-center ${
          isAnimated ? "animate-slide-in-bottom animate-delay" : ""
        }`}
        style={{ "--delay": "calc( 5 * 0.15s)" }}
      >
        <span className={`icon ${isCompleted ? 'text-main icon-e-add' : 'text-ui-400 icon-e-remove'}`} />
        <span className="flex-1">New user boost</span>
        <span className={`text-right ${isCompleted ? 'text-main' : 'text-ui-400'}`}>+{Math.round(xp * 0.05)}</span>
      </li>
    </ul>
  );
}
