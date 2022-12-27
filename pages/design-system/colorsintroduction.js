import React, { useContext } from "react";

import DScolors from "../api/designsystem/colors.json";
import { UiContext } from "../../contexts/ui";
import { getLayout } from "../../components/DesignSystem/DSLayout";

function isMultipleOfThree(number) {
  if (number % 3 == 0) {
    return true;
  } else {
    return false;
  }
}
function isAfterAMultipleofThree(number) {
  isMultipleOfThree(number - 1);
}

const DSpage = () => {
  const uiContext = useContext(UiContext);
  return (
    <>
      <h1 className="mb-6">
        Colors <small className="text-ui-300">introduction</small>
      </h1>
      <div className="format mb-8" id="using-colors">
        <h2 id="using-colors">Using colors</h2>
        <p>
          You can control the colors of any element using the generic tailwind
          class names:
        </p>
        <div className="surface rounded-lg overflow-x-auto">
          <table className="table w-full">
            <tbody>
              <tr>
                <td className="w-1/3">
                  <b>Text</b>
                </td>
                <td className="w-1/3">
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
                        navigator.clipboard.writeText("text-{color}");
                      }}
                    >
                      .text-&#123;color&#x7D;
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  <i>.text-ui-100</i>
                </td>
              </tr>
              <tr>
                <td className="w-1/3">
                  <b>Background</b>
                </td>
                <td className="w-1/3">
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
                        navigator.clipboard.writeText("bg-{color}");
                      }}
                    >
                      .bg-&#123;color&#x7D;
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  <i>.bg-ui-100</i>
                </td>
              </tr>
              <tr>
                <td className="w-1/3">
                  <b>Border</b>
                </td>
                <td className="w-1/3">
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
                        navigator.clipboard.writeText("border border-{color}");
                      }}
                    >
                      .border-&#123;color&#x7D;
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  <i>.border .border-ui-100</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="format mb-8" id="gradients">
        <h2 id="gradients">Gradients</h2>
        <p>
          To create a gradient background, first indicate the direction of the
          gradient using one of the following class names:
        </p>
        <div className="surface rounded-lg overflow-x-auto">
          <table className="table w-full">
            <tbody>
              <tr>
                <td className="w-1/3">
                  <b>Linear gradient to the bottom</b>
                </td>
                <td className="w-1/3">
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
                        navigator.clipboard.writeText("bg-gradient-to-b");
                      }}
                    >
                      .bg-gradient-to-b
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  Creates a gradient from top to bottom
                </td>
              </tr>
              <tr>
                <td className="w-1/3">
                  <b>Linear gradient to the right</b>
                </td>
                <td className="w-1/3">
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
                        navigator.clipboard.writeText("bg-gradient-to-r");
                      }}
                    >
                      .bg-gradient-to-r
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  Creates a gradient from top to right
                </td>
              </tr>
              <tr>
                <td className="w-1/3">
                  <b>Linear gradient to the top</b>
                </td>
                <td className="w-1/3">
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
                        navigator.clipboard.writeText("bg-gradient-to-t");
                      }}
                    >
                      .bg-gradient-to-t
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  Creates a gradient from top to top
                </td>
              </tr>
              <tr>
                <td className="w-1/3">
                  <b>Linear gradient to the left</b>
                </td>
                <td className="w-1/3">
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
                        navigator.clipboard.writeText("bg-gradient-to-l");
                      }}
                    >
                      .bg-gradient-to-l
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  Creates a gradient from top to left
                </td>
              </tr>
              <tr>
                <td className="w-1/3">
                  <b>Linear gradient to the bottom right</b>
                </td>
                <td className="w-1/3">
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
                        navigator.clipboard.writeText("bg-gradient-to-br");
                      }}
                    >
                      .bg-gradient-to-br
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  Creates a gradient from top to bottom right
                </td>
              </tr>
              <tr>
                <td className="w-1/3">
                  <b>Linear gradient to the bottom left</b>
                </td>
                <td className="w-1/3">
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
                        navigator.clipboard.writeText("bg-gradient-to-bl");
                      }}
                    >
                      .bg-gradient-to-bl
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  Creates a gradient from top to bottom left
                </td>
              </tr>
              <tr>
                <td className="w-1/3">
                  <b>Linear gradient to the top right</b>
                </td>
                <td className="w-1/3">
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
                        navigator.clipboard.writeText("bg-gradient-to-tr");
                      }}
                    >
                      .bg-gradient-to-tr
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  Creates a gradient from top to top right
                </td>
              </tr>
              <tr>
                <td className="w-1/3">
                  <b>Linear gradient to the top left</b>
                </td>
                <td className="w-1/3">
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
                        navigator.clipboard.writeText("bg-gradient-to-tl");
                      }}
                    >
                      .bg-gradient-to-tl
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  Creates a gradient from top to top left
                </td>
              </tr>
              <tr>
                <td className="w-1/3">
                  <b>Radial gradient from the center</b>
                </td>
                <td className="w-1/3">
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
                        navigator.clipboard.writeText("bg-gradient-radial");
                      }}
                    >
                      .bg-gradient-radial
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  Creates a radial gradient from the center
                </td>
              </tr>
              <tr>
                <td className="w-1/3">
                  <b>Radial gradient spotlight</b>
                </td>
                <td className="w-1/3">
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
                        navigator.clipboard.writeText(
                          "bg-gradient-radial-spotlight"
                        );
                      }}
                    >
                      .bg-gradient-radial-spotlight
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  Creates a spotlight radial gradient
                </td>
              </tr>
              <tr>
                <td className="w-1/3">
                  <b>Radial gradient to the bottom</b>
                </td>
                <td className="w-1/3">
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
                        navigator.clipboard.writeText(
                          "bg-gradient-radial-to-b"
                        );
                      }}
                    >
                      .bg-gradient-radial-to-b
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  Creates a radial gradient to the bottom
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Then indicates the color stops for your gradient:</p>
        <div className="surface rounded-lg overflow-x-auto">
          <table className="table w-full">
            <tbody>
              <tr>
                <td className="w-1/3">
                  <b>From (0%)</b>
                </td>
                <td className="w-1/3">
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
                        navigator.clipboard.writeText("from-{color}");
                      }}
                    >
                      .from-&#123;color&#x7D;
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  <i>.from-interaction-500</i>
                </td>
              </tr>
              <tr>
                <td className="w-1/3">
                  <b>
                    Via (50%){" "}
                    <div className="chip chip-xs chip-secondary pointer-events-none uppercase font-normal">
                      <span>optional</span>
                    </div>
                  </b>
                </td>
                <td className="w-1/3">
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
                        navigator.clipboard.writeText("via-{color}");
                      }}
                    >
                      .via-&#123;color&#x7D;
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  <i>.via-interaction-300</i>
                </td>
              </tr>
              <tr>
                <td className="w-1/3">
                  <b>To (100%)</b>
                </td>
                <td className="w-1/3">
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
                        navigator.clipboard.writeText("to-{color}");
                      }}
                    >
                      .to-&#123;color&#x7D;
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  <i>.to-blue-500</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="format mb-8" id="text-gradient">
        <h2 id="text-gradient">Text gradient</h2>
        <p>
          You can apply gradient to text elements by adding the background class
          names explained above and that following class name. Note that you cannot add strokes or shadows to text gradients.
        </p>
        <div className="surface rounded-lg overflow-x-auto">
          <table className="table w-full">
            <tbody>
              <tr>
                <td className="w-1/3">
                  <b>Enables text gradient</b>
                </td>
                <td className="w-1/3">
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
                        navigator.clipboard.writeText("text-gradient");
                      }}
                    >
                      .text-gradient
                    </code>
                  </span>
                </td>
                <td className="w-1/3 text-sm text-ui-300">
                  <i>
                    .text-gradient .bg-gradient-to-b .from-main .to-blue-500
                  </i>
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
