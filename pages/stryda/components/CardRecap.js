import React, { useEffect, useState, useContext } from "react";
import { dataFeedItems } from "@/mock-data/data-feed";
import { dataMatches } from "@/mock-data/data-matches";
import Tooltip from "@/components/Tooltip/Tooltip";

import Link from "next/link";
import { usePrototypeData } from "@/contexts/prototype";
import { UiContext } from "@/contexts/ui";
import { StatsValorantAgents } from "@/mock-data/data-stats-valorant";
import { StatsValorantRanks } from "@/mock-data/data-stats-valorant";
import { StatsValorantMaps } from "@/mock-data/data-stats-valorant";

export default function CardRecap(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [selectedItem, setSelectedItem] = useState();
  const item = props.item;
  const match = props.match;

  const getAgentByID = (id) => {
    return StatsValorantAgents.find((agent) => {
      return agent.id === parseInt(id);
    });
  };
  const getRankByID = (id) => {
    return StatsValorantRanks.find((rank) => {
      return rank.id === parseInt(id);
    });
  };

  const getGamemodeImage = (gamemode) => {
    let baseUrl =
      "https://res.cloudinary.com/gloot/image/upload/v1695129417/Stryda/stats/valorant/Game_Mode_";
    let endUrl = ".webp";
    var gamemode = gamemode.replace(/\s+/g, "_");
    return baseUrl + gamemode + endUrl;
  };

  const getMapByID = (id) => {
    return StatsValorantMaps.find((map) => {
      return map.id === parseInt(id);
    });
  };

  function openFeedItemDetailsMatch(target) {
    uiContext.openModal(
      <ModalFeedItemViewer
        item={item}
        selectedTab={target ? target : "default"}
      />
    );
  }

  return (
    <>
      {item && match && (
        <li className={`card-recap ${props.isInactive ? 'is-inactive' : ''}`}>
          <div className="card-image">
            <div className="card-game">
              <span className="icon icon-game-valorant-symbol text-game-valorant" />
            </div>
            <div className="card-date">{match.meta.dateTimeEnded}</div>
            <div className="card-user">
              <div className="avatar avatar-simple avatar-xs">
                <div>
                  <img
                    src={getAgentByID(match.meta.agent).picturePath}
                    alt=""
                  />
                </div>
              </div>
              <span>{getAgentByID(match.meta.agent).name}</span>
            </div>
            <div className="card-meta">
            <img src={getGamemodeImage(match.meta.mode)} alt="" />
                <span>{match.meta.mode}</span>
                <span>{getMapByID(match.meta.map).name}</span>
            </div>
            <img
              src={getMapByID(match.meta.map).picturePath}
              alt=""
            />
            {props.imageOverlay && <div className="card-overlay">{props.imageOverlay}</div>}
          </div>
          <div className="card-content">
            {props.rigthContent && <>{props.rigthContent}</>}
          </div>
          {props.actionContent && <div className="card-action">{props.actionContent}</div>}
        </li>
      )}
    </>
  );
}
