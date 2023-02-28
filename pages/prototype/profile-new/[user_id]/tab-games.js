import React, { useEffect, useState, useContext } from "react";

import Ad from "../../../../components/Ad/Ad";
import { UiContext } from "../../../../contexts/ui";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import AchievementFrame from "../../../../components/Achievements/AchievementFrame";
import AchievementIcon from "../../../../components/Achievements/AchievementIcon";
import ModalAchievementReceived from "../../modal-achievementreceived";
import ProfileHeader from "../header";
import Link from "next/link";
import GameIcon from "../../../../components/GameIcon/GameIcon";
import Accordion from "../../../../components/Accordion/Accordion";

export default function TabProfileGames() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const { user_id } = router.query;
  const isEmpty = query.empty === "true" ? true : false;

  const modalAchievement = query.modalachievement === "true" ? true : false;

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(user_id));
  }, [user_id]);

  useEffect(() => {
    if (modalAchievement) {
      openModalAchievementReceived();
    }
  }, [modalAchievement]);

  function openModalAchievementReceived(level, name, icon) {
    uiContext.openModal(
      <ModalAchievementReceived level={level} name={name} icon={icon} />
    );
  }

  return (
    <>
      {selectedUser && (
        <>
          {isEmpty && (
            <>
              <div className="surface rounded-lg px-4 py-8 text-center">
                <div className="max-w-xs mx-auto">
                  <span className="icon icon-smile text-6xl text-ui-500" />
                  <div className="mt-2 mb-6">
                    <p className="text-sm text-ui-400">
                      You have not taken part in any Ladders yet.
                    </p>
                    <p className="text-lg text-ui-300">
                      Play tournaments and competitions to see the history of
                      your earnings.
                    </p>
                  </div>
                  <Link href="/prototype/valorant/ladders">
                    <a className="button button-main">
                      <span>Browse Ladders</span>
                    </a>
                  </Link>
                </div>
              </div>
            </>
          )}
          {!isEmpty && (
            <>
              <section className="grid lg:grid-cols-2 gap-4">
                {selectedUser.games?.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="surface rounded animate-slide-in-bottom animate-delay"
                    style={{ "--delay": "calc(" + itemIndex + " * 0.05s)" }}
                  >
                    <div className="item">
                      <div className="item-image">
                        <GameIcon game={item} />
                      </div>
                      <div className="item-body">
                        <div className="item-title text-xl text-ui-100 uppercase">
                          {prototype.getGameByID(item).name}
                        </div>
                      </div>
                    </div>
                    <div className="leading-tight grid grid-cols-2 lg:flex flex-wrap justify-around p-4 lg:my-8 gap-4">
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                          Win rate
                        </div>
                        <div className="text-ui-100 text-xl lg:text-3xl">
                          {RandomNumber(50, 300)}
                        </div>
                      </div>
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                          K/D ratio
                        </div>
                        <div className="text-ui-100 text-xl lg:text-3xl">
                          {RandomNumber(50, 300)}
                        </div>
                      </div>
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                          Headshots kill avg.
                        </div>
                        <div className="text-ui-100 text-xl lg:text-3xl">
                          {RandomNumber(50, 300)}
                        </div>
                      </div>
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                          Assist avg.
                        </div>
                        <div className="text-ui-100 text-xl lg:text-3xl">
                          {RandomNumber(50, 300)}
                        </div>
                      </div>
                    </div>
                    {prototype.getGameByID(item).slug === "valorant" ? (
                      <div className="border-t border-ui-700 text-center p-3 flex items-center justify-center">
                        <Link href="/prototype/valorant/stats">
                          <button type="button" className="button button-sm button-primary">
                            <span>View all Valorant stats</span>
                          </button>
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
                  </div>
                ))}
              </section>
              {/*
              <div className="text-center mt-4 mb-8">
                <button
                  type="button"
                  className="button button-sm button-primary"
                >
                  <span>Load more</span>
                </button>
              </div>
              */}
            </>
          )}
        </>
      )}
    </>
  );
}
