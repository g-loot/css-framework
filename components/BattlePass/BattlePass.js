import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
  Fragment,
} from "react";

import ModalClaimBattlepassReward from "../../pages/prototype/home/modal-claim-battlepassrewards";
import { UiContext } from "../../contexts/ui";
import { DataBattlepass } from "../../mock-data/data-battlepass";
import { DataBattlepassRewards } from "../../mock-data/data-battlepass";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";
import Link from "next/link";
import Avatar from "../Avatar/Avatar";
import Lottie from "lottie-react";
import LottieExplosion from "../../assets/animations/explosion_stryda_1.json";
import CarouselSingle, { CarouselItem } from "../Carousel/CarouselSingle";
import PremiumLogo from "../PremiumLogo/PremiumLogo";
import ModalBattlepassCompletedPremium from "../../pages/prototype/battlepass/modal-battlepass-completed-premium";

export default function Battlepass(props) {
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const isPremium = prototype.isPremium;
  const size = props.size || "battlepass-lg";
  const isfinished = props.isFinished || false;
  const hasSummary = props.hasSummary || false;
  const hasPremium = props.hasPremium || false;
  const selectedBattlepass = props.id || 0;
  const [currentStep, setCurrentStep] = useState(1);
  const [activeStep, setActiveStep] = useState(1);
  const [originStep, setOriginStep] = useState(0);
  const [maxSteps, setmaxSteps] = useState(9);
  const [loading, setLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const uiContext = useContext(UiContext);
  const [explosion1, setExplosion1] = useState(false);
  const [explosion2, setExplosion2] = useState(false);
  const [explosion3, setExplosion3] = useState(false);
  const [explosion4, setExplosion4] = useState(false);
  const [explosion5, setExplosion5] = useState(false);

  useEffect(() => {
    const delay = 100;
    const offset = 150;
    setTimeout(() => {
      setExplosion1(true);
    }, delay + offset * 1);
    setTimeout(() => {
      setExplosion2(true);
    }, delay + offset * 2);
    setTimeout(() => {
      setExplosion3(true);
    }, delay + offset * 3);
    setTimeout(() => {
      setExplosion4(true);
    }, delay + offset * 4);
    setTimeout(() => {
      setExplosion5(true);
    }, delay + offset * 5);
  }, []);

  useEffect(() => {
    if (isfinished) {
      setIsFinished(true);
    } else {
      if (getBattlepassByID(selectedBattlepass).isFinished) {
        setIsFinished(true);
      } else {
        setIsFinished(false);
      }
    }
  }, [isfinished]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [loading]);

  const componentRef = useRef();

  const handleResize = useCallback(() => {
    setTimeout(() => {
      const divWidthResized = componentRef?.current?.offsetWidth;
      const maxStepsToDisplay = Math.floor(divWidthResized / 144);
      setmaxSteps(maxStepsToDisplay);
    }, 100);
  }, [componentRef]);

  useEffect(() => {
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [componentRef, handleResize]);

  useEffect(() => {
    setCurrentStep(getBattlepassByID(selectedBattlepass).currentStep);
    setActiveStep(getBattlepassByID(selectedBattlepass).currentStep);
    if (getBattlepassByID(selectedBattlepass).currentStep > maxSteps) {
      setOriginStep(getBattlepassByID(selectedBattlepass).currentStep - 1);
    } else {
      setOriginStep(0);
    }
  }, [selectedBattlepass]);

  const getBattlepassByID = (id) => {
    return DataBattlepass.find((battlepasses) => {
      return battlepasses.id === parseInt(id);
    });
  };

  const getBattlepassStepByID = (id) => {
    return getBattlepassByID(selectedBattlepass).steps.find((step) => {
      return step.id === parseInt(id);
    });
  };

  const getBattlepassRewardByID = (id) => {
    return DataBattlepassRewards.find((reward) => {
      return reward.id === parseInt(id);
    });
  };

  const getBattlepassBonusSteps = () => {
    return getBattlepassByID(selectedBattlepass).steps.filter((step) => {
      return step.isBonus === true;
    });
  };

  const getBattlepassPremiumSteps = () => {
    return getBattlepassByID(selectedBattlepass).steps.filter((step) => {
      return step.isPremium === true;
    });
  };

  function handleProgress(item) {
    if (item.id < currentStep) {
      return 100;
    } else if (item.id === currentStep) {
      return getBattlepassByID(selectedBattlepass).currentProgress;
    } else {
      return 0;
    }
  }

  function handlePrev() {
    const step = activeStep - 1;
    setActiveStep(step);
    handlePrevBatch();
  }

  function contentClick(step) {
    if (size === "battlepass-md" && step.id < currentStep && !step.hasClaimed) {
      if (step.isPremium && !isPremium) {
        window.location.href = `/prototype/premium`;
      } else {
        openModalClaimBattlepassRewards(step.reward);
      }
    } else {
      setActiveStep(step.id);
    }
  }

  function handleNext() {
    const step = activeStep + 1;
    setActiveStep(step);
    handleNextBatch();
  }

  function handleForward() {
    if (activeStep < maxSteps) {
      const step = maxSteps + 2;
      setActiveStep(step);
      setOriginStep(step);
    }
  }

  function handlePrevBatch() {
    console.log(
      "currentStep",
      currentStep,
      "activeStep",
      activeStep,
      "originStep",
      originStep,
      "maxSteps",
      maxSteps
    );
    if (activeStep === originStep + 1) {
      setOriginStep(originStep - maxSteps);
    }
  }

  function handleNextBatch() {
    console.log(
      "currentStep",
      currentStep,
      "activeStep",
      activeStep,
      "originStep",
      originStep,
      "maxSteps",
      maxSteps
    );
    if (activeStep === originStep + maxSteps) {
      setOriginStep(activeStep);
    }
  }

  function openModalClaimBattlepassRewards(rewardID) {
    uiContext.openModal(<ModalClaimBattlepassReward rewardID={rewardID} />);
  }

  function calculPercent(currentValue) {
    const currentTarget = 300 + 100 * currentValue;
    const previousTarget = 300 + 100 * (currentValue - 1);
    const currentMinusPrevious = Math.round(currentTarget - previousTarget);
    const currentProgress =
      getBattlepassByID(selectedBattlepass).currentProgress;
    const percent = Math.round((currentProgress * currentMinusPrevious) / 100);
    return Math.round(previousTarget + percent);
  }

  function buyPremium() {
    uiContext.closeModal();
    uiContext.openModal(<ModalBattlepassCompletedPremium />);
  }

  return (
    <>
      <div
        className={`battlepass-container ${loading ? "is-loading" : ""} ${
          size === "battlepass-md" ? "battlepass-md" : ""
        }`}
        ref={componentRef}
      >
        {isFinished ? (
          <div className="battlepass-summary">
            <div>
              <ul>
                {hasPremium && (
                  <li>
                    <div className="battlepass-reward-image">
                      {explosion1 && (
                        <div className="lottie-blur absolute z-50 -inset-6 pointer-events-none">
                          <Lottie
                            animationData={LottieExplosion}
                            loop={false}
                            autoplay={true}
                          />
                        </div>
                      )}
                      <img
                        src={`${
                          getBattlepassRewardByID(41).image
                        }`}
                        width="100%"
                        height="auto"
                        alt=""
                      />
                    </div>
                    <div className="battlepass-reward-text">
                      <span>Total XP</span>
                      <span>2240</span>
                    </div>
                  </li>
                )}
                <li>
                  <div className="battlepass-reward-image">
                    {explosion2 && (
                      <div className="lottie-blur absolute z-50 -inset-6 pointer-events-none">
                        <Lottie
                          animationData={LottieExplosion}
                          loop={false}
                          autoplay={true}
                        />
                      </div>
                    )}
                    <img
                      src={`${
                        getBattlepassRewardByID(7).image
                      }`}
                      width="100%"
                      height="auto"
                      alt=""
                    />
                  </div>
                  <div className="battlepass-reward-text">
                    <span>Coins</span>
                    <span>1411</span>
                  </div>{" "}
                </li>
                <li>
                  <div className="battlepass-reward-image">
                    {explosion3 && (
                      <div className="lottie-blur absolute z-50 -inset-6 pointer-events-none">
                        <Lottie
                          animationData={LottieExplosion}
                          loop={false}
                          autoplay={true}
                        />
                      </div>
                    )}
                    <img
                      src={`${
                        getBattlepassRewardByID(10).image
                      }`}
                      width="100%"
                      height="auto"
                      alt=""
                    />
                  </div>
                  <div className="battlepass-reward-text">
                    <span>Tokens</span>
                    <span>879</span>
                  </div>{" "}
                </li>
                <li>
                  <div className="battlepass-reward-image">
                    {explosion4 && (
                      <div className="lottie-blur absolute z-50 -inset-6 pointer-events-none">
                        <Lottie
                          animationData={LottieExplosion}
                          loop={false}
                          autoplay={true}
                        />
                      </div>
                    )}
                    <CarouselSingle autoPlay={false}>
                      {!hasPremium ? (
                        <>
                          <CarouselItem>
                            <div className="battlepass-reward-image">
                              <img
                                src={`${
                                  getBattlepassRewardByID(18).image
                                }`}
                                width="100%"
                                height="auto"
                                alt=""
                              />
                              <span className="absolute top-0.5 inset-x-0.5 text-sm uppercase text-center text-premium-500 rounded bg-ui-850/80">
                                Premium
                              </span>
                            </div>
                          </CarouselItem>
                        </>
                      ) : (
                        <></>
                      )}
                      <CarouselItem>
                        <div className="battlepass-reward-image">
                          <img
                            src={`${
                              getBattlepassRewardByID(17).image
                            }`}
                            width="100%"
                            height="auto"
                            alt=""
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="battlepass-reward-image">
                          <img
                            src={`${
                              getBattlepassRewardByID(16).image
                            }`}
                            width="100%"
                            height="auto"
                            alt=""
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="battlepass-reward-image">
                          <img
                            src={`${
                              getBattlepassRewardByID(15).image
                            }`}
                            width="100%"
                            height="auto"
                            alt=""
                          />
                        </div>
                      </CarouselItem>
                    </CarouselSingle>
                  </div>
                  <div className="battlepass-reward-text">
                    <span>Avatar frames</span>
                    <span>{!hasPremium ? <>4</> : <>3</>}</span>
                  </div>{" "}
                </li>
                <li>
                  <div className="battlepass-reward-image">
                    {explosion5 && (
                      <div className="lottie-blur absolute z-50 -inset-6 pointer-events-none">
                        <Lottie
                          animationData={LottieExplosion}
                          loop={false}
                          autoplay={true}
                        />
                      </div>
                    )}
                    <CarouselSingle autoPlay={false}>
                      {!hasPremium ? (
                        <>
                          <CarouselItem>
                            <div className="battlepass-reward-image">
                              <img
                                src={`${
                                  getBattlepassRewardByID(31).image
                                }`}
                                width="100%"
                                height="auto"
                                alt=""
                              />
                              <span className="absolute top-0.5 inset-x-0.5 text-sm uppercase text-center text-premium-500 rounded bg-ui-850/80">
                                Premium
                              </span>
                            </div>
                          </CarouselItem>
                        </>
                      ) : (
                        <></>
                      )}
                      <CarouselItem>
                        <div className="battlepass-reward-image">
                          <img
                            src={`${
                              getBattlepassRewardByID(36).image
                            }`}
                            width="100%"
                            height="auto"
                            alt=""
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="battlepass-reward-image">
                          <img
                            src={`${
                              getBattlepassRewardByID(31).image
                            }`}
                            width="100%"
                            height="auto"
                            alt=""
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="battlepass-reward-image">
                          <img
                            src={`${
                              getBattlepassRewardByID(33).image
                            }`}
                            width="100%"
                            height="auto"
                            alt=""
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="battlepass-reward-image">
                          <img
                            src={`${
                              getBattlepassRewardByID(35).image
                            }`}
                            width="100%"
                            height="auto"
                            alt=""
                          />
                        </div>
                      </CarouselItem>
                    </CarouselSingle>
                  </div>
                  <div className="battlepass-reward-text">
                    <span>Player banners</span>
                    <span>{!hasPremium ? <>5</> : <>4</>}</span>
                  </div>
                </li>
              </ul>
              {hasPremium && (
                <>
                  {!isPremium && (
                    <div className="border-t border-ui-700 p-4 flex flex-col xl:flex-row gap-6 items-center overflow-hidden rounded-b relative">
                      <i className="absolute -z-10 w-[500px] h-[500px] -rotate-45 -top-[280px] -right-[250px] bg-gradient-to-br from-ui-700/50 via-ui-700/10 to-ui-700/0" />
                      <div>
                        <PremiumLogo
                          src="https://res.cloudinary.com/gloot/image/upload/v1684315905/Stryda/logos/stryda-premium-logo-main-white.svg"
                          width="auto"
                          height="60"
                          className="h-16"
                        />
                      </div>
                      <div className="flex-1 text-center xl:text-left space-y-2 xl:border-l xl:border-ui-700 xl:pl-6">
                        <p className="max-w-[30ch]">
                          Unlock exclusive Premium rewards before the Battlepass
                          ends.
                        </p>
                        <button
                          type="button"
                          className="button button-premium is-shining"
                          onClick={buyPremium}
                        >
                          <span className="icon icon-crown" />
                          <span>Get Premium</span>
                        </button>
                      </div>
                      <div className="w-52">
                        <CarouselSingle autoPlay={false}>
                          {getBattlepassPremiumSteps().map(
                            (item, itemIndex) => (
                              <CarouselItem key={itemIndex}>
                                <div className="battlepass-step is-premium is-locked mt-5">
                                  <div className="battlepass-content">
                                    <div className="battlepass-decoration">
                                      <span>
                                        {
                                          getBattlepassRewardByID(item.reward)
                                            .name
                                        }
                                      </span>
                                    </div>
                                    <div className="battlepass-body">
                                      <img
                                        src={`${
                                          getBattlepassRewardByID(item.reward)
                                            .image
                                        }`}
                                        width="100%"
                                        height="auto"
                                        alt={
                                          getBattlepassRewardByID(item.reward)
                                            .name
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                              </CarouselItem>
                            )
                          )}
                        </CarouselSingle>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ) : (
          <>
            <div
              className={`battlepass-viewer ${
                size === "battlepass-md" ? "!hidden" : ""
              }`}
            >
              <div className="battlepass-reward">
                {getBattlepassRewardByID(
                  getBattlepassStepByID(activeStep).reward
                ).type === "profilebanner" && (
                  <>
                    <div className="battlepass-reward-profilebanner">
                      <Avatar
                        size="avatar-sm sm:avatar-lg lg:avatar-xl xl:avatar-2xl"
                        id={1}
                        hasLevel={false}
                        hasTooltip={false}
                        hasTooltipXP={false}
                      />
                      <img
                        src={
                          prototype.getShopitemByID(
                            2,
                            getBattlepassRewardByID(
                              getBattlepassStepByID(activeStep).reward
                            ).shopItemID
                          ).image
                        }
                        width="100%"
                        height="auto"
                        alt={
                          prototype.getShopitemByID(
                            2,
                            getBattlepassRewardByID(
                              getBattlepassStepByID(activeStep).reward
                            ).shopItemID
                          ).name
                        }
                      />
                    </div>
                  </>
                )}
                {getBattlepassRewardByID(
                  getBattlepassStepByID(activeStep).reward
                ).type === "avatarframe" && (
                  <div className="battlepass-reward-image">
                    <div className="avatar avatar-circle avatar-xl lg:avatar-2xl my-3">
                      <img
                        src={
                          prototype.getShopitemByID(
                            1,
                            getBattlepassRewardByID(
                              getBattlepassStepByID(activeStep).reward
                            ).shopItemID
                          ).image
                        }
                        alt=""
                      />
                      <div>
                        <img
                          src={prototype.getUserByID(1)?.avatar}
                          alt="avatar"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {getBattlepassRewardByID(
                  getBattlepassStepByID(activeStep).reward
                ).type === "image" && (
                  <div className="battlepass-reward-image">
                    <img
                      src={`${
                        getBattlepassRewardByID(
                          getBattlepassStepByID(activeStep).reward
                        ).image
                      }`}
                      width="100%"
                      height="auto"
                      alt={
                        getBattlepassRewardByID(
                          getBattlepassStepByID(activeStep).reward
                        ).name
                      }
                    />
                  </div>
                )}
                <p className="battlepass-reward-name">
                  {size === "battlepass-md" && (
                    <span className="uppercase text-ui-300">
                      {getBattlepassStepByID(activeStep).name}:{" "}
                    </span>
                  )}
                  {
                    getBattlepassRewardByID(
                      getBattlepassStepByID(activeStep).reward
                    ).name
                  }
                </p>
              </div>
              <div className="battlepass-reward-info">
                <Link href={`/prototype/profile/1${prototype.getURLparams()}`}>
                  <div className="flex items-center gap-4 interactive">
                    <Avatar
                      id={1}
                      hasTooltip={false}
                      hasLevel={false}
                      size="avatar-xs"
                    />
                    <div
                      className={`rounded-full bg-ui-700 border border-ui-600 text-ui-100 -ml-10 h-8 pr-3 flex gap-2 items-center whitespace-nowrap`}
                    >
                      <span className="pl-8">
                        <span
                          className={` ${
                            isPremium ? "text-premium-500" : "text-ui-300"
                          }`}
                        >
                          {calculPercent(
                            getBattlepassByID(selectedBattlepass).currentStep
                          )}
                        </span>{" "}
                        <span>
                          / {300 + 100 * getBattlepassStepByID(activeStep).id}
                        </span>
                      </span>
                      <span className="icon icon-xp-symbol text-3xl" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="battlepass-reward-action">
                {getBattlepassStepByID(activeStep).id < currentStep ? (
                  <>
                    {!getBattlepassStepByID(activeStep).hasClaimed && (
                      <>
                        {getBattlepassStepByID(activeStep).isPremium ? (
                          <>
                            {isPremium ? (
                              <button
                                type="button"
                                className="button button-claim"
                                onClick={openModalClaimBattlepassRewards.bind(
                                  this,
                                  getBattlepassStepByID(activeStep).reward
                                )}
                              >
                                <span className="icon icon-present animate-bounce" />
                                <span>Claim reward</span>
                              </button>
                            ) : (
                              <Link
                                href={`/prototype/premium${prototype.getURLparams()}`}
                              >
                                <button
                                  type="button"
                                  className="button button-premium animate-shake"
                                >
                                  <span className="icon icon-crown" />
                                  <span>Get Premium</span>
                                </button>
                              </Link>
                            )}
                          </>
                        ) : (
                          <button
                            type="button"
                            className="button button-claim"
                            onClick={openModalClaimBattlepassRewards.bind(
                              this,
                              getBattlepassStepByID(activeStep).reward
                            )}
                          >
                            <span className="icon icon-present animate-bounce" />
                            <span>Claim reward</span>
                          </button>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <button
                    type="button"
                    className="button button-tertiary is-disabled"
                  >
                    <span className="icon icon-lock" />
                    <span>Claim reward</span>
                  </button>
                )}
                {!isPremium && (
                  <div className="battlepass-premium">
                    <Link
                      href={`/prototype/premium${prototype.getURLparams()}`}
                    >
                      <a className="text-premium-500 flex items-center gap-2 whitespace-nowrap rounded-full leading-none p-2 bg-ui-850/90">
                        <span className="icon icon-crown text-lg" />
                        <span className="link text-sm">
                          {getBattlepassByID(selectedBattlepass).currentStep >
                          1 ? (
                            <>Get Premium to claim 1 locked tier</>
                          ) : (
                            <>Get premium to access exclusive rewards</>
                          )}
                        </span>
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <ul className="battlepass">
              {getBattlepassByID(selectedBattlepass)
                .steps.slice(originStep, originStep + maxSteps)
                .map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`battlepass-step ${
                      item.isPremium ? `is-premium` : ""
                    } ${item.isPremium && !isPremium ? `is-locked` : ""} ${
                      item.isBonus ? `is-bonus` : ""
                    } ${item.isSeparator ? `is-separator` : ""} ${
                      activeStep === item.id ? `is-active` : ""
                    }
                        ${
                          getBattlepassByID(selectedBattlepass).currentStep ===
                          item.id
                            ? `is-current`
                            : ""
                        }
                        `}
                  >
                    <div
                      className="battlepass-info"
                      data-tooltip={`${calculPercent(
                        getBattlepassByID(selectedBattlepass).currentStep
                      )} / ${300 + 100 * item.id} XP`}
                    >
                      <div
                        className="progressbar progressbar-sm"
                        style={{ "--percent": handleProgress(item) }}
                      >
                        <div />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="battlepass-content"
                      data-tooltip={
                        size === "battlepass-md"
                          ? getBattlepassRewardByID(item.reward).name
                          : ""
                      }
                      onClick={contentClick.bind(this, item)}
                    >
                      <div className="battlepass-decoration">
                        <span>{item.name}</span>
                      </div>
                      <div className="battlepass-body">
                        {!item.hasClaimed &&
                          item.id <
                            getBattlepassByID(selectedBattlepass)
                              .currentStep && (
                            <>
                              {item.isPremium ? (
                                <>
                                  {isPremium && (
                                    <>
                                      {size === "battlepass-md" ? (
                                        <button
                                          type="button"
                                          className="button button-sm whitespace-nowrap button-claim"
                                        >
                                          <span className="icon icon-present animate-bounce" />
                                          <span>Claim</span>
                                        </button>
                                      ) : (
                                        <div className="bg-main rounded-full w-12 h-12 grid place-content-center text-2xl text-ui-900">
                                          <span className="icon icon-present animate-bounce" />
                                        </div>
                                      )}
                                    </>
                                  )}
                                </>
                              ) : (
                                <>
                                  {size === "battlepass-md" ? (
                                    <button
                                      type="button"
                                      className="button button-sm whitespace-nowrap button-claim"
                                    >
                                      <span className="icon icon-present animate-bounce" />
                                      <span>Claim</span>
                                    </button>
                                  ) : (
                                    <div className="bg-main rounded-full w-12 h-12 grid place-content-center text-2xl text-ui-900">
                                      <span className="icon icon-present animate-bounce" />
                                    </div>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        <img
                          src={`${
                            getBattlepassRewardByID(item.reward).image
                          }`}
                          width="100%"
                          height="auto"
                          alt={getBattlepassRewardByID(item.reward).name}
                        />
                      </div>
                    </button>
                  </li>
                ))}
            </ul>
            <div className="battlepass-nav-container">
              <button
                type="button"
                className="button button-tertiary rounded-full button-sm"
                onClick={() => handlePrev()}
                disabled={activeStep === 1}
              >
                <span className="icon icon-ctrl-double-left" />
              </button>
              <div className="battlepass-nav">
                <button
                  type="button"
                  className="button button-ghost rounded-full button-sm"
                  onClick={() => handlePrev()}
                  disabled={activeStep === 1}
                >
                  <span className="icon icon-ctrl-left" />
                </button>
                <span>
                  {activeStep} /{" "}
                  {
                    getBattlepassByID(selectedBattlepass).steps.filter(
                      (value) => {
                        return value.isBonus !== true;
                      }
                    ).length
                  }
                </span>
                <button
                  type="button"
                  className="button button-ghost rounded-full button-sm"
                  onClick={() => handleNext()}
                  disabled={
                    activeStep ===
                    getBattlepassByID(selectedBattlepass).steps.length
                  }
                >
                  <span className="icon icon-ctrl-right" />
                </button>
              </div>
              <button
                type="button"
                className="button button-tertiary rounded-full button-sm"
                onClick={() => handleForward()}
                disabled={
                  activeStep + maxSteps >
                  getBattlepassByID(selectedBattlepass).steps.length
                }
              >
                <span className="icon icon-ctrl-double-right" />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
