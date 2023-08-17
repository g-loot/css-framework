import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import { UiContext } from "@/contexts/ui";
import ReadMore from "@/components/ReadMore/ReadMore";
import GameIcon from "@/components/GameIcon/GameIcon";

export default function ClanHeader(props) {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [selectedClan, setSelectedClan] = useState(null);
  const { clan_id } = router.query;
  const breadcrumbs = props.breadcrumbs || false;
  const hasAccepted = query.hasaccepted === "true" ? true : false;
  const modalAvatarEdit = query.modalavataredit === "true" ? true : false;
  const modalBannerEdit = query.modalframeedit === "true" ? true : false;
  const hasAvatarFrame = query.avatarframe || false;
  const hasProfileBanner = query.profilebanner || false;
  const [avatarFrame, setAvatarFrame] = useState(false);
  const [profileBanner, setProfileBanner] = useState(false);

  useEffect(() => {
    if (hasAvatarFrame) {
      setAvatarFrame(prototype.getShopitemByID(1, hasAvatarFrame));
    }
  }, []);

  useEffect(() => {
    setSelectedClan(prototype.getClanByID(clan_id));
  }, [clan_id]);

  useEffect(() => {
    if (hasAccepted && selectedClan) {
      uiContext.openToastr({
        size: "medium",
        text: `You have successfully joined the clan ${selectedClan.nickname}.`,
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
    }
  }, [hasAccepted, selectedClan]);

  useEffect(() => {
    if (hasProfileBanner) {
      setProfileBanner(prototype.getShopitemByID(2, hasProfileBanner));
    } else {
      if (prototype.getClanByID(clan_id).shopItems?.profileBanner) {
        setProfileBanner(
          prototype.getShopitemByID(
            2,
            prototype.getClanByID(clan_id).shopItems?.profileBanner
          )
        );
      } else {
        setProfileBanner(prototype.getShopitemByID(2, 1));
      }
    }
  }, [hasProfileBanner]);

  return (
    <>
      {selectedClan && (
        <>
          <section className="header header-secondary surface surface-dimmed sm:rounded-lg mb-4">
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
                      <Link href={`/prototype/clans/${selectedClan.id}`}>
                        <a href="#">
                          <span>{selectedClan.nickname}</span>
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
              <div className="space-y-2">
                {selectedClan.isYou ? (
                  <Link href="settings">
                    <a
                      type="button"
                      className="button button-sm button-secondary w-full"
                    >
                      <span className="icon icon-cogwheel" />
                      <span>Clan settings</span>
                    </a>
                  </Link>
                ) : (
                  <div className="hidden">
                    {selectedClan.isPublic ? (
                      <Link href="#">
                        <a
                          type="button"
                          className="button button-sm button-primary flex-1"
                        >
                          <span>Join clan</span>
                        </a>
                      </Link>
                    ) : (
                      <>
                        {selectedClan.hasInvitedYou ? (
                          <div className="flex gap-2">
                            <Link href="#">
                              <a
                                type="button"
                                className="button button-sm button-success flex-1"
                              >
                                <span>Accept invite</span>
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
                        ) : (
                          <Link href="#">
                            <a
                              type="button"
                              className="button button-sm button-primary flex-1"
                            >
                              <span>Apply to join</span>
                            </a>
                          </Link>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="header-bg">
              {selectedClan.isYou ? (
                <div className="flex">
                  <div className="relative">
                    <div className="avatar avatar-2xl avatar-squircle">
                      <div>
                        <img src={selectedClan.avatar} alt="avatar" />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="button button-tertiary rounded-full absolute z-20 bottom-0 right-0"
                    >
                      <span className="icon icon-pen-2" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="avatar avatar-2xl avatar-squircle">
                  <div>
                    <img src={selectedClan.avatar} alt="avatar" />
                  </div>
                </div>
              )}
              {selectedClan.isYou && (
                <button
                  type="button"
                  className="button button-tertiary rounded-full absolute z-20 top-2 right-2"
                >
                  <span className="icon icon-camera" />
                </button>
              )}
              {hasProfileBanner ? (
                <img src={profileBanner?.image} alt={profileBanner?.name} />
              ) : (
                <>
                  {selectedClan.shopItems?.profileBanner ? (
                    <>
                      <img
                        src={
                          prototype.getShopitemByID(
                            2,
                            selectedClan.shopItems?.profileBanner
                          ).image
                        }
                        alt=""
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src="https://res.cloudinary.com/gloot/image/upload/v1672241804/Stryda/illustrations/Generic_bg.png"
                        alt=""
                      />
                    </>
                  )}
                </>
              )}
            </div>
          </section>
          <section className="header surface sm:rounded-lg min-h-4 mb-4 hidden">
            <div className="header-content">
              <div className="header-body">
                <div className="flex flex-col md:flex-row gap-4 md:items-center self-center">
                  <div className="avatar avatar-xl avatar-squircle">
                    <div>
                      <img src={selectedClan.avatar} alt="avatar" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <div className="flex items-baseline gap-1">
                        <h1>
                          &#91;
                          {selectedClan.tag}
                          &#93; {selectedClan.nickname}
                        </h1>
                      </div>
                      <div className="block lg:hidden text-left">
                        {selectedClan.isYou && (
                          <a
                            type="button"
                            href="#"
                            className="button button-xs button-secondary"
                          >
                            <span className="icon icon-cogwheel" />
                            <span>Profile settings</span>
                          </a>
                        )}
                      </div>
                    </div>
                    {selectedClan.bio && (
                      <p className="text-ui-300 mt-1 text-left">
                        <ReadMore content={selectedClan.bio} max={150} />
                      </p>
                    )}
                    <p className="text-ui-300 mt-1 text-left">
                      <span className="text-ui-300">We speak: </span>
                      <span className="text-main">{selectedClan.lang}</span>
                    </p>

                    <div className="flex items-center justify-start mt-4 gap-2">
                      <div className="flex gap-1">
                        {selectedClan.games?.map((game, gameIndex) => (
                          <GameIcon key={gameIndex} game={game} />
                        ))}
                      </div>
                      <hr className="m-0 separator separator-vertical h-7" />
                      <div className="flex gap-2">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-meta lg:items-end p-3 animate-slide-in-bottom">
              {selectedClan.isYou ? (
                <div className="space-y-2">
                  <div className="bg-gradient-radial-to-b from-ui-500/75 to-ui-600/50 backdrop-blur rounded-lg shadow-lg w-auto p-3 text-right space-y-3">
                    <div className="text-center">
                      You have <b>3</b> pending applications
                    </div>
                    <div className="flex gap-2">
                      <Link href="/prototype/clans/1/applications">
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
                  <div className="bg-gradient-radial-to-b from-ui-500/75 to-ui-600/50 backdrop-blur rounded-lg shadow-lg w-auto p-3 text-right space-y-3">
                    <button
                      type="button"
                      className="button button-sm button-secondary w-full"
                    >
                      <span className="icon icon-cogwheel" />
                      <span>Clan settings</span>
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {hasAccepted ? (
                    <>
                      <div className="bg-gradient-radial-to-b from-ui-500/75 to-ui-600/50 backdrop-blur rounded-lg shadow-lg w-auto p-3 text-right space-y-3">
                        <div className="text-center">
                          Welcome to the {selectedClan.nickname} clan{" "}
                          {prototype.getUserByID(1).nickname}!
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {selectedClan.isPublic ? (
                        <div className="bg-gradient-radial-to-b from-ui-500/75 to-ui-600/50 backdrop-blur rounded-lg shadow-lg w-auto p-3 text-right space-y-3">
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
                            <div className="bg-gradient-radial-to-b from-ui-500/75 to-ui-600/50 backdrop-blur rounded-lg shadow-lg w-auto p-3 text-right space-y-3">
                              <div className="text-center">
                                Congratulations, you have been invited to join
                                this clan.
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
                            <div className="bg-gradient-radial-to-b from-ui-500/75 to-ui-600/50 backdrop-blur rounded-lg shadow-lg w-auto p-3 text-right space-y-3">
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
            <div className="header-bg">
              <img src="https://res.cloudinary.com/gloot/image/upload/v1672241804/Stryda/illustrations/Generic_bg.png" />
            </div>
          </section>
        </>
      )}
    </>
  );
}
