import React, { useEffect, useState } from "react";

import Ad from "../../../components/Ad/Ad";
import Link from "next/link";
import Structure from "../components/Structure";
import TabWalletHistory from "./tab-history";
import TabWalletOverview from "./tab-overview";
import TabWalletVoucher from "./tab-vouchers";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";

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
  const [selectedGame, setSelectedGame] = useState(null);
  const hasAds = query.ads === "true" ? true : false;
  const { game } = router.query;
  const { tab } = router.query;
  const defaultTab = "overview";
  const selectedTab = tab ? tab : defaultTab;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);

  return (
    <>
      <Structure title="Wallet">
        <Ad width="1005" height="300" />


        <section className="header header-quaternary my-8">
          <div className="header-content">
            <div className="header-body">
              <h1>Wallet</h1>
              <p className="text-ui-300 max-w-[70ch] mt-4">
              Get to know the different currencies and rewards by clicking on
                the icons and keep track of your earnings from Missions, Weekly
                Ladders and Monthly Tournaments.
              </p>
            </div>
          </div>
          <div className="header-bg">
            <img src="https://res.cloudinary.com/gloot/image/upload/v1672215845/Stryda/illustrations/Wallet_bg.jpg" />
          </div>
        </section>

        <nav>
          <ul className="tabs tabs-tertiary">
            {TabsItems.map((item, itemIndex) => (
              <li key={item}>
                <Link
                  href={`/stryda/wallet/?tab=${
                    item.url
                  }${prototype.getURLparams("&")}`}
                >
                  <button type="button"
                    className={`${selectedTab === item.url ? "is-active" : ""}`}
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
      </Structure>
    </>
  );
}
