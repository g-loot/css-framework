import React from "react";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-2">Links</h1>

      {/* Structure */}
      <div className="mb-12" id="structure">
        <h2 className="h3 mb-3">Structure</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <a className="link">Yes, I am a link</a>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/4tjbgzLe/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main color */}
      <div className="mb-12" id="main-color">
        <h2 className="h3 mb-3">Main color</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <a className="link link-main">Yes, I am a link</a>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/h9k0sx53/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Underline on hover */}
      <div className="mb-12" id="hover-underline">
        <h2 className="h3 mb-3">Underline on hover</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <a className="link link-hover">Yes, I am a link</a>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/20f9e4br/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive element */}
      <div className="mb-12" id="interactive-element">
        <h2 className="h3 mb-3">Interactive element</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 text-center flex flex-wrap gap-4 items-center justify-center">
                <div className="w-24 h-24 rounded-lg bg-ui-400 interactive" />
                <div className="w-24 h-24 rounded-lg bg-ui-400 interactive" />
                <div className="w-24 h-24 rounded-lg bg-ui-400 interactive" />
                <div className="w-24 h-24 rounded-lg bg-ui-400 interactive" />
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/mx1gpt4j/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hover inside */}
      <div className="mb-12" id="hover-inside">
        <h2 className="h3 mb-3">Hover inside</h2>

        <div className="rounded-lg">
          <div className="flex-1">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-stretch">
              <div className="flex-1 surface rounded-lg relative flex flex-col items-center justify-center overflow-hidden text-center hoverinside:opacity-100 hoverinside:translate-y-0 hoverinside:scale-100">
                <div className="relative z-10">
                  <h2 className="h3">
                    Register <span className="text-main">Solo</span>
                  </h2>
                  <p className="text-ui-300 mt-4 mb-6">
                    Register solo and we will find a party for you.
                  </p>
                  <button type="button" className="button button-primary">
                    <span>Register solo</span>
                  </button>
                </div>
                <div className="absolute z-0 inset-0 hoverinside transition-all duration-300 opacity-0 translate-y-4 scale-110">
                  <span className="absolute inset-0 z-10 bg-gradient-to-b from-ui-700/95 to-ui-700/75" />
                  <img
                    className="relative z-0 object-cover object-center "
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000"
                    width="100%"
                    height="auto"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/x4echg2q/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
