import React, { useContext, useState } from "react";
import { UiContext } from "../../contexts/ui.js";
import { usePrototypeData } from "../../contexts/prototype";
import dataUsers from "../../mock-data/data-users.js";
import Avatar from "../../components/Avatar/Avatar.js";

export default function ModalHighlightViewer(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
      {item && (
        <div className="modal max-w-xl">
          <button
            type="button"
            className="button button-tertiary button-close"
            onClick={uiContext.closeModal}
          >
            <span className="icon icon-e-remove" />
          </button>
          <div className="modal-content p-0">
            <div className="modal-body relative">
              <div className="absolute z-10 inset-0 p-4">
                <Avatar id={1} size="avatar-sm" />
              </div>
              <video
                autoPlay={true}
                playsInline
                loop
                muted
                preload
                width="100%"
                height="100%"
                className="relative z-0 w-full"
                src={item.media?.url}
              ></video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
