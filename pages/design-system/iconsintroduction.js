import React, { useContext } from "react";

import Link from "next/link";
import { UiContext } from "@/contexts/ui";
import { getLayout } from "@/components/DesignSystem/DSLayout";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  const uiContext = useContext(UiContext);
  return (
    <>
      <h1 className="mb-6">
        Icons <small className="text-ui-300">introduction</small>
      </h1>
      <Anchor title="Using icons" />
      <div className="format mb-10">
        <p>Adding an icon is achieved by using the following icons:</p>
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
                        navigator.clipboard.writeText("icon");
                      }}
                    >
                      .icon
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  loads the font icon and additional css rules
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
                        navigator.clipboard.writeText("icon-{ref}");
                      }}
                    >
                      .icon-&#123;ref&#x7D;
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  displays the icon font character{" "}
                  <Link href="/design-system/iconsrefs">
                    <a className="link link-main">view all icons</a>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Anchor title="Example" />
      <div className="format mb-10">
        <p>
          Here is an example of how to use icons. Use the{" "}
          <Link href="/design-system/typographyintroduction">
            <a className="link link-main">typography</a>
          </Link>{" "}
          and{" "}
          <Link href="/design-system/colorsintroduction">
            <a className="link link-main">colors</a>
          </Link>{" "}
          class names to style it the way you want.
        </p>
        <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
          <div className="flex-1 flex items-center justify-center">
            <span className="icon icon-ticket text-9xl text-gradient bg-gradient-to-b from-gold-700 to-gold-300" />
          </div>
          <div className="flex-1">
            <iframe
              className="rounded"
              width="100%"
              height="100"
              src="//jsfiddle.net/augustin_hiebel/n9x7ao0e/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
            ></iframe>
          </div>
        </div>
      </div>
      <Anchor title="Loading" />
      <div className="format mb-10">
        <p>
          By adding the
          <span className="tooltip" data-tooltip="Copy">
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
                navigator.clipboard.writeText("is-loading");
              }}
            >
              .is-loading
            </code>
          </span>{" "}
          class name on an icon, you can turn it into a loading indicator.
        </p>
        <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
          <div className="flex-1 flex items-center justify-center">
            <span className="icon icon-stryda-symbol is-loading" />
          </div>
          <div className="flex-1">
            <iframe
              className="rounded"
              width="100%"
              height="100"
              src="//jsfiddle.net/augustin_hiebel/q5cprg4o/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
