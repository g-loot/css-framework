import React, { useContext, useEffect, useState } from "react";

import { useRouter } from "next/router";
import BrawlCardSecondary from "../../../components/Brawl/BrawlCardSecondary";
import Slider from "../../../components/Slider/Slider";
import { UiContext } from "../../../contexts/ui";
import { VariablesContext } from "../../../contexts/variables";
import { usePrototypeData } from "../../../contexts/prototype";
import Tooltip from "../../../components/Tooltip/Tooltip";
import CardMission from "../../../components/Card/CardMission";

export default function HomeBrawlMissions(props) {
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);

  const [submitting, setSubmitting] = useState(false);

  function addToastWithDelay(toast) {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr(toast);
      setSubmitting(false);
    }, 1000);
  }

  return (
    <section
      className="py-8 animate-slide-in-bottom animate-delay"
      style={{ "--delay": "calc(2 * 0.05s)" }}
    >
      <div className="flex items-center justify-between mb-1 mx-4 sm:mx-0">
        <h3 className="h6">
          Daily missions in {prototype.getGameBySlug(props.gameSlug)?.name}
        </h3>
        <div className="hidden sm:flex items-center gap-2">
          <div
            className="tooltip tooltip-left"
            data-tooltip="This might take up to 15 minutes. Make sure the match you’re trying to fetch is 100% completed."
          >
            <button
              className={`button button-xs button-secondary ${
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
              <span className="hidden sm:block">Request a stats update</span>
              <span className="block sm:hidden">Update</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4 mx-4 sm:mx-0">
        <div>
          <div className="text-sm text-ui-300">
            New missions in <b>4H 23M 12S</b>
          </div>
        </div>
        <div className="flex items-center gap-2"></div>
      </div>
      {prototype.getGameBySlug(props.gameSlug)?.needsSteam && (
        <>
          <div className="px-4 sm:px-0">
            <div className="alert mb-4">
              <div>
                <span className="icon icon-24 icon-c-info" />
                <div>
                  <div className="font-bold uppercase">
                    New &amp; improved stats tracking:
                  </div>
                  <p className="max-w-[80ch] text-ui-300">
                    This will affect the way you get progress in your Daily
                    Missions. You will now progress in the Missions once the
                    full match in PUBG BATTLEGROUNDS is completed, you will get
                    your points.
                  </p>
                </div>
              </div>
              <div className="flex-none">
                <button
                  type="button"
                  className="button button-tertiary button-close"
                >
                  <span className="icon icon-e-remove" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-4 sm:mx-0">
        {prototype
          .getGameBySlug(props.gameSlug)
          ?.missions.map((mission, missionIndex) => (
            <>
              {mission.ispremium && (
                <Tooltip
                  placement="top"
                  tooltip={
                    <div className="max-w-xs text-sm text-center leading-tight">
                      Unlock rewards as you earn XP from Missions. XP is earned
                      across all Missions in all games on G-Loot
                    </div>
                  }
                >
                  <CardMission mission={mission} index={missionIndex} />
                </Tooltip>
              )}
              {!mission.ispremium && (
                <CardMission mission={mission} index={missionIndex} />
              )}
            </>
          ))}
      </div>
    </section>
  );
}
