import React, { useEffect, useState, useContext } from "react";

import Link from "next/link";
import { usePrototypeData } from "@/contexts/prototype";
import { UiContext } from "@/contexts/ui";
import { useRouter } from "next/router";
import Accordion from "@/components/Accordion/Accordion";
import { StatsValorantAgents } from "@/mock-data/data-stats-valorant";
import { StatsValorantMaps } from "@/mock-data/data-stats-valorant";
import { StatsValorantRanks } from "@/mock-data/data-stats-valorant";
import { StatsValorantWeapons } from "@/mock-data/data-stats-valorant";
import { StatsValorantDemoFavoriteAgents } from "@/mock-data/data-stats-demo-valorant";
import { StatsValorantDemoGeneral } from "@/mock-data/data-stats-demo-valorant";
import { StatsValorantDemoLatestMatches } from "@/mock-data/data-stats-demo-valorant";
import { StatsValorantDemoWeapons } from "@/mock-data/data-stats-demo-valorant";
import { StatsValorantDemoMaps } from "@/mock-data/data-stats-demo-valorant";
import LoadMore from "@/components/LoadMore/LoadMore";
import LoadMoreContainer from "@/components/LoadMore/LoadMoreContainer";
import Avatar from "@/components/Avatar/Avatar";

export default function StatsValorant() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedGeneralStat, setSelectedGeneralStat] = useState(0);
  const [selectedStat, setSelectedStat] = useState(null);
  const { game } = router.query;
  const variant = query.variant ? query.variant : 21;
  const [loading, setLoading] = useState(true);
  const [maxMap, setMaxMap] = useState(3);
  const empty = query.empty === "true" ? true : false;
  const [isEmpty, setIsEmpty] = useState(empty);
  const noriot = query.noriot === "true" ? true : false;
  const [hasRiot, setHasRiot] = useState(!noriot);
  const isPremium = prototype.isPremium;

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1200);
    }
  }, [loading]);

  useEffect(() => {
    if (isPremium) {
      setMaxMap(100);
    } else {
      setMaxMap(3);
    }
  }, [isPremium]);

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);

  useEffect(() => {
    setSelectedGeneralStat(variant);
  }, [variant]);

  useEffect(() => {
    if (selectedGame != null) {
      prototype.defineDefaultGameID(selectedGame.id);
    }
  }, [selectedGame]);

  function switchVariants() {
    if (selectedGeneralStat < StatsValorantDemoGeneral.length - 1) {
      setSelectedGeneralStat(selectedGeneralStat + 1);
    } else {
      setSelectedGeneralStat(0);
    }
  }

  const [submitting, setSubmitting] = useState(false);

  function addToastWithDelay(toast) {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr(toast);
      setSubmitting(false);
    }, 1000);
  }

  const getGeneralStatsByID = (id) => {
    return StatsValorantDemoGeneral.find((general) => {
      return general.id === parseInt(id);
    });
  };
  const getAgentByID = (id) => {
    return StatsValorantAgents.find((agent) => {
      return agent.id === parseInt(id);
    });
  };
  const getRankByID = (id) => {
    return StatsValorantRanks.find((rank) => {
      return rank.id === parseInt(id);
    });
  };
  const getMapByID = (id) => {
    return StatsValorantMaps.find((map) => {
      return map.id === parseInt(id);
    });
  };
  const getWeaponByID = (id) => {
    return StatsValorantWeapons.find((weapon) => {
      return weapon.id === parseInt(id);
    });
  };

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setSelectedStat(getGeneralStatsByID(selectedGeneralStat));
  }, [selectedGeneralStat]);

  return (
    <>
      {selectedStat && (
        <>
          {isEmpty || !hasRiot ? (
            <>
              <section className="surface sm:rounded-lg p-4 pb-16 relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row gap-4 items-stretch justify-between min-h-[250px]">
                  <div className="flex flex-col gap-4 justify-between">
                    <div className="flex gap-4 items-start leading-tight">
                      <div className="p-2 rounded bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                        <span className="icon text-3xl icon-game-valorant-symbol text-game-valorant" />
                      </div>
                      <div>
                        <h1 className="uppercase text-6xl">Valorant stats</h1>
                        <div className="text-sm text-ui-300"></div>
                      </div>
                    </div>
                    <div className="mt-8 md:mb-8 space-y-4">
                      <p className="text-ui-300">
                        You have no stats tracked yet.
                        <br />
                        Connect your Valorant account and start playing.
                      </p>
                      <button type="button" className="button button-primary">
                        <span
                          className={`icon icon-game-${selectedGame.slug}-symbol`}
                        />
                        <span>Connect my account</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute z-0 inset-0 flex items-end md:items-center justify-center opacity-25 md:opacity-100">
                  <img
                    className="absolute h-full w-full z-0 left-[33%] md:left-auto object-center object-cover"
                    src="https://res.cloudinary.com/gloot/image/upload/Stryda/stats/valorant/valorant-stats-hero-empty.jpg"
                    alt=""
                  />
                </div>
              </section>
              <section className="-mt-12 mb-16 px-4 lg:px-0">
                <div className="max-w-lg mx-auto accordion accordion-highlighted">
                  <Accordion
                    header={
                      <div className="item lg:h-24 surface surface-ui-700 shadow-xl rounded-lg p-4">
                        <div className="item-body leading-tight grid grid-cols-2 lg:flex flex-wrap justify-around flex-1 gap-4">
                          {selectedGame.demo?.mainStats.map(
                            (item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="pl-4 border-l border-ui-600 animate-slide-in-bottom animate-delay"
                                style={{
                                  "--delay": `calc(${itemIndex} * 0.05s)`,
                                }}
                              >
                                <div className="text-xs lg:text-sm text-ui-200 uppercase">
                                  {item.label}
                                </div>
                                <div className="text-main text-xl lg:text-3xl">
                                  --
                                </div>
                              </div>
                            )
                          )}
                        </div>
                        <div className="item-actions">
                          <div>
                            <span className="icon icon-24 icon-arrow-sm-down" />
                          </div>
                        </div>
                      </div>
                    }
                  >
                    <div className="flex flex-col lg:flex-row lg:items-stretch gap-4 p-4 ">
                      <div className="flex-3">
                        <div className="text-ui-400 mb-4">Stats overview</div>
                        <div className="flex flex-wrap text-center gap-2 md:gap-4 leading-tight items-stretch justify-between">
                          <div className="rounded bg-gradient-to-b from-ui-900/30 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Wins
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/30 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Kills
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/30 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Deaths
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/30 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Asists
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/30 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Score/Round
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/30 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              KDA Ratio
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/30 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Kills/Round
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/30 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              KDA Ratio
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Headshots
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              First Bloods
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Clutches
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Flawless
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Aces
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                        </div>
                      </div>
                      <hr className="separator separator-vertical h-auto bg-ui-700" />
                      <div className="flex-2">
                        <div className="text-ui-400 mb-4">
                          Last 20 matches hit accuracy
                        </div>
                        <div className="flex gap-4 items-center justify-around">
                          <div className="px-4 relative">
                            <svg
                              width="auto"
                              height="175"
                              viewBox="0 0 50 110"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="fill-ui-500"
                                d="M40.4403 104.841L38.2116 104.556L37.8245 88.2784L38.6885 86.1612C38.6988 86.1376 38.7038 86.1121 38.7031 86.0863L38.4639 77.8624C38.4615 77.813 38.4398 77.7664 38.4036 77.7327C38.3859 77.7164 38.3652 77.7038 38.3426 77.6957C38.3199 77.6875 38.2959 77.684 38.2719 77.6852L37.1504 77.74L36.8928 72.1758L38.4071 70.9446C38.4305 70.9256 38.449 70.9012 38.4607 70.8735C38.4725 70.8458 38.4773 70.8157 38.4747 70.7857L36.4288 47.3798C36.4255 47.3342 36.4045 47.2916 36.3704 47.2611L32.7407 43.9675L32.6037 44.0899L32.4647 44.2123L29.0635 47.2318C28.853 47.4184 28.5829 47.524 28.3016 47.5296L21.4972 47.6904H21.4698C21.1798 47.6904 20.8998 47.5845 20.6824 47.3926L17.0856 44.205L16.9486 44.0844L16.8116 43.962L13.1746 47.2611C13.1399 47.2914 13.1183 47.3339 13.1143 47.3798L11.0702 70.7857C11.0673 70.8155 11.0717 70.8456 11.0832 70.8733C11.0947 70.901 11.1128 70.9255 11.1359 70.9446L12.6503 72.1758L12.3927 77.74L11.2729 77.6852C11.2486 77.6838 11.2242 77.6873 11.2012 77.6955C11.1783 77.7037 11.1572 77.7164 11.1393 77.733C11.1214 77.7495 11.1069 77.7695 11.0969 77.7918C11.087 77.814 11.0816 77.838 11.0812 77.8624L10.84 86.0863C10.8403 86.112 10.8452 86.1374 10.8546 86.1612L11.7205 88.2784L11.3314 104.556L9.1028 104.841C9.05879 104.847 9.01826 104.868 8.98898 104.902C8.9597 104.935 8.9437 104.978 8.94385 105.022V109.817C8.94377 109.841 8.94843 109.865 8.95758 109.887C8.96674 109.91 8.98021 109.93 8.99719 109.947C9.01417 109.964 9.0343 109.977 9.0565 109.986C9.0787 109.995 9.10251 110 9.12652 110H18.5871C18.6356 110 18.6819 109.981 18.7161 109.946C18.7504 109.912 18.7697 109.866 18.7698 109.817L18.7862 105.117C18.786 105.074 18.7702 105.031 18.7418 104.998C18.7134 104.965 18.6741 104.943 18.631 104.936L16.4043 104.587L17.8127 88.673L18.8502 86.6745C18.8613 86.6523 18.8681 86.6281 18.8703 86.6033L19.4311 78.4634C19.4338 78.4156 19.4177 78.3687 19.3863 78.3325C19.355 78.2964 19.3108 78.2739 19.2631 78.2698L18.189 78.1857L18.5178 72.4261L20.1125 71.4616C20.1377 71.4464 20.1589 71.4254 20.1742 71.4002C20.1895 71.3751 20.1984 71.3466 20.2002 71.3172L21.0441 56.8587C21.0458 56.8288 21.0408 56.7988 21.0295 56.771L20.0649 54.6648L20.1344 53.9049L22.0433 53.8775L22.9202 55.5763C22.9356 55.6061 22.9589 55.6311 22.9876 55.6485C23.0163 55.6659 23.0492 55.675 23.0828 55.675H26.4604C26.494 55.6755 26.527 55.6665 26.5558 55.6491C26.5846 55.6316 26.6079 55.6064 26.623 55.5763L27.4998 53.8775L29.4087 53.9049L29.4799 54.6648L28.5155 56.771C28.5027 56.7984 28.497 56.8285 28.4989 56.8587L29.3429 71.3172C29.3447 71.3466 29.3536 71.3751 29.3689 71.4003C29.3842 71.4254 29.4054 71.4464 29.4307 71.4616L31.0273 72.4261L31.3541 78.1857L30.2819 78.2698C30.234 78.2732 30.1894 78.2955 30.1579 78.3318C30.1264 78.3681 30.1106 78.4155 30.1139 78.4634L30.6746 86.6033C30.6759 86.6283 30.6828 86.6526 30.6947 86.6745L31.7323 88.673L33.1389 104.587L30.912 104.936C30.869 104.943 30.8298 104.965 30.8016 104.998C30.7734 105.031 30.7581 105.074 30.7586 105.117L30.7732 109.817C30.7734 109.866 30.7926 109.912 30.8268 109.946C30.8611 109.981 30.9075 110 30.9559 110H40.4183C40.4667 110 40.5131 109.981 40.5473 109.946C40.5815 109.912 40.6009 109.866 40.601 109.817V105.022C40.6008 104.978 40.5843 104.935 40.5547 104.901C40.5251 104.868 40.4844 104.847 40.4403 104.841Z"
                              />
                              <path
                                className="fill-ui-500"
                                d="M49.5189 53.3605L47.9626 50.6058L46.3386 41.5745L47.2118 41.3279C47.2577 41.3149 47.2967 41.2846 47.3206 41.2433C47.3445 41.202 47.3514 41.1531 47.3397 41.1068L45.7613 34.8685C45.7559 34.8451 45.7457 34.823 45.7316 34.8035C45.7174 34.784 45.6996 34.7676 45.679 34.7551C45.6584 34.7427 45.6354 34.7345 45.6116 34.7311C45.5878 34.7277 45.5635 34.7291 45.5403 34.7352L44.7293 34.9398L41.8576 23.5684L42.8806 23.3108C42.9278 23.2985 42.9684 23.2684 42.9939 23.2268C43.0178 23.1846 43.0249 23.1351 43.0139 23.0879L41.1251 15.6806C41.1191 15.6574 41.1086 15.6356 41.0941 15.6165C41.0797 15.5974 41.0617 15.5813 41.0411 15.5691L39.4646 14.6247C39.4444 14.6121 39.4217 14.6038 39.3982 14.6003C39.3746 14.5968 39.3506 14.5983 39.3276 14.6046L34.569 15.8066C34.5457 15.8124 34.5238 15.8228 34.5046 15.8373C34.4855 15.8517 34.4695 15.8699 34.4575 15.8907C34.4449 15.9109 34.4365 15.9335 34.4331 15.9571C34.4296 15.9807 34.4312 16.0047 34.4375 16.0277L34.9015 17.8654L32.5578 18.5924L29.0705 16.2085L28.9226 16.3291L28.7747 16.4497L28.2376 16.8881C28.0419 17.0473 27.7975 17.1344 27.5452 17.1347L22.0011 17.1365C21.7494 17.1362 21.5056 17.0491 21.3106 16.8899L20.768 16.4497L20.6201 16.3291L20.4722 16.2104L16.9868 18.5924L14.6413 17.8654L15.1071 16.0277C15.1126 16.0045 15.1135 15.9805 15.1097 15.957C15.106 15.9335 15.0976 15.911 15.0851 15.8907C15.0734 15.8697 15.0574 15.8514 15.0382 15.837C15.019 15.8225 14.9971 15.8122 14.9737 15.8066L10.2169 14.6046C10.1936 14.5983 10.1693 14.5969 10.1454 14.6003C10.1215 14.6038 10.0986 14.612 10.078 14.6247L8.50159 15.5691C8.46046 15.5943 8.43043 15.6342 8.41757 15.6806L6.53055 23.0879C6.52425 23.1112 6.52271 23.1356 6.52618 23.1595C6.52965 23.1834 6.53804 23.2062 6.55071 23.2268C6.56272 23.2475 6.57876 23.2656 6.59789 23.2801C6.61703 23.2945 6.63887 23.305 6.66211 23.3108L7.68688 23.5684L4.81532 34.9398L4.00417 34.7352C3.95707 34.7233 3.90719 34.7306 3.86538 34.7553C3.82375 34.7807 3.79363 34.8213 3.78136 34.8685L2.20492 41.1068C2.1928 41.1531 2.19936 41.2022 2.22329 41.2436C2.24723 41.285 2.2866 41.3153 2.33273 41.3279L3.20409 41.5745L1.58197 50.6058L0.023726 53.3605C0.00866727 53.3893 0.000542225 53.4212 0 53.4537L0.0767083 57.9584C0.0771281 57.9928 0.0872708 58.0263 0.105964 58.0552L3.50548 63.2559C3.52126 63.2797 3.54229 63.2995 3.56702 63.3137C3.59175 63.328 3.61952 63.3363 3.64801 63.3381C3.67637 63.3395 3.70461 63.3343 3.73061 63.3229C3.7566 63.3115 3.77964 63.2942 3.79777 63.2723L4.81888 62.0429C4.83955 62.0182 4.85316 61.9883 4.85831 61.9565C4.86346 61.9247 4.85996 61.8921 4.84814 61.8621L2.98672 56.8788L3.8636 54.3743L5.06185 54.4109L6.14879 56.4568C6.16429 56.4856 6.18713 56.5098 6.21506 56.5268C6.243 56.5438 6.27503 56.5531 6.30774 56.5537L7.01827 56.5646C7.04484 56.5652 7.0712 56.5599 7.09551 56.5492C7.11983 56.5385 7.14149 56.5225 7.15893 56.5025C7.17637 56.4824 7.18913 56.4588 7.19639 56.4332C7.20365 56.4076 7.20524 56.3808 7.20094 56.3545L6.78449 53.6638C6.78068 53.6391 6.77197 53.6155 6.75889 53.5943L5.19707 51.0954L7.76359 42.6029L8.75188 42.8422C8.77491 42.8481 8.79883 42.8493 8.82234 42.8458C8.84586 42.8424 8.8685 42.8343 8.88888 42.8221C8.90926 42.8098 8.92695 42.7937 8.94106 42.7746C8.95518 42.7555 8.96544 42.7337 8.97112 42.7107L10.5238 36.5711C10.535 36.5237 10.5271 36.4739 10.5019 36.4322C10.4898 36.4117 10.4736 36.3939 10.4544 36.3798C10.4353 36.3657 10.4136 36.3555 10.3904 36.35L9.67434 36.1674L12.8657 24.8764L15.319 25.4755L13.7607 33.2592C13.7521 33.3015 13.7586 33.3454 13.779 33.3834L18.5066 41.927L18.5085 41.9289L18.7185 42.1133L18.8555 42.2339L21.908 44.9393L27.8119 44.8005L30.6945 42.2412L30.8333 42.1189L31.0233 41.9508L35.7637 33.3834C35.7856 33.346 35.7928 33.3017 35.7837 33.2592L34.2256 25.4755L36.6789 24.8764L39.8701 36.1674L39.1523 36.35C39.106 36.3622 39.0661 36.3916 39.0408 36.4322C39.0281 36.4528 39.0198 36.4757 39.0163 36.4996C39.0129 36.5235 39.0144 36.5478 39.0208 36.5711L40.5717 42.7107C40.5838 42.7573 40.6137 42.7973 40.6551 42.8219C40.6965 42.8465 40.746 42.8538 40.7927 42.8422L41.7808 42.6029L44.3456 51.0954L42.7855 53.5943C42.7726 53.6156 42.7639 53.6392 42.76 53.6638L42.3417 56.3545C42.3378 56.3809 42.3396 56.4078 42.3472 56.4334C42.3547 56.4589 42.3679 56.4825 42.3856 56.5025C42.4026 56.523 42.4242 56.5392 42.4486 56.55C42.473 56.5608 42.4995 56.5658 42.5262 56.5646L43.2349 56.5537C43.2676 56.5531 43.2996 56.5438 43.3275 56.5268C43.3554 56.5098 43.3784 56.4856 43.3939 56.4568L44.4808 54.4109L45.681 54.3743L46.5578 56.8788L44.6945 61.8621C44.683 61.8923 44.6799 61.9249 44.6853 61.9567C44.6908 61.9885 44.7047 62.0183 44.7256 62.0429L45.7449 63.2723C45.7632 63.2945 45.7864 63.312 45.8128 63.3234C45.8391 63.3349 45.8678 63.3399 45.8965 63.3381C45.925 63.3364 45.9527 63.3281 45.9774 63.3138C46.0022 63.2995 46.0233 63.2797 46.039 63.2559L49.4367 58.0552C49.4554 58.0263 49.4656 57.9928 49.4659 57.9584L49.5427 53.4537C49.543 53.4211 49.5348 53.3889 49.5189 53.3605Z"
                              />
                              <path
                                className="fill-ui-500"
                                d="M19.526 8.93268L20.2 9.21949V12.8547C20.1999 12.8848 20.2073 12.9145 20.2217 12.941C20.2361 12.9675 20.2569 12.99 20.2822 13.0063L21.1864 13.6L22.6734 14.5791H23.1484L26.3963 14.5773H26.8712L28.338 13.6128L29.2605 13.0063C29.2859 12.99 29.3067 12.9675 29.3211 12.941C29.3354 12.9145 29.3429 12.8848 29.3427 12.8547V9.21949L30.0187 8.93268C30.0516 8.91863 30.0798 8.89525 30.0996 8.86538C30.1194 8.83552 30.13 8.80048 30.1302 8.76464V6.30404C30.1299 6.27032 30.1203 6.23732 30.1026 6.20864C30.0849 6.17997 30.0596 6.15671 30.0295 6.14144L29.3427 5.7962L29.3374 2.10074C29.3374 2.0586 29.3225 2.01783 29.2953 1.98563L27.6969 0.0657397C27.6798 0.0450606 27.6583 0.0284069 27.634 0.0170389C27.6097 0.00567087 27.5832 -0.000128496 27.5563 2.52021e-06H21.9866C21.9597 -0.000138876 21.9332 0.00567107 21.9088 0.0170389C21.8845 0.0284067 21.863 0.0450495 21.8458 0.0657397L20.2493 1.98563C20.2222 2.01786 20.2073 2.05862 20.2073 2.10074L20.2 5.7962L19.515 6.14144C19.4847 6.15642 19.4592 6.17959 19.4415 6.20833C19.4237 6.23708 19.4144 6.27025 19.4146 6.30404V8.76464C19.4147 8.80047 19.4253 8.83547 19.4451 8.86534C19.4649 8.8952 19.493 8.91863 19.526 8.93268Z"
                              />
                            </svg>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-baseline gap-2 text-blue-500">
                              <span>Head</span>
                              <span className="text-lg">--</span>
                              <span>Hits</span>
                              <span className="text-lg">--</span>
                            </div>
                            <div className="flex items-baseline gap-2 text-attention-500">
                              <span>Body</span>
                              <span className="text-lg">--</span>
                              <span>Hits</span>
                              <span className="text-lg">--</span>
                            </div>
                            <div className="flex items-baseline gap-2 text-error-500">
                              <span>Legs</span>
                              <span className="text-lg">--</span>
                              <span>Hits</span>
                              <span className="text-lg">--</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion>
                </div>
              </section>
              <div className="my-16 text-center px-4 md:px-0">
                {!hasRiot && (
                  <>
                    <span className="icon icon-game-valorant-symbol text-7xl text-ui-400 mb-4" />
                    <div className="max-w-xs mx-auto">
                      <h2 className="h4">Connect and play!</h2>
                      <p className="mt-4 mb-6 text-ui-300">
                        Connect your Valorant account and start playing to see
                        who your top agents are, how well you performed in your
                        last 20 matches or how much time you have spent in
                        Valorant.
                      </p>
                      <button
                        type="button"
                        className="button button-primary w-full"
                      >
                        <span className="icon icon-game-valorant-symbol" />
                        <span>Connect my account</span>
                      </button>
                    </div>
                  </>
                )}
                {isEmpty && (
                  <>
                    <div className="mx-auto mb-4 max-w-sm">
                      <img
                        src="https://res.cloudinary.com/gloot/image/upload/v1669821582/Marketing/2022_VALORANT_agent_generator/images/empty-valorant-character.png"
                        height="auto"
                        width="auto"
                        alt=""
                      />
                    </div>
                    <div className="max-w-xs mx-auto">
                      <h2 className="h4">Start playing!</h2>
                      <p className="mt-4 mb-6 text-ui-300">
                        Start playing to see who your top champions are, how
                        well you performed in your last 20 matches or how much
                        time you have spent in game.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <section
                className={`surface sm:rounded-lg p-4 pb-16 relative overflow-hidden ${
                  loading ? "is-loading" : ""
                }`}
              >
                <div
                  onClick={switchVariants}
                  className="relative z-10 flex flex-col md:flex-row gap-4 items-stretch justify-between min-h-[250px]"
                >
                  <div className="flex flex-col gap-4 justify-between">
                    <div className="flex gap-4 items-start leading-tight">
                      <div className="p-2 rounded bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                        <span className="icon text-3xl icon-game-valorant-symbol text-game-valorant" />
                      </div>
                      <div>
                        <h1 className="uppercase text-6xl">Valorant stats</h1>
                        <div className="text-sm text-ui-300">
                          Last updated on 11 NOV 2024, 16:38 PM
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <Avatar id={1} size="avatar-md" />
                      <div className="leading-tight">
                        <div className="h5">
                          {prototype.getUserByID(1)?.nickname}
                        </div>
                        <div>
                          {prototype.getUserByID(1)?.socials.riotValorantNickname}
                          <span className="text-sm text-ui-300">#8492</span>
                        </div>
                        <div className="text-ui-300 uppercase text-xs lg:text-sm">
                          Match played: <b>862</b>
                        </div>
                        <div className="text-ui-300 uppercase text-xs lg:text-sm">
                          Play time: <b>1439H</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col gap-2 md:gap-4 items-center md:items-end justify-between border-t border-ui-700 md:border-none pt-4 md:pt-0">
                    <div className="hidden md:block">
                      <button
                        className={`button button-sm button-tertiary ${
                          submitting ? "is-loading" : ""
                        }`}
                        onClick={addToastWithDelay.bind(this, {
                          icon: "f-check",
                          color: "green",
                          text: "Your stats have been updated.",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        })}
                      >
                        <span className="icon icon-16 icon-refresh-02" />
                        <span>Update my stats</span>
                      </button>
                    </div>
                    <div className="md:text-right leading-none mb-2">
                      <div className="text-sm uppercase text-ui-300">
                        Top agent
                      </div>
                      <h2 className="font-headings font-bold uppercase text-5xl">
                        {getAgentByID(selectedStat.agent).name}
                      </h2>
                      <div className="text-sm uppercase text-ui-300">
                        {getAgentByID(selectedStat.agent).role.name}
                      </div>
                    </div>
                    <div className="md:text-right flex gap-2 items-center uppercase text-xs lg:text-sm text-ui-300">
                      <div>
                        <span>Rank</span>{" "}
                        <b className="text-ui-100">
                          {getRankByID(selectedStat.rank).name}
                        </b>
                      </div>
                      <img
                        className="h-16"
                        src={getRankByID(selectedStat.rank).picturePath}
                        height="auto"
                        width="auto"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="block md:hidden border-t border-ui-700 md:border-none pt-4 md:pt-0">
                    <button
                      className={`button button-sm button-tertiary w-full ${
                        submitting ? "is-loading" : ""
                      }`}
                      onClick={addToastWithDelay.bind(this, {
                        icon: "f-check",
                        color: "green",
                        text: "Your stats have been updated.",
                        autoDelete: true,
                        autoDeleteDelay: 2500,
                      })}
                    >
                      <span className="icon icon-16 icon-refresh-02" />
                      <span>Update my stats</span>
                    </button>
                  </div>
                </div>
                <div className="absolute z-0 inset-0 flex items-end md:items-center justify-center opacity-25 md:opacity-100">
                  <img
                    className="absolute z-0 object-cover left-[33%] md:left-auto object-center animate-slide-in-bottom"
                    src={getAgentByID(selectedStat.agent).backgroundPath}
                    alt=""
                  />
                </div>
              </section>
              <section className="-mt-12 mb-16 px-4 lg:px-0">
                <div className="max-w-lg mx-auto accordion accordion-highlighted">
                  <Accordion
                    header={
                      <div
                        className={`item lg:h-24 surface surface-ui-700 shadow-xl rounded-lg p-4 ${
                          loading ? "is-loading" : ""
                        }`}
                      >
                        <div className="item-body leading-tight grid grid-cols-2 lg:flex flex-wrap justify-around flex-1 gap-4 child:animate-delay">
                          {selectedGame.demo?.mainStats.map(
                            (item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="pl-4 border-l border-ui-600 animate-slide-in-bottom animate-delay"
                                style={{
                                  "--delay": `calc(${itemIndex} * 0.05s)`,
                                }}
                              >
                                <div className="text-xs lg:text-sm text-ui-200 uppercase">
                                  {item.label}
                                </div>
                                <div className="text-main text-xl lg:text-3xl">
                                  {item.value}
                                </div>
                                <div className="text-xs lg:text-sm text-ui-300">
                                  Top 2.4%
                                </div>
                              </div>
                            )
                          )}
                        </div>
                        <div className="item-actions">
                          <div>
                            <span className="icon icon-24 icon-arrow-sm-down" />
                          </div>
                        </div>
                      </div>
                    }
                  >
                    <div className="flex flex-col lg:flex-row lg:items-stretch gap-4 p-4 ">
                      <div className="flex-3">
                        <div className="text-ui-400 mb-4">Stats overview</div>
                        <div className="flex flex-wrap text-center gap-2 md:gap-4 leading-tight items-stretch justify-between">
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Wins
                            </div>
                            <div className="font-bold">87</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Kills
                            </div>
                            <div className="font-bold">2,572</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Deaths
                            </div>
                            <div className="font-bold">1,509</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Asists
                            </div>
                            <div className="font-bold">335</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Score/Round
                            </div>
                            <div className="font-bold">239.0</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              KDA Ratio
                            </div>
                            <div className="font-bold">87</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Kills/Round
                            </div>
                            <div className="font-bold">24</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              KDA Ratio
                            </div>
                            <div className="font-bold">24</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Headshots
                            </div>
                            <div className="font-bold">24</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              First Bloods
                            </div>
                            <div className="font-bold">24</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Clutches
                            </div>
                            <div className="font-bold">24</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Flawless
                            </div>
                            <div className="font-bold">24</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Aces
                            </div>
                            <div className="font-bold">24</div>
                          </div>
                        </div>
                      </div>
                      <hr className="separator separator-vertical h-auto bg-ui-700" />
                      {/*
                      <div className="flex-2">
                        <div className="text-ui-400 mb-4">
                          Last 20 matches hit accuracy
                        </div>
                        <div className="flex gap-4 items-center justify-around">
                          <div className="px-4 relative">
                            <span
                              className="absolute z-10 rounded-full w-40 h-40 origin-center mix-blend-color-lighten bg-gradient-radial animate-pulse from-blue-500/80 to-blue-500/30 shadow-[0_0_0_2rem_rgba(var(--color-blue-500)/20%)] -top-[calc((10rem/2)-1rem)] left-[calc(50%-(10rem/2))]"
                              style={{ transform: "scale(0.2)" }}
                            />
                            <span
                              className="absolute z-10 rounded-full w-40 h-40 origin-center mix-blend-color-lighten bg-gradient-radial animate-pulse from-attention-500/80 to-attention-500/30 shadow-[0_0_0_2rem_rgba(var(--color-attention-500)/20%)] top-1 left-[calc(50%-(10rem/2))]"
                              style={{ transform: "scale(0.5)" }}
                            />
                            <span
                              className="absolute z-10 rounded-full w-40 h-40 origin-center mix-blend-color-lighten bg-gradient-radial animate-pulse from-error-500/80 to-error-500/30 shadow-[0_0_0_2rem_rgba(var(--color-error-500)/20%)] bottom-1 -left-6"
                              style={{ transform: "scale(0.2)" }}
                            />
                            <img
                              className="relative z-0"
                              src="https://res.cloudinary.com/gloot/image/upload/v1671446426/Stryda/stats/valorant/hitmap.svg"
                              width="125"
                              height="264"
                              alt=""
                            />
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-baseline gap-2 text-blue-500">
                              <span>Head</span>
                              <span className="text-lg">30%</span>
                              <span>Hits</span>
                              <span className="text-lg">49.4</span>
                            </div>
                            <div className="flex items-baseline gap-2 text-attention-500">
                              <span>Body</span>
                              <span className="text-lg">50%</span>
                              <span>Hits</span>
                              <span className="text-lg">49.4</span>
                            </div>
                            <div className="flex items-baseline gap-2 text-error-500">
                              <span>Legs</span>
                              <span className="text-lg">20%</span>
                              <span>Hits</span>
                              <span className="text-lg">49.4</span>
                            </div>
                          </div>
                        </div>
                      </div>
                  */}
                      <div className="flex-2 flex flex-col">
                        <div className="text-ui-400 mb-4">
                          Last 20 matches hit accuracy
                        </div>
                        <div className="flex flex-1 gap-4 items-center justify-around">
                          <div className="px-4 relative">
                            <svg
                              width="auto"
                              height="175"
                              viewBox="0 0 50 110"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="fill-ui-400"
                                d="M40.4403 104.841L38.2116 104.556L37.8245 88.2784L38.6885 86.1612C38.6988 86.1376 38.7038 86.1121 38.7031 86.0863L38.4639 77.8624C38.4615 77.813 38.4398 77.7664 38.4036 77.7327C38.3859 77.7164 38.3652 77.7038 38.3426 77.6957C38.3199 77.6875 38.2959 77.684 38.2719 77.6852L37.1504 77.74L36.8928 72.1758L38.4071 70.9446C38.4305 70.9256 38.449 70.9012 38.4607 70.8735C38.4725 70.8458 38.4773 70.8157 38.4747 70.7857L36.4288 47.3798C36.4255 47.3342 36.4045 47.2916 36.3704 47.2611L32.7407 43.9675L32.6037 44.0899L32.4647 44.2123L29.0635 47.2318C28.853 47.4184 28.5829 47.524 28.3016 47.5296L21.4972 47.6904H21.4698C21.1798 47.6904 20.8998 47.5845 20.6824 47.3926L17.0856 44.205L16.9486 44.0844L16.8116 43.962L13.1746 47.2611C13.1399 47.2914 13.1183 47.3339 13.1143 47.3798L11.0702 70.7857C11.0673 70.8155 11.0717 70.8456 11.0832 70.8733C11.0947 70.901 11.1128 70.9255 11.1359 70.9446L12.6503 72.1758L12.3927 77.74L11.2729 77.6852C11.2486 77.6838 11.2242 77.6873 11.2012 77.6955C11.1783 77.7037 11.1572 77.7164 11.1393 77.733C11.1214 77.7495 11.1069 77.7695 11.0969 77.7918C11.087 77.814 11.0816 77.838 11.0812 77.8624L10.84 86.0863C10.8403 86.112 10.8452 86.1374 10.8546 86.1612L11.7205 88.2784L11.3314 104.556L9.1028 104.841C9.05879 104.847 9.01826 104.868 8.98898 104.902C8.9597 104.935 8.9437 104.978 8.94385 105.022V109.817C8.94377 109.841 8.94843 109.865 8.95758 109.887C8.96674 109.91 8.98021 109.93 8.99719 109.947C9.01417 109.964 9.0343 109.977 9.0565 109.986C9.0787 109.995 9.10251 110 9.12652 110H18.5871C18.6356 110 18.6819 109.981 18.7161 109.946C18.7504 109.912 18.7697 109.866 18.7698 109.817L18.7862 105.117C18.786 105.074 18.7702 105.031 18.7418 104.998C18.7134 104.965 18.6741 104.943 18.631 104.936L16.4043 104.587L17.8127 88.673L18.8502 86.6745C18.8613 86.6523 18.8681 86.6281 18.8703 86.6033L19.4311 78.4634C19.4338 78.4156 19.4177 78.3687 19.3863 78.3325C19.355 78.2964 19.3108 78.2739 19.2631 78.2698L18.189 78.1857L18.5178 72.4261L20.1125 71.4616C20.1377 71.4464 20.1589 71.4254 20.1742 71.4002C20.1895 71.3751 20.1984 71.3466 20.2002 71.3172L21.0441 56.8587C21.0458 56.8288 21.0408 56.7988 21.0295 56.771L20.0649 54.6648L20.1344 53.9049L22.0433 53.8775L22.9202 55.5763C22.9356 55.6061 22.9589 55.6311 22.9876 55.6485C23.0163 55.6659 23.0492 55.675 23.0828 55.675H26.4604C26.494 55.6755 26.527 55.6665 26.5558 55.6491C26.5846 55.6316 26.6079 55.6064 26.623 55.5763L27.4998 53.8775L29.4087 53.9049L29.4799 54.6648L28.5155 56.771C28.5027 56.7984 28.497 56.8285 28.4989 56.8587L29.3429 71.3172C29.3447 71.3466 29.3536 71.3751 29.3689 71.4003C29.3842 71.4254 29.4054 71.4464 29.4307 71.4616L31.0273 72.4261L31.3541 78.1857L30.2819 78.2698C30.234 78.2732 30.1894 78.2955 30.1579 78.3318C30.1264 78.3681 30.1106 78.4155 30.1139 78.4634L30.6746 86.6033C30.6759 86.6283 30.6828 86.6526 30.6947 86.6745L31.7323 88.673L33.1389 104.587L30.912 104.936C30.869 104.943 30.8298 104.965 30.8016 104.998C30.7734 105.031 30.7581 105.074 30.7586 105.117L30.7732 109.817C30.7734 109.866 30.7926 109.912 30.8268 109.946C30.8611 109.981 30.9075 110 30.9559 110H40.4183C40.4667 110 40.5131 109.981 40.5473 109.946C40.5815 109.912 40.6009 109.866 40.601 109.817V105.022C40.6008 104.978 40.5843 104.935 40.5547 104.901C40.5251 104.868 40.4844 104.847 40.4403 104.841Z"
                              />
                              <path
                                className="fill-main"
                                d="M49.5189 53.3605L47.9626 50.6058L46.3386 41.5745L47.2118 41.3279C47.2577 41.3149 47.2967 41.2846 47.3206 41.2433C47.3445 41.202 47.3514 41.1531 47.3397 41.1068L45.7613 34.8685C45.7559 34.8451 45.7457 34.823 45.7316 34.8035C45.7174 34.784 45.6996 34.7676 45.679 34.7551C45.6584 34.7427 45.6354 34.7345 45.6116 34.7311C45.5878 34.7277 45.5635 34.7291 45.5403 34.7352L44.7293 34.9398L41.8576 23.5684L42.8806 23.3108C42.9278 23.2985 42.9684 23.2684 42.9939 23.2268C43.0178 23.1846 43.0249 23.1351 43.0139 23.0879L41.1251 15.6806C41.1191 15.6574 41.1086 15.6356 41.0941 15.6165C41.0797 15.5974 41.0617 15.5813 41.0411 15.5691L39.4646 14.6247C39.4444 14.6121 39.4217 14.6038 39.3982 14.6003C39.3746 14.5968 39.3506 14.5983 39.3276 14.6046L34.569 15.8066C34.5457 15.8124 34.5238 15.8228 34.5046 15.8373C34.4855 15.8517 34.4695 15.8699 34.4575 15.8907C34.4449 15.9109 34.4365 15.9335 34.4331 15.9571C34.4296 15.9807 34.4312 16.0047 34.4375 16.0277L34.9015 17.8654L32.5578 18.5924L29.0705 16.2085L28.9226 16.3291L28.7747 16.4497L28.2376 16.8881C28.0419 17.0473 27.7975 17.1344 27.5452 17.1347L22.0011 17.1365C21.7494 17.1362 21.5056 17.0491 21.3106 16.8899L20.768 16.4497L20.6201 16.3291L20.4722 16.2104L16.9868 18.5924L14.6413 17.8654L15.1071 16.0277C15.1126 16.0045 15.1135 15.9805 15.1097 15.957C15.106 15.9335 15.0976 15.911 15.0851 15.8907C15.0734 15.8697 15.0574 15.8514 15.0382 15.837C15.019 15.8225 14.9971 15.8122 14.9737 15.8066L10.2169 14.6046C10.1936 14.5983 10.1693 14.5969 10.1454 14.6003C10.1215 14.6038 10.0986 14.612 10.078 14.6247L8.50159 15.5691C8.46046 15.5943 8.43043 15.6342 8.41757 15.6806L6.53055 23.0879C6.52425 23.1112 6.52271 23.1356 6.52618 23.1595C6.52965 23.1834 6.53804 23.2062 6.55071 23.2268C6.56272 23.2475 6.57876 23.2656 6.59789 23.2801C6.61703 23.2945 6.63887 23.305 6.66211 23.3108L7.68688 23.5684L4.81532 34.9398L4.00417 34.7352C3.95707 34.7233 3.90719 34.7306 3.86538 34.7553C3.82375 34.7807 3.79363 34.8213 3.78136 34.8685L2.20492 41.1068C2.1928 41.1531 2.19936 41.2022 2.22329 41.2436C2.24723 41.285 2.2866 41.3153 2.33273 41.3279L3.20409 41.5745L1.58197 50.6058L0.023726 53.3605C0.00866727 53.3893 0.000542225 53.4212 0 53.4537L0.0767083 57.9584C0.0771281 57.9928 0.0872708 58.0263 0.105964 58.0552L3.50548 63.2559C3.52126 63.2797 3.54229 63.2995 3.56702 63.3137C3.59175 63.328 3.61952 63.3363 3.64801 63.3381C3.67637 63.3395 3.70461 63.3343 3.73061 63.3229C3.7566 63.3115 3.77964 63.2942 3.79777 63.2723L4.81888 62.0429C4.83955 62.0182 4.85316 61.9883 4.85831 61.9565C4.86346 61.9247 4.85996 61.8921 4.84814 61.8621L2.98672 56.8788L3.8636 54.3743L5.06185 54.4109L6.14879 56.4568C6.16429 56.4856 6.18713 56.5098 6.21506 56.5268C6.243 56.5438 6.27503 56.5531 6.30774 56.5537L7.01827 56.5646C7.04484 56.5652 7.0712 56.5599 7.09551 56.5492C7.11983 56.5385 7.14149 56.5225 7.15893 56.5025C7.17637 56.4824 7.18913 56.4588 7.19639 56.4332C7.20365 56.4076 7.20524 56.3808 7.20094 56.3545L6.78449 53.6638C6.78068 53.6391 6.77197 53.6155 6.75889 53.5943L5.19707 51.0954L7.76359 42.6029L8.75188 42.8422C8.77491 42.8481 8.79883 42.8493 8.82234 42.8458C8.84586 42.8424 8.8685 42.8343 8.88888 42.8221C8.90926 42.8098 8.92695 42.7937 8.94106 42.7746C8.95518 42.7555 8.96544 42.7337 8.97112 42.7107L10.5238 36.5711C10.535 36.5237 10.5271 36.4739 10.5019 36.4322C10.4898 36.4117 10.4736 36.3939 10.4544 36.3798C10.4353 36.3657 10.4136 36.3555 10.3904 36.35L9.67434 36.1674L12.8657 24.8764L15.319 25.4755L13.7607 33.2592C13.7521 33.3015 13.7586 33.3454 13.779 33.3834L18.5066 41.927L18.5085 41.9289L18.7185 42.1133L18.8555 42.2339L21.908 44.9393L27.8119 44.8005L30.6945 42.2412L30.8333 42.1189L31.0233 41.9508L35.7637 33.3834C35.7856 33.346 35.7928 33.3017 35.7837 33.2592L34.2256 25.4755L36.6789 24.8764L39.8701 36.1674L39.1523 36.35C39.106 36.3622 39.0661 36.3916 39.0408 36.4322C39.0281 36.4528 39.0198 36.4757 39.0163 36.4996C39.0129 36.5235 39.0144 36.5478 39.0208 36.5711L40.5717 42.7107C40.5838 42.7573 40.6137 42.7973 40.6551 42.8219C40.6965 42.8465 40.746 42.8538 40.7927 42.8422L41.7808 42.6029L44.3456 51.0954L42.7855 53.5943C42.7726 53.6156 42.7639 53.6392 42.76 53.6638L42.3417 56.3545C42.3378 56.3809 42.3396 56.4078 42.3472 56.4334C42.3547 56.4589 42.3679 56.4825 42.3856 56.5025C42.4026 56.523 42.4242 56.5392 42.4486 56.55C42.473 56.5608 42.4995 56.5658 42.5262 56.5646L43.2349 56.5537C43.2676 56.5531 43.2996 56.5438 43.3275 56.5268C43.3554 56.5098 43.3784 56.4856 43.3939 56.4568L44.4808 54.4109L45.681 54.3743L46.5578 56.8788L44.6945 61.8621C44.683 61.8923 44.6799 61.9249 44.6853 61.9567C44.6908 61.9885 44.7047 62.0183 44.7256 62.0429L45.7449 63.2723C45.7632 63.2945 45.7864 63.312 45.8128 63.3234C45.8391 63.3349 45.8678 63.3399 45.8965 63.3381C45.925 63.3364 45.9527 63.3281 45.9774 63.3138C46.0022 63.2995 46.0233 63.2797 46.039 63.2559L49.4367 58.0552C49.4554 58.0263 49.4656 57.9928 49.4659 57.9584L49.5427 53.4537C49.543 53.4211 49.5348 53.3889 49.5189 53.3605Z"
                              />
                              <path
                                className="fill-ui-400"
                                d="M19.526 8.93268L20.2 9.21949V12.8547C20.1999 12.8848 20.2073 12.9145 20.2217 12.941C20.2361 12.9675 20.2569 12.99 20.2822 13.0063L21.1864 13.6L22.6734 14.5791H23.1484L26.3963 14.5773H26.8712L28.338 13.6128L29.2605 13.0063C29.2859 12.99 29.3067 12.9675 29.3211 12.941C29.3354 12.9145 29.3429 12.8848 29.3427 12.8547V9.21949L30.0187 8.93268C30.0516 8.91863 30.0798 8.89525 30.0996 8.86538C30.1194 8.83552 30.13 8.80048 30.1302 8.76464V6.30404C30.1299 6.27032 30.1203 6.23732 30.1026 6.20864C30.0849 6.17997 30.0596 6.15671 30.0295 6.14144L29.3427 5.7962L29.3374 2.10074C29.3374 2.0586 29.3225 2.01783 29.2953 1.98563L27.6969 0.0657397C27.6798 0.0450606 27.6583 0.0284069 27.634 0.0170389C27.6097 0.00567087 27.5832 -0.000128496 27.5563 2.52021e-06H21.9866C21.9597 -0.000138876 21.9332 0.00567107 21.9088 0.0170389C21.8845 0.0284067 21.863 0.0450495 21.8458 0.0657397L20.2493 1.98563C20.2222 2.01786 20.2073 2.05862 20.2073 2.10074L20.2 5.7962L19.515 6.14144C19.4847 6.15642 19.4592 6.17959 19.4415 6.20833C19.4237 6.23708 19.4144 6.27025 19.4146 6.30404V8.76464C19.4147 8.80047 19.4253 8.83547 19.4451 8.86534C19.4649 8.8952 19.493 8.91863 19.526 8.93268Z"
                              />
                            </svg>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-baseline gap-2 text-ui-200">
                              <span>Head</span>
                              <span className="text-lg">30%</span>
                              <span>Hits</span>
                              <span className="text-lg">49.4</span>
                            </div>
                            <div className="flex items-baseline gap-2 text-main">
                              <span>Body</span>
                              <span className="text-lg">50%</span>
                              <span>Hits</span>
                              <span className="text-lg">49.4</span>
                            </div>
                            <div className="flex items-baseline gap-2 text-ui-200">
                              <span>Legs</span>
                              <span className="text-lg">20%</span>
                              <span>Hits</span>
                              <span className="text-lg">49.4</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion>
                </div>
              </section>
              <section className="mb-4">
                <h2 className="h5 mx-4 md:mx-0">Most played agents</h2>
                <div className="overflow-x-auto scrollbar-desktop pb-4 px-2 md:px-0">
                  <table
                    className={`table table-rounded rounded-lg w-full text-center min-w-lg ${
                      loading ? "is-loading" : ""
                    }`}
                  >
                    <thead>
                      <tr className="text-ui-400">
                        <th className="text-left">Agent</th>
                        <th>Time played</th>
                        <th>Matches</th>
                        <th>Win %</th>
                        <th>K/D</th>
                        <th>ADR</th>
                        <th>ACS</th>
                        <th>HS%</th>
                      </tr>
                    </thead>
                    <tbody className="child:overflow-hidden leading-tight">
                      {StatsValorantDemoFavoriteAgents.slice(0, maxMap).map(
                        (item, itemIndex) => (
                          <tr key={itemIndex}>
                            <td className="p-0">
                              <div className="flex items-center gap-4 text-left w-24">
                                <img
                                  className="w-16 h-16 rounded-l"
                                  src={getAgentByID(item.agent).picturePath}
                                  alt=""
                                  width="auto"
                                  height="auto"
                                />
                                <div>
                                  <div className="text-ui-100 capitalize">
                                    {getAgentByID(item.agent).name}
                                  </div>
                                  <div className="font-normal text-ui-300 capitalize">
                                    {getAgentByID(item.agent).role.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>{item.timePlayed}</td>
                            <td>{item.matches}</td>
                            <td>{item.win}%</td>
                            <td>{item.kd}</td>
                            <td>{item.adr}</td>
                            <td>{item.acs}</td>
                            <td>{item.hs}%</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>

                  {!isPremium && (
                    <LoadMoreContainer
                      className="button-sm button-tertiary"
                      label="View more agents"
                    >
                      <div className="relative mb-2 -mt-2">
                        <div className="absolute z-10 inset-0 bg-gradient-to-b from-ui-900/50 to-ui-900 backdrop-blur-sm flex flex-col items-center justify-center">
                          <p className="text-ui-300 mb-2">
                            Get Premium to see the full overview of your stats.
                          </p>
                          <Link href="/prototype/premium">
                            <button
                              type="button"
                              className="button button-sm button-tertiary"
                            >
                              <span className="icon icon-crown text-premium-500" />
                              <span className="text-premium-500">
                                Get Premium
                              </span>
                            </button>
                          </Link>
                        </div>
                        <div className="h-32 overflow-hidden blur-sm">
                          <table
                            className={`table table-rounded rounded-lg w-full text-center min-w-lg blur-sm ${
                              loading ? "is-loading" : ""
                            }`}
                          >
                            <tbody className="child:overflow-hidden leading-tight">
                              <tr>
                                <td className="p-0">
                                  <div className="flex items-center gap-4 text-left w-24">
                                    <img
                                      className="w-16 h-16 rounded-l"
                                      src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/agent-avatar-astra.webp"
                                      alt=""
                                      width="auto"
                                      height="auto"
                                    />
                                    <div>
                                      <div className="text-ui-100 capitalize">
                                        Get Premium
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                              </tr>
                              <tr>
                                <td className="p-0">
                                  <div className="flex items-center gap-4 text-left w-24">
                                    <img
                                      className="w-16 h-16 rounded-l"
                                      src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/agent-avatar-yoru.webp"
                                      alt=""
                                      width="auto"
                                      height="auto"
                                    />
                                    <div>
                                      <div className="text-ui-100 capitalize">
                                        Get Premium
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </LoadMoreContainer>
                  )}
                  {isPremium && (
                    <div className="text-center">
                      <LoadMore className="button-sm button-tertiary" />
                    </div>
                  )}
                </div>
              </section>
              <section className="mb-8">
                <h2 className="h5 mx-4 md:mx-0">Last 20 matches</h2>
                <div className="overflow-x-auto scrollbar-desktop leading-tight pb-4">
                  {StatsValorantDemoLatestMatches.slice(0, maxMap - 1).map(
                    (item, itemIndex) => (
                      <div key={itemIndex} className="mb-2">
                        <div className="flex items-center gap-2 my-2 text-ui-400 text-xs lg:text-sm uppercase mx-4 md:mx-0">
                          <span className="icon icon-calendar-date-2" />
                          <span>{item.date}</span>
                        </div>
                        {item.matches
                          .slice(0, maxMap)
                          .map((match, matchIndex) => (
                            <div
                              key={matchIndex}
                              className="accordion min-w-lg overflow-hidden mb-2"
                            >
                              <Accordion
                                header={
                                  <div
                                    className={`item surface sm:rounded-lg text-center ${
                                      match.hasWon ? "surface-halo halo-l" : ""
                                    }`}
                                  >
                                    <div className="item-image">
                                      <div className="avatar avatar-sm avatar-diamond">
                                        <div>
                                          <img
                                            src={
                                              getAgentByID(
                                                getGeneralStatsByID(
                                                  selectedGeneralStat
                                                )?.agent
                                              ).picturePath
                                            }
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="item-body w-36 flex-none text-left">
                                      <div>
                                        <div className="text-ui-100 capitalize">
                                          {
                                            getAgentByID(
                                              getGeneralStatsByID(
                                                selectedGeneralStat
                                              )?.agent
                                            ).name
                                          }
                                        </div>
                                        <div className="text-ui-300 font-normal capitalize">
                                          {getMapByID(match.map).name} •{" "}
                                          {match.mode}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="item-body flex-0 flex gap-2 items-center justify-around w-48">
                                      {match.mode === "Deathmatch" ? (
                                        <div className="text-2xl text-ui-300 text-center">
                                          {match.placement} place
                                        </div>
                                      ) : (
                                        <>
                                          <div className="text-2xl uppercase w-20 text-center">
                                            {match.hasWon ? (
                                              <span className="text-main">
                                                Victory
                                              </span>
                                            ) : (
                                              <span className="text-ui-300">
                                                Defeat
                                              </span>
                                            )}
                                          </div>
                                          <div className="w-16">
                                            <div className="text-ui-300 text-xl">
                                              <span
                                                className={`${
                                                  match.hasWon
                                                    ? "text-success-300"
                                                    : "text-error-300"
                                                }`}
                                              >
                                                {match.score.team1}
                                              </span>{" "}
                                              -{" "}
                                              <span
                                                className={`${
                                                  !match.hasWon
                                                    ? "text-success-300"
                                                    : "text-error-300"
                                                }`}
                                              >
                                                {match.score.team2}
                                              </span>
                                            </div>
                                            <div className="text-sm text-ui-400 font-normal">
                                              {match.placement} place
                                            </div>
                                          </div>
                                        </>
                                      )}
                                    </div>
                                    <div className="item-body flex-1 flex gap-2 items-center justify-around">
                                      <div>
                                        <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                          {match.time}
                                        </div>
                                        <div>{match.duration}</div>
                                      </div>
                                      <div>
                                        <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                          K/D/A
                                        </div>
                                        <div>
                                          {match.kda.k} - {match.kda.d} -{" "}
                                          {match.kda.a}
                                        </div>
                                      </div>
                                      <div>
                                        <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                          KD
                                        </div>
                                        <div>{match.kd}</div>
                                      </div>
                                      <div>
                                        <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                          ADR
                                        </div>
                                        <div>{match.adr}</div>
                                      </div>
                                      <div>
                                        <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                          ACS
                                        </div>
                                        <div>{match.acs}</div>
                                      </div>
                                      <div>
                                        <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                          HS%
                                        </div>
                                        <div>{match.hs}%</div>
                                      </div>
                                    </div>
                                    <div className="item-actions">
                                      <div>
                                        <span className="icon icon-24 icon-arrow-sm-down" />
                                      </div>
                                    </div>
                                  </div>
                                }
                              >
                                <table className="table table-compact w-full text-center text-xs lg:text-sm">
                                  <tbody>
                                    <tr className="bg-success-300/20 uppercase">
                                      <td className="text-success-300 text-left">
                                        Team 1
                                      </td>
                                      <td></td>
                                      <td>Rank</td>
                                      <td>ACS</td>
                                      <td>K</td>
                                      <td>D</td>
                                      <td>A</td>
                                      <td>+/-</td>
                                      <td>K/D</td>
                                      <td>ADR</td>
                                      <td>HS%</td>
                                      <td>FK</td>
                                      <td>FD</td>
                                      <td>MK</td>
                                      <td>ECO</td>
                                    </tr>
                                    {match.leaderboard.team1.map(
                                      (item, itemIndex) => (
                                        <tr
                                          key={itemIndex}
                                          className={`${
                                            itemIndex === 1
                                              ? "bg-blue-300/10"
                                              : ""
                                          }`}
                                        >
                                          <td className="w-6">
                                            <div className="avatar avatar-xs avatar-diamond ml-1">
                                              <div>
                                                <img
                                                  src={
                                                    getAgentByID(item.agent)
                                                      .picturePath
                                                  }
                                                  alt=""
                                                />
                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <div
                                              className={`flex items-center gap-2 ${
                                                itemIndex === 1
                                                  ? "text-main"
                                                  : "font-normal"
                                              }`}
                                            >
                                              <span className="text-base">
                                                {item.nickname}
                                              </span>
                                              <div className="rounded bg-gradient-to-b from-ui-100/20 to-ui-100/5 text-xs lg:text-sm uppercase p-1">
                                                #{item.tag}
                                              </div>
                                            </div>
                                          </td>
                                          <td className="w-13">
                                            <div
                                              data-tooltip={
                                                getRankByID(item.rank).name
                                              }
                                              className="tooltip-left"
                                            >
                                              <img
                                                className="h-8 mx-auto"
                                                src={
                                                  getRankByID(item.rank)
                                                    .picturePath
                                                }
                                                height="auto"
                                                width="auto"
                                                alt=""
                                              />
                                            </div>
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 20)}
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 20)}
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 20)}
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 20)}
                                          </td>
                                          <td
                                            className={`w-13 ${
                                              item.isPlus
                                                ? "text-success-300"
                                                : "text-error-300"
                                            }`}
                                          >
                                            {item.isPlus ? (
                                              <span>+</span>
                                            ) : (
                                              <span>-</span>
                                            )}
                                            {randomNumberInRange(0, 20)}
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 500)}
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 20)}
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 100)}%
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 10)}
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 5)}
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 5)}
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 100)}
                                          </td>
                                        </tr>
                                      )
                                    )}
                                    <tr className="bg-error-300/20 uppercase">
                                      <td className="text-error-300 text-left">
                                        Team 2
                                      </td>
                                      <td></td>
                                      <td>Rank</td>
                                      <td>ACS</td>
                                      <td>K</td>
                                      <td>D</td>
                                      <td>A</td>
                                      <td>+/-</td>
                                      <td>K/D</td>
                                      <td>ADR</td>
                                      <td>HS%</td>
                                      <td>FK</td>
                                      <td>FD</td>
                                      <td>MK</td>
                                      <td>ECO</td>
                                    </tr>
                                    {match.leaderboard.team2.map(
                                      (item, itemIndex) => (
                                        <tr key={itemIndex}>
                                          <td className="w-6">
                                            <div className="avatar avatar-xs avatar-diamond ml-1">
                                              <div>
                                                <img
                                                  src={
                                                    getAgentByID(item.agent)
                                                      .picturePath
                                                  }
                                                  alt=""
                                                />
                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="flex items-center gap-2 font-normal">
                                              <span className="text-base">
                                                {item.nickname}
                                              </span>
                                              <div className="rounded bg-gradient-to-b from-ui-100/20 to-ui-100/5 text-xs lg:text-sm uppercase p-1">
                                                #{item.tag}
                                              </div>
                                            </div>
                                          </td>
                                          <td className="w-13">
                                            <div
                                              data-tooltip={
                                                getRankByID(item.rank).name
                                              }
                                              className="tooltip-left"
                                            >
                                              <img
                                                className="h-8 mx-auto"
                                                src={
                                                  getRankByID(item.rank)
                                                    .picturePath
                                                }
                                                height="auto"
                                                width="auto"
                                                alt=""
                                              />
                                            </div>
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 20)}
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 20)}
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 20)}
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 20)}
                                          </td>
                                          <td
                                            className={`w-13 ${
                                              item.isPlus
                                                ? "text-success-300"
                                                : "text-error-300"
                                            }`}
                                          >
                                            {item.isPlus ? (
                                              <span>+</span>
                                            ) : (
                                              <span>-</span>
                                            )}
                                            {randomNumberInRange(0, 20)}
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 500)}
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 20)}
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 100)}%
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 10)}
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 5)}
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 5)}
                                          </td>
                                          <td className="w-13">
                                            {randomNumberInRange(0, 100)}
                                          </td>
                                        </tr>
                                      )
                                    )}
                                  </tbody>
                                </table>
                              </Accordion>
                            </div>
                          ))}
                      </div>
                    )
                  )}
                  {!isPremium && (
                    <LoadMoreContainer
                      className="button-sm button-tertiary"
                      label="View more matches"
                    >
                      <div className="mb-2 relative">
                        <div className="absolute z-10 inset-0 bg-gradient-to-b from-ui-900/30 to-ui-900 backdrop-blur-sm flex flex-col items-center justify-center">
                          <p className="text-ui-300 mb-2">
                            Get Premium to see the full overview of your stats.
                          </p>
                          <Link href="/prototype/premium">
                            <button
                              type="button"
                              className="button button-sm button-tertiary"
                            >
                              <span className="icon icon-crown text-premium-500" />
                              <span className="text-premium-500">
                                Get Premium
                              </span>
                            </button>
                          </Link>
                        </div>

                        <div className="h-32 overflow-hidden relative z-0">
                          <div className="flex items-center gap-2 my-2 text-ui-400 text-xs lg:text-sm uppercase mx-4 md:mx-0">
                            <span className="icon icon-calendar-date-2" />
                            <span>NOV 6</span>
                          </div>
                          <div className="item surface sm:rounded-lg text-center surface-halo halo-l mb-2">
                            <div className="item-image">
                              <div className="avatar avatar-sm avatar-diamond">
                                <div>
                                  <img
                                    src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/agent-avatar-neon.webp"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="item-body w-36 flex-none text-left">
                              <div>
                                <div className="text-ui-100 capitalize">
                                  Premium
                                </div>
                                <div className="text-ui-300 font-normal capitalize">
                                  -- • --
                                </div>
                              </div>
                            </div>
                            <div className="item-body flex-0 flex gap-2 items-center justify-around w-48">
                              <div className="text-2xl uppercase w-20 text-center">
                                <span className="text-main">Victory</span>
                              </div>
                              <div className="w-16">
                                <div className="text-ui-300 text-xl">
                                  <span className="text-success-300">--</span> -{" "}
                                  <span className="text-success-300">--</span>
                                </div>
                                <div className="text-sm text-ui-400 font-normal">
                                  -- place
                                </div>
                              </div>
                            </div>
                            <div className="item-body flex-1 flex gap-2 items-center justify-around">
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  --
                                </div>
                                <div>--</div>
                              </div>
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  K/D/A
                                </div>
                                <div>-- - -- - --</div>
                              </div>
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  KD
                                </div>
                                <div>--</div>
                              </div>
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  ADR
                                </div>
                                <div>--</div>
                              </div>
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  ACS
                                </div>
                                <div>--</div>
                              </div>
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  HS%
                                </div>
                                <div>--</div>
                              </div>
                            </div>
                            <div className="item-actions">
                              <div>
                                <span className="icon icon-24 icon-arrow-sm-down" />
                              </div>
                            </div>
                          </div>
                          <div className="item surface sm:rounded-lg text-center surface-halo halo-l mb-2">
                            <div className="item-image">
                              <div className="avatar avatar-sm avatar-diamond">
                                <div>
                                  <img
                                    src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/agent-avatar-astra.webp"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="item-body w-36 flex-none text-left">
                              <div>
                                <div className="text-ui-100 capitalize">
                                  Premium
                                </div>
                                <div className="text-ui-300 font-normal capitalize">
                                  -- • --
                                </div>
                              </div>
                            </div>
                            <div className="item-body flex-0 flex gap-2 items-center justify-around w-48">
                              <div className="text-2xl uppercase w-20 text-center">
                                <span className="text-main">Victory</span>
                              </div>
                              <div className="w-16">
                                <div className="text-ui-300 text-xl">
                                  <span className="text-success-300">--</span> -{" "}
                                  <span className="text-success-300">--</span>
                                </div>
                                <div className="text-sm text-ui-400 font-normal">
                                  -- place
                                </div>
                              </div>
                            </div>
                            <div className="item-body flex-1 flex gap-2 items-center justify-around">
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  --
                                </div>
                                <div>--</div>
                              </div>
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  K/D/A
                                </div>
                                <div>-- - -- - --</div>
                              </div>
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  KD
                                </div>
                                <div>--</div>
                              </div>
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  ADR
                                </div>
                                <div>--</div>
                              </div>
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  ACS
                                </div>
                                <div>--</div>
                              </div>
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  HS%
                                </div>
                                <div>--</div>
                              </div>
                            </div>
                            <div className="item-actions">
                              <div>
                                <span className="icon icon-24 icon-arrow-sm-down" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </LoadMoreContainer>
                  )}
                  {isPremium && (
                    <div className="text-center">
                      <LoadMore className="button-sm button-tertiary" />
                    </div>
                  )}
                </div>
              </section>
              <section className="mb-8">
                <h2 className="h5 mx-4 md:mx-0">Weapons</h2>
                <div className="overflow-x-auto scrollbar-desktop pb-4 px-2 md:px-0">
                  <table
                    className={`table table-rounded rounded-lg w-full text-center min-w-lg ${
                      loading ? "is-loading" : ""
                    }`}
                  >
                    <tbody className="child:overflow-hidden leading-tight">
                      <tr>
                        <td className="w-76 surface-halo halo-l overflow-hidden">
                          <div className="flex items-center gap-4 text-left relative">
                            <img
                              className="absolute z-0 -inset-y-4 -left-5 h-[calc(100%+2rem)] object-cover"
                              src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/map-overlay-left.svg"
                              alt=""
                              width="auto"
                              height="auto"
                            />
                            <img
                              className="absolute z-0 -inset-y-4 right-0 h-[calc(100%+2rem)] object-cover -scale-y-100 -scale-x-100"
                              src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/map-overlay-left.svg"
                              alt=""
                              width="auto"
                              height="auto"
                            />
                            <div className="relative z-10 text-right w-52">
                              <img
                                className="drop-shadow-xl max-h-[60px]"
                                src={
                                  getWeaponByID(selectedStat.topweapon)
                                    .picturePath
                                }
                                alt=""
                                width="100%"
                                height="auto"
                              />
                            </div>
                            <div className="relative z-10">
                              <div className="text-ui-100 uppercae">
                                Top weapon
                              </div>
                              <div className="text-2xl uppercase text-main">
                                {getWeaponByID(selectedStat.topweapon).name}
                              </div>
                              <div className="font-normal text-ui-300 capitalize">
                                {getWeaponByID(selectedStat.topweapon).type}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="w-52">
                          <div className="text-ui-400 text-xs lg:text-sm uppercase">
                            Kills
                          </div>
                          <div>372</div>
                        </td>
                        <td className="w-52">
                          <div className="text-ui-400 text-xs lg:text-sm uppercase">
                            Deaths
                          </div>
                          <div>41</div>
                        </td>
                        <td className="w-52">
                          <div className="text-ui-400 text-xs lg:text-sm uppercase">
                            Longest kill distance
                          </div>
                          <div>46M</div>
                        </td>
                        {/*
                        <td>
                          <div className="text-ui-400 text-xs lg:text-sm uppercase">
                            Headshots %
                          </div>
                          <div>43.4%</div>
                        </td>
                        <td>
                          <div className="text-ui-400 text-xs lg:text-sm uppercase">
                            Damage/round
                          </div>
                          <div>76.9</div>
                        </td>
                        <td>
                          <div className="text-ui-400 text-xs lg:text-sm uppercase">
                            Kills/round
                          </div>
                          <div>0.65</div>
                        </td>
                        
                              */}
                      </tr>
                    </tbody>
                  </table>
                  <table
                    className={`table table-rounded rounded-lg w-full text-center min-w-lg ${
                      loading ? "is-loading" : ""
                    }`}
                  >
                    <thead>
                      <tr className="text-ui-400">
                        <th className="w-76 text-left">Weapon</th>
                        <th className="w-52">Kills</th>
                        <th className="w-52">Deaths</th>
                        <th className="w-52">Longest kill distance</th>
                        {/*
                        <th>Headshots %</th>
                        <th>Damage/round</th>
                        <th>Kills/round</th>
                        
                  */}
                      </tr>
                    </thead>
                    <tbody className="child:overflow-hidden leading-tight">
                      {StatsValorantDemoWeapons.slice(0, maxMap - 1).map(
                        (item, itemIndex) => (
                          <tr key={itemIndex}>
                            <td className="w-76 h-20">
                              <div className="flex items-center gap-4 text-left">
                                <div className="w-52">
                                  <img
                                    className="drop-shadow-lg mx-auto"
                                    src={getWeaponByID(item.weapon).picturePath}
                                    alt=""
                                    width="75"
                                    height="auto"
                                  />
                                </div>
                                <div>
                                  <div className="text-ui-100 capitalize">
                                    {getWeaponByID(item.weapon).name}
                                  </div>
                                  <div className="font-normal text-ui-300 capitalize">
                                    {getWeaponByID(item.weapon).type}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="w-52">{item.kills}</td>
                            <td className="w-52">{item.deaths}</td>
                            <td className="w-52">{item.killdistance}M</td>
                            {/*
                          <td>{item.headshots}%</td>
                          <td>{item.damageround}</td>
                          <td>{item.killsround}</td>
                          
                      */}
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                  {!isPremium && (
                    <LoadMoreContainer
                      className="button-sm button-tertiary"
                      label="View more weapons"
                    >
                      <div className="relative mb-2 -mt-2">
                        <div className="absolute z-10 inset-0 bg-gradient-to-b from-ui-900/30 to-ui-900 backdrop-blur-sm flex flex-col items-center justify-center">
                          <p className="text-ui-300 mb-2">
                            Get Premium to see the full overview of your stats.
                          </p>
                          <Link href="/prototype/premium">
                            <button
                              type="button"
                              className="button button-sm button-tertiary"
                            >
                              <span className="icon icon-crown text-premium-500" />
                              <span className="text-premium-500">
                                Get Premium
                              </span>
                            </button>
                          </Link>
                        </div>
                        <div className="h-32 overflow-hidden">
                          <table
                            className={`table table-rounded rounded-lg w-full text-center min-w-lg blur-sm ${
                              loading ? "is-loading" : ""
                            }`}
                          >
                            <tbody className="child:overflow-hidden leading-tight">
                              <tr>
                                <td className="w-76 h-20">
                                  <div className="flex items-center gap-4 text-left">
                                    <div className="w-52">
                                      <img
                                        className="drop-shadow-lg mx-auto"
                                        src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/weapon-stinger.webp"
                                        alt=""
                                        width="75"
                                        height="auto"
                                      />
                                    </div>
                                    <div>
                                      <div className="text-ui-100 capitalize">
                                        Premium
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="w-52">--</td>
                                <td className="w-52">--</td>
                                <td className="w-52">--</td>
                              </tr>
                              <tr>
                                <td className="w-76 h-20">
                                  <div className="flex items-center gap-4 text-left">
                                    <div className="w-52">
                                      <img
                                        className="drop-shadow-lg mx-auto"
                                        src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/weapon-bucky.webp"
                                        alt=""
                                        width="75"
                                        height="auto"
                                      />
                                    </div>
                                    <div>
                                      <div className="text-ui-100 capitalize">
                                        Premium
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="w-52">--</td>
                                <td className="w-52">--</td>
                                <td className="w-52">--</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </LoadMoreContainer>
                  )}
                  {isPremium && (
                    <div className="text-center">
                      <LoadMore className="button-sm button-tertiary" />
                    </div>
                  )}
                </div>
              </section>
              <section className="mb-8">
                <h2 className="h5 mx-4 md:mx-0">Maps</h2>
                <div className="overflow-x-auto scrollbar-desktop pb-4 px-2 md:px-0">
                  <table
                    className={`table table-rounded rounded-lg w-full text-center min-w-lg ${
                      loading ? "is-loading" : ""
                    }`}
                  >
                    <thead>
                      <tr className="text-ui-400">
                        <th className="text-left" colSpan={2}>
                          Map
                        </th>
                        <th>Win %</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>K/D</th>
                        <th>ADR</th>
                        <th>ACS</th>
                      </tr>
                    </thead>
                    <tbody className="child:overflow-hidden leading-tight">
                      {StatsValorantDemoMaps.slice(0, maxMap).map(
                        (item, itemIndex) => (
                          <tr key={itemIndex}>
                            <td className="text-left capitalize w-36">
                              {getMapByID(item.map).name}
                            </td>
                            <td className="p-0 relative w-72 h-24">
                              <span className="absolute z-10 inset-y-0 left-0 w-12 bg-gradient-to-r from-ui-800 to-ui-800/0" />
                              <span className="absolute z-10 inset-y-0 right-0 w-12 bg-gradient-to-l from-ui-800 to-ui-800/0" />
                              <img
                                className="absolute z-20 inset-y-0 -left-8 h-full object-cover"
                                src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/map-overlay-left.svg"
                                alt=""
                                width="auto"
                                height="auto"
                              />
                              <img
                                className="absolute z-20 inset-y-0 -right-8 h-full object-cover -scale-y-100 -scale-x-100"
                                src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/map-overlay-left.svg"
                                alt=""
                                width="auto"
                                height="auto"
                              />
                              <img
                                className="absolute inset-0 h-full w-full object-cover"
                                src={getMapByID(item.map).picturePath}
                                alt=""
                                width="auto"
                                height="auto"
                              />
                            </td>
                            <td>{item.winpercent}</td>
                            <td>{item.wins}</td>
                            <td>{item.losses}</td>
                            <td>{item.kd}</td>
                            <td>{item.adr}</td>
                            <td>{item.acs}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                  {!isPremium && (
                    <LoadMoreContainer
                      className="button-sm button-tertiary"
                      label="View more maps"
                    >
                      <div className="relative mb-2 -mt-2">
                        <div className="absolute z-10 inset-0 bg-gradient-to-b from-ui-900/30 to-ui-900 backdrop-blur-sm flex flex-col items-center justify-center">
                          <p className="text-ui-300 mb-2">
                            Get Premium to see the full overview of your stats.
                          </p>
                          <Link href="/prototype/premium">
                            <button
                              type="button"
                              className="button button-sm button-tertiary"
                            >
                              <span className="icon icon-crown text-premium-500" />
                              <span className="text-premium-500">
                                Get Premium
                              </span>
                            </button>
                          </Link>
                        </div>
                        <div className="h-32 overflow-hidden blur-sm">
                          <table className="table table-rounded rounded-lg w-full text-center min-w-lg pointer-events-none">
                            <tbody className="child:overflow-hidden leading-tight">
                              <tr>
                                <td className="text-left capitalize w-36">
                                  Premium
                                </td>
                                <td className="p-0 relative w-72 h-24">
                                  <span className="absolute z-10 inset-y-0 left-0 w-12 bg-gradient-to-r from-ui-800 to-ui-800/0" />
                                  <span className="absolute z-10 inset-y-0 right-0 w-12 bg-gradient-to-l from-ui-800 to-ui-800/0" />
                                  <img
                                    className="absolute z-20 inset-y-0 -left-8 h-full object-cover"
                                    src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/map-overlay-left.svg"
                                    alt=""
                                    width="auto"
                                    height="auto"
                                  />
                                  <img
                                    className="absolute z-20 inset-y-0 -right-8 h-full object-cover -scale-y-100 -scale-x-100"
                                    src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/map-overlay-left.svg"
                                    alt=""
                                    width="auto"
                                    height="auto"
                                  />
                                  <img
                                    className="absolute inset-0 h-full w-full object-cover"
                                    src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/map-split.webp"
                                    alt=""
                                    width="auto"
                                    height="auto"
                                  />
                                </td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                              </tr>
                              <tr>
                                <td className="text-left capitalize w-36">
                                  Premium
                                </td>
                                <td className="p-0 relative w-72 h-24">
                                  <span className="absolute z-10 inset-y-0 left-0 w-12 bg-gradient-to-r from-ui-800 to-ui-800/0" />
                                  <span className="absolute z-10 inset-y-0 right-0 w-12 bg-gradient-to-l from-ui-800 to-ui-800/0" />
                                  <img
                                    className="absolute z-20 inset-y-0 -left-8 h-full object-cover"
                                    src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/map-overlay-left.svg"
                                    alt=""
                                    width="auto"
                                    height="auto"
                                  />
                                  <img
                                    className="absolute z-20 inset-y-0 -right-8 h-full object-cover -scale-y-100 -scale-x-100"
                                    src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/map-overlay-left.svg"
                                    alt=""
                                    width="auto"
                                    height="auto"
                                  />
                                  <img
                                    className="absolute inset-0 h-full w-full object-cover"
                                    src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/map-bind.webp"
                                    alt=""
                                    width="auto"
                                    height="auto"
                                  />
                                </td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                                <td>--</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </LoadMoreContainer>
                  )}
                  {isPremium && (
                    <div className="text-center">
                      <LoadMore className="button-sm button-tertiary" />
                    </div>
                  )}
                </div>
              </section>
            </>
          )}
          {/* for demo purposes only */}
          <section className="text-ui-100/0 hover:text-ui-100 inline-flex flex-col">
            <a onClick={switchVariants}>Switch between various users</a>
            <a
              onClick={() => {
                setIsEmpty(false);
                setHasRiot(!hasRiot);
              }}
            >
              Toggle has Riot {hasRiot ? "ON" : "OFF"}
            </a>
            <a
              onClick={() => {
                setIsEmpty(!isEmpty);
                setHasRiot(true);
              }}
            >
              Toggle empty state {isEmpty ? "ON" : "OFF"}
            </a>
            <a onClick={() => prototype.togglePremium()}>
              Toggle Premium state {prototype.isPremium ? "ON" : "OFF"}
            </a>
          </section>
        </>
      )}
    </>
  );
}
