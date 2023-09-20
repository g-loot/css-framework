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

  return (
    <>
      {selectedUser && (
        <div className={`surface rounded text-center ${isInTooltip ? 'surface-ui-600' : ''}`}>
          <div className="relative">
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
                  className="rounded-t"
                />
              </>
            ) : (
              <>
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1692022099/Stryda/illustrations/Generic_background_v2.jpg"
                  alt=""
                  className="rounded-t"
                />
              </>
            )}
          </div>
          <div className="p-2">
            <Link
              href={`/stryda/profile/${
                selectedUser.id
              }${prototype.getURLparams()}`}
            >
              <div className="flex items-center justify-center gap-2 mt-4">
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
            </Link>
            <div className="my-4 text-center space-y-2">
              <ul className="flex justify-around items-stretch divide-x-1 divide-ui-700 leading-tight text-center">
                <li>
                  <Link
                    href={`/stryda/profile/${
                      selectedUser.id
                    }?tab=followers${prototype.getURLparams("&")}`}
                  >
                    <button type="button" className="interactive px-2">
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
                    }?tab=followers${prototype.getURLparams("&")}`}
                  >
                    <button type="button" className="interactive px-2">
                      <div className="text-sm text-ui-300">Following</div>
                      <div className="text-lg text-ui-100">
                        {selectedUser.stats.followings > 0 ? (
                          selectedUser.stats.followings
                        ) : (
                          <>--</>
                        )}
                      </div>
                    </button>
                  </Link>
                </li>
              </ul>
              <ul className="flex justify-around items-stretch divide-x-1 divide-ui-700 leading-tight text-center">
                <li>
                  <Link
                    href={`/stryda/profile/${
                      selectedUser.id
                    }?tab=stats${prototype.getURLparams("&")}`}
                  >
                    <button type="button" className="interactive px-2">
                      <div className="text-sm text-ui-300">Top Games</div>
                      <div className="relative">
                        <div className="flex items-center justify-center gap-0.5">
                          <GameIcon game={1} size="text-base" />
                          <GameIcon game={7} size="text-xs" />
                        </div>
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
                    <button type="button" className="interactive px-2">
                      <div className="text-sm text-ui-300">Achievements</div>
                      <div className="flex items-center justify-center gap-1 text-lg text-ui-100">
                        <div className="w-8 h-full flex-none -my-4 achievement-level-4">
                          <AchievementFrame
                            url={`https://res.cloudinary.com/gloot/image/upload/v1678871888/Stryda/achievements/frames/achievement-frame-lvl5-animated.svg`}
                          />
                          <AchievementIcon
                            url={`https://res.cloudinary.com/gloot/image/upload/v1678872380/Stryda/achievements/icons/achievement-icon-${
                              prototype.getAchievementitemByID(1, 4).icon
                            }.svg`}
                          />
                        </div>
                        <span>+ 20</span>
                      </div>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/stryda/profile/${
                      selectedUser.id
                    }?tab=highlights${prototype.getURLparams("&")}`}
                  >
                    <button type="button" className="interactive px-2">
                      <div className="text-sm text-ui-300">
                        Highlights views
                      </div>
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
              </ul>
            </div>
            <div className="space-y-2">
              {prototype.getUserMatches(selectedUser.id).length > 0 ? (
                <>
                  {prototype
                    .getUserMatches(selectedUser.id)
                    .filter((m) => m.meta?.media)
                    .slice(0, 1)
                    .map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={`/stryda/profile/${
                          selectedUser.id
                        }?tab=highlights${prototype.getURLparams("&")}`}
                      >
                        <div className={`group flex items-center justify-start gap-4 text-left interactive rounded bg-gradient-to-b ${isInTooltip ? 'from-ui-800/75 to-ui-800/10' : 'from-ui-850/75 to-ui-850/10'} pr-3`}>
                          <div className="w-32 text-0">
                            <Video
                              item={item}
                              hasMeta={false}
                              hasGameIcon={false}
                            />
                          </div>
                          <div className="text-sm text-ui-300 flex-1">
                            <div>Latest highlight</div>
                            <div>
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
                          <span className="icon icon-ctrl-right text-ui-400 opacity-50 group-hover:translate-x-1 group-hover:text-ui-200 transition-all ease-in-out duration-150" />
                        </div>
                      </Link>
                    ))}
                </>
              ) : (
                <div className={`group flex items-center justify-start gap-4 text-left interactive rounded bg-gradient-to-b ${isInTooltip ? 'from-ui-800/75 to-ui-800/10' : 'from-ui-850/75 to-ui-850/10'} pr-3`}>
                  <div className="w-32 text-0 aspect-video rounded bg-ui-600 grid place-content-center">
                    <span className="icon text-2xl text-ui-400 icon-circle-caret-right" />
                  </div>
                  <div className="text-sm text-ui-300 flex-1">
                    <div>Latest highlight</div>
                    <div>No highlights published yet</div>
                  </div>
                  <span className="icon icon-ctrl-right text-ui-400 opacity-50 group-hover:translate-x-1 group-hover:text-ui-200 transition-all ease-in-out duration-150" />
                </div>
              )}
              {selectedUser.clan ? (
                <Link
                  href={`/stryda/clans/${
                    selectedUser.clan
                  }${prototype.getURLparams()}`}
                >
                  <div className={`px-2 py-1 rounded ${isInTooltip ? 'surface-ui-700' : 'surface-ui-600'} interactive text-0`}>
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
