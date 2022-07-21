import React, { useEffect, useState } from "react";

import Accordion from "../../../components/Accordion/Accordion";
import Ad from "../../../components/Ad/Ad";
import Link from "next/link";
import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";

//import DataGames from '../../mock-data/games.json'

export default function Home() {
  const router = useRouter();
  const prototypeData = usePrototypeData();
  const [selectedUser, setSelectedUser] = useState(null);
  const hasAds = router.ads === "true" ? true : false;
  const { user_id } = router.query;

  useEffect(() => {
    setSelectedUser(prototypeData.getUserByID(user_id));
  }, [user_id]);

  return (
    <>
      <PrototypeStructure title="Profile">
        <Ad width="1005" height="124" />

        {selectedUser && (
          <>
            <section className="flex items-center justify-between mb-4 py-8 px-4 sm:px-0">
              <div className="flex gap-4 items-center">
                <figure className="avatar avatar-xl avatar-circle">
                  <div>
                    <img src={selectedUser.avatar} />
                  </div>
                </figure>
                <div className="">
                  <div className="flex flex-col sm:flex-row gap-3 mb-3">
                    <h2 className="h3 leading-none">{selectedUser.nickname}</h2>
                    {selectedUser.isYou && (
                      <Link href="settings">
                        <a
                          type="button"
                          className="button button-sm button-secondary"
                        >
                          <span className="icon icon-cogwheel" />
                          <span>Profile settings</span>
                        </a>
                      </Link>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 flex justify-center">
                      <img
                        src={`https://flagcdn.com/${selectedUser.countryFlag}.svg`}
                        className="aspect-video rounded-sm max-w-[1.5rem]"
                      />
                    </div>
                    <span className="text-ui-300">{selectedUser.country}</span>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-75 text-ui-300 hover:text-main flex items-center gap-2"
                  >
                    <div className="w-6 flex justify-center">
                      <span className="icon icon-20 icon-twitch" />
                    </div>
                    <span>{selectedUser.socials.twitch}</span>
                  </a>
                </div>
              </div>

              <div className="w-1/3 hidden xl:flex justify-center gap-4">
                <div className="rounded-full surface p-1">
                  <div className="progressbar-radial">
                    <div>
                      <div>
                        <div className="text-3xl font-headings mb-1">{selectedUser.stats.playedBrawls}</div>
                        <div className="text-xs text-ui-300 uppercase">
                          Played
                          <br />
                          brawls
                        </div>
                      </div>
                    </div>
                    <svg viewBox="0 0 40 40" style={{ "--percent": "33" }}>
                      <circle cx="20" cy="20" r="16" />
                    </svg>
                  </div>
                </div>
                <div className="rounded-full surface p-1">
                  <div className="progressbar-radial">
                    <div>
                      <div>
                        <div className="text-3xl font-headings mb-1">{selectedUser.stats.playedTournaments}</div>
                        <div className="text-xs text-ui-300 uppercase">
                          Played
                          <br />
                          tournaments
                        </div>
                      </div>
                    </div>
                    <svg viewBox="0 0 40 40" style={{ "--percent": "15" }}>
                      <circle cx="20" cy="20" r="16" />
                    </svg>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="flex flex-col lg:flex-row gap-4 lg:items-start animate-slide-in-bottom animate-delay"
              style={{ "--delay": "calc( 1 * 0.05s)" }}
            >
              <div className="flex-1 space-y-4">
                <div className="surface sm:rounded-lg w-full">
                  <div className="item">
                    <div className="item-image">
                      <div
                        className={`rounded h-12 w-12 flex items-center justify-center bg-gradient-to-b from-ui-900/50 to-ui-900/0 aspect-square text-game-valorant`}
                      >
                        <span
                          className={`icon text-2xl icon-game-valorant-symbol`}
                        />
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title font-headings not-italic text-xl text-ui-100 uppercase">
                        Valorant
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                      <div className="text-center border-r border-ui-700/50">
                        <div
                          className="animate-slide-in-bottom animate-delay"
                          style={{ "--delay": "calc( 2 * 0.05s)" }}
                        >
                          <div className="icon-holder icon-holder-sm mx-auto">
                            <span className="icon icon-mission-gamematchbattlewon" />
                          </div>
                          <div>
                            <div className="leading-none text-xs text-ui-300 uppercase">
                              WIN RATE
                            </div>
                            <div className="text-2xl font-headings">25%</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center border-r border-ui-700/50">
                        <div
                          className="animate-slide-in-bottom animate-delay"
                          style={{ "--delay": "calc( 3 * 0.05s)" }}
                        >
                          <div className="icon-holder icon-holder-sm mx-auto">
                            <span className="icon icon-mission-kill" />
                          </div>
                          <div>
                            <div className="leading-none text-xs text-ui-300 uppercase">
                              K/D ratio
                            </div>
                            <div className="text-2xl font-headings">0.71</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center border-r border-ui-700/50">
                        <div
                          className="animate-slide-in-bottom animate-delay"
                          style={{ "--delay": "calc( 4 * 0.05s)" }}
                        >
                          <div className="icon-holder icon-holder-sm mx-auto">
                            <span className="icon icon-mission-headshot" />
                          </div>
                          <div>
                            <div className="leading-none text-xs text-ui-300 uppercase">
                              Headshots kill avg
                            </div>
                            <div className="text-2xl font-headings">2.5</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div
                          className="animate-slide-in-bottom animate-delay"
                          style={{ "--delay": "calc( 5 * 0.05s)" }}
                        >
                          <div className="icon-holder icon-holder-sm mx-auto">
                            <span className="icon icon-mission-assist" />
                          </div>
                          <div>
                            <div className="leading-none text-xs text-ui-300 uppercase">
                              Assist avg
                            </div>
                            <div className="text-2xl font-headings">3.1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-ui-700">
                    <div className="accordion rounded-none">
                      <Accordion
                        header={
                          <>
                            <div className="item">
                              <div className="item-body">
                                <div className="p-2 item-title font-headings text-lg italic">
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
                            <div className="text-2xl font-headings">151</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                            <div className="leading-none text-xs text-ui-300 uppercase">
                              Kills
                            </div>
                            <div className="text-2xl font-headings">405</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                            <div className="leading-none text-xs text-ui-300 uppercase">
                              Deaths
                            </div>
                            <div className="text-2xl font-headings">570</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                            <div className="leading-none text-xs text-ui-300 uppercase">
                              Headshot kills
                            </div>
                            <div className="text-2xl font-headings">144</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                            <div className="leading-none text-xs text-ui-300 uppercase">
                              Wins
                            </div>
                            <div className="text-2xl font-headings">35</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                            <div className="leading-none text-xs text-ui-300 uppercase">
                              Losses
                            </div>
                            <div className="text-2xl font-headings">24</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                            <div className="leading-none text-xs text-ui-300 uppercase">
                              Draws
                            </div>
                            <div className="text-2xl font-headings">1</div>
                          </div>
                        </div>
                      </Accordion>
                    </div>
                  </div>
                </div>
                <div className="surface sm:rounded-lg w-full">
                  <div className="item">
                    <div className="item-image">
                      <div
                        className={`rounded h-12 w-12 flex items-center justify-center bg-gradient-to-b from-ui-900/50 to-ui-900/0 aspect-square text-game-pubg`}
                      >
                        <span
                          className={`icon text-2xl icon-game-pubg-symbol`}
                        />
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title font-headings not-italic text-xl text-ui-100 uppercase">
                        PUBG: BATTLEGROUNDS
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                      <div className="text-center border-r border-ui-700/50">
                        <div
                          className="animate-slide-in-bottom animate-delay"
                          style={{ "--delay": "calc( 2 * 0.05s)" }}
                        >
                          <div className="icon-holder icon-holder-sm mx-auto">
                            <span className="icon icon-mission-gamematchbattlewon" />
                          </div>
                          <div>
                            <div className="leading-none text-xs text-ui-300 uppercase">
                              WIN RATE
                            </div>
                            <div className="text-2xl font-headings">25%</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center border-r border-ui-700/50">
                        <div
                          className="animate-slide-in-bottom animate-delay"
                          style={{ "--delay": "calc( 3 * 0.05s)" }}
                        >
                          <div className="icon-holder icon-holder-sm mx-auto">
                            <span className="icon icon-mission-kill" />
                          </div>
                          <div>
                            <div className="leading-none text-xs text-ui-300 uppercase">
                              K/D ratio
                            </div>
                            <div className="text-2xl font-headings">0.71</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center border-r border-ui-700/50">
                        <div
                          className="animate-slide-in-bottom animate-delay"
                          style={{ "--delay": "calc( 4 * 0.05s)" }}
                        >
                          <div className="icon-holder icon-holder-sm mx-auto">
                            <span className="icon icon-mission-headshot" />
                          </div>
                          <div>
                            <div className="leading-none text-xs text-ui-300 uppercase">
                              Headshots kill avg
                            </div>
                            <div className="text-2xl font-headings">2.5</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div
                          className="animate-slide-in-bottom animate-delay"
                          style={{ "--delay": "calc( 5 * 0.05s)" }}
                        >
                          <div className="icon-holder icon-holder-sm mx-auto">
                            <span className="icon icon-mission-assist" />
                          </div>
                          <div>
                            <div className="leading-none text-xs text-ui-300 uppercase">
                              Assist avg
                            </div>
                            <div className="text-2xl font-headings">3.1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-ui-700">
                    <div className="accordion rounded-none">
                      <Accordion
                        header={
                          <>
                            <div className="item">
                              <div className="item-body">
                                <div className="p-2 item-title font-headings text-lg italic">
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
                            <div className="text-2xl font-headings">151</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                            <div className="leading-none text-xs text-ui-300 uppercase">
                              Kills
                            </div>
                            <div className="text-2xl font-headings">405</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                            <div className="leading-none text-xs text-ui-300 uppercase">
                              Deaths
                            </div>
                            <div className="text-2xl font-headings">570</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                            <div className="leading-none text-xs text-ui-300 uppercase">
                              Headshot kills
                            </div>
                            <div className="text-2xl font-headings">144</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                            <div className="leading-none text-xs text-ui-300 uppercase">
                              Wins
                            </div>
                            <div className="text-2xl font-headings">35</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                            <div className="leading-none text-xs text-ui-300 uppercase">
                              Losses
                            </div>
                            <div className="text-2xl font-headings">24</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                            <div className="leading-none text-xs text-ui-300 uppercase">
                              Draws
                            </div>
                            <div className="text-2xl font-headings">1</div>
                          </div>
                        </div>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 space-y-4">
                <div className="surface sm:rounded-lg">
                  <div className="p-1 border-b border-ui-700 flex justify-between">
                    <h2 className="p-2 text-xl not-italic">Weekly Brawls</h2>
                  </div>
                  <div className="max-h-60 overflow-y-auto scrollbar-desktop">
                    <ul>
                      <li className="item item-interactive">
                        <div className="item-image">
                          <figure className="avatar avatar-square avatar-simple avatar-xs">
                            <div>
                              <img src="https://res.cloudinary.com/gloot/image/upload/v1644831629/Marketing/202109_gloot2/mission-valorant_1.jpg" />
                            </div>
                          </figure>
                        </div>
                        <div className="item-body">
                          <div className="item-title">Valorant</div>
                          <div className="text-ui-300 text-xs">
                            Weekly Brawl #220
                          </div>
                        </div>
                        <div className="item-action">
                          <div className="bg-gradient-to-b from-ui-900/50 to-ui-900/5 rounded-lg text-center p-2 leading-none">
                            <div className="text-ui-300 text-xs uppercase">
                              placement
                            </div>
                            <div className="font-headings text-xl">59</div>
                          </div>
                        </div>
                      </li>
                      <li className="item item-interactive">
                        <div className="item-image">
                          <figure className="avatar avatar-square avatar-simple avatar-xs">
                            <div>
                              <img src="https://res.cloudinary.com/gloot/image/upload/v1644831647/Marketing/202109_gloot2/mission-valorant_5.jpg" />
                            </div>
                          </figure>
                        </div>
                        <div className="item-body">
                          <div className="item-title">Valorant</div>
                          <div className="text-ui-300 text-xs">
                            Weekly Brawl #119
                          </div>
                        </div>
                        <div className="item-action">
                          <div className="bg-gradient-to-b from-ui-900/50 to-ui-900/5 rounded-lg text-center p-2 leading-none">
                            <div className="text-ui-300 text-xs uppercase">
                              placement
                            </div>
                            <div className="font-headings text-xl">59</div>
                          </div>
                        </div>
                      </li>
                      <li className="item item-interactive">
                        <div className="item-image">
                          <figure className="avatar avatar-square avatar-simple avatar-xs">
                            <div>
                              <img src="https://res.cloudinary.com/gloot/image/upload/v1644831573/Marketing/202109_gloot2/mission-pubg_5.jpg" />
                            </div>
                          </figure>
                        </div>
                        <div className="item-body">
                          <div className="item-title">PUBG: BATTLEGROUNDS</div>
                          <div className="text-ui-300 text-xs">
                            Weekly Brawl #425
                          </div>
                        </div>
                        <div className="item-action">
                          <div className="bg-gradient-to-b from-ui-900/50 to-ui-900/5 rounded-lg text-center p-2 leading-none">
                            <div className="text-ui-300 text-xs uppercase">
                              placement
                            </div>
                            <div className="font-headings text-xl">12</div>
                          </div>
                        </div>
                      </li>
                      <li className="item item-interactive">
                        <div className="item-image">
                          <figure className="avatar avatar-square avatar-simple avatar-xs">
                            <div>
                              <img src="https://res.cloudinary.com/gloot/image/upload/v1644831573/Marketing/202109_gloot2/mission-pubg_2.jpg" />
                            </div>
                          </figure>
                        </div>
                        <div className="item-body">
                          <div className="item-title">PUBG: BATTLEGROUNDS</div>
                          <div className="text-ui-300 text-xs">
                            Weekly Brawl #424
                          </div>
                        </div>
                        <div className="item-action">
                          <div className="bg-gradient-to-b from-ui-900/50 to-ui-900/5 rounded-lg text-center p-2 leading-none">
                            <div className="text-ui-300 text-xs uppercase">
                              placement
                            </div>
                            <div className="font-headings text-xl">42</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="surface sm:rounded-lg">
                  <div className="p-1 border-b border-ui-700 flex justify-between">
                    <h2 className="p-2 text-xl not-italic">Tournaments</h2>
                  </div>
                  <div className="max-h-60 overflow-y-auto scrollbar-desktop">
                    <ul>
                      <li className="item item-interactive">
                        <div className="item-image">
                          <figure className="avatar avatar-square avatar-simple avatar-xs">
                            <div>
                              <img src="https://res.cloudinary.com/gloot/image/upload/v1654158104/Marketing/2022_prototype/DummyContent/carousel-item-pubg-s6.jpg" />
                            </div>
                          </figure>
                        </div>
                        <div className="item-body">
                          <div className="item-title">PUBG Season 6</div>
                        </div>
                        <div className="item-action">
                          <div className="chip chip-status">
                            <span className="icon icon-calendar-date-2" />
                            <span>Scheduled</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="surface sm:rounded-lg">
                  <div className="p-1 border-b border-ui-700 flex justify-between">
                    <h2 className="p-2 text-xl not-italic" data-badge="3">
                      Teams
                    </h2>
                    <button
                      type="button"
                      className="button button-sm button-tertiary"
                    >
                      <span className="icon icon-b-add" />
                      <span>Create team</span>
                    </button>
                  </div>
                  <div className="max-h-60 overflow-y-auto scrollbar-desktop">
                    <ul>
                      <li className="item item-interactive">
                        <div className="item-image">
                          <figure className="avatar avatar-square avatar-simple avatar-xs">
                            <div>
                              <img src="https://res.cloudinary.com/gloot/image/upload/c_pad,h_62,w_62/teamlogos/Raccon5_1x1_dog5jh" />
                            </div>
                          </figure>
                        </div>
                        <div className="item-body">
                          <div className="item-title">Racoon5</div>
                          <div className="text-ui-300 text-xs">5 members</div>
                        </div>
                      </li>
                      <li className="item item-interactive">
                        <div className="item-image">
                          <figure className="avatar avatar-square avatar-simple avatar-xs">
                            <div>
                              <img src="https://res.cloudinary.com/gloot/image/upload/c_pad,h_62,w_62/teamlogos/sheep-santa-hat-e1510385903558_copy_dqbscr" />
                            </div>
                          </figure>
                        </div>
                        <div className="item-body">
                          <div className="item-title">SnartJul</div>
                          <div className="text-ui-300 text-xs">5 members</div>
                        </div>
                      </li>
                      <li className="item item-interactive">
                        <div className="item-image">
                          <figure className="avatar avatar-square avatar-simple avatar-xs">
                            <div>
                              <img src="https://lh3.googleusercontent.com/idrmC7GCQQQil7sQPpOBUb8a8bDZ5xqg6RESaLo8y4i6xqmUuu1L_YfwvReQcUWrnXEB-RCX7wu1-eFUHIrEoOhwPWab-tbccyC-8a6iog=s512" />
                            </div>
                          </figure>
                        </div>
                        <div className="item-body">
                          <div className="item-title">ShikaTeam</div>
                          <div className="text-ui-300 text-xs">5 members</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </PrototypeStructure>
    </>
  );
}
