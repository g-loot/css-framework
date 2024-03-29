import { useContext, useEffect, useState } from "react";

import Accordion from "../Accordion/Accordion";
import Ad from "../Ad/Ad";
import Button from "../Button/Button";
import Link from "next/link";
import ModalFavoriteGames from "@/pages/stryda/modal-favoritegames";
import ModalSelectYourGame from "@/pages/stryda/modal-selectyourgame";
import ModalWelcome from "@/pages/stryda/modal-welcome";
import ModalTournamentSchedule from "@/pages/stryda/modal-tournamentschedule";
import ModalBuyTokens from "@/pages/stryda/wallet/modal-buytokens";
import PrototypeGamesNavNew from "./PrototypeGamesNavNew";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
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
                        <span className="icon icon-home-2" />
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
                        <span className="icon icon-shop" />
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
                        <span className="icon icon-crown" />
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
                      <span className="badge bg-error-700 absolute -top-1 right-0 animate-scale-in" />
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
                        <span className="icon icon-gold-coin" />
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
                      <span className="icon icon-cursor-pointer px-3" />
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
            {/* <div className="px-2 pb-2">
              <div className="w-full rounded bg-ui-500 overflow-hidden relative border border-ui-500 interative group flex flex-col">
                <Link href="/prototype/valorant/clanevents/0">
                  <button
                    type="button"
                    className="relative z-20 flex-1 p-2 flex flex-col gap-4 items-center justify-center child:animate-delay cursor-pointer active:opacity-50"
                  >
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1696497339/Stryda/marketing/campaigns/Nordic%20Clash/SNC-ad-logo.webp"
                      alt="Stryda Nordic Clash"
                      className="mt-2 -mb-20 w-full h-auto animate-slide-in-bottom"
                    />
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1696503716/Stryda/marketing/campaigns/Nordic%20Clash/SNC-ad-prizepool.webp"
                      alt="Stryda Nordic Clash"
                      className="w-3/4 -mb-12 h-auto animate-slide-in-bottom"
                    />
                  </button>
                </Link>
                <div
                  className="relative z-30 flex items-center gap-2 p-2 mt-2 animate-slide-in-bottom animate-delay"
                  style={{
                    "--delay": "calc(2 * 0.05s)",
                  }}
                >
                  <Link href="/prototype/valorant/clanevents/0">
                    <button
                      type="button"
                      className="flex-1 button button-primary button-sm"
                    >
                      <span>Sign up</span>
                    </button>
                  </Link>
                  <a
                    href="http://nordicclash.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 button button-secondary button-sm"
                  >
                    <span>Learn more</span>
                  </a>
                </div>
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1696497338/Stryda/marketing/campaigns/Nordic%20Clash/SNC-ad-fb.webp"
                  alt=""
                  className="absolute z-10 w-full h-auto bottom-0 object-cover object-bottom transition-transform duration-1000 ease origin-bottom scale-105 group-hover:scale-125"
                />
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1696497338/Stryda/marketing/campaigns/Nordic%20Clash/SNC-ad-bg.webp"
                  alt=""
                  className="absolute z-0 w-full h-full object-cover transition-transform duration-1000 ease origin-center scale-105 group-hover:scale-110"
                />
              </div>
            </div> */}
          </div>
        )}

        <Ad width="260" height="260" />
      </div>
    </>
  );
}
