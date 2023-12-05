import Countdown from "../Countdown/Countdown";
import Link from "next/link";
import ModalClaimLadderRewards from "@/pages/stryda/home/modal-claim-dailyrewards";
import { UiContext } from "@/contexts/ui";
import { useContext } from "react";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";

export default function ListItemLadder(props) {
  const prototype = usePrototypeData();
  const game = props.game;
  const ladder = props.ladder;
  const uiContext = useContext(UiContext);

  function openModalClaimLadderRewards() {
    uiContext.openModal(<ModalClaimLadderRewards></ModalClaimLadderRewards>);
  }

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <>
      {!props.variant && (
        <li>
          <Link
            href={`${
              ladder.progress !== 3
                ? `/prototype/${game.slug}/ladders/${ladder.id}?tab=solo-leaderboard`
                : "#"
            }${prototype.getURLparams("&")}`}
          >
            <div
              className={`rounded overflow-hidden surface surface-ui-700 p-2 relative ${
                ladder.progress !== 3 ? "interactive" : ""
              }`}
            >
              {ladder.progress === 3 && (
                <>
                  <div className="absolute inset-0 z-40 bg-ui-700/95 backdrop-blur-sm flex items-center justify-center">
                    <button
                      type="button"
                      className="button button-claim"
                      onClick={openModalClaimLadderRewards}
                    >
                      <span className="icon icon-present animate-bounce" />
                      <span>Claim rewards</span>
                    </button>
                  </div>
                  <div className="absolute z-50 top-2 right-2 p-1 rounded bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                    <span
                      className={`icon text-xl ${
                        prototype.getGameByID(game.id).slug === "apexlegends"
                          ? "icon-game-apexlegends-symbol text-game-apexlegends"
                          : ""
                      } ${
                        prototype.getGameByID(game.id).slug === "csgo"
                          ? "icon-game-csgo-symbol text-game-csgo"
                          : ""
                      }  ${
                        prototype.getGameByID(game.id).slug === "dota2"
                          ? "icon-game-dota2-symbol text-game-dota2"
                          : ""
                      }  ${
                        prototype.getGameByID(game.id).slug ===
                        "leagueoflegends"
                          ? "icon-game-leagueoflegends-symbol text-game-leagueoflegends"
                          : ""
                      }  ${
                        prototype.getGameByID(game.id).slug === "rocketleague"
                          ? "icon-game-rocketleague-symbol text-game-rocketleague"
                          : ""
                      } ${
                        prototype.getGameByID(game.id).slug === "pubg"
                          ? "icon-game-pubg-symbol text-game-pubg"
                          : ""
                      }  ${
                        prototype.getGameByID(game.id).slug === "valorant"
                          ? "icon-game-valorant-symbol text-game-valorant"
                          : ""
                      }`}
                    />
                  </div>
                </>
              )}

              <div className="relative z-10 leading-tight w-72 lg:w-auto h-24 flex flex-col items-start justify-between">
                <div
                  className={`chip chip-sliced chip-sm ${
                    ladder.status === "ongoing" ? "" : ""
                  } ${ladder.status === "finished" ? "chip-blue" : ""}`}
                >
                  <span>{ladder.status}</span>
                </div>
                <h6 className="mt-2 text-lg">{ladder.name}</h6>
                <div className="">
                  {ladder.progress === 0 && (
                    <>
                      <span className="text-sm text-ui-300">
                        Position:{" "}
                        <span className="font-bold">
                          #{ladder.soloResults?.placement}
                        </span>
                      </span>
                    </>
                  )}

                  {ladder.progress === 3 && (
                    <>
                      <span className="text-sm text-ui-300">
                        Final position:{" "}
                        <span className="font-bold">
                          #{ladder.soloResults?.placement}
                        </span>
                      </span>
                    </>
                  )}

                  {ladder.progress > 0 && ladder.progress < 3 && (
                    <>
                      <ul className="step step-quinary w-full max-w-xs gap-2 mt-3">
                        <li>
                          <a href="#">
                            <i />
                            <div />
                            <span />
                          </a>
                        </li>
                        <li className="is-active">
                          <a href="#">
                            <i />
                            <div />
                            <span />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i />
                            <div />
                            <span />
                          </a>
                        </li>
                      </ul>
                    </>
                  )}
                </div>
              </div>
              <div className="absolute z-20 top-2 right-2 p-1 rounded bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                <span
                  className={`icon text-xl ${
                    prototype.getGameByID(game.id).slug === "apexlegends"
                      ? "icon-game-apexlegends-symbol text-game-apexlegends"
                      : ""
                  } ${
                    prototype.getGameByID(game.id).slug === "csgo"
                      ? "icon-game-csgo-symbol text-game-csgo"
                      : ""
                  }  ${
                    prototype.getGameByID(game.id).slug === "dota2"
                      ? "icon-game-dota2-symbol text-game-dota2"
                      : ""
                  }  ${
                    prototype.getGameByID(game.id).slug === "leagueoflegends"
                      ? "icon-game-leagueoflegends-symbol text-game-leagueoflegends"
                      : ""
                  }  ${
                    prototype.getGameByID(game.id).slug === "rocketleague"
                      ? "icon-game-rocketleague-symbol text-game-rocketleague"
                      : ""
                  } ${
                    prototype.getGameByID(game.id).slug === "pubg"
                      ? "icon-game-pubg-symbol text-game-pubg"
                      : ""
                  }  ${
                    prototype.getGameByID(game.id).slug === "valorant"
                      ? "icon-game-valorant-symbol text-game-valorant"
                      : ""
                  }`}
                />
              </div>
              <div className="absolute z-0 right-0 inset-y-0 w-1/2">
                <div className="absolute z-10 inset-0 bg-gradient-to-r from-ui-700 to-ui-700/50"></div>
                <img
                  className="absolute z-0 object-right object-cover xl:object-cover inset-0 w-full h-full"
                  src={ladder.cover}
                />
              </div>
            </div>
          </Link>
        </li>
      )}
      {props.variant === 2 && (
        <li className="flex items-stretch min-w-xs xl:min-w-[0px]">
          <Link
            href={`${
              ladder.progress !== 3
                ? `/prototype/${game.slug}/ladders/${ladder.id}?tab=solo-leaderboard`
                : "#"
            }${prototype.getURLparams("&")}`}
          >
            <div
              className={`flex flex-1 rounded overflow-hidden surface surface-ui-700 p-2 relative ${
                ladder.progress !== 3 ? "interactive" : ""
              }`}
            >
              {ladder.progress === 3 && (
                <>
                  <div className="absolute inset-0 z-40 bg-ui-700/95 backdrop-blur-sm flex items-center justify-center">
                    <button
                      type="button"
                      className="button button-claim"
                      onClick={openModalClaimLadderRewards}
                    >
                      <span className="icon icon-present animate-bounce" />
                      <span>Claim rewards</span>
                    </button>
                  </div>
                  <div className="absolute z-50 top-2 right-2 p-1 rounded bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                    <span
                      className={`icon text-xl ${
                        prototype.getGameByID(game.id).slug === "apexlegends"
                          ? "icon-game-apexlegends-symbol text-game-apexlegends"
                          : ""
                      } ${
                        prototype.getGameByID(game.id).slug === "csgo"
                          ? "icon-game-csgo-symbol text-game-csgo"
                          : ""
                      }  ${
                        prototype.getGameByID(game.id).slug === "dota2"
                          ? "icon-game-dota2-symbol text-game-dota2"
                          : ""
                      }  ${
                        prototype.getGameByID(game.id).slug ===
                        "leagueoflegends"
                          ? "icon-game-leagueoflegends-symbol text-game-leagueoflegends"
                          : ""
                      }  ${
                        prototype.getGameByID(game.id).slug === "rocketleague"
                          ? "icon-game-rocketleague-symbol text-game-rocketleague"
                          : ""
                      } ${
                        prototype.getGameByID(game.id).slug === "pubg"
                          ? "icon-game-pubg-symbol text-game-pubg"
                          : ""
                      }  ${
                        prototype.getGameByID(game.id).slug === "valorant"
                          ? "icon-game-valorant-symbol text-game-valorant"
                          : ""
                      }`}
                    />
                  </div>
                </>
              )}

              <div className="relative z-10 leading-tight flex-1 flex flex-col items-stretch justify-between space-y-2">
                <h6 className="text-xl">{ladder.name}</h6>
                <div className="flex gap-2 items-end">
                  <div className="flex-1 flex gap-3 items-end">
                    
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-sm text-ui-300">
                          Top spot reward
                        </div>
                        <div className="flex gap-4 items-center">
                          {ladder.rewards?.map((reward, rewardIndex) => (
                            <>
                              {reward.type === "coin" && (
                                <div className="flex items-center text-currency-1-500 gap-2">
                                  <span className="icon text-lg icon-coin" />
                                  <span>{numberWithSpaces(reward.value)}</span>
                                </div>
                              )}
                              {reward.type === "token" && (
                                <div className="flex items-center text-currency-2-500 gap-2">
                                  <span className="icon text-lg icon-token" />
                                  <span>{numberWithSpaces(reward.value)}</span>
                                </div>
                              )}
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                    {ladder.result && (
                      <div className="flex items-center gap-3">
                        <div className="leading-none flex items-baseline gap-1">
                          <span>#</span>
                          <span className="text-xl">
                            42
                          </span>
                        </div>
                        <div
                          className={`hidden leading-none text-center -space-y-1 ${
                            ladder.soloResults?.isPositive
                              ? "text-success-500 -mt-1"
                              : "text-error-300 -mb-1"
                          }`}
                        >
                          {ladder.soloResults?.isPositive && (
                            <span className="icon icon-arrow-sm-up" />
                          )}
                          <div>{ladder.soloResults?.movement}</div>
                          {!ladder.soloResults?.isPositive && (
                            <span className="icon icon-arrow-sm-down" />
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="chip chip-xs chip-secondary">
                    <span className="icon icon-time-machine text-sm" />
                    <span>
                      <Countdown
                        separator={"  "}
                        hasDays={false}
                        hasHours={true}
                        hasMinutes={true}
                        hasSeconds={true}
                        hasLabels={true}
                        labelsAbbr={true}
                        labelClassName="text-sm mr-1"
                        className="text-sm"
                      />
                    </span>
                  </div>
                </div>

                {/*

                {ladder.progress > 0 && ladder.progress < 3 && (
                  <>
                    <ul className="step step-quinary w-full gap-2 mt-3">
                      <li>
                        <a href="#">
                          <i />
                          <div />
                          <span />
                        </a>
                      </li>
                      <li className="is-active">
                        <a href="#">
                          <i />
                          <div />
                          <span />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i />
                          <div />
                          <span />
                        </a>
                      </li>
                    </ul>
                  </>
                )}

                */}
              </div>
              <div className="absolute z-20 top-2 right-2 p-1 rounded bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                <span
                  className={`icon text-xl ${
                    prototype.getGameByID(game.id).slug === "apexlegends"
                      ? "icon-game-apexlegends-symbol text-game-apexlegends"
                      : ""
                  } ${
                    prototype.getGameByID(game.id).slug === "csgo"
                      ? "icon-game-csgo-symbol text-game-csgo"
                      : ""
                  }  ${
                    prototype.getGameByID(game.id).slug === "dota2"
                      ? "icon-game-dota2-symbol text-game-dota2"
                      : ""
                  }  ${
                    prototype.getGameByID(game.id).slug === "leagueoflegends"
                      ? "icon-game-leagueoflegends-symbol text-game-leagueoflegends"
                      : ""
                  }  ${
                    prototype.getGameByID(game.id).slug === "rocketleague"
                      ? "icon-game-rocketleague-symbol text-game-rocketleague"
                      : ""
                  } ${
                    prototype.getGameByID(game.id).slug === "pubg"
                      ? "icon-game-pubg-symbol text-game-pubg"
                      : ""
                  }  ${
                    prototype.getGameByID(game.id).slug === "valorant"
                      ? "icon-game-valorant-symbol text-game-valorant"
                      : ""
                  }`}
                />
              </div>
              <div className="absolute z-0 right-0 inset-y-0 w-1/2">
                <div className="absolute z-10 inset-0 bg-gradient-to-r from-ui-700 to-ui-700/50"></div>
                <img
                  className="absolute z-0 object-right object-cover xl:object-cover inset-0 w-full h-full"
                  src={ladder.cover}
                />
              </div>
            </div>
          </Link>
        </li>
      )}
    </>
  );
}
