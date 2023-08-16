import React, { useContext, useState, useEffect } from "react";

import { UiContext } from "@/contexts/ui.js";
import { usePrototypeData } from "@/contexts/prototype.js";
import { VariablesContext } from "@/contexts/variables.js";
import { useRouter } from "next/router";
import ResetsIn from "../../../../components/Countdown/ResetsIn.js";
import Tooltip from "../../../../components/Tooltip/Tooltip.js";

export default function ModalClanEventOnboarding(props) {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const hasAds = query.ads === "true" ? true : false;
  const { tab } = router.query;
  const [submitting, setSubmitting] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const leaderboard_id = props.id || 0;
  const [selectedLeaderboard, setSelectedLeaderboard] = useState(null);
  const { game } = router.query;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);

  useEffect(() => {
    setSelectedLeaderboard(
      prototype.getClanLeaderboardByID(game, leaderboard_id)
    );
  }, [leaderboard_id]);

  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      variablesContext.clanEventEnroll();
      uiContext.openToastr({
        size: "medium",
        text: "You have successfully enrolled your Clan to the Clan Event",
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
      variablesContext.incrementLadderStep(props.incrementNumber);
      uiContext.closeModal();
      setSubmitting(false);
    }, 1000);
  }

  return (
    <>
      {selectedLeaderboard && (
        <div className="relative z-10">
          <div className="modal modal-center w-full max-w-xl">
            <button
              type="button"
              className="button button-secondary button-close"
              onClick={uiContext.closeModal}
            >
              <span className="icon icon-e-remove" />
            </button>
            <div className="modal-content">
              <div className="modal-body">
                <h2 className="modal-title">Welcome to Clan Events</h2>
                <p>Play with your Clan and compete against other Clans.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-4 max-w-md mx-auto child:animate-delay">
                  <div className="flex-1 animate-fade-in">
                    <div className="w-full rounded border border-ui-700 bg-ui-850 mb-2 relative">
                      <img
                        src="https://res.cloudinary.com/gloot/image/upload/v1692100062/Stryda/illustrations/Clan_Season_onboarding_1.png"
                        alt=""
                      />
                    </div>
                    <div className="px-4 leading-tight">
                      Create a party in VALORANT with{" "}
                      <span className="text-ui-100">5 Clan members</span>.
                    </div>
                  </div>
                  {selectedLeaderboard.meta.eligibility.countries && (
                    <div className="flex-1 animate-fade-in">
                      <div className="w-full rounded border border-ui-700 bg-ui-850 mb-2 relative">
                        <div className="absolute inset-0 grid place-content-center p-8">
                          <div className="inline-flex flex-wrap items-center justify-center gap-2">
                            {selectedLeaderboard.meta.eligibility.countries?.map(
                              (country, countryIndex) => (
                                <Tooltip
                                  key={countryIndex}
                                  placement="top"
                                  tooltip={country.name}
                                >
                                  <img
                                    src={`https://flagcdn.com/${country.flag}.svg`}
                                    className="inline h-8 w-auto rounded object-contain object-center"
                                  />
                                </Tooltip>
                              )
                            )}
                          </div>
                        </div>
                        <img
                          src="https://res.cloudinary.com/gloot/image/upload/v1692100487/Stryda/illustrations/Clan_Season_onboarding_bg.png"
                          alt=""
                        />
                      </div>
                      <div className="px-4 leading-tight">
                        At least 3 of the party members have to be from the{" "}
                        <Tooltip
                          tooltip={
                            <ul className="max-w-xs text-sm text-ui-200 leading-tight normal-case space-y-2">
                              {selectedLeaderboard.meta.eligibility.countries.map(
                                (country, countryIndex) => (
                                  <li
                                    key={countryIndex}
                                    className="whitespace-nowrap pr-1 flex items-center gap-2"
                                  >
                                    <img
                                      src={`https://flagcdn.com/${country.flag}.svg`}
                                      className="inline rounded-[1px] w-auto h-3.5 mx-0.5"
                                    />{" "}
                                    <span>{country.name}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          }
                        >
                          <span className="interactive">
                            <span className="underline text-ui-100">
                              Nordics
                            </span>{" "}
                            <button className="text-ui-300 text-0 translate-y-0.5">
                              <span className="icon icon-16 icon-c-info" />
                            </button>
                          </span>
                        </Tooltip>
                        .
                      </div>
                    </div>
                  )}
                  {selectedLeaderboard.meta.eligibility.ranks && (
                    <div className="flex-1 animate-fade-in">
                      <div className="w-full rounded border border-ui-700 bg-ui-850 mb-2 relative">
                        <div className="absolute inset-0 grid place-content-center p-8">
                          <div className="inline-flex flex-wrap items-center justify-center gap-2">
                            {selectedLeaderboard.meta.eligibility.ranks?.map(
                              (rank, rankIndex) => (
                                <Tooltip
                                  key={rankIndex}
                                  placement="top"
                                  tooltip={rank.name}
                                >
                                  <img
                                    src={rank.image}
                                    className="inline w-20 h-20 object-contain object-center"
                                  />
                                </Tooltip>
                              )
                            )}
                          </div>
                        </div>
                        <img
                          src="https://res.cloudinary.com/gloot/image/upload/v1692100487/Stryda/illustrations/Clan_Season_onboarding_bg.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="px-4 leading-tight">
                          Each member of your party has to be part of{" "}
                          <Tooltip
                            tooltip={
                              <ul className="max-w-xs text-sm text-ui-200 leading-tight normal-case space-y-2">
                                {selectedLeaderboard.meta.eligibility.ranks?.map(
                                  (rank, rankIndex) => (
                                    <li
                                      key={rankIndex}
                                      className="whitespace-nowrap pr-1 flex items-center gap-2"
                                    >
                                      <img
                                        src={rank.image}
                                        className="h-10 w-10 mx-0.5"
                                      />{" "}
                                      <span>{rank.name}</span>
                                    </li>
                                  )
                                )}
                              </ul>
                            }
                          >
                            <span className="interactive">
                              <span className="underline text-ui-100">
                                specific ranks
                              </span>{" "}
                              <button className="text-ui-300 text-0 translate-y-0.5">
                                <span className="icon icon-16 icon-c-info" />
                              </button>
                            </span>
                          </Tooltip>
                          .
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex-1 animate-fade-in">
                    <div className="w-full rounded border border-ui-700 bg-ui-850 mb-2 relative">
                      <img
                        src="https://res.cloudinary.com/gloot/image/upload/v1692100062/Stryda/illustrations/Clan_Season_onboarding_4.png"
                        alt=""
                      />
                    </div>
                    <div className="px-4 leading-tight">
                      <span className="text-ui-100">Win as many matches</span>{" "}
                      to climb the leaderboard.
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-action">
                <button
                  type="button"
                  className={`button button-primary`}
                  onClick={uiContext.closeModal}
                >
                  <span>Explore Clan event</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
