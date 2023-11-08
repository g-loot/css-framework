import React, { useState } from "react";

import { getLayout } from "../../components/DesignSystem/DSLayout";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  const [randomNum0, setRandomNum0] = useState(1);
  const [randomNum1, setRandomNum1] = useState(1);
  const [randomNum2, setRandomNum2] = useState(1);
  const [randomNum3, setRandomNum3] = useState(1);

  function clickHandlerNum0(varTarget, max) {
    if (varTarget === max) {
      setRandomNum0((varTarget = 0));
    } else {
      setRandomNum0(varTarget + 1);
    }
  }
  function clickHandlerNum1(varTarget, max) {
    if (varTarget === max) {
      setRandomNum1((varTarget = 0));
    } else {
      setRandomNum1(varTarget + 1);
    }
  }
  function clickHandlerNum2(varTarget, max) {
    if (varTarget === max) {
      setRandomNum2((varTarget = 0));
    } else {
      setRandomNum2(varTarget + 1);
    }
  }
  function clickHandlerNum3(varTarget, max) {
    if (varTarget === max) {
      setRandomNum3((varTarget = 0));
    } else {
      setRandomNum3(varTarget + 1);
    }
  }
  return (
    <>
      <h1 className="mb-8">Checkmarks</h1>

      {/* Structure */}
      <div className="mb-12">
        <Anchor title="Structure" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="flex-1 flex justify-center flex-wrap gap-4">
                  <div
                    className={`checkmark ${
                      randomNum0 === 1 ? "is-active" : ""
                    }`}
                  >
                    <i />
                  </div>
                  <div
                    className={`checkmark ${
                      randomNum0 === 0 ? "is-active" : ""
                    }`}
                  >
                    <i />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={clickHandlerNum0.bind(this, randomNum0, 1)}
                  >
                    <span>Toggle</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/09fs45cy/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Size */}
      <div className="mb-12">
        <Anchor title="Size" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-8">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Small
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex-1 flex justify-center flex-wrap gap-4">
                      <div
                        className={`checkmark checkmark-sm ${
                          randomNum1 === 1 ? "is-active" : ""
                        }`}
                      >
                        <i />
                      </div>
                      <div
                        className={`checkmark checkmark-sm ${
                          randomNum1 === 0 ? "is-active" : ""
                        }`}
                      >
                        <i />
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        className="button button-tertiary mx-auto"
                        onClick={clickHandlerNum1.bind(this, randomNum1, 1)}
                      >
                        <span>Toggle</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Extra small
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex-1 flex justify-center flex-wrap gap-4">
                      <div
                        className={`checkmark checkmark-xs ${
                          randomNum2 === 1 ? "is-active" : ""
                        }`}
                      >
                        <i />
                      </div>
                      <div
                        className={`checkmark checkmark-xs ${
                          randomNum2 === 0 ? "is-active" : ""
                        }`}
                      >
                        <i />
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        className="button button-tertiary mx-auto"
                        onClick={clickHandlerNum2.bind(this, randomNum2, 1)}
                      >
                        <span>Toggle</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/2smg6b0e/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Invisible when off */}
      <div className="mb-12">
        <Anchor title="Invisible when off" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="flex-1 flex justify-center flex-wrap gap-4">
                  <div
                    className={`checkmark checkmark-invisible ${
                      randomNum3 === 1 ? "is-active" : ""
                    }`}
                  >
                    <i />
                  </div>
                  <div
                    className={`checkmark checkmark-invisible ${
                      randomNum3 === 0 ? "is-active" : ""
                    }`}
                  >
                    <i />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={clickHandlerNum3.bind(this, randomNum3, 1)}
                  >
                    <span>Toggle</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/j0hsxL8f/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
