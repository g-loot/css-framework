import { useContext, useEffect } from "react";

import Accordion from "../Accordion/Accordion";
import Ad from "../Ad/Ad";
import Button from "../Button/Button";
import Link from "next/link";
import ModalFavoriteGames from "../../pages/prototype/modal-favoritegames";
import ModalTournamentSchedule from "../../pages/prototype/modal-tournamentschedule";
import PrototypeGamesNavNew from "./PrototypeGamesNavNew";
import { UiContext } from "../../contexts/ui";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";

export default function PrototypeLeftMenuNew(props) {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const { user_id } = router.query;
  const modalFavoriteGames = query.modalfavoritegames === "true" ? true : false;
  const prototype = usePrototypeData();
  const modalTournamentSchedule =
    query.modaltournamentschedule === "true" ? true : false;

  function openModalFavoriteGames() {
    uiContext.openModal(<ModalFavoriteGames></ModalFavoriteGames>);
  }

  useEffect(() => {
    if (modalFavoriteGames) {
      openModalFavoriteGames();
    }
  }, [modalFavoriteGames]);

  function openModalTournamentSchedule() {
    uiContext.openModal(<ModalTournamentSchedule></ModalTournamentSchedule>);
  }

  useEffect(() => {
    if (modalTournamentSchedule) {
      openModalTournamentSchedule();
    }
  }, [modalTournamentSchedule]);

  return (
    <>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex-1">
          <div className="">
            <Link href={`/prototype/clans${prototype.getURLparams()}`}>
              <div
                className={`item px-6 item-interactive md:py-4 ${
                  router.pathname.includes("clans") ? "is-active" : ""
                }`}
              >
                <div className="item-image">
                  <div className="avatar avatar-squircle avatar-xs">
                    <div>
                      <img
                        src={
                          prototype.getClanByID(prototype.getUserByID(1).id)
                            ?.avatar
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="item-body">
                  <div className="item-title">
                    <span className="text-sm uppercase">
                      &#91;
                      {prototype.getClanByID(prototype.getUserByID(1).id)?.tag}
                      &#93;{" "}
                      {
                        prototype.getClanByID(prototype.getUserByID(1).id)
                          ?.nickname
                      }
                    </span>
                  </div>
                </div>
                <div className="item-action">
                  <div className="text-0">
                    <span className="icon icon-24 icon-arrow-sm-right text-ui-400" />
                  </div>
                </div>
              </div>
            </Link>
            <Link href={`/prototype/shop${prototype.getURLparams()}`}>
              <div
                className={`lg:hidden item px-6 item-interactive ${
                  router.pathname.includes("shop") ? "is-active" : ""
                }`}
              >
                <div className="item-image">
                  <div className="avatar avatar-simple avatar-xs">
                    <div>
                      <span>
                        <span className="icon icon-20 icon-shop" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="item-body">
                  <div className="item-title">
                    <span className="text-sm uppercase">Shop</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href={`/prototype/premium${prototype.getURLparams()}`}>
              <div
                className={`lg:hidden item px-6 item-interactive ${
                  router.pathname.includes("premium") ? "is-active" : ""
                }`}
              >
                <div className="item-image">
                  <div className="avatar avatar-simple avatar-xs">
                    <div>
                      <span>
                        <span className="icon icon-20 icon-ic_stars_24px" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="item-body">
                  <div className="item-title">
                    <span className="text-sm uppercase">Premium</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <PrototypeGamesNavNew />
          <div className="text-left p-2">
            <button
              onClick={openModalFavoriteGames}
              type="button"
              className="button button-sm button-ghost w-full justify-start opacity-50 hover:opacity-100"
            >
              <div className="avatar avatar-simple avatar-xs">
                <div className="border border-ui-600">
                  <div>
                    <span className="icon icon-e-add px-3 icon-16" />
                  </div>
                </div>
              </div>
              <span className="font-body tracking-normal font-normal text-sm pl-2 uppercase">Add games</span>
            </button>
          </div>
        </div>

        <Ad width="260" height="260" />
      </div>
    </>
  );
}
