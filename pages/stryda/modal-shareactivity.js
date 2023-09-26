import React, { useContext, useState, useRef, useEffect } from "react";

import { UiContext } from "@/contexts/ui.js";
import { usePrototypeData } from "@/contexts/prototype.js";
import Slider from "@/components/Slider/Slider";

export default function ModalShareActivity(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;

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

  useEffect(() => {
    setUrl(`https://stryda.netlify.app/stryda/activity/${item.id}`);
  }, [item]);

  return (
    <>
      {item && (
        <div className="relative w-full max-w-sm z-10">
          <div className="modal modal-center">
            <button
              type="button"
              className="button button-secondary button-close"
              onClick={uiContext.closeModal}
            >
              <span className="icon icon-e-remove" />
            </button>
            <div className="modal-content">
              <div className="modal-body">
                <h2 className="modal-title">Share post</h2>

                <div className="flex flex-wrap items-center justify-center gap-8 text-sm py-8">
                <div>
                    <button
                      type="button"
                      className="aspect-square rounded-full grid place-content-center bg-mono-900 p-4 interactive"
                    >
                      <span className="icon text-3xl icon-tiktok text-mono-100" />
                    </button>
                    <div className="mt-2 truncate hidden">Tik-Tok</div>
                  </div>
                  {/* <div>
                    <button
                      type="button"
                      className="aspect-square rounded-full grid place-content-center bg-[#25D366] p-4 interactive"
                    >
                      <span className="icon text-3xl icon-logo-whatsapp text-mono-100" />
                    </button>
                    <div className="mt-2 truncate hidden">WhatsApp</div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="aspect-square rounded-full grid place-content-center bg-[#3B5998] p-4 interactive"
                    >
                      <span className="icon text-3xl icon-logo-fb-simple text-mono-100" />
                    </button>
                    <div className="mt-2 truncate hidden">Facebook</div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="aspect-square rounded-full grid place-content-center bg-mono-900 p-4 interactive"
                    >
                      <span className="icon text-3xl icon-logo-x text-mono-100" />
                    </button>
                    <div className="mt-2 truncate hidden">X</div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="aspect-square rounded-full grid place-content-center bg-ui-850 p-4 interactive"
                    >
                      <span className="icon text-3xl icon-send-message text-mono-100" />
                    </button>
                    <div className="mt-2 truncate hidden">Email</div>
                  </div> */}
                </div>

                {/* 
                <Slider
                  itemWidth={44 + 16}
                  direction="center"
                  bgColor="from-ui-800 via-ui-800/90 to-ui-800/0"
                >
                  <div className="flex items-center gap-4 text-sm">
                    <div>
                      <button
                        type="button"
                        className="aspect-square rounded-full grid place-content-center bg-[#25D366] p-4 interactive"
                      >
                        <span className="icon text-3xl icon-logo-whatsapp text-mono-100" />
                      </button>
                      <div className="mt-2 truncate hidden">WhatsApp</div>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="aspect-square rounded-full grid place-content-center bg-[#3B5998] p-4 interactive"
                      >
                        <span className="icon text-3xl icon-logo-fb-simple text-mono-100" />
                      </button>
                      <div className="mt-2 truncate hidden">Facebook</div>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="aspect-square rounded-full grid place-content-center bg-mono-900 p-4 interactive"
                      >
                        <span className="icon text-3xl icon-logo-x text-mono-100" />
                      </button>
                      <div className="mt-2 truncate hidden">X</div>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="aspect-square rounded-full grid place-content-center bg-ui-850 p-4 interactive"
                      >
                        <span className="icon text-3xl icon-at-sign-2 text-mono-100" />
                      </button>
                      <div className="mt-2 truncate hidden">Email</div>
                    </div>
                  </div>
                </Slider>

      */}

                <hr className="my-4" />

                <div className="form-group">
                  <div className="input-group">
                    <button
                      type="button"
                      onClick={copyUrlToClipboard}
                      className="button button-primary"
                    >
                      <span>Copy</span>
                    </button>
                    <input
                      ref={urlRef}
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
