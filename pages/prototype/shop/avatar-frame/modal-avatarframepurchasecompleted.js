import React, { useContext, useState } from "react";
import { UiContext } from "../../../../contexts/ui.js";
import { VariablesContext } from "../../../../contexts/variables";
import { usePrototypeData } from "../../../../contexts/prototype.js";
import Lottie from "lottie-react";
import LottieExplosion from "../../../../assets/animations/explosion_stryda_10.json";

export default function ModalAvatarFramePurchaseCompleted(props) {
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const [submitting, setSubmitting] = useState(false);
  const id = props.id || 1;
  const prototype = usePrototypeData();
  const selectedItem = prototype.getShopitemByID(1, id);

  function closeModalWithDelay(id) {
    setSubmitting(true);
    window.location.href = `/prototype/profile/1?avatarframe=${id}`;
    setTimeout(() => {
      setSubmitting(false);
      uiContext.closeModal();
    }, 1000);
  }

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <>
      <div className="relative z-10 max-w-sm w-full">
        <div className="modal w-full">
          <div className="modal-content">
            <div className="modal-body text-center">
              <h2 className="modal-title">Congratulations</h2>
              <p>You have purchased the following item:</p>
              <div className="border-t border-ui-700 mt-4 pt-8 pb-4">
                <div className="avatar avatar-circle avatar-xl mb-4 mx-auto animate-fire-in animate-delay"
                    style={{
                      "--delay": "calc(1 * 1.2s)",
                    }}>
                  <img src={selectedItem.image} alt="" />
                  <div>
                    <img src={prototype.getUserByID(1)?.avatar} alt="avatar" />
                  </div>
                </div>
                <div className="text-ui-300 uppercase text-xl animate-fire-in animate-delay"
                    style={{
                      "--delay": "calc(1 * 1.25s)",
                    }}>
                  {selectedItem.name}
                </div>
              </div>
            </div>
            <div className="modal-action justify-center">
              <button
                type="button"
                onClick={closeModalWithDelay.bind(this, selectedItem.id)}
                className="flex-1 button button-primary"
              >
                <span>Equip</span>
              </button>
              <button
                className="flex-1 button button-secondary w-32"
                onClick={uiContext.closeModal}
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="lottie-blur h-[75vh] w-[75vh] flex items-center justify-center">
          <Lottie
            animationData={LottieExplosion}
            loop={false}
            autoplay={true}
          />
        </div>
      </div>
    </>
  );
}
