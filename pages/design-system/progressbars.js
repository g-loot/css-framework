import React, { useEffect, useState } from "react";

import { getLayout } from "@/components/DesignSystem/DSLayout";
import Anchor from "@/components/DesignSystem/DSanchor";

function RandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ProgressContainer = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const handleClick = () => {
    let interval;

    if (loadingProgress < 100) {
      interval = setInterval(() => {
        setLoadingProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          return newProgress <= 100 ? newProgress : 100;
        });
      }, 80);
    } else {
      clearInterval(interval);
    }

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  };
  return (
    <div className="relative p-8">
      <div
        className="progresscontainer"
        style={{ "--percent": loadingProgress }}
        onClick={() => setLoadingProgress(0)}
      >
        <div>
          <div className="text-2xl font-bold">{loadingProgress}%</div>
          <div className="text-sm">Analysing</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{loadingProgress}%</div>
          <div className="text-sm">Analysing</div>
        </div>
      </div>
      <button
        type="button"
        className="button button-sm button-primary"
        onClick={() => handleClick()}
      >
        <span>Automate with AI</span>
      </button>
    </div>
  );
};
const ProgressContainerStep = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const maxSteps = 5;
  const [stepActive, setStepActive] = useState(0);
  const [speed, setSpeed] = useState(5);
  const speedValues = [1, 5, 10, 20, 30];

  const handleClick = () => {
    if (stepActive < maxSteps) {
      setStepActive(stepActive + 1);
    } else {
      setStepActive(0);
    }
  };

  function handleSpeed(e) {
    setSpeed(e.target.value);
  }
  return (
    <>
      <div className="relative p-8 w-full h-32">
        <div
          className="progresscontainer progresscontainer-step"
          onClick={() => setLoadingProgress(0)}
          style={{
            "--active": stepActive,
            "--max": maxSteps,
            "--duration": `${speed}s`,
          }}
        >
          <div>
            <div>Preparing video for AI</div>
            <div>Uploading to AI</div>
            <div>AI analysing recording</div>
            <div>Creating highlight reel</div>
            <div>Finishing up</div>
          </div>
          <div>
            <div>Preparing video for AI</div>
            <div>Uploading to AI</div>
            <div>AI analysing recording</div>
            <div>Creating highlight reel</div>
            <div>Finishing up</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <div className="form-group form-select flex items-center gap-2">
          <label htmlFor="speed" className="m-0">
            Speed (in second):
          </label>
          <select id="speed" onChange={(e) => handleSpeed(e)}>
            {speedValues.map((value, key) => (
              <option key={key} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          className="button button-sm button-primary"
          onClick={() => handleClick()}
        >
          <span>Next step</span>
        </button>
      </div>
    </>
  );
};

const DSpage = () => {
  const [random1, setRandom1] = useState(0);
  const [random2, setRandom2] = useState(0);
  const [random3, setRandom3] = useState(0);
  const [random4, setRandom4] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandom1(RandomNumber(0, 100));
      setRandom2(RandomNumber(0, 100));
      setRandom3(RandomNumber(0, 100));
      setRandom4(RandomNumber(0, 100));
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <h1 className="mb-8">Progress bar</h1>

      {/* Linear */}
      <div className="mb-12">
        <Anchor title="Linear" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex flex-col gap-4 items-center">
                  <div className="progressbar w-full">
                    <div style={{ width: `${random1}%` }} />
                  </div>
                  <div
                    className="progressbar w-full"
                    style={{ "--percent": random2 }}
                  >
                    <div />
                  </div>
                  <div
                    className="progressbar w-full"
                    style={{ "--percent": random3 }}
                  >
                    <div />
                  </div>
                  <div
                    className="progressbar w-full"
                    style={{ "--percent": random4 }}
                  >
                    <div />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/r6og8tLk/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Radial */}
      <div className="mb-12">
        <Anchor title="Radial" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full grid grid-cols-2 grid-rows-2 gap-4 items-center justify-center">
                  <div className="progressbar-radial">
                    <div>
                      <div>
                        <div className="text-2xl font-bold">{random1}%</div>
                        <div className="text-xs text-ui-300 uppercase">
                          win rate
                        </div>
                      </div>
                    </div>
                    <svg viewBox="0 0 40 40" style={{ "--percent": random1 }}>
                      <circle cx="20" cy="20" r="16" />
                    </svg>
                  </div>
                  <div className="progressbar-radial">
                    <div>
                      <div>
                        <div className="text-2xl font-bold">{random2}%</div>
                        <div className="text-xs text-ui-300 uppercase">
                          win rate
                        </div>
                      </div>
                    </div>
                    <svg viewBox="0 0 40 40" style={{ "--percent": random2 }}>
                      <circle cx="20" cy="20" r="16" />
                    </svg>
                  </div>
                  <div className="progressbar-radial">
                    <div>
                      <div>
                        <div className="text-2xl font-bold">{random3}%</div>
                        <div className="text-xs text-ui-300 uppercase">
                          win rate
                        </div>
                      </div>
                    </div>
                    <svg viewBox="0 0 40 40" style={{ "--percent": random3 }}>
                      <circle cx="20" cy="20" r="16" />
                    </svg>
                  </div>
                  <div className="progressbar-radial">
                    <div>
                      <div>
                        <div className="text-2xl font-bold">{random4}%</div>
                        <div className="text-xs text-ui-300 uppercase">
                          win rate
                        </div>
                      </div>
                    </div>
                    <svg viewBox="0 0 40 40">
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        style={{
                          strokeDashoffset: `calc((1px * ${random4}) - 100px)`,
                        }}
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/vbk023ta/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
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
            <div className="flex gap-4 flex-col lg:flex-row items-center">
              <div className="flex-1 space-y-8">
                <div className="flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight pr-4">
                    Small
                  </div>
                  <div className="flex-1 w-full flex flex-col gap-4 justify-start items-start pl-8 border-l border-ui-700">
                    <div
                      className="progressbar progressbar-sm w-full mt-0.5"
                      style={{ "--percent": random1 }}
                    >
                      <div />
                    </div>

                    <div className="progressbar-sm progressbar-radial m-0">
                      <div>
                        <div>
                          <div className="text-xl font-bold">{random2}%</div>
                          <div className="text-xs text-ui-300 uppercase">
                            win rate
                          </div>
                        </div>
                      </div>
                      <svg viewBox="0 0 40 40" style={{ "--percent": random2 }}>
                        <circle cx="20" cy="20" r="16" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight pr-4">
                    Extra small
                  </div>
                  <div className="flex-1 w-full flex flex-col gap-4 justify-start items-start pl-8 border-l border-ui-700">
                    <div
                      className="progressbar progressbar-xs w-full mt-0.5"
                      style={{ "--percent": random1 }}
                    >
                      <div />
                    </div>

                    <div className="progressbar-xs progressbar-radial m-0">
                      <svg viewBox="0 0 40 40" style={{ "--percent": random2 }}>
                        <circle cx="20" cy="20" r="16" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/Lqwb35of/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary */}
      <div className="mb-12">
        <Anchor title="Secondary" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row items-center">
              <div className="flex-1 space-y-8">
                <div
                  className="progressbar progressbar-secondary w-full"
                  style={{ "--percent": 50, "--progress": 25 }}
                >
                  <div />
                  <div />
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/qgn9msr3/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With tick */}
      <div className="mb-12">
        <Anchor title="With tick" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex flex-col gap-4 items-center">
                  <div className="progressbar progressbar-tick w-full">
                    <div style={{ width: `${random1}%` }} />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/4oxs3a5b/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress container */}
      <div className="mb-12">
        <Anchor title="Progress container" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex flex-col gap-4 items-center">
                  <ProgressContainer />
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/79gc54jr/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress step container */}
      <div className="mb-12">
        <Anchor title="Progress step container" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex flex-col gap-4 items-center">
                  <ProgressContainerStep />
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/skc1jvLu/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
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
