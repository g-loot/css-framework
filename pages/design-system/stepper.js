import React, { useEffect, useState } from "react";

import { getLayout } from "@/components/DesignSystem/DSLayout";

function RandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const DSpage = () => {
  const [StartAnim1, setStartAnim1] = useState(true);
  const [random1, setRandom1] = useState(7);
  const [random2, setRandom2] = useState(4);
  const [random3, setRandom3] = useState(0);

  function handleStartAnim1() {
    setStartAnim1(false);
    const timer = setTimeout(() => {
      setStartAnim1(true);
      setRandom1(RandomNumber(0, 9));
      setRandom2(RandomNumber(0, 9));
      setRandom3(RandomNumber(0, 9));
    }, 1);
    return () => clearTimeout(timer);
  }

  return (
    <>
      <h1 className="mb-2">Stepper</h1>

      {/* Structure */}
      <div className="mb-12" id="structure">
        <h2 className="h3 mb-3">Structure</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="grid place-content-center h-6">
                  {StartAnim1 && (
                    <div className="stepper">
                      <span style={{ "--value": random1 }} />
                      <span style={{ "--value": random2 }} />
                      <span style={{ "--value": random3 }} />
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim1.bind(this)}
                  >
                    <span>Reset</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/t21gen9v/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="mb-12" id="typography">
        <h2 className="h3 mb-3">Typography</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="grid place-content-center h-10">
                  {StartAnim1 && (
                    <div className="stepper text-7xl font-headings text-ui-100">
                      <span style={{ "--value": random1 }} />
                      <span style={{ "--value": random2 }} />
                      <span style={{ "--value": random3 }} />
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim1.bind(this)}
                  >
                    <span>Reset</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/phjrtd7y/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
