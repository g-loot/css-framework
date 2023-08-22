import FeedItemAdvertising from "./FeedItemAdvertising";
import FeedItemLive from "./FeedItemLive";
import FeedItemMatch from "./FeedItemMatch";
import { usePrototypeData } from "@/contexts/prototype";

export default function FeedItem(props) {
  const prototype = usePrototypeData();
  const item = props.item;
  const autoPlay = props.autoPlay || false;

  return (
    <>
      {item && item.type === "match" && (
        <FeedItemMatch item={item} match={prototype.getMatchByID(item.itemID)} autoPlay={autoPlay} />
      )}
      {item && item.type === "advertising" && (
        <FeedItemAdvertising item={item} />
      )}
      {item && item.type === "live" && (
        <FeedItemLive item={item} autoPlay={autoPlay} />
      )}
    </>
  );
}
