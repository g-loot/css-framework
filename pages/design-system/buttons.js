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
  const [buttonFeedbackMessage6, setButtonFeedbackMessage6] = useState("");
  const [buttonFeedbackMessage7, setButtonFeedbackMessage7] = useState("");
  const [buttonFeedbackMessage8, setButtonFeedbackMessage8] = useState("");
  const [buttonFeedbackMessage9, setButtonFeedbackMessage9] = useState("");
  const [buttonFeedbackMessage10, setButtonFeedbackMessage10] = useState("");
  const [buttonFeedbackMessage11, setButtonFeedbackMessage11] = useState("");
  const [buttonFeedbackMessage12, setButtonFeedbackMessage12]= useState("");
  const [buttonFeedbackMessage13, setButtonFeedbackMessage13]= useState("");
  const [buttonFeedbackMessage14, setButtonFeedbackMessage14] = useState("");
  const [buttonFeedbackMessage15, setButtonFeedbackMessage15] = useState("");
  const [buttonFeedbackMessage16, setButtonFeedbackMessage16]= useState("");
  const [buttonFeedbackMessage17, setButtonFeedbackMessage17]= useState("");
  const delay = 4000;
  const uiContext = useContext(UiContext);

  function buttonFeedback1(message) {
    setButtonFeedbackMessage1(message);
    const interval = setTimeout(() => {
      setButtonFeedbackMessage1("");
    }, delay);
    return () => clearTimeout(interval);
  }
  function buttonFeedback2(message) {
    setButtonFeedbackMessage2(message);
    const interval = setTimeout(() => {
      setButtonFeedbackMessage2("");
    }, delay);
    return () => clearTimeout(interval);
  }
  function buttonFeedback3(message) {
    setButtonFeedbackMessage3(message);
    const interval = setTimeout(() => {
      setButtonFeedbackMessage3("");
    }, delay);
    return () => clearTimeout(interval);
  }
  function buttonFeedback4(message) {
    setButtonFeedbackMessage4(message);
    const interval = setTimeout(() => {
      setButtonFeedbackMessage4("");
    }, delay);
    return () => clearTimeout(interval);
  }
  function buttonFeedback5(message) {
    setButtonFeedbackMessage5(message);
    const interval = setTimeout(() => {
      setButtonFeedbackMessage5("");
    }, delay);
    return () => clearTimeout(interval);
  }
  function buttonFeedback6(message) {
    setButtonFeedbackMessage6(message);
    const interval = setTimeout(() => {
      setButtonFeedbackMessage6("");
    }, delay);
    return () => clearTimeout(interval);
  }
  function buttonFeedback7(message) {
    setButtonFeedbackMessage7(message);
    const interval = setTimeout(() => {
      setButtonFeedbackMessage7("");
    }, delay);
    return () => clearTimeout(interval);
  }
  function buttonFeedback8(message) {
    setButtonFeedbackMessage8(message);
    const interval = setTimeout(() => {
      setButtonFeedbackMessage8("");
    }, delay);
    return () => clearTimeout(interval);
  }
  function buttonFeedback9(message) {
    setButtonFeedbackMessage9(message);
    const interval = setTimeout(() => {
      setButtonFeedbackMessage9("");
    }, delay);
    return () => clearTimeout(interval);
  }
  function buttonFeedback10(message) {
    setButtonFeedbackMessage10(message);
    const interval = setTimeout(() => {
      setButtonFeedbackMessage10("");
    }, delay);
    return () => clearTimeout(interval);
  }
  function buttonFeedback11(message) {
    setButtonFeedbackMessage11(message);
    const interval = setTimeout(() => {
      setButtonFeedbackMessage11("");
    }, delay);
    return () => clearTimeout(interval);
  }
  function buttonFeedback12(message) {
    setButtonFeedbackMessage12(message);
    const interval = setTimeout(() => {
      setButtonFeedbackMessage12("");
    }, delay);
    return () => clearTimeout(interval);
  }
  function buttonFeedback13(message) {
    setButtonFeedbackMessage13(message);
    const interval = setTimeout(() => {
      setButtonFeedbackMessage13("");
    }, delay);
    return () => clearTimeout(interval);
  }
  function buttonFeedback14(message) {
    setButtonFeedbackMessage14(message);
    const interval = setTimeout(() => {
      setButtonFeedbackMessage14("");
    }, delay);
    return () => clearTimeout(interval);
  }
  function buttonFeedback15(message) {
    setButtonFeedbackMessage15(message);
    const interval = setTimeout(() => {
      setButtonFeedbackMessage15("");
    }, delay);
    return () => clearTimeout(interval);
  }
  function buttonFeedback16(message) {
    setButtonFeedbackMessage16(message);
    const interval = setTimeout(() => {
      setButtonFeedbackMessage16("");
    }, delay);
    return () => clearTimeout(interval);
  }
  function buttonFeedback17(message) {
    setButtonFeedbackMessage17(message);
    const interval = setTimeout(() => {
      setButtonFeedbackMessage17("");
    }, delay);
    return () => clearTimeout(interval);
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

          {/* variant:error */}
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">Error</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Text only
                  </div>
                  <div className="flex-1">
                    <Button label="Button Label" variant="error"></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Icon + text
                  </div>
                  <div className="flex-1">
                    <Button
                      label="Button Label"
                      variant="error"
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
                      variant="error"
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
                    <Button variant="error" icon="icon-heart"></Button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/wj6bdfxy/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          {/* variant:sucess */}
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">Success</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Text only
                  </div>
                  <div className="flex-1">
                    <Button label="Button Label" variant="success"></Button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Icon + text
                  </div>
                  <div className="flex-1">
                    <Button
                      label="Button Label"
                      variant="success"
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
                      variant="success"
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
                    <Button variant="success" icon="icon-heart"></Button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/uo0z3f5k/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          {/* variant:claim */}
          {/*
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
          */}

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
                    Power token
                  </div>
                  <div className="flex-1 flex flex-wrap gap-2">
                    <Button
                      label="Purchase"
                      variant="primary"
                      currency="powertoken"
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
                      currency="powertoken"
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
                      currency="powertoken"
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
                      currency="powertoken"
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
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Extra small
                  </div>
                  <div className="flex-1 flex flex-col items-start flex-wrap gap-2">
                    <Button
                      label="Button Label"
                      variant="primary"
                      size="xs"
                    ></Button>
                    <Button
                      label="Button Label"
                      variant="secondary"
                      icon="icon-heart"
                      size="xs"
                    ></Button>
                    <Button
                      label="Purchase"
                      variant="primary"
                      currency="coin"
                      amount="15,000"
                      size="xs"
                    ></Button>
                    <Button
                      variant="tertiary"
                      icon="icon-heart"
                      size="xs"
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
        <div className="surface rounded-lg p-4">
          <div
            className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12"
            id="status-loading"
          >
            <h3 className="h4 mb-3">Loading</h3>
            <p className="mb-5">
              Display a loading effect by adding the
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
                        <span className="icon icon-coin"></span>
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

          <div
            className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12"
            id="status-disabled"
          >
            <h3 className="h4 mb-3">Disabled</h3>
            <p className="mb-5">
              Disable a button by adding either a
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
                  navigator.clipboard.writeText("is-disabled");
                }}
              >
                .is-disabled
              </code>{" "}
              class name or a{" "}
              <code
                className="interactive text-xs"
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
                        <span className="icon icon-coin"></span>
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
            <p className="mb-5">
              Simply add the{" "}
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
                        <span className="icon icon-coin"></span>
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
        </div>
      </div>

      {/* feedback */}
      <div className="mb-12" id="feedback">
        <h2 className="h3 mb-3">Feedback</h2>

        <div className="surface rounded-lg p-4">
          <div
            className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12"
            id="feedback-in-label"
          >
            <h3 className="h4 mb-3">In label</h3>
            <p className="mb-5">
              Display a textual feedback to your button by adding a
              <code
                className="interactive text-xs"
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
              attribute to your button. The feeedback message is visible for 4
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
                      onClick={buttonFeedback5.bind(
                        this,
                        "Enrolled successfully!"
                      )}
                    >
                      <div>
                        <span>Purchase</span>
                      </div>
                      <div>
                        <span className="icon icon-coin"></span>
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
          <div
            id="feedback-in-tooltip"
          >
            <h3 className="h4 mb-3">In tooltip</h3>
            <p className="mb-5">
              You can choose to put the feedback in a tooltip message by adding a
              <code
                className="interactive text-xs"
                onClick={() => {
                  uiContext.openToastr({
                    size: "small",
                    text: "attribute copied to your clipboard",
                    color: "green",
                    autoDelete: true,
                    autoDeleteDelay: 2500,
                  });
                  navigator.clipboard.writeText('data-feedback-icon="success"');
                }}
              >
                &#91;data-feedback-icon=&#34;success || error || attention&#34;&#93;
              </code>{" "}
              attribute to your button. Like the label feeedback, the message is visible for 4
              seconds.
            </p>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Success
                  </div>
                  <div className="flex-1 flex gap-8 items-center">
                    <button
                      className="button rounded-full button-success"
                      data-feedback={buttonFeedbackMessage6}
                      data-feedback-icon="success"
                      onClick={buttonFeedback6.bind(this, "Link copied successfully")}
                    >
                      <span className="icon icon-network-communication" />
                    </button>
                    <button
                      className="button rounded-full button-secondary"
                      data-feedback={buttonFeedbackMessage7}
                      data-feedback-icon="success"
                      onClick={buttonFeedback7.bind(this, "Link copied successfully")}
                    >
                      <span className="icon icon-network-communication" />
                    </button>
                    <button
                      className="button rounded-full button-tertiary"
                      data-feedback={buttonFeedbackMessage8}
                      data-feedback-icon="success"
                      onClick={buttonFeedback8.bind(this, "Link copied successfully")}
                    >
                      <span className="icon icon-network-communication" />
                    </button>
                    <button
                      className="button rounded-full button-ghost"
                      data-feedback={buttonFeedbackMessage9}
                      data-feedback-icon="success"
                      onClick={buttonFeedback9.bind(this, "Link copied successfully")}
                    >
                      <span className="icon icon-network-communication" />
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Error
                  </div>
                  <div className="flex-1 flex gap-8 items-center">
                    <button
                      className="button rounded-full button-error"
                      data-feedback={buttonFeedbackMessage10}
                      data-feedback-icon="error"
                      onClick={buttonFeedback10.bind(this, "An error occurred")}
                    >
                      <span className="icon icon-network-communication" />
                    </button>
                    <button
                      className="button rounded-full button-secondary"
                      data-feedback={buttonFeedbackMessage11}
                      data-feedback-icon="error"
                      onClick={buttonFeedback11.bind(this, "An error occurred")}
                    >
                      <span className="icon icon-network-communication" />
                    </button>
                    <button
                      className="button rounded-full button-tertiary"
                      data-feedback={buttonFeedbackMessage12}
                      data-feedback-icon="error"
                      onClick={buttonFeedback12.bind(this, "An error occurred")}
                    >
                      <span className="icon icon-network-communication" />
                    </button>
                    <button
                      className="button rounded-full button-ghost"
                      data-feedback={buttonFeedbackMessage13}
                      data-feedback-icon="error"
                      onClick={buttonFeedback13.bind(this, "An error occurred")}
                    >
                      <span className="icon icon-network-communication" />
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Attention
                  </div>
                  <div className="flex-1 flex gap-8 items-center">
                    <button
                      className="button rounded-full button-attention"
                      data-feedback={buttonFeedbackMessage14}
                      data-feedback-icon="attention"
                      onClick={buttonFeedback14.bind(this, "Please be careful")}
                    >
                      <span className="icon icon-network-communication" />
                    </button>
                    <button
                      className="button rounded-full button-secondary"
                      data-feedback={buttonFeedbackMessage15}
                      data-feedback-icon="attention"
                      onClick={buttonFeedback15.bind(this, "Please be careful")}
                    >
                      <span className="icon icon-network-communication" />
                    </button>
                    <button
                      className="button rounded-full button-tertiary"
                      data-feedback={buttonFeedbackMessage16}
                      data-feedback-icon="attention"
                      onClick={buttonFeedback16.bind(this, "Please be careful")}
                    >
                      <span className="icon icon-network-communication" />
                    </button>
                    <button
                      className="button rounded-full button-ghost"
                      data-feedback={buttonFeedbackMessage17}
                      data-feedback-icon="attention"
                      onClick={buttonFeedback17.bind(this, "Please be careful")}
                    >
                      <span className="icon icon-network-communication" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/3s8qwck6/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Responsive sizes */}
      <div className="mb-12" id="responsive-sizes">
        <h2 className="h3 mb-3">Responsive sizes</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <p className="text-ui-300 mb-6">
                  You can change the size of the button based on the screen size
                  using the following class name:{" "}
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
                      navigator.clipboard.writeText("sm:button-lg");
                    }}
                  >
                    .&#123;xx&#x7D;:button-&#123;xx&#x7D;
                  </code>.<br />
                  &#123;xx&#x7D; can be <code className="text-xs">xs</code>, <code className="text-xs">sm</code>,{" "}
                  <code className="text-xs">md</code>, <code className="text-xs">lg</code>, <code className="text-xs">xl</code>.
                </p>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/2 text-ui-400 text-right text-sm leading-tight">
                    In this example, the small button will become medium above
                    768px (md) and large above 1024px (lg).
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-4 justify-start">
                      <div className="button button-sm md:button-md lg:button-lg">
                        <span>I change size</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/b8cvks63/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
