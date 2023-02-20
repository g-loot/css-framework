import React, { useContext, useState } from "react";

import { UiContext } from "../../../../contexts/ui.js";
import { usePrototypeData } from "../../../../contexts/prototype.js";
import ModalClaimLadderRewards from "../../home/modal-claim-ladderrewards.js";
import { useRouter } from "next/router";
import Avatar from "../../../../components/Avatar/Avatar.js";
import Slider from "../../../../components/Slider/Slider.js";

export default function ModalLadderResults(props) {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [submitting, setSubmitting] = useState(false);
  const ladder = props.ladder;

  function closeModalWithDelay() {
    setSubmitting(true);
    setTimeout(() => {
      uiContext.closeModal();
      uiContext.openModal(<ModalClaimLadderRewards />);
      setSubmitting(false);
    }, 1000);
  }

  return (
    <>
    {ladder && (
      <div className="relative z-10">
        <div className="modal max-w-sm">
          <button
            type="button"
            className="button button-secondary button-close"
            onClick={uiContext.closeModal}
          >
            <span className="icon icon-e-remove" />
          </button>
          <div className="modal-content p-2">
            <div className="modal-body">
              <img
                src={ladder?.cover}
                className="aspect-[16/6] object-cover rounded w-full"
                alt=""
              />
              <div className="flex items-center justify-between text-center md:text-left my-4">
                <h2 className="h4">{ladder.name}</h2>
                <span className="icon text-3xl icon-rank-bronze text-gold-500"></span>
              </div>
              <h3 className="h5 text-ui-300 text-center mb-2">Top 3</h3>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="rounded surface-ui-700 text-center px-2 pb-4 pt-2 flex-1 flex flex-col items-center gap-4">
                  <div className="relative px-2 flex items-center justify-center">
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
                  <Avatar id={2} size="avatar-md" />
                  <div>
                    <div
                      className={`text-sm ${
                        prototype.getUserByID(2).isPremium
                          ? "text-premium-500"
                          : ""
                      }`}
                    >
                      {prototype.getUserByID(2).nickname}
                    </div>
                    <div className="text-ui-100 text-lg">699 pts</div>
                  </div>
                </div>
                <div className="rounded surface-ui-600 text-center px-2 pb-4 pt-2 flex-1 flex flex-col items-center gap-4">
                  <div className="relative px-2 flex items-center justify-center">
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
                  <Avatar id={9} size="avatar-lg" />
                  <div>
                    <div
                      className={`text-sm ${
                        prototype.getUserByID(9).isPremium
                          ? "text-premium-500"
                          : ""
                      }`}
                    >
                      {prototype.getUserByID(9).nickname}
                    </div>
                    <div className="text-ui-100 text-lg">732 pts</div>
                  </div>
                </div>
                <div className="rounded surface-ui-700 text-center px-2 pb-4 pt-2 flex-1 flex flex-col items-center gap-4">
                  <div className="relative px-2 flex items-center justify-center">
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
                  <Avatar id={6} size="avatar-md" />
                  <div>
                    <div
                      className={`text-sm ${
                        prototype.getUserByID(6).isPremium
                          ? "text-premium-500"
                          : ""
                      }`}
                    >
                      {prototype.getUserByID(6).nickname}
                    </div>
                    <div className="text-ui-100 text-lg">653 pts</div>
                  </div>
                </div>
              </div>
              <h3 className="h5 text-ui-300 text-center mb-2">
                Your final result
              </h3>
              <div className="w-full flex items-center justify-center">
              <Slider
                itemWidth={138 + 16 + 16}
                bgColor="from-ui-800 via-ui-800 to-ui-800/0"
              >
                <div className="flex items-center gap-6 whitespace-nowrap leading-tight">
                  <div className="pl-4 border-l border-ui-600">
                    <div className="text-xs text-ui-300 uppercase font-bold">
                      Total score
                    </div>
                    <div className="text-ui-100 text-xl lg:text-2xl">
                      324 pts
                    </div>
                  </div>
                  <div className="pl-4 border-l border-ui-600">
                    <div className="text-xs text-ui-300 uppercase font-bold">
                      Earned XP
                    </div>
                    <div className="text-main text-xl lg:text-2xl">+250 xp</div>
                  </div>
                  <div className="pl-4 border-l border-ui-600">
                    <div className="text-xs text-ui-300 uppercase font-bold">
                      Position
                    </div>
                    <div className="text-ui-100 text-xl lg:text-2xl">89th</div>
                  </div>
                  <div className="pl-4 border-l border-ui-600">
                    <div className="text-xs text-ui-300 uppercase font-bold">
                      Rounds played
                    </div>
                    <div className="text-ui-100 text-xl lg:text-2xl">4</div>
                  </div>
                  <div className="pl-4 border-l border-ui-600">
                    <div className="text-xs text-ui-300 uppercase font-bold">
                      Top match score
                    </div>
                    <div className="text-ui-100 text-xl lg:text-2xl">231 pts</div>
                  </div>
                </div>
              </Slider>
              </div>
            </div>
            <div className="flex justify-center mt-4 mb-2">
              <button
                type="button"
                className={`button button-primary ${
                  submitting ? "is-loading" : ""
                }`}
                onClick={closeModalWithDelay}
              >
                <span className="icon icon-present animate-bounce" />
                <span>Claim rewards</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
