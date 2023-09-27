import { useEffect, useState, useRef, useContext } from "react";
import { usePrototypeData } from "@/contexts/prototype";
import { UiContext } from "@/contexts/ui";
import { useRouter } from "next/router";
import TopbarHighlightsSettings from "./TopbarHighlightsSettings";
import TopbarHighlightsListItem from "./TopbarHighlightsListItem";
import ModalFeedItemViewer from "../modal-feeditemdetailsviewer";

const feedItems = [
  {
    id: 12,
    isCompleted: false,
  },
  {
    id: 13,
    isCompleted: false,
  },
  {
    id: 14,
    isCompleted: false,
  },
  {
    id: 15,
    isCompleted: false,
  },
  {
    id: 16,
    isCompleted: true,
  },
];

export default function TopbarHighlights() {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const { query } = useRouter();
  const isEmpty = query.empty === "true" ? true : false;
  const [buttonWidth, setButtonWidth] = useState(0);
  const spanRef = useRef(null);
  const [activeTab, setActiveTab] = useState("list");
  const [itemsToProcess, setItemsToProcess] = useState(feedItems.filter((i) => !i.isCompleted).length);
  const [processingID, setProcessingID] = useState(0);
  const [processingPercent, setProcessingPercent] = useState(0);
  const [processingStatus, setProcessingStatus] = useState("idle");
  let interval;

  const [isActive, setActive] = useState(false);
  const ref = useRef(null);

  const dropdownActive = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  useEffect(() => {
    extendButton(1000);
  }, []);

  useEffect(() => {
    console.log("itemsToProcess", itemsToProcess);
    if(itemsToProcess === 0) {
        setButtonWidth(0);
      }
  }, [itemsToProcess]);

  const extendButton = (delay) => {
    if (spanRef.current) {
      const spanWidth = spanRef.current.offsetWidth;
      interval = setTimeout(() => {
        setButtonWidth(spanWidth);
      }, delay);
      return () => {
        clearTimeout(interval);
      };
    }
  };

  const handleProcessing = (id) => {
    let interval;
    if (processingPercent < 100) {
      interval = setInterval(() => {
        setProcessingPercent((prevProgress) => {
          const newProgress = prevProgress + 1;
          return newProgress <= 100 ? newProgress : 100;
        });
      }, 80);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  };

  useEffect(() => {
    if (processingPercent === 100) {
      setProcessingStatus("finished");
      setItemsToProcess(itemsToProcess - 1);
      uiContext.openModal(
        <ModalFeedItemViewer
          item={prototype.getFeedItemByID(processingID)}
          selectedTab={"highlight"}
          editMode={true}
        />
      );
    } else if (processingPercent === 1) {
      setProcessingStatus("processing");
    }
  }, [processingPercent]);

  const handleLoad = (id) => {
    setProcessingID(id);
    setProcessingPercent(0);
    handleProcessing(id);
  };

  return (
    <>
      <div
        ref={ref}
        className={`dropdown dropdown-end ${
          isActive ? "dropdown-open" : "dropdown-closed"
        }`}
      >
        <div className="flex items-center rounded-full bg-ui-500 interactive my-1.5">
          <button
            type="button"
            className={`button button-ghost rounded-full !gap-0 ${
              buttonWidth > 0
                ? "!shadow-[inset_0_0_0_1px_rgba(var(--color-main)/70%),inset_0_-0.25rem_1rem_0_rgba(var(--color-main)/20%)]"
                : ""
            }`}
            onClick={dropdownActive}
          >
            {processingPercent > 0 && (
              <div className="!m-0 absolute rounded-full inset-1 z-50 pointer-events-none overflow-hidden">
                <div
                  className="progresscontainer"
                  style={{ "--percent": processingPercent }}
                >
                  <div>
                    <div className="text-sm font-bold">
                      {processingPercent}% Analysing
                    </div>
                  </div>
                  <div>
                    <div className="text-sm">
                      {processingPercent}% Analysing
                    </div>
                  </div>
                </div>
              </div>
            )}
            <span
              className="!m-0 overflow-hidden transition-all duration-1000 ease whitespace-nowrap normal-case leading-none flex items-center justify-center"
              style={{ width: `${buttonWidth}px` }}
            >
              <span
                ref={spanRef}
                className={`pl-0.5 pr-2 text-sm ${
                  buttonWidth > 0 ? "text-main" : "-translate-x-full"
                }`}
              >
                New matches recorded
              </span>
            </span>
            <span
              className={`!m-0 leading-[0] after:absolute after:-right-3 after:top-1 ${
                buttonWidth > 0 ? "text-main" : ""
              }`}
            >
              <span className="icon icon-video" />
            </span>
          </button>
        </div>

        <div
          tabIndex="1"
          className="dropdown-content bg-ui-500 w-[calc(100vw-100px)] sm:w-[420px] overflow-hidden rounded-xl shadow-xl"
        >
          {isEmpty && (
            <div className="h-72 flex items-center justify-center text-center">
              <div>
                <span className="icon icon-video text-6xl text-ui-500" />
                <p className="text-sm text-ui-400 mt-2">
                  You have no new highlights.
                </p>
              </div>
            </div>
          )}
          {!isEmpty && (
            <>
              <ul className="tabs tabs-stretch text-sm border-b border-ui-500 bg-gradient-to-b from-ui-500/25 to-ui-600">
                <li>
                  <button
                    type="button"
                    className={activeTab === "list" ? "is-active" : ""}
                    onClick={() => setActiveTab("list")}
                  >
                    <span>New recordings</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={activeTab === "settings" ? "is-active" : ""}
                    onClick={() => setActiveTab("settings")}
                  >
                    <span>Highlights settings</span>
                  </button>
                </li>
              </ul>
              <div className="max-h-[calc(100dvh-92px-1rem)] bg-ui-700 overflow-x-hidden overflow-y-auto scrollbar-desktop">
                {isActive && activeTab === "list" && (
                  <ul className="p-2 space-y-2">
                    {feedItems.map((item, itemIndex) => (
                      <TopbarHighlightsListItem
                        key={itemIndex}
                        delay={itemIndex}
                        id={item.id}
                        match={prototype.getMatchByID(prototype.getFeedItemByID(item.id).itemID)}
                        onLoad={handleLoad}
                        finished={item.isCompleted}
                        processingID={processingID}
                        processingStatus={processingStatus}
                        processingPercent={processingPercent}
                      />
                    ))}
                  </ul>
                )}
                {isActive && activeTab === "settings" && (
                  <TopbarHighlightsSettings />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
