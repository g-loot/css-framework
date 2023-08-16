import React, { useContext } from "react";

import { UiContext } from "@/contexts/ui";
import { getLayout } from "@/components/DesignSystem/DSLayout";

const DSpage = () => {
  const uiContext = useContext(UiContext);
  return (
    <>
      <h1 className="mb-6">
        Typography <small className="text-ui-300">introduction</small>
      </h1>
      <div className="format mb-8" id="font-family">
        <h2 id="using-icons">Font family</h2>
        <p>The default font is Barlow while all headings are using Rama Gothic. You can specify which font to use on any element using the following class names:</p>
        <div className="surface rounded-lg overflow-x-auto mb-10">
          <table className="table w-full">
            <tbody>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("font-headings");
                      }}
                    >
                      .font-headings
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  loads <b>Podium Sharp</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("font-body");
                      }}
                    >
                      .font-body
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  loads <b>Roboto Condensed</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="format mb-8" id="font-weight">
        <h2 id="using-icons">Font weight</h2>
        <p>You can specify the weight of a text with the following class names:</p>
        <div className="surface rounded-lg overflow-x-auto mb-10">
          <table className="table w-full">
            <tbody>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("font-normal");
                      }}
                    >
                      .font-normal
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  puts a font weight of <b>300 (normal)</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("font-bold");
                      }}
                    >
                      .font-bold
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  puts a font weight of <b>700 (bold)</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="format mb-8" id="font-style">
        <h2 id="using-icons">Font style</h2>
        <p>You can specify the style of a text with the following class names:</p>
        <div className="surface rounded-lg overflow-x-auto mb-10">
          <table className="table w-full">
            <tbody>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("italic");
                      }}
                    >
                      .italic
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  puts the text in <b>italic</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("not-italic");
                      }}
                    >
                      .not-italic
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  displays the text <b>normally</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="format mb-8" id="font-size">
        <h2 id="using-icons">Font size</h2>
        <p>You can specify the size of a text with the following class names:</p>
        <div className="surface rounded-lg overflow-x-auto mb-10">
          <table className="table w-full">
            <tbody>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("text-xs");
                      }}
                    >
                      .text-xs
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the size to <b>0.75rem (12px)</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("text-sm");
                      }}
                    >
                      .text-sm
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the size to <b>0.875rem (14px)</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("text-base");
                      }}
                    >
                      .text-base
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the size to <b>1rem (16px)</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("text-lg");
                      }}
                    >
                      .text-lg
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the size to <b>1.125rem (18px)</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("text-xl");
                      }}
                    >
                      .text-xl
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the size to <b>1.25rem (20px)</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("text-2xl");
                      }}
                    >
                      .text-2xl
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the size to <b>1.5rem (24px)</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("text-3xl");
                      }}
                    >
                      .text-3xl
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the size to <b>1.875rem (30px)</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("text-4xl");
                      }}
                    >
                      .text-4xl
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the size to <b>2.25rem (36px)</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("text-5xl");
                      }}
                    >
                      .text-5xl
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the size to <b>2.25rem (36px)</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("text-6xl");
                      }}
                    >
                      .text-6xl
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the size to <b>2.25rem (36px)</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("text-7xl");
                      }}
                    >
                      .text-7xl
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the size to <b>2.25rem (36px)</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("text-8xl");
                      }}
                    >
                      .text-8xl
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the size to <b>6rem (96px)</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("text-9xl");
                      }}
                    >
                      .text-9xl
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the size to <b>8rem (128px)</b>
                </td>
              </tr>
        
            </tbody>
          </table>
        </div>
      </div>
      <div className="format mb-8" id="line-height">
        <h2 id="using-icons">Line height</h2>
        <p>You can specify the line height of a text with the following class names:</p>
        <div className="surface rounded-lg overflow-x-auto mb-10">
          <table className="table w-full">
            <tbody>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("leading-none");
                      }}
                    >
                      .leading-none
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the size to <b>1 (100%)</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("leading-tight");
                      }}
                    >
                      .leading-tight
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the size to <b>1.25 (125%)</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("leading-snug");
                      }}
                    >
                      .leading-snug
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the size to <b>1.375 (137.5%)</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("leading-normal");
                      }}
                    >
                      .leading-normal
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the size to <b>1.5 (150%)</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("leading-relaxed");
                      }}
                    >
                      .leading-relaxed
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the size to <b>1.625 (165.5%)</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("leading-loose");
                      }}
                    >
                      .leading-loose
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the size to <b>2 (200%)</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="format mb-8" id="letter-spacing">
        <h2 id="using-icons">Letter spacing</h2>
        <p>You can specify the tracking (letter spacing) of a text with the following class names:</p>
        <div className="surface rounded-lg overflow-x-auto mb-10">
          <table className="table w-full">
            <tbody>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("tracking-tighter");
                      }}
                    >
                      .tracking-tighter
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the tracking to <b>-0.05em</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("tracking-tight");
                      }}
                    >
                      .tracking-tight
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the tracking to <b>-0.025em</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("tracking-normal");
                      }}
                    >
                      .tracking-normal
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the tracking to <b>0em</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("tracking-wide");
                      }}
                    >
                      .tracking-wide
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the tracking to <b>0.025em</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("tracking-widest");
                      }}
                    >
                      .tracking-widest
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the tracking to <b>0.1em</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("tracking-wider");
                      }}
                    >
                      .tracking-wider
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the tracking to <b>0.05em</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="format mb-8" id="text-align">
        <h2 id="using-icons">Text align</h2>
        <p>You can specify the alignment of text with the following class names:</p>
        <div className="surface rounded-lg overflow-x-auto mb-10">
          <table className="table w-full">
            <tbody>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("text-left");
                      }}
                    >
                      .text-left
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the text align to <b>left</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("text-center");
                      }}
                    >
                      .text-center
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the text align to <b>center</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("text-right");
                      }}
                    >
                      .text-right
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the text align to <b>right</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("text-justify");
                      }}
                    >
                      .text-justify
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the text align to <b>justify</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("text-start");
                      }}
                    >
                      .text-start
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the text align to <b>start</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tooltip tooltip-right" data-tooltip="Copy">
                    <code
                      className="interactive text-xs"
                      onClick={() => {
                        uiContext.openToastr({
                          size: "small",
                          text: "Class name copied to your clipboard",
                          color: "green",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        });
                        navigator.clipboard.writeText("text-end");
                      }}
                    >
                      .text-end
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  set the text align to <b>end</b>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
