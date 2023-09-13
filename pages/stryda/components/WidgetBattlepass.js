import React, { Fragment, useContext, useState, useEffect } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Link from "next/link";
import Battlepass from "@/components/BattlePass/BattlePass";

export default function WidgetBattlepass(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();

  return (
    <>
      <Link href={`/stryda/battlepass${prototype.getURLparams()}`}>
        <div className="surface rounded interactive">
          <div className="flex items-baseline justify-between border-b border-b-ui-700 px-3 py-2">
            <h2 className="text-base text-ui-100 interactive">Battle Pass</h2>
            {/*
                  <Link href={`/stryda/battlepass${prototype.getURLparams()}`}>
                    <a className="link link-hover text-ui-300 text-sm leading-none">
                      View all rewards
                    </a>
                  </Link>
        */}
          </div>
          <div className="p-3 bg-ui-850 relative rounded-b flex gap-5 items-center justify-center">
            {/* <Battlepass id={0} size="battlepass-sm" /> */}
            <div className="flex-1 flex flex-col -mb-1.5">
              <div className="progressbar progressbar-tick w-full" style={{ "--percent": 70 }}>
                <div />
              </div>
              <div className="flex gap-2 items-baseline justify-between leading-none text-sm">
                <div className="flex gap-2 items-center justify-start">
                  <span className="text-ui-300">350</span>
                  <span>/ 400</span>
                  <span className="icon icon-xp-symbol text-3xl" />
                </div>
                <div>next reward</div>
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
        </div>
      </Link>
    </>
  );
}
