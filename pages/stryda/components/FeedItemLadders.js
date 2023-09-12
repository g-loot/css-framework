import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Avatar from "@/components/Avatar/Avatar";
import Link from "next/link";
import FeedItemComments from "./FeedItemComments";
import ReadMore from "@/components/ReadMore/ReadMore";
import CardLadder from "./CardLadder";
import Slider from "@/components/Slider/Slider";

export default function FeedItemLadders(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  return (
    <>
      {item && (
        <div className="surface sm:rounded w-full">
          <div className="p-4 flex items-center gap-3 leading-tight">
            <div className="avatar avatar-sm avatar-circle avatar-simple">
              <div>
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1694461366/Stryda/demo/stryda-logo.jpg"
                  alt="avatar"
                />
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="truncate p-1">
                <span className={`interactive truncate`}>Stryda</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-ui-300 px-1">
                <span>2 min. ago</span>
              </div>
            </div>
          </div>
          <div className="px-4 pb-4 space-y-2">
            <p className="text-ui-300">
              We thought you might be interested in joining these Ladders 🏆
            </p>
          </div>
          <div className="rounded-b bg-ui-850 border-t border-ui-700">
            <Slider
              paddingLeft="pl-4"
              itemWidth={397 + 16}
              bgColor="from-ui-850 via-ui-850/90 to-ui-850/0"
            >
              {item.ladders.map((item, itemIndex) => (
                <CardLadder
                  key={itemIndex}
                  ladder={prototype.getLadderByID(item.game, item.id)}
                  game_slug={item.game_slug}
                  isHorizontal={false}
                  isClan={false}
                />
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
}
