import React, { useEffect, useState } from "react";

import DSHead from "@/components/DesignSystem/DSHead";
import Footer from "@/components/Footer/Footer";
import { FrameworkPages } from "../api/framework/pages";
import Link from "next/link";
import TopbarFramework from "@/components/Topbar/Topbar-framework";
import { getLayout } from "@/components/SiteLayout";

const Index = () => {
  const [filter, setFilter] = useState("");
  const [checked, setChecked] = useState(false);
  const [showDeprecated, setShowDeprecated] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const totalPagesCount = FrameworkPages.sections.reduce((acc, curr) => {
      const currentSetionPagesCount = curr.pages.filter((g) => !g.title).length;
      acc = acc + currentSetionPagesCount;
      return acc;
    }, 0);

    setPageCount(totalPagesCount);
  }, [FrameworkPages]);

  function SwitchTheme(isChecked, theme) {
    if (isChecked === false) {
      document.body.setAttribute("data-theme", theme);
    } else {
      document.body.setAttribute("data-theme", "");
    }
    setChecked(!checked);
  }

  return (
    <>
      <DSHead title="Welcome" />
      <TopbarFramework />
      <div className="relative">
        <div className="py-16">
          <div className="container max-w-md">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-2 px-4 md:px-0">
              <h1 className="">
                Prototype{" "}
                <small className="font-normal text-ui-300 text-base">
                  {pageCount} screens
                </small>
              </h1>
              <div className="flex flex-col items-center justify-between md:justify-end gap-2">
                <div className="form-toggle text-sm text-ui-300">
                  <input
                    type="checkbox"
                    name="notification"
                    id="showDeprecated"
                    onChange={(event) =>
                      setShowDeprecated(event.target.checked)
                    }
                  />
                  <label htmlFor="showDeprecated">
                    <i className="form-icon" /> Show deprecated
                  </label>
                </div>
                <div className="form-group mb-1">
                  <div className="input-group">
                    <span className="icon icon-zoom" />
                    <input
                      id="filter"
                      name="filter"
                      type="text"
                      value={filter}
                      placeholder="Search"
                      className="input-sm"
                      onChange={(event) => setFilter(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`overflow-hidden ${
                filter ? "surface md:rounded-lg -mb-2" : ""
              }`}
            >
              {FrameworkPages.sections.map((section, sectionIndex) => (
                <>
                  <section
                    className={`${
                      filter
                        ? ""
                        : "surface md:rounded-lg mb-2 animate-slide-in-bottom animate-delay"
                    }`}
                    style={{ "--delay": "calc(" + sectionIndex + " * 0.05s)" }}
                  >
                    <div className={`item ${filter ? "hidden" : ""}`}>
                      <div className="item-body py-0.5 px-4">
                        <div className="item-title text-xl text-ui-100">
                          {section.title}
                        </div>
                      </div>
                    </div>
                    <ul className="item-actions-hidden">
                      {section.pages
                        .filter((item) => {
                          if (!filter) return true;
                          if (
                            !item.title &&
                            (item.label.includes(filter.toLowerCase()) ||
                              item.tags.includes(filter.toLowerCase()))
                          ) {
                            return true;
                          }
                        })
                        .map((item) => (
                          <>
                            {(!item.deprecated || showDeprecated) && (
                              <li
                                className={`item border-ui-700  ${
                                  item.isDisabled ? "is-disabled" : ""
                                } ${item.title ? "pointer-events-none" : ""} ${
                                  filter ? "border-b" : ""
                                }`}
                              >
                                <div
                                  className={`item-body ${
                                    item.tab ? "" : "pl-4 md:pl-8"
                                  } ${item.tab === 1 ? "pl-8 md:pl-16" : ""}  ${
                                    item.tab === 2 ? "pl-12 md:pl-24" : ""
                                  } ${item.tab === 3 ? "pl-16 md:pl-32" : ""} ${
                                    item.tab === 4 ? "pl-20 md:pl-40" : ""
                                  }`}
                                >
                                  <div className="item-title text-ui-300 flex gap-2">
                                    <Link
                                      href={`/prototype/${item.url}${
                                        item.query ? "?" : ""
                                      }${item.query}`}
                                    >
                                      <a className="flex items-center gap-2">
                                        {item.tab === 2 && <>—</>}
                                        {item.tab === 1 && <>&#8226;</>}
                                        {!item.tab && (
                                          <>
                                            <span className="icon icon-circle-caret-right" />
                                          </>
                                        )}
                                        <span>{item.label}</span>
                                      </a>
                                    </Link>
                                    {item.chip && (
                                      <span className="text-xs text-ui-300 uppercase leading-tight rounded py-1 px-1.5 bg-ui-900/75">
                                        {item.chip}
                                      </span>
                                    )}
                                    {item.new && <i className="badge" />}
                                  </div>
                                </div>
                                <div className="item-actions hidden xl:flex">
                                  <div className="flex gap-2">
                                    <Link
                                      href={`/prototype/${item.url}${
                                        item.query ? "?" : ""
                                      }${item.query}`}
                                    >
                                      <a className="button button-sm button-primary">
                                        <span>View</span>
                                      </a>
                                    </Link>
                                    <Link
                                      href={`prototype/${item.url}?ads=true${
                                        item.query ? "&" : ""
                                      }${item.query}`}
                                    >
                                      <a className="button button-sm button-secondary">
                                        <span>View with ads</span>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </li>
                            )}
                          </>
                        ))}
                    </ul>
                  </section>
                </>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

Index.getLayout = getLayout;

export default Index;
