import React, { useContext, useState } from "react";
import { UiContext } from "@/contexts/ui.js";
import { usePrototypeData } from "@/contexts/prototype";
import dataUsers from "@/mock-data/data-users.js";
import Avatar from "@/components/Avatar/Avatar.js";
import GameIcon from "@/components/GameIcon/GameIcon.js";

export default function ModalHighlightViewer(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
      {item && (
        <div className="modal rounded-[1.75rem] max-w-xl">
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
                <div className="absolute top-2 left-2 flex items-center p-2 rounded-r rounded-l-[5rem] bg-gradient-to-r from-ui-900/90 to-ui-900/75 backdrop-blur">
                  <Avatar id={1} size="avatar-sm" />
                  <div className="pl-1 pr-2 flex gap-2 items-center text-xs sm:text-sm text-ui-300">
                    <span className="ml-0.5" />
                    <GameIcon game={item.game} size="sm:text-lg" />
                    <span>{item.stats?.views} views</span>
                    <i className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-ui-300" />
                    <span>{item.date}</span>
                  </div>
                </div>
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
