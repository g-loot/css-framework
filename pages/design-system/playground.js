import React, { useState } from "react";

import Footer from "../../components/Footer/Footer";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
  const [randomNum1, setRandomNum1] = useState(1);
  const maxNum = 10;

  function clickHandlerNum1(varTarget, max) {
    if (varTarget === max) {
      setRandomNum1((varTarget = 1));
    } else {
      setRandomNum1(varTarget + 1);
    }
  }
  return (
    <>
      <h1 className="mb-2">Playground</h1>

      {/* exercice #2 */}
      <div className="mb-12" id="exercice-2">
        <div className="pt-4">
          <h6 className="mb-2">Your latest tracked match</h6>
          <div className="surface rounded-lg flex flex-col xl:flex-row xl:justify-between leading-none gap-2 xl:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 mb-2 md:mb-0 p-2">
              <div className="flex gap-2 items-center">
                <div className="rounded bg-gradient-to-b from-ui-900/75 to-ui-900/25 p-2 flex items-center justify-center border border-ui-700">
                  <span className="icon text-3xl icon-game-pubg-symbol text-game-pubg" />
                </div>
                <h6 className="">PUBG: BATTLEGROUNDS</h6>
              </div>
              <div className="text-main ">
                Victory
              </div>
            </div>
            <div className="flex flex-col sm:flex-row flex-1 sm:items-end xl:items-center gap-2 p-3 border-t border-ui-700 xl:border-none">
              <div className="flex flex-1 items-stretch justify-center sm:justify-start gap-2 text-sm text-ui-300 whitespace-nowrap">
                <span className="bg-ui-900/50 rounded p-2">11 kills</span>
                <span className="bg-ui-900/50 rounded p-2">14 assists</span>
                <span className="bg-ui-900/50 rounded p-2">5 deaths</span>
                <span className="bg-ui-900/50 rounded p-2">4 headshots</span>
              </div>
              <button type="button" className="button button-primary button-sm">
                <span className="icon icon-16 icon-refresh-02" />
                <span>Request a stats update</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* exercice #1 */}
      <div className="mb-12" id="exercice-1">
        <div className="pt-4 space-y-4">
          <div className="surface rounded-xl p-4 gap-4 flex flex-col md:flex-row items-stretch">
            <div className="rounded-lg bg-gradient-to-b from-ui-900/50 to-ui-900/25 px-4 pt-4 pb-2 flex-1">
              <div className="uppercase text-ui-300 text-sm text-center">
                Match points in best 5 matches
              </div>
              <ul className="child:border-b child:border-ui-700/50 text-ui-300 child:flex child:justify-between last:child:border-none text-sm child:child:py-2">
                <li className="uppercase text-ui-400">
                  <span>Player</span>
                  <span>Brawl points</span>
                </li>
                <li>
                  <span>jamlog</span>
                  <span>77</span>
                </li>
                <li>
                  <span>augiaugie</span>
                  <span>59</span>
                </li>
                <li>
                  <span>friendlyfire</span>
                  <span>44</span>
                </li>
                <li>
                  <span>Cogeric</span>
                  <span>41</span>
                </li>
                <li>
                  <span>MAX94</span>
                  <span>37</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex-1 flex flex-col items-center justify-center rounded-lg p-4 bg-gradient-to-b from-ui-900/50 to-ui-900/25">
                <div className="uppercase text-ui-300 text-sm text-center">
                  Tiebreaker points
                </div>
                <div className="text-ui-100 text-lg">
                  95 kills
                </div>
                <div className="text-ui-100 text-lg">
                  78 headshots
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center rounded-lg p-4 bg-gradient-to-b from-ui-900/50 to-ui-900/25">
                <div className="uppercase text-ui-300 text-sm text-center">
                  Active Brawl players
                </div>
                <div className="text-ui-100 text-lg">
                  13
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
