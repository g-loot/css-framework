import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { useRouter } from "next/router";
import { usePrototypeData } from "@/contexts/prototype";
import Avatar from "@/components/Avatar/Avatar";
import Link from "next/link";
import FeedItemContextualMenu from "./FeedItemContextualMenu";
import ModalFeedItemViewer from "../modal-feeditemdetailsviewer";

export default function FeedItemMatchBase(props) {
  const router = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  const match = props.match;
  const detailedView = props.detailedView || false;
  const [isEditing, setIsEditing] = useState(false);
  const [savedText, setSavedText] = useState("");
  const [editText, setEditText] = useState();

  const handleEditClick = () => {
    setIsEditing(true);
    setSavedText(editText);
  };

  const handleInputChange = (e) => {
    setEditText(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Escape" || e.keyCode === 27) {
      setIsEditing(false);
      setEditText(savedText);
    } else if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  useEffect(() => {
    if (match.meta.text) {
      setEditText(match.meta.text);
    }
  }, [item]);

  function openFeedItemDetailsMatch(target) {
    uiContext.openModal(<ModalFeedItemViewer item={item} selectedTab={target ? target : "default"} />);
  }

  return (
    <>
      {item && match && (
        <>
          <div className="p-3 flex items-center gap-3 leading-tight text-base">
            <Avatar id={match.user} size="avatar-sm" hasTooltip={true} />
            <div className="flex-1 overflow-hidden leading-tight">
              <div className="truncate p-1">
                <Link
                  href={`/stryda/profile/${
                    match.user
                  }${prototype.getURLparams()}`}
                >
                  <span
                    className={`interactive truncate ${
                      prototype.getUserByID(match.user)?.isPremium
                        ? "text-premium-500"
                        : ""
                    }`}
                  >
                    {prototype.getUserByID(match.user)?.nickname}
                  </span>
                </Link>
              </div>
              <div className="text-xs text-ui-300 px-1 whitespace-nowrap flex items-center gap-1">
                <span>{match.meta.dateTimeEnded}</span>
              </div>
            </div>
            <div className="flex-none self-start">
              <FeedItemContextualMenu
                item={item}
                match={match}
                onEdit={handleEditClick}
              />
            </div>
          </div>
          <div className="text-base"></div>
          {match.meta.text && (
            <div className="pl-2 sm:pl-3 pr-1 sm:pr-2 pt-1 pb-3 flex items-center justify-between gap-2 text-base md:text-lg font-bold text-ui-100 leading-tight">
              {isEditing ? (
                <div className="inline relative">
                  <input
                    type="text"
                    value={editText}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    onKeyDown={handleInputKeyDown}
                    autoFocus
                    className="max-w-[100%] absolute z-10 inset-0 shadow-sm bg-ui-700 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-1 focus-visible:outline-ui-400 focus-visible:z-20 rounded"
                  />
                  <span
                    className="relative z-0 opacity-0 select-none"
                    aria-hidden="true"
                  >
                    {editText}
                  </span>
                </div>
              ) : (
                <button
                  type="button"
                  className={!detailedView ? 'interactive' : 'pointer-events-none'}
                  onClick={() => !detailedView && openFeedItemDetailsMatch()}
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: editText,
                    }}
                  />
                </button>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
}
