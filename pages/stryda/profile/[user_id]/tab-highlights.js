import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import ModalAchievementReceived from "../../modal-achievementreceived";
import ModalLevelUp from "../../modal-levelup";
import Video from "@/pages/stryda/components/Video";
import Link from "next/link";
import { dataFeedItems } from "@/mock-data/data-feed";
import ModalFeedItemViewer from "../../modal-feeditemdetailsviewer";

export default function TabProfileHighlights() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const { user_id } = router.query;
  const modalAchievement = query.modalachievement === "true" ? true : false;
  const [loading, setLoading] = useState(true);
  const empty = query.empty === "true" ? true : false;
  const [isEmpty, setIsEmpty] = useState(empty);
  const [recorderOn, setIsRecorderOn] = useState(true);

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

  function openFeedItemDetailsMatch(target) {
    const item = dataFeedItems[1];
    uiContext.openModal(
      <ModalFeedItemViewer
        item={item}
        selectedTab={target ? target : "default"}
      />
    );
  }

  return (
    <>
      {selectedUser && (
        <>
          {recorderOn ? (
            <div>
              {prototype
                .getUserMatches(selectedUser.id)
                .filter((m) => m.meta?.media).length === 0 || isEmpty ? (
                <div className="px-4 py-24 text-center">
                  <div className="max-w-xs mx-auto">
                    <span className="icon icon-video text-6xl text-ui-500" />
                    <div className="mt-2">
                      <p className="text-ui-300">
                        {selectedUser.isYou ? (
                          <>You haven&#39;t created any Recaps yet.</>
                        ) : (
                          <>
                            {selectedUser.nickname} hasn&#39;t created any
                            Recaps yet. yet
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-4 sm:px-0">
                  {prototype.isPremium && (
                    <div className="lg:col-span-2 xl:col-span-3 surface rounded p-4 text-center text-sm">
                      <p>
                        Your Premium subscription ends in 2 days. Recaps will be
                        deleted by [datestamp].{" "}
                        <Link href="/stryda/premium">
                          <a className="link link-premium">Re-subscribe</a>
                        </Link>{" "}
                        if you want to keep them in your Stryda Recaps library
                        and to create more.
                      </p>
                    </div>
                  )}

                  {prototype
                    .getUserMatches(selectedUser.id)
                    .filter((m) => m.meta?.media)
                    .map((item, itemIndex) => (
                      <button
                        key={itemIndex}
                        type="button"
                        className={`w-full animate-slide-in-bottom animate-delay ${
                          loading ? "is-loading" : ""
                        }`}
                        style={{ "--delay": "calc(" + itemIndex + " * 0.05s)" }}
                        onClick={() => openFeedItemDetailsMatch("highlight")}
                      >
                        <Video item={item} hasMeta={true} />
                      </button>
                    ))}
                  {/* {prototype
                    .getUserMatches(selectedUser.id)
                    .filter((m) => m.meta?.media)
                    .map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`w-full animate-slide-in-bottom animate-delay ${
                          loading ? "is-loading" : ""
                        }`}
                        style={{ "--delay": "calc(" + itemIndex + " * 0.05s)" }}
                      >
                        <Video item={item} hasMeta={true} />
                      </div>
                    ))} */}
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 px-4 sm:px-0">
              <div className="flex-1 order-2 lg:order-1">
                <h2 className="h3 mb-6">
                  Transform your matches into epic recap videos and share them
                  with your friends.
                </h2>
                <p className="text-lg text-ui-100 mb-6">
                  Benefits with using the Stryda AI:
                </p>
                <ul className="list-outside list-disc pl-6 space-y-2 mb-7">
                  <li>
                    Record matches automatically in Valorant and/or League of
                    Legends while playing
                  </li>
                  <li>Create video recaps with just a click of a button</li>
                  <li>Share your recaps with your friends</li>
                </ul>
                <Link href="/stryda/profile/settings?tab=app-settings">
                  <a className="button button-main mb-3">
                    <span>Turn on the Stryda AI recorder</span>
                  </a>
                </Link>
                <p className="text-xs text-ui-300 max-w-xs">
                  By turning it on, you agree that Stryda can record your screen
                  and sound while playing your game to create video recaps.
                </p>
              </div>
              <button
                type="button"
                className="flex-1 order-1 lg:order-2 rounded-4 overflow-hidden surface interactive text-0"
                onClick={() => openModalVideoYoutubePlayer("Wso2JUKPP8o")}
              >
                <iframe
                  className="mx-auto aspect-video pointer-events-none"
                  width="100%"
                  height="auto"
                  src="https://www.youtube.com/embed/Wso2JUKPP8o?autoplay=0&rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </button>
            </div>
          )}

          {/* for demo purposes only */}
          {prototype.showDemo && (
            <section className="fixed z-[9999] bottom-4 left-4 surface-ui-500 rounded shadow-md p-4 pr-16 text-sm text-ui-100 flex flex-col items-start">
              <div className="absolute top-1 right-1">
                <button
                  type="button"
                  className="button button-sm button-secondary button-close"
                  onClick={() => prototype.setShowDemo(!prototype.showDemo)}
                >
                  <span className="icon icon-e-remove" />
                </button>
              </div>
              <div className="form-group pl-4">
                <div className="form-xs form-toggle">
                  <input
                    type="checkbox"
                    name="feed"
                    id="state-premium"
                    defaultChecked={prototype.isPremium}
                    onClick={() => prototype.togglePremium()}
                  />
                  <label htmlFor="state-premium">Premium State</label>
                </div>
              </div>
              <div className="form-group pl-4">
                <div className="form-xs form-toggle">
                  <input
                    type="checkbox"
                    name="feed"
                    id="state-empty"
                    defaultChecked={isEmpty}
                    onClick={() => setIsEmpty(!isEmpty)}
                  />
                  <label htmlFor="state-empty">Empty State</label>
                </div>
              </div>
              {selectedUser.isYou && (
                <div className="form-group pl-4">
                  <div className="form-xs form-toggle">
                    <input
                      type="checkbox"
                      name="feed"
                      id="state-recorder"
                      defaultChecked={recorderOn}
                      onClick={() => setIsRecorderOn(!recorderOn)}
                    />
                    <label htmlFor="state-recorder">Recorder State</label>
                  </div>
                </div>
              )}
            </section>
          )}
        </>
      )}
    </>
  );
}
