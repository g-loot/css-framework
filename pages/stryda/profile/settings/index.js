import React, { useContext, useState, useEffect } from "react";

import Ad from "@/components/Ad/Ad";
import Structure from "@/pages/stryda/components/Structure";
import { usePrototypeData } from "@/contexts/prototype";
import { UiContext } from "@/contexts/ui";
import { useRouter } from "next/router";
import TextareaExpandable from "@/components/Textarea/TextareaExpandable";
import Tooltip from "@/components/Tooltip/Tooltip";
import Link from "next/link";
import Avatar from "@/components/Avatar/Avatar";
import ModalAvatarEdit from "../[user_id]/modal-avataredit";
import ModalBannerEdit from "../[user_id]/modal-banneredit";
import TabSettingsProfileInformation from "./tab-profileinformation";
import TabSettingsGameAccounts from "./tab-gameaccounts";
import TabSettingsAccountManagement from "./tab-accountmanagement";
import TabSettingsAppSettings from "./tab-appsettings";
import TabSettingsSubscription from "./tab-subscription";

const TabsItems = [
  {
    label: "Profile information",
    url: "profile-information",
    component: TabSettingsProfileInformation,
    icon: "icon-profile",
  },
  {
    label: "Game accounts",
    url: "game-accounts",
    component: TabSettingsGameAccounts,
    icon: "icon-link",
  },
  {
    label: "Account management",
    url: "account-management",
    component: TabSettingsAccountManagement,
    icon: "icon-pen-23",
  },
  {
    label: "App settings",
    url: "app-settings",
    component: TabSettingsAppSettings,
    icon: "icon-cogwheel",
  },
  {
    label: "Subscription & payment",
    url: "subscription",
    component: TabSettingsSubscription,
    icon: "icon-card-edit",
  },
];

export default function Home() {
  const router = useRouter();
  const uiContext = useContext(UiContext);
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedUser, setSelectedUser] = useState(prototype.getUserByID(1));
  const [submitting, setSubmitting] = useState(false);
  const hasAvatarFrame = query.avatarframe || false;
  const hasProfileBanner = query.profilebanner || false;

  const { tab } = router.query;
  const defaultTab = "profile-information";
  const selectedTab = tab ? tab : defaultTab;

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(1));
  }, []);

  useEffect(() => {
    if (query.connected === "true") {
      setIsValorantConnected(true);
    }
  }, []);

  function openModalAvatarEdit() {
    if (hasAvatarFrame) {
      uiContext.openModal(<ModalAvatarEdit id={hasAvatarFrame} />);
    } else if (selectedUser.shopItems?.avatarFrame) {
      uiContext.openModal(
        <ModalAvatarEdit id={selectedUser.shopItems?.avatarFrame} />
      );
    } else {
      uiContext.openModal(<ModalAvatarEdit id={1} />);
    }
  }

  function openModalBannerEdit() {
    if (hasProfileBanner) {
      uiContext.openModal(<ModalBannerEdit id={hasProfileBanner} />);
    } else if (selectedUser.shopItems?.profileBanner) {
      uiContext.openModal(
        <ModalBannerEdit id={selectedUser.shopItems?.profileBanner} />
      );
    } else {
      uiContext.openModal(<ModalBannerEdit id={1} />);
    }
  }

  function handleSave() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({
        size: "medium",
        text: `Settings saved successfully.`,
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
      uiContext.closeModal();
      setSubmitting(false);
    }, 3000);
  }

  return (
    <>
      <Structure title="Profile settings">
        <Ad width="1005" height="124" />

        {/* <div className="fixed z-50 inset-0 flex items-center justify-center text-center pointer-events-none">
          <h2 className="h1 -rotate-45">Work in progress</h2>
        </div> */}

        {selectedUser && (
          <>
            <section className="header header-secondary mt-8">
              <div className="header-bg">
                {selectedUser.isYou ? (
                  <div className="flex">
                    <div className="relative">
                      <Avatar
                        size="avatar-2xl"
                        id={selectedUser.id}
                        hasTooltip={true}
                        hasTooltipXP={true}
                        tooltipPlacement={"bottom"}
                      />
                      <button
                        onClick={openModalAvatarEdit}
                        type="button"
                        className="button button-tertiary rounded-full absolute z-20 bottom-0 right-0"
                      >
                        <span className="icon icon-pen-2" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <Avatar size="avatar-2xl" id={selectedUser.id} />
                )}
                {selectedUser.isYou && (
                  <button
                    onClick={openModalBannerEdit}
                    type="button"
                    className="button button-tertiary rounded-full absolute z-20 top-2 right-2"
                  >
                    <span className="icon icon-camera" />
                    <span className="hidden lg:block">
                      Change profile banner
                    </span>
                  </button>
                )}
                {hasProfileBanner ? (
                  <img src={profileBanner?.image} alt={profileBanner?.name} />
                ) : (
                  <>
                    {selectedUser.shopItems?.profileBanner ? (
                      <>
                        <img
                          src={
                            prototype.getShopitemByID(
                              2,
                              selectedUser.shopItems?.profileBanner
                            ).image
                          }
                          alt=""
                        />
                      </>
                    ) : (
                      <>
                        <img
                          src="https://res.cloudinary.com/gloot/image/upload/v1692022099/Stryda/illustrations/Generic_background_v2.jpg"
                          alt=""
                        />
                      </>
                    )}
                  </>
                )}
              </div>
            </section>
            <section className="relative flex flex-col lg:flex-row lg:items-stretch gap-8 my-8">
              <div className="w-full lg:w-56 lg:mb-8">
                <div className="lg:sticky top-16">
                  <nav className="flex justify-start items-center px-4 sm:p-px overflow-auto scrollbar-hidden border-b border-ui-700 lg:border-none">
                    <ul className="tabs lg:tabs-vertical">
                      {TabsItems.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link
                            href={`/stryda/profile/settings?tab=${
                              item.url
                            }${prototype.getURLparams("&")}`}
                          >
                            <button
                              type="button"
                              className={`${
                                selectedTab === item.url ? "is-active" : ""
                              }`}
                            >
                              <span>
                                <span className={`icon ${item.icon}`} />
                                <span>{item.label}</span>
                              </span>
                            </button>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="relative flex-1 surface-dimmed sm:rounded-lg p-4 sm:p-8">
                {TabsItems.map((item, itemIndex) => {
                  if (item.url === selectedTab) {
                    return React.createElement(item.component, {
                      key: itemIndex,
                    });
                  }
                })}
                <div className="max-w-md mx-auto">
                  <hr className="my-8 bg-ui-600" />
                  <div className="w-full max-w-sm mx-auto flex justify-center gap-4">
                    <button
                      type="button"
                      className={`button flex-1 button-primary ${
                        submitting ? "is-loading" : ""
                      }`}
                      onClick={handleSave}
                    >
                      <span>Save changes</span>
                    </button>
                    <Link href={`/stryda/profile/1${prototype.getURLparams()}`}>
                      <button type="button" className="button flex-1 button-secondary">
                        <span>Cancel</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </Structure>
    </>
  );
}
