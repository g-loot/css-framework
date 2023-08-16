import React, {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";
import { usePrototypeData } from "@/contexts/prototype";
import Tooltip from "../Tooltip/Tooltip";
import GameIcon from "../GameIcon/GameIcon";
import Link from "next/link";
import AchievementFrame from "../Achievements/AchievementFrame";
import AchievementIcon from "../Achievements/AchievementIcon";
import Avatar from "./Avatar";

export default function AvatarClan(props) {
  const prototype = usePrototypeData();
  const { query } = useRouter();
  const clanId = props.id || 1;
  const size = props.size || "avatar-xs";
  const className = props.className || "";
  const [avatarFrame, setAvatarFrame] = useState(false);
  const hasAvatarFrame = query.avatarframe || false;
  const hasLevel = props.hasLevel !== undefined ? props.hasLevel : true;
  const hasTooltip = props.hasTooltip !== undefined ? props.hasTooltip : false;
  const [selectedClan, setSelectedClan] = useState(null);

  useEffect(() => {
    setSelectedClan(prototype.getClanByID(clanId));
  }, [clanId]);

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const AvatarInner = (
    <>
      {selectedClan && (
        <div className={`avatar avatar-squircle ${size} ${className}`}>
          <div>
            <img src={selectedClan?.avatar} />
          </div>
        </div>
      )}
    </>
  );

  return (
    <>
      {selectedClan && (
        <>
          {hasTooltip ? (
            <>
              <Tooltip
                className="p-0"
                placement={props.tooltipPlacement}
                tooltip={
                  <div className="w-full max-w-xs">
                    <div>
                      {selectedClan.shopItems?.profileBanner ? (
                        <>
                          <img
                            src={
                              prototype.getShopitemByID(
                                2,
                                selectedClan.shopItems?.profileBanner
                              ).image
                            }
                            className="aspect-banner rounded-t bg-ui-850/75"
                            alt=""
                          />
                        </>
                      ) : (
                        <>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1672241804/Stryda/illustrations/Generic_bg.png"
                            className="aspect-banner rounded-t bg-ui-850/75"
                            alt=""
                          />
                        </>
                      )}
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 px-4 -mt-7">
                      <div
                        className={`avatar avatar-squircle avatar-sm  ${
                          selectedClan?.isPremium ? "avatar-premium" : ""
                        }`}
                      >
                        {!selectedClan.isYou &&
                          selectedClan?.shopItems?.avatarFrame && (
                            <img
                              src={
                                prototype.getShopitemByID(
                                  1,
                                  selectedClan.shopItems.avatarFrame
                                ).image
                              }
                              alt=""
                            />
                          )}
                        {selectedClan.isYou && hasAvatarFrame && (
                          <img src={avatarFrame.image} alt="" />
                        )}
                        <div>
                          <img src={selectedClan?.avatar} />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <h5 className="text-ui-100">
                            &#91;
                            {selectedClan.tag}
                            &#93; {selectedClan.nickname}
                          </h5>
                        </div>
                        <div className="flex justify-center gap-1 mt-1">
                          {prototype
                            .getClanByID(clanId)
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
                    <div className="flex gap-3 items-center justify-center text-center mt-5 mb-3">
                      <div className="avatar-group -space-x-2">
                        {selectedClan.members
                          ?.slice(0, 5)
                          .map((item, itemIndex) => (
                            <Avatar
                              id={item}
                              key={itemIndex}
                              hasLevel={false}
                            />
                          ))}
                      </div>
                      {selectedClan.members?.length - 5 > 0 && (
                        <div className="text-ui-300">
                          +{selectedClan.members?.length - 5}
                        </div>
                      )}
                    </div>
                    <div className="p-2">
                      <div className="flex items-center justify-around gap-2 text-center leading-tight mb-2">
                        <div>
                          <div className="text-xs uppercase text-ui-300">
                            played ladders
                          </div>
                          <div className="text-xl uppercase text-ui-100">
                            {RandomNumber(200, 1000)}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs uppercase text-ui-300">
                            Avg. Ladder score
                          </div>
                          <div className="text-xl uppercase text-ui-100">
                            {RandomNumber(200, 1000)}
                          </div>
                        </div>
                      </div>

                      {!selectedClan.isYou && (
                        <div className="p-2 rounded bg-ui-800/50 mt-2 flex gap-4 items-center justify-between">
                          <div className="text-main flex items-center gap-2 whitespace-nowrap">
                            <span className="icon icon-multiple-12" />
                            <span className="uppercase text-xs">
                              {30 - selectedClan.members?.length} spots left
                            </span>
                          </div>
                          {selectedClan.isPublic ? (
                            <Link href="#">
                              <a
                                type="button"
                                className="button button-sm button-primary"
                              >
                                <span>Join clan</span>
                              </a>
                            </Link>
                          ) : (
                            <>
                              {selectedClan.hasInvitedYou ? (
                                <div className="flex flex-col items-stretch gap-2">
                                  <div className="text-center text-sm">
                                    You have been invited to join this clan
                                  </div>
                                  <div className="flex flex-1 gap-2">
                                    <Link href="#">
                                      <a
                                        type="button"
                                        className="button button-sm button-success"
                                      >
                                        <span>Accept</span>
                                      </a>
                                    </Link>
                                    <Link href="#">
                                      <a
                                        type="button"
                                        className="button button-sm button-error"
                                      >
                                        <span>Decline</span>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              ) : (
                                <Link href="#">
                                  <a
                                    type="button"
                                    className="button button-sm button-primary"
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
                }
              >
                {AvatarInner}
              </Tooltip>
            </>
          ) : (
            AvatarInner
          )}
        </>
      )}
    </>
  );
}
