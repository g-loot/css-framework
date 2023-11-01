import React, { useContext, useState, useEffect } from "react";

import { UiContext } from "@/contexts/ui.js";

export default function ModalUpdateClient(props) {
  const uiContext = useContext(UiContext);
  const [updateState, setUpdateState] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [trialLength, setTrialLength] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === "Escape" || e.keyCode === 27) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({
        size: "medium",
        text: `The match has been deleted successfully.`,
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
      uiContext.closeModal();
      setSubmitting(false);
    }, 3000);
  }

  const handleUpdate = () => {
    setUpdateState(2);
    setTimeout(() => {
      if(trialLength === 1) {
        window.location.href = `/stryda/home`;
      } else {
        setTrialLength(1)
        setUpdateState(3);
      }
    }, 4000);
  };

  return (
    <div className="modal max-w-sm modal-center">
      {updateState === 1 && (
        <div className="modal-content aspect-story md:aspect-square">
          <div className="modal-body flex-1 flex flex-col items-center justify-center child:animate-delay">
            <img
              src="https://res.cloudinary.com/gloot/image/upload/v1698845349/Stryda/illustrations/3d_object_rocket.webp"
              alt=""
              className="w-44 mx-auto my-4 animate-slide-in-bottom"
            />
            <h2 className="modal-title animate-slide-in-bottom">
              App update required
            </h2>
            <p className="animate-slide-in-bottom">
              A new version of our app is ready for you.
            </p>
          </div>
          <div className="modal-action">
            <button
              type="button"
              className={`button flex-1 button-primary ${
                submitting ? "is-loading" : ""
              }`}
              onClick={handleUpdate}
            >
              <span>Update now</span>
            </button>
          </div>
        </div>
      )}
      {updateState === 2 && (
        <div className="modal-content aspect-story md:aspect-square">
          <div className="modal-body" onClick={() => setUpdateState(1)}>
            <div className="mb-6 animate-slide-in-bottom">
              <div role="loading" className="loader loader-lg">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            <h2 className="modal-title animate-slide-in-bottom">
              Installing update
            </h2>
            <p className="animate-slide-in-bottom">
              Please wait for the app to update and restart.
            </p>
          </div>
        </div>
      )}
      {updateState === 3 && (
        <div className="modal-content">
          <div className="modal-body flex-1 flex flex-col items-center justify-center child:animate-delay">
            <span className="icon icon-warning-sign text-4xl text-ui-400 my-4 animate-shake" />
            <h2 className="modal-title mb-4">An error has occured</h2>
            <div className="text-left format">
              <p>
                An error occurred during the installation process, preventing
                the update from being installed. Possible Causes:
              </p>
              <ol>
                <li>
                  <b>Internet Connection</b>
                  <br />
                  Issues Please ensure that your internet connection is stable
                  and try the update again.
                </li>
                <li>
                  <b>Corrupted Installation Files</b>
                  <br />
                  The update files might have been corrupted during the download
                  process. Try uninstalling Stryda and installing the latest
                  version.{" "}
                  <a href="#" className="link">
                    Download latest version
                  </a>
                  .
                </li>
              </ol>
              <p>
                If you need further assistance, please contact our support.Your
                current version of the App: XXX.XXX.XXX
              </p>
            </div>
          </div>
          <div className="modal-action mt-0">
            <button
              type="button"
              className={`button flex-1 button-primary ${
                submitting ? "is-loading" : ""
              }`}
              onClick={handleUpdate}
            >
              <span>Try again</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
