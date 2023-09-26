import { useEffect, useState, useRef } from "react";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import TopbarHighlightsList from "./TopbarHighlightsList";
import TopbarHighlightsSettings from "./TopbarHighlightsSettings";

export default function TopbarHighlights(props) {
  const prototype = usePrototypeData();
  const router = useRouter();
  const { query } = useRouter();
  const isEmpty = query.empty === "true" ? true : false;
  const [loading, setLoading] = useState(true);
  const [hasNewVideos, setHasNewVideos] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(0);
  const spanRef = useRef(null);
  const [activeTab, setActiveTab] = useState("list");
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [status, setStatus] = useState();
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
    handleStart();
  }, []);

  const handleStart = () => {
    setStatus("processing");
    if (spanRef.current) {
      const spanWidth = spanRef.current.offsetWidth;
      interval = setTimeout(() => {
        setButtonWidth(spanWidth);
      }, 4000);
      return () => {
        clearTimeout(interval);
      };
    }
  };

  useEffect(() => {
    if (loadingProgress === 100) {
      setTimeout(() => {
        setStatus("finished");
      }, 1000);
      setTimeout(() => {
        setButtonWidth(0);
      }, 2000);
    } else if (loadingProgress === 0) {
      handleStart();
    }
  }, [loadingProgress]);

  const handleLoad = (id, progress) => {
    setLoadingProgress(progress - 1);
  };

  return (
    <>
      <div
        ref={ref}
        className={`dropdown dropdown-end ${
          isActive ? "dropdown-open" : "dropdown-closed"
        }`}
      >
        <div className="flex items-center rounded-full bg-ui-500 interactive">

        <button
          type="button"
          className={`button button-ghost rounded-full !gap-0 ${
            buttonWidth > 0
              ? "!shadow-[inset_0_0_0_1px_rgba(var(--color-main)/100%)]"
              : ""
          }`}
          onClick={dropdownActive}
        >
          {loadingProgress > 0 && (
            <div className="!m-0 absolute rounded-full inset-1 z-50 pointer-events-none overflow-hidden">
              <div
                className="progresscontainer"
                style={{ "--percent": loadingProgress }}
              >
                <div>
                  <div className="text-sm font-bold">
                    {loadingProgress}% Analysing
                  </div>
                </div>
                <div>
                  <div className="text-sm">{loadingProgress}% Analysing</div>
                </div>
              </div>
            </div>
          )}
          <span
            className="!m-0 overflow-hidden transition-all duration-1000 ease whitespace-nowrap normal-case"
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
              {activeTab === "list" && (
                <TopbarHighlightsList onLoad={handleLoad} />
              )}
              {activeTab === "settings" && <TopbarHighlightsSettings />}
            </>
          )}
        </div>
      </div>
    </>
  );
}
