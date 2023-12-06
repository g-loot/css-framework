import React, { useEffect, useState, useContext } from "react";

import Ad from "../../../../components/Ad/Ad";
import { UiContext } from "@/contexts/ui";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import AchievementFrame from "../../../../components/Achievements/AchievementFrame";
import AchievementIcon from "../../../../components/Achievements/AchievementIcon";
import ModalAchievementReceived from "../../modal-achievementreceived";
import ProfileHeader from "./header";
import Link from "next/link";
import GameIcon from "../../../../components/GameIcon/GameIcon";
import Accordion from "../../../../components/Accordion/Accordion";

const generalStats = [
  {
    label: "Ladders played",
    icon: "icon-ladder",
    value: "143",
  },
  {
    label: "Times in top 50",
    icon: "icon-trophy",
    value: "5",
  },
  {
    label: "Missions completed",
    icon: "icon-crosshair",
    value: "103",
  },
  {
    label: "Avg. matches per Ladder",
    icon: "icon-camera-flash",
    value: "2.9",
  },
  {
    label: "Avg. Missions per day",
    icon: "icon-bullets",
    value: "2.4",
  },
  {
    label: "Best placement",
    icon: "icon-podium",
    value: "4",
  },
];

export default function TabProfileStats() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const { user_id } = router.query;
  const empty = query.empty === "true" ? true : false;
  const [isEmpty, setIsEmpty] = useState(empty);

  const modalAchievement = query.modalachievement === "true" ? true : false;

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

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

  return (
    <>
      {selectedUser && (
        <>
          <ul className="flex flex-wrap justify-evenly items-center text-center gap-4 mb-8 animate-slide-in-bottom">
            {generalStats.map((item, itemIndex) => (
              <li key={itemIndex}>
                <span className={`icon text-4xl text-ui-500 ${item.icon}`} />
                <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                  {item.label}
                </div>
                <div className="text-ui-100 text-xl lg:text-3xl">
                  {!isEmpty ? item.value : <>--</>}
                </div>
              </li>
            ))}
          </ul>

          {!isEmpty &&
            selectedUser.games?.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="sm:rounded relative overflow-hidden animate-slide-in-bottom animate-delay p-2"
                style={{
                  "--delay": "calc(" + Math.round(itemIndex + 1) + " * 0.05s)",
                }}
              >
                <div className="relative z-10 flex items-center gap-2 mb-2">
                  <GameIcon game={item} />
                  <h6 className="flex-1">{prototype.getGameByID(item).name}</h6>
                  {item !== 2 && (
                    <Link
                      href={`/stryda/${
                        prototype.getGameByID(item).slug
                      }/stats${prototype.getURLparams()}`}
                    >
                      <button
                        type="button"
                        className="button button-sm button-secondary"
                      >
                        <span>See all stats & Matches</span>
                      </button>
                    </Link>
                  )}
                </div>
                <ul className="relative z-10 p-4 flex flex-wrap justify-evenly items-center bg-gradient-to-b from-ui-900/40 to-ui-900/20 text-center gap-4 rounded">
                  {prototype
                    .getGameByID(item)
                    .demo?.mainStats.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                          {item.label}
                        </div>
                        <div className="text-ui-100 text-xl lg:text-2xl">
                          {" "}
                          {item.value}
                        </div>
                      </li>
                    ))}
                </ul>
                <img
                  src={prototype.getGameByID(item).assets.heroV2}
                  alt={prototype.getGameByID(item).name}
                  className="absolute inset-0 w-full h-full object-cover object-top z-0 opacity-10"
                />
              </div>
            ))}

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
