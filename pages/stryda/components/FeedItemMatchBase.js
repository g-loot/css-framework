import { useEffect, useState, useContext, useRef } from "react";
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
  const [editText, setEditText] = useState("");
  const textareaRef = useRef(null);
  const minRows = 1;
  const maxChar = 400;
  const [rows, setRows] = useState(minRows);

  const handleTextareaInput = () => {
    if (textareaRef.current) {
      const currentRows = Math.ceil(
        textareaRef.current.scrollHeight / textareaRef.current.clientHeight
      );
      setRows(currentRows);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setSavedText(editText);
    handleTextareaInput();
    
    const interval = setTimeout(() => {
      if (textareaRef.current) {
        // textareaRef.current.select();
        const currentValue = textareaRef.current.value;
        textareaRef.current.selectionStart = currentValue.length;
        textareaRef.current.selectionEnd = currentValue.length;
      }
    }, 10);
    return () => {
      clearTimeout(interval);
    };
  };

  const handleInputChange = (e) => {
    setEditText(e.target.value);
  };

  const handleInputBlur = () => {
    if(editText.length <= maxChar) {
      setIsEditing(false);
    } else if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Escape" || e.keyCode === 27) {
      setEditText(savedText);
      setIsEditing(false);
    } else if (e.key === "Enter") {
      handleInputBlur();
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
                {match.achievements?.length > 0 && (
                  <div className="chip chip-status chip-main chip-xs">
                    <span>Ladder match</span>
                  </div>
                )}
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
            <div className="pl-2 sm:pl-3 pr-1 sm:pr-2 pt-1 pb-3 text-base md:text-lg font-bold text-ui-100 leading-tight">
              {isEditing ? (
                <div className="relative">
                  <textarea
                    ref={textareaRef}
                    onInput={handleTextareaInput}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    onKeyDown={handleInputKeyDown}
                    rows={rows}
                    autoFocus
                    className="resize-none w-full relative z-10 inset-0 shadow-sm bg-ui-700 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-1 focus-visible:outline-ui-400 focus-visible:z-20 rounded"
                  >{editText}</textarea>
                  <span
                    className="hidden relative z-0 opacity-0 select-none whitespace-pre-wrap"
                    aria-hidden="true"
                  >
                    {editText}
                  </span>
                  {editText.length > maxChar && (
                    <span className="absolute z-20 pointer-events-none -top-2 right-0 -translate-y-full">
                      <span className="chip chip-xs chip-status chip-attention animate-slide-in-bottom">
                        <span>
                          {editText.length} / {maxChar} characters
                        </span>
                      </span>
                    </span>
                  )}
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
