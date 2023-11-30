import React, { useContext, useState, useRef } from "react";

import { UiContext } from "@/contexts/ui.js";

export default function RecapPublished() {
  const uiContext = useContext(UiContext);
  const [url, setUrl] = useState("");
  const urlRef = useRef(null);

  const copyUrlToClipboard = () => {
    if (urlRef.current) {
      urlRef.current.select();
      navigator.clipboard.writeText(url);
      uiContext.openToastr({
        size: "medium",
        text: "Link copied to your clipboard",
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
    }
  };

  return (
    <>
      <div className="modal modal-center max-w-sm">
        <div className="modal-content">
          <div className="modal-body">
            <h2 className="modal-title">Recap published!</h2>
            <video
              autoPlay={true}
              controls
              playsInline
              muted
              width="100%"
              height="auto"
              className="w-full rounded my-4"
              src="https://res.cloudinary.com/gloot/video/upload/v1691649706/Stryda/demo/game%20footage/DA9DA6B4CC7894931_0_3.final.mp4"
            />
            <div className="w-full max-w-sm mx-auto">
              <p>Want to share it outside Stryda? No problem!</p>
              <div className="form-group mt-3 mb-4">
                <div className="input-group">
                  <button
                    type="button"
                    onClick={copyUrlToClipboard}
                    className="button button-ghost"
                  >
                    <span>Copy link</span>
                  </button>
                  <input
                    ref={urlRef}
                    type="text"
                    value="https://stryda.netlify.app/stryda/activity/0"
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
              </div>
              <button
                type="button"
                className="button button-secondary w-full max-w-xs"
              >
                <span className="icon icon-data-download" />
                <span>Download</span>
              </button>
              {/* <div className="flex items-center justify-center gap-2 ">
                <button
                  type="button"
                  className="button button-secondary flex-1"
                >
                  <span className="icon icon-tiktok" />
                  <span>Share on tiktok</span>
                </button>
                <button
                  type="button"
                  className="button button-secondary flex-1"
                >
                  <span className="icon icon-data-download" />
                  <span>Save as...</span>
                </button>
              </div> */}
            </div>
            <div className="modal-action">
              <button
                type="button"
                className="button button-primary w-full max-w-xs"
                onClick={() => uiContext.closeModal()}
              >
                <span>Go to feed</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
