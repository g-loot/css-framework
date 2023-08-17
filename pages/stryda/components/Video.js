import React, { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import ModalHighlightViewer from "../modal-highlightviewer";
import GameIcon from "@/components/GameIcon/GameIcon";

export default function Video(props) {
  const uiContext = useContext(UiContext);
  const item = props.item;
  const hasMeta = props.hasMeta || false;
  const autoPlay = props.autoPlay || false;
  const id = RandomNumber(1000, 100000);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    setVideo(document.getElementById(`video_${id}`));
  }, [id]);

  useEffect(() => {
    if (video) {
      if (autoPlay) {
        video.play();
      } else {
        video.pause();
      }
    }
  }, [video, autoPlay]);

  function handleVideoPlay() {
    if (video) {
      video.play();
    }
  }
  function handleVideoPause() {
    if (video) {
      video.pause();
    }
  }

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function openModalHighlightViewer(item) {
    uiContext.openModal(<ModalHighlightViewer item={item} />);
  }

  return (
    <>
      {item && (
        <button
          type="button"
          className="interactive active:opacity-50 w-full"
          onMouseOver={handleVideoPlay}
          onMouseOut={handleVideoPause}
          onClick={() => openModalHighlightViewer(item)}
        >
          <div className="relative aspect-video w-full rounded overflow-hidden bg-ui-700">
            <video
              autoPlay={false}
              playsInline
              loop
              muted
              preload
              width="100%"
              height="100%"
              id={`video_${id}`}
              className="relative z-10 w-full"
              src={`${item.media?.url}#t=1`}
            ></video>
            <div className="absolute z-0 inset-0 grid place-content-center">
              <span className="icon icon-video text-ui-400 text-2xl" />
            </div>
          </div>
          {hasMeta && (
            <div className="flex items-center gap-2 text-xs sm:text-sm text-ui-300 mt-2">
              <GameIcon game={item.game} size="sm:text-lg" />
              <span>{item.social?.views} views</span>
              <i className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-ui-300" />
              <span>{item.date}</span>
            </div>
          )}
        </button>
      )}
    </>
  );
}
