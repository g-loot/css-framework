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
  const [activeTab, setActiveTab] = useState("list");
  const [itemsToProcess, setItemsToProcess] = useState(
    feedItems.filter((i) => !i.isCompleted).length
  );
  const [processingID, setProcessingID] = useState(0);
  const [processingPercent, setProcessingPercent] = useState(0);
  const [processingStatus, setProcessingStatus] = useState("idle");
  const [buttonState, setButtonState] = useState(0);
  const [hasNewHighlights, setHasNewHighlights] = useState(false);
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
    const interval = setTimeout(() => {
      setButtonState(1);
    }, 4000);
    return () => {
      clearTimeout(interval);
    };
  }, []);

  useEffect(() => {
    //extendButton(1000);
  }, [buttonState]);

  // useEffect(() => {
  //   console.log("itemsToProcess", itemsToProcess);
  //   if (itemsToProcess === 0) {
  //     setHasNewHighlights(false);
  //   }
  // }, [itemsToProcess]);

  const extendButton = (delay) => {
    const interval = setTimeout(() => {
      setHasNewHighlights(true);
    }, delay);
    return () => {
      clearTimeout(interval);
    };
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
      setButtonState(2);
      setTimeout(() => {
        setButtonState(1);
        //setProcessingPercent(0);
      }, 4000);
      uiContext.openToastr({
        text: "Highlight automated successfully.",
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 8000,
        actions: (
          <button
            type="button"
            class="button button-sm"
            onClick={() => openFeedItemDetailsMatch("highlight", uiContext.closeToastr(0))}
          >
            <span>View</span>
          </button>
        ),
      });
      // uiContext.openModal(
      //   <ModalFeedItemViewer
      //     item={prototype.getFeedItemByID(processingID)}
      //     selectedTab={"highlight"}
      //     editMode={true}
      //   />
      // );
    } else if (processingPercent === 1) {
      setProcessingStatus("processing");
    }
  }, [processingPercent]);

  const handleLoad = (id) => {
    setProcessingID(id);
    setProcessingPercent(0);
    handleProcessing(id);
  };

  function openFeedItemDetailsMatch(target) {
    uiContext.openModal(
      <ModalFeedItemViewer
        item={prototype.getFeedItemByID(processingID)}
        selectedTab={target ? target : "default"}
      />
    );
  }

  return (
    <>
      <div
        ref={ref}
        className={`dropdown dropdown-end ${
          isActive ? "dropdown-open" : "dropdown-closed"
        }`}
      >
        <div className="flex items-center rounded-full bg-ui-500 interactive my-1.5">
          <div className="hidden md:block">
          <button
            type="button"
            className={`button button-loader button-stretch button-secondary ${
              buttonState > 0 ? "is-active" : ""
            }`}
            onClick={dropdownActive}
          >
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
                <div className="text-sm">{processingPercent}% Analysing</div>
              </div>
            </div>
            <span>
              <span className="text-sm">
                {buttonState === 0 && ""}
                {buttonState > 0 && "New highlights recorded"}
                {/* {buttonState === 2 && "Highlights ready"} */}
              </span>
            </span>
            <span className="icon icon-video" />
          </button>
          </div>
          <div className="block md:hidden">
          <button
            type="button"
            className={`button button-tertiary rounded-full ${
              buttonState > 0 ? "is-active" : ""
            }`}
            onClick={dropdownActive}
          >
            <span className="icon icon-video" />
          </button>
          </div>
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
                        itemIndex={itemIndex}
                        id={item.id}
                        item={prototype.getFeedItemByID(item.id)}
                        onLoad={handleLoad}
                        isAlreadyProcessed={item.isCompleted}
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
