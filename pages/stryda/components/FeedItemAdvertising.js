import Link from "next/link";
import FeedItemComments from "./FeedItemComments";

export default function FeedItemAdvertising(props) {
  const item = props.item;

  return (
    <>
      {item && (
        <button type="button" className="surface sm:rounded w-full">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-secondary"
          >
            <div className="p-4 flex items-center gap-3 leading-tight">
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
            </div>
            <div className="px-4 pb-4 space-y-2">
              <h4 className="text-lg md:text-xl font-bold text-ui-100">
                {item.title}
              </h4>
              <p className="text-ui-300">{item.text}</p>
            </div>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto aspect-video object-center object-cover border-y border-ui-700"
            />
          </a>
          <FeedItemComments item={item} isExpanded={false} />
        </button>
      )}
    </>
  );
}
