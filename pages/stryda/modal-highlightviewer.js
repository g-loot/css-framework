import React, { useContext, useState } from "react";
import { UiContext } from "@/contexts/ui.js";
import { usePrototypeData } from "@/contexts/prototype";
import dataUsers from "@/mock-data/data-users.js";
import Avatar from "@/components/Avatar/Avatar.js";
import GameIcon from "@/components/GameIcon/GameIcon.js";
import { StatsValorantAgents } from "@/mock-data/data-stats-valorant";
import { StatsValorantRanks } from "@/mock-data/data-stats-valorant";
import { StatsValorantMaps } from "@/mock-data/data-stats-valorant";
import { StatsValorantWeapons } from "@/mock-data/data-stats-valorant";
import ModalShareHighlight from "./modal-sharehighlight";

export default function ModalHighlightViewer(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  const [selectedUser, setSelectedUser] = useState(null);

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
  const getMapByID = (id) => {
    return StatsValorantMaps.find((map) => {
      return map.id === parseInt(id);
    });
  };
  const getWeaponByID = (id) => {
    return StatsValorantWeapons.find((weapon) => {
      return weapon.id === parseInt(id);
    });
  };

  const handleViewMatch = () => {
    window.location.href = `/stryda/activity/${item.id}`;
    uiContext.closeModal();
  };

  function openModalShareHighlight(item) {
    uiContext.closeModal();
    uiContext.openModal(<ModalShareHighlight item={item} />);
  }

  return (
    <>
      {item && (
        <div className="modal rounded-7 max-w-xl">
          <button
            type="button"
            className="button button-tertiary button-close"
            onClick={uiContext.closeModal}
          >
            <span className="icon icon-e-remove" />
          </button>
          <div className="modal-content p-0">
            <div className="modal-body relative">
              <div className="absolute z-10 inset-0 p-4">
                <div className="absolute top-2 right-14">
                  
                </div>
                <div className="absolute bottom-2 right-2 p-1 bg-ui-900/80 backdrop-blur rounded-r-[2rem] rounded-l-2 flex gap-2 items-center">
                  <div
                    className={`rounded px-2 py-1.5 text-xs sm:text-sm leading-none flex gap-2 items-center ${
                      item.stats.hasWon
                        ? " bg-success-500/20 text-success-300"
                        : "bg-error-500/20 text-error-300"
                    }`}
                  >
                    <span>{item.stats.hasWon ? "Victory" : "Defeat"}</span>{" "}
                    <i
                      className={`block h-4 w-px ${
                        item.stats.hasWon
                          ? " bg-success-300/25"
                          : "bg-error-300/25"
                      }`}
                    />{" "}
                    <span>
                      {item.stats.score.team1} - {item.stats.score.team2}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => openModalShareHighlight(item)}
                    className="button button-primary button-sm rounded-full"
                  >
                    <span className="icon icon-network-communication" />
                  </button>
                  <button type="button" onClick={() => handleViewMatch()} className="button button-primary button-sm">
                    <span>View match details</span>
                  </button>
                </div>
                <div className="absolute top-2 left-2 flex items-center gap-4 p-2 pr-4 rounded-r-[1rem] rounded-l-[5rem] bg-gradient-to-r from-ui-900/90 to-ui-900/50 backdrop-blur max-w-xs">
                  <Avatar id={item.user} size="avatar-sm" />
                  <div className="overflow-hidden">
                    <div>
                      <p className="text-ui-100 leading-tight truncate">
                        AI generated text
                      </p>
                    </div>
                    <div className="flex-1 flex items-center gap-2 text-xs text-ui-300">
                      <span>0.5k views</span>
                      <i className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-ui-300" />
                      <span>{item.meta.dateTimeEnded}</span>
                    </div>
                  </div>
                </div>
              </div>
              <video
                autoPlay={true}
                playsInline
                loop
                muted
                preload
                width="100%"
                height="100%"
                className="relative z-0 w-full"
                src={item.meta.media?.url}
              ></video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
