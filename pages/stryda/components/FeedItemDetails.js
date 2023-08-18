import { useEffect, useState, useContext } from "react";
import { usePrototypeData } from "@/contexts/prototype";
import FeedItemDetailsMatch from "./FeedItemDetailsMatch";

export default function FeedItemDetails(props) {
  const prototype = usePrototypeData();
  const item = props.item;

  return (
    <>
      {item && item.type === "match" && (
        <FeedItemDetailsMatch
          item={item}
          match={prototype.getMatchByID(item.itemID)}
        />
      )}
    </>
  );
}
