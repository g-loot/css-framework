import React, { useContext, useState } from "react";

import InputNumber from "@/components/InputNumber/InputNumber.js";
import { UiContext } from "@/contexts/ui.js";
import { usePrototypeData } from "@/contexts/prototype.js";
import Avatar from "@/components/Avatar/Avatar";

export default function ModalUnfollow(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const selectedUser = props.selectedUser || null;
  const [submitting, setSubmitting] = useState(false);
  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({
        size: "medium",
        text: `${selectedUser.nickname} removed from your following`,
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
      uiContext.closeModal();
      setSubmitting(false);
    }, 3000);
  }

  return (
    <>
    {selectedUser && (
      <div className="modal max-w-sm modal-center">
        <div className="modal-content">
          <div className="modal-body">
            <div className="flex items-center justify-center mt-4 mb-8">
              <Avatar id={selectedUser.id} hasLevel={false} size="avatar-lg" />
            </div>
            <h2 className="modal-title h4">Unfollow {selectedUser.nickname}?</h2>
          </div>
          <div className="modal-action">
            <button
              type="button"
              className={`button button-primary ${
                submitting ? "is-loading" : ""
              }`}
              onClick={closeModalWithDelay}
            >
              <span>Unfollow</span>
            </button>
            <button
              type="button"
              className="button button-secondary"
              onClick={uiContext.closeModal}
            >
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
