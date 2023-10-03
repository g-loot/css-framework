import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Avatar from "@/components/Avatar/Avatar";
import Link from "next/link";
import ModalRemoveFriend from "../profile/[user_id]/modal-remove-friend";
import ButtonFeedback from "@/components/Button/ButtonFeedback";
import GameIcon from "@/components/GameIcon/GameIcon";
import AchievementFrame from "@/components/Achievements/AchievementFrame";
import AchievementIcon from "@/components/Achievements/AchievementIcon";
import ModalGiftTokens from "../clans/modal-gift-tokens";
import ModalUnfollow from "../profile/modal-unfollow";
import Video from "./Video";
import ModalFeedItemViewer from "../modal-feeditemdetailsviewer";
import { dataFeedItems } from "@/mock-data/data-feed";

export default function WidgetUser(props) {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const user_id = props.id || 1;
  const isInTooltip = props.isInTooltip || false;
  const hasActions = props.hasActions !== undefined ? props.hasActions : true;
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeTooltip, setActiveTooltip] = useState(true);
  const [isFollowing, setIsFollowing] = useState(null);
  const state = props.state || "normal";

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(user_id));
  }, [user_id]);

  function openModalRemoveFriends(id) {
    uiContext.openModal(<ModalRemoveFriend id={id} />);
  }

  function openModalGiftTokens() {
    uiContext.openModal(
      <ModalGiftTokens selectedUser={selectedUser.nickname} />
    );
  }
  function openModalUnfollow() {
    setActiveTooltip(false);
    uiContext.openModal(<ModalUnfollow selectedUser={selectedUser} />);
    const interval = setTimeout(() => {
      setActiveTooltip(true);
    }, 50);
    return () => {
      clearTimeout(interval);
    };
  }

  function openFeedItemDetailsMatch(target) {
    const item = dataFeedItems[1];
    uiContext.openModal(<ModalFeedItemViewer item={item} selectedTab={target ? target : "default"} />);
  }

  return (
    <>
      {selectedUser && (
        <div
          className={`surface relative rounded text-center ${
            isInTooltip ? "surface-ui-600" : ""
          }`}
        >
          <div className="relative z-10">
            <Link
              href={`/stryda/profile/${
                selectedUser.id
              }${prototype.getURLparams()}`}
            >
              <div className="absolute z-10 inset-0 flex items-center justify-center interactive">
                <Avatar id={user_id} hasTooltip={false} size="avatar-md" />
              </div>
            </Link>
            {selectedUser.shopItems?.profileBanner ? (
              <>
                <img
                  src={
                    prototype.getShopitemByID(
                      2,
                      selectedUser.shopItems?.profileBanner
                    ).image
                  }
                  alt=""
                  className="rounded-t aspect-banner w-full"
                />
              </>
            ) : (
              <>
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1692022099/Stryda/illustrations/Generic_background_v2.jpg"
                  alt=""
                  className="rounded-t aspect-banner w-full"
                />
              </>
            )}
          </div>
          <div className="relative z-10 p-2 pt-4">
            <Link
              href={`/stryda/profile/${
                selectedUser.id
              }${prototype.getURLparams()}`}
            >
              <>
                <div className="mt-4 w-full text-xs uppercase text-achievement-level-2">
                  {prototype.getAchievementitemByID(1, 4).name}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <h2
                    className={`text-xl leading-tight truncate interactive ${
                      selectedUser.isPremium ? "text-premium-500" : ""
                    }`}
                  >
                    {" "}
                    {selectedUser.clan && (
                      <>
                        {" "}
                        &#91;
                        {prototype.getClanByID(selectedUser.clan)?.tag}
                        &#93;
                      </>
                    )}{" "}
                    {selectedUser.nickname}
                  </h2>

                  {selectedUser.country && (
                    <div
                      className="text-ui-300 text-center"
                      data-tooltip={selectedUser.country}
                    >
                      <img
                        src={`https://flagcdn.com/${selectedUser?.countryFlag}.svg`}
                        className="aspect-video rounded-sm max-w-[1.5rem] mx-auto"
                      />
                    </div>
                  )}
                </div>
                {selectedUser?.isOnline ? (
                  <div className="flex justify-center mt-0.5 mb-1">
                    <div className="chip chip-status chip-success chip-xs">
                      <span className="badge" />
                      <span>online</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center mt-0.5 mb-1">
                    <div className="chip chip-status chip-xs">
                      <span className="badge" />
                      <span>last seen 3 days ago</span>
                    </div>
                  </div>
                )}
              </>
            </Link>

            {state === "mvp" ? (
              <>
                <ul className="flex justify-around items-stretch divide-x-1 divide-ui-700 leading-tight text-center my-4 gap-x-2">
                  <li>
                    <Link
                      href={`/stryda/profile/${
                        selectedUser.id
                      }${prototype.getURLparams()}`}
                    >
                      <button
                        type="button"
                        className="interactive leading-tight"
                      >
                        <div className="text-sm text-ui-300">
                          Ladders played
                        </div>
                        <div className="text-lg text-ui-100">234</div>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/stryda/profile/${
                        selectedUser.id
                      }${prototype.getURLparams()}`}
                    >
                      <button
                        type="button"
                        className="interactive leading-tight"
                      >
                        <div className="text-sm text-ui-300">
                          Avg. placement
                        </div>
                        <div className="text-lg text-ui-100">#43</div>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/stryda/profile/${
                        selectedUser.id
                      }?tab=achievements${prototype.getURLparams("&")}`}
                    >
                      <button
                        type="button"
                        className="interactive leading-tight"
                      >
                        <div className="text-sm text-ui-300">Achievements</div>
                        <div className="text-lg text-ui-100">
                          {selectedUser.stats.followers > 0 ? (
                            Math.round(selectedUser.stats.followers / 2)
                          ) : (
                            <>--</>
                          )}
                        </div>
                      </button>
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              <>
                {prototype.getUserMatches(selectedUser.id).length > 0 ? (
                  <>
                    {prototype
                      .getUserMatches(selectedUser.id)
                      .filter((m) => m.meta?.media)
                      .slice(0, 1)
                      .map((item, itemIndex) => (
                        <button key={itemIndex} type="button" className="inline-flex items-center justify-center gap-4 mt-5 text-left interactive rounded" onClick={() => openFeedItemDetailsMatch("highlight")}>
                          <div className="w-32 text-0 pointer-events-none">
                            <Video item={item} hasMeta={false} size="xs" />
                          </div>
                          <div className="leading-tight">
                            <div className="text-sm text-ui-300">
                              Latest highlight
                            </div>
                            <div className="text-lg text-ui-100">
                              {selectedUser.stats.highlightViews > 0 ? (
                                Math.round(
                                  selectedUser.stats.highlightViews / 2
                                )
                              ) : (
                                <>--</>
                              )}{" "}
                              views
                            </div>
                          </div>
                        </button>
                      ))}
                  </>
                ) : (
                  <div className="flex items-center justify-center gap-4 mt-5 mb-4 text-left interactive rounded">
                    <div className="w-32 text-0 aspect-video rounded-2 bg-ui-600 grid place-content-center">
                      <span className="icon text-2xl text-ui-400 icon-circle-caret-right" />
                    </div>
                    <div className="leading-tight">
                      <div className="text-sm text-ui-300">
                        Latest highlight
                      </div>
                      <div className="text-xs">No highlights published yet</div>
                    </div>
                  </div>
                )}
                <ul className="flex justify-around items-stretch divide-x-1 divide-ui-700 leading-tight text-center my-4 gap-x-2">
                  <li>
                    <Link
                      href={`/stryda/profile/${
                        selectedUser.id
                      }?tab=followers${prototype.getURLparams("&")}`}
                    >
                      <button
                        type="button"
                        className="interactive leading-tight"
                      >
                        <div className="text-sm text-ui-300">Followers</div>
                        <div className="text-lg text-ui-100">
                          {selectedUser.stats.followers > 0 ? (
                            selectedUser.stats.followers
                          ) : (
                            <>--</>
                          )}
                        </div>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/stryda/profile/${
                        selectedUser.id
                      }?tab=followings${prototype.getURLparams("&")}`}
                    >
                      <button
                        type="button"
                        className="interactive leading-tight"
                      >
                        <div className="text-sm text-ui-300">Highlights</div>
                        <div className="text-lg text-ui-100">
                          {selectedUser.stats.highlightViews > 0 ? (
                            selectedUser.stats.highlightViews
                          ) : (
                            <>--</>
                          )}
                        </div>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/stryda/profile/${
                        selectedUser.id
                      }?tab=achievements${prototype.getURLparams("&")}`}
                    >
                      <button
                        type="button"
                        className="interactive leading-tight"
                      >
                        <div className="text-sm text-ui-300">Achievements</div>
                        <div className="text-lg text-ui-100">
                          {selectedUser.stats.followers > 0 ? (
                            Math.round(selectedUser.stats.followers / 2)
                          ) : (
                            <>--</>
                          )}
                        </div>
                      </button>
                    </Link>
                  </li>
                </ul>
              </>
            )}
            <div className="space-y-2">
              {!selectedUser.clan || state === "noclan" ? (
                <>
                  {selectedUser.isYou ? (
                    <div className="p-2 rounded surface-ui-600">
                      <div className="space-y-2">
                        <div className="text-center text-sm">
                          Join or create a Clan, play together and have fun!
                        </div>
                        <div className="flex gap-2">
                          <Link
                            href={`/stryda/clans${prototype.getURLparams()}`}
                          >
                            <button
                              type="button"
                              className="flex-1 button button-sm button-primary w-full"
                            >
                              <span>Explore Clans</span>
                            </button>
                          </Link>
                          <Link
                            href={`/stryda/clans${prototype.getURLparams()}`}
                          >
                            <button
                              type="button"
                              className="flex-1 button button-sm button-secondary w-full"
                            >
                              <span>Create Clan</span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-2 rounded surface-ui-600">
                      <div className="space-y-2">
                        <div className="text-center text-sm">
                          {selectedUser.nickname} is not part of a clan.
                        </div>
                        <button
                          type="button"
                          className="button button-sm button-secondary w-full"
                        >
                          <span>Recruit to your Clan</span>
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={`/stryda/clans/${
                    selectedUser.clan
                  }${prototype.getURLparams()}`}
                >
                  <div
                    className={`px-2 py-1 rounded ${
                      isInTooltip ? "surface-ui-700" : "surface-ui-600"
                    } interactive text-0`}
                  >
                    <div className="flex gap-2 items-center justify-center">
                      <div className="avatar avatar-tiny avatar-squircle">
                        <div>
                          <img
                            src={
                              prototype.getClanByID(selectedUser.clan).avatar
                            }
                            alt="avatar"
                          />
                        </div>
                      </div>
                      <div className="" data-badge="1">
                        <span className="truncate text-sm text-left">
                          &#91;
                          {prototype.getClanByID(selectedUser.clan).tag}
                          &#93;{" "}
                          {prototype.getClanByID(selectedUser.clan).nickname}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
              {selectedUser.isYou ? (
                <>
                  {hasActions && (
                    <Link
                      href={`/stryda/profile/settings${prototype.getURLparams(
                        "&"
                      )}`}
                    >
                      <a
                        type="button"
                        className="button button-sm button-tertiary w-full"
                      >
                        <span className="icon icon-cogwheel" />
                        <span>Profile settings</span>
                      </a>
                    </Link>
                  )}
                </>
              ) : (
                <div className="flex items-stretch gap-2">
                  {selectedUser.clan === 1 && (
                    <button
                      type="button"
                      className="button button-sm button-primary flex-1"
                      onClick={() => {
                        openModalGiftTokens();
                      }}
                    >
                      <span className="icon icon-token" />
                      <span>Gift tokens</span>
                    </button>
                  )}
                  {isFollowing ? (
                    <button
                      type="button"
                      className="button button-sm button-tertiary flex-1"
                      onClick={() => {
                        openModalUnfollow();
                      }}
                    >
                      <span>Following</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="button button-sm button-primary flex-1"
                      onClick={() => setIsFollowing(true)}
                    >
                      <span className="icon icon-a-add" />
                      <span>Follow</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
