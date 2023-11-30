import { useEffect, useState, useRef, useContext } from "react";
import { usePrototypeData } from "@/contexts/prototype";
import { UiContext } from "@/contexts/ui";
import { useRouter } from "next/router";
import TopbarHighlightsSettings from "./TopbarHighlightsSettings";
import TopbarHighlightsListItem from "./TopbarHighlightsListItem";
import ModalFeedItemViewer from "../modal-feeditemdetailsviewer";
import CardRecap from "./CardRecap";

const feedItems = [
  {
    id: 0,
    isCompleted: false,
  },
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
  const processingCopySentences = [
    "Preparing video for AI",
    "Uploading to AI",
    "AI analysing recording",
    "Creating highlight reel",
    "Finishing up",
    "Finishing up",
  ];
  const [processingID, setProcessingID] = useState(0);
  const [processingPercent, setProcessingPercent] = useState(0);
  const [processingCopy, setProcessingCopy] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
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

  const handleProcessing = (id) => {
    let interval;
    if (processingPercent < 100) {
      interval = setInterval(() => {
        setProcessingPercent((prevProgress) => {
          const newProgress = prevProgress + 1;
          return newProgress <= 100 ? newProgress : 100;
        });
      }, 30);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  };

  useEffect(() => {
    if (processingPercent === 100) {
      setProcessingCopy(
        processingCopySentences[processingCopySentences.lastIndexOf]
      );
      setProcessingStatus("finished");
      setItemsToProcess(itemsToProcess - 1);
      setButtonState(2);
      setTimeout(() => {
        setButtonState(1);
      }, 4000);
      if (processingID === 13) {
        uiContext.openToastr({
          text: "Creation failed",
          color: "red",
          autoDelete: true,
          autoDeleteDelay: 4000,
        });
      } else {
        uiContext.openToastr({
          text: "Highlight automated successfully.",
          color: "green",
          autoDelete: true,
          autoDeleteDelay: 8000,
          actions: (
            <button
              type="button"
              className="button button-sm"
              onClick={() =>
                openFeedItemDetailsMatch("highlight", uiContext.closeToastr(0))
              }
            >
              <span>View</span>
            </button>
          ),
        });
      }
    } else if (processingPercent === 1) {
      setProcessingStatus("processing");
    } else {
      setProcessingCopy(
        processingCopySentences[
          Math.round(((processingPercent / 100) * 10) / 2)
        ]
      );
    }
  }, [processingPercent]);

  const handleLoad = (id) => {
    setProcessingID(id);
    setProcessingPercent(0);
    handleProcessing(id);
  };

  const handleTab = (tab) => {
    setActiveTab(tab);
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
        <div className="flex items-center rounded-full bg-ui-500 interactive">
          <div className="hidden md:block">
            <button
              type="button"
              className={`button button-loader button-unstretch xl:button-stretch ${
                buttonState > 0 ? "is-active" : ""
              } ${buttonState === 0 ? "button-ghost" : ""} ${
                buttonState === 1 ? "button-secondary" : ""
              } ${buttonState === 2 ? "button-success" : ""}`}
              onClick={dropdownActive}
            >
              <div
                className="progresscontainer"
                style={{ "--percent": processingPercent }}
              >
                <div>
                  <div className="w-full text-xs flex items-center justify-between px-1">
                    <span className="w-9">{processingPercent}%</span>
                    <span className="flex-1 truncate">{processingCopy}</span>
                  </div>
                </div>
                <div>
                  <div className="w-full text-xs flex items-center justify-between px-1">
                    <span className="w-9">{processingPercent}%</span>
                    <span className="flex-1 truncate">{processingCopy}</span>
                  </div>
                </div>
              </div>
              <span>
                <span className="text-sm">
                  {buttonState === 0 && ""}
                  {buttonState === 1 && "New highlights recorded"}
                  {buttonState === 2 && "Highlights ready"}
                </span>
              </span>
              <span className="icon icon-video" />
            </button>
          </div>
        </div>

        <div
          tabIndex="1"
          className="dropdown-content bg-ui-500 w-[calc(100vw-100px)] sm:w-[436px] overflow-hidden rounded-xl shadow-xl"
        >
          {prototype.isClient ? (
            <div>
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1696837189/Stryda/illustrations/video_manager_empty_state.webp"
                alt=""
                className=" aspect-video"
              />
              <div className="p-6 text-center border-t border-ui-400/20">
                <h2 className="h5">Never miss an epic moment again</h2>
                <p className="leading-tight mt-3 mb-4">
                  Transform your matches into epic highlight videos and share
                  with your friends.
                </p>
                <button type="button" className="button button-primary">
                  <span className="icon icon-windows-symbol" />
                  <span>Download Stryda</span>
                </button>
              </div>
            </div>
          ) : (
            <>
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
                      <>
                        {prototype.isPremium ? (
                          <ul className="p-2 space-y-2">
                            {feedItems.map((item, itemIndex) => (
                              <TopbarHighlightsListItem
                                key={itemIndex}
                                itemIndex={itemIndex}
                                id={item.id}
                                item={prototype.getFeedItemByID(item.id)}
                                onLoad={handleLoad}
                                onTab={handleTab}
                                isAlreadyProcessed={item.isCompleted}
                                processingID={processingID}
                                processingStatus={processingStatus}
                                processingCopy={processingCopy}
                                processingPercent={processingPercent}
                              />
                            ))}
                          </ul>
                        ) : (
                          <ul className="p-2 space-y-2">

                            <CardRecap />
                            
                          </ul>
                        )}
                      </>
                    )}
                    {isActive && activeTab === "settings" && (
                      <TopbarHighlightsSettings />
                    )}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
