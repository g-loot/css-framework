import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { UiContext } from "../../../contexts/ui";
import { usePrototypeData } from "../../../contexts/prototype";
import Avatar from "../../../components/Avatar/Avatar";
import Link from "next/link";
import Tooltip from "../../../components/Tooltip/Tooltip";
import ButtonFeedback from "../../../components/Button/ButtonFeedback";
import ReadMore from "../../../components/ReadMore/ReadMore";
import GameIcon from "../../../components/GameIcon/GameIcon";
import ModalFavoriteGames from "../modal-favoritegames";

export default function WidgetUserLeftPanel(props) {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const user_id = props.id || 1;
  const [selectedUser, setSelectedUser] = useState(null);
  const isEmpty = query.empty === "true" ? true : false;

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(user_id));
  }, [user_id]);

  function openModalFavoriteGames() {
    uiContext.openModal(<ModalFavoriteGames />);
  }

  return (
    <>
      {selectedUser && (
        <>
          <div className="surface rounded p-4 space-y-4">
            {selectedUser.bio && !isEmpty && (
              <p className="text-ui-300 mt-1 text-left pb-4 border-b border-ui-700">
                <ReadMore content={selectedUser.bio} max={150} />
              </p>
            )}
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
            {selectedUser.socials?.riotValorantNickname &&
              selectedUser.socials?.discord && (
                <ul className="space-y-2 pt-3 border-t border-y-ui-700">
                  {selectedUser.socials?.riotValorantNickname && (
                    <li className="flex items-center gap-2 text-ui-300">
                      <span className="icon icon-20 icon-game-valorant-symbol" />
                      <a
                        className="flex-1 link link-hover"
                        onClick={() => {
                          uiContext.openToastr({
                            size: "medium",
                            text: "Game tag copied to your clipboard",
                            color: "green",
                            autoDelete: true,
                            autoDeleteDelay: 2500,
                          });
                          navigator.clipboard.writeText(
                            `${selectedUser.socials?.riotValorantNickname}+#+${selectedUser.socials?.riotValorantHashtag}`
                          );
                        }}
                      >
                        {selectedUser.socials?.riotValorantNickname}#
                        {selectedUser.socials?.riotValorantHashtag}
                      </a>
                      <Tooltip
                        placement="left"
                        tooltip={
                          <div className="max-w-xs text-sm text-center leading-tight">
                            Copy
                          </div>
                        }
                      >
                        <ButtonFeedback
                          variant="button-ghost rounded-full"
                          icon="icon-document-copy"
                          message="Game tag copied to your clipboard"
                        />
                      </Tooltip>
                    </li>
                  )}
                  {selectedUser.socials?.riotLeagueofLegendsNickname && (
                    <li className="flex items-center gap-2 text-ui-300">
                      <span className="icon icon-20 icon-game-leagueoflegends-symbol" />
                      <a
                        className="flex-1 link link-hover"
                        onClick={() => {
                          uiContext.openToastr({
                            size: "medium",
                            text: "Game tag copied to your clipboard",
                            color: "green",
                            autoDelete: true,
                            autoDeleteDelay: 2500,
                          });
                          navigator.clipboard.writeText(
                            `${selectedUser.socials?.riotLeagueofLegendsNickname}+#+${selectedUser.socials?.riotLeagueofLegendsHashtag}`
                          );
                        }}
                      >
                        {selectedUser.socials?.riotLeagueofLegendsNickname}#
                        {selectedUser.socials?.riotLeagueofLegendsHashtag}
                      </a>
                      <Tooltip
                        placement="left"
                        tooltip={
                          <div className="max-w-xs text-sm text-center leading-tight">
                            Copy
                          </div>
                        }
                      >
                        <ButtonFeedback
                          variant="button-ghost rounded-full"
                          icon="icon-document-copy"
                          message="Game tag copied to your clipboard"
                        />
                      </Tooltip>
                    </li>
                  )}
                  {selectedUser.socials?.discord && (
                    <li className="flex items-center gap-2 text-ui-300">
                      <span className="icon icon-20 icon-steam" />
                      <a
                        className="flex-1 link link-hover"
                        onClick={() => {
                          uiContext.openToastr({
                            size: "medium",
                            text: "Game tag copied to your clipboard",
                            color: "green",
                            autoDelete: true,
                            autoDeleteDelay: 2500,
                          });
                          navigator.clipboard.writeText(
                            `${selectedUser.socials?.discord}`
                          );
                        }}
                      >
                        {selectedUser.socials?.discord}
                      </a>
                      <Tooltip
                        placement="left"
                        tooltip={
                          <div className="max-w-xs text-sm text-center leading-tight">
                            Copy
                          </div>
                        }
                      >
                        <ButtonFeedback
                          variant="button-ghost rounded-full"
                          icon="icon-document-copy"
                          message="Game tag copied to your clipboard"
                        />
                      </Tooltip>
                    </li>
                  )}
                </ul>
              )}
          </div>
          <div className="surface rounded">
            <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
              <h2 className="h6 text-ui-100">Level {selectedUser.level}</h2>
              <Tooltip
                tooltip={
                  <div className="max-w-xs text-sm text-center leading-tight">
                    Earn XP to progress to the next level
                  </div>
                }
              >
                <button className="text-ui-300 text-0">
                  <span className="icon icon-16 icon-c-info" />
                </button>
              </Tooltip>
            </div>
            <div className="p-4 space-y-1">
              <div className="flex items-center justify-center gap-2">
                <span className="text-main text-center text-lg">10423</span>
                <span className="icon icon-xp-symbol text-4xl text-main" />
              </div>
              <div className="flex justify-between items-baseline text-sm mt-2 mb-1 text-ui-300">
                <span>13000</span>
                <span>15000 XP</span>
              </div>
              <div
                className="progressbar progressbar-sm"
                style={{ "--percent": "75" }}
              >
                <div />
              </div>
            </div>
          </div>
          <div className="surface rounded">
            <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
              <h2 className="h6 text-ui-100">
                Games ({selectedUser.games.length})
              </h2>
              {selectedUser.isYou && (
                <button
                  type="button"
                  onClick={openModalFavoriteGames}
                  className="link link-hover text-ui-300 text-sm leading-none"
                >
                  View all
                </button>
              )}
            </div>
            <ul className="flex gap-4 p-4">
              {selectedUser.games?.map((game, gameIndex) => (
                <li key={gameIndex}>
                  <GameIcon game={game} />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}
