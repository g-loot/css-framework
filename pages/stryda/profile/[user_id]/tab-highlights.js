import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import ModalAchievementReceived from "../../modal-achievementreceived";
import ModalLevelUp from "../../modal-levelup";
import Video from "@/pages/stryda/components/Video";

export default function TabProfileHighlights() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const { user_id } = router.query;
  const modalAchievement = query.modalachievement === "true" ? true : false;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1200);
    }
  }, [loading]);

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(user_id));
  }, [user_id]);

  useEffect(() => {
    if (modalAchievement) {
      openModalAchievementReceived();
    }
  }, [modalAchievement]);

  function openModalAchievementReceived(item) {
    uiContext.openModal(<ModalAchievementReceived item={item} />);
  }

  function openmodalLeveLUp() {
    uiContext.openModal(<ModalLevelUp />);
  }

  return (
    <>
      {selectedUser && (
        <section>
          {!selectedUser.videos ? (
            <div className="surface rounded-lg px-4 py-8 text-center">
              <div className="max-w-xs mx-auto">
                <span className="icon icon-video text-6xl text-ui-500" />
                <div className="mt-2">
                  <p className="text-lg text-ui-300">
                    {selectedUser.isYou ? (
                      <>You haven&#39;t any highlights yet</>
                    ) : (
                      <>{selectedUser.nickname} hasn&#39;t any highlights yet</>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
            {selectedUser.isYou && (
              <div className="surface sm:rounded mb-4 py-24 px-4 text-center">
                This is where the saved highlights are being displayed.
              </div>
            )}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-4 sm:px-0">
                {selectedUser.videos.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`w-full animate-slide-in-bottom animate-delay ${
                      loading ? "is-loading" : ""
                    }`}
                    style={{ "--delay": "calc(" + itemIndex + " * 0.05s)" }}
                  >
                    <Video item={item} hasMeta={true} />
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
      )}
    </>
  );
}
