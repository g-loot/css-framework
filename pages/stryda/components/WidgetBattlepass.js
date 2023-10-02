import React, { Fragment, useContext, useState, useEffect } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Link from "next/link";
import Battlepass from "@/components/BattlePass/BattlePass";
import Countdown from "@/components/Countdown/Countdown";

export default function WidgetBattlepass(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const state = props.state || "normal";

  return (
    <>
      <Link href={`/stryda/battlepass${prototype.getURLparams()}`}>
        <div className="surface rounded interactive">
          <div className="flex items-baseline justify-between border-b border-b-ui-700 px-3 py-2">
            <h2 className="text-base text-ui-100 interactive">Battle Pass</h2>
            {state === "rewards" && (
              <span className="icon icon-present text-main text-sm" />
            )}
            {/*
                  <Link href={`/stryda/battlepass${prototype.getURLparams()}`}>
                    <a className="link link-hover text-ui-300 text-sm leading-none">
                      View all rewards
                    </a>
                  </Link>
        */}
          </div>
          {state === "empty" ? (
            <div className="bg-ui-850 p-4 text-center">
              <h3 className="text-sm text-ui-200 mb-2">Congratulations, you have unlocked all tiers!</h3>
              <h3 className="text-sm text-ui-200 mb-2">New Battle Pass in</h3>
              <div>
                <Countdown
                  separator=" "
                  hasDays={true}
                  hasHours={true}
                  hasMinutes={true}
                  hasSeconds={false}
                  className="text-3xl"
                />
              </div>
            </div>
          ) : (
            <div className="p-3 bg-ui-850 relative rounded-b flex gap-5 items-center justify-center">
              {/* <Battlepass id={0} size="battlepass-sm" /> */}
              <div className="relative z-10 flex-1 flex flex-col -mt-1.5">
                <div className="flex gap-2 items-baseline justify-between leading-none text-sm uppercase">
                  <div className="flex gap-1 items-center justify-start">
                    <span className="text-main">350</span>
                    <span>/</span>
                    <span>400</span>
                    <span className="icon icon-xp-symbol text-3xl" />
                  </div>
                  <div>Tier 6</div>
                </div>
                <div
                  className="progressbar progressbar-tick w-full"
                  style={{ "--percent": 70 }}
                >
                  <div />
                </div>
              </div>
              <div className="flex-none">
                <img
                  className="w-16 h-16 rounded"
                  src="https://res.cloudinary.com/gloot/image/upload/v1688632300/Stryda/shop/avatarframes/previewimages/battlepass-avatarframe-sapphire.png"
                  alt=""
                />
              </div>
              <img
                src="https://res.cloudinary.com/gloot/image/upload/f_auto/v1684756295/Stryda/demo/battlepass_bg_generic.jpg"
                alt=""
                className="absolute z-0 w-full h-full inset-0 mix-blend-lighten pointer-events-none object-cover object-center rounded-b"
              />
            </div>
          )}
        </div>
      </Link>
    </>
  );
}
