import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Avatar from "@/components/Avatar/Avatar";
import Link from "next/link";
import FeedItemComments from "./FeedItemComments";
import ReadMore from "@/components/ReadMore/ReadMore";
import CardLadder from "./CardLadder";
import Slider from "@/components/Slider/Slider";
import GameIcon from "@/components/GameIcon/GameIcon";

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
                  <div className="px-4 pb-4 text-base">
                    <h4 className="text-lg md:text-xl font-bold text-ui-100">
                      {
                        prototype.getLadderByID(
                          item.ladders[0].game,
                          item.ladders[0].id
                        ).name
                      }
                    </h4>
                    <p className="text-ui-300 mt-2 mb-3">
                      The Ladder has started. Join to win cool prizes and climb
                      the leaderboard.
                    </p>
                    <button
                      type="button"
                      className="button button-primary button-sm"
                    >
                      <span>Go to Ladder</span>
                    </button>
                  </div>
                  <div className="aspect-cover relative rounded-b overflow-hidden">
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
                </div>
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
}
