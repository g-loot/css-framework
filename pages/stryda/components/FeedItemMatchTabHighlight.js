import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import ModalHighlightViewer from "../modal-highlightviewer";
import ModalFeedItemViewer from "../modal-feeditemdetailsviewer";

export default function FeedItemMatchTabHighlight(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  const match = props.match;
  const autoPlay = props.autoPlay || false;
  const [video, setVideo] = useState(null);
  const detailedView = props.detailedView || false;

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

  function openFeedItemDetailsMatch(target) {
    uiContext.openModal(<ModalFeedItemViewer item={item} selectedTab={target ? target : "default"} />);
  }

  return (
    <>
      {item && match && (
        <button
          type="button"
          className="aspect-video bg-ui-850 w-full text-0"
          //onClick={() => openModalHighlightViewer(match)}
          onClick={() => !detailedView && openFeedItemDetailsMatch("highlight")}
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
