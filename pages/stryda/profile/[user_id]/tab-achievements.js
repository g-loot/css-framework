import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import AchievementFrame from "../../../../components/Achievements/AchievementFrame";
import AchievementIcon from "../../../../components/Achievements/AchievementIcon";
import ModalAchievementReceived from "../../modal-achievementreceived";
import Link from "next/link";
import Tooltip from "../../../../components/Tooltip/Tooltip";

export default function TabProfileAchievements() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const [favoriteItem, setFavoriteItem] = useState(2);
  const { user_id } = router.query;
  const empty = query.empty === "true" ? true : false;
  const [isEmpty, setIsEmpty] = useState(empty);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1200);
    }
  }, [loading]);

  const modalAchievement = query.modalachievement === "true" ? true : false;

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(user_id));
  }, [user_id]);

  useEffect(() => {
    if (modalAchievement) {
      openModalAchievementReceived({
        id: 16,
        item: 22,
        level: 5,
        percent: 80,
        progress: 20,
        from: "10",
        to: "10",
      });
    }
  }, [modalAchievement]);

  function openModalAchievementReceived(item) {
    uiContext.openModal(<ModalAchievementReceived item={item} />);
  }

  const generateDescription = (description, to) => {
    const variable = to;
    const regex = /\[X\]/g;
    const string = description;
    const replacedString = string.replace(regex, variable);
    return replacedString;
  };

  function handleFavorite(id) {
    setFavoriteItem(id);
    uiContext.openToastr({
      text: "Favorite achievement updated",
      color: "green",
      autoDelete: true,
      autoDeleteDelay: 2500,
    });
  }

  return (
    <>
      {selectedUser && (
        <>
          {isEmpty || selectedUser.achievements?.badges.length === 0 ? (
            <>
              <div className="px-4 py-24 text-center">
                <div className="max-w-xs mx-auto">
                  <span className="icon icon-medal text-6xl text-ui-500" />
                  <div className="mt-2">
                    <p className="text-ui-300">
                      {selectedUser.isYou ? (
                        <>You haven&#39;t unlocked any achievements yet.</>
                      ) : (
                        <>
                          {selectedUser.nickname} hasn&#39;t unlocked any
                          achievements.
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <section className="grid xl:grid-cols-2 gap-4">
              {selectedUser.achievements?.badges?.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`surface sm:rounded-lg p-2 pr-4 flex items-center gap-6 animate-slide-in-bottom animate-delay ${
                    item.level === 0 ? "pointer-events-none" : ""
                  } ${loading ? "is-loading" : ""}`}
                  style={{ "--delay": "calc(" + itemIndex + " * 0.05s)" }}
                >
                  {item.level > 0 && selectedUser.isYou && (
                    <div className="absolute z-10 top-2 right-2 m-0">
                      {favoriteItem === item.id ? (
                        <button
                          type="button"
                          className={`button button-ghost rounded-full pointer-events-none`}
                        >
                          <span className="icon icon-favorite text-main" />
                        </button>
                      ) : (
                        <Tooltip
                          tooltip={
                            <span className="text-sm">Show on player card</span>
                          }
                        >
                          <button
                            type="button"
                            className={`button button-ghost rounded-full`}
                            onClick={handleFavorite.bind(this, item.id)}
                          >
                            <span className="icon icon-favorite text-ui-400" />
                          </button>
                        </Tooltip>
                      )}
                    </div>
                  )}
                  <div
                    className={`w-36 h-36 achievement ${
                      item.level === 5 ? "is-completed" : ""
                    }`}
                    onClick={openModalAchievementReceived.bind(this, item)}
                  >
                    <i />
                    <i />
                    <div className={`achievement-level-${item.level}`}>
                      <AchievementFrame
                        url={`https://res.cloudinary.com/gloot/image/upload/v1678871888/Stryda/achievements/frames/achievement-frame-lvl${item.level}-animated.svg`}
                      />
                      <AchievementIcon
                        url={`https://res.cloudinary.com/gloot/image/upload/v1678872380/Stryda/achievements/icons/achievement-icon-${
                          prototype.getAchievementitemByID(1, item.item).icon
                        }.svg`}
                      />
                    </div>
                    {item.level > 0 && (
                      <span className="text-sm uppercase">
                        Level {item.level}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="h5">
                      {prototype.getAchievementitemByID(1, item.item).name}
                    </h3>
                    <p className="text-ui-300 mt-2 mb-3">
                      {generateDescription(
                        prototype.getAchievementitemByID(1, item.item)
                          .description,
                        item.to
                      )}
                    </p>
                    {item.level < 5 && (
                      <div className="flex items-center gap-4 leading-none font-bold">
                        <div
                          className="progressbar progressbar-secondary w-full"
                          style={{
                            "--percent": item.percent,
                            "--progress": item.progress,
                          }}
                        >
                          <div />
                          <div />
                        </div>
                        <div className="flex-none mb-0.5">
                          <span>{item.from}</span> / <span>{item.to}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </section>
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
            </section>
          )}
        </>
      )}
    </>
  );
}
