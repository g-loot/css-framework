import { useEffect, useState } from "react";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";

export default function TopbarHighlightProcessing(props) {
  const prototype = usePrototypeData();
  const router = useRouter();
  const { query } = useRouter();
  const isEmpty = query.empty === "true" ? true : false;
  const [loading, setLoading] = useState(true);
  const [hasNewVideos, setHasNewVideos] = useState(false);

  useEffect(() => {
    if (router.pathname.endsWith("home")) {
      setHasNewVideos(false);
      setTimeout(() => {
        setHasNewVideos(true);
      }, 3000);
    } else {
    }
  }, []);

  return (
    <>
      <div className="dropdown dropdown-end">
        <div
          tabIndex="1"
          className="flex items-center rounded-full bg-ui-500 interactive"
        >
          <button type="button" className="button button-ghost rounded-full">
            <span className="leading-[0] after:absolute after:-right-3 after:top-1 after:bg-error-300">
              <span className="icon icon-video text-ui-200" />
            </span>
          </button>
          {hasNewVideos && (
            <div className="absolute inset-0 grid place-content-center">
              <div role="loading" className="loader loader-sm" />
            </div>
          )}
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
              <div className="flex items-center justify-between p-2">
                <div className="max-h-[300px] overflow-y-auto scrollbar-desktop px-2 pb-2 space-y-2">
                  <ul>
                    <li
                      className={`surface-ui-600 rounded p-4 ${
                        loading ? "is-loading" : ""
                      }`}
                    ></li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
