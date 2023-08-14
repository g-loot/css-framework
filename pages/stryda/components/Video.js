import React, { useEffect, useState, useContext } from "react";
import { UiContext } from "../../../contexts/ui";
import ModalHighlightViewer from "../modal-highlightviewer";

export default function Video(props) {
  const uiContext = useContext(UiContext);
  const item = props.item;
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
          className="interactive active:opacity-50"
          onMouseOver={handleVideoPlay}
          onMouseOut={handleVideoPause}
          onClick={() => openModalHighlightViewer(item)}
        >
          <video
            autoPlay={false}
            playsInline
            loop
            muted
            preload
            width="100%"
            height="100%"
            id={`video_${id}`}
            className="w-full"
            src={`${item.media?.url}#t=1`}
          ></video>
        </button>
      )}
    </>
  );
}
