import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Avatar from "@/components/Avatar/Avatar";
import Link from "next/link";

export default function FeedItemPost(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  return (
    <>
      {item && (
        <Link href={item.url}>
          <button type="button" className="surface sm:rounded interactive w-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto aspect-video object-center object-cover rounded-t"
            />
            <div className="p-4 flex items-start gap-3">
              <div className="h-14 w-14 rounded-full bg-ui-850 border border-ui-600 grid place-content-center">
                <span className="icon icon-stryda-symbol text-main text-3xl" />
              </div>
              <div className="flex-1 py-2 space-y-2">
                <h4 className="text-lg md:text-xl font-bold text-ui-100">
                  {item.title}
                </h4>
                <p className="text-sm md:text-base text-ui-300">{item.text}</p>
              </div>
            </div>
          </button>
        </Link>
      )}
    </>
  );
}
