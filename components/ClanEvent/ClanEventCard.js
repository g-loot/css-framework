import React, { useContext, useState, useEffect } from "react";
import GameIcon from "../GameIcon/GameIcon";
import Link from "next/link";
import ResetsIn from "../Countdown/ResetsIn";
import AvatarClan from "../Avatar/AvatarClan";
import { VariablesContext } from "@/contexts/variables";
import { usePrototypeData } from "@/contexts/prototype";
import Tooltip from "../Tooltip/Tooltip";

const ClanEventCard = (props) => {
  const variablesContext = useContext(VariablesContext);
  const prototype = usePrototypeData();
  const item = props.item || undefined;
  const itemIndex = props.key || 1;
  const game = props.game || "valorant";
  const [video, setVideo] = useState(null);

  useEffect(() => {
    setVideo(document.getElementById(`video_${item.id}`));
  }, [item]);

  function handleVideoPlay() {
    if (video) {
      video.play();
    }
  }
  function handleVideoPause() {
    if (video) {
      video.pause();
    }
  }

  return (
    <>
      {item && (
        <Link href={`/prototype/${game}/clanevents/${item.id}`}>
          <button
            type="button"
            className="w-full surface sm:rounded overflow-hidden interactive animate-slide-in-bottom animate-delay"
            style={{
              "--delay": "calc(" + itemIndex + " * 0.05s)",
            }}
          >
            <div className="h-44 relative w-full flex items-center justify-center overflow-hidden">
              <div className="absolute z-20 top-2 left-2 rounded bg-ui-800/90 p-0.5 pr-3 flex gap-2 items-center text-sm text-ui-200">
                <GameIcon game={prototype.defaultGameID} />
                <span>{item.meta.gameMode}</span>
                <span
                  className={`capitalize ${
                    item.status === "ongoing" ? "text-blue-500" : ""
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <img
                src={item.logo}
                alt={item.name}
                className="relative z-10 max-w-[280px] max-h-[150px] h-auto w-auto"
              />
              {item.video ? (
                <div className="absolute z-0 inset-0 grid place-content-center bg-ui-900/95">
                  <video
                    autoPlay={true}
                    playsInline
                    loop
                    muted
                    preload
                    width="100%"
                    height="100%"
                    id={`video_${item.id}`}
                    className="w-full"
                    src={`${item.video}#t=1`}
                  >
                    <img src={item.bg} />
                  </video>
                </div>
              ) : (
                <img
                  src={item.bg}
                  alt={item.name}
                  className="absolute inset-0 z-0 object-cover w-full h-full"
                />
              )}
            </div>
            <div className="border-t border-ui-700 p-4">
              <div className="flex flex-wrap gap-2 items-center">
                <h2 className="h4">{item.name}</h2>
                {item.status === "ongoing" && (
                  <div className="chip chip-secondary">
                    <span className="text-main animate-pulse">Enrolled</span>
                  </div>
                )}
              </div>
              <div className="mt-3 flex flex-wrap gap-2 items-center text-sm">
                {item.meta?.eligibility ? (
                  <>
                    <span>
                      3 out of 5 party members have to be from the{" "}
                      <Tooltip
                        tooltip={
                          <ul className="max-w-xs text-sm text-ui-200 leading-tight normal-case space-y-2">
                            {item.meta?.eligibility?.countries.map(
                              (country, countryIndex) => (
                                <li
                                  key={countryIndex}
                                  className="whitespace-nowrap pr-1 flex items-center gap-2"
                                >
                                  <img
                                    src={`https://flagcdn.com/${country.flag}.svg`}
                                    className="inline rounded-[1px] h-3.5 w-auto mx-0.5 -translate-y-px"
                                  />{" "}
                                  <span>{country.name}</span>
                                </li>
                              )
                            )}
                          </ul>
                        }
                      >
                        <span className="interactive">
                          <span className="underline">Nordic countries</span>{" "}
                          <button className="text-ui-300 text-0 translate-y-0.5">
                            <span className="icon icon-16 icon-c-info" />
                          </button>
                        </span>
                      </Tooltip>
                    </span>
                    {item.meta.eligibility.ranks && (
                      <div className="border-l border-ui-700 pl-1 flex flex-wrap gap-1 items-center">
                        {item.meta.eligibility.ranks &&
                          item.meta.eligibility.ranks?.map(
                            (rank, rankIndex) => (
                              <Tooltip
                                key={rankIndex}
                                placement="top"
                                tooltip={rank.name}
                              >
                                <img
                                  src={rank.image}
                                  className="inline w-7 h-7 object-contain object-center"
                                />
                              </Tooltip>
                            )
                          )}
                      </div>
                    )}
                  </>
                ) : (
                  <span>Everyone can enter</span>
                )}
              </div>
              <div className="flex flex-col xl:flex-row gap-2 xl:gap-4 xl:items-center xl:justify-between border-t border-ui-700 mt-4 pt-4">
                <div className="flex-1 flex flex-col md:flex-row gap-2 lg:gap-4 lg:items-center">
                  <div
                    className={`flex flex-col md:flex-row md:gap-4 md:items-center ${
                      item.status === "upcoming"
                        ? "flex-1"
                        : "lg:pr-4 lg:border-r border-ui-600"
                    }`}
                  >
                    <div className="flex items-center whitespace-nowrap gap-1">
                      <span className="icon icon-coin text-currency-1-500" />
                      <span className="text-currency-1-500 text-sm">
                        5 000 - 30 000
                      </span>
                      <span className="mx-2">+</span>
                      <span className="icon icon-present" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:gap-4 md:items-center">
                    {item.status === "finished" ? (
                      <div className="text-sm text-ui-300">
                        Ended on April 23
                      </div>
                    ) : (
                      <div className="flex text-sm text-ui-300 gap-1 items-center whitespace-nowrap">
                        <ResetsIn
                          label={item.status === "upcoming" ? "Starts" : "Ends"}
                        />
                      </div>
                    )}
                  </div>
                </div>
                {item.status === "ongoing" ? (
                  <div className="flex flex-0 xl:justify-end">
                    {variablesContext.clanLeaderboardEnrolled ? (
                      <div className="flex items-center gap-4">
                        <AvatarClan id={1} />
                        <div className="infobanner is-active">
                          <div className="flex gap-2 infobanner-front">
                            <div>
                              <div className="uppercase text-xs text-ui-300">
                                Points
                              </div>
                              <div className="text-sm">523</div>
                            </div>
                            <div>
                              <div className="uppercase text-xs text-ui-300">
                                Position
                              </div>
                              <div className="text-sm">#7</div>
                            </div>
                          </div>
                          <div className="infobanner-back absolute inset-0 flex items-center text-sm">
                            <div className="animate-pulse text-ui-100 leading-none">
                              Waiting for matches...
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="avatar-group -space-x-2">
                            {prototype
                              .getCurrentClanLeaderboard(game)
                              .leaderboard.slice(0, 3)
                              .map((clan, clanIndex) => (
                                <div
                                  key={clanIndex}
                                  className="avatar avatar-squircle avatar-tiny"
                                >
                                  <div>
                                    <img
                                      src={
                                        prototype.getClanByID(clan.clan).avatar
                                      }
                                      alt="avatar"
                                    />
                                  </div>
                                </div>
                              ))}
                          </div>
                          <span className="text-sm text-ui-300">
                            234{" "}
                            {item.status === "ongoing" ? (
                              <> are enrolled</>
                            ) : (
                              <>have partaken</>
                            )}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </button>
        </Link>
      )}
    </>
  );
};

export default ClanEventCard;
