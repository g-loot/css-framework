import React, { useEffect, useState, useContext } from "react";

import Link from "next/link";
import { usePrototypeData } from "../../../contexts/prototype";
import { UiContext } from "../../../contexts/ui";
import GameIcon from "../../../components/GameIcon/GameIcon";

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
        className="surface rounded-lg p-4 flex flex-col items-between justify-center w-96"
      >
        <div className="flex gap-4 items-center">
          <Link href={`/stryda/clans/${clan.id}${prototype.getURLparams()}`}>
            <div className="flex-1 min-w-[0] flex gap-4 items-center cursor-pointer hover:opacity-50 transition-opacity duration-200">
              <div className="avatar avatar-squircle avatar-sm">
                <div>
                  <img src={clan.avatar} alt="avatar" />
                </div>
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-ui-100 truncate">
                  &#91;
                  {clan.tag}
                  &#93; {clan.nickname}
                </p>
                <div className="text-ui-300 text-sm">
                  {clan.members?.length} / 30 members
                </div>
              </div>
            </div>
          </Link>
          {clan.hasInvitedYou ? (
            <div className="flex-0 flex flex-col gap-2 text-center leading-tight">
              {hasAccepted === null && (
                <>
                  <Link href={`/stryda/clans/${clan.id}?hasaccepted=true`}>
                    <button
                      type="button"
                      className={`button button-sm button-success ${
                        submitting ? "is-loading" : ""
                      }`}
                    >
                      <span>Accept</span>
                    </button>
                  </Link>
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
              {hasAccepted === true && (
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
              {hasAccepted === false && (
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
                <Link href={`/stryda/clans/${clan.id}?hasaccepted=true`}>
                  <button
                    type="button"
                    className={`flex-0 button button-sm button-secondary self-start ${
                      submitting ? "is-loading" : ""
                    }`}
                  >
                    <span>Join clan</span>
                  </button>
                </Link>
              )}
            </>
          )}
        </div>
        <div className="flex-1 py-4">
          <p className="text-ui-300">{clan.bio?.substr(0, 100)}...</p>
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
          <div className="text-sm text-center">
            <span className="text-ui-300">We speak: </span>
            <span className="text-main">{clan.lang}</span>
          </div>
          <div className="flex gap-1">
            {clan.games?.map((game, gameIndex) => (
              <GameIcon key={gameIndex} game={game} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
