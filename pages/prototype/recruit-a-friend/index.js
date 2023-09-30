import { useContext, useEffect, useState } from "react";
import PrototypeStructure from "@/components/Prototype/PrototypeStructure";
import { useRouter } from "next/router";
import { UiContext } from "@/contexts/ui";
import ModalReferSendInvite from "./modal-sendinvite";
import ModalClaimBattlepassReward from "../home/modal-claim-battlepassrewards";
import ButtonReminder from "./components/ButtonReminder";
import { usePrototypeData } from "@/contexts/prototype";
import Avatar from "@/components/Avatar/Avatar";
import Link from "next/link";

const referralsItems = [
  {
    id: 1,
    email: "johnmcclane@gmail.com",
    date: "April 1 2023",
  },
  {
    id: 2,
    email: "ethanhunt@gmail.com",
    date: "Mar 15 2023",
  },
  {
    id: 3,
    email: "jackreacher@gmail.com",
    date: "Jan 23 2023",
  },
  {
    id: 4,
    email: "martinriggs@gmail.com",
    date: "Jan 23 2023",
  },
  {
    id: 5,
    user: 5,
    hasClaimed: true,
  },
  {
    id: 6,
    user: 7,
  },
  {
    id: 7,
    user: 9,
  },
];

const howitworksSteps = [
  {
    id: 0,
    name: "Step 1",
    description: "Invite a friend to join",
    url: "https://res.cloudinary.com/gloot/image/upload/v1682079218/Stryda/illustrations/referral_step_1.png",
    hasButton: true,
  },
  {
    id: 2,
    name: "Step 2",
    description: "Your friend signs up through the invite email",
    url: "https://res.cloudinary.com/gloot/image/upload/Stryda/illustrations/referral_step_2.png",
  },
  {
    id: 3,
    name: "Step 3",
    description: "Your friend reaches level 10",
    url: "https://res.cloudinary.com/gloot/image/upload/Stryda/illustrations/referral_step_3.png",
  },
  {
    id: 4,
    name: "Step 4",
    description:
      "You both get <span class='whitespace-nowrap text-gold-500'><span class='translate-y-0.5 icon icon-coin'></span> <span class='font-bold'>500</span></span> to enjoy on the platform!",
    url: "https://res.cloudinary.com/gloot/image/upload/v1682069954/Stryda/illustrations/referral_step_4.png",
  },
];

export default function ReferAFriend() {
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const modalrefersendinvite = query.modal === "true" ? true : false;
  const uiContext = useContext(UiContext);
  const empty = query.empty === "true" ? true : false;
  const [isEmpty, setIsEmpty] = useState(empty);
  const statusLoading = query.loading === "true" ? true : false;
  const [loading, setLoading] = useState(true);
  const [hasInvited, setHasInvited] = useState(false);
  const [emailStr, setEmailStr] = useState(null);

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    if (empty) {
      setIsEmpty(true);
    }
  }, [empty]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const modalRemoveFriends = query.modalremovefriends === "true" ? true : false;

  useEffect(() => {
    if (modalrefersendinvite) {
      openModalReferSendInvite();
    }
  }, [modalrefersendinvite]);

  function handleInvite(email) {
    setEmailStr(email);
    setIsEmpty(false);
    setHasInvited(true);
  }

  function openModalReferSendInvite() {
    uiContext.openModal(<ModalReferSendInvite onLoad={handleInvite} />);
  }

  function openModalModalClaimBattlepassReward() {
    uiContext.openModal(<ModalClaimBattlepassReward rewardID={7} />);
  }

  return (
    <>
      <PrototypeStructure title="Recruit a friend">
        <section className="mb-8">
          <div className="header surface sm:rounded-lg">
            <div className="header-content">
              <div className="header-body">
                <h1>Recruit a friend</h1>
                <p className="text-ui-300 max-w-[70ch] mt-4 mb-5">
                  Get{" "}
                  <span className="whitespace-nowrap text-gold-500 px-1">
                    <span className="translate-y-0.5 icon icon-coin" />{" "}
                    <span className="font-bold">500</span>
                  </span>{" "}
                  for each friend who signs up and reaches level 10 on Stryda.
                </p>
                <button
                  type="button"
                  className="button button-primary"
                  onClick={openModalReferSendInvite}
                >
                  <span>Invite a friend</span>
                </button>
              </div>
            </div>
            <div className="header-bg">
              <img src="https://res.cloudinary.com/gloot/image/upload/Stryda/illustrations/Referrrals_bg.jpg" />
            </div>
          </div>
        </section>
        {loading ? (
          <section className="mb-4">
            <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop px-4 sm:px-0 pb-4">
              <table className="table table-rounded rounded-xl is-loading w-full">
                <tbody>
                  <tr>
                    <th>1</th>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th>2</th>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th>3</th>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th>3</th>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th>3</th>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                  <tr>
                    <th>3</th>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        ) : (
          <>
            {isEmpty ? (
              <div className="px-4 text-center">
                <div className="overflow-x-auto scrollbar-hidden -mx-4 flex justify-start">
                  <div className="relative z-10 flex-1 flex items-start lg:justify-center py-8 pl-8 w-full max-w-[1240px] mx-auto">
                    <div className="absolute z-0 top-[179px] left-0 -right-[200px] lg:inset-x-10 hidden lg:block animate-scale-in-x-left">
                      <i className="absolute w-2 h-2 bg-main rounded-full left-0 -top-1" />
                      <i className="absolute w-2 h-2 bg-main rounded-full right-0 -top-1" />
                      <i className="absolute h-px bg-main inset-x-0" />
                    </div>
                    {howitworksSteps.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex-1 min-w-[240px] relative z-0 mx-4 animate-slide-in-bottom animate-delay"
                        style={{
                          "--delay": "calc((" + itemIndex + " + 5) * 0.05s)",
                        }}
                      >
                        <img
                          src={item.url}
                          alt={item.name}
                          className="h-32 w-auto mx-auto relative z-0"
                        />
                        <div className="w-6 h-6 rounded-full border-4 border-main bg-ui-900 mx-auto mt-2" />
                        <h3 className="h1 text-4xl md:text-5xl md:leading-[0.8] mt-7">
                          {item.name}
                        </h3>
                        <p
                          className="mt-2 mb-4"
                          dangerouslySetInnerHTML={{
                            __html: item.description,
                          }}
                        />
                        {item.hasButton && (
                          <button
                            type="button"
                            className="button button-primary"
                            onClick={openModalReferSendInvite}
                          >
                            <span>Invite a friend</span>
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <section className="mb-8">
                  <h2 className="h5 mb-2">
                    Pending referral
                    {referralsItems.filter((i) => !i.user).length > 1 ? (
                      <>s</>
                    ) : (
                      <></>
                    )}
                  </h2>
                  <ul className="items-spaced space-y-2">
                    {hasInvited && emailStr && (
                      <li
                        className="item h-16 animate-slide-in-bottom animate-delay"
                        style={{
                          "--delay": "calc((0 + 5) * 0.05s)",
                        }}
                      >
                        <div className="item-image">
                          <div className="avatar avatar-circle avatar-xs">
                            <div>
                              <span className="icon icon-circle-08" />
                            </div>
                          </div>
                        </div>
                        <div className="item-body">
                          <div className="item-title truncate">{emailStr}</div>
                        </div>
                        <div className="item-body text-right text-ui-300 flex justify-end items-center gap-4 p-2">
                          <ButtonReminder
                            label="Send a reminder"
                            className="button-sm button-ghost"
                            toastMessage="Reminder email successfully sent"
                          />
                          <span className="hidden md:block w-24">
                            1 second ago
                          </span>
                        </div>
                      </li>
                    )}
                    {referralsItems.map((item, itemIndex) => (
                      <>
                        {!item.user && (
                          <li
                            key={itemIndex}
                            className="item h-16 animate-slide-in-bottom animate-delay"
                            style={{
                              "--delay":
                                "calc((" + itemIndex + " + 5) * 0.05s)",
                            }}
                          >
                            <div className="item-image">
                              <div className="avatar avatar-circle avatar-xs">
                                <div>
                                  <span className="icon icon-circle-08" />
                                </div>
                              </div>
                            </div>
                            <div className="item-body">
                              <div className="item-title truncate">
                                {item.email}
                              </div>
                              <div className="text-ui-300 text-xs block md:hidden">
                                {item.date}
                              </div>
                            </div>
                            <div className="item-body text-right text-ui-300 flex justify-end items-center gap-4 p-2">
                              <ButtonReminder
                                label="Send a reminder"
                                className="button-sm button-ghost"
                                toastMessage="Reminder email successfully sent"
                              />
                              <span className="hidden md:block w-24">
                                {item.date}
                              </span>
                            </div>
                          </li>
                        )}
                      </>
                    ))}
                  </ul>
                </section>
                <section className="mb-8">
                  <h2 className="h5 mb-2">
                    Approved referral
                    {referralsItems.filter((i) => i.user).length > 1 ? (
                      <>s</>
                    ) : (
                      <></>
                    )}
                  </h2>
                  <ul className="items-spaced space-y-2">
                    {referralsItems.map((item, itemIndex) => (
                      <>
                        {item.user && (
                          <li
                            key={itemIndex}
                            className="item h-16 animate-slide-in-bottom animate-delay"
                            style={{
                              "--delay":
                                "calc((" + itemIndex + " + 5) * 0.05s)",
                            }}
                          >
                            <div className="item-body">
                              <Link
                                href={`/prototype/profile/${
                                  item.user
                                }${prototype.getURLparams()}`}
                              >
                                <div className="flex gap-2 items-center interactive">
                                  <Avatar
                                    id={item.user}
                                    hasTooltip={true}
                                    hasTooltipXP={false}
                                  />
                                  <div>
                                    <div className="item-title truncate">
                                      <span
                                        className={`${
                                          prototype.getUserByID(item.user)
                                            ?.isYou
                                            ? "text-main font-bold"
                                            : ""
                                        } ${
                                          prototype.getUserByID(item.user)
                                            ?.isPremium
                                            ? "text-premium-500"
                                            : ""
                                        }`}
                                      >
                                        {prototype.getUserByID(item.user)
                                          ?.clan && (
                                          <>
                                            &#91;
                                            {
                                              prototype.getClanByID(
                                                prototype.getUserByID(item.user)
                                                  ?.clan
                                              )?.tag
                                            }
                                            &#93;{" "}
                                          </>
                                        )}

                                        {
                                          prototype.getUserByID(item.user)
                                            ?.nickname
                                        }
                                      </span>
                                    </div>
                                    {prototype.getUserByID(item.user).level <
                                      10 && (
                                      <div className="text-ui-300 text-xs leading-none md:hidden">
                                        You will get rewarded once{" "}
                                        {
                                          prototype.getUserByID(item.user)
                                            .nickname
                                        }{" "}
                                        reaches level 10
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="item-actions text-right text-ui-300 flex justify-end items-center gap-4 p-1">
                              {prototype.getUserByID(item.user).level > 10 ? (
                                <>
                                  {item.hasClaimed ? (
                                    <div className="whitespace-nowrap text-gold-500 flex items-center gap-1">
                                      <div className="icon icon-check mr-1" />
                                      <div className="icon icon-coin" />{" "}
                                      <div className="font-bold">500</div>
                                    </div>
                                  ) : (
                                    <button
                                      type="button"
                                      onClick={
                                        openModalModalClaimBattlepassReward
                                      }
                                      className="button button-claim button-sm is-shining"
                                    >
                                      <span className="icon icon-present animate-bounce" />
                                      <span>Claim reward</span>
                                    </button>
                                  )}
                                </>
                              ) : (
                                <span className="text-ui-300 hidden md:block">
                                  You will get rewarded once{" "}
                                  {prototype.getUserByID(item.user).nickname}{" "}
                                  reaches level 10
                                </span>
                              )}
                            </div>
                          </li>
                        )}
                      </>
                    ))}
                  </ul>
                </section>
              </>
            )}
          </>
        )}
        {/* for demo purposes only */}
        <section className="text-sm text-ui-100/0 hover:text-ui-100 flex flex-col items-stretch">
          <a onClick={() => setIsEmpty(!isEmpty)}>
            Toggle empty state {isEmpty ? "ON" : "OFF"}
          </a>
        </section>
      </PrototypeStructure>
    </>
  );
}
