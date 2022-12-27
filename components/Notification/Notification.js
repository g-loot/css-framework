import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Notification(props) {
  const notification = props.notification;
  const [read, setRead] = useState(false);
  const [accepted, setAccepted] = useState(undefined);

  useEffect(() => {
    console.log(read);
    setAccepted(notification.accepted);
  }, [notification]);

  function handleRead() {
    setRead(true);
  }

  function handleAccept() {
    setRead(true);
    setAccepted(true);
  }
  function handleDecline() {
    setRead(true);
    setAccepted(false);
  }

  return (
    <div
      className={`rounded-lg relative surface shadow-md transition duration-100 ${
        read ? "surface-ui-700 opacity-75" : "surface-ui-600"
      }`}
    >
      {!read && (
        <i
          onClick={handleRead.bind(this)}
          className={`absolute top-[0.4rem] right-[0.4rem] badge bg-error-300`}
        />
      )}
      <div className="flex items-center justify-between p-2 pr-5 gap-2">
        <div className="rounded w-7 h-7 bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
          {notification.type === "clan" && (
            <span className="icon icon-multiple-12 text-ui-300" />
          )}
          {notification.type === "brawl" && (
            <span className="icon icon-brawl text-ui-300" />
          )}
          {notification.type === "achievement" && (
            <span className="icon icon-fireworks text-ui-300" />
          )}
          {notification.type === "game" && (
            <span
              className={`icon icon-game-${
                prototype.getGameBySlug(notification.game).slug
              }-symbol text-game-${
                prototype.getGameBySlug(notification.game).slug
              }`}
            />
          )}
        </div>
        <div className="flex-1 flex items-baseline justify-between">
          <div className="text-ui-300 text-sm">{notification.intro}</div>
          <div className="text-xs text-ui-300">{notification.time}</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-stretch px-2 pb-2 gap-4">
        <div className="flex-1">
          <h6 className="font-body uppercase text-sm not-italic leading-none mt-1 mb-2">
            {notification.title}
          </h6>
          <p
            className="text-ui-300 text-sm"
            dangerouslySetInnerHTML={{
              __html: notification.text,
            }}
          />
        </div>
        {notification.cta && notification.url && (
          <div className="w-full md:w-20 flex flex-row-reverse md:flex-col md:justify-end gap-2 leading-none text-center md:min-h-[50px]">
            {accepted === undefined ? (
              <>
                {/*
                <button
                  type="button"
                  onClick={handleDecline.bind(this)}
                  className="button button-secondary button-xs md:w-full"
                >
                  <span>Decline</span>
                </button>
                <button
                  type="button"
                  onClick={handleAccept.bind(this)}
                  className="button button-primary button-xs md:w-full"
                >
                  <span>Accept</span>
                </button>
            */}
                <Link href={notification.url}>
                  <button
                    type="button"
                    className="button button-primary button-xs md:w-full"
                  >
                    <span>View</span>
                  </button>
                </Link>
              </>
            ) : (
              <>
                {accepted ? (
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
                      {notification.cta ? (
                        <>{notification.cta}</>
                      ) : (
                        <>Invitation</>
                      )}{" "}
                      <br />
                      accepted
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      className="text-error-300 text-xl icon animate-slide-in-bottom animate-delay icon-e-remove"
                      style={{
                        "--delay": "calc(0 * 0.05s)",
                      }}
                    />
                    <span
                      className="text-error-300 text-xs mb-1 animate-slide-in-bottom animate-delay"
                      style={{
                        "--delay": "calc(1 * 0.05s)",
                      }}
                    >
                      {notification.cta ? (
                        <>{notification.cta}</>
                      ) : (
                        <>Invitation</>
                      )}{" "}
                      <br />
                      declined
                    </span>
                  </>
                )}
              </>
            )}
          </div>
        )}
      </div>
      <div className="item-body leading-tight"></div>
      <div className="absolute top-2 right-4"></div>
    </div>
  );
}
