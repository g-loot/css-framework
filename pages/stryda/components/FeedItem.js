import FeedItemAdvertising from "./FeedItemAdvertising";
import FeedItemLadders from "./FeedItemLadders";
import FeedItemLive from "./FeedItemLive";
import FeedItemMatch from "./FeedItemMatch";
import FeedItemPost from "./FeedItemPost";
import { usePrototypeData } from "@/contexts/prototype";
import FeedItemTrophy from "./FeedItemTrophy";

export default function FeedItem(props) {
  const prototype = usePrototypeData();
  const item = props.item;
  const autoPlay = props.autoPlay || false;
  const stateFeedAd = props.stateFeedAd

  return (
    <>
      {item && item.type === "match" && (
        <FeedItemMatch
          item={item}
          match={prototype.getMatchByID(item.itemID)}
          autoPlay={autoPlay}
        />
      )}
      {item && item.type === "advertising" && !prototype.isPremium && (
        <FeedItemAdvertising item={item} stateFeedAd={stateFeedAd} />
      )}
      {item && item.type === "ladders" && (
        <FeedItemLadders item={item} />
      )}
      {item && item.type === "live" && (
        <FeedItemLive item={item} autoPlay={autoPlay} />
      )}
      {item && item.type === "trophy" && (
        <FeedItemTrophy item={item} />
      )}
      {item && item.type === "post" && <FeedItemPost item={item} />}
    </>
  );
}
