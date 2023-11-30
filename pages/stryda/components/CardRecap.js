import React, { useEffect, useState, useContext } from "react";
import { dataFeedItems } from "@/mock-data/data-feed";
import { dataMatches } from "@/mock-data/data-matches";
import Tooltip from "@/components/Tooltip/Tooltip";

import Link from "next/link";
import { usePrototypeData } from "@/contexts/prototype";
import { UiContext } from "@/contexts/ui";

export default function CardRecap({
  itemID,
  matchID,
  imageOverlay,
  rigthContent,
  actionContent,
}) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [selectedItem, setSelectedItem] = useState();
  const item = itemID || 0;
  const match = matchID || 0;

  useEffect(() => {
    setSelectedItem(prototype.getFeedItemByID(itemID));
  }, [itemID]);

  return (
    <>
      {selectedItem && (
        <li className="card-recap">
          <div className="card-image">
            <div className="card-game">
              <span className="icon icon-game-valorant-symbol text-game-valorant" />
            </div>
            <div className="card-date">4 min. ago</div>
            <div className="card-user">
              <div className="avatar avatar-simple avatar-xs">
                <div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/Stryda/stats/valorant/agent-avatar-cypher.webp"
                    alt=""
                  />
                </div>
              </div>
              <span>Cypher</span>
            </div>
            <div className="card-meta">
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1695129417/Stryda/stats/valorant/Game_Mode_Competitive.webp"
                alt=""
              />
              <span>Competitive</span>
              <span>Haven</span>
            </div>
            <img
              src="https://res.cloudinary.com/gloot/image/upload/Stryda/stats/valorant/map-piazza.jpg"
              alt=""
            />
            {imageOverlay && <div className="card-overlay">{imageOverlay}</div>}
          </div>
          <div className="card-content">
            {rigthContent && <>{rigthContent}</>}
          </div>
          {actionContent && <div className="card-action">{actionContent}</div>}
        </li>
      )}
    </>
  );
}
