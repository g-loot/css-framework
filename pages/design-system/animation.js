import React, { useState, useContext } from "react";

import { getLayout } from "@/components/DesignSystem/DSLayout";
import { UiContext } from "@/contexts/ui";
import Link from "next/link";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  const uiContext = useContext(UiContext);
  const [StartAnim1, setStartAnim1] = useState(false);
  const [StartAnim2, setStartAnim2] = useState(false);
  const [StartAnim3, setStartAnim3] = useState(false);
  const [StartAnim4, setStartAnim4] = useState(false);
  const [StartAnim5, setStartAnim5] = useState(false);
  const [StartAnim6, setStartAnim6] = useState(false);
  const [StartAnim7, setStartAnim7] = useState(false);
  const [StartAnim8, setStartAnim8] = useState(false);
  const [StartAnim9, setStartAnim9] = useState(false);
  const [StartAnim10, setStartAnim10] = useState(false);
  const [StartAnim11, setStartAnim11] = useState(false);
  const [StartAnim12, setStartAnim12] = useState(false);
  const [StartAnim13, setStartAnim13] = useState(false);
  const [StartAnim14, setStartAnim14] = useState(false);
  const [StartAnim15, setStartAnim15] = useState(false);
  const [StartAnim16, setStartAnim16] = useState(false);
  const [StartAnim17, setStartAnim17] = useState(false);
  const [StartAnim18, setStartAnim18] = useState(false);
  const [StartAnim19, setStartAnim19] = useState(false);

  function handleStartAnim1() {
    setStartAnim1(true);
    const timer = setTimeout(() => {
      setStartAnim1(false);
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim2() {
    setStartAnim2(true);
    const timer = setTimeout(() => {
      setStartAnim2(false);
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim3() {
    setStartAnim3(true);
    const timer = setTimeout(() => {
      setStartAnim3(false);
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim4() {
    setStartAnim4(true);
    const timer = setTimeout(() => {
      setStartAnim4(false);
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim5() {
    setStartAnim5(true);
    const timer = setTimeout(() => {
      setStartAnim5(false);
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim6() {
    setStartAnim6(true);
    const timer = setTimeout(() => {
      setStartAnim6(false);
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim7() {
    setStartAnim7(!StartAnim7);
  }
  function handleStartAnim8() {
    setStartAnim8(true);
    const timer = setTimeout(() => {
      setStartAnim8(false);
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim9() {
    setStartAnim9(true);
    const timer = setTimeout(() => {
      setStartAnim9(false);
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim10() {
    setStartAnim10(true);
    const timer = setTimeout(() => {
      setStartAnim10(false);
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim11() {
    setStartAnim11(false);
    const timer = setTimeout(() => {
      setStartAnim11(true);
    }, 10);
    return () => clearTimeout(timer);
  }
  function handleStartAnim12() {
    setStartAnim12(true);
    const timer = setTimeout(() => {
      setStartAnim12(false);
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim13() {
    setStartAnim13(!StartAnim13);
  }
  function handleStartAnim14() {
    setStartAnim14(!StartAnim14);
  }
  function handleStartAnim15() {
    setStartAnim15(true);
    const timer = setTimeout(() => {
      setStartAnim15(false);
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim16() {
    setStartAnim16(true);
    const timer = setTimeout(() => {
      setStartAnim16(false);
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim17() {
    setStartAnim17(true);
    const timer = setTimeout(() => {
      setStartAnim17(false);
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim18() {
    setStartAnim18(true);
    const timer = setTimeout(() => {
      setStartAnim18(false);
    }, 1000);
    return () => clearTimeout(timer);
  }
  function handleStartAnim19() {
    setStartAnim19(true);
    const timer = setTimeout(() => {
      setStartAnim19(false);
    }, 1600);
    return () => clearTimeout(timer);
  }

  return (
    <>
      <h1 className="mb-2">Animation</h1>

      {/* Heartbeat */}
      <div className="mb-12">
        <Anchor title="Heartbeat" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto animate-heartbeat animate-infinite`}
                ></div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/geh5maLc/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating */}
      <div className="mb-12">
        <Anchor title="Floating" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto animate-floating animate-infinite`}
                ></div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/6Lo0rq4t/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bounce */}
      <div className="mb-12">
        <Anchor title="Bounce" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto animate-bounce animate-infinite`}
                ></div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/jqpguk8w/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bounce bottom */}
      <div className="mb-12">
        <Anchor title="Bounce bottom" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto animate-bounce-bottom animate-infinite`}
                ></div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/3o7tes1p/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bounce right */}
      <div className="mb-12">
        <Anchor title="Bounce right" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto animate-bounce-right animate-infinite`}
                ></div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/a19yhk7j/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bounce left */}
      <div className="mb-12">
        <Anchor title="Bounce left" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto animate-bounce-left animate-infinite`}
                ></div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/9Lroq6k8/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pulse */}
      <div className="mb-12">
        <Anchor title="Pulse" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto animate-pulse animate-infinite`}
                ></div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/fnvdj6cz/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rotate */}
      <div className="mb-12">
        <Anchor title="Rotate" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center flex items-center justify-center">
                <div className="animate-rotate">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1672652127/Stryda/logos/mission-category-2.svg"
                    alt=""
                    width="42"
                    height="42"
                  />
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/z21rf69t/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide in bottom */}
      <div className="mb-12">
        <Anchor title="Slide in bottom" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${
                    StartAnim1 === true ? "animate-slide-in-bottom" : ""
                  }`}
                ></div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim1.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/3a19ohqs/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide in top */}
      <div className="mb-12">
        <Anchor title="Slide in top" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${
                    StartAnim2 === true ? "animate-slide-in-top" : ""
                  }`}
                ></div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim2.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/j637d5hp/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide in right */}
      <div className="mb-12">
        <Anchor title="Slide in right" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${
                    StartAnim3 === true ? "animate-slide-in-right" : ""
                  }`}
                ></div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim3.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/zat6459o/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide in left */}
      <div className="mb-12">
        <Anchor title="Slide in left" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${
                    StartAnim4 === true ? "animate-slide-in-left" : ""
                  }`}
                ></div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim4.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/kum1we7y/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide out bottom */}
      <div className="mb-12">
        <Anchor title="Slide out bottom" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${
                    StartAnim1 === true ? "animate-slide-out-bottom" : ""
                  }`}
                ></div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim1.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/3a19ohqs/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide out top */}
      <div className="mb-12">
        <Anchor title="Slide out top" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${
                    StartAnim2 === true ? "animate-slide-out-top" : ""
                  }`}
                ></div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim2.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/j637d5hp/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide out right */}
      <div className="mb-12">
        <Anchor title="Slide out right" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${
                    StartAnim3 === true ? "animate-slide-out-right" : ""
                  }`}
                ></div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim3.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/zat6459o/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide out left */}
      <div className="mb-12">
        <Anchor title="Slide out left" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${
                    StartAnim4 === true ? "animate-slide-out-left" : ""
                  }`}
                ></div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim4.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/kum1we7y/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fade in */}
      <div className="mb-12">
        <Anchor title="Fade in" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${
                    StartAnim5 === true ? "animate-fade-in" : ""
                  }`}
                ></div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim5.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/5rnbkscm/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fade out */}
      <div className="mb-12">
        <Anchor title="Fade out" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${
                    StartAnim9 === true ? "animate-fade-out" : ""
                  }`}
                ></div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim9.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/3d0cyv8g/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scale in */}
      <div className="mb-12">
        <Anchor title="Scale in" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${
                    StartAnim10 === true ? "animate-scale-in" : ""
                  }`}
                ></div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim10.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/jsp34f5n/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scale out */}
      <div className="mb-12">
        <Anchor title="Scale out" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${
                    StartAnim11 === true ? "animate-scale-out" : ""
                  }`}
                ></div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim11.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/agnpfj9x/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scale in horizontal */}
      <div className="mb-12">
        <Anchor title="Scale in horizontal" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 bg-ui-400 mx-auto flex items-center justify-center ${
                    StartAnim15 === true ? "animate-scale-in-x-right" : ""
                  }`}
                ></div>
                <code>.animate-scale-in-x-right</code>
                <div
                  className={`w-24 h-24 bg-ui-400 mx-auto flex items-center justify-center ${
                    StartAnim15 === true ? "animate-scale-in-x-left" : ""
                  }`}
                ></div>
                <code>.animate-scale-in-x-left</code>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim15.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/d1htzrxa/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scale out horizontal */}
      <div className="mb-12">
        <Anchor title="Scale out horizontal" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 bg-ui-400 mx-auto flex items-center justify-center ${
                    StartAnim16 === true ? "animate-scale-out-x-right" : ""
                  }`}
                ></div>
                <code>.animate-scale-out-x-right</code>
                <div
                  className={`w-24 h-24 bg-ui-400 mx-auto flex items-center justify-center ${
                    StartAnim16 === true ? "animate-scale-out-x-left" : ""
                  }`}
                ></div>
                <code>.animate-scale-out-x-left</code>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim16.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/1kjp2zfe/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drop in */}
      <div className="mb-12">
        <Anchor title="Drop in" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${
                    StartAnim6 === true ? "animate-drop-in" : ""
                  }`}
                ></div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim6.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/3Ljhykp8/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fire in */}
      <div className="mb-12">
        <Anchor title="Fire in" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${
                    StartAnim17 === true ? "animate-fire-in" : ""
                  }`}
                ></div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim17.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/41htujds/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fire out */}
      <div className="mb-12">
        <Anchor title="Fire out" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${
                    StartAnim18 === true ? "animate-fire-out" : ""
                  }`}
                ></div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim18.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/9tjxeu5L/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shake */}
      <div className="mb-12">
        <Anchor title="Shake" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-ui-400 mx-auto ${
                    StartAnim12 === true ? "animate-shake" : ""
                  }`}
                ></div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim12.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/oq6yv4cm/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flip */}
      <div className="mb-12">
        <Anchor title="Flip" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="perspective">
                  <div
                    className={`w-32 h-32 mx-auto flip ${
                      StartAnim7 === true ? "animate-flip" : ""
                    }`}
                  >
                    <div className="flip-front rounded-lg flex items-center justify-center bg-ui-400">
                      <span className="text-4xl font-bold">A</span>
                    </div>
                    <div className="flip-back rounded-lg flex items-center justify-center bg-main">
                      <span className="text-4xl text-ui-800">B</span>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim7.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/s3z92cag/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flip vertical */}
      <div className="mb-12">
        <Anchor title="Flip vertical" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="perspective">
                  <div
                    className={`w-32 h-32 mx-auto flip flip-vertical ${
                      StartAnim13 === true ? "animate-flip" : ""
                    }`}
                  >
                    <div className="flip-front rounded-lg flex items-center justify-center bg-ui-400">
                      <span className="text-4xl font-bold">A</span>
                    </div>
                    <div className="flip-back rounded-lg flex items-center justify-center bg-main">
                      <span className="text-4xl text-ui-800">B</span>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim13.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/tvkwj7e1/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Revealer */}
      <div className="mb-12">
        <Anchor title="Revealer" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`revealer ${
                    StartAnim14 === true ? "is-active" : ""
                  }`}
                >
                  <div className="revealer-front">
                    <button
                      className="button button-tertiary mx-auto"
                      onClick={handleStartAnim14.bind(this)}
                    >
                      <span>Play animation</span>
                    </button>
                  </div>
                  <div className="revealer-back h-40 bg-main flex items-center justify-center rounded">
                    <span className="text-4xl text-ui-800">B</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/bjcpt17y/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info banner */}
      <div className="mb-12">
        <Anchor title="Info banner" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="infobanner is-active">
                  <div className="flex gap-2 infobanner-front">
                    <div>
                      <div className="uppercase text-xs text-ui-300">
                        Points
                      </div>
                      <div className="text-sm font-bold">1120</div>
                    </div>
                    <div>
                      <div className="uppercase text-xs text-ui-300">
                        Position
                      </div>
                      <div className="text-sm font-bold">#243</div>
                    </div>
                  </div>
                  <div className="infobanner-back absolute inset-0 flex items-center text-sm">
                    <div className="animate-pulse text-ui-300">
                      Waiting for your 3 matches...
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/qwbo9ank/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cash in */}
      <div className="mb-12">
        <Anchor title="Cash in" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="relative">
                  <div className="flex items-center justify-center gap-2 text-currency-1-500">
                    <span className="icon text-4xl icon-coin" />
                    <span className="text-2xl font-bold">15 000</span>
                  </div>
                  <div
                    className={`flex items-center justify-center gap-2 text-currency-1-500 cash-in ${
                      StartAnim19 ? "is-active" : ""
                    }`}
                  >
                    <span className="icon text-4xl icon-coin" />
                    <span className="text-2xl font-bold">15 000</span>
                  </div>
                </div>
                <button
                  className="button button-tertiary mx-auto"
                  onClick={handleStartAnim19.bind(this)}
                >
                  <span>Play animation</span>
                </button>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/1f52bmo8/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With delay */}
      <div className="mb-12">
        <Anchor title="With delay" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <ul className="items-spaced space-y-2">
                  <li
                    className={`w-full h-16 bg-ui-400 rounded-lg animate-delay ${
                      StartAnim8 === true ? "animate-slide-in-bottom" : ""
                    }`}
                    style={{ "--delay": "calc(1 * 0.05s)" }}
                  ></li>
                  <li
                    className={`w-full h-16 bg-ui-400 rounded-lg animate-delay ${
                      StartAnim8 === true ? "animate-slide-in-bottom" : ""
                    }`}
                    style={{ "--delay": "calc(2 * 0.05s)" }}
                  ></li>
                  <li
                    className={`w-full h-16 bg-ui-400 rounded-lg animate-delay ${
                      StartAnim8 === true ? "animate-slide-in-bottom" : ""
                    }`}
                    style={{ "--delay": "calc(3 * 0.05s)" }}
                  ></li>
                  <li
                    className={`w-full h-16 bg-ui-400 rounded-lg animate-delay ${
                      StartAnim8 === true ? "animate-slide-in-bottom" : ""
                    }`}
                    style={{ "--delay": "calc(4 * 0.05s)" }}
                  ></li>
                  <li
                    className={`w-full h-16 bg-ui-400 rounded-lg animate-delay ${
                      StartAnim8 === true ? "animate-slide-in-bottom" : ""
                    }`}
                    style={{ "--delay": "calc(5 * 0.05s)" }}
                  ></li>
                </ul>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim8.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/3cLmazgt/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With delay (class names) */}
      <div className="mb-12">
        <Anchor title="With delay (class names)" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <ul className="items-spaced space-y-2 child:animate-delay">
                  <li
                    className={`w-full h-16 bg-ui-400 rounded-lg ${
                      StartAnim9 === true ? "animate-slide-in-bottom" : ""
                    }`}
                  ></li>
                  <li
                    className={`w-full h-16 bg-ui-400 rounded-lg ${
                      StartAnim9 === true ? "animate-slide-in-bottom" : ""
                    }`}
                  ></li>
                  <li
                    className={`w-full h-16 bg-ui-400 rounded-lg ${
                      StartAnim9 === true ? "animate-slide-in-bottom" : ""
                    }`}
                  ></li>
                  <li
                    className={`w-full h-16 bg-ui-400 rounded-lg ${
                      StartAnim9 === true ? "animate-slide-in-bottom" : ""
                    }`}
                  ></li>
                  <li
                    className={`w-full h-16 bg-ui-400 rounded-lg ${
                      StartAnim9 === true ? "animate-slide-in-bottom" : ""
                    }`}
                  ></li>
                </ul>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim9.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/k8uosLmp/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reduced motion */}
      <div className="mb-12">
        <Anchor title="Reduced motion" />
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <p className="text-ui-300 mb-6">
                  You can cancel all repeating animations within a specific
                  element by adding the
                  <code
                    className="interactive text-xs"
                    onClick={() => {
                      uiContext.openToastr({
                        size: "small",
                        text: "class name copied to your clipboard",
                        color: "green",
                        autoDelete: true,
                        autoDeleteDelay: 2500,
                      });
                      navigator.clipboard.writeText("reduced-motion");
                    }}
                  >
                    .reduced-motion
                  </code>{" "}
                  class name to it.
                </p>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/2 text-ui-400 text-right text-sm leading-tight">
                    In this example, the shining button is not animating.
                  </div>
                  <div className="flex-1">
                    <div className="grid gap-4 place-content-center h-24 reduced-motion rounded surface-ui-700">
                      <button type="button" className="button is-shining">
                        <span>I can&#39;t shine</span>
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
                  src="//jsfiddle.net/augustin_hiebel/mjyspcrk/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive reduced motion */}
      <div className="mb-12">
        <Anchor title="Responsive reduced motion" />
        <div className="surface rounded-lg p-4">
          <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
            <div className="flex-1 space-y-4">
              <p className="text-ui-300 mb-6">
                You can control the motion based on the screen size using the
                following class name:{" "}
                <code
                  className="interactive text-xs"
                  onClick={() => {
                    uiContext.openToastr({
                      size: "small",
                      text: "class name copied to your clipboard",
                      color: "green",
                      autoDelete: true,
                      autoDeleteDelay: 2500,
                    });
                    navigator.clipboard.writeText("sm:reduced-motion");
                  }}
                >
                  .&#123;xx&#x7D;:reduced-motion
                </code>{" "}
                or{" "}
                <code
                  className="interactive text-xs"
                  onClick={() => {
                    uiContext.openToastr({
                      size: "small",
                      text: "class name copied to your clipboard",
                      color: "green",
                      autoDelete: true,
                      autoDeleteDelay: 2500,
                    });
                    navigator.clipboard.writeText("sm:normal-motion");
                  }}
                >
                  .&#123;xx&#x7D;:normal-motion
                </code>
                .<br />
                &#123;xx&#x7D; can be <code className="text-xs">xs</code>,{" "}
                <code className="text-xs">sm</code>,{" "}
                <code className="text-xs">md</code>,{" "}
                <code className="text-xs">lg</code>,{" "}
                <code className="text-xs">xl</code>.
              </p>
              <div className="w-full flex gap-4 items-center">
                <div className="w-1/2 text-ui-400 text-right text-sm leading-tight">
                  In this example, the shining button is not animated below
                  768px (md)
                </div>
                <div className="flex-1">
                  <div className="grid gap-4 place-content-center h-24 reduced-motion md:normal-motion rounded surface-ui-700">
                    <button type="button" className="button is-shining">
                      <span>I can&#39;t shine</span>
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
                src="//jsfiddle.net/augustin_hiebel/05arth14/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
