import { useContext, useEffect, useState } from "react";
import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import { useRouter } from "next/router";
import { UiContext } from "../../../contexts/ui";
import ModalReferSendInvite from "./modal-sendinvite";
import ModalClaimBattlepassReward from "../home/modal-claim-battlepassrewards";
import ButtonReminder from "./components/ButtonReminder";
import { usePrototypeData } from "../../../contexts/prototype";
import Avatar from "../../../components/Avatar/Avatar";

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

export default function ReferAFriend() {
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const modalrefersendinvite = query.modalpremium === "true" ? true : false;
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
    if (statusLoading) {
      setLoading(true);
    }
  }, []);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, RandomNumber(100, 2000));
    }
  }, [loading]);

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
      <PrototypeStructure title="Refer a friend">
        <section className="mb-8">
          <div className="header surface sm:rounded-lg">
            <div className="header-content">
              <div className="header-body">
                <h1>Refer a friend</h1>
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
              <div className="surface rounded-lg px-4 py-8 text-center">
                <div className="max-w-xs mx-auto">
                  <span className="icon icon-smile text-6xl text-ui-500" />
                  <div className="mt-2 mb-6">
                    <p className="text-sm text-ui-400">No invitations yet</p>
                    <p className="text-lg text-ui-300">
                      Refer your friends and earn rewards!
                    </p>
                  </div>
                  <button
                    type="button"
                    className="button button-primary"
                    onClick={openModalReferSendInvite}
                  >
                    <span>Invite a friend</span>
                  </button>
                </div>
              </div>
            ) : (
              <>
                <section className="mb-8">
                  <h2 className="h5 mb-2">
                    {referralsItems.filter((i) => !i.user).length} pending
                    referral
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
                            toastMessage="Reminder successfully sent"
                          />
                          <span className="hidden md:block w-24">1 second ago</span>
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
                                toastMessage="Reminder successfully sent"
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
                    {referralsItems.filter((i) => i.user).length} approved
                    referral
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
                            <div className="item-image">
                              <Avatar
                                id={item.user}
                                hasLevel={true}
                                hasTooltip={true}
                                size="avatar-xs"
                              />
                            </div>
                            <div className="item-body">
                              <div className="item-title truncate">
                                {prototype.getUserByID(item.user).nickname}
                              </div>
                            </div>
                            <div className="item-body text-right text-ui-300 flex justify-end items-center gap-4 p-1">
                              {prototype.getUserByID(item.user).level > 10 ? (
                                <>
                                  {item.hasClaimed ? (
                                    <span className="whitespace-nowrap text-gold-500">
                                      <span className="translate-y-1 icon icon-i-add text-2xl" />
                                      <span className="translate-y-0.5 icon icon-coin" />{" "}
                                      <span className="font-bold">500</span>
                                    </span>
                                  ) : (
                                    <button
                                      type="button"
                                      onClick={openModalModalClaimBattlepassReward}
                                      className="button button-claim button-sm is-shining"
                                    >
                                      <span className="icon icon-present animate-bounce" />
                                      <span>Claim reward</span>
                                    </button>
                                  )}
                                </>
                              ) : (
                                <span className="text-ui-300">
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
      </PrototypeStructure>
    </>
  );
}
