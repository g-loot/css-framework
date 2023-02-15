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

export default function Avatar(props) {
  const prototype = usePrototypeData();
  const { query } = useRouter();
  const userId = props.id || 1;
  const size = props.size || "avatar-xs";
  const className = props.className || "";
  const [avatarFrame, setAvatarFrame] = useState(false);
  const hasAvatarFrame = query.avatarframe || false;
  const hasLevel = props.hasLevel !== undefined ? props.hasLevel : true;
  const hasTooltip = props.hasTooltip !== undefined ? props.hasTooltip : false;

  useEffect(() => {
    if (hasAvatarFrame) {
      setAvatarFrame(prototype.getShopitemByID(1, hasAvatarFrame));
    } else {
      setAvatarFrame(prototype.getShopitemByID(1, 1));
    }
  }, [hasAvatarFrame]);

  const AvatarInner = (
    <div
      className={`avatar avatar-circle ${size}  ${
        prototype.getUserByID(userId)?.isPremium ? "avatar-premium" : ""
      } ${className}`}
    >
      {hasLevel && <b>{prototype.getUserByID(userId).level}</b>}
      {!prototype.getUserByID(userId).isYou &&
        prototype.getUserByID(userId)?.avatarFrame && (
          <img
            src={
              prototype.getShopitemByID(
                1,
                prototype.getUserByID(userId).avatarFrame
              ).image
            }
            alt=""
          />
        )}
      {prototype.getUserByID(userId).isYou && hasAvatarFrame && (
        <img src={avatarFrame.image} alt="" />
      )}

      <div>
        <img src={prototype.getUserByID(userId)?.avatar} />
      </div>
      {size === "avatar-xs" &&
        prototype.getUserByID(userId)?.isYou &&
        !hasAvatarFrame && <i className="radar" />}
      {prototype.getUserByID(userId).isOnline && !hasLevel && <i />}
    </div>
  );

  return (
    <>
      {hasTooltip ? (
        <>
          {userId === 1 ? (
            <Tooltip
              placement={props.tooltipPlacement}
              tooltip={
                <div className="w-full min-w-[200px] p-2">
                  <div className="text-main text-center text-lg">
                    10423/15000 XP
                  </div>
                  <div className="flex justify-between items-baseline text-sm mt-2 mb-1">
                    <span>LVL {prototype.getUserByID(userId).level}</span>
                    <span className="text-ui-300">75%</span>
                  </div>
                  <div
                    className="progressbar progressbar-sm"
                    style={{ "--percent": "75" }}
                  >
                    <div />
                  </div>
                  <div className="text-sm text-ui-300 mt-2">
                    1224XP until level {prototype.getUserByID(userId).level + 1}
                  </div>
                </div>
              }
            >
              {AvatarInner}
            </Tooltip>
          ) : (
            <Tooltip
              placement={props.tooltipPlacement}
              tooltip={
                <div className="w-full min-w-xs">
                  <div className="flex items-center justify-center gap-4 p-2">
                    <div
                      className={`avatar avatar-circle avatar-sm  ${
                        prototype.getUserByID(userId)?.isPremium
                          ? "avatar-premium"
                          : ""
                      }`}
                    >
                      {hasLevel && <b>{prototype.getUserByID(userId).level}</b>}
                      {!prototype.getUserByID(userId).isYou &&
                        prototype.getUserByID(userId)?.avatarFrame && (
                          <img
                            src={
                              prototype.getShopitemByID(
                                1,
                                prototype.getUserByID(userId).avatarFrame
                              ).image
                            }
                            alt=""
                          />
                        )}
                      {prototype.getUserByID(userId).isYou &&
                        hasAvatarFrame && (
                          <img src={avatarFrame.image} alt="" />
                        )}

                      <div>
                        <img src={prototype.getUserByID(userId)?.avatar} />
                      </div>
                      {size === "avatar-xs" &&
                        prototype.getUserByID(userId)?.isYou &&
                        !hasAvatarFrame && <i className="radar" />}
                      {prototype.getUserByID(userId).isOnline && !hasLevel && <i />}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <h4>{prototype.getUserByID(userId).nickname}</h4>
                        <img
                          src={`https://flagcdn.com/${
                            prototype.getUserByID(userId).countryFlag
                          }.svg`}
                          className="aspect-video rounded-sm w-6"
                        />
                      </div>
                      <div className="flex gap-1 mt-1">
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
                  <div className="bg-ui-800 rounded mt-2 flex items-center gap-2 whitespace-nowrap p-2">
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1673941215/Stryda/logos/stryda-logo-missions-simple.svg"
                      width="auto"
                      height="auto"
                      alt=""
                      className="drop-shadow-xl h-7 flex-none"
                    />
                    <div className="pl-2 border-l border-ui-600">
                      <div className="text-xs text-ui-300 uppercase font-bold">
                        Missions completed
                      </div>
                      <div className="text-ui-100 text-lg">322</div>
                    </div>
                  </div>
                  <div className="bg-ui-800 rounded mt-2 flex items-center gap-2 whitespace-nowrap p-2">
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1673941215/Stryda/logos/stryda-logo-ladders-simple.svg"
                      width="auto"
                      height="auto"
                      alt=""
                      className="drop-shadow-xl h-7 flex-none"
                    />
                    <div className="pl-2 border-l border-ui-600">
                      <div className="text-xs text-ui-300 uppercase font-bold">
                        Ladders played
                      </div>
                      <div className="text-ui-100 text-lg">22</div>
                    </div>
                    <div className="pl-2 border-l border-ui-600">
                      <div className="text-xs text-ui-300 uppercase font-bold">
                        Best placement
                      </div>
                      <div className="text-ui-100 text-lg">2</div>
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
  );
}
