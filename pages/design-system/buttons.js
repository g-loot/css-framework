import React, { useContext, useState } from "react";

import Button from "../../components/Button/Button";
import { UiContext } from "../../contexts/ui";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
  const [buttonFeedbackMessage1, setButtonFeedbackMessage1] = useState("");
  const [buttonFeedbackMessage2, setButtonFeedbackMessage2] = useState("");
  const [buttonFeedbackMessage3, setButtonFeedbackMessage3] = useState("");
  const [buttonFeedbackMessage4, setButtonFeedbackMessage4] = useState("");
  const [buttonFeedbackMessage5, setButtonFeedbackMessage5] = useState("");
  const uiContext = useContext(UiContext);

  function buttonFeedback1(message) {
    setButtonFeedbackMessage1(message);
    const interval1 = setTimeout(() => {
      setButtonFeedbackMessage1("");
    }, 4000);
    return () => clearTimeout(interval1);
  }
  function buttonFeedback2(message) {
    setButtonFeedbackMessage2(message);
    const interval2 = setTimeout(() => {
      setButtonFeedbackMessage2("");
    }, 4000);
    return () => clearTimeout(interval2);
  }
  function buttonFeedback3(message) {
    setButtonFeedbackMessage3(message);
    const interval3 = setTimeout(() => {
      setButtonFeedbackMessage3("");
    }, 4000);
    return () => clearTimeout(interval3);
  }
  function buttonFeedback4(message) {
    setButtonFeedbackMessage4(message);
    const interval4 = setTimeout(() => {
      setButtonFeedbackMessage4("");
    }, 4000);
    return () => clearTimeout(interval4);
  }
  function buttonFeedback5(message) {
    setButtonFeedbackMessage5(message);
    const interval5 = setTimeout(() => {
      setButtonFeedbackMessage5("");
    }, 4000);
    return () => clearTimeout(interval4);
  }

  return (
    <>
      <h1 className="mb-2">Buttons</h1>

      {/* variant */}
      <div className="mb-12" id="variants">
        <h2 className="h3 mb-3">Variants</h2>

        {/* variant: primary */}
        <div className="surface rounded-lg p-4">
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">Primary</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Text only
                  </div>
                  <div className="flex-1">
                    <Button label="Button Label" variant="primary"></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Icon + text
                  </div>
                  <div className="flex-1">
                    <Button
                      label="Button Label"
                      variant="primary"
                      icon="icon-heart"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Text + icon
                  </div>
                  <div className="flex-1">
                    <Button
                      label="Button Label"
                      variant="primary"
                      icon="icon-heart"
                      iconDirection="right"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Icon only
                  </div>
                  <div className="flex-1">
                    <Button variant="primary" icon="icon-heart"></Button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/592j71gs/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          {/* variant:secondary */}
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">Secondary</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Text only
                  </div>
                  <div className="flex-1">
                    <Button label="Button Label" variant="secondary"></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Icon + text
                  </div>
                  <div className="flex-1">
                    <Button
                      label="Button Label"
                      variant="secondary"
                      icon="icon-heart"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Text + icon
                  </div>
                  <div className="flex-1">
                    <Button
                      label="Button Label"
                      variant="secondary"
                      icon="icon-heart"
                      iconDirection="right"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Icon only
                  </div>
                  <div className="flex-1">
                    <Button variant="secondary" icon="icon-heart"></Button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/p4aq6z8m/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          {/* variant:tertiary */}
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">Tertiary</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Text only
                  </div>
                  <div className="flex-1">
                    <Button label="Button Label" variant="tertiary"></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Icon + text
                  </div>
                  <div className="flex-1">
                    <Button
                      label="Button Label"
                      variant="tertiary"
                      icon="icon-heart"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Text + icon
                  </div>
                  <div className="flex-1">
                    <Button
                      label="Button Label"
                      variant="tertiary"
                      icon="icon-heart"
                      iconDirection="right"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Icon only
                  </div>
                  <div className="flex-1">
                    <Button variant="tertiary" icon="icon-heart"></Button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/y015mrt8/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          {/* variant:ghost */}
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">Ghost</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Text only
                  </div>
                  <div className="flex-1">
                    <Button label="Button Label" variant="ghost"></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Icon + text
                  </div>
                  <div className="flex-1">
                    <Button
                      label="Button Label"
                      variant="ghost"
                      icon="icon-heart"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Text + icon
                  </div>
                  <div className="flex-1">
                    <Button
                      label="Button Label"
                      variant="ghost"
                      icon="icon-heart"
                      iconDirection="right"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Icon only
                  </div>
                  <div className="flex-1">
                    <Button variant="ghost" icon="icon-heart"></Button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/L7x401qt/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          {/* variant:premium */}
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">Premium</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Text only
                  </div>
                  <div className="flex-1">
                    <Button label="Button Label" variant="premium"></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Icon + text
                  </div>
                  <div className="flex-1">
                    <Button
                      label="Button Label"
                      variant="premium"
                      icon="icon-heart"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Text + icon
                  </div>
                  <div className="flex-1">
                    <Button
                      label="Button Label"
                      variant="premium"
                      icon="icon-heart"
                      iconDirection="right"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Icon only
                  </div>
                  <div className="flex-1">
                    <Button variant="premium" icon="icon-heart"></Button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/ed8xkz2c/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          {/* variant:claim */}
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">Claim</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Text only
                  </div>
                  <div className="flex-1">
                    <Button label="Button Label" variant="claim"></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Icon + text
                  </div>
                  <div className="flex-1">
                    <Button
                      label="Button Label"
                      variant="claim"
                      icon="icon-heart"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Text + icon
                  </div>
                  <div className="flex-1">
                    <Button
                      label="Button Label"
                      variant="claim"
                      icon="icon-heart"
                      iconDirection="right"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Icon only
                  </div>
                  <div className="flex-1">
                    <Button variant="claim" icon="icon-heart"></Button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/yt6Lds0x/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          {/* variant:play */}
          <div className="">
            <h3 className="h4 mb-6 lg:mb-10">Play</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Primary
                  </div>
                  <div className="flex-1">
                    <Button
                      label="Button Label"
                      variant="primary"
                      play="true"
                      icon="icon-circle-caret-right"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Secondary
                  </div>
                  <div className="flex-1">
                    <Button
                      label="Button Label"
                      variant="secondary"
                      play="true"
                      icon="icon-circle-caret-right"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Tertiary
                  </div>
                  <div className="flex-1">
                    <Button
                      label="Button Label"
                      variant="tertiary"
                      play="true"
                      icon="icon-circle-caret-right"
                    ></Button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/Lu7ad39o/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* currency */}
      <div className="mb-12" id="currency">
        <h2 className="h3 mb-3">Currency</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Coins
                  </div>
                  <div className="flex-1 flex flex-wrap gap-2">
                    <Button
                      label="Purchase"
                      variant="primary"
                      currency="coin"
                      amount="15,000"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Tokens
                  </div>
                  <div className="flex-1 flex flex-wrap gap-2">
                    <Button
                      label="Purchase"
                      variant="primary"
                      currency="token"
                      amount="10"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Ticket
                  </div>
                  <div className="flex-1 flex flex-wrap gap-2">
                    <Button
                      label="Purchase"
                      variant="primary"
                      currency="ticket"
                      amount="2"
                    ></Button>
                  </div>
                </div>

                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight"></div>
                  <div className="flex-1 flex flex-wrap gap-2">
                    <Button
                      label="Purchase"
                      variant="secondary"
                      currency="coin"
                      amount="15,000"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight"></div>
                  <div className="flex-1 flex flex-wrap gap-2">
                    <Button
                      label="Purchase"
                      variant="secondary"
                      currency="token"
                      amount="10"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight"></div>
                  <div className="flex-1 flex flex-wrap gap-2">
                    <Button
                      label="Purchase"
                      variant="secondary"
                      currency="ticket"
                      amount="2"
                    ></Button>
                  </div>
                </div>

                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight"></div>
                  <div className="flex-1 flex flex-wrap gap-2">
                    <Button
                      label="Purchase"
                      variant="tertiary"
                      currency="coin"
                      amount="15,000"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight"></div>
                  <div className="flex-1 flex flex-wrap gap-2">
                    <Button
                      label="Purchase"
                      variant="tertiary"
                      currency="token"
                      amount="10"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight"></div>
                  <div className="flex-1 flex flex-wrap gap-2">
                    <Button
                      label="Purchase"
                      variant="tertiary"
                      currency="ticket"
                      amount="2"
                    ></Button>
                  </div>
                </div>

                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight"></div>
                  <div className="flex-1 flex flex-wrap gap-2">
                    <Button
                      label="Purchase"
                      variant="premium"
                      currency="coin"
                      amount="15,000"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight"></div>
                  <div className="flex-1 flex flex-wrap gap-2">
                    <Button
                      label="Purchase"
                      variant="premium"
                      currency="token"
                      amount="10"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight"></div>
                  <div className="flex-1 flex flex-wrap gap-2">
                    <Button
                      label="Purchase"
                      variant="premium"
                      currency="ticket"
                      amount="2"
                    ></Button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/z1fpx59h/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-12" id="sizes">
        <h2 className="h3 mb-3">Sizes</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Large
                  </div>
                  <div className="flex-1 flex flex-col items-start flex-wrap gap-2">
                    <Button
                      label="Button Label"
                      variant="primary"
                      size="lg"
                    ></Button>
                    <Button
                      label="Button Label"
                      variant="secondary"
                      icon="icon-heart"
                      size="lg"
                    ></Button>
                    <Button
                      label="Purchase"
                      variant="primary"
                      currency="coin"
                      amount="15,000"
                      size="lg"
                    ></Button>
                    <Button
                      variant="tertiary"
                      icon="icon-heart"
                      size="lg"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Medium{" "}
                    <button className="chip chip-xs chip-secondary pointer-events-none uppercase">
                      <span>default</span>
                    </button>
                  </div>
                  <div className="flex-1 flex flex-col items-start flex-wrap gap-2">
                    <Button
                      label="Button Label"
                      variant="primary"
                      size="md"
                    ></Button>
                    <Button
                      label="Button Label"
                      variant="secondary"
                      icon="icon-heart"
                      size="md"
                    ></Button>
                    <Button
                      label="Purchase"
                      variant="primary"
                      currency="coin"
                      amount="15,000"
                      size="md"
                    ></Button>
                    <Button
                      variant="tertiary"
                      icon="icon-heart"
                      size="md"
                    ></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Small
                  </div>
                  <div className="flex-1 flex flex-col items-start flex-wrap gap-2">
                    <Button
                      label="Button Label"
                      variant="primary"
                      size="sm"
                    ></Button>
                    <Button
                      label="Button Label"
                      variant="secondary"
                      icon="icon-heart"
                      size="sm"
                    ></Button>
                    <Button
                      label="Purchase"
                      variant="primary"
                      currency="coin"
                      amount="15,000"
                      size="sm"
                    ></Button>
                    <Button
                      variant="tertiary"
                      icon="icon-heart"
                      size="sm"
                    ></Button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/n7b2judx/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* close */}
      <div className="mb-12" id="close">
        <h2 className="h3 mb-3">Close</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Normal
                  </div>
                  <div className="flex-1 flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="button button-primary button-close"
                      aria-label="Close"
                    >
                      <span className="icon icon-e-remove" />
                    </button>
                    <button
                      type="button"
                      className="button button-secondary button-close"
                      aria-label="Close"
                    >
                      <span className="icon icon-e-remove" />
                    </button>
                    <button
                      type="button"
                      className="button button-tertiary button-close"
                      aria-label="Close"
                    >
                      <span className="icon icon-e-remove" />
                    </button>
                    <button
                      type="button"
                      className="button button-ghost button-close"
                      aria-label="Close"
                    >
                      <span className="icon icon-e-remove" />
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Small
                  </div>
                  <div className="flex-1 flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="button button-sm button-primary button-close"
                      aria-label="Close"
                    >
                      <span className="icon icon-e-remove" />
                    </button>
                    <button
                      type="button"
                      className="button button-sm button-secondary button-close"
                      aria-label="Close"
                    >
                      <span className="icon icon-e-remove" />
                    </button>
                    <button
                      type="button"
                      className="button button-sm button-tertiary button-close"
                      aria-label="Close"
                    >
                      <span className="icon icon-e-remove" />
                    </button>
                    <button
                      type="button"
                      className="button button-sm button-ghost button-close"
                      aria-label="Close"
                    >
                      <span className="icon icon-e-remove" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/pL6kq5cm/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* status */}
      <div className="mb-12" id="status">
        <h2 className="h3 mb-3">Status</h2>

        {/* status: loading */}
        <div className="surface rounded-lg p-4" id="status-loading">
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-3">Loading</h3>
            <p className="mb-4">
              Display a loading effect by adding the
              <code
                className="interactive"
                onClick={() => {
                  uiContext.openToastr({
                    size: "small",
                    text: "class name copied to your clipboard",
                    color: "green",
                    autoDelete: true,
                    autoDeleteDelay: 2500,
                  });
                  navigator.clipboard.writeText("is-loading");
                }}
              >
                .is-loading
              </code>{" "}
              class name to your button.
            </p>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Primary
                  </div>
                  <div className="flex-1">
                    <button className="button button-primary is-loading">
                      <span>Button Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Secondary
                  </div>
                  <div className="flex-1">
                    <button className="button button-secondary is-loading">
                      <span>Button Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Tertiary
                  </div>
                  <div className="flex-1">
                    <button className="button button-tertiary is-loading">
                      <span>Button Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Premium
                  </div>
                  <div className="flex-1">
                    <button className="button button-premium is-loading">
                      <span>Button Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Claim
                  </div>
                  <div className="flex-1">
                    <button className="button button-claim is-loading">
                      <span>Button Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Currency
                  </div>
                  <div className="flex-1">
                    <button
                      type="button"
                      className="button button-primary button-currency button-coin is-loading"
                    >
                      <div>
                        <span>Purchase</span>
                      </div>
                      <div>
                        <img
                          className="dropshadow-xs"
                          src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_coin.png"
                          width="34"
                          height="34"
                          alt="coin"
                        />
                        <span>2,000</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/xn2y8qfr/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12" id="status-disabled">
            <h3 className="h4 mb-3">Disabled</h3>
            <p className="mb-4">
              Disable a button by adding either a
              <code
                className="interactive"
                onClick={() => {
                  uiContext.openToastr({
                    size: "small",
                    text: "class name copied to your clipboard",
                    color: "green",
                    autoDelete: true,
                    autoDeleteDelay: 2500,
                  });
                  navigator.clipboard.writeText("is-disabled");
                }}
              >
                .is-disabled
              </code>{" "}
              class name or a{" "}
              <code
                className="interactive"
                onClick={() => {
                  uiContext.openToastr({
                    size: "small",
                    text: "attribute copied to your clipboard",
                    color: "green",
                    autoDelete: true,
                    autoDeleteDelay: 2500,
                  });
                  navigator.clipboard.writeText("disabled");
                }}
              >
                &#91;disabled&#93;
              </code>
              attribute to your button.
            </p>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Primary
                  </div>
                  <div className="flex-1">
                    <button className="button button-primary is-disabled">
                      <span>Button Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Secondary
                  </div>
                  <div className="flex-1">
                    <button className="button button-secondary is-disabled">
                      <span>Button Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Tertiary
                  </div>
                  <div className="flex-1">
                    <button className="button button-tertiary is-disabled">
                      <span>Button Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Premium
                  </div>
                  <div className="flex-1">
                    <button className="button button-premium is-disabled">
                      <span>Button Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Claim
                  </div>
                  <div className="flex-1">
                    <button className="button button-claim is-disabled">
                      <span>Button Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Currency
                  </div>
                  <div className="flex-1">
                    <button
                      type="button"
                      className="button button-primary button-currency button-coin is-disabled"
                    >
                      <div>
                        <span>Purchase</span>
                      </div>
                      <div>
                        <img
                          className="dropshadow-xs"
                          src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_coin.png"
                          width="34"
                          height="34"
                          alt="coin"
                        />
                        <span>2,000</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/futbsxan/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          <div id="status-shining">
            <h3 className="h4 mb-3">Shining</h3>
            <p className="mb-4">
              Simply add the{" "}
              <code
                className="interactive"
                onClick={() => {
                  uiContext.openToastr({
                    size: "small",
                    text: "class name copied to your clipboard",
                    color: "green",
                    autoDelete: true,
                    autoDeleteDelay: 2500,
                  });
                  navigator.clipboard.writeText("is-shining");
                }}
              >
                .is-shining
              </code>{" "}
              class name to add a shiny animation to your button
            </p>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Primary
                  </div>
                  <div className="flex-1">
                    <button className="button button-primary is-shining">
                      <span>Button Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Premium
                  </div>
                  <div className="flex-1">
                    <button className="button button-premium is-shining">
                      <span>Button Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Claim
                  </div>
                  <div className="flex-1">
                    <button className="button button-claim is-shining">
                      <span>Button Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Currency
                  </div>
                  <div className="flex-1">
                    <button
                      type="button"
                      className="button button-primary button-currency button-coin is-shining"
                    >
                      <div>
                        <span>Purchase</span>
                      </div>
                      <div>
                        <img
                          className="dropshadow-xs"
                          src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_coin.png"
                          width="34"
                          height="34"
                          alt="coin"
                        />
                        <span>2,000</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/5e286Lgw/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          <div id="status-feedback">
            <h3 className="h4 mb-3">Feedback</h3>
            <p className="mb-4">
              Display a textual feedback to your button by adding a
              <code
                className="interactive"
                onClick={() => {
                  uiContext.openToastr({
                    size: "small",
                    text: "attribute copied to your clipboard",
                    color: "green",
                    autoDelete: true,
                    autoDeleteDelay: 2500,
                  });
                  navigator.clipboard.writeText('data-feedback=""');
                }}
              >
                &#91;data-feedback=&#34;feedback message&#34;&#93;
              </code>{" "}
              attribute to your button. Feeedback message are visible for 4
              seconds.
            </p>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Primary
                  </div>
                  <div className="flex-1">
                    <button
                      className="button button-primary"
                      data-feedback={buttonFeedbackMessage1}
                      onClick={buttonFeedback1.bind(this, "Copied!")}
                    >
                      <span>Click to copy URL</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Secondary
                  </div>
                  <div className="flex-1">
                    <button
                      className="button button-secondary"
                      data-feedback={buttonFeedbackMessage2}
                      onClick={buttonFeedback2.bind(this, "Copied!")}
                    >
                      <span>Click to copy URL</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Tertiary
                  </div>
                  <div className="flex-1">
                    <button
                      className="button button-tertiary"
                      data-feedback={buttonFeedbackMessage3}
                      onClick={buttonFeedback3.bind(this, "Copied!")}
                    >
                      <span>Click to copy URL</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Ghost
                  </div>
                  <div className="flex-1">
                    <button
                      className="button button-sm button-ghost"
                      data-feedback={buttonFeedbackMessage4}
                      onClick={buttonFeedback4.bind(
                        this,
                        "Longer feedback take 2 lines"
                      )}
                    >
                      <span>Click to copy URL</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Currency
                  </div>
                  <div className="flex-1">
                    <button
                      type="button"
                      className="button button-primary button-currency button-coin"
                      data-feedback={buttonFeedbackMessage5}
                      onClick={buttonFeedback5.bind(this, "Enrolled successfully!")}
                    >
                      <div>
                        <span>Purchase</span>
                      </div>
                      <div>
                        <img
                          className="dropshadow-xs"
                          src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_coin.png"
                          width="34"
                          height="34"
                          alt="coin"
                        />
                        <span>2,000</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/j7ubhsft/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
