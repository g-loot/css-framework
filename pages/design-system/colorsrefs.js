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
        Colors <small className="text-ui-300">references</small>
      </h1>
      {DScolors.colors.map((item, indexItem) => (
        <div className="mb-8" key={item}>
          <div className="">
            <h3 className="text-3xl mb-2">{item.title}</h3>
            <div className={`grid grid-cols-3 gap-4 xl:grid-cols-5`}>
              {item.colors.map((item2, indexItem2) => (
                <>
                  <div
                    id={item2.value}
                    className={`rounded-lg overflow-hidden surface ${
                      isMultipleOfThree(indexItem2 + 1) && item.cols === 3
                        ? "col-end-4"
                        : ""
                    } ${
                      isMultipleOfThree(indexItem2) && item.cols === 3
                        ? "col-start-1"
                        : ""
                    }`}
                    key={indexItem2}
                  >
                    <div className={`h-32 relative ${item2.value}`}></div>
                    <div className="p-2">
                      <div className="flex items-baseline justify-between">
                        <div className="text-sm uppercase">{item2.name}</div>
                        <div className="text-sm font-bold">{item2.number}</div>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <div className="text-xs text-ui-300">
                          <span
                            className="tooltip tooltip-right"
                            data-tooltip="Copy"
                          >
                            <a
                              className="link"
                              onClick={() => {
                                uiContext.openToastr({
                                  size: "small",
                                  text: "Class name copied to your clipboard",
                                  color: "green",
                                  autoDelete: true,
                                  autoDeleteDelay: 2500,
                                });
                                navigator.clipboard.writeText(item2.value.replace('bg-',''));
                              }}
                            >
                              {item2.value.replace('bg-','')}
                            </a>
                          </span>
                        </div>
                        <div className="text-xs text-ui-300">
                          <span
                            className="tooltip tooltip-left"
                            data-tooltip="Copy"
                          >
                            <a
                              className="link"
                              onClick={() => {
                                uiContext.openToastr({
                                  size: "small",
                                  text: "HEX color copied to your clipboard",
                                  color: "green",
                                  autoDelete: true,
                                  autoDeleteDelay: 2500,
                                });
                                navigator.clipboard.writeText(item2.hex);
                              }}
                            >
                              {item2.hex}
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
