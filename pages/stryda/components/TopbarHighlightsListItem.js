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
import Tooltip from "@/components/Tooltip/Tooltip";
import Link from "next/link";
import CardRecap from "./CardRecap";
import PremiumLogo from "@/components/PremiumLogo/PremiumLogo";

export default function TopbarHighlightsListItem({
  item,
  itemIndex,
  id,
  isAlreadyProcessed,
  onLoad,
  onTab,
  processingID,
  processingCopy,
  processingStatus,
  processingPercent,
}) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [isReady, setIsReady] = useState(false);
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

  useEffect(() => {
    const interval = setTimeout(() => {
      setIsReady(true);
    }, 8000);
    return () => {
      clearTimeout(interval);
    };
  }, []);

  const handleAutomate = () => {
    onLoad(id);
  };

  const handleChangeTab = (tab) => {
    onTab(tab);
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
  const getGamemodeImage = (gamemode) => {
    let baseUrl =
      "https://res.cloudinary.com/gloot/image/upload/v1695129417/Stryda/stats/valorant/Game_Mode_";
    let endUrl = ".webp";
    var gamemode = gamemode.replace(/\s+/g, "_");
    return baseUrl + gamemode + endUrl;
  };

  const handleRightContent = () => {
    if (!prototype.isPremium && itemIndex === 0) {
      return (
        <>
          <h5>Check it out Stryda Recap videos!</h5>
          <p>This is an example of a recap video</p>
        </>
      );
    }
    if (!prototype.isPremium && itemIndex > 0) {
      return (
        <>
          <div className="flex-1 flex items-center justify-center">
            <h5>Recording ready</h5>
          </div>
          <Tooltip tooltip="Get Premium to create a recap of this match">
            <button
              type="button"
              disabled
              className="flex-1 button button-sm button-secondary"
            >
              <span>Create recap</span>
            </button>
          </Tooltip>
        </>
      );
    }
  };
  const handleActionContent = () => {
    if (!prototype.isPremium && itemIndex === 0) {
      return (
        <button
          type="button"
          className="group surface flex items-center px-6 py-3 gap-4 interactive rounded-b"
        >
          <PremiumLogo
            src="https://res.cloudinary.com/gloot/image/upload/v1672241197/Stryda/logos/stryda-premium-logo-main-white-animated.svg"
            width="145"
            height="auto"
            className="mx-auto"
          />
          <p className="flex-1 text-sm leading-tight">
            Get recaps of <b className="text-ui-100">your best moments</b> in
            your favorite games - automatically!
          </p>
          <span className="icon icon-ctrl-right text-premium-500 group-hover:translate-x-1 group-hover:text-ui-100 transition-all ease-in-out duration-150" />
        </button>
      );
    }
  };
  const handleImageOverlay = () => {
    if (!prototype.isPremium && itemIndex === 0) {
      return (
        <button
          type="button"
          class="button button-primary button-lg rounded-full"
        >
          <span class="icon icon-triangle-right" />
        </button>
      );
    }
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
        <>
          <CardRecap
            item={item}
            match={selectedMatch}
            isInactive={!prototype.isPremium && itemIndex > 0}
            actionContent={handleActionContent()}
            imageOverlay={handleImageOverlay()}
            rigthContent={handleRightContent()}
          />
          <li className="card-recap !hidden">
            <div className="card-image">
              <div className="card-game">
                <span className="icon icon-game-valorant-symbol text-game-valorant" />
              </div>
              <div className="card-date">
                {selectedMatch.meta.dateTimeEnded}
              </div>
              <div className="card-user">
                <div className="avatar avatar-simple avatar-xs">
                  <div>
                    <img
                      src={getAgentByID(selectedMatch.meta.agent).picturePath}
                      alt=""
                    />
                  </div>
                </div>
                <span>{getAgentByID(selectedMatch.meta.agent).name}</span>
              </div>
              <div className="card-meta">
                <img src={getGamemodeImage(selectedMatch.meta.mode)} alt="" />
                <span>{selectedMatch.meta.mode}</span>
                <span>{getMapByID(selectedMatch.meta.map).name}</span>
              </div>
              <img
                src={getMapByID(selectedMatch.meta.map).picturePath}
                alt=""
              />
              <div className="card-overlay"></div>
            </div>
            <div className="card-content">
              {/* {id === processingID && processingStatus === "processing" && (
              <div
                className="progresscontainer"
                style={{ "--percent": processingPercent }}
              >
                <div>
                  <div className="text-2xl font-bold">{processingPercent}%</div>
                  <div className="text-xs uppercase my-1">{processingCopy}</div>
                  <span className="text-xs whitespace-normal px-2">
                    Do not close Stryda during this process
                  </span>
                </div>
                <div>
                  <div className="text-2xl font-bold">{processingPercent}%</div>
                  <div className="text-xs uppercase my-1">{processingCopy}</div>
                  <span className="text-xs whitespace-normal px-2">
                    Do not close Stryda during this process
                  </span>
                </div>
              </div>
            )}
            {!isReady &&
              (!isProcessed || !isAlreadyProcessed) &&
              (id === 12 || id === 15) && (
                <div className="absolute z-20 inset-0 bg-ui-500 flex flex-col items-center justify-center text-center whitespace-normal text-sm p-2">
                  <div className="infobanner is-active w-full">
                    <div className="infobanner-front">
                      <span className="text-center">
                        Preparing video for AI
                      </span>
                    </div>
                    <div className="infobanner-back justify-center">
                      <span className="text-center">Please wait...</span>
                    </div>
                  </div>
                </div>
              )}
            {isReady && (!isProcessed || !isAlreadyProcessed) && id === 15 && (
              <div className="absolute z-20 inset-0 bg-ui-500 flex flex-col items-center justify-center text-center whitespace-normal text-sm p-2">
                <div className="text-sm text-ui-100 mb-1">
                  Not enough content
                </div>
                <p className="text-xs">
                  The AI needs at least 3 moments in order to create the
                  highlight.
                </p>
              </div>
            )}
            {itemIndex === 2 && (
              <div className="absolute z-20 inset-0 bg-ui-500 flex flex-col items-center justify-center text-center whitespace-normal text-sm p-2">
                <div className="text-sm text-ui-100 mb-1">
                  Recording removed
                </div>
                <p className="text-xs">
                  Recording of this match have been deleted to make room for new
                  matches. Manage allocated space in the{" "}
                  <button
                    type="button"
                    className="link"
                    onClick={() => handleChangeTab("settings")}
                  >
                    Highlight settings
                  </button>{" "}
                  tab.
                </p>
              </div>
            )}
            {isProcessed || isAlreadyProcessed ? (
              <>
                <button
                  type="button"
                  className={`button button-sm ${
                    isProcessed
                      ? "button-success is-shining"
                      : "button-secondary"
                  }`}
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
                  onClick={() => handleAutomate()}
                >
                  <span>Automate with AI</span>
                </button>
                <Link href={`/stryda/editor${prototype.getURLparams()}`}>
                  <button
                    type="button"
                    disabled={processingStatus === "processing"}
                    className="button button-sm button-secondary"
                  >
                    <span>Customize</span>
                  </button>
                </Link>
              </>
            )} */}
            </div>
          </li>
          {/* <li
          className={`surface-ui-500 rounded flex items-stretch animate-delay overflow-hidden ${
            isProcessed ? "animate-scale-in" : "animate-slide-in-right"
          }`}
          style={{
            "--delay": "calc(" + itemIndex + " * 0.05s)",
          }}
        >
          {itemIndex === 1 &&
            id === processingID &&
            processingStatus === "finished" && (
              <div className="absolute z-40 inset-0 backdrop-blur-sm bg-ui-600/95 text-center flex flex-col items-center justify-center p-2">
                <div className="flex gap-2 items-center text-error-500 animate-shake">
                  <span className="icon icon-warning-sign" />
                  <div className="text-sm">Creation failed</div>
                </div>
                <p className="text-xs">
                  Oh no! For some reason the creation of your highlight failed.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    type="button"
                    className="button button-primary button-sm"
                    onClick={() => handleAutomate()}
                  >
                    <span>Try again</span>
                  </button>
                  <button
                    type="button"
                    className="button button-secondary button-sm"
                  >
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            )}
          <div
            className={`flex-1 flex justify-between items-stretch border-r border-ui-400/20 relative overflow-hidden h-28 text-xs text-ui-100 leading-none ${
              isAlreadyProcessed ? "child:opacity-30 [&>img]:opacity-5" : ""
            }`}
          >
            <div className="absolute top-2 left-2 z-40">
              <GameIcon game={selectedMatch.meta.game} size="text-sm" />
            </div>
            <div className="relative z-30 flex-1 flex flex-col justify-end items-start gap-2 p-2 text-left">
              <div className="avatar avatar-simple avatar-xs">
                <div>
                  <img
                    src={getAgentByID(selectedMatch.meta.agent).picturePath}
                    alt=""
                  />
                </div>
              </div>
              <div className="uppercase font-bold text-base truncate w-full">
                {getAgentByID(selectedMatch.meta.agent).name}
              </div>
            </div>
            <div className="relative z-30 flex-1 flex flex-col justify-between items-end gap-1 p-2 text-right">
              <div className="text-ui-200">
                {selectedMatch.meta.dateTimeEnded}
              </div>
              <div className="flex flex-col items-end">
                <img
                  src={getGamemodeImage(selectedMatch.meta.mode)}
                  alt=""
                  className="h-6 w-6 mb-1.5"
                />
                <div className="capitalize text-ui-200">
                  {selectedMatch.meta.mode}
                </div>
                <div className="font-bold capitalize">
                  {getMapByID(selectedMatch.meta.map).name}
                </div>
              </div>
            </div>
            <span className="absolute z-20 inset-0 bg-gradient-to-b from-ui-800/20 via-ui-800/20 to-ui-800/60" />
            <img
              className="absolute z-0 inset-0 h-full w-full object-cover opacity-50"
              src={getMapByID(selectedMatch.meta.map).picturePath}
              alt=""
              width="auto"
              height="auto"
            />
          </div>
          <div className="relative w-44 flex flex-col items-stretch justify-center gap-1.5 leading-none rounded-r overflow-hidden p-2 whitespace-nowrap bg-gradient-to-r from-ui-600 to-ui-500">
            {id === processingID && processingStatus === "processing" && (
              <div
                className="progresscontainer"
                style={{ "--percent": processingPercent }}
              >
                <div>
                  <div className="text-2xl font-bold">{processingPercent}%</div>
                  <div className="text-xs uppercase my-1">{processingCopy}</div>
                  <span className="text-xs whitespace-normal px-2">
                    Do not close Stryda during this process
                  </span>
                </div>
                <div>
                  <div className="text-2xl font-bold">{processingPercent}%</div>
                  <div className="text-xs uppercase my-1">{processingCopy}</div>
                  <span className="text-xs whitespace-normal px-2">
                    Do not close Stryda during this process
                  </span>
                </div>
              </div>
            )}
            {!isReady &&
              (!isProcessed || !isAlreadyProcessed) &&
              (id === 12 || id === 15) && (
                <div className="absolute z-20 inset-0 bg-ui-500 flex flex-col items-center justify-center text-center whitespace-normal text-sm p-2">
                  <div className="infobanner is-active w-full">
                    <div className="infobanner-front">
                      <span className="text-center">
                        Preparing video for AI
                      </span>
                    </div>
                    <div className="infobanner-back justify-center">
                      <span className="text-center">Please wait...</span>
                    </div>
                  </div>
                </div>
              )}
            {isReady && (!isProcessed || !isAlreadyProcessed) && id === 15 && (
              <div className="absolute z-20 inset-0 bg-ui-500 flex flex-col items-center justify-center text-center whitespace-normal text-sm p-2">
                <div className="text-sm text-ui-100 mb-1">
                  Not enough content
                </div>
                <p className="text-xs">
                  The AI needs at least 3 moments in order to create the
                  highlight.
                </p>
              </div>
            )}
            {itemIndex === 2 && (
              <div className="absolute z-20 inset-0 bg-ui-500 flex flex-col items-center justify-center text-center whitespace-normal text-sm p-2">
                <div className="text-sm text-ui-100 mb-1">
                  Recording removed
                </div>
                <p className="text-xs">
                  Recording of this match have been deleted to make room for new
                  matches. Manage allocated space in the{" "}
                  <button
                    type="button"
                    className="link"
                    onClick={() => handleChangeTab("settings")}
                  >
                    Highlight settings
                  </button>{" "}
                  tab.
                </p>
              </div>
            )}
            {isProcessed || isAlreadyProcessed ? (
              <>
                <button
                  type="button"
                  className={`button button-sm ${
                    isProcessed
                      ? "button-success is-shining"
                      : "button-secondary"
                  }`}
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
                  onClick={() => handleAutomate()}
                >
                  <span>Automate with AI</span>
                </button>
                <Link href={`/stryda/editor${prototype.getURLparams()}`}>
                  <button
                    type="button"
                    disabled={processingStatus === "processing"}
                    className="button button-sm button-secondary"
                  >
                    <span>Customize</span>
                  </button>
                </Link>
              </>
            )}
          </div>
        </li> */}
        </>
      )}
    </>
  );
}
