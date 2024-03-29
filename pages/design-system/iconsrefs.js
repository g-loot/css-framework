import React, { useContext, useState } from "react";

import DSicons from "../api/designsystem/icons.json";
import { UiContext } from "@/contexts/ui";
import { getLayout } from "@/components/DesignSystem/DSLayout";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  const [filter, setFilter] = useState("");
  const uiContext = useContext(UiContext);

  return (
    <section className="min-h-screen">
      <div className="flex items-end justify-between mb-2">
        <h1 className="mb-6">
          Icons <small className="text-ui-300">references</small>
        </h1>
        <div className="form-group mb-1">
          <div className="input-group">
            <span className="icon icon-zoom" />
            <input
              id="filter"
              name="filter"
              type="text"
              value={filter}
              placeholder="Filter icons"
              className="input-sm"
              onChange={(event) => setFilter(event.target.value)}
            />
          </div>
        </div>
      </div>

      {DSicons.categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          {!filter && <Anchor title={category.name} />}
          <div className="flex flex-wrap justify-stretch gap-2">
            {category.icons
              .filter((item) => {
                if (!filter) return true;
                if (
                  item.name.includes(filter.toLowerCase()) ||
                  item.tags.includes(filter.toLowerCase())
                ) {
                  return true;
                }
              })
              .map((item, itemIndex) => (
                <>
                  {!item.disabled && (
                    <div
                      key={itemIndex}
                      description={item.keywords}
                      className="surface surface-dimmed rounded-lg text-0 w-32 h-32 inline-flex flex-col justify-center items-center relative text-ui-300"
                    >
                      <span
                        className={`icon block text-4xl mb-4 icon-${item.name}`}
                      />
                      <div className="absolute bottom-0 p-2 text-ui-400 text-xs text-center leading-none">
                        <div className="text-xs text-ui-300">
                          <span
                            className="tooltip tooltip-top"
                            data-tooltip="Copy"
                          >
                            <a
                              className="link"
                              onClick={() => {
                                uiContext.openToastr({
                                  size: "medium",
                                  text: "Icon class name copied to your clipboard",
                                  color: "green",
                                  autoDelete: true,
                                  autoDeleteDelay: 2500,
                                });
                                navigator.clipboard.writeText(item.name);
                              }}
                            >
                              {item.name}
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ))}
          </div>
          <div className={`w-full ${filter ? "mb-2" : "mb-8"}`}></div>
        </div>
      ))}
    </section>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
