import React, { useContext, useState, useEffect } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Link from "next/link";
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
      <div className="item-image ml-2 py-1">
        <Link
          href={`/stryda/profile/${
            prototype.getUserByID(item.id).id
          }${prototype.getURLparams()}`}
        >
          <Avatar id={item.id} size="avatar-tiny" hasTooltip={true} />
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
              {prototype.getUserByID(item.id)?.clan && (
                <>
                  &#91;
                  {
                    prototype.getClanByID(prototype.getUserByID(item.id)?.clan)
                      ?.tag
                  }
                  &#93;{" "}
                </>
              )}
              {prototype.getUserByID(item.id).nickname}
            </span>
          </div>
        </Link>
      </div>
      {prototype.getUserByID(item.id).clan === 1 && (
        <div className="item-actions">
          {giftTokens && (
            <Tooltip tooltip="Gift tokens">
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
      )}
    </li>
  );
};

export default function WidgetFollowings(props) {
  const prototype = usePrototypeData();
  const state = props.state || "normal";
  const length = 5;
  const [followings, setFollowings] = useState([]);

  useEffect(() => {
    const sortedData = [...prototype.users];
    sortedData.sort((a, b) => (a.isOnline ? -1 : 1)).filter((i) => !i.isYou);
    setFollowings(sortedData);
  }, [prototype]);

  const [maxLinesLoader, setMaxLinesLoader] = useState(false);
  const [hasLoadedMore, setHasLoadedMore] = useState(false);
  const [maxLines, setMaxLines] = useState(length);

  const handleMoreLines = () => {
    setMaxLinesLoader(true);
    const interval = setTimeout(() => {
      setMaxLinesLoader(false);
      setMaxLines(maxLines + length);
      setHasLoadedMore(true);
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
            <h2 className="text-base text-ui-100 interactive">
              Followings
              {/* <span className="text-sm">(167)</span> */}
            </h2>
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
        {state === "normal" && (
          <div className="bg-ui-850">
            <ul className="divide-y-0">
              {followings.slice(0, maxLines).map((item, itemIndex) => (
                <Line key={itemIndex} item={item} giftTokens={true} />
              ))}
            </ul>
            {prototype.users.filter((i) => !i.isOnline && !i.isYou).length >
              maxLines && (
              <div className="px-2 pb-2 text-center">
                {hasLoadedMore ? (
                  <Link
                    href={`/stryda/profile/1?tab=following${prototype.getURLparams()}`}
                  >
                    <button
                      type="button"
                      className={`button button-secondary button-sm`}
                    >
                      <span>View all (167)</span>
                    </button>
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={`button button-ghost button-sm w-full ${
                      maxLinesLoader ? "is-loading" : ""
                    }`}
                    onClick={() => handleMoreLines()}
                  >
                    <span>View {length} more</span>
                  </button>
                )}
              </div>
            )}
          </div>
        )}
        {state === "empty" && (
          <>
            <div className="bg-ui-850 p-4">
              <div className="flex items-center gap-4">
                <p className="text-sm flex-1">
                  Make sure you follow your friends or other Stryda players, to
                  see them sharing their epic gameplays!
                </p>
              </div>
              <Link href={`/stryda/search${prototype.getURLparams()}`}>
                <button
                  type="button"
                  className="button button-sm button-primary mt-4"
                >
                  <span>Search for players</span>
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
