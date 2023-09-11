import React, { Fragment, useContext, useEffect, useState } from "react";

import { UiContext } from "@/contexts/ui";
import { useRouter } from "next/router";

import { usePrototypeData } from "@/contexts/prototype";
import WidgetUser from "@/pages/stryda/components/WidgetUser";
import Structure from "@/pages/stryda/components/Structure";
import Link from "next/link";
import Tooltip from "@/components/Tooltip/Tooltip";
import Avatar from "@/components/Avatar/Avatar";
import Loader from "@/pages/stryda/components/Loader";
import ModalGiftTokens from "../clans/modal-gift-tokens";
import PremiumLogo from "@/components/PremiumLogo/PremiumLogo";
import Feed from "@/pages/stryda/components/Feed";
import { VariablesContext } from "@/contexts/variables";
import CardMission from "@/pages/stryda/components/CardMission";
import CardLadder from "@/pages/stryda/components/CardLadder";
import ModalBuyTokens from "../wallet/modal-buytokens";
import Battlepass from "@/components/BattlePass/BattlePass";
import ButtonFeedback from "@/components/Button/ButtonFeedback";
import GameIcon from "@/components/GameIcon/GameIcon";

export default function Home() {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const variablesContext = useContext(VariablesContext);
  const isEmpty = query.empty === "true" ? true : false;

  function openModalGiftTokens(selectedUser) {
    uiContext.openModal(<ModalGiftTokens selectedUser={selectedUser} />);
  }

  function openModalBuyTokens() {
    uiContext.openModal(<ModalBuyTokens />);
  }

  return (
    <>
      <Structure title="Home">
        <Loader
          loader={
            <section className="min-h-screen container max-w-xl flex flex-col md:flex-row gap-8 lg:gap-14 py-8">
              <div className="w-[21rem] space-y-4 hidden md:block rounded surface is-loading min-h-[calc(100vh-116px)]" />
              <div className="flex-1 rounded surface is-loading min-h-[calc(100vh-116px)]" />
              <div className="w-[21rem] hidden xl:block rounded surface is-loading min-h-[calc(100vh-116px)]" />
            </section>
          }
        >
          <section className="min-h-screen container max-w-xl flex flex-col md:flex-row gap-8 lg:gap-14 py-8">
            <div className="w-[21rem] space-y-4 hidden md:block">
              <WidgetUser hasActions={false} />
              <Link href={`/stryda/battlepass${prototype.getURLparams()}`}>
                <div className="surface rounded interactive">
                  <div className="flex items-baseline justify-between border-b border-b-ui-700 px-3 py-2">
                    <h2 className="h6 text-ui-100 interactive">Battle Pass</h2>
                    {/*
                  <Link href={`/stryda/battlepass${prototype.getURLparams()}`}>
                    <a className="link link-hover text-ui-300 text-sm leading-none">
                      View all rewards
                    </a>
                  </Link>
        */}
                  </div>
                  <div className="py-4 pl-4 bg-ui-850 relative rounded-b">
                    <Battlepass id={0} size="battlepass-sm" />
                  </div>
                </div>
              </Link>

              <div className="surface rounded">
                <div className="flex items-baseline justify-between border-b border-b-ui-700 px-3 py-2">
                  <Link href={`/stryda/missions${prototype.getURLparams()}`}>
                    <h2 className="h6 text-ui-100 interactive">Missions</h2>
                  </Link>
                  {/*
                  <Link href={`/stryda/missions${prototype.getURLparams()}`}>
                    <a className="link link-hover text-ui-300 text-sm leading-none">
                      View all
                    </a>
                  </Link>
        */}
                </div>
                <div className="max-h-72 overflow-y-auto overflow-x-hidden scrollbar-desktop bg-ui-850">
                  <ul className="p-1">
                    {prototype.games
                      .filter((i) => i.isFavorite)
                      .map((game, gameIndex) => (
                        <Fragment key={gameIndex}>
                          {game.missions
                            ?.filter((i) => i.isVisible)
                            .map((mission, missionIndex) => (
                              <CardMission
                                key={missionIndex}
                                size="card-sm"
                                mission={mission}
                                index={missionIndex}
                                gameSlug={game.slug}
                              />
                            ))}
                        </Fragment>
                      ))}
                  </ul>
                </div>
                <div className="border-t border-t-ui-700 p-2 space-y-2 text-center">
                  <div className="text-sm text-ui-300">
                    {12 - variablesContext.availableMissions} / 12 missions
                    revealed
                  </div>
                  <Link href={`/stryda/missions${prototype.getURLparams()}`}>
                    <button
                      type="button"
                      className="button button-sm button-secondary"
                    >
                      <span>Reveal more missions</span>
                    </button>
                  </Link>
                </div>
              </div>

              <div
                className="sticky space-y-4"
                style={{ top: "calc(48px + 1rem)" }}
              >
                {/*
                <div className="surface rounded px-4 py-6 text-center">
                  <PremiumLogo
                    src="https://res.cloudinary.com/gloot/image/upload/v1672241197/Stryda/logos/stryda-premium-logo-main-white-animated.svg"
                    width="180"
                    height="auto"
                    className="mx-auto"
                  />
                  <p className="px-4 text-ui-300 mx-auto mt-4 mb-5">
                    Increase your amount of XP you can earn each day with a{" "}
                    <Link href={`/stryda/premium${prototype.getURLparams()}`}>
                      <a className="link text-premium-500">
                        Premium subscription
                      </a>
                    </Link>
                    .
                  </p>
                  <div className="mx-auto mt-2">
                    <Link href={`/stryda/premium${prototype.getURLparams()}`}>
                      <a className="button button-premium is-shining">
                        <span>Get Premium</span>
                      </a>
                    </Link>
                  </div>
                </div>
                                */}
                <div className="surface-ui-600 rounded aspect-square grid place-content-center text-center text-2xl text-ui-400">
                  <span>AD</span>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-auto space-y-4">
              <Feed />
            </div>
            <div className="w-[21rem] space-y-4 hidden xl:block">
              <div className="surface rounded">
                <div className="flex items-baseline justify-between border-b border-b-ui-700 px-3 py-2">
                  <Link href={`/stryda/ladders${prototype.getURLparams()}`}>
                    <h2 className="h6 text-ui-100 interactive">Competitions</h2>
                  </Link>
                  {/*
                  <Link href={`/stryda/ladders${prototype.getURLparams()}`}>
                    <a className="link link-hover text-ui-300 text-sm leading-none">
                      View all
                    </a>
                  </Link>
                              */}
                </div>
                <div className="max-h-96 overflow-y-auto overflow-x-hidden scrollbar-desktop bg-ui-850">
                  <ul className="p-1">
                    {prototype.games
                      .filter((i) => i.isFavorite)
                      .map((game, gameIndex) => (
                        <Fragment key={gameIndex}>
                          {game.clanLeaderboards
                            ?.filter(
                              (i) =>
                                i.status === "ongoing" ||
                                i.status === "finished"
                            )
                            .map((ladder, ladderIndex) => (
                              <Link
                                key={ladderIndex}
                                href={`/stryda/clanevents/${game.slug}/${
                                  ladder.id
                                }${prototype.getURLparams()}`}
                              >
                                <li className="p-1 flex items-center gap-1 interactive text-sm">
                                  <GameIcon game={game.id} size="text-lg" />
                                  <div className="flex-1 truncate">
                                    <span>{ladder.name}</span>
                                  </div>
                                  {ladder.status === "ongoing" &&
                                    !ladder.isEnrolled && (
                                      <div className="text-info-500">
                                        Ongoing
                                      </div>
                                    )}
                                  {ladder.status === "ongoing" &&
                                    ladder.isEnrolled && (
                                      <div className="animate-pulse text-main">
                                        Enrolled
                                      </div>
                                    )}
                                  {ladder.status === "finished" &&
                                    ladder.hasClaim && (
                                      <span className="icon icon-present text-main mr-2" />
                                    )}
                                  {ladder.status === "finished" &&
                                    !ladder.hasClaim && (
                                      <div className="text-ui-400">Ended</div>
                                    )}
                                </li>
                              </Link>
                            ))}
                          {game.ladders
                            ?.filter(
                              (i) =>
                                i.status === "ongoing" ||
                                i.status === "finished"
                            )
                            .map((ladder, ladderIndex) => (
                              <Link
                                key={ladderIndex}
                                href={`/stryda/ladders/${game.slug}/${
                                  ladder.id
                                }${prototype.getURLparams()}`}
                              >
                                <li className="p-1 flex items-center gap-1 interactive text-sm">
                                  <GameIcon game={game.id} size="text-lg" />
                                  <div className="flex-1 truncate">
                                    <span>{ladder.name}</span>
                                  </div>
                                  {ladder.status === "ongoing" &&
                                    !ladder.isEnrolled && (
                                      <div className="text-info-500">
                                        Ongoing
                                      </div>
                                    )}
                                  {ladder.status === "ongoing" &&
                                    ladder.isEnrolled && (
                                      <div className="animate-pulse text-main">
                                        Enrolled
                                      </div>
                                    )}
                                  {ladder.status === "finished" &&
                                    ladder.hasClaim && (
                                      <span className="icon icon-present text-main mr-2" />
                                    )}
                                  {ladder.status === "finished" &&
                                    !ladder.hasClaim && (
                                      <div className="text-ui-400">Ended</div>
                                    )}
                                </li>
                              </Link>
                            ))}
                        </Fragment>
                      ))}
                  </ul>
                </div>
                {/*
                <div className="max-h-[600px] p-2 overflow-y-auto overflow-x-hidden scrollbar-desktop bg-ui-850">
                  <ul className="space-y-2">
                    {prototype.games
                      .filter((i) => i.isFavorite)
                      .map((game, gameIndex) => (
                        <Fragment key={gameIndex}>
                          {game.ladders
                            ?.filter(
                              (i) => i.status === "ongoing" && i.isEnrolled
                            )
                            .map((ladder, ladderIndex) => (
                              <CardLadder
                                key={ladderIndex}
                                size="card-sm"
                                ladder={ladder}
                                isHorizontal={false}
                                isGlobal={false}
                                isFluid={true}
                                gameID={game.id}
                              />
                            ))}
                        </Fragment>
                      ))}
                  </ul>
                </div>
                            */}
              </div>
              <div
                className="sticky space-y-4"
                style={{ top: "calc(48px + 1rem)" }}
              >
                <div className="surface rounded">
                  <div className="flex items-baseline justify-between border-b border-b-ui-700 px-3 py-2">
                    <Link
                      href={`/stryda/profile/1?tab=following${prototype.getURLparams()}`}
                    >
                      <h2 className="h6 text-ui-100 interactive">Followings</h2>
                    </Link>
                    {/*
                    <Link
                      href={`/stryda/profile/1?tab=following${prototype.getURLparams()}`}
                    >
                      <a className="link link-hover text-ui-300 text-sm leading-none">
                        View all
                      </a>
                    </Link>
                              */}
                  </div>
                  <div className="max-h-96 overflow-y-auto overflow-x-hidden scrollbar-desktop bg-ui-850">
                    <h3 className="normal-case text-base font-base px-3 pt-2 pb-1">
                      Online
                    </h3>
                    <ul className="divide-y-0">
                      {prototype.users
                        .filter((i) => i.isOnline)
                        .filter((i) => !i.isYou)
                        .map((item, itemIndex) => (
                          <li key={itemIndex} className="item py-1">
                            <div className="item-image">
                              <Link
                                href={`/stryda/profile/${
                                  prototype.getUserByID(item.id).id
                                }${prototype.getURLparams()}`}
                              >
                                <Avatar
                                  id={item.id}
                                  size="avatar-tiny"
                                  hasTooltip={true}
                                />
                              </Link>
                            </div>
                            <div className="item-body">
                              <Link
                                href={`/stryda/profile/${
                                  prototype.getUserByID(item.id).id
                                }${prototype.getURLparams()}`}
                              >
                                <div className="item-title text-sm flex gap-2 items-center interactive">
                                  <span
                                    className={`${
                                      prototype.getUserByID(item.id)?.isPremium
                                        ? "text-premium-500"
                                        : ""
                                    }`}
                                  >
                                    {prototype.getUserByID(item.id).nickname}
                                  </span>
                                </div>
                              </Link>
                            </div>
                            <div className="item-actions">
                              {prototype.getUserByID(item.id).isLive && (
                                <Tooltip tooltip="Twitch">
                                  <div className="bg-error-700 rounded text-xs text-mono-100 uppercase p-1 leading-none">
                                    Live
                                  </div>
                                </Tooltip>
                              )}
                            </div>
                            <div className="item-actions">
                              <Tooltip tooltip="Gift token">
                                <button
                                  type="button"
                                  className="button button-tertiary rounded-full"
                                  onClick={() => {
                                    openModalGiftTokens(
                                      prototype.getUserByID(item.id).nickname
                                    );
                                  }}
                                >
                                  <span className="icon icon-token" />
                                </button>
                              </Tooltip>
                            </div>
                          </li>
                        ))}
                    </ul>
                    <h3 className="normal-case text-base font-base px-3 mt-2 pt-2 pb-1 border-t border-t-ui-700">
                      Suggestions
                    </h3>
                    <ul className="divide-y-0">
                      {prototype.users
                        .filter((i) => !i.isOnline)
                        .filter((i) => !i.isYou)
                        .map((item, itemIndex) => (
                          <li key={itemIndex} className="item py-1">
                            <div className="item-image ml-2">
                              <Link
                                href={`/stryda/profile/${
                                  prototype.getUserByID(item.id).id
                                }${prototype.getURLparams()}`}
                              >
                                <Avatar id={item.id} size="avatar-tiny" />
                              </Link>
                            </div>
                            <div className="item-body">
                              <Link
                                href={`/stryda/profile/${
                                  prototype.getUserByID(item.id).id
                                }${prototype.getURLparams()}`}
                              >
                                <div className="item-title flex gap-2 items-center interactive">
                                  <span
                                    className={`${
                                      prototype.getUserByID(item.id)?.isPremium
                                        ? "text-premium-500"
                                        : ""
                                    }`}
                                  >
                                    {prototype.getUserByID(item.id).nickname}
                                  </span>
                                </div>
                              </Link>
                            </div>
                            <div className="item-actions">
                              <Tooltip placement="left" tooltip="Follow">
                                <ButtonFeedback
                                  variant="button-tertiary rounded-full"
                                  icon="icon-a-add"
                                  message="Player added to your following"
                                />
                              </Tooltip>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                {/*
                <div className="surface surface-dimmed rounded text-center flex flex-col items-center px-4 pb-4">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1680426016/Stryda/illustrations/battlepass/battlepass-reward-10.png"
                    alt=""
                    className="h-36 w-auto -mt-8 -mb-4 drop-shadow-xl"
                  />
                  <h5>Need tokens?</h5>
                  <p className="text-ui-300 mt-2 mb-3">
                    Buy more tokens to compete in Ladders.
                  </p>
                  <button
                    onClick={openModalBuyTokens}
                    type="button"
                    className="button button-primary px-4"
                  >
                    <span>Get tokens</span>
                  </button>
                </div>
                            */}
              </div>
            </div>
          </section>
        </Loader>
      </Structure>
    </>
  );
}
