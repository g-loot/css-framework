import React, { useContext, useState } from "react";

import { UiContext } from "../../../../contexts/ui.js";

export default function ModalBrawlHowitworksVideo(props) {
  const uiContext = useContext(UiContext);
  const [submitting, setSubmitting] = useState(false);
  
  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.closeModal();
      setSubmitting(false);
    }, 1000);
  }

  return (
    <>
        <div className="modal w-full">
          <button
            type="button"
            className="button button-secondary button-close"
            onClick={uiContext.closeModal}
          >
            <span className="icon icon-e-remove" />
          </button>
          <div className="modal-content p-0">
            <div className="modal-body text-center">
              <iframe
                className="mx-auto aspect-video rounded"
                width="100%"
                height="auto"
                src="https://www.youtube.com/embed/3A-d57PMKEk?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
    </>
  );
}
