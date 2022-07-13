import Ad from "../../../components/Ad/Ad";
import Link from "next/link";
import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import React from "react";
import TabWalletHistory from "./tab-history";
import TabWalletOverview from "./tab-overview";
import TabWalletVoucher from "./tab-vouchers";
import useFetch from "../../../hooks/use-fetch";
import { useRouter } from "next/router";

const TabsItems = [
  {
    label: "Overview",
    url: 'overview',
    component: TabWalletOverview,
  },
  {
    label: "History",
    url: 'history',
    component: TabWalletHistory,
  },
  {
    label: "Voucher",
    url: 'voucher',
    component: TabWalletVoucher,
  }
]

export default function Home() {
  const { query } = useRouter();
  const hasAds = query.ads === 'true' ? true : false;
  const defaultTab = 'overview';
  const selectedTab = query.tab ? query.tab : defaultTab;

  return (
    <>
      <PrototypeStructure title="Wallet">
        <Ad width="1005" height="124" />

        <section className="px-4 md:px-0 my-8">
          <h1 className="h2 leading-none mb-4">Wallet</h1>
          <p className="text-ui-300 max-w-[70ch]">
            Get to know the different currencies and rewards by clicking on the icons and keep track of your earnings from Missions, Weekly Brawls and Monthly Tournaments.
          </p>
        </section>

        <nav>
          <ul className="tabs">
            { TabsItems.map((item, itemIndex)  => (
              <li key={item}>
                <Link href={`${hasAds ? '?ads=true&' : '?'}tab=${item.url}`}>
                  <a className={`${selectedTab === item.url ? 'is-active' : ''}`}>
                    <span>{item.label}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className="py-4">

          { TabsItems.map(item => {
          if (item.url === selectedTab) {
              return React.createElement(item.component)
            }
          })}
          
        </section>
      </PrototypeStructure>
    </>
  );
}
