import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import Link from "next/link";
import ModalGiftTokens from "../modal-gift-tokens";
import ReadMore from "../../../../components/ReadMore/ReadMore";
import Slider from "../../../../components/Slider/Slider";
import ModalClanLeave from "../modal-clan-leave";
import GameIcon from "../../../../components/GameIcon/GameIcon";
import LadderCardSecondary from "../../../../components/Ladder/LadderCardSecondary";
import Avatar from "../../../../components/Avatar/Avatar";

export default function TabClanAbout() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedClan, setSelectedClan] = useState(null);
  const { clan_id } = router.query;
  const modalGiftTokens = query.modalgifttokens === "true" ? true : false;
  const [hasOnlyOne, setHasOnlyOne] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const hasAccepted = query.hasaccepted === "true" ? true : false;
  const [selectedUser, setSelectedUser] = useState(
    prototype.getUserByID(2).nickname
  );

  function openModalGiftTokens() {
    uiContext.openModal(
      <ModalGiftTokens selectedUser={selectedUser}></ModalGiftTokens>
    );
  }

  const getClanMembers = () => {
    return prototype.users.filter((user) => {
      return user.clan === selectedClan.id;
    });
  };

  useEffect(() => {
    if (modalGiftTokens) {
      openModalGiftTokens();
    }
  }, [modalGiftTokens]);

  function openModalClanLeave() {
    uiContext.openModal(<ModalClanLeave />);
  }

  useEffect(() => {
    setSelectedClan(prototype.getClanByID(clan_id));
  }, [clan_id]);

  return (
    <>
      {selectedClan && (
        <>
          {selectedClan.isYou ? (
            <>
              <section className="header header-secondary surface sm:rounded-lg mb-4 animate-slide-in-bottom">
                <div className="header-content">
                  <div className="header-body">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center self-center">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <div className="flex items-baseline gap-1">
                            <h1 className="text-7xl leading-none -mb-2">
                              &#91;
                              {selectedClan.tag}
                              &#93; {selectedClan.nickname}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-meta lg:items-end p-3">
                  <div className="flex gap-2">
                    {isAdmin && (
                      <Link href="settings">
                        <button
                          type="button"
                          className="button button-sm button-secondary"
                        >
                          <span className="icon icon-cogwheel" />
                          <span>Clan settings</span>
                        </button>
                      </Link>
                    )}
                    <button
                      onClick={openModalClanLeave}
                      type="button"
                      className="button button-sm button-secondary"
                    >
                      <span className="icon icon-leave" />
                      <span>Leave clan</span>
                    </button>
                  </div>
                </div>
                <div className="header-bg">
                  <div className="relative">
                    <div className="avatar avatar-2xl avatar-squircle">
                      <div>
                        <img src={selectedClan.avatar} alt="avatar" />
                      </div>
                    </div>
                    {isAdmin && (
                      <button
                        type="button"
                        className="button button-tertiary rounded-full absolute z-20 bottom-0 right-0"
                      >
                        <span className="icon icon-pen-2" />
                      </button>
                    )}
                  </div>

                  {isAdmin && (
                    <button
                      type="button"
                      className="button button-tertiary rounded-full absolute z-20 top-2 right-2"
                    >
                      <span className="icon icon-camera" />
                    </button>
                  )}

                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1672241804/Stryda/illustrations/Generic_bg.png"
                    alt=""
                  />
                </div>
              </section>

              <div className="flex flex-col xl:flex-row items-stretch gap-y-4 xl:gap-x-4 animate-slide-in-bottom">
                <section className="flex-1 surface md:rounded xl:flex xl:flex-col">
                  <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                    <h2 className="h6 text-ui-100">About</h2>
                  </div>
                  <div className="xl:flex-1 xl:grid xl:place-content-stretch xl:content-center">
                    <div className="p-4 space-y-4">
                      {selectedClan.bio && (
                        <p className="text-ui-300 mt-1 text-left">
                          <ReadMore content={selectedClan.bio} max={125} />
                        </p>
                      )}
                      <p className="text-ui-300 mt-1 text-left">
                        <span className="text-ui-300">Main language: </span>
                        <span className="text-ui-100">{selectedClan.lang}</span>
                      </p>
                      <p className="text-ui-300 mt-1 text-left">
                        <span className="text-ui-300">Created on </span>
                        <span className="text-ui-100">November 6 2022 </span>
                        <span className="text-ui-300">by </span>
                        <span className="text-ui-100">
                          {prototype.getUserByID(selectedClan.admin).nickname}
                        </span>
                      </p>
                    </div>
                  </div>
                </section>
                <section className="flex-1 surface md:rounded xl:flex xl:flex-col">
                  <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                    <h2 className="h6 text-ui-100">Social</h2>
                  </div>
                  <div className="xl:flex-1 xl:grid xl:place-content-stretch xl:content-center">
                    <ul className="divide-y divide-ui-700">
                      {selectedClan.social?.twitch && (
                        <li className="flex items-center gap-4 text-ui-300 pl-4 pr-2 py-1">
                          <span className="icon icon-20 icon-twitch" />
                          <a
                            className="flex-1 link link-hover"
                            href={`https://twitch.tv/${selectedClan.social?.twitch}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {selectedClan.social?.twitch}
                          </a>
                          <a
                            href={`https://twitch.tv/${selectedClan.social?.twitch}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button button-tertiary rounded-full"
                          >
                            <span className="icon icon-network-communication" />
                          </a>
                        </li>
                      )}
                      {selectedClan.social?.discord && (
                        <li className="flex items-center gap-4 text-ui-300 pl-4 pr-2 py-1">
                          <span className="icon icon-20 icon-discord" />
                          <a
                            className="flex-1 link link-hover"
                            href={`https://discord.com/${selectedClan.social?.discord}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {selectedClan.social?.discord}
                          </a>
                          <a
                            href={`https://discord.com/${selectedClan.social?.discord}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button button-tertiary rounded-full"
                          >
                            <span className="icon icon-network-communication" />
                          </a>
                        </li>
                      )}
                      {selectedClan.social?.youtube && (
                        <li className="flex items-center gap-4 text-ui-300 pl-4 pr-2 py-1">
                          <span className="icon icon-20 icon-logo-youtube" />
                          <a
                            className="flex-1 link link-hover"
                            href={`https://youtube.com/${selectedClan.social?.youtube}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {selectedClan.social?.youtube}
                          </a>
                          <a
                            href={`https://youtube.com/${selectedClan.social?.youtube}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button button-tertiary rounded-full"
                          >
                            <span className="icon icon-network-communication" />
                          </a>
                        </li>
                      )}
                      {selectedClan.social?.twitter && (
                        <li className="flex items-center gap-4 text-ui-300 pl-4 pr-2 py-1">
                          <span className="icon icon-20 icon-logo-twitter" />
                          <a
                            className="flex-1 link link-hover"
                            href={`https://twitter.com/${selectedClan.social?.twitter}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {selectedClan.social?.twitter}
                          </a>
                          <a
                            href={`https://twitter.com/${selectedClan.social?.twitter}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button button-tertiary rounded-full"
                          >
                            <span className="icon icon-network-communication" />
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </section>
                <section className="flex-1 surface md:rounded xl:flex xl:flex-col">
                  <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                    <h2 className="h6 text-ui-100">
                      Games ({selectedClan.games.length})
                    </h2>
                  </div>
                  <div className="xl:flex-1 xl:grid xl:place-content-stretch xl:content-center">
                    <Slider
                      itemWidth={138 + 16 + 16}
                      bgColor="from-ui-800 via-ui-800 to-ui-800/0"
                    >
                      <div className="flex gap-6 py-2 px-6 shrink-0">
                        {selectedClan.games?.map((game, gameIndex) => (
                          <img
                            key={gameIndex}
                            src={prototype.getGameByID(game).assets.cover}
                            alt={prototype.getGameByID(game).name}
                            className="h-36 rounded aspect-story object-cover"
                          />
                        ))}
                      </div>
                    </Slider>
                  </div>
                </section>
              </div>

              <section className="text-ui-100/0 h-0">
                <div onClick={() => setIsAdmin(!isAdmin)}>
                  Toggle admin view
                </div>
              </section>
            </>
          ) : (
            <>
              <div className="flex flex-col lg:flex-row items-start gap-y-4 lg:gap-x-4 animate-slide-in-bottom">
                <div className="w-full lg:w-80 space-y-4">
                  <section className="surface md:rounded">
                    <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                      <h2 className="h6 text-ui-100">About</h2>
                      {selectedClan.isYou && (
                        <Link
                          href={`/prototype/profile/settings${prototype.getURLparams()}`}
                        >
                          <a className="link link-hover text-ui-300 text-sm leading-none">
                            Edit
                          </a>
                        </Link>
                      )}
                    </div>
                    <div className="p-4 space-y-4">
                      <p className="text-ui-300 mt-1 text-left">
                        <span className="text-ui-300">We speak: </span>
                        <span className="text-ui-100">{selectedClan.lang}</span>
                      </p>
                      {selectedClan.bio && (
                        <p className="text-ui-300 mt-1 text-left">
                          <ReadMore content={selectedClan.bio} max={150} />
                        </p>
                      )}
                      <div className="flex gap-1">
                        {selectedClan.social?.twitch && (
                          <a
                            href={selectedClan.social.twitch}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link p-1 text-0"
                          >
                            <span className="icon icon-20 text-ui-300 icon-twitch" />
                          </a>
                        )}
                        {selectedClan.social?.discord && (
                          <a
                            href={selectedClan.social.discord}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link p-1 text-0"
                          >
                            <span className="icon icon-20 text-ui-300 icon-discord" />
                          </a>
                        )}
                        {selectedClan.social?.youtube && (
                          <a
                            href={selectedClan.social.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link p-1 text-0"
                          >
                            <span className="icon icon-20 text-ui-300 icon-logo-youtube" />
                          </a>
                        )}
                        {selectedClan.social?.twitter && (
                          <a
                            href={selectedClan.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link p-1 text-0"
                          >
                            <span className="icon icon-20 text-ui-300 icon-logo-twitter" />
                          </a>
                        )}
                      </div>
                      {selectedClan.isYou ? (
                        <div className="space-y-2">
                          <div className="surface surface-ui-600 rounded p-3 space-y-3">
                            <div className="text-center text-ui-100">
                              You have <b>3</b> pending applications
                            </div>
                            <div className="flex gap-2">
                              <Link
                                href={`/prototype/clans/1?tab=applications${prototype.getURLparams()}`}
                              >
                                <a
                                  type="button"
                                  className="button button-sm button-primary flex-1"
                                >
                                  <span className="icon icon-a-time" />
                                  <span>View applicants</span>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          {hasAccepted ? (
                            <>
                              <div className="surface surface-ui-600 rounded p-3 space-y-3">
                                <div className="text-center">
                                  Welcome to the x{selectedClan.nickname} clan{" "}
                                  {prototype.getUserByID(1).nickname}!
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              {selectedClan.isPublic ? (
                                <div className="surface surface-ui-600 rounded p-3 space-y-3">
                                  <div className="text-center">
                                    This Clan is open to everyone.
                                  </div>
                                  <div className="flex gap-2">
                                    <Link href="#">
                                      <a
                                        type="button"
                                        className="button button-sm button-primary flex-1"
                                      >
                                        <span>Join clan</span>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              ) : (
                                <>
                                  {selectedClan.hasInvitedYou ? (
                                    <div className="surface surface-ui-600 rounded p-3 space-y-3">
                                      <div className="text-center">
                                        Congratulations, you have been invited
                                        to join this clan.
                                      </div>
                                      <div className="flex gap-2">
                                        <Link href="#">
                                          <a
                                            type="button"
                                            className="button button-sm button-success flex-1"
                                          >
                                            <span>Accept</span>
                                          </a>
                                        </Link>
                                        <Link href="#">
                                          <a
                                            type="button"
                                            className="button button-sm button-error flex-1"
                                          >
                                            <span>Decline</span>
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="surface surface-ui-600 rounded p-3 space-y-3">
                                      <div className="text-center">
                                        This Clan is private.
                                      </div>
                                      <div className="flex gap-2">
                                        <Link href="#">
                                          <a
                                            type="button"
                                            className="button button-sm button-primary flex-1"
                                          >
                                            <span>Apply to join</span>
                                          </a>
                                        </Link>
                                      </div>
                                    </div>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </section>
                  {selectedClan.games && (
                    <section className="surface md:rounded">
                      <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                        <h2 className="h6 text-ui-100">
                          Games ({selectedClan.games.length})
                        </h2>
                        <Link
                          href={`${
                            selectedClan.id
                          }?tab=games${prototype.getURLparams()}`}
                        >
                          <a className="link link-hover text-ui-300 text-sm leading-none hidden">
                            View
                          </a>
                        </Link>
                      </div>
                      <ul className="flex gap-4 p-4">
                        {selectedClan.games?.map((game, gameIndex) => (
                          <li key={gameIndex}>
                            <GameIcon game={game} />
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                </div>
                <div className="flex-1 space-y-4 lg:overflow-hidden max-w-[100%]">
                  <section className="surface md:rounded">
                    <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                      <h2 className="h6 text-ui-100">Stats</h2>
                      <Link
                        href={`${
                          selectedClan.id
                        }?tab=stats${prototype.getURLparams()}`}
                      >
                        <a className="link link-hover text-ui-300 text-sm leading-none">
                          View
                        </a>
                      </Link>
                    </div>
                    <div className="leading-tight grid grid-cols-2 xl:grid-cols-4 flex-1 gap-4 p-4">
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-200 uppercase">
                          Ladders played
                        </div>
                        <div className="text-ui-100 text-xl lg:text-3xl">
                          82
                        </div>
                        <div className="hidden text-xs lg:text-sm text-ui-300">
                          Top 25%
                        </div>
                      </div>
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-200 uppercase">
                          Ladder rounds
                        </div>
                        <div className="text-ui-100 text-xl lg:text-3xl">
                          146
                        </div>
                        <div className="hidden text-xs lg:text-sm text-ui-300">
                          Top 18%
                        </div>
                      </div>
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-200 uppercase">
                          Missions completed
                        </div>
                        <div className="text-ui-100 text-xl lg:text-3xl">1 295</div>
                        <div className="hidden text-xs lg:text-sm text-ui-300">
                          Top 11%
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="surface md:rounded">
                    <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                      <h2 className="h6 text-ui-100">
                        Members ({getClanMembers().length})
                      </h2>
                      <Link
                        href={`${
                          selectedClan.id
                        }?tab=members${prototype.getURLparams()}`}
                      >
                        <a className="link link-hover text-ui-300 text-sm leading-none">
                          View
                        </a>
                      </Link>
                    </div>
                    <div>
                      <Slider
                        itemWidth={144 + 16}
                        bgColor="from-ui-800 via-ui-800 to-ui-800/0"
                      >
                        <ul className="flex px-4">
                          {getClanMembers().map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              href={`/prototype/profile/${
                                prototype.getUserByID(item.id).id
                              }${prototype.getURLparams()}`}
                            >
                              <li className="interactive flex flex-col items-center gap-4 w-36 p-2 leading-none">
                                <Avatar
                                  id={item.id}
                                  hasTooltip={true}
                                  size="avatar-md"
                                />

                                <div className="flex gap-2 items-center">
                                  <span
                                    className={`${
                                      prototype.getUserByID(item.id)?.isPremium
                                        ? "text-premium-500"
                                        : ""
                                    }`}
                                  >
                                    {prototype.getUserByID(item.id).nickname}
                                  </span>
                                  {selectedClan.admin ===
                                    prototype.getUserByID(item.id).id && (
                                    <span className="icon icon-chess-king text-sm" />
                                  )}
                                </div>
                              </li>
                            </Link>
                          ))}
                        </ul>
                      </Slider>
                    </div>
                  </section>

                  <section className="surface md:rounded">
                    <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                      <h2 className="h6 text-ui-100">
                        Ladders ({selectedClan.ladders?.length})
                      </h2>
                      <Link
                        href={`${
                          selectedClan.id
                        }?tab=activity${prototype.getURLparams()}`}
                      >
                        <a className="link link-hover text-ui-300 text-sm leading-none">
                          View
                        </a>
                      </Link>
                    </div>
                    <div>
                      {selectedClan.ladders ? (
                        <Slider
                          itemWidth={397 + 16}
                          bgColor="from-ui-800 via-ui-800 to-ui-800/0"
                        >
                          <div className="flex gap-6 py-2 px-6 hoverhighlight">
                            {selectedClan.ladders?.map(
                              (ladder, ladderIndex) => (
                                <>
                                  <LadderCardSecondary
                                    key={ladderIndex}
                                    ladder={prototype.getLadderByID(
                                      ladder.gameSlug,
                                      ladder.id
                                    )}
                                    isHorizontal={false}
                                    isClan={true}
                                    clanID={selectedClan.id}
                                    className="surface-ui-700"
                                  />
                                </>
                              )
                            )}
                          </div>
                        </Slider>
                      ) : (
                        <div className="text-center p-4">
                          <span className="icon icon-ladder text-6xl text-ui-500" />
                          <p className="mt-2 text-ui-300">
                            {selectedClan.nickname} is not competing in any
                            ladders
                          </p>
                        </div>
                      )}
                    </div>
                  </section>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
