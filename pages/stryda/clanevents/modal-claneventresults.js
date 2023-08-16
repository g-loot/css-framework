import React, { useContext, useState } from "react";

import { UiContext } from "@/contexts/ui.js";
import { usePrototypeData } from "@/contexts/prototype.js";
import ModalClaimLadderRewards from "../home/modal-claim-ladderrewards.js";
import { useRouter } from "next/router";
import AvatarClan from "@/components/Avatar/AvatarClan.js";
import Slider from "@/components/Slider/Slider.js";

export default function ModalClanEventResults(props) {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [submitting, setSubmitting] = useState(false);
  const item = props.item;

  function closeModalWithDelay() {
    setSubmitting(true);
    setTimeout(() => {
      uiContext.closeModal();
      setSubmitting(false);
    }, 1000);
  }
  function claimRewardsWithDelay() {
    setSubmitting(true);
    setTimeout(() => {
      uiContext.closeModal();
      uiContext.openModal(<ModalClaimLadderRewards />);
      setSubmitting(false);
    }, 1000);
  }

  return (
    <>
      {item && (
        <div className="relative z-10">
          <div className="modal modal-stacked max-w-lg">
            <button
              type="button"
              className="button button-secondary button-close"
              onClick={uiContext.closeModal}
            >
              <span className="icon icon-e-remove" />
            </button>
            <div className="modal-image">
              <img
                src={item.logo}
                alt={item.name}
                className="relative z-10 w-32 h-auto m-6"
              />
              <span
                style={{
                  backgroundImage: `url(${item.bg})`,
                }}
              />
            </div>
            <div className="modal-content">
              <div className="modal-body">
                <div className="my-6">
                  <h2 className="h6 text-ui-300 mb-2">Your final result</h2>
                  <div className="w-full flex items-center justify-start bg-ui-850 rounded">
                    <Slider
                      itemWidth={138 + 16 + 16}
                      bgColor="from-ui-850 via-ui-850 to-ui-850/0"
                    >
                      <div className="flex items-center gap-6 whitespace-nowrap leading-tight">
                        <div className="px-10 pr-4 py-1 text-center flex flex-col gap-3 items-center">
                          <AvatarClan id={1} size="avatar-sm" />
                          <div>
                            &#91;
                            {prototype.getClanByID(1)?.tag}
                            &#93; {prototype.getClanByID(1)?.nickname}
                          </div>
                        </div>
                        <div className="flex flex-col justify-center gap-4 pr-4">
                          <div className="flex gap-2 items-center">
                            <span>
                              You were{" "}
                              <span className="text-ui-100">4 points</span> from
                              winning
                            </span>
                            <div className="flex items-center whitespace-nowrap gap-1 text-currency-1-500">
                              <span className="icon icon-coin text-lg" />
                              <span>4222</span>
                            </div>
                            <div className="flex items-center whitespace-nowrap gap-1 text-currency-2-500">
                              <span className="icon icon-powertoken text-lg" />
                              <span>1</span>
                            </div>
                          </div>
                          <div className="flex items-top gap-6">
                            <div className="px-4 border-l border-ui-600">
                              <div className="text-xs text-ui-300 uppercase font-bold">
                                Score
                              </div>
                              <div className="text-main text-xl lg:text-2xl">
                                3 pts
                              </div>
                            </div>
                            <div className="px-4 border-l border-ui-600">
                              <div className="text-xs text-ui-300 uppercase font-bold">
                                Position
                              </div>
                              <div className="text-main text-xl lg:text-2xl">
                                #5
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
                <div>
                  <h2 className="h6 text-ui-300 mb-6">Top 3</h2>
                  <div className="flex items-center justify-center gap-2">
                    <div className="rounded surface-ui-700 text-center px-2 pt-0 pb-3 flex-1 flex flex-col items-center">
                      <div className="relative px-2 flex items-center justify-center mb-2 lg:-mt-6">
                        <span className="text-2xl text-gold-500">1</span>
                        <div className="absolute">
                          <svg
                            className="fill-gold-500"
                            width="52"
                            height="30"
                            viewBox="0 0 52 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11.7039 27.2265L7.12878 29.95L14.686 27.9073C15.3028 27.7406 15.866 27.409 16.3186 26.9461C16.7712 26.4831 17.0973 25.905 17.2638 25.2705L14.9254 24.8456C14.283 24.7288 13.701 24.3822 13.2816 23.867C12.8623 23.3518 12.6327 22.7008 12.6327 22.0282V0.950012L8.2045 17.6286L2.89837 11.1091L8.50356 23.6777L2 22.4956L11.7039 27.2265Z" />
                            <path d="M39.5599 27.2265L44.135 29.95L36.5778 27.9073C35.961 27.7406 35.3978 27.409 34.9452 26.9461C34.4926 26.4831 34.1665 25.905 34 25.2705L36.3383 24.8456C36.9808 24.7288 37.5628 24.3822 37.9822 23.867C38.4015 23.3518 38.6311 22.7008 38.6311 22.0282V0.950012L43.0593 17.6286L48.3654 11.1091L42.7602 23.6777L49.2638 22.4956L39.5599 27.2265Z" />
                          </svg>
                        </div>
                      </div>
                      <AvatarClan id={5} size="avatar-sm" />
                      <div className="leading-tight mt-4">
                        <div className={`text-sm`}>
                          &#91;
                          {prototype.getClanByID(5)?.tag}
                          &#93; {prototype.getClanByID(5)?.nickname}
                        </div>
                        <div className="text-ui-100 text-lg">12 points</div>
                      </div>
                    </div>
                    <div className="rounded surface-ui-700 text-center px-2 pt-0 pb-3 flex-1 flex flex-col items-center">
                      <div className="relative px-2 flex items-center justify-center mb-2 lg:-mt-6">
                        <span className="text-2xl text-silver-500">2</span>
                        <div className="absolute">
                          <svg
                            className="fill-silver-500"
                            width="52"
                            height="30"
                            viewBox="0 0 52 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11.7039 27.2265L7.12878 29.95L14.686 27.9073C15.3028 27.7406 15.866 27.409 16.3186 26.9461C16.7712 26.4831 17.0973 25.905 17.2638 25.2705L14.9254 24.8456C14.283 24.7288 13.701 24.3822 13.2816 23.867C12.8623 23.3518 12.6327 22.7008 12.6327 22.0282V0.950012L8.2045 17.6286L2.89837 11.1091L8.50356 23.6777L2 22.4956L11.7039 27.2265Z" />
                            <path d="M39.5599 27.2265L44.135 29.95L36.5778 27.9073C35.961 27.7406 35.3978 27.409 34.9452 26.9461C34.4926 26.4831 34.1665 25.905 34 25.2705L36.3383 24.8456C36.9808 24.7288 37.5628 24.3822 37.9822 23.867C38.4015 23.3518 38.6311 22.7008 38.6311 22.0282V0.950012L43.0593 17.6286L48.3654 11.1091L42.7602 23.6777L49.2638 22.4956L39.5599 27.2265Z" />
                          </svg>
                        </div>
                      </div>
                      <AvatarClan id={4} size="avatar-sm" />
                      <div className="leading-tight mt-4">
                        <div className={`text-sm`}>
                          &#91;
                          {prototype.getClanByID(4)?.tag}
                          &#93; {prototype.getClanByID(4)?.nickname}
                        </div>
                        <div className="text-ui-100 text-lg">8 points</div>
                      </div>
                    </div>
                    <div className="rounded surface-ui-700 text-center px-2 pt-0 pb-3 flex-1 flex flex-col items-center">
                      <div className="relative px-2 flex items-center justify-center mb-2 lg:-mt-6">
                        <span className="text-2xl text-bronze-500">3</span>
                        <div className="absolute">
                          <svg
                            className="fill-bronze-500"
                            width="52"
                            height="30"
                            viewBox="0 0 52 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11.7039 27.2265L7.12878 29.95L14.686 27.9073C15.3028 27.7406 15.866 27.409 16.3186 26.9461C16.7712 26.4831 17.0973 25.905 17.2638 25.2705L14.9254 24.8456C14.283 24.7288 13.701 24.3822 13.2816 23.867C12.8623 23.3518 12.6327 22.7008 12.6327 22.0282V0.950012L8.2045 17.6286L2.89837 11.1091L8.50356 23.6777L2 22.4956L11.7039 27.2265Z" />
                            <path d="M39.5599 27.2265L44.135 29.95L36.5778 27.9073C35.961 27.7406 35.3978 27.409 34.9452 26.9461C34.4926 26.4831 34.1665 25.905 34 25.2705L36.3383 24.8456C36.9808 24.7288 37.5628 24.3822 37.9822 23.867C38.4015 23.3518 38.6311 22.7008 38.6311 22.0282V0.950012L43.0593 17.6286L48.3654 11.1091L42.7602 23.6777L49.2638 22.4956L39.5599 27.2265Z" />
                          </svg>
                        </div>
                      </div>
                      <AvatarClan id={7} size="avatar-sm" />
                      <div className="leading-tight mt-4">
                        <div className={`text-sm`}>
                          &#91;
                          {prototype.getClanByID(7)?.tag}
                          &#93; {prototype.getClanByID(7)?.nickname}
                        </div>
                        <div className="text-ui-100 text-lg">7 points</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-action">
                {item.status === "ongoing" ? (
                  <button
                    type="button"
                    className={`button button-primary lg:w-1/2 ${
                      submitting ? "is-loading" : ""
                    }`}
                    onClick={claimRewardsWithDelay}
                  >
                    <span className="icon icon-present animate-bounce" />
                    <span>Claim rewards</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className={`button button-primary lg:w-1/2 ${
                      submitting ? "is-loading" : ""
                    }`}
                    onClick={() => uiContext.closeModal()}
                  >
                    <span>Close</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
