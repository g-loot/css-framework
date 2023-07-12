import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../components/Ad/Ad";
import Carousel from "../../../components/Carousel/Carousel";
import Link from "next/link";
import Lottie from "lottie-react";
import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import { UiContext } from "../../../contexts/ui";
import { useRouter } from "next/router";

import { usePrototypeData } from "../../../contexts/prototype";
import PrototypeHead from "../../../components/Prototype/PrototypeHead";
import Footer from "../../../components/Footer/Footer";
import Avatar from "../../../components/Avatar/Avatar";
import Countdown from "../../../components/Countdown/Countdown";
import Notification from "../../../components/Notification/Notification";
import { dataNotifications } from "../../../mock-data/data-notifications";
import Tooltip from "../../../components/Tooltip/Tooltip";
import TopbarV2 from "../../../components/Topbar/Topbar-v2";
import WidgetUser from "../components/WidgetUser";

export default function Home() {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const isEmpty = query.empty === "true" ? true : false;

  return (
    <>
      <PrototypeHead title="Home" />
      <div className="drawer min-h-full">
        <input id="drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <TopbarV2 />
          <div className="container py-4"></div>
          <div className="min-h-full container flex flex-col lg:flex-row gap-4">
            <div className="w-80">
              <WidgetUser />
            </div>
            <div className="flex-1">
              <div className="surface h-12 rounded"></div>
            </div>
            <div className="w-80 max-w-xl:hidden">
              <div className="surface h-12 rounded"></div>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="drawer-prototype" className="drawer-overlay"></label>
          <div className="p-4 overflow-y-auto w-1/2 lg:w-80 bg-ui-700 text-base-content">
            <ul className="menu">
              <li>
                <a>
                  <span>Item 1</span>
                </a>
              </li>
              <li>
                <a>
                  <span>Item 2</span>
                </a>
              </li>
              <li>
                <a>
                  <span>Item 3</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
