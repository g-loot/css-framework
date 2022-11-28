import React, { useEffect, useState, useContext } from "react";

import Link from "next/link";
import { usePrototypeData } from "../../contexts/prototype";
import { UiContext } from "../../contexts/ui";

export default function CardClan(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const clan = props.clan;
  const [submitting, setSubmitting] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(null);
  const [hasJoined, setHasJoined] = useState(false);

  function addToastWithDelay(toast) {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr(toast);
      setSubmitting(false);
      setHasJoined(true);
    }, 1000);
  }

  function handleAccept(toast) {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr(toast);
      setSubmitting(false);
      setHasAccepted(true);
    }, 1000);
  }
  function handleDecline(toast) {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr(toast);
      setSubmitting(false);
      setHasAccepted(false);
    }, 1000);
  }

  return (
    <>
      <div
        key={clan.id}
        className="surface rounded-lg p-4 flex flex-col items-between justify-center min-w-sm"
      >
        <div className="flex gap-4 items-center">
          <Link href={`/prototype/clans/${clan.id}${prototype.getURLparams()}`}>
            <div className="flex-1 flex gap-4 items-center cursor-pointer hover:opacity-50 transition-opacity duration-200">
              <div className="avatar avatar-squircle avatar-md">
                <div>
                  <img src={clan.avatar} alt="avatar" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl">
                  &#91;
                  {clan.tag}
                  &#93; {clan.nickname}
                </h2>
                <div className="text-ui-300">
                  {clan.members?.length} / 30 members
                </div>
              </div>
            </div>
          </Link>
          {clan.hasInvitedYou ? (
            <div className="flex flex-col gap-2 text-center leading-tight">
              {hasAccepted ===
                null && (
                  <>
                    <button
                      onClick={handleAccept.bind(this, {
                        icon: "f-check",
                        color: "green",
                        text: `Your are now part of the ${clan.nickname} clan`,
                        autoDelete: true,
                        autoDeleteDelay: 2500,
                      })}
                      type="button"
                      className={`button button-sm button-primary ${
                        submitting ? "is-loading" : ""
                      }`}
                    >
                      <span>Accept</span>
                    </button>
                    <button
                      onClick={handleDecline.bind(this, {
                        icon: "f-check",
                        color: "green",
                        text: `Your have declined ${clan.nickname}'s invitation`,
                        autoDelete: true,
                        autoDeleteDelay: 2500,
                      })}
                      type="button"
                      className={`button button-sm button-error ${
                        submitting ? "is-loading" : ""
                      }`}
                    >
                      <span>Decline</span>
                    </button>
                  </>
                )}
              {hasAccepted ===
                true && (
                  <>
                    <span
                      className="text-main text-xl icon animate-slide-in-bottom animate-delay icon-check"
                      style={{
                        "--delay": "calc(0 * 0.05s)",
                      }}
                    />
                    <span
                      className="text-main text-xs mb-1 animate-slide-in-bottom animate-delay"
                      style={{
                        "--delay": "calc(1 * 0.05s)",
                      }}
                    >
                      Invitation
                      <br />
                      accepted
                    </span>
                  </>
                )}
              {hasAccepted ===
                false && (
                  <>
                    <span
                      className="text-error-500 text-xl icon animate-slide-in-bottom animate-delay icon-e-remove"
                      style={{
                        "--delay": "calc(0 * 0.05s)",
                      }}
                    />
                    <span
                      className="text-error-500 text-xs mb-1 animate-slide-in-bottom animate-delay"
                      style={{
                        "--delay": "calc(1 * 0.05s)",
                      }}
                    >
                      Invitation
                      <br />
                      declined
                    </span>
                  </>
                )}
            </div>
          ) : (
            <>
              {!hasJoined && (
                <button
                type="button"
                onClick={addToastWithDelay.bind(this, {
                  icon: "f-check",
                  color: "green",
                  text: `You are now part of the ${clan.nickname} clan.`,
                  autoDelete: true,
                  autoDeleteDelay: 2500,
                })}
                className={`button button-sm button-secondary self-start ${
                  submitting ? "is-loading" : ""
                }`}
              >
                <span>Join clan</span>
              </button>
              )}
            </>
          )}
        </div>
        <div className="flex-1 py-4">
          <p className="text-ui-300">{clan.bio?.substr(0, 150)}...</p>
        </div>
        <div className="flex gap-4 items-center justify-between border-t border-ui-700 pt-4">
          <div className="flex gap-3">
            {clan.social?.twitch && (
              <>
                <a
                  href={clan.social.twitch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <span className="icon icon-twitch text-xl text-ui-300" />
                </a>
              </>
            )}
            {clan.social?.discord && (
              <>
                <a
                  href={clan.social.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <span className="icon icon-discord text-xl text-ui-300" />
                </a>
              </>
            )}
            {clan.social?.youtube && (
              <>
                <a
                  href={clan.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <span className="icon icon-logo-youtube text-xl text-ui-300" />
                </a>
              </>
            )}
            {clan.social?.twitter && (
              <>
                <a
                  href={clan.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <span className="icon icon-logo-twitter text-xl text-ui-300" />
                </a>
              </>
            )}
          </div>
          <div className="text-sm">
            <span className="text-ui-300">We speak: </span>
            <span className="text-main">{clan.lang}</span>
          </div>
          <div className="flex gap-1">
            {clan.games?.map((game, gameIndex) => (
              <>
                <div className="p-1 border border-ui-700 rounded bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                  <span
                    className={`icon text-xl ${
                      prototype.getGameByID(game).slug === "apexlegends"
                        ? "icon-game-apexlegends-symbol text-game-apexlegends"
                        : ""
                    } ${
                      prototype.getGameByID(game).slug === "csgo"
                        ? "icon-game-csgo-symbol text-game-csgo"
                        : ""
                    }  ${
                      prototype.getGameByID(game).slug === "dota2"
                        ? "icon-game-dota2-symbol text-game-dota2"
                        : ""
                    }  ${
                      prototype.getGameByID(game).slug === "leagueoflegends"
                        ? "icon-game-leagueoflegends-symbol text-game-leagueoflegends"
                        : ""
                    }  ${
                      prototype.getGameByID(game).slug === "rocketleague"
                        ? "icon-game-rocketleague-symbol text-game-rocketleague"
                        : ""
                    } ${
                      prototype.getGameByID(game).slug === "pubg"
                        ? "icon-game-pubg-symbol text-game-pubg"
                        : ""
                    }  ${
                      prototype.getGameByID(game).slug === "valorant"
                        ? "icon-game-valorant-symbol text-game-valorant"
                        : ""
                    }`}
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
