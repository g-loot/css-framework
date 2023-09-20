import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Avatar from "@/components/Avatar/Avatar";
import Link from "next/link";
import FeedItemComments from "./FeedItemComments";
import ReadMore from "@/components/ReadMore/ReadMore";

export default function FeedItemPost(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  return (
    <>
      {item && (
        <button type="button" className="surface sm:rounded w-full text-0">
          <div className="p-3 flex items-center gap-3 leading-tight text-base">
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
          <div className="px-4 pb-4 text-base">
            <h4 className="text-lg md:text-xl font-bold text-ui-100">
              {item.title}
            </h4>
            <p className="text-ui-300 mt-2 mb-3">
              {item.text}
              {/*<ReadMore content={item.text} max={150} />*/}
            </p>
            {item.buttonLabel && (
              <Link href={item.url}>
                <button type="button" className="button button-primary">
                  <span>{item.buttonLabel}</span>
                </button>
              </Link>
            )}
          </div>
          <Link href={item.url}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto aspect-video object-center object-cover border-y border-ui-700"
            />
          </Link>
          <FeedItemComments item={item} isExpanded={false} />
        </button>
      )}
    </>
  );
}
