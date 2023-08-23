import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Avatar from "@/components/Avatar/Avatar";
import Link from "next/link";

export default function FeedItemLive(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  const autoPlay = props.autoPlay || false;
  const [video, setVideo] = useState(null);

  useEffect(() => {
    setVideo(document.getElementById(`video_live_${item.id}`));
  }, [item]);

  useEffect(() => {
    if (video) {
      if (autoPlay) {
        video.play();
      } else {
        video.pause();
      }
    }
  }, [video, autoPlay]);

  return (
    <>
      {item && (
        <div className="surface sm:rounded text-0 video">
          <div className="p-4 flex items-center gap-3 text-base">
            <Avatar id={item.userID} size="avatar-sm" hasTooltip={true} />
            <div className="flex-1 overflow-hidden">
              <div className="truncate p-1">
                <Link
                  href={`/stryda/profile/${
                    item.userID
                  }${prototype.getURLparams()}`}
                >
                  <span
                    className={`interactive truncate ${
                      prototype.getUserByID(item.userID)?.isPremium
                        ? "text-premium-500"
                        : ""
                    }`}
                  >
                    {prototype.getUserByID(item.userID)?.nickname}
                  </span>
                </Link>{" "}
                <span className="text-ui-300">
                  is live on{" "}
                  <a
                    href="https://www.twitch.tv/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-ui-100"
                  >
                    Twitch
                  </a>
                </span>
              </div>
            </div>
            <div className="flex-none self-start">
              <div className="bg-error-700 rounded text-sm text-mono-100 uppercase py-1 px-1.5 leading-none flex items-center gap-1.5">
                <span className="icon icon-video" />
                <span>Live</span>
              </div>
            </div>
          </div>
          <button type="button">
            <video
              autoPlay={autoPlay}
              controls
              playsInline
              loop
              muted
              width="100%"
              height="auto"
              className="w-full rounded-b"
              id={`video_live_${item.id}`}
              src={prototype.getUserByID(item.userID).isLive}
            />
          </button>
        </div>
      )}
    </>
  );
}
