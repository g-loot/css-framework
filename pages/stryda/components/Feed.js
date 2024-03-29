import React, { useEffect, useState } from "react";
import FeedItem from "@/pages/stryda/components/FeedItem";
import { usePrototypeData } from "@/contexts/prototype";

export default function Feed(props) {
  const prototype = usePrototypeData();
  const [playingIndex, setPlayingIndex] = useState(null);
  const stateFeedAd = props.stateFeedAd

  const handleScroll = () => {
    const videoElements = document.querySelectorAll(".video");
    let closestVideoIndex = null;
    let minDistance = Number.MAX_VALUE;

    videoElements.forEach((videoElement, index) => {
      const rect = videoElement.getBoundingClientRect();
      const distance = Math.abs(
        window.innerHeight / 2 - rect.top - rect.height / 2
      );

      if (distance < minDistance) {
        minDistance = distance;
        closestVideoIndex = index;
      }
    });
    setPlayingIndex(closestVideoIndex);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {prototype.feedItems.filter((i) => !i.isHidden).map((item, itemIndex) => (
        <FeedItem
          item={item}
          key={itemIndex}
          autoPlay={playingIndex === itemIndex}
          stateFeedAd={stateFeedAd}
        />
      ))}
      <div className="flex items-center justify-center">
        <div role="loading" className="loader loader-sm">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
}
