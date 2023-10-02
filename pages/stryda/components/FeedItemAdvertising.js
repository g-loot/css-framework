import Link from "next/link";
import FeedItemComments from "./FeedItemComments";
import FeedItemContextualMenu from "./FeedItemContextualMenu";

export default function FeedItemAdvertising(props) {
  const item = props.item;
  const stateFeedAd = props.stateFeedAd || "normal";

  return (
    <>
      {item && (
        <button type="button" className="surface sm:rounded w-full text-0 relative">
            {stateFeedAd === "normal" && (
              <div className="p-3 flex items-center gap-3 leading-tight text-base">
                <div className="avatar avatar-sm avatar-circle avatar-simple">
                  <div>
                    <img src={item.author.avatar} alt="avatar" />
                  </div>
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="truncate p-1">
                    <span className={`interactive truncate`}>
                      {item.author.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-ui-300 px-1">
                    <span>Sponsored</span>
                  </div>
                </div>
                <div className="flex-none self-start">
                  <FeedItemContextualMenu
                    item={item}
                  />
                </div>
              </div>
            )}
            {stateFeedAd === "stryda" && (
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
                    <span className={`interactive truncate`}>
                      Stryda
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-ui-300 px-1">
                    <span>Sponsored</span>
                  </div>
                </div>
                <div className="flex-none self-start">
                  <FeedItemContextualMenu
                    item={item}
                  />
                </div>
              </div>
            )}

            {stateFeedAd !== "stryda" && stateFeedAd !== "normal" && (
              <div className="absolute z-40 top-2 right-2 text-base">
                <FeedItemContextualMenu
                  item={item}
                />
              </div>
            )}
            {/*
            <div className="px-4 pb-4 space-y-2">
              <h4 className="text-lg md:text-xl font-bold text-ui-100">
                {item.title}
              </h4>
              <p className="text-ui-300">{item.text}</p>
            </div>
          */}
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-30 interactive-secondary"
          >
          <img
            src={item.image}
            alt={item.title}
            className={`w-full h-auto aspect-video object-center object-cover ${stateFeedAd !== "stryda" && stateFeedAd !== "normal" ? 'rounded' : 'border-t border-ui-700 rounded-b'}`}
          />
          </a>
        </button>
      )}
    </>
  );
}
