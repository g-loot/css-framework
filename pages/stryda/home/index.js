import React, { useContext, useEffect, useState } from "react";

import { UiContext } from "../../../contexts/ui";
import { useRouter } from "next/router";

import { usePrototypeData } from "../../../contexts/prototype";
import WidgetUser from "../components/WidgetUser";
import Structure from "../components/Structure";
import Link from "next/link";
import Tooltip from "../../../components/Tooltip/Tooltip";
import Avatar from "../../../components/Avatar/Avatar";
import Loader from "../components/Loader";
import ModalGiftTokens from "../clans/modal-gift-tokens";
import PremiumLogo from "../../../components/PremiumLogo/PremiumLogo";
import Feed from "../components/Feed";

export default function Home() {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const isEmpty = query.empty === "true" ? true : false;

  function openModalGiftTokens(selectedUser) {
    uiContext.openModal(<ModalGiftTokens selectedUser={selectedUser} />);
  }

  return (
    <>
      <Structure title="Home">
        <Loader
          loader={
            <section className="min-h-full container flex flex-col lg:flex-row gap-4 py-4">
              <div className="w-80 2xl:w-96 space-y-4 hidden md:block rounded surface is-loading min-h-[calc(100vh-116px)]" />
              <div className="flex-1 rounded surface is-loading min-h-[calc(100vh-116px)]" />
              <div className="w-80 2xl:w-96 hidden xl:block rounded surface is-loading min-h-[calc(100vh-116px)]" />
            </section>
          }
        >
          <section className="min-h-full container flex flex-col lg:flex-row gap-4 py-4">
            <div className="w-80 2xl:w-96 space-y-4 hidden md:block">
              <WidgetUser />
              <div className="surface rounded">
                <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                  <h2 className="h6 text-ui-100">Online</h2>
                  <Link
                    href={`/stryda/profile/settings${prototype.getURLparams()}`}
                  >
                    <a className="link link-hover text-ui-300 text-sm leading-none">
                      View all
                    </a>
                  </Link>
                </div>
                <div className="max-h-48 overflow-y-auto scrollbar-desktop">
                  <ul>
                    {prototype.users
                      .filter((i) => i.isOnline)
                      .filter((i) => !i.isYou)
                      .map((item, itemIndex) => (
                        <li key={itemIndex} className="item">
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
                </div>
              </div>
              <div className="surface rounded">
                <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                  <h2 className="h6 text-ui-100">Suggestions</h2>
                  <Link
                    href={`/stryda/profile/settings${prototype.getURLparams()}`}
                  >
                    <a className="link link-hover text-ui-300 text-sm leading-none">
                      View all
                    </a>
                  </Link>
                </div>
                <div className="max-h-48 overflow-y-auto scrollbar-desktop">
                  <ul>
                    {prototype.users
                      .filter((i) => !i.isOnline)
                      .filter((i) => !i.isYou)
                      .map((item, itemIndex) => (
                        <li key={itemIndex} className="item">
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
                            <Tooltip tooltip="Add as follower">
                              <button
                                type="button"
                                className="button button-tertiary rounded-full"
                              >
                                <span className="icon icon-a-add" />
                              </button>
                            </Tooltip>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="surface rounded p-4 text-center">
                <PremiumLogo
                  src="https://res.cloudinary.com/gloot/image/upload/v1672241197/Stryda/logos/stryda-premium-logo-main-white-animated.svg"
                  width="180"
                  height="auto"
                  className="mx-auto"
                />
                <p className="w-3/4 text-sm text-ui-300 mx-auto mt-3 mb-4">
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
                    <a className="button button-sm button-premium is-shining">
                      <span>Get Premium</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden space-y-4">
              <Feed />
            </div>
            <div className="w-80 2xl:w-96 space-y-4 hidden xl:block">
              <div className="surface rounded">
                <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                  <h2 className="h6 text-ui-100">Missions</h2>
                  <Link href={`/stryda/missions${prototype.getURLparams()}`}>
                    <a className="link link-hover text-ui-300 text-sm leading-none">
                      View all
                    </a>
                  </Link>
                </div>
                <div className="max-h-48 overflow-y-auto scrollbar-desktop">
                  <ul>
                    {prototype.games.map((game, gameIndex) => 
                    (
                      <>
                      {game.missions.map((item, itemIndex) => (
                        <>
                        </>
                      ))}
                      </>
                    ))}

                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Loader>
      </Structure>
    </>
  );
}
