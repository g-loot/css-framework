import React, { Fragment, useContext, useState, useEffect } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { VariablesContext } from "@/contexts/variables";
import Link from "next/link";
import GameIcon from "@/components/GameIcon/GameIcon";
import Avatar from "@/components/Avatar/Avatar";
import Tooltip from "@/components/Tooltip/Tooltip";
import ButtonFeedback from "@/components/Button/ButtonFeedback";
import ModalGiftTokens from "../clans/modal-gift-tokens";

const Line = ({ item, giftTokens, addFollowing }) => {
  const uiContext = useContext(UiContext);
  function openModalGiftTokens(selectedUser) {
    uiContext.openModal(<ModalGiftTokens selectedUser={selectedUser} />);
  }
  const prototype = usePrototypeData();
  return (
    <li className="item py-1">
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
          <div className="item-title flex gap-2 items-center interactive text-sm">
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
        {giftTokens && (
          <Tooltip tooltip="Gift token">
            <button
              type="button"
              className="button button-tertiary rounded-full"
              onClick={() => {
                openModalGiftTokens(prototype.getUserByID(item.id).nickname);
              }}
            >
              <span className="icon icon-token" />
            </button>
          </Tooltip>
        )}
        {addFollowing && (
          <Tooltip placement="left" tooltip="Follow">
            <ButtonFeedback
              variant="button-tertiary rounded-full"
              icon="icon-a-add"
              message="Player added to your following"
            />
          </Tooltip>
        )}
      </div>
    </li>
  );
};

export default function WidgetFollowings(props) {
  const prototype = usePrototypeData();
  const length = 3;
  const [maxOnlineLoader, setMaxOnlineLoader] = useState(false);
  const [maxOnline, setMaxOnline] = useState(length);

  const handleMoreOnline = () => {
    setMaxOnlineLoader(true);
    const interval = setTimeout(() => {
      setMaxOnlineLoader(false);
      setMaxOnline(maxOnline + length);
    }, 500);
    return () => {
      clearTimeout(interval);
    };
  };

  const [maxFollowingsLoader, setMaxFollowingsLoader] = useState(false);
  const [maxFollowings, setMaxFollowings] = useState(length);

  const handleMoreFollowings = () => {
    setMaxFollowingsLoader(true);
    const interval = setTimeout(() => {
      setMaxFollowingsLoader(false);
      setMaxFollowings(maxFollowings + length);
    }, 500);
    return () => {
      clearTimeout(interval);
    };
  };
  return (
    <>
      <div className="surface rounded">
        <div className="flex items-baseline justify-between border-b border-b-ui-700 px-3 py-2">
          <Link
            href={`/stryda/profile/1?tab=following${prototype.getURLparams()}`}
          >
            <h2 className="text-base text-ui-100 interactive">Followings</h2>
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
        <div className="bg-ui-850">
          <h3 className="normal-case text-base font-base font-normal px-3 pt-2 pb-1">
            Online
          </h3>
          <ul className="divide-y-0">
            {prototype.users
              .filter((i) => i.isOnline && !i.isYou)
              .slice(0, maxOnline)
              .map((item, itemIndex) => (
                <Line key={itemIndex} item={item} giftTokens={true} />
              ))}
          </ul>
          {prototype.users.filter((i) => !i.isOnline && !i.isYou).length > maxOnline && (
            <div className="p-2 text-center">
              <button
                type="button"
                className={`button button-ghost button-sm rounded w-full ${
                  maxOnlineLoader ? "is-loading" : ""
                }`}
                onClick={() => handleMoreOnline()}
              >
                <span>View more</span>
              </button>
            </div>
          )}
          <h3 className="normal-case text-base font-base font-normal px-3 pt-2 pb-1 border-t border-t-ui-700">
            Suggestions
          </h3>
          <ul className="divide-y-0">
            {prototype.users
              .filter((i) => !i.isOnline)
              .filter((i) => !i.isYou)
              .slice(0, maxFollowings)
              .map((item, itemIndex) => (
                <Line key={itemIndex} item={item} addFollowing={true} />
              ))}
          </ul>
          {prototype.users.filter((i) => !i.isOnline).filter((i) => !i.isYou).length > maxFollowings && (
            <div className="p-2 text-center">
              <button
                type="button"
                className={`button button-ghost button-sm rounded w-full ${
                  maxFollowingsLoader ? "is-loading" : ""
                }`}
                onClick={() => handleMoreFollowings()}
              >
                <span>View more</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
