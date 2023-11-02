import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Avatar from "@/components/Avatar/Avatar";
import Link from "next/link";
import FeedItemComments from "./FeedItemComments";
import ReadMore from "@/components/ReadMore/ReadMore";
import LottieExplosion from "@/assets/animations/explosion_stryda_1.json";
import CardLadder from "./CardLadder";
import Slider from "@/components/Slider/Slider";
import GameIcon from "@/components/GameIcon/GameIcon";
import Tooltip from "@/components/Tooltip/Tooltip";
import Lottie from "lottie-react";

export default function FeedItemLadders(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  return (
    <>
      {item && (
        <div className="surface sm:rounded w-full text-0">
          <div className="p-3 flex items-center gap-3 leading-tight text-base">
            <div className="avatar avatar-sm avatar-circle avatar-simple">
              <div>
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1694461366/Stryda/demo/stryda-logo.jpg"
                  alt="avatar"
                />
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="truncate p-1">
                <span className={`interactive truncate`}>Stryda</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-ui-300 px-1">
                <span>2 min. ago</span>
              </div>
            </div>
          </div>
          {item.ladders.length > 1 ? (
            <>
              <div className="px-4 pb-4 space-y-2 text-base">
                <p className="text-ui-300">
                  We thought you might be interested in joining these Ladders 🏆
                </p>
              </div>
              <div className="rounded-b bg-ui-850 border-t border-ui-700">
                <Slider
                  paddingLeft="pl-4"
                  itemWidth={397 + 16}
                  bgColor="from-ui-850 via-ui-850/90 to-ui-850/0"
                >
                  {item.ladders.map((item, itemIndex) => (
                    <CardLadder
                      key={itemIndex}
                      ladder={prototype.getLadderByID(item.game, item.id)}
                      game_slug={item.game_slug}
                      isHorizontal={false}
                      isClan={false}
                      size="card-sm"
                    />
                  ))}
                </Slider>
              </div>
            </>
          ) : (
            <>
              <Link
                href={`/stryda/ladders/${item.ladders[0].game}/${
                  item.ladders[0].id
                }${prototype.getURLparams()}`}
              >
                <div className="interactive">
                  <div className="aspect-cover relative overflow-hidden border-y border-ui-700">
                    <div className="absolute top-4 left-4 rounded bg-ui-800/90 p-0.5 pr-3 flex gap-2 items-center text-ui-200 text-sm">
                      <GameIcon
                        game={prototype.getGameBySlug(item.ladders[0].game).id}
                      />
                      <span>
                        {
                          prototype.getLadderByID(
                            item.ladders[0].game,
                            item.ladders[0].id
                          ).gameMode
                        }
                      </span>
                      {prototype.getLadderByID(
                        item.ladders[0].game,
                        item.ladders[0].id
                      ).status !== "finished" ||
                        (prototype.getLadderByID(
                          item.ladders[0].game,
                          item.ladders[0].id
                        ).hasClaim &&
                          selectedUser.isYou && (
                            <span
                              className={`text-main card-status capitalize`}
                            >
                              {prototype.getLadderByID(
                                item.ladders[0].game,
                                item.ladders[0].id
                              ).isEnrolled && selectedUser.isYou ? (
                                <>Enrolled</>
                              ) : (
                                <>
                                  {
                                    prototype.getLadderByID(
                                      item.ladders[0].game,
                                      item.ladders[0].id
                                    ).status
                                  }
                                </>
                              )}
                            </span>
                          ))}
                    </div>
                    <img
                      src={
                        prototype.getLadderByID(
                          item.ladders[0].game,
                          item.ladders[0].id
                        ).cover
                      }
                      alt=""
                    />
                  </div>
                  <div className="p-4 text-base relative">
                    <div className="flex items-start justify-between">
                      <h4 className="text-lg md:text-xl font-bold text-ui-100">
                        {
                          prototype.getLadderByID(
                            item.ladders[0].game,
                            item.ladders[0].id
                          ).name
                        }
                      </h4>
                      {prototype.getLadderByID(
                        item.ladders[0].game,
                        item.ladders[0].id
                      ).isPremium && (
                        <Tooltip
                          placement="top"
                          tooltip={
                            <div className="w-56 flex items-center gap-4 text-sm">
                              <div className="relative">
                                <span className="icon icon-crown text-6xl text-premium-500" />
                                <div className="lottie-premium absolute -inset-1">
                                  <Lottie
                                    animationData={LottieExplosion}
                                    loop={false}
                                    autoplay={true}
                                  />
                                </div>
                              </div>
                              <div className="flex-1">
                                This Ladder is available for{" "}
                                <span className="text-premium-500">
                                  Premium members
                                </span>{" "}
                                only.
                              </div>
                            </div>
                          }
                        >
                          <Link href="/stryda/premium">
                            <button
                              type="button"
                              className="button button-ghost rounded-full absolute top-1 right-1"
                            >
                              <span className="icon icon-crown text-premium-500 text-2xl" />
                            </button>
                          </Link>
                        </Tooltip>
                      )}
                    </div>
                    <p className="text-ui-300 mt-2 mb-3">
                      The Ladder has started.{" "}
                      {prototype.getLadderByID(
                        item.ladders[0].game,
                        item.ladders[0].id
                      ).isPremium ? (
                        <>
                          Get{" "}
                          <Link
                            href={`/stryda/premium${prototype.getURLparams()}`}
                          >
                            <span className="link link-premium">Premium</span>
                          </Link>{" "}
                          and join to win cool prizes and climb the leaderboard.
                        </>
                      ) : (
                        <> Join to win cool prizes and climb the leaderboard.</>
                      )}
                    </p>
                    <button
                      type="button"
                      className={`button button-sm ${
                        prototype.getLadderByID(
                          item.ladders[0].game,
                          item.ladders[0].id
                        ).isPremium
                          ? "button-premium"
                          : "button-primary"
                      }`}
                    >
                      <span>Go to Ladder</span>
                    </button>
                  </div>
                </div>
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
}
