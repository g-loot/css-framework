import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { dataMatches } from "@/mock-data/data-matches";
import { StatsValorantAgents } from "@/mock-data/data-stats-valorant";
import { StatsValorantMaps } from "@/mock-data/data-stats-valorant";
import { StatsValorantRanks } from "@/mock-data/data-stats-valorant";
import { StatsValorantWeapons } from "@/mock-data/data-stats-valorant";
import { StatsLeagueOfLegendsChampions } from "@/mock-data/data-stats-leagueoflegends";
import { StatsLeagueOfLegendsRanks } from "@/mock-data/data-stats-leagueoflegends";
import { StatsLeagueOfLegendsSpells } from "@/mock-data/data-stats-leagueoflegends";
import { StatsLeagueOfLegendsItems } from "@/mock-data/data-stats-leagueoflegends";
import GameIcon from "@/components/GameIcon/GameIcon";
import ModalHighlightViewer from "../modal-highlightviewer";
import ModalFeedItemViewer from "../modal-feeditemdetailsviewer";

export default function TopbarHighlightsListItem({
  item,
  delay,
  id,
  isAlreadyProcessed,
  onLoad,
  processingID,
  processingStatus,
  processingPercent,
}) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [isProcessed, setIsProcessed] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState();

  useEffect(() => {
    setSelectedMatch(prototype.getMatchByID(item.itemID));
  }, [item]);

  useEffect(() => {
    if (id === processingID && processingStatus === "finished") {
      setIsProcessed(true);
    }
  }, [processingStatus]);

  const handleClick = () => {
    onLoad(id);
  };

  const getMatchByID = (id) => {
    return dataMatches.find((match) => {
      return match.id === parseInt(id);
    });
  };
  const getAgentByID = (id) => {
    return StatsValorantAgents.find((agent) => {
      return agent.id === parseInt(id);
    });
  };
  const getValorantRankByID = (id) => {
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
  const getChampionByID = (id) => {
    return StatsLeagueOfLegendsChampions[id];
  };
  const getItemByID = (id) => {
    return StatsLeagueOfLegendsItems[id];
  };
  const getSpellByID = (id) => {
    return StatsLeagueOfLegendsSpells[id];
  };
  const getLoLRankByID = (id) => {
    return StatsLeagueOfLegendsRanks.find((rank) => {
      return rank.id === parseInt(id);
    });
  };

  function openModalHighlightViewer(match) {
    uiContext.openModal(<ModalHighlightViewer item={match} />);
  }

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
      {item && selectedMatch && (
        <li
          className={`surface-ui-500 rounded flex items-stretch animate-delay animate-slide-in-right`}
          style={{
            "--delay": "calc(" + delay + " * 0.05s)",
          }}
        >
          <div
            className={`flex-1 flex flex-col gap-1 p-2 justify-between border-r border-ui-400/20 ${
              isAlreadyProcessed ? "child:opacity-30" : ""
            } ${isAlreadyProcessed ? "child:opacity-30" : ""}`}
          >
            <div className="flex items-center gap-2 text-sm leading-none">
              <GameIcon game={selectedMatch.meta.game} size="text-sm" />
              <span
                className={`uppercase ${
                  selectedMatch.stats.hasWon ? " text-success-300" : "text-error-300"
                }`}
              >
                {selectedMatch.stats.hasWon ? "Victory" : "Defeat"}
              </span>
              <span className="text-ui-100">
                {selectedMatch.stats.score.team1} - {selectedMatch.stats.score.team2}
              </span>
              <span className="text-right text-xs flex-1 text-ui-300">
                {selectedMatch.meta.dateTimeEnded}
              </span>
            </div>
            <div className="flex items-center">
              <div className="avatar avatar-xs avatar-simple">
                <div>
                  <img
                    src={getAgentByID(selectedMatch.meta.agent).picturePath}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="avatar-group space-x-1.5">
                  {selectedMatch.stats.leaderboard.team1
                    .slice(0, 4)
                    .map((agent, agentIndex) => (
                      <>
                        <div
                          key={agentIndex}
                          className="avatar avatar-tiny avatar-simple"
                        >
                          <div>
                            <img
                              src={getAgentByID(agent.agent).picturePath}
                              alt=""
                            />
                          </div>
                        </div>
                      </>
                    ))}
                </div>
              </div>
            </div>
            <div className="text-xs capitalize text-ui-300">
              <span className="text-ui-100 uppercase">
                {getAgentByID(selectedMatch.meta.agent).name}
              </span>{" "}
              • {selectedMatch.meta.mode} • {getMapByID(selectedMatch.meta.map).name}
            </div>
          </div>
          <div className="relative w-40 flex flex-col items-stretch justify-center gap-1.5 leading-none rounded-r overflow-hidden p-2 whitespace-nowrap bg-gradient-to-r from-ui-600 to-ui-500">
            {id === processingID && processingStatus === "processing" && (
              <div
                className="progresscontainer"
                style={{ "--percent": processingPercent }}
              >
                <div>
                  <div className="text-2xl font-bold">{processingPercent}%</div>
                  <div className="text-sm">Analysing</div>
                  <span className="text-xs whitespace-normal px-2">
                    Keep Stryda open.
                  </span>
                </div>
                <div>
                  <div className="text-2xl font-bold">{processingPercent}%</div>
                  <div className="text-sm">Analysing</div>
                  <span className="text-xs whitespace-normal px-2">
                    Keep Stryda open.
                  </span>
                </div>
              </div>
            )}
            {isProcessed || isAlreadyProcessed ? (
              <>
                <button
                  type="button"
                  className={`button button-sm ${isProcessed ? 'button-success is-shining' : 'button-secondary'}`}
                  onClick={() => openFeedItemDetailsMatch("highlight")}
                >
                  {isProcessed && (
                    <span className="icon icon-circle-caret-right animate-bounce-right" />
                  )}
                  <span>View highlight</span>
                </button>
              </>
            ) : (
              <>
                <div
                  className={`text-xs text-center ${
                    processingStatus === "processing" ? "text-ui-400" : ""
                  }`}
                >
                  Create highlight reel
                </div>
                <button
                  type="button"
                  disabled={processingStatus === "processing"}
                  className="button button-sm button-primary"
                  onClick={() => handleClick()}
                >
                  <span>Automate with AI</span>
                </button>
                {/* <button
                  type="button"
                  disabled={processingStatus === "processing"}
                  className="button button-sm button-secondary"
                >
                  <span>Customize</span>
                </button> */}
              </>
            )}
          </div>
        </li>
      )}
    </>
  );
}
