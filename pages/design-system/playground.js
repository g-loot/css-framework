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

      {/* exercice #1 */}
      <div className="mb-12" id="footer">
        <div className="pt-4">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4">
                <div className="surface rounded-xl p-4 gap-4 flex items-stretch">
                  <div className="rounded-lg bg-ui-900/50 p-2 flex-1">
                    <div className="uppercase text-ui-300 text-sm text-center">Match points in best 5 matches</div>
                    <ul className="child:border-b child:border-ui-700/50 child:flex child:justify-between last:child:border-none text-sm space-y-2">
                      <li className="font-bold uppercase text-ui-300">
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
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/6rpda8go/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Temp */}
      <div className="mb-12" id="temp">
        <div className="pt-4">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4">
                <Footer />
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/6rpda8go/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
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
