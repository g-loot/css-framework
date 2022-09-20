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
        Icons <small className="text-ui-300 font-normal">introduction</small>
      </h1>
      <div className="format mb-8">
        <h2 id="using-icons">Using icons</h2>
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
                  displays the icon font character
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
