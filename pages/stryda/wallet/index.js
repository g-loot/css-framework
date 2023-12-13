import React, { useEffect, useState } from "react";

import Ad from "@/components/Ad/Ad";
import Link from "next/link";
import Structure from "@/pages/stryda/components/Structure";
import TabWalletHistory from "./tab-history";
import TabWalletOverview from "./tab-overview";
import TabWalletVoucher from "./tab-vouchers";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import Loader from "../components/Loader";

const TabsItems = [
  {
    label: "Overview",
    url: "overview",
    component: TabWalletOverview,
  },
  {
    label: "History",
    url: "history",
    component: TabWalletHistory,
  },
  {
    label: "Voucher",
    url: "voucher",
    component: TabWalletVoucher,
  },
];

export default function Home() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const selectedGame = prototype.getGameByID(prototype.defaultGameID);
  const hasAds = query.ads === "true" ? true : false;
  const { tab } = router.query;
  const defaultTab = "overview";
  const selectedTab = tab ? tab : defaultTab;

  return (
    <>
      <Structure title="Wallet">
        <Ad width="1005" height="300" />
        <Loader
          loader={
            <section className="container grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4 mx-4 sm:mx-0 my-8">
              <div className="surface is-loading rounded aspect-square w-full" />
              <div className="surface is-loading rounded aspect-square w-full" />
              <div className="surface is-loading rounded aspect-square w-full" />
              <div className="surface is-loading rounded aspect-square w-full" />
              <div className="surface is-loading rounded aspect-square w-full" />
              <div className="surface is-loading rounded aspect-square w-full" />
              <div className="surface is-loading rounded aspect-square w-full" />
              <div className="surface is-loading rounded aspect-square w-full" />
            </section>
          }
        >
          <section className="header header-quaternary my-8">
            <div className="header-content">
              <div className="header-body">
                <h1 className="text-7xl mb-2">Wallet</h1>
                <p className="text-ui-300 max-w-[70ch]">
                  Get to know the different currencies and rewards by clicking
                  on the icons and keep track of your earnings from Missions,
                  Weekly Ladders and Monthly Tournaments.
                </p>
              </div>
            </div>
            <div className="header-bg">
              <img src="https://res.cloudinary.com/gloot/image/upload/v1689683517/Stryda/illustrations/stryda_v2_pagebg_wallet.jpg" />
            </div>
          </section>
          <nav className="sticky z-40 mb-8 flex justify-start overflow-x-auto scrollbar-hidden px-4 md:px-0 bg-ui-900/95 border-b border-ui-700 top-12">
            <ul className="tabs">
              {TabsItems.map((item, itemIndex) => (
                <li key={item}>
                  <Link
                    href={`/stryda/wallet/?tab=${
                      item.url
                    }${prototype.getURLparams("&")}`}
                  >
                    <button
                      type="button"
                      className={`${
                        selectedTab === item.url ? "is-active" : ""
                      }`}
                    >
                      <span>{item.label}</span>
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <section className="py-4">
            {TabsItems.map((item, itemIndex) => {
              if (item.url === selectedTab) {
                return React.createElement(item.component, { key: itemIndex });
              }
            })}
          </section>
        </Loader>
      </Structure>
    </>
  );
}
