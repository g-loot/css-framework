import React, { useEffect, useState, useContext } from "react";

import Accordion from "../../../../components/Accordion/Accordion";
import Ad from "../../../../components/Ad/Ad";
import Link from "next/link";
import ListItemLadder from "../../../../components/ListItem/ListItemLadder";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import GameIcon from "../../../../components/GameIcon/GameIcon";
import Slider from "../../../../components/Slider/Slider";
import { UiContext } from "@/contexts/ui";
import AchievementFrame from "../../../../components/Achievements/AchievementFrame";
import AchievementIcon from "../../../../components/Achievements/AchievementIcon";
import ModalAchievementReceived from "../../modal-achievementreceived";
import ModalLevelUp from "../../modal-levelup";
import ProfileHeader from "../header";
import Tooltip from "../../../../components/Tooltip/Tooltip";
import ButtonFeedback from "../../../../components/Button/ButtonFeedback";

const achievementsList = [
  {
    level: 1,
    name: "Mission Expert",
    description: "Complete the entire mission ladder in 1 day.",
    icon: "missionladder",
    percent: 50,
    progress: 12,
    from: "24",
    to: "300 XP",
  },
  {
    level: 2,
    name: "Mission Ladder",
    description: "Complete 30 missions",
    icon: "mission",
    percent: 35,
    progress: 15,
    from: "15",
    to: "30 XP",
  },
  {
    level: 3,
    name: "Streak",
    description: "Reach a 100 days streak",
    icon: "streak",
    percent: 80,
    progress: 10,
    from: "90",
    to: "100 days",
  },
  {
    level: 4,
    name: "Solo Ladder",
    description: "Finish #1 in the Gold League of a solo Ladder",
    icon: "sololadder",
    percent: 0,
    progress: 0,
    from: "0",
    to: "1",
  },
  {
    level: 5,
    name: "Clan Supporter",
    description: "Gift 200 tokens to members of your clan",
    icon: "clansupporter",
    percent: 75,
    progress: 10,
    from: "150",
    to: "200",
  },
  {
    level: 0,
    name: "",
    description: "",
    icon: "",
    percent: 75,
    progress: 10,
    from: "150",
    to: "200",
  },
  {
    level: 0,
    name: "",
    description: "",
    icon: "",
    percent: 75,
    progress: 10,
    from: "150",
    to: "200",
  },
  {
    level: 0,
    name: "",
    description: "",
    icon: "",
    percent: 75,
    progress: 10,
    from: "150",
    to: "200",
  },
];

export default function Home() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const { user_id } = router.query;
  const { query } = useRouter();
  const modalAchievement = query.modalachievement === "true" ? true : false;
  const modalLeveLUp = query.modallevelup === "true" ? true : false;

  useEffect(() => {
    if (modalAchievement) {
      openModalAchievementReceived();
    }
  }, [modalAchievement]);

  function openModalAchievementReceived(item) {
    uiContext.openModal(
      <ModalAchievementReceived item={item} />
    );
  }

  useEffect(() => {
    if (modalLeveLUp) {
      openmodalLeveLUp();
    }
  }, [modalLeveLUp]);

  function openmodalLeveLUp() {
    uiContext.openModal(<ModalLevelUp />);
  }

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(user_id));
  }, [user_id]);

  return (
    <>
      <PrototypeStructure title="Profile">
        <Ad width="1005" height="124" />

        {selectedUser && (
          <>
            <ProfileHeader />

            <section
              className="flex flex-col lg:flex-row gap-4 lg:items-stretch animate-slide-in-bottomNO animate-delay mb-4"
              style={{ "--delay": "calc(2 * 0.05s)" }}
            >
              <div className="flex-1 flex flex-col gap-4 overflow-hidden">
                <div className="surface sm:rounded-lg relative overflow-hidden">
                  <div className="px-3 py-2 border-b border-ui-700 relative z-10 flex-none flex items-center justify-between">
                    <div className="font-bold">
                      {selectedUser.isYou ? (
                        <>10 achievements</>
                      ) : (
                        <>10 achievements </>
                      )}
                    </div>
                    <Link href={`${selectedUser.id}/achievements`}>
                      <a className="link link-hover text-ui-300 text-sm leading-none">
                        View all achievements
                      </a>
                    </Link>
                  </div>
                  <Slider
                    itemWidth={138 + 16 + 16}
                    bgColor="from-ui-800 via-ui-800 to-ui-800/0"
                  >
                    <div className="flex gap-6 py-2 px-6">
                      {achievementsList.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="animate-slide-in-right animate-delay"
                          style={{
                            "--delay": "calc(" + itemIndex + " * 0.05s)",
                          }}
                        >
                          <div
                            className={`w-32 h-32 achievement ${
                              item.level > 0
                                ? "cursor-pointer"
                                : "pointer-events-none"
                            }`}
                            onClick={openModalAchievementReceived.bind(
                              this,
                              item
                            )}
                          >
                            <i />
                            <i />
                            <div
                              className={`achievement-level-${item.level}`}
                              data-tooltip={item.name}
                            >
                              <AchievementFrame
                                url={`https://res.cloudinary.com/gloot/image/upload/v1678871888/Stryda/achievements/frames/achievement-frame-lvl${item.level}-animated.svg`}
                              />
                              {item.level > 0 && (
                                <AchievementIcon
                                  url={`https://res.cloudinary.com/gloot/image/upload/v1674739347/Stryda/achievements/achivement-icon-${item.icon}.svg`}
                                />
                              )}
                            </div>
                            {item.level > 0 && (
                              <span className="text-xs text-ui-300 uppercase">
                                Level {item.level}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Slider>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="surface sm:rounded-lg flex flex-col xl:flex-row items-center">
                    <Slider
                      itemWidth={200 + 16}
                      bgColor="from-ui-800 via-ui-800 to-ui-800/0"
                    >
                      <div className="flex items-center gap-6 px-6 whitespace-nowrap">
                        <img
                          src="https://res.cloudinary.com/gloot/image/upload/v1673941215/Stryda/logos/stryda-logo-ladders-simple.svg"
                          width="auto"
                          height="auto"
                          alt=""
                          className="drop-shadow-xl h-14 flex-none"
                        />
                        <div className="pl-4 border-l border-ui-600">
                          <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                            Number of Ladders played
                          </div>
                          <div className="text-ui-100 text-xl lg:text-3xl">
                            22
                          </div>
                        </div>
                        <div className="pl-4 border-l border-ui-600">
                          <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                            Times in top 50
                          </div>
                          <div className="text-ui-100 text-xl lg:text-3xl">
                            2
                          </div>
                        </div>
                        <div className="pl-4 border-l border-ui-600">
                          <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                            Best placement
                          </div>
                          <div className="text-ui-100 text-xl lg:text-3xl">
                            1
                          </div>
                        </div>
                        <div className="pl-4 border-l border-ui-600">
                          <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                            Most matches in a Ladder
                          </div>
                          <div className="text-ui-100 text-xl lg:text-3xl">
                            16
                          </div>
                        </div>
                        <div className="pl-4 border-l border-ui-600">
                          <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                            Avg. matches / Ladder
                          </div>
                          <div className="text-ui-100 text-xl lg:text-3xl">
                            9.8
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                  <div className="surface sm:rounded-lg flex flex-col xl:flex-row items-center">
                    <Slider
                      itemWidth={200 + 16}
                      bgColor="from-ui-800 via-ui-800 to-ui-800/0"
                    >
                      <div className="flex items-center gap-6 px-6 whitespace-nowrap">
                        <img
                          src="https://res.cloudinary.com/gloot/image/upload/v1673941215/Stryda/logos/stryda-logo-missions-simple.svg"
                          width="auto"
                          height="auto"
                          alt=""
                          className="drop-shadow-xl h-14 flex-none"
                        />
                        <div className="pl-4 border-l border-ui-600">
                          <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                            No. of missions completed
                          </div>
                          <div className="text-ui-100 text-xl lg:text-3xl">
                            143
                          </div>
                        </div>
                        <div className="pl-4 border-l border-ui-600">
                          <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                            Missions / day avg.
                          </div>
                          <div className="text-ui-100 text-xl lg:text-3xl">
                            2.3
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 xl:w-3/7 space-y-4 flex flex-col">
                {/*
                {emptyClan && (
                  <div className="surface sm:rounded-lg">
                    {selectedUser.isYou && (
                      <div className="p-4 flex justify-between gap-3 items-center">
                        <span>You are not in a clan.</span>
                        <Link
                          href={`/prototype/clans/search${prototype.getURLparams()}`}
                        >
                          <button
                            type="button"
                            className="button button-sm button-primary"
                          >
                            <span>Find a clan</span>
                          </button>
                        </Link>
                      </div>
                    )}
                    {!selectedUser.isYou && (
                      <div className="p-4 flex gap-3 items-center">
                        <span className="icon icon-puzzled text-2xl text-ui-400" />
                        <span>
                          {selectedUser.nickname} is not part of a clan.
                        </span>
                      </div>
                    )}
                  </div>
                )}
                {!emptyClan && (
                  <div className="surface sm:rounded-lg">
                    {selectedUser.clan && (
                      <div className="p-2">
                        <div className="text-sm text-ui-300 mb-2 uppercase">
                          Proud member of
                        </div>
                        <Link
                          href={`/prototype/clans/${
                            selectedUser.clan
                          }${prototype.getURLparams()}`}
                        >
                          <div className="rounded surface surface-ui-700 p-2 flex items-center gap-2 interactive">
                            <div className="avatar avatar-sm avatar-squircle">
                              <div>
                                <img
                                  src={
                                    prototype.getClanByID(selectedUser.clan)
                                      .avatar
                                  }
                                  alt="avatar"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="text-xl text-ui-100">
                                &#91;
                                {prototype.getClanByID(selectedUser.clan).tag}
                                &#93;{" "}
                                {
                                  prototype.getClanByID(selectedUser.clan)
                                    .nickname
                                }
                              </div>
                              <div className="text-sm text-ui-300">
                                {
                                  prototype.getClanByID(selectedUser.clan)
                                    .members.length
                                }{" "}
                                members
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )}
                    {!selectedUser.clan && (
                      <div className="p-4 flex gap-3 items-center">
                        <span className="icon icon-puzzled text-2xl text-ui-400" />
                        <span>
                          {selectedUser.nickname} is not part of a clan.
                        </span>
                      </div>
                    )}
                  </div>
                )}
                    */}

                <div className="flex-1 flex flex-col gap-4">
                  <div className="surface sm:rounded-lg">
                    <div className="p-2 border-b border-ui-700">
                      <h2 className="text-xl">Game accounts</h2>
                    </div>
                    <ul className="space-y-1 py-2 pl-4 pr-2">
                      <li className="flex items-center gap-2 text-ui-300">
                        <span className="icon icon-20 icon-riotgames-symbol" />
                        <a
                          className="flex-1 text-sm link link-hover"
                          onClick={() => {
                            uiContext.openToastr({
                              size: "medium",
                              text: "Game tag copied to your clipboard",
                              color: "green",
                              autoDelete: true,
                              autoDeleteDelay: 2500,
                            });
                            navigator.clipboard.writeText("jackattack#2341");
                          }}
                        >
                          jackattack#2341
                        </a>
                        <Tooltip
                          placement="left"
                          tooltip={
                            <div className="max-w-xs text-sm text-center leading-tight">
                              Copy
                            </div>
                          }
                        >
                          <ButtonFeedback
                            variant="button-ghost rounded-full"
                            icon="icon-document-copy"
                            message="Game tag copied to your clipboard"
                          />
                        </Tooltip>
                      </li>
                      <li className="flex items-center gap-2 text-ui-300">
                        <span className="icon icon-20 icon-steam" />
                        <a
                          className="flex-1 text-sm link link-hover"
                          onClick={() => {
                            uiContext.openToastr({
                              size: "medium",
                              text: "Game tag copied to your clipboard",
                              color: "green",
                              autoDelete: true,
                              autoDeleteDelay: 2500,
                            });
                            navigator.clipboard.writeText("PUBG_Player_1");
                          }}
                        >
                          PUBG_Player_1
                        </a>
                        <Tooltip
                          placement="left"
                          tooltip={
                            <div className="max-w-xs text-sm text-center leading-tight">
                              Copy
                            </div>
                          }
                        >
                          <ButtonFeedback
                            variant="button-ghost rounded-full"
                            icon="icon-document-copy"
                            message="Game tag copied to your clipboard"
                          />
                        </Tooltip>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1 flex flex-col surface sm:rounded-lg">
                    <div className="p-2 border-b border-ui-700 flex justify-between items-start">
                      <div>
                        <h2 className="text-xl">Ladders</h2>
                        <span className="text-sm text-ui-300">
                          Showing your latest Solo Ladders
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 relative overflow-hidden">
                      <div className="lg:absolute inset-0 overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto scrollbar-desktop min-h-[200px]">
                        <ul className="space-x-2 lg:space-x-0 lg:space-y-2 p-2 flex lg:block">
                          {prototype.games.map((game, gameIndex) => (
                            <>
                              {game.ladders?.map((ladder, ladderIndex) => (
                                <ListItemLadder
                                  key={ladderIndex}
                                  game={game}
                                  ladder={ladder}
                                />
                              ))}
                            </>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {!selectedUser.stats.gamestats && (
              <section
                className="surface sm:rounded-lg px-4 py-8 text-center animate-slide-in-bottom animate-delay mb-4"
                style={{ "--delay": "calc(3 * 0.05s)" }}
              >
                <div className="max-w-sm mx-auto">
                  <span className="icon icon-mission-roundwon text-8xl text-ui-500" />
                  <div className="mt-2 mb-6">
                    {selectedUser.isYou && (
                      <>
                        <h2 className="text-3xl mb-4">
                          No stats to brag about
                        </h2>
                        <p className=" text-ui-300">
                          Run the{" "}
                          <a href="#" className="link link-main">
                            Stryda app
                          </a>{" "}
                          while you play to track your stat
                        </p>
                      </>
                    )}
                    {!selectedUser.isYou && (
                      <>
                        <h2 className="text-3xl mb-4">
                          No stats to brag about
                        </h2>
                        <p className=" text-ui-300">
                          {selectedUser.nickname} has no stats to brag about.
                          Poor him.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </section>
            )}
            {selectedUser.stats.gamestats && (
              <>
                {selectedUser.stats.gamestats?.map((stat, statIndex) => (
                  <section
                    key={statIndex}
                    className="surface sm:rounded-lg animate-slide-in-bottom animate-delay mb-4"
                    style={{
                      "--delay": "calc(" + statIndex + 4 + " * 0.05s)",
                    }}
                  >
                    <div className="item">
                      <div className="item-image">
                        <GameIcon game={stat.game} />
                      </div>
                      <div className="item-body">
                        <div className="item-title text-xl text-ui-100 uppercase">
                          {prototype.getGameByID(stat.game).name}
                        </div>
                      </div>
                      {/*
                      {prototype.getGameByID(stat.game).slug === "valorant" && (
                        <div className="item-action">
                          <Link href="/prototype/valorant/stats">
                            <a className="link link-hover text-ui-300 text-sm leading-none">
                              View all Valorant stats
                            </a>
                          </Link>
                        </div>
                      )}
                      */}
                    </div>
                    <div className="leading-tight grid grid-cols-2 lg:flex flex-wrap justify-around p-4 gap-4">
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                          Win rate
                        </div>
                        <div className="text-ui-100 text-xl lg:text-3xl">
                          {stat.winrate}
                        </div>
                      </div>
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                          K/D ratio
                        </div>
                        <div className="text-ui-100 text-xl lg:text-3xl">
                          {stat.kdratio}
                        </div>
                      </div>
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                          Headshots kill avg.
                        </div>
                        <div className="text-ui-100 text-xl lg:text-3xl">
                          {stat.headshotkillsavg}
                        </div>
                      </div>
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                          Assist avg.
                        </div>
                        <div className="text-ui-100 text-xl lg:text-3xl">
                          {stat.assistavg}
                        </div>
                      </div>
                    </div>
                    {prototype.getGameByID(stat.game).slug === "valorant" ? (
                      <div className="border-t border-ui-700">
                        <Link href="/prototype/valorant/stats">
                          <div className="item item-interactive">
                            <div className="item-body">
                              <div className="p-2 item-title">
                                All stats (total)
                              </div>
                            </div>
                            <div className="item-actions">
                              <div>
                                <span className="icon icon-24 icon-arrow-sm-right" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ) : (
                      <div className="border-t border-ui-700">
                        <div className="accordion rounded-none">
                          <Accordion
                            header={
                              <>
                                <div className="item">
                                  <div className="item-body">
                                    <div className="p-2 item-title">
                                      All stats (total)
                                    </div>
                                  </div>
                                  <div className="item-actions">
                                    <div>
                                      <span className="icon icon-24 icon-arrow-sm-down" />
                                    </div>
                                  </div>
                                </div>
                              </>
                            }
                          >
                            <div className="grid grid-cols-3 lg:grid-cols-4 items-center gap-2 text-center p-2">
                              <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                                <div className="leading-none text-xs text-ui-300 uppercase">
                                  Assists
                                </div>
                                <div className="font-bold">151</div>
                              </div>
                              <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                                <div className="leading-none text-xs text-ui-300 uppercase">
                                  Kills
                                </div>
                                <div className="font-bold">405</div>
                              </div>
                              <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                                <div className="leading-none text-xs text-ui-300 uppercase">
                                  Deaths
                                </div>
                                <div className="font-bold">570</div>
                              </div>
                              <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                                <div className="leading-none text-xs text-ui-300 uppercase">
                                  Headshot kills
                                </div>
                                <div className="font-bold">144</div>
                              </div>
                              <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                                <div className="leading-none text-xs text-ui-300 uppercase">
                                  Wins
                                </div>
                                <div className="font-bold">35</div>
                              </div>
                              <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                                <div className="leading-none text-xs text-ui-300 uppercase">
                                  Losses
                                </div>
                                <div className="font-bold">24</div>
                              </div>
                              <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                                <div className="leading-none text-xs text-ui-300 uppercase">
                                  Draws
                                </div>
                                <div className="font-bold">1</div>
                              </div>
                            </div>
                          </Accordion>
                        </div>
                      </div>
                    )}
                  </section>
                ))}
              </>
            )}
          </>
        )}
      </PrototypeStructure>
    </>
  );
}
