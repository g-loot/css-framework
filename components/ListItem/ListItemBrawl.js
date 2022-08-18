import Link from "next/link";
import ModalClaimDailyRewards from "../../pages/prototype/home/modal-claim-dailyrewards";
import { UiContext } from "../../contexts/ui";
import { useContext } from "react";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";

export default function ListItemBrawl(props) {
  const prototype = usePrototypeData();
  const game = props.game;
  const brawl = props.brawl;
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const hasAds = query.ads === "true" ? true : false;

  function openModalClaimDailyRewards() {
    uiContext.openModal(<ModalClaimDailyRewards></ModalClaimDailyRewards>);
  }

  return (
    <>
      {!props.variant && (
        <li>
          <Link
            href={`${
              brawl.progress !== 3
                ? `/prototype/${game.slug}/brawls/${brawl.id}?tab=solo-leaderboard`
                : "#"
            }${hasAds ? "?ads=true" : ""}`}
          >
            <div
              className={`rounded overflow-hidden surface surface-ui-700 p-2 relative ${
                brawl.progress !== 3 ? "interactive" : ""
              }`}
            >
              {brawl.progress === 3 && (
                <>
                  <div className="absolute inset-0 z-40 bg-ui-700/95 backdrop-blur-sm flex items-center justify-center">
                    <button
                      type="button"
                      className="button button-claim"
                      onClick={openModalClaimDailyRewards}
                    >
                      <span>Claim reward</span>
                    </button>
                  </div>
                </>
              )}

              <div className="relative z-10 leading-tight w-72 lg:w-auto h-24 flex flex-col items-start justify-between">
                <div
                  className={`chip chip-sliced chip-sm ${
                    brawl.status === "ongoing" ? "" : ""
                  } ${brawl.status === "finished" ? "chip-blue" : ""}`}
                >
                  <span>{brawl.status}</span>
                </div>
                <h6 className="mt-2">{brawl.name}</h6>
                <div className="">
                  {brawl.progress === 0 && (
                    <>
                      <span className="text-sm text-ui-300">
                        Position: <span className="font-bold">53</span>
                      </span>
                    </>
                  )}

                  {brawl.progress === 3 && (
                    <>
                      <span className="text-sm text-ui-300">
                        Final osition: <span className="font-bold">53</span>
                      </span>
                    </>
                  )}

                  {brawl.progress > 0 && brawl.progress < 3 && (
                    <>
                      <ul className="step step-quinary w-full max-w-xs gap-2 mt-3">
                        <li>
                          <a href="#">
                            <i />
                            <div></div>
                            <span />
                          </a>
                        </li>
                        <li className="is-active">
                          <a href="#">
                            <i />
                            <div></div>
                            <span />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i />
                            <div></div>
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
                  src={brawl.cover}
                />
              </div>
            </div>
          </Link>
        </li>
      )}
      {props.variant === 2 && (
        <li>
          <Link
            href={`${
              brawl.progress !== 3
                ? `/prototype/${game.slug}/brawls/${brawl.id}?tab=solo-leaderboard`
                : "#"
            }${hasAds ? "?ads=true" : ""}`}
          >
            <div
              className={`rounded overflow-hidden surface surface-ui-700 p-2 relative ${
                brawl.progress !== 3 ? "interactive" : ""
              }`}
            >
              {brawl.progress === 3 && (
                <>
                  <div className="absolute inset-0 z-40 bg-ui-700/95 backdrop-blur-sm flex items-center justify-center">
                    <button
                      type="button"
                      className="button button-claim"
                      onClick={openModalClaimDailyRewards}
                    >
                      <span>Claim reward</span>
                    </button>
                  </div>
                </>
              )}

              <div className="relative z-10 leading-tight w-72 lg:w-auto h-24 flex flex-col items-start justify-between">
                <div
                  className={`chip chip-sliced chip-sm ${
                    brawl.status === "ongoing" ? "" : ""
                  } ${brawl.status === "finished" ? "chip-blue" : ""}`}
                >
                  <span>{brawl.status}</span>
                </div>
                <div className="font-bold mt-2">{brawl.name}</div>
                <div className="">
                  {brawl.progress === 0 && (
                    <>
                      <span className="text-sm text-ui-300">
                        Position: <span className="font-bold">53</span>
                      </span>
                    </>
                  )}

                  {brawl.progress === 3 && (
                    <>
                      <span className="text-sm text-ui-300">
                        Final osition: <span className="font-bold">53</span>
                      </span>
                    </>
                  )}

                  {brawl.progress > 0 && brawl.progress < 3 && (
                    <>
                      <ul className="step step-quinary w-full max-w-xs gap-2 mt-3">
                        <li>
                          <a href="#">
                            <i />
                            <div></div>
                            <span />
                          </a>
                        </li>
                        <li className="is-active">
                          <a href="#">
                            <i />
                            <div></div>
                            <span />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i />
                            <div></div>
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
                  src={brawl.cover}
                />
              </div>
            </div>
          </Link>
        </li>
      )}
    </>
  );
}
