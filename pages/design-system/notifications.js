import Accordion from "@/components/Accordion/Accordion";
import React from "react";
import { getLayout } from "@/components/DesignSystem/DSLayout";
import Link from "next/link";
import Notification from "@/components/Notification/Notification";
import { dataNotifications } from "@/mock-data/data-notifications";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-8">Notifications</h1>

      {dataNotifications.map((notificationGroup, notificationGroupIndex) => (
        <>
          <div key={notificationGroupIndex} className="mb-8">
            <Anchor title={notificationGroup.name} />
            <ul className="items-spaced space-y-3">
              {notificationGroup.notifications?.map(
                (notification, notificationIndex) => (
                  <li
                    key={notificationIndex}
                    className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8"
                  >
                    <div className="order-2 md:order-1 w-full sm:w-[420px] ">
                      <Notification notification={notification} />
                    </div>
                    <p className="order-1 md:order-2 text-ui-300">
                      {notification.description}
                    </p>
                  </li>
                )
              )}
            </ul>
          </div>
        </>
      ))}
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
