import React, { useEffect, useState } from "react";

import Link from "next/link";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";
import ReadMore from "../../../components/ReadMore/ReadMore";
import GameIcon from "../../../components/GameIcon/GameIcon";

export default function HomeHeader(props) {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedUser, setSelectedUser] = useState(null);
  const emptyClan = query.emptyclan === "true" ? true : false;
  const { user_id } = router.query;
  const breadcrumbs = props.breadcrumbs;

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(user_id));
  }, [user_id]);

  return (
    <>
      {selectedUser && (
        <section className="header surface sm:rounded-lg min-h-4 mb-4">
          {breadcrumbs && (
            <div className="header-breadcrumbs">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <ol>
                  <li>
                    <Link href={`/prototype/home`}>
                      <a href="#">
                        <span className="icon icon-20 icon-home-2" />
                        <span>Home</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/prototype/profile/${selectedUser.id}`}>
                      <a href="#">
                        <span>{selectedUser.nickname}</span>
                      </a>
                    </Link>
                  </li>
                  <li aria-current="page">
                    <div>
                      <span>{breadcrumbs}</span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          )}
          <div className="header-content">
            <div className="header-body">
              <div className="flex gap-4 items-center self-center">
                <div
                  className={`avatar avatar-xl avatar-circle ${
                    selectedUser.isPremium ? "avatar-gold" : ""
                  }`}
                >
                  <div>
                    <img src={selectedUser.avatar} alt="avatar" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="flex items-baseline gap-1">
                      <h1
                        className={`${
                          selectedUser.isPremium
                            ? "text-gradient bg-gradient-to-b from-premium-300 to-premium-700"
                            : ""
                        }`}
                      >
                        {selectedUser.nickname}
                      </h1>
                      <img
                        src={`https://flagcdn.com/${selectedUser.countryFlag}.svg`}
                        className="aspect-video rounded-sm max-w-[1.5rem]"
                      />
                    </div>
                    <div className="block lg:hidden text-left">
                      {selectedUser.isYou && (
                        <Link href="settings">
                          <a
                            type="button"
                            className="button button-xs button-secondary"
                          >
                            <span className="icon icon-cogwheel" />
                            <span>Profile settings</span>
                          </a>
                        </Link>
                      )}
                    </div>
                  </div>
                  {/*
                        <div className="flex items-center gap-2">
                          <div className="w-6 flex justify-center">
                            <img
                              src={`https://flagcdn.com/${selectedUser.countryFlag}.svg`}
                              className="aspect-video rounded-sm max-w-[1.5rem]"
                            />
                          </div>
                          <span className="text-ui-300">
                            {selectedUser.country}
                          </span>
                        </div>
                            */}

                  {selectedUser.bio && (
                    <p className="text-ui-300 mt-1 text-left">
                      <ReadMore content={selectedUser.bio} max={150} />
                    </p>
                  )}

                  <div className="flex items-center justify-start mt-4 gap-2">
                    <div className="flex gap-1">
                      {selectedUser.games?.map((game, gameIndex) => (
                        <GameIcon key={gameIndex} game={game} />
                      ))}
                    </div>
                    <hr className="m-0 separator separator-vertical h-7" />
                    <div className="flex gap-1">
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link p-1 text-0"
                      >
                        <span className="icon icon-20 text-ui-300 icon-twitch" />
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link p-1 text-0"
                      >
                        <span className="icon icon-20 text-ui-300 icon-logo-twitter" />
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link p-1 text-0"
                      >
                        <span className="icon icon-20 text-ui-300 icon-discord" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block absolute z-20 top-3 right-3">
            {selectedUser.isYou && (
              <Link href="settings">
                <a className="button button-sm button-tertiary">
                  <span className="icon icon-cogwheel" />
                  <span>Profile settings</span>
                </a>
              </Link>
            )}
          </div>
          <div className="header-meta lg:items-end p-3">
            {!emptyClan ? (
              <>
                {selectedUser.clan ? (
                  <Link
                    href={`/prototype/clans/${
                      selectedUser.clan
                    }${prototype.getURLparams()}`}
                  >
                    <div className="item bg-gradient-radial-to-b from-ui-500/75 to-ui-600/50 backdrop-blur rounded-lg shadow-lg interactive w-auto">
                      <div className="item-image">
                        <div className="avatar avatar-sm avatar-squircle interactive">
                          <div>
                            <img
                              src={
                                prototype.getClanByID(selectedUser.clan).avatar
                              }
                              alt="avatar"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item-body pr-2">
                        <div className="text-sm text-ui-300 leading-none">
                          Clan member of
                        </div>
                        <div className="item-title text-xl text-ui-100 interactive">
                          &#91;
                          {prototype.getClanByID(selectedUser.clan).tag}
                          &#93;{" "}
                          {prototype.getClanByID(selectedUser.clan).nickname}
                        </div>
                        {/*
                            <div className="text-sm text-ui-300">
                              {
                                prototype.getClanByID(selectedUser.clan).members
                                  .length
                              }{" "}
                              members
                            </div>
                            */}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="bg-gradient-radial-to-b from-ui-500/75 to-ui-600/50 backdrop-blur rounded-lg shadow-lg w-auto p-3 text-right space-y-3">
                    <div className="text-center">
                      {selectedUser.nickname} is not part of a clan.
                    </div>
                    <Link href="#">
                      <a
                        type="button"
                        className="button button-sm button-primary w-full"
                      >
                        <span>Recruit to your clan</span>
                      </a>
                    </Link>
                  </div>
                )}
              </>
            ) : (
              <>
                {!selectedUser.isYou ? (
                  <div className="bg-gradient-radial-to-b from-ui-500/75 to-ui-600/50 backdrop-blur rounded-lg shadow-lg w-auto p-3 text-right space-y-3">
                    <div className="text-center">
                      {selectedUser.nickname} is not part of a clan.
                    </div>
                  </div>
                ) : (
                  <div className="bg-gradient-radial-to-b from-ui-500/75 to-ui-600/50 backdrop-blur rounded-lg shadow-lg w-auto p-3 text-right space-y-3">
                    <div className="text-center">
                      You are not part of a clan.
                    </div>
                    <Link href="/prototype/clans/search">
                      <a
                        type="button"
                        className="button button-sm button-primary w-full"
                      >
                        <span>Join a clan</span>
                      </a>
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="header-bg">
            <img src="https://res.cloudinary.com/gloot/image/upload/v1659442345/Marketing/2022_prototype/Clan_bg.webp" />
          </div>
        </section>
      )}
    </>
  );
}
