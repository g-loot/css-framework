import { useContext, useEffect, useState } from "react";

import Link from "next/link";
import Lottie from "lottie-react";
import { useRouter } from "next/router";
import LottieExplosion from "@/assets/animations/explosion_stryda_1.json";
import ModalDownloadStarted from "@/pages/stryda/modal-downloadstarted";
import Tooltip from "@/components/Tooltip/Tooltip";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Notification from "@/components/Notification/Notification";
import { VariablesContext } from "@/contexts/variables";
import TopBarClaim from "@/components/TopBarClaim/TopBarClaim";
import ModalBuyTokens from "@/pages/stryda/wallet/modal-buytokens";
import Countdown from "@/components/Countdown/Countdown";
import Avatar from "@/components/Avatar/Avatar";
import { dataNotifications } from "@/mock-data/data-notifications";
import TopbarHighlights from "./TopbarHighlights";
import TopbarSidebarSearch from "./TopbarSidebarSearch";
import TopbarWallet from "./TopbarWallet";

export default function TopbarSidebar() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();

  return (
    <>
      <nav className="border-b border-ui-500">
        <ul class="menu">
          <li>
            <Link href={`/stryda/home${prototype.getURLparams()}`}>
              <button
                type="button"
                className={`p-3 ${
                  router.pathname.includes("home") ? "is-active" : ""
                }`}
              >
                <span>Home</span>
              </button>
            </Link>
          </li>
          <li className="border-t border-ui-500">
            <Link href={`/stryda/missions${prototype.getURLparams()}`}>
              <button
                type="button"
                className={`p-3 ${
                  router.pathname.includes("missions") ? "is-active" : ""
                }`}
              >
                <span>Missions</span>
              </button>
            </Link>
          </li>
          <li className="border-t border-ui-500 pointer-events-none">
            <div className="px-3 pt-3">
              <span className="text-ui-400">Competitions</span>
            </div>
          </li>
          <li>
            <Link href={`/stryda/ladders${prototype.getURLparams()}`}>
              <button
                type="button"
                className={`p-3 ${
                  router.pathname.includes("ladders") ? "is-active" : ""
                }`}
              >
                <span className="pl-4">Ladders</span>
              </button>
            </Link>
          </li>
          <li>
            <Link href={`/stryda/clanevents${prototype.getURLparams()}`}>
              <button
                type="button"
                className={`p-3 ${
                  router.pathname.includes("clanevents") ? "is-active" : ""
                }`}
              >
                <span className="pl-4">Clan Events</span>
              </button>
            </Link>
          </li>
          <li className="border-t border-ui-500">
            <Link href={`/stryda/battlepass${prototype.getURLparams()}`}>
              <button
                type="button"
                className={`p-3 ${
                  router.pathname.includes("battlepass") ? "is-active" : ""
                }`}
              >
                <span>Battle Pass</span>
              </button>
            </Link>
          </li>
          <li className="border-t border-ui-500">
            <Link href={`/stryda/premium${prototype.getURLparams()}`}>
              <button
                type="button"
                className={`p-3 ${
                  router.pathname.includes("premium") ? "is-active" : ""
                }`}
              >
                <span className="text-premium-500">
                  <span>Get Premium</span>
                  <span className="icon icon-crown" />
                </span>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
