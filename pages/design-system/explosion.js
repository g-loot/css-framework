import React, { useState } from "react";

import Lottie from "lottie-react";
import LottieExplosion1 from "../../assets/animations/explosion_stryda_1.json";
import LottieExplosion10 from "../../assets/animations/explosion-10.json";
import LottieExplosion11 from "../../assets/animations/explosion-11.json";
import LottieExplosion2 from "../../assets/animations/explosion_stryda_2.json";
import LottieExplosion3 from "../../assets/animations/explosion_stryda_3.json";
import LottieExplosion4 from "../../assets/animations/explosion_stryda_4.json";
import LottieExplosion5 from "../../assets/animations/explosion_stryda_5.json";
import LottieExplosion6 from "../../assets/animations/explosion_stryda_6.json";
import LottieExplosion7 from "../../assets/animations/explosion_stryda_7.json";
import LottieExplosion8 from "../../assets/animations/explosion_stryda_8.json";
import LottieExplosion9 from "../../assets/animations/explosion_stryda_9.json";
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

  function handleStartAnim1() {
    setStartAnim1(true);
    const timer = setTimeout(() => {
      setStartAnim1(false);
    }, 833);
    return () => clearTimeout(timer);
  }
  function handleStartAnim2() {
    setStartAnim2(true);
    const timer = setTimeout(() => {
      setStartAnim2(false);
    }, 1333);
    return () => clearTimeout(timer);
  }
  function handleStartAnim3() {
    setStartAnim3(true);
    const timer = setTimeout(() => {
      setStartAnim3(false);
    }, 1333);
    return () => clearTimeout(timer);
  }
  function handleStartAnim4() {
    setStartAnim4(true);
    const timer = setTimeout(() => {
      setStartAnim4(false);
    }, 2500);
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
    setStartAnim7(true);
    const timer = setTimeout(() => {
      setStartAnim7(false);
    }, 1000);
    return () => clearTimeout(timer);
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
    setStartAnim11(true);
    const timer = setTimeout(() => {
      setStartAnim11(false);
    }, 1000);
    return () => clearTimeout(timer);
  }

  return (
    <>
      <div className="flex justify-between items-baseline">
        <h1 className="mb-2">Explosion</h1>
        <a
          href="https://res.cloudinary.com/gloot/raw/upload/v1675254905/Stryda/animations/explosions.zip"
          target="_blank"
          rel="noopener noreferrer"
          className="button button-sm button-secondary"
        >
          <span className="icon icon-data-download" />
          <span>Download json files</span>
        </a>
      </div>

      {/* Explosion #1 */}
      <div className="mb-12" id="explosion-1">
        <h2 className="h3 mb-3">Explosion #1</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="relative w-72 h-72 flex items-center justify-center mx-auto">
                  {StartAnim1 && (
                    <div className="lottie-blur absolute inset-0">
                      <Lottie
                        animationData={LottieExplosion1}
                        loop={false}
                        autoplay={true}
                      />
                    </div>
                  )}
                </div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim1.bind(this)}
                    disabled={StartAnim1}
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
                  src="//jsfiddle.net/augustin_hiebel/trxmq941/embedded/js,html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explosion #2 */}
      <div className="mb-12" id="explosion-2">
        <h2 className="h3 mb-3">Explosion #2</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="relative w-72 h-72 flex items-center justify-center mx-auto">
                  {StartAnim2 && (
                    <div className="lottie-blur absolute inset-0">
                      <Lottie
                        animationData={LottieExplosion2}
                        loop={false}
                        autoplay={true}
                      />
                    </div>
                  )}
                </div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim2.bind(this)}
                    disabled={StartAnim2}
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
                  src="//jsfiddle.net/augustin_hiebel/7ugh8enp/embedded/js,html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explosion #3 */}
      <div className="mb-12" id="explosion-3">
        <h2 className="h3 mb-3">Explosion #3</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="relative w-72 h-72 flex items-center justify-center mx-auto">
                  {StartAnim3 && (
                    <div className="lottie-blur absolute inset-0">
                      <Lottie
                        animationData={LottieExplosion3}
                        loop={false}
                        autoplay={true}
                      />
                    </div>
                  )}
                </div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim3.bind(this)}
                    disabled={StartAnim3}
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
                  src="//jsfiddle.net/augustin_hiebel/5rakeuLq/embedded/js,html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explosion #4 */}
      <div className="mb-12" id="explosion-4">
        <h2 className="h3 mb-3">Explosion #4</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="relative w-72 h-72 flex items-center justify-center mx-auto">
                  {StartAnim4 && (
                    <div className="lottie-blur absolute inset-0">
                      <Lottie
                        animationData={LottieExplosion4}
                        loop={false}
                        autoplay={true}
                      />
                    </div>
                  )}
                </div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim4.bind(this)}
                    disabled={StartAnim4}
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
                  src="//jsfiddle.net/augustin_hiebel/a3jp4s96/embedded/js,html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explosion #5 */}
      <div className="mb-12" id="explosion-5">
        <h2 className="h3 mb-3">Explosion #5</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="relative w-72 h-72 flex items-center justify-center mx-auto">
                  {StartAnim5 && (
                    <div className="lottie-blur absolute inset-0">
                      <Lottie
                        animationData={LottieExplosion5}
                        loop={false}
                        autoplay={true}
                      />
                    </div>
                  )}
                </div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim5.bind(this)}
                    disabled={StartAnim5}
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
                  src="//jsfiddle.net/augustin_hiebel/tjzpcs4g/embedded/js,html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explosion #6 */}
      <div className="mb-12" id="explosion-6">
        <h2 className="h3 mb-3">Explosion #6</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="relative w-72 h-72 flex items-center justify-center mx-auto">
                  {StartAnim6 && (
                    <div className="lottie-blur absolute inset-0">
                      <Lottie
                        animationData={LottieExplosion6}
                        loop={false}
                        autoplay={true}
                      />
                    </div>
                  )}
                </div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim6.bind(this)}
                    disabled={StartAnim6}
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
                  src="//jsfiddle.net/augustin_hiebel/pkh52dc1/embedded/js,html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explosion #7 */}
      <div className="mb-12" id="explosion-7">
        <h2 className="h3 mb-3">Explosion #7</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="relative w-72 h-72 flex items-center justify-center mx-auto">
                  {StartAnim7 && (
                    <div className="lottie-blur absolute inset-0">
                      <Lottie
                        animationData={LottieExplosion7}
                        loop={false}
                        autoplay={true}
                      />
                    </div>
                  )}
                </div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim7.bind(this)}
                    disabled={StartAnim7}
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
                  src="//jsfiddle.net/augustin_hiebel/1od0mtq6/embedded/js,html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explosion #8 */}
      <div className="mb-12" id="explosion-8">
        <h2 className="h3 mb-3">Explosion #8</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="relative w-72 h-72 flex items-center justify-center mx-auto">
                  {StartAnim8 && (
                    <div className="lottie-blur absolute inset-0">
                      <Lottie
                        animationData={LottieExplosion8}
                        loop={false}
                        autoplay={true}
                      />
                    </div>
                  )}
                </div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim8.bind(this)}
                    disabled={StartAnim8}
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
                  src="//jsfiddle.net/augustin_hiebel/s05ev3L8/embedded/js,html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explosion #9 */}
      <div className="mb-12" id="explosion-9">
        <h2 className="h3 mb-3">Explosion #9</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="relative w-72 h-72 flex items-center justify-center mx-auto">
                  {StartAnim9 && (
                    <div className="lottie-blur absolute inset-0">
                      <Lottie
                        animationData={LottieExplosion9}
                        loop={false}
                        autoplay={true}
                      />
                    </div>
                  )}
                </div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim9.bind(this)}
                    disabled={StartAnim9}
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
                  src="//jsfiddle.net/augustin_hiebel/mc6b40zj/embedded/js,html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explosion #10 */}
      <div className="mb-12" id="explosion-10">
        <h2 className="h3 mb-3">Explosion #10</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="relative w-72 h-72 flex items-center justify-center mx-auto">
                  {StartAnim10 && (
                    <div className="lottie-blur absolute inset-0">
                      <Lottie
                        animationData={LottieExplosion10}
                        loop={false}
                        autoplay={true}
                      />
                    </div>
                  )}
                </div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim10.bind(this)}
                    disabled={StartAnim10}
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
                  src="//jsfiddle.net/augustin_hiebel/2waehzv1/embedded/js,html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explosion #11 */}
      <div className="mb-12" id="explosion-11">
        <h2 className="h3 mb-3">Explosion #11</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <div className="relative w-72 h-72 flex items-center justify-center mx-auto">
                  {StartAnim11 && (
                    <div className="lottie-blur absolute inset-0">
                      <Lottie
                        animationData={LottieExplosion11}
                        loop={false}
                        autoplay={true}
                      />
                    </div>
                  )}
                </div>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim11.bind(this)}
                    disabled={StartAnim11}
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
                  src="//jsfiddle.net/augustin_hiebel/a2hw01g5/embedded/js,html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
