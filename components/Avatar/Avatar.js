import React, {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";
import { usePrototypeData } from "../../contexts/prototype";
import Tooltip from "../Tooltip/Tooltip";
import GameIcon from "../GameIcon/GameIcon";
import Link from "next/link";
import AchievementFrame from "../Achievements/AchievementFrame";
import AchievementIcon from "../Achievements/AchievementIcon";

export default function Avatar(props) {
  const prototype = usePrototypeData();
  const { query } = useRouter();
  const userId = props.id || 1;
  const size = props.size || "avatar-xs";
  const className = props.className || "";
  const [avatarFrame, setAvatarFrame] = useState(false);
  const hasAvatarFrame = query.avatarframe || false;
  const hasLevel = props.hasLevel !== undefined ? props.hasLevel : true;
  const isOnline = props.isOnline !== undefined ? props.isOnline : false;
  const hasTooltip = props.hasTooltip !== undefined ? props.hasTooltip : false;
  const hasTooltipXP =
    props.hasTooltipXP !== undefined ? props.hasTooltipXP : false;
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(userId));
  }, [userId]);

  useEffect(() => {
    if (hasAvatarFrame) {
      setAvatarFrame(prototype.getShopitemByID(1, hasAvatarFrame));
    } else {
      setAvatarFrame(prototype.getShopitemByID(1, 1));
    }
  }, [hasAvatarFrame]);

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const AvatarInner = (
    <>
      {selectedUser && (
        <div
          className={`avatar avatar-circle ${size}  ${
            selectedUser?.isPremium ? "avatar-premium" : ""
          } ${
            selectedUser?.isOnline ? "avatar-online" : ""
          } ${className}`}
        >
          {hasLevel && <b>{selectedUser.level}</b>}
          {selectedUser.isYou ? (
            <>{hasAvatarFrame && <img src={avatarFrame.image} alt="" />}</>
          ) : (
            <>
              {selectedUser.shopItems.avatarFrame && (
                <>
                  <img
                    src={
                      prototype.getShopitemByID(
                        1,
                        selectedUser.shopItems.avatarFrame
                      ).image
                    }
                    alt=""
                  />
                </>
              )}
            </>
          )}
          <div>
            <img src={selectedUser?.avatar} />
          </div>
          {size === "avatar-xs" && selectedUser?.isYou && !hasAvatarFrame && (
            <>{/*<i className="radar" />*/}</>
          )}
          {selectedUser.isOnline && !hasLevel && isOnline && <i />}
        </div>
      )}
    </>
  );

  return (
    <>
      {selectedUser && (
        <>
          {hasTooltip ? (
            <>
              {hasTooltipXP && userId === 1 ? (
                <Tooltip
                  placement={props.tooltipPlacement}
                  tooltip={
                    <div className="w-full max-w-[200px] p-2">
                      <div className="text-main text-center text-lg">
                        10423/15000 XP
                      </div>
                      <div className="flex justify-between items-baseline text-sm mt-2 mb-1">
                        <span>Level {selectedUser.level}</span>
                        <span className="text-ui-300">75%</span>
                      </div>
                      <div
                        className="progressbar progressbar-sm"
                        style={{ "--percent": "75" }}
                      >
                        <div />
                      </div>
                      <div className="text-sm text-ui-300 mt-2 text-center">
                        1224XP until level {selectedUser.level + 1}
                      </div>
                    </div>
                  }
                >
                  {AvatarInner}
                </Tooltip>
              ) : (
                <Tooltip
                  isLoading={true}
                  className="p-0"
                  placement={props.tooltipPlacement}
                  tooltip={
                    <div className={`w-72 h-[370px] flex flex-col`}>
                      <div>
                        {selectedUser.shopItems?.profileBanner ? (
                          <>
                            <img
                              src={
                                prototype.getShopitemByID(
                                  2,
                                  selectedUser.shopItems?.profileBanner
                                ).image
                              }
                              className="aspect-banner rounded-t bg-ui-800/75"
                              alt=""
                            />
                          </>
                        ) : (
                          <>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1672241804/Stryda/illustrations/Generic_bg.png"
                              className="aspect-banner rounded-t bg-ui-800/75"
                              alt=""
                            />
                          </>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-4 -mt-7">
                        <div
                          className={`avatar avatar-circle avatar-sm  ${
                            selectedUser?.isPremium ? "avatar-premium" : ""
                          } ${
                            selectedUser?.isOnline ? "is-online" : ""
                          }`}
                        >
                          {hasLevel && <b>{selectedUser.level}</b>}
                          {!selectedUser.isYou &&
                            selectedUser?.shopItems?.avatarFrame && (
                              <img
                                src={
                                  prototype.getShopitemByID(
                                    1,
                                    selectedUser.shopItems.avatarFrame
                                  ).image
                                }
                                alt=""
                              />
                            )}
                          {selectedUser.isYou && hasAvatarFrame && (
                            <img src={avatarFrame.image} alt="" />
                          )}
                          <div>
                            <img src={selectedUser?.avatar} />
                          </div>
                          {size === "avatar-xs" &&
                            selectedUser?.isYou &&
                            !hasAvatarFrame && <i className="radar" />}
                          {selectedUser.isOnline && !hasLevel && <i />}
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <h5 className="text-ui-100">
                              {selectedUser.clan && (
                                <>
                                  {" "}
                                  &#91;
                                  {
                                    prototype.getClanByID(selectedUser.clan)
                                      ?.tag
                                  }
                                  &#93;
                                </>
                              )}{" "}
                              {selectedUser.nickname}
                            </h5>
                            <img
                              src={`https://flagcdn.com/${selectedUser.countryFlag}.svg`}
                              className="aspect-video rounded-sm w-6"
                            />
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
                          <div className="flex justify-center gap-1 mb-1">
                            {prototype
                              .getUserByID(userId)
                              .games?.map((game, gameIndex) => (
                                <GameIcon
                                  key={gameIndex}
                                  game={game}
                                  size="text-sm"
                                />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="flex items-center justify-around gap-2 text-center leading-tight">
                          <div>
                            <div className="text-xs uppercase text-ui-300">
                              played ladders
                            </div>
                            <div className="text-xl uppercase text-ui-100">
                              {selectedUser.stats.playedLadders ? (
                                <>{selectedUser.stats.playedLadders}</>
                              ) : (
                                <>——</>
                              )}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs uppercase text-ui-300">
                              Avg. Ladder score
                            </div>
                            <div className="text-xl uppercase text-ui-100">
                              {selectedUser.stats.avgScore ? (
                                <>{selectedUser.stats.avgScore}</>
                              ) : (
                                <>——</>
                              )}
                            </div>
                          </div>
                        </div>
                        {selectedUser.achievements?.favoriteBadge && (
                          <div className="flex flex-col items-center justify-center mb-4 px-2">
                            <div className="w-16 h-16 achievement-level-4">
                              <AchievementFrame url="https://res.cloudinary.com/gloot/image/upload/v1678871888/Stryda/achievements/frames/achievement-frame-lvl4-animated.svg" />
                              <AchievementIcon url="https://res.cloudinary.com/gloot/image/upload/v1674739347/Stryda/achievements/achivement-icon-mission.svg" />
                            </div>
                            <div className="uppercase text-xs text-left text-achievement-level-4 animate-slide-in-top">
                              Mission Hunter
                            </div>
                          </div>
                        )}
                        <div className="p-2 rounded bg-ui-800/50 mt-2">
                          {selectedUser.clan ? (
                            <Link
                              href={`/prototype/clans/${
                                selectedUser.clan
                              }${prototype.getURLparams()}`}
                            >
                              <div className="flex gap-2 items-center justify-center">
                                <div className="avatar avatar-tiny avatar-squircle">
                                  <div>
                                    <img
                                      src={
                                        prototype.getClanByID(selectedUser.clan)
                                          .avatar
                                      }
                                      alt="avatar"
                                    />
                                  </div>
                                </div>
                                <div className="text-ui-100 truncate">
                                  &#91;
                                  {prototype.getClanByID(selectedUser.clan).tag}
                                  &#93;{" "}
                                  {
                                    prototype.getClanByID(selectedUser.clan)
                                      .nickname
                                  }
                                </div>
                              </div>
                            </Link>
                          ) : (
                            <div className="space-y-2">
                              <div className="text-center text-sm">
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
                        </div>
                      </div>
                    </div>
                  }
                >
                  {AvatarInner}
                </Tooltip>
              )}
            </>
          ) : (
            AvatarInner
          )}
        </>
      )}
    </>
  );
}
