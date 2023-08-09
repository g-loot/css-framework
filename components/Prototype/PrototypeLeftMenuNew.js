import { useContext, useEffect, useState } from "react";

import Accordion from "../Accordion/Accordion";
import Ad from "../Ad/Ad";
import Button from "../Button/Button";
import Link from "next/link";
import ModalFavoriteGames from "../../pages/prototype/modal-favoritegames";
import ModalSelectYourGame from "../../pages/prototype/modal-selectyourgame";
import ModalWelcome from "../../pages/prototype/modal-welcome";
import ModalTournamentSchedule from "../../pages/prototype/modal-tournamentschedule";
import ModalBuyTokens from "../../pages/prototype/wallet/modal-buytokens";
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
  const modalSelectYourGame =
    query.modalselectyourgame === "true" ? true : false;
  const modalWelcome = query.modalwelcome === "true" ? true : false;
  const statusLoading = query.loading === "true" ? true : false;
  const [loading, setLoading] = useState(false);
  const prototype = usePrototypeData();
  const modalTournamentSchedule =
    query.modaltournamentschedule === "true" ? true : false;

  function openModalFavoriteGames() {
    uiContext.openModal(<ModalFavoriteGames />);
  }

  function openModalBuyTokens() {
    uiContext.openModal(<ModalBuyTokens />);
  }

  function openModalSelectYourGame() {
    uiContext.openModal(<ModalSelectYourGame />);
  }

  function openModalModalWelcome() {
    uiContext.openModal(<ModalWelcome />);
  }

  function openModalTournamentSchedule() {
    uiContext.openModal(<ModalTournamentSchedule />);
  }

  useEffect(() => {
    if (modalFavoriteGames) {
      openModalFavoriteGames();
    }
  }, [modalFavoriteGames]);

  useEffect(() => {
    if (modalSelectYourGame) {
      openModalSelectYourGame();
    }
  }, [modalSelectYourGame]);

  useEffect(() => {
    if (modalWelcome) {
      openModalModalWelcome();
    }
  }, [modalWelcome]);

  useEffect(() => {
    if (modalTournamentSchedule) {
      openModalTournamentSchedule();
    }
  }, [modalTournamentSchedule]);

  /*
  useEffect(() => {
    if (statusLoading || router.pathname.includes("home")) {
      setLoading(true);
    }
  }, []);
  */

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  return (
    <>
      <div className="relative z-0 flex-1 flex flex-col justify-between">
        {loading && (
          <div className="flex-1 is-loading">
            <div className="item px-6">
              <div className="item-image">
                <div className="avatar avatar-squircle avatar-xs"></div>
              </div>
              <div className="item-body">
                <div className="item-title">Loading</div>
              </div>
            </div>
            <div className="item px-6">
              <div className="item-image">
                <div className="avatar avatar-squircle avatar-xs"></div>
              </div>
              <div className="item-body">
                <div className="item-title">Loading</div>
              </div>
            </div>
            <div className="item px-6">
              <div className="item-image">
                <div className="avatar avatar-squircle avatar-xs"></div>
              </div>
              <div className="item-body">
                <div className="item-title">Loading</div>
              </div>
            </div>
            <div className="item px-6">
              <div className="item-image">
                <div className="avatar avatar-squircle avatar-xs"></div>
              </div>
              <div className="item-body">
                <div className="item-title">Loading</div>
              </div>
            </div>
            <div className="item px-6">
              <div className="item-image">
                <div className="avatar avatar-squircle avatar-xs"></div>
              </div>
              <div className="item-body">
                <div className="item-title">Loading</div>
              </div>
            </div>
          </div>
        )}
        {!loading && (
          <div className="flex-1">
            <div className="">
              <Link href={`/prototype/home${prototype.getURLparams()}`}>
                <div
                  className={`lg:hidden item px-6 item-interactive ${
                    router.pathname.includes("home") ? "is-active" : ""
                  }`}
                >
                  <div className="item-image">
                    <div className="avatar avatar-simple avatar-xs">
                      <div>
                        <span className="icon icon-home-2 icon-16" />
                      </div>
                    </div>
                  </div>
                  <div className="item-body">
                    <div className="item-title">
                      <span className="text-sm uppercase">Home</span>
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
                        <span className="icon icon-shop icon-16" />
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
                        <span className="icon icon-crown icon-16" />
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
              <Link href={`/prototype/clans${prototype.getURLparams()}`}>
                <button
                  type="button"
                  className={`item pl-6 item-interactive md:py-4 ${
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
                      <span className="text-sm">
                        &#91;
                        {
                          prototype.getClanByID(prototype.getUserByID(1).id)
                            ?.tag
                        }
                        &#93;{" "}
                        {
                          prototype.getClanByID(prototype.getUserByID(1).id)
                            ?.nickname
                        }
                      </span>
                    </div>
                  </div>
                  <div className="item-action">
                    <div className="relative px-3 mr-2">
                      <span className="badge bg-error-300 absolute -top-1 right-0 animate-scale-in" />
                      <span className="icon icon-a-chat text-ui-200"></span>
                    </div>
                    {/*
                    <span className="rounded-full w-2 h-2 bg-error-300 block mr-2" />
                    */}
                  </div>
                </button>
              </Link>
              <Link href={`/prototype/battlepass${prototype.getURLparams()}`}>
                <div
                  className={`xl:hidden item px-6 item-interactive ${
                    router.pathname.includes("battlepass") ? "is-active" : ""
                  }`}
                >
                  <div className="item-image">
                    <div className="avatar avatar-simple avatar-xs">
                      <div>
                        <span className="icon icon-gold-coin icon-16" />
                      </div>
                    </div>
                  </div>
                  <div className="item-body">
                    <div className="item-title">
                      <span className="text-sm uppercase">Battlepass</span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href={`/prototype/profile/1?tab=followers${prototype.getURLparams()}`}
              >
                <button
                  type="button"
                  className={`item px-6 item-interactive border-b border-ui-700 hidden ${
                    router.pathname.includes("friends") ? "is-active" : ""
                  }`}
                >
                  <div className="item-image">
                    <div className="avatar avatar-simple avatar-xs">
                      <div>
                        <span className="icon icon-b-add icon-16 text-ui-200" />
                      </div>
                    </div>
                  </div>
                  <div className="item-body">
                    <div className="item-title">
                      <span className="text-sm uppercase">Followers</span>
                    </div>
                  </div>
                </button>
              </Link>
            </div>
            <PrototypeGamesNavNew />
            <div className="text-left p-2">
              <button
                onClick={openModalFavoriteGames}
                type="button"
                className="button button-sm button-ghost w-full justify-start"
              >
                <div className="avatar avatar-simple avatar-xs">
                  <div className="border border-ui-600">
                    <div>
                      <span className="icon icon-cursor-pointer px-3 icon-16" />
                    </div>
                  </div>
                </div>
                <span className="font-body tracking-normal font-normal text-sm pl-2 uppercase">
                  Select games
                </span>
              </button>
            </div>
            <div className="px-2 block lg:hidden">
              <button
                onClick={openModalBuyTokens}
                type="button"
                className="button button-sm button-claim w-full"
              >
                <span>Get tokens</span>
              </button>
            </div>
            <div className="px-2 pb-2">
              <Link href="/prototype/valorant/clanevents/0">
                <button type="button" className="block w-full rounded bg-ui-500 aspect-square overflow-hidden relative border border-ui-500 interative group">
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-between p-4">
                    <div className="flex-none flex flex-col items-center justify-center gap-3">
                      <img
                        src="https://res.cloudinary.com/gloot/image/upload/v1689235015/Stryda/logos/stryda-logo-ui-100.svg"
                        width="110"
                        height="auto"
                        alt="Stryda"
                        className="block mx-auto"
                      />
                      <img
                        src="https://res.cloudinary.com/gloot/image/upload/v1689166223/Stryda/marketing/campaigns/Nordic%20Clash/Stryda_Nordic_Clash_logo.svg"
                        width="100%"
                        height="auto"
                        alt="Nordic Clash"
                        className="block mx-auto"
                      />
                    </div>
                    <div className="flex-none w-full">
                      <button type="button" className="button button-primary w-full">
                        <span>Learn more</span>
                      </button>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute z-0 inset-0 flex items-center justify-center bg-ui-900/95 overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1689166178/Stryda/marketing/campaigns/Nordic%20Clash/Hero_agent_silhouette.png"
                      className="absolute z-10 -bottom-2 h-40 w-auto max-w-[none] transition-transform duration-500 ease origin-top group-hover:scale-105"
                      alt=""
                    />
                    <video
                      autoPlay={true}
                      playsInline
                      loop
                      muted
                      preload
                      width="100%"
                      height="100%"
                      className="scale-[4] md:scale-[3] lg:scale-[2] w-auto h-full lg:w-full lg:h-auto relative z-0"
                    >
                      <source
                        src="https://res.cloudinary.com/gloot/video/upload/v1689166247/Stryda/marketing/campaigns/Nordic%20Clash/SNC_5s_VB_Loop_1.mp4"
                        type="video/mp4"
                      />
                      <img
                        src="https://res.cloudinary.com/gloot/image/upload/v1689664216/Stryda/marketing/campaigns/Nordic%20Clash/SNC_5s_VB_Loop_1_fallback.jpg"
                        title=""
                      />
                    </video>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        )}

        <Ad width="260" height="260" />
      </div>
    </>
  );
}
