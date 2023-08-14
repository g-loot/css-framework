import FeedItemAdvertising from "./FeedItemAdvertising";
import FeedItemMatch from "./FeedItemMatch";

export default function FeedItem(props) {
  const item = props.item;
  const autoPlay = props.autoPlay || false;

  return (
    <>
      {item && item.type === "match" && (
        <FeedItemMatch item={item} autoPlay={autoPlay} />
      )}
      {item && item.type === "advertising" && (
        <FeedItemAdvertising item={item} />
      )}
    </>
  );
}
