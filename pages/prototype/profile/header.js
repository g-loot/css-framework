import React, { useEffect, useState, useContext } from "react";

import Link from "next/link";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";
import ReadMore from "../../../components/ReadMore/ReadMore";
import GameIcon from "../../../components/GameIcon/GameIcon";
import Avatar from "../../../components/Avatar/Avatar";
import ModalAvatarEdit from "./[user_id]/modal-avataredit";
import ModalRemoveFriend from "../friends/modal-remove-friend";
import { UiContext } from "../../../contexts/ui";

export default function ProfileHeader(props) {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedUser, setSelectedUser] = useState(null);
  const emptyClan = query.emptyclan === "true" ? true : false;
  const uiContext = useContext(UiContext);
  const { user_id } = router.query;
  const hasAvatarFrame = query.avatarframe || false;
  const breadcrumbs = props.breadcrumbs;
  const [avatarFrame, setAvatarFrame] = useState(false);
  const modalAvatarEdit = query.modalavataredit === "true" ? true : false;
  const hasProfileBanner = query.profilebanner || false;
  const [profileBanner, setProfileBanner] = useState(false);

  useEffect(() => {
    if (hasAvatarFrame) {
      setAvatarFrame(prototype.getShopitemByID(1, hasAvatarFrame));
    }
  }, []);

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(user_id));
  }, [user_id]);

  useEffect(() => {
    if (modalAvatarEdit) {
      openModalAvatarEdit(1);
    }
  }, [modalAvatarEdit]);

  function openModalAvatarEdit(id) {
    uiContext.openModal(<ModalAvatarEdit id={id} />);
  }

  function openModalRemoveFriends(id) {
    uiContext.openModal(<ModalRemoveFriend id={id}></ModalRemoveFriend>);
  }

  useEffect(() => {
    if (hasProfileBanner) {
      setProfileBanner(prototype.getShopitemByID(2, hasProfileBanner));
    } else {
      setProfileBanner(prototype.getShopitemByID(2, 1));
    }
  }, [hasProfileBanner]);

  return (
    <>
      {selectedUser && (
        <section className="header header-secondary surface surface-dimmed sm:rounded-lg">
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
              <div className="flex flex-col md:flex-row gap-4 md:items-center self-center">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="flex items-baseline gap-1">
                      <h1
                        className={`${
                          selectedUser.isPremium ? "text-premium-500" : ""
                        }`}
                      >
                        {selectedUser.nickname}
                      </h1>
                      <img
                        src={`https://flagcdn.com/${selectedUser.countryFlag}.svg`}
                        className="aspect-video rounded-sm max-w-[1.5rem]"
                      />
                    </div>
                  </div>

                  {/*

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
                      */}
                </div>
              </div>
            </div>
          </div>
          <div className="header-meta lg:items-end p-3">
            <div className="space-y-2">
              {selectedUser.isYou && (
                <Link href="settings">
                  <a
                    type="button"
                    className="button button-sm button-secondary w-full"
                  >
                    <span className="icon icon-cogwheel" />
                    <span>Profile settings</span>
                  </a>
                </Link>
              )}
              {!selectedUser.isYou && selectedUser.isFriend && (
                <a
                  type="button"
                  className="button button-sm button-secondary w-full"
                  onClick={openModalRemoveFriends.bind(this, selectedUser.id)}
                >
                  <span className="icon icon-a-remove" />
                  <span>Remove as friend</span>
                </a>
              )}
              {!selectedUser.isYou && !selectedUser.isFriend && (
                <Link href="/prototype/friends">
                  <a
                    type="button"
                    className="button button-sm button-primary w-full"
                  >
                    <span className="icon icon-add-27" />
                    <span>Add as friend</span>
                  </a>
                </Link>
              )}
            </div>
          </div>

          <div className="header-bg">
          {selectedUser.isYou ? (
                <div className="flex">
                  <div className="relative">
                    <Avatar
                      size="avatar-2xl"
                      id={selectedUser.id}
                      hasTooltip={true}
                      hasTooltipXP={true}
                      tooltipPlacement={"bottom"}
                    />

                    <button
                      onClick={openModalAvatarEdit.bind(this, hasAvatarFrame)}
                      type="button"
                      className="button button-tertiary rounded-full absolute z-20 bottom-0 right-0"
                    >
                      <span className="icon icon-pen-2" />
                    </button>
                  </div>
                </div>
              ) : (
                <Avatar size="avatar-2xl" id={selectedUser.id} />
              )}
            <button
              onClick={openModalAvatarEdit.bind(this, hasAvatarFrame)}
              type="button"
              className="button button-tertiary rounded-full absolute z-20 top-2 right-2"
            >
              <span className="icon icon-pen-2" />
            </button>
            {hasProfileBanner ? (
              <img src={profileBanner?.image} alt={profileBanner?.name} />
            ) : (
              <img src="https://res.cloudinary.com/gloot/image/upload/v1672241804/Stryda/illustrations/Generic_bg.png" alt="" />
            )}
          </div>
        </section>
      )}
    </>
  );
}
