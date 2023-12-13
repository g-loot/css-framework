import React, { useEffect, useState, useContext } from "react";

import Link from "next/link";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import ModalAchievementReceived from "../../modal-achievementreceived";
import LadderCardSecondary from "../../../../components/Ladder/LadderCardSecondary";
import AchievementFrame from "../../../../components/Achievements/AchievementFrame";
import AchievementIcon from "../../../../components/Achievements/AchievementIcon";
import CardMissionSecondary from "../../../../components/Card/CardMissionSecondary";
import Avatar from "../../../../components/Avatar/Avatar";
import Video from "../../components/Video";
import FeedItem from "../../components/FeedItem";
import GameIcon from "@/components/GameIcon/GameIcon";

export default function TabProfileFeed() {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [selectedUser, setSelectedUser] = useState(null);
  const { user_id } = router.query;
  const empty = query.empty === "true" ? true : false;
  const [isEmpty, setIsEmpty] = useState(empty);
  const { game } = router.query;

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(user_id));
  }, [user_id]);

  function openModalAchievementReceived(item) {
    uiContext.openModal(<ModalAchievementReceived item={item} />);
  }

  return (
    <>
      {selectedUser && (
        <>
          <div className="flex items-start gap-8">
            <div className="flex-1 space-y-4">
              {prototype.getUserFeedItems(selectedUser.id).length === 0 ||
              isEmpty ? (
                <>
                  <div className="px-4 py-24 text-center">
                    <div className="max-w-xs mx-auto">
                      <span className="icon icon-file-article text-6xl text-ui-500" />
                      {selectedUser.isYou ? (
                        <>
                          <div className="mt-2 mb-6">
                            <p className="text-sm text-ui-400">
                              You have no posts here yet.
                            </p>
                            <p className="text-lg text-ui-300">
                              Make sure Stryda is up and running when you play
                              and that you have connected your game accounts to
                              Stryda.
                            </p>
                          </div>
                          <Link href="/stryda/profile/settings?tab=game-accounts">
                            <a className="button button-main">
                              <span>Connect games</span>
                            </a>
                          </Link>
                        </>
                      ) : (
                        <div className="mt-2 mb-6">
                          <p className="text-lg text-ui-300">
                            {selectedUser.nickname} has no posts here yet.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {prototype
                    .getUserFeedItems(selectedUser.id)
                    .map((item, itemIndex) => (
                      <FeedItem
                        item={item}
                        key={itemIndex}
                        autoPlay={false}
                        stateFeedAd={true}
                      />
                    ))}
                </>
              )}
            </div>
            <div className="w-80 hidden lg:block space-y-4">
              {!prototype.isPremium && (
                <div className="sticky top-12 space-y-4 text-center mb-4">
                  <div className="bg-ui-800/75 border border-ui-700 w-full aspect-square rounded flex flex-col items-center justify-center">
                    {/* Replace the following div by the display ad */}
                    <div>
                      <div>Ad</div>
                      <div className="text-sm">Max width: 320px</div>
                    </div>
                  </div>
                  <Link href={`/stryda/premium`}>
                    <span className="link link-main text-sm">Remove ads</span>
                  </Link>
                </div>
              )}
              {/* <div className="surface rounded">
                <div className="flex items-baseline justify-between border-b border-b-ui-700 px-3 py-2">
                  <Link href={`/stryda/ladders${prototype.getURLparams()}`}>
                    <h2 className="text-base text-ui-100 interactive">
                      Recent Ladders
                    </h2>
                  </Link>
                </div>
                {!selectedUser.ladders ||
                selectedUser.ladders?.length === 0 ||
                isEmpty ? (
                  <>
                    {selectedUser.isYou ? (
                      <div className="bg-ui-850 p-4">
                        <button
                          type="button"
                          className="rounded-4 overflow-hidden surface interactive"
                          onClick={() =>
                            openModalVideoYoutubePlayer("Wso2JUKPP8o")
                          }
                        >
                          <iframe
                            className="mx-auto aspect-video pointer-events-none"
                            width="100%"
                            height="auto"
                            src="https://www.youtube.com/embed/Wso2JUKPP8o?autoplay=0&rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </button>

                        <p className="mt-3 mb-4">
                          Have some fun and climb the leaderboards. Enter a
                          Ladder with a Clan or fight solo. Your choice!
                        </p>
                        <Link
                          href={`/stryda/ladders${prototype.getURLparams()}`}
                        >
                          <button
                            type="button"
                            className="button button-primary"
                          >
                            <span>Explore Ladders</span>
                          </button>
                        </Link>
                      </div>
                    ) : (
                      <div className="text-center p-4">
                        <span className="icon icon-ladder text-6xl text-ui-500" />
                        <p className="mt-2 text-ui-300">
                          {selectedUser.nickname} has not entered any Ladders.
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="bg-ui-850">
                    <ul className="p-2 space-y-2">
                      {selectedUser.ladders?.map((ladder, ladderIndex) => (
                        <Link
                          key={ladderIndex}
                          href={`/stryda/${
                            prototype.getGameBySlug(ladder.gameSlug).slug
                          }/ladders/${
                            ladder.id
                          }?tab=clan-leaderboard${prototype.getURLparams("&")}`}
                        >
                          <div className="rounded surface surface-ui-600 overflow-hidden interactive">
                            {prototype.getLadderByID(ladder.gameSlug, ladder.id)
                              ?.hasClaim && (
                              <div className="card-overlay">
                                <div>
                                  <button
                                    type="button"
                                    className="button button-primary"
                                    onClick={() =>
                                      openmodalLadderResults(
                                        prototype.getLadderByID(
                                          ladder.gameSlug,
                                          ladder.id
                                        )
                                      )
                                    }
                                  >
                                    <span>View results</span>
                                  </button>
                                </div>
                              </div>
                            )}
                            <div className="relative">
                              <div className="absolute top-1 left-1">
                                <div className="rounded bg-ui-800/90 p-px pr-2 flex gap-1 items-center text-xs text-ui-200">
                                  <GameIcon
                                    game={
                                      prototype.getGameBySlug(ladder.gameSlug)
                                        .id
                                    }
                                    size="text-lg"
                                  />
                                  <span>
                                    {
                                      prototype.getLadderByID(
                                        ladder.gameSlug,
                                        ladder.id
                                      ).gameMode
                                    }
                                  </span>
                                  {prototype.getLadderByID(
                                    ladder.gameSlug,
                                    ladder.id
                                  ).status !== "finished" && (
                                    <span
                                      className={`text-main card-status capitalize animate-pulse`}
                                    >
                                      {prototype.getLadderByID(
                                        ladder.gameSlug,
                                        ladder.id
                                      ).isEnrolled ? (
                                        <>Enrolled</>
                                      ) : (
                                        <>
                                          {
                                            prototype.getLadderByID(
                                              ladder.gameSlug,
                                              ladder.id
                                            ).status
                                          }
                                        </>
                                      )}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <img
                                src={
                                  prototype.getLadderByID(
                                    ladder.gameSlug,
                                    ladder.id
                                  ).cover
                                }
                                className="aspect-cover object-cover"
                                alt=""
                              />
                            </div>
                            <div className="p-2 border-t border-ui-500 flex justify-between items-baseline gap-2">
                              <p className="truncate flex-1">
                                {
                                  prototype.getLadderByID(
                                    ladder.gameSlug,
                                    ladder.id
                                  ).name
                                }
                              </p>
                              <p className="text-ui-100">
                                #
                                {Math.floor(Math.random() * (201 - 2 + 1)) + 2}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
              </div> */}
            </div>
          </div>

          {/* for demo purposes only */}
          {prototype.showDemo && (
            <section className="fixed z-[9999] bottom-4 left-4 surface-ui-500 rounded shadow-md p-4 pr-16 text-sm text-ui-100 flex flex-col items-start">
              <div className="absolute top-1 right-1">
                <button
                  type="button"
                  className="button button-sm button-secondary button-close"
                  onClick={() => prototype.setShowDemo(!prototype.showDemo)}
                >
                  <span className="icon icon-e-remove" />
                </button>
              </div>
              <div className="form-group pl-4">
                <div className="form-xs form-toggle">
                  <input
                    type="checkbox"
                    name="feed"
                    id="state-premium"
                    defaultChecked={prototype.isPremium}
                    onClick={() => prototype.togglePremium()}
                  />
                  <label htmlFor="state-premium">Premium State</label>
                </div>
              </div>
              <div className="form-group pl-4">
                <div className="form-xs form-toggle">
                  <input
                    type="checkbox"
                    name="feed"
                    id="state-empty"
                    defaultChecked={isEmpty}
                    onClick={() => setIsEmpty(!isEmpty)}
                  />
                  <label htmlFor="state-empty">Empty State</label>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}
