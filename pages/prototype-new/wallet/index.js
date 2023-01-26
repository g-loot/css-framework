import React, { useEffect, useState } from "react";

import Ad from "../../../components/Ad/Ad";
import Link from "next/link";
import PrototypeStructure from "../../../components/PrototypeNew/PrototypeStructure";
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
      <PrototypeStructure title="Wallet">
        <Ad width="1005" height="300" />

        <section className="mb-4">
          <div className="relative surface sm:rounded-lg overflow-hidden p-4 lg:p-8 lg:min-h-[250px] lg:flex items-center">
            <div className="relative z-10">
              <h1>Wallet</h1>
              <p className="text-ui-300 max-w-[70ch] mt-4">
                Get to know the different currencies and rewards by clicking on
                the icons and keep track of your earnings from Missions, Weekly
                Ladders and Monthly Tournaments.
              </p>
            </div>
            <div
              className="absolute hidden md:block z-0 right-0 inset-y-0 w-full animate-slide-in-right animate-delay"
              style={{ "--delay": "calc(1 * 0.05s)" }}
            >
              <div className="absolute z-10 inset-0 bg-gradient-to-r from-ui-800 via-ui-800/50 to-ui-800/0"></div>
              <img
                className="absolute z-0 object-right object-cover xl:object-cover inset-0 w-full h-full"
                src="https://res.cloudinary.com/gloot/image/upload/v1672215845/Stryda/illustrations/Wallet_bg.jpg"
              />
            </div>
          </div>
        </section>

        <nav>
          <ul className="tabs border-b border-ui-700">
            {TabsItems.map((item, itemIndex) => (
              <li key={item}>
                <Link
                  href={`/prototype-new/wallet/?tab=${
                    item.url
                  }${prototype.getURLparams("&")}`}
                >
                  <a
                    className={`${selectedTab === item.url ? "is-active" : ""}`}
                  >
                    <span>{item.label}</span>
                  </a>
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
      </PrototypeStructure>
    </>
  );
}
