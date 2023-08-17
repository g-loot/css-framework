import React, { useEffect, useState, useContext } from "react";

import Ad from "@/components/Ad/Ad";
import { UiContext } from "@/contexts/ui";
import PrototypeStructure from "@/components/Prototype/PrototypeStructure";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import AchievementFrame from "@/components/Achievements/AchievementFrame";
import AchievementIcon from "@/components/Achievements/AchievementIcon";
import ModalAchievementReceived from "../../modal-achievementreceived";
import ProfileHeader from "../header";
import Link from "next/link";
import GameIcon from "@/components/GameIcon/GameIcon";
import Accordion from "@/components/Accordion/Accordion";

export default function TabProfileStats() {
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

  function openModalAchievementReceived(item) {
    uiContext.openModal(<ModalAchievementReceived item={item} />);
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
                      You have not entered any Ladders yet.
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
              <div
                className="surface accordion accordion-highlighted mb-4 animate-slide-in-bottom animate-delay"
                style={{ "--delay": "calc( 0 * 0.05s)" }}
              >
                <Accordion
                  header={
                    <div className="item rounded px-4 py-8">
                      <div className="item-body leading-tight grid grid-cols-2 lg:flex flex-wrap justify-around flex-1 gap-4">
                        <div className="pl-4 border-l border-ui-600">
                          <div className="text-xs lg:text-sm text-ui-200 uppercase">
                            Ladders played
                          </div>
                          <div className="text-ui-100 text-xl lg:text-3xl">
                            523
                          </div>
                          <div className="text-xs lg:text-sm text-ui-300">
                            Top 25%
                          </div>
                        </div>
                        <div className="pl-4 border-l border-ui-600">
                          <div className="text-xs lg:text-sm text-ui-200 uppercase">
                            Avg. placement
                          </div>
                          <div className="text-ui-100 text-xl lg:text-3xl">
                            #42
                          </div>
                          <div className="text-xs lg:text-sm text-ui-300">
                            Top 18%
                          </div>
                        </div>
                        <div className="pl-4 border-l border-ui-600">
                          <div className="text-xs lg:text-sm text-ui-200 uppercase">
                            Times in top 50
                          </div>
                          <div className="text-ui-100 text-xl lg:text-3xl">
                            4
                          </div>
                          <div className="text-xs lg:text-sm text-ui-300">
                            Top 11%
                          </div>
                        </div>
                        <div className="pl-4 border-l border-ui-600">
                          <div className="text-xs lg:text-sm text-ui-200 uppercase">
                            Missions completed
                          </div>
                          <div className="text-ui-100 text-xl lg:text-3xl">
                            123
                          </div>
                          <div className="text-xs lg:text-sm text-ui-300">
                            Top 4.5%
                          </div>
                        </div>
                      </div>
                      <div className="item-actions">
                        <div>
                          <span className="icon icon-24 icon-arrow-sm-down" />
                        </div>
                      </div>
                    </div>
                  }
                >
                  <div className="flex flex-wrap text-center leading-tight items-stretch justify-center p-4 divide-x divide-ui-600 gap-y-4">
                    <div className="rounded px-8 py-4 whitespace-nowrap">
                      <div className="text-sm uppercase text-ui-200">
                        Best placement
                      </div>
                      <div className="text-xl lg:text-2xl text-ui-100">
                        #{RandomNumber(1, 10)}
                      </div>
                    </div>
                    <div className="rounded px-8 py-4 whitespace-nowrap">
                      <div className="text-sm uppercase text-ui-200">
                        Most matches in a Ladder
                      </div>
                      <div className="text-xl lg:text-2xl text-ui-100">
                        {RandomNumber(20, 30)}
                      </div>
                    </div>
                    <div className="rounded px-8 py-4 whitespace-nowrap">
                      <div className="text-sm uppercase text-ui-200">
                        Avg. matches per Ladder
                      </div>
                      <div className="text-xl lg:text-2xl text-ui-100">
                        {RandomNumber(1, 10)}
                      </div>
                    </div>
                    <div className="rounded px-8 py-4 whitespace-nowrap">
                      <div className="text-sm uppercase text-ui-200">
                        Avg. Missions per day
                      </div>
                      <div className="text-xl lg:text-2xl text-ui-100">
                        {RandomNumber(2, 4)}
                      </div>
                    </div>
                  </div>
                </Accordion>
              </div>
              <section className="grid lg:grid-cols-2 gap-4">
                {selectedUser.games?.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="surface rounded animate-slide-in-bottom animate-delay"
                    style={{
                      "--delay":
                        "calc(" + Math.round(itemIndex + 1) + " * 0.05s)",
                    }}
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
                    <div className="leading-tight grid grid-cols-2 lg:flex flex-wrap justify-between p-4 lg:my-8 gap-4 child:border-l child:border-l-ui-600">
                      {prototype.getGameByID(item).demo?.mainStats ? (
                        <>
                          {prototype.getGameByID(item).demo?.mainStats.map(
                            (stat, statIndex) => (
                              <div key={statIndex} className="pl-4">
                                <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                                  {stat.label}
                                </div>
                                <div className="text-ui-100 text-xl lg:text-3xl">
                                  {stat.value}
                                </div>
                              </div>
                            )
                          )}
                        </>
                      ) : (
                        <>
                          <div className="pl-4">
                            <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                              Win rate
                            </div>
                            <div className="text-ui-100 text-xl lg:text-3xl">
                              {RandomNumber(50, 300)}
                            </div>
                          </div>
                          <div className="pl-4">
                            <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                              K/D ratio
                            </div>
                            <div className="text-ui-100 text-xl lg:text-3xl">
                              {RandomNumber(50, 300)}
                            </div>
                          </div>
                          <div className="pl-4">
                            <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                              Headshots kill avg.
                            </div>
                            <div className="text-ui-100 text-xl lg:text-3xl">
                              {RandomNumber(50, 300)}
                            </div>
                          </div>
                          <div className="pl-4">
                            <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                              Assist avg.
                            </div>
                            <div className="text-ui-100 text-xl lg:text-3xl">
                              {RandomNumber(50, 300)}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    {prototype.getGameByID(item).hasAPI ? (
                      <div className="border-t border-ui-700 text-center p-3 flex items-center justify-center">
                        <Link
                          href={`/prototype/${
                            prototype.getGameByID(item).slug
                          }/stats`}
                        >
                          <button
                            type="button"
                            className="button button-sm button-primary"
                          >
                            <span>
                              View all {prototype.getGameByID(item).name} stats
                            </span>
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
                            <div className="flex flex-wrap text-left leading-tight items-stretch p-4 child:border-l child:border-l-ui-600 gap-y-4">
                              <div className="rounded px-8 py-4 whitespace-nowrap">
                                <div className="text-sm uppercase text-ui-200">
                                  Kills
                                </div>
                                <div className="text-xl lg:text-2xl text-ui-100">
                                  {RandomNumber(500, 1000)}
                                </div>
                              </div>
                              <div className="rounded px-8 py-4 whitespace-nowrap">
                                <div className="text-sm uppercase text-ui-200">
                                  Deaths
                                </div>
                                <div className="text-xl lg:text-2xl text-ui-100">
                                  {RandomNumber(500, 900)}
                                </div>
                              </div>
                              <div className="rounded px-8 py-4 whitespace-nowrap">
                                <div className="text-sm uppercase text-ui-200">
                                  Assists
                                </div>
                                <div className="text-xl lg:text-2xl text-ui-100">
                                  {RandomNumber(50, 500)}
                                </div>
                              </div>
                              <div className="rounded px-8 py-4 whitespace-nowrap">
                                <div className="text-sm uppercase text-ui-200">
                                  Headshot kills
                                </div>
                                <div className="text-xl lg:text-2xl text-ui-100">
                                  {RandomNumber(100, 300)}
                                </div>
                              </div>
                              <div className="rounded px-8 py-4 whitespace-nowrap">
                                <div className="text-sm uppercase text-ui-200">
                                  Wins
                                </div>
                                <div className="text-xl lg:text-2xl text-ui-100">
                                  {RandomNumber(30, 50)}
                                </div>
                              </div>
                              <div className="rounded px-8 py-4 whitespace-nowrap">
                                <div className="text-sm uppercase text-ui-200">
                                  Losses
                                </div>
                                <div className="text-xl lg:text-2xl text-ui-100">
                                  {RandomNumber(20, 40)}
                                </div>
                              </div>
                              <div className="rounded px-8 py-4 whitespace-nowrap text-center">
                                <div className="text-sm uppercase text-ui-200">
                                  Draws
                                </div>
                                <div className="text-xl lg:text-2xl text-ui-100">
                                  {RandomNumber(3, 10)}
                                </div>
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
