import React, { useContext, useEffect, useState } from "react";

import Link from "next/link";
import ModalAddDiscord from "./modal-add-discord";
import ModalContainer from "@/components/Modal/ModalContainer";
import ModalLeaveParty from "./modal-leave-party";
import Reward from "@/components/Reward/Reward";
import { UiContext } from "@/contexts/ui";
import moment from "moment";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";

export default function TabTournamentsOverview() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const hasAds = query.ads === "true" ? true : false;
  const isRegistered = query.registered === "true" ? true : false;
  const uiContext = useContext(UiContext);
  const modalAddDiscord = query.modaladddiscord === "true" ? true : false;
  const modalLeaveParty = query.modalleaveparty === "true" ? true : false;
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const { tournament_id } = router.query;

  function openModalAddDiscord() {
    uiContext.openModal(<ModalAddDiscord></ModalAddDiscord>);
  }
  function openModalLeaveParty() {
    uiContext.openModal(<ModalLeaveParty></ModalLeaveParty>);
  }

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);

  useEffect(() => {
    if (modalAddDiscord) {
      openModalAddDiscord();
    }
  }, [modalAddDiscord]);
  useEffect(() => {
    if (modalLeaveParty) {
      openModalLeaveParty();
    }
  }, [modalLeaveParty]);

  return (
    <>
      {selectedGame && (
        <>
          {isRegistered && (
            <section
              className="animate-slide-in-bottom animate-delay mt-4 surface sm:rounded-lg p-4 mb-8"
              style={{ "--delay": "calc(0 * 0.05s)" }}
            >
              <div className="flex items-center justify-between flex-col md:flex-row border-b border-ui-700 pb-4">
                <div className="flex items-center gap-2 text-main font-bold">
                  <span className="icon icon-meeting text-xl" />
                  <span>3 / 4 accepted</span>
                </div>
                <div className="flex items-center gap-4 text-ui-300 text-sm">
                  <span>
                    You will be registered for the tournament when the party is
                    full
                  </span>
                  <div role="loading" className="loader loader-xs">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
              <div className="p-4 display flex gap-8 items-center justify-center flex-wrap text-center">
                {prototype.getClanByID(1).members?.map((user, userIndex) => (
                  <Link
                    key={user}
                    href={`/prototype/profile/${
                      prototype.getUserByID(user).id
                    }${prototype.getURLparams()}`}
                  >
                    <div className="flex flex-col items-center gap-2 interactive">
                      <div className="avatar avatar-circle">
                        <div>
                          <img src={prototype.getUserByID(user).avatar} />
                        </div>
                        {prototype.getUserByID(user).isYou && (
                          <i />
                        )}
                      </div>
                      {prototype.getUserByID(user).nickname}
                    </div>
                  </Link>
                ))}
                <div className="flex flex-col items-center gap-2 opacity-25">
                  <div className="avatar avatar-circle">
                    <div>
                      <span className="icon icon-profile-2" />
                    </div>
                  </div>
                  <span className="text-ui-300">Empty slot</span>
                </div>
              </div>
              <div className="absolute z-10 right-0 bottom-0 p-4">
                <button type="button" className="button button-sm button-secondary" onClick={openModalLeaveParty}>
                  <span className="icon icon-leave" />
                  <span>Leave party</span>
                </button>
              </div>
            </section>
          )}
          {!isRegistered && (
            <section
              className="animate-slide-in-bottom animate-delay flex flex-col lg:flex-row items-stretch gap-8 mb-8 mt-4"
              style={{ "--delay": "calc(1 * 0.05s)" }}
            >
              <div className="flex-1 surface sm:rounded-lg relative flex flex-col items-center justify-center overflow-hidden text-center hoverinside:opacity-100 hoverinside:translate-y-0 hoverinside:scale-100">
                <div className="relative z-10 py-8 px-4">
                  <h2 className="h4">
                    Register <span className="text-main">solo</span>
                  </h2>
                  <p className="text-ui-300 mt-4 mb-6 max-w-[70ch] mx-auto">
                    Register solo and we will find a party for you.
                  </p>
                  <button
                    type="button"
                    className="button button-primary"
                    onClick={openModalAddDiscord}
                  >
                    <span>Register</span>
                  </button>
                </div>
                <div className="absolute z-0 inset-0 hoverinside transition-all duration-300 opacity-0 scale-110">
                  <span className="absolute inset-0 z-10 bg-gradient-radial from-ui-700/95 to-ui-700/80" />
                  <img
                    className="absolute z-0 w-full h-full object-cover object-center"
                    src="https://res.cloudinary.com/gloot/image/upload/v1660041580/Marketing/2022_prototype/tournament-solo.webp"
                    width="100%"
                    height="auto"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-row lg:flex-col items-center justify-center gap-4">
                <hr className="separator block lg:hidden flex-1" />
                <hr className="separator separator-vertical hidden lg:block flex-1" />
                <span className="uppercase">or</span>
                <hr className="separator block lg:hidden flex-1" />
                <hr className="separator separator-vertical hidden lg:block flex-1" />
              </div>
              <div className="flex-1 surface sm:rounded-lg relative flex flex-col items-center justify-center overflow-hidden text-center hoverinside:opacity-100 hoverinside:translate-y-0 hoverinside:scale-100">
                <div className="relative z-10 py-8 px-4">
                  <h2 className="h4">
                    Register with a <span className="text-main">team</span>
                  </h2>
                  <p className="text-ui-300 mt-4 mb-6 max-w-[70ch] mx-auto">
                    Invite players from one of your teams to join you in the
                    tournament. You can only choose members from one team.
                  </p>
                  <button
                    type="button"
                    className="button button-primary"
                    onClick={openModalAddDiscord}
                  >
                    <span>Register</span>
                  </button>
                </div>
                <div className="absolute z-0 inset-0 hoverinside transition-all duration-300 opacity-0 scale-110">
                  <span className="absolute inset-0 z-10 bg-gradient-radial from-ui-700/95 to-ui-700/80" />
                  <img
                    className="absolute z-0 w-full h-full object-cover object-center"
                    src="https://res.cloudinary.com/gloot/image/upload/v1660041580/Marketing/2022_prototype/tournament-team.webp"
                    width="100%"
                    height="auto"
                    alt=""
                  />
                </div>
              </div>
            </section>
          )}
          <section
            className="animate-slide-in-bottom animate-delay flex flex-col xl:flex-row xl:items-start gap-4 xl:gap-8"
            style={{ "--delay": "calc(2 * 0.05s)" }}
          >
            <div className="flex-1 space-y-4 overflow-hidden">
              <div className="surface surface-dimmed sm:rounded-lg overflow-hidden">
                <div className="overflow-x-auto scrollbar-desktop py-8">
                  <ul className="step step-label-bottom step-primary min-w-[1000px]">
                    <li className="is-active">
                      <a href="#">
                        <i>1</i>
                        <div>
                          <div className="text-ui-300 mb-1">
                            Scheduled
                          </div>
                          <div className="text-sm text-ui-400">
                            Registration will open:
                            <br />
                            {moment(
                              prototype.getTournamentByID(game, tournament_id)
                                .details.date,
                              "YYYY-MM-DDThh:mm:ss.SSS"
                            ).format("MMM Do [•] h A")}
                          </div>
                        </div>
                        <span />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>2</i>
                        <div>
                          <div className="text-ui-100 mb-1">
                            Registration open
                          </div>
                          <div className="text-sm text-ui-300">
                            Now you can join the tournament Make sure to check
                            out how to play
                          </div>
                        </div>
                        <span />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>3</i>
                        <div>
                          <div className="text-ui-300 mb-1">
                            Registration closed
                          </div>
                          <div className="text-sm text-ui-400">
                            No more players can register:
                            <br />
                            {moment(
                              prototype.getTournamentByID(game, tournament_id)
                                .details.date,
                              "YYYY-MM-DDThh:mm:ss.SSS"
                            ).format("MMM Do [•] h A")}
                          </div>
                        </div>
                        <span />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>4</i>
                        <div>
                          <div className="text-ui-300 mb-1">
                            Tournament starts
                          </div>
                          <div className="text-sm text-ui-400">
                            Open the game and join the server with match info
                            provided from Stryda
                          </div>
                        </div>
                        <span />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>5</i>
                        <div>
                          <div className="text-ui-300 mb-1">
                            Tournament finished
                          </div>
                          <div className="text-sm text-ui-400">
                            The tournament has concluded, check out your results
                          </div>
                        </div>
                        <span />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="surface surface-dimmed sm:rounded-lg overflow-hidden">
                <div className="p-4">
                  <h3 className="h5 my-4">Tournament details</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="rounded bg-gradient-to-b from-ui-700/10 to-ui-700/25 p-4 text-center">
                      <div className="leading-none text-xs text-ui-300 uppercase">
                        Game
                      </div>
                      <div className="text-2xl font-headings">
                        {selectedGame.name}
                      </div>
                    </div>
                    <div className="rounded bg-gradient-to-b from-ui-700/10 to-ui-700/25 p-4 text-center">
                      <div className="leading-none text-xs text-ui-300 uppercase">
                        Region
                      </div>
                      <div className="text-2xl font-headings">
                        {
                          prototype.getTournamentByID(game, tournament_id)
                            .details.region
                        }
                      </div>
                    </div>
                    <div className="rounded bg-gradient-to-b from-ui-700/10 to-ui-700/25 p-4 text-center">
                      <div className="leading-none text-xs text-ui-300 uppercase">
                        Entry fee
                      </div>
                      <div className="text-2xl font-headings">
                        {prototype.getTournamentByID(game, tournament_id)
                          .details.entryFee === "free" && <>Free</>}
                        {prototype.getTournamentByID(game, tournament_id)
                          .details.entryFee !== "free" && (
                          <>
                            {prototype
                              .getTournamentByID(game, tournament_id)
                              .details.entryFee.map((reward, rewardIndex) => (
                                <div key={rewardIndex} className="flex justify-center">
                                  <Reward
                                    key={rewardIndex}
                                    reward={reward}
                                    iconClassNames=""
                                    textClassNames=""
                                  />
                                </div>
                              ))}
                          </>
                        )}
                      </div>
                    </div>
                    <div className="rounded bg-gradient-to-b from-ui-700/10 to-ui-700/25 p-4 text-center">
                      <div className="leading-none text-xs text-ui-300 uppercase">
                        Available
                      </div>
                      <div className="text-2xl font-headings">16 slots</div>
                    </div>
                    <div className="rounded bg-gradient-to-b from-ui-700/10 to-ui-700/25 p-4 text-center">
                      <div className="leading-none text-xs text-ui-300 uppercase">
                        Game type
                      </div>
                      <div className="text-2xl font-headings">
                        {selectedGame.type}
                      </div>
                    </div>
                    <div className="rounded bg-gradient-to-b from-ui-700/10 to-ui-700/25 p-4 text-center">
                      <div className="leading-none text-xs text-ui-300 uppercase">
                        Format
                      </div>
                      <div className="text-2xl font-headings">Qualifier</div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="h5 mb-4">Schedule</h3>
                  <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop px-4 sm:px-0">
                    <table className="table table-rounded w-full">
                      <thead>
                        <tr>
                          <th>Best of</th>
                          <th>Maps</th>
                        </tr>
                      </thead>
                      <tbody>
                        {prototype
                          .getTournamentByID(game, tournament_id)
                          .details.schedule?.map((schedule, scheduleIndex) => (
                            <>
                              <tr key={schedule}>
                                <td>{schedule.type}</td>
                                <td>
                                  <div className="text-ui-300">
                                    {schedule.value}
                                  </div>
                                </td>
                              </tr>
                            </>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="h5 mb-4">Requirements</h3>
                  <div className="space-y-4 p-4">
                    <div className="flex items-center gap-4">
                      <span className="icon icon-check text-3xl text-ui-300" />
                      <div className="text-ui-300">
                        Must be 16 years of age or older to participate.
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="icon icon-check text-3xl text-ui-300" />
                      <div className="text-ui-300">PC with PUBG (Steam).</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="icon icon-check text-3xl text-ui-300" />
                      <div className="text-ui-300">
                        Be a Permanent Resident/Citizen of one of the countries
                        listed in{" "}
                        <b>Rules &gt; Player Eligibility &gt; Regions</b>.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 xl:flex-none xl:w-96 space-y-4">
              <div className="surface surface-dimmed sm:rounded-lg p-4">
                <div className="flex gap-4 items-center justify-between mb-4">
                  <h3 className="h5">Prize Pool</h3>
                  <div className="flex items-center gap-1 pr-4">
                    <img
                      className="h-12"
                      src="https://res.cloudinary.com/gloot/image/upload/v1653393860/Marketing/2022_prototype/CurrencyRewards/Reward-coin-small.png"
                      width="auto"
                      height="auto"
                      alt=""
                    />
                    <span className="text-2xl text-currency-1-500">
                      30000
                    </span>
                  </div>
                </div>
                <ul className="leading-none space-y-1">
                  {prototype
                    .getTournamentByID(game, tournament_id)
                    .prizepool?.map((reward, rewardIndex) => (
                      <li
                        key={reward}
                        className="flex items-center justify-between gap-2 rounded bg-gradient-to-b from-ui-700/10 to-ui-700/25 p-4 py-2 px-4 animate-slide-in-bottom animate-delay"
                        style={{
                          "--delay": "calc(" + rewardIndex + " * 0.05s)",
                        }}
                      >
                        <span className="text-lg">
                          {reward.level}
                        </span>
                        <div className="flex items-center justify-center gap-4">
                          {reward.rewards.map((reward, rewardIndex) => (
                            <>
                              <Reward
                                key={rewardIndex}
                                reward={reward}
                                gap="gap-2"
                                iconClassNames=""
                                textClassNames=""
                              />
                            </>
                          ))}
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="surface surface-dimmed sm:rounded-lg p-4">
                <div className="flex items-baseline gap-2">
                  <h3 className="h5">
                    0 /{" "}
                    {
                      prototype.getTournamentByID(game, tournament_id).details
                        .availableSlots
                    }{" "}
                  </h3>
                  <span className="text-ui-300">available slots</span>
                </div>
              </div>
              <div className="surface surface-dimmed sm:rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <span className="icon icon-discord text-3xl" />
                  <div className="flex-1">
                    <h3 className="h6">Join the community</h3>
                    <p className="text-ui-300 mt-2 mb-3">
                      Join our Discord community and add your Discord Username
                      in your Stryda profile to get important updates about your
                      tournaments and parties!
                    </p>
                    <a
                      className="button button-sm button-secondary"
                      href="https://discord.gg/gloot"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Join Discord</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
