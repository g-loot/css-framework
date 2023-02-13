import { useContext, useEffect, useState } from "react";

import Link from "next/link";
import Lottie from "lottie-react";
import LottieExplosion from "../../assets/animations/explosion_stryda_1.json";
import Tooltip from "../Tooltip/Tooltip";
import { UiContext } from "../../contexts/ui";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";
import Countdown from "../Countdown/Countdown";
import ModalAvatarEdit from "../../pages/prototype-new/profile/[user_id]/modal-avataredit";
import GameIcon from "../GameIcon/GameIcon";

const missions = [
  {
    slug: "valorant",
    id: 1,
  },
  { slug: "pubg", id: 1 },
];

export default function PrototypeSideRightMissionsLadders() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const isEmpty = query.empty === "true" ? true : false;
  const isPremium = query.premium === "true" ? true : false;
  const hasAvatarFrame = query.avatarframe || false;
  const [avatarFrame, setAvatarFrame] = useState(false);
  const modalAvatarEdit = query.modalavataredit === "true" ? true : false;

  useEffect(() => {
    if (hasAvatarFrame) {
      setAvatarFrame(prototype.getShopitemByID(1, hasAvatarFrame));
    }
  }, []);

  useEffect(() => {
    if (modalAvatarEdit) {
      openModalAvatarEdit(1);
    }
  }, [modalAvatarEdit]);

  function openModalAvatarEdit(id) {
    uiContext.openModal(<ModalAvatarEdit id={id} />);
  }

  return (
    <>
      <div className="flex gap-2 p-2">
        <button
          type="button"
          className="flex-1 chip chip-sm chip-secondary uppercase chip-inverted"
        >
          <span>Missions</span>
        </button>
        <button
          type="button"
          className="flex-1 chip chip-sm chip-secondary uppercase"
        >
          <span>Ladders</span>
        </button>
      </div>
      <div className="px-2 pt-2">
        <ul className="items-spaced space-y-2 child:rounded child:bg-ui-700 child:border child:border-ui-600 child:p-1 child:space-y-1">
          {missions.map((item, itemIndex) => (
            <li key={itemIndex}>
              <div className="flex items-start justify-between gap-1">
                <div className="leading-none text-sm p-1">
                  {prototype.getLadderByID(item.slug, item.id).name}
                </div>
                <GameIcon game={1} />
              </div>
              <div
                className="progressbar progressbar-xs"
                style={{
                  "--percent": 54,
                }}
              >
                <div />
              </div>
            </li>
          ))}
          <li className="">
            <div className="flex items-start justify-between gap-1">
              <div className="leading-none text-sm p-1">
                Get 15 kills with the operator
              </div>
              <GameIcon game={1} />
            </div>
            <div
              className="progressbar progressbar-xs"
              style={{
                "--percent": 54,
              }}
            >
              <div />
            </div>
          </li>
          <li className="item surface surface-ui-700 !border !border-ui-600">
            <div className="item-body">
              <div className="item-title leading-none mb-2.5 text-sm">
                Get 6 assists
              </div>
              <div className="text-ui-300 text-xs">
                <div
                  className="progressbar progressbar-xs"
                  style={{
                    "--percent": 20,
                  }}
                >
                  <div />
                </div>
              </div>
            </div>
            <div className="item-actions">
              <div>
                <GameIcon game={2} />
              </div>
            </div>
          </li>
          <li className="item surface surface-ui-700 !border !border-ui-600">
            <div className="item-body">
              <div className="item-title leading-none mb-2.5 text-sm">
                Get 2 knife kills in competitive
              </div>
              <div className="text-ui-300 text-xs">
                <div
                  className="progressbar progressbar-xs"
                  style={{
                    "--percent": 100,
                  }}
                >
                  <div />
                </div>
              </div>
            </div>
            <div className="item-actions">
              <div>
                <GameIcon game={1} />
              </div>
            </div>
          </li>
        </ul>
        <div className="text-center text-sm mt-2">
          <a href="#" className="link link-hover">
            View all
          </a>
        </div>
      </div>
    </>
  );
}
