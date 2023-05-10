import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import Link from "next/link";
import ModalGiftTokens from "../modal-gift-tokens";
import ReadMore from "../../../../components/ReadMore/ReadMore";
import Slider from "../../../../components/Slider/Slider";
import ModalClanLeave from "../modal-clan-leave";

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
  const [selectedUser, setSelectedUser] = useState(
    prototype.getUserByID(2).nickname
  );

  function openModalGiftTokens() {
    uiContext.openModal(
      <ModalGiftTokens selectedUser={selectedUser}></ModalGiftTokens>
    );
  }

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
                    <button type="button" className="button button-secondary">
                      <span className="icon icon-cogwheel" />
                      <span>Clan settings</span>
                    </button>
                  </Link>
                )}
                <button
                  onClick={openModalClanLeave}
                  type="button"
                  className="button button-secondary"
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
            <section className="flex-1 surface md:rounded">
              <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                <h2 className="h6 text-ui-100">About</h2>
              </div>
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
            </section>
            <section className="flex-1 surface md:rounded">
              <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                <h2 className="h6 text-ui-100">Social</h2>
              </div>
              <ul className="divide-y divide-ui-700">
                {selectedClan.social?.twitch && (
                  <li className="flex items-center gap-4 text-ui-300 px-2 py-1">
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
                  <li className="flex items-center gap-4 text-ui-300 px-2 py-1">
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
                  <li className="flex items-center gap-4 text-ui-300 px-2 py-1">
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
                  <li className="flex items-center gap-4 text-ui-300 px-2 py-1">
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
            </section>
            <section className="flex-1 surface md:rounded">
              <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                <h2 className="h6 text-ui-100">
                  Games ({selectedClan.games.length})
                </h2>
              </div>
              <div>
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
            <div onClick={() => setIsAdmin(!isAdmin)}>Toggle admin view</div>
          </section>
        </>
      )}
    </>
  );
}
