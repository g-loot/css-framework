import React, { useContext, useState } from "react";

import ListItemTournament from "../../components/ListItem/ListItemTournament";
import Lottie from "lottie-react";
import LottieExplosion from "../../assets/animations/explosion-2.json";
import { UiContext } from "../../contexts/ui.js";
import { usePrototypeData } from "../../contexts/prototype";

export default function ModalDownloadStarted(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [submitting, setSubmitting] = useState(false);
  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({size: "small", text: "Download has started", color: "green", autoDelete: true, autoDeleteDelay: 2500});
      uiContext.closeModal();
      setSubmitting(false);
    }, 1000);
  }

  return (
    <>
      <div className="relative z-10 max-w-sm w-full">
        <div className="modal w-full">
          <button
            type="button"
            className="button button-secondary button-close"
            onClick={uiContext.closeModal}
          >
            <span className="icon icon-e-remove" />
          </button>
          <div className="modal-content">
            <div className="modal-body">
              <span className="icon icon-gloot-symbol text-main text-7xl mx-auto animate-slide-in-top my-4" />
              <div className="flex gap-4 items-center justify-center">
                <span className="icon icon-data-download text-4xl text-ui-200" />
                <h2 className="modal-title">
                  Download started
                </h2>
              </div>
              <ul className="rounded-lg p-6 space-y-2 bg-gradient-to-b from-ui-800 to-ui-800/50 my-4 text-left">
                <li className="flex gap-2 items-center animate-slide-in-bottom animate-delay" style={{ '--delay': 'calc( 2 * 0.05s)'}}>
                  <span className="icon icon-check text-main text-2xl" />
                  <span className="flex-1">An official Overwolf app for Windows</span>
                  <span className="icon icon-overwolf-symbol text-2xl text-ui-300" />
                  <span className="icon icon-windows-symbol text-2xl text-ui-300" />
                </li>
                <li className="flex gap-2 items-center animate-slide-in-bottom animate-delay" style={{ '--delay': 'calc( 3 * 0.05s)'}}>
                  <span className="icon icon-check text-main text-2xl" />
                  <span className="flex-1">Lightweight</span>
                </li>
                <li className="flex gap-2 items-center animate-slide-in-bottom animate-delay" style={{ '--delay': 'calc( 4 * 0.05s)'}}>
                  <span className="icon icon-check text-main text-2xl" />
                  <span className="flex-1">Doesn’t affect your game performance</span>
                </li>
              </ul>
              <p className="leading-tight text-center text-sm text-ui-300 max-w-[45ch] mx-auto">
                Your download should start automatically. If it does not, please click <a href="#" className="link link-main">here</a> to download.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
