import React, { useState } from "react";

import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
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

  return (
    <>
      <h1 className="mb-2">Animation</h1>

      {/* Heartbeat */}
      <div className="mb-12" id="heartbeat">
        <h2 className="h3 mb-3">Heartbeat</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/geh5maLc/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating */}
      <div className="mb-12" id="floating">
        <h2 className="h3 mb-3">Floating</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/6Lo0rq4t/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bounce */}
      <div className="mb-12" id="bounce">
        <h2 className="h3 mb-3">Bounce</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/jqpguk8w/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bounce bottom */}
      <div className="mb-12" id="bounce-bottom">
        <h2 className="h3 mb-3">Bounce bottom</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/3o7tes1p/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bounce right */}
      <div className="mb-12" id="bounce-right">
        <h2 className="h3 mb-3">Bounce right</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/a19yhk7j/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bounce left */}
      <div className="mb-12" id="bounce-left">
        <h2 className="h3 mb-3">Bounce left</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/9Lroq6k8/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pulse */}
      <div className="mb-12" id="pulse">
        <h2 className="h3 mb-3">Pulse</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/fnvdj6cz/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rotate */}
      <div className="mb-12" id="rotate">
        <h2 className="h3 mb-3">Rotate</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center flex items-center justify-center">
                <div className="animate-rotate">
                  <img src="https://res.cloudinary.com/gloot/image/upload/v1672652127/Stryda/logos/mission-category-2.svg" alt="" width="42" height="42" />
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/fnvdj6cz/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide in bottom */}
      <div className="mb-12" id="slide-in-bottom">
        <h2 className="h3 mb-3">Slide in bottom</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/3a19ohqs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide in top */}
      <div className="mb-12" id="slide-in-top">
        <h2 className="h3 mb-3">Slide in top</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/j637d5hp/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide in right */}
      <div className="mb-12" id="slide-in-right">
        <h2 className="h3 mb-3">Slide in right</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/zat6459o/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide in left */}
      <div className="mb-12" id="slide-in-left">
        <h2 className="h3 mb-3">Slide in left</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/kum1we7y/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fade in */}
      <div className="mb-12" id="fade-in">
        <h2 className="h3 mb-3">Fade in</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/5rnbkscm/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fade out */}
      <div className="mb-12" id="fade-out">
        <h2 className="h3 mb-3">Fade out</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/3d0cyv8g/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scale in */}
      <div className="mb-12" id="scale-in">
        <h2 className="h3 mb-3">Scale in</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/jsp34f5n/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scale out */}
      <div className="mb-12" id="scale-out">
        <h2 className="h3 mb-3">Scale out</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/agnpfj9x/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scale in horizontal */}
      <div className="mb-12" id="scale-in-horizontal">
        <h2 className="h3 mb-3">Scale in horizontal</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 bg-ui-400 mx-auto flex items-center justify-center ${
                    StartAnim15 === true ? "animate-scale-in-x-right" : ""
                  }`}
                >
                </div>
                <code>.animate-scale-in-x-right</code>
                <div
                  className={`w-24 h-24 bg-ui-400 mx-auto flex items-center justify-center ${
                    StartAnim15 === true ? "animate-scale-in-x-left" : ""
                  }`}
                >
                </div>
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
                  src="//jsfiddle.net/augustin_hiebel/jsp34f5n/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scale out horizontal */}
      <div className="mb-12" id="scale-out-horizontal">
        <h2 className="h3 mb-3">Scale out horizontal</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div
                  className={`w-24 h-24 bg-ui-400 mx-auto flex items-center justify-center ${
                    StartAnim16 === true ? "animate-scale-out-x-right" : ""
                  }`}
                >
                </div>
                <code>.animate-scale-out-x-right</code>
                <div
                  className={`w-24 h-24 bg-ui-400 mx-auto flex items-center justify-center ${
                    StartAnim16 === true ? "animate-scale-out-x-left" : ""
                  }`}
                >
                </div>
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
                  src="//jsfiddle.net/augustin_hiebel/jsp34f5n/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drop in */}
      <div className="mb-12" id="drop-in">
        <h2 className="h3 mb-3">Drop in</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/3Ljhykp8/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shake */}
      <div className="mb-12" id="shake">
        <h2 className="h3 mb-3">Shake</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/oq6yv4cm/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flip */}
      <div className="mb-12" id="flip">
        <h2 className="h3 mb-3">Flip</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/s3z92cag/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flip vertical */}
      <div className="mb-12" id="flip-vertical">
        <h2 className="h3 mb-3">Flip vertical</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/tvkwj7e1/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Revealer */}
      <div className="mb-12" id="revealer">
        <h2 className="h3 mb-3">Revealer</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/tvkwj7e1/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info banner */}
      <div className="mb-12" id="infobanner">
        <h2 className="h3 mb-3">Info banner</h2>

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
                  src="//jsfiddle.net/augustin_hiebel/qwbo9ank/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With delay */}
      <div className="mb-12" id="with-delay">
        <h2 className="h3 mb-3">With delay</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <ul className="items-spaced space-y-2">
                  <li
                    className={`w-full h-16 bg-ui-400 rounded-lg  animate-delay ${
                      StartAnim8 === true ? "animate-slide-in-bottom" : ""
                    }`}
                    style={{ "--delay": "calc(1 * 0.05s)" }}
                  ></li>
                  <li
                    className={`w-full h-16 bg-ui-400 rounded-lg  animate-delay ${
                      StartAnim8 === true ? "animate-slide-in-bottom" : ""
                    }`}
                    style={{ "--delay": "calc(2 * 0.05s)" }}
                  ></li>
                  <li
                    className={`w-full h-16 bg-ui-400 rounded-lg  animate-delay ${
                      StartAnim8 === true ? "animate-slide-in-bottom" : ""
                    }`}
                    style={{ "--delay": "calc(3 * 0.05s)" }}
                  ></li>
                  <li
                    className={`w-full h-16 bg-ui-400 rounded-lg  animate-delay ${
                      StartAnim8 === true ? "animate-slide-in-bottom" : ""
                    }`}
                    style={{ "--delay": "calc(4 * 0.05s)" }}
                  ></li>
                  <li
                    className={`w-full h-16 bg-ui-400 rounded-lg  animate-delay ${
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
                  src="//jsfiddle.net/augustin_hiebel/3cLmazgt/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
