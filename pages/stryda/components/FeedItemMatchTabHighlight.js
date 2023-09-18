import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import ModalHighlightViewer from "../modal-highlightviewer";

export default function FeedItemMatchTabHighlight(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  const match = props.match;
  const autoPlay = props.autoPlay || false;
  const [video, setVideo] = useState(null);

  useEffect(() => {
    setVideo(document.getElementById(`video_${item.id}`));
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

  function openModalHighlightViewer(match) {
    uiContext.openModal(<ModalHighlightViewer item={match} />);
  }

  return (
    <>
      {item && match && (
        <button
          type="button"
          className="aspect-video bg-ui-850 w-full"
          onClick={() => openModalHighlightViewer(match)}
        >
          <video
            autoPlay={autoPlay}
            controls
            playsInline
            loop
            muted
            width="100%"
            height="auto"
            className="w-full"
            id={`video_${item.id}`}
            src={match.meta.media.videoUrl}
          />
        </button>
      )}
    </>
  );
}
