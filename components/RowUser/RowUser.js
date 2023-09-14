import React, { useContext } from "react";

import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Link from "next/link";
import Tooltip from "../Tooltip/Tooltip";
import GameIcon from "../GameIcon/GameIcon";
import ButtonFeedback from "../Button/ButtonFeedback";
import Avatar from "../Avatar/Avatar";

export default function RowUser({ children, ...props }) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const userId = props.id || 1;
  const index = props.index;

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      {userId && (
        <tr
          className="animate-slide-in-bottom animate-delay"
          style={{
            "--delay": "calc(" + index + " * 0.05s)",
          }}
        >
          <td>
            <button
              type="button"
              className="flex gap-3 items-center self-center "
            >
              <Avatar id={userId} hasTooltip={true} size="avatar-sm" />
              <Link
                href={`/prototype/profile/${userId}
                          `}
              >
                <button type="button" className="space-y-0.5 interactive">
                  <div
                    className={`${
                      prototype.getUserByID(userId)?.isPremium
                        ? "text-premium-500"
                        : ""
                    } ${
                      prototype.getUserByID(userId)?.isYou ? "text-main" : ""
                    }`}
                  >
                    {prototype.getUserByID(userId)?.clan && (
                      <>
                        &#91;
                        {
                          prototype.getClanByID(
                            prototype.getUserByID(userId)?.clan
                          )?.tag
                        }
                        &#93;{" "}
                      </>
                    )}
                    {prototype.getUserByID(userId)?.nickname}
                  </div>
                  <div className="flex gap-1">
                    <div className="flex gap-1">
                      {prototype
                        .getUserByID(userId)
                        .games.map((game, gameIndex) => (
                          <GameIcon
                            key={gameIndex}
                            game={game}
                            size="text-base"
                          />
                        ))}
                    </div>
                  </div>
                </button>
              </Link>
            </button>
          </td>
          <td>
            {(prototype.getUserByID(userId).socials?.riotValorantNickname ||
              prototype.getUserByID(userId).socials
                ?.riotLeagueofLegendsNickname) && (
              <Tooltip
                placement="top"
                tooltip={
                  <ul className="text-sm w-64 divide-y divide-ui-500">
                    {prototype.getUserByID(userId).socials
                      ?.riotValorantNickname && (
                      <li className="pl-2 py-1 flex gap-2 items-center justify-center">
                        <span className="text-2xl icon icon-game-valorant-symbol text-game-valorant" />
                        <div className="flex-1">
                          <div className="truncate">
                            <a
                              className="link"
                              onClick={() => {
                                uiContext.openToastr({
                                  size: "medium",
                                  text: "Valorant copied to your clipboard",
                                  color: "green",
                                  autoDelete: true,
                                  autoDeleteDelay: 2500,
                                });
                                navigator.clipboard.writeText(
                                  prototype.getUserByID(userId).socials
                                    ?.riotValorantNickname
                                );
                              }}
                            >
                              {prototype.getUserByID(userId).nickname}
                              {" #"}
                              {
                                prototype.getUserByID(userId).socials
                                  ?.riotValorantHashtag
                              }
                            </a>
                          </div>
                        </div>
                        <div>
                          <Tooltip
                            placement="top"
                            tooltip={
                              <span className="text-sm">
                                Click to copy RIOT ID
                              </span>
                            }
                          >
                            <ButtonFeedback
                              value={`${
                                prototype.getUserByID(userId).socials
                                  ?.riotValorantNickname
                              }{" #"}${
                                prototype.getUserByID(userId).socials
                                  ?.riotValorantHashtag
                              }`}
                              variant="button-tertiary rounded-full"
                              icon="icon-document-copy"
                              message="RIOT ID copied to your clipboard"
                            />
                          </Tooltip>
                        </div>
                      </li>
                    )}
                    {prototype.getUserByID(userId).socials
                      ?.riotLeagueofLegendsNickname && (
                      <li className="pl-2 py-1 flex gap-2 items-center justify-center">
                        <span className="text-2xl icon icon-game-leagueoflegends-symbol text-game-leagueoflegends" />
                        <div className="flex-1">
                          <div className="truncate">
                            <a
                              className="link"
                              onClick={() => {
                                uiContext.openToastr({
                                  size: "medium",
                                  text: "Valorant copied to your clipboard",
                                  color: "green",
                                  autoDelete: true,
                                  autoDeleteDelay: 2500,
                                });
                                navigator.clipboard.writeText(
                                  prototype.getUserByID(userId).socials
                                    ?.riotLeagueofLegendsNickname
                                );
                              }}
                            >
                              {prototype.getUserByID(userId).nickname}
                              {" #"}
                              {
                                prototype.getUserByID(userId).socials
                                  ?.riotLeagueofLegendsHashtag
                              }
                            </a>
                          </div>
                        </div>
                        <div>
                          <Tooltip
                            placement="top"
                            tooltip={
                              <span className="text-sm">
                                Click to copy RIOT ID
                              </span>
                            }
                          >
                            <ButtonFeedback
                              value={`${
                                prototype.getUserByID(userId).socials
                                  ?.riotLeagueofLegendsNickname
                              }{" #"}${
                                prototype.getUserByID(userId).socials
                                  ?.riotLeagueofLegendsHashtag
                              }`}
                              variant="button-tertiary rounded-full"
                              icon="icon-document-copy"
                              message="RIOT ID copied to your clipboard"
                            />
                          </Tooltip>
                        </div>
                      </li>
                    )}
                  </ul>
                }
              >
                <ButtonFeedback
                  value={`${prototype.getUserByID(userId).nickname} #1111`}
                  variant="button-tertiary rounded-full"
                  icon="icon-riotgames-symbol"
                  message="RIOT ID copied to your clipboard"
                />
              </Tooltip>
            )}
          </td>
          <td>
            {prototype.getUserByID(userId).socials?.steam && (
              <Tooltip
                placement="top"
                tooltip={
                  <ul className="text-sm w-64 divide-y divide-ui-500">
                    <li className="pl-2 py-1 flex gap-2 items-center justify-center">
                      <span className="text-2xl icon icon-steam text-ui-300" />
                      <div className="flex-1">
                        <div className="truncate">
                          <a
                            className="link"
                            onClick={() => {
                              uiContext.openToastr({
                                size: "medium",
                                text: "Steam ID copied to your clipboard",
                                color: "green",
                                autoDelete: true,
                                autoDeleteDelay: 2500,
                              });
                              navigator.clipboard.writeText(
                                prototype.getUserByID(userId).socials?.steam
                              );
                            }}
                          >
                            {prototype.getUserByID(userId).socials?.steam}
                          </a>
                        </div>
                      </div>
                      <div>
                        <Tooltip
                          placement="top"
                          tooltip={
                            <span className="text-sm">
                              Click to copy Steam ID
                            </span>
                          }
                        >
                          <button type="button" className="button button-tertiary rounded-full">
                            <span className="icon icon-document-copy" />
                          </button>
                        </Tooltip>
                      </div>
                    </li>
                  </ul>
                }
              >
                <ButtonFeedback
                  value={`${prototype.getUserByID(userId).socials.steam}`}
                  variant="button-tertiary rounded-full"
                  icon="icon-steam"
                  message="Steam ID copied to your clipboard"
                />
              </Tooltip>
            )}
          </td>
          <td className="max-xl:hidden">
            <div className="text-ui-300">{RandomNumber(10, 9999)}</div>
          </td>
          <td className="max-xl:hidden">
            <div className="text-ui-300">#{RandomNumber(10, 300)}</div>
          </td>
          <td className="text-right">{children && <>{children}</>}</td>
        </tr>
      )}
    </>
  );
}
