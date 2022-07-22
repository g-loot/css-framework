import React, { useState } from "react";

import DSHead from "../../components/DesignSystem/DSHead";
import Footer from "../../components/Footer/Footer";
import FrameworkPages from "../../pages/api/framework/pages.json";
import Link from "next/link";
import TopbarFramework from "../../components/Topbar/Topbar-framework";
import { getLayout } from "../../components/SiteLayout";

const Index = () => {
  const [filter, setFilter] = useState("");
  const [checked, setChecked] = useState(false);

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
        <div className="fixed z-0 inset-0 pointer-events-none overflow-hidden">
          <div className="absolute z-0 rounded-full bg-gradient-to-r from-main via-blue-700 to-main/0 w-96 h-60 scale-y-75 blur-3xl transform-gpu -rotate-45 -bottom-40 -left-24 "></div>
          <div className="absolute z-0 rounded-full bg-gradient-to-r from-main via-blue-700 to-main/0 w-96 h-96 scale-y-75 blur-3xl transform-gpu -top-40 -right-48 rotate-180 "></div>
        </div>
        <div className="py-16">
          <div className="container max-w-md">
            <div className="flex items-end justify-between mb-2">
              <h1 className="text-4xl">Page listing</h1>
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
            <div
              className={`overflow-hidden ${
                filter ? "surface sm:rounded-lg -mb-2" : ""
              }`}
            >
              {FrameworkPages.sections.map((section, sectionIndex) => (
                <>
                  <section
                    className={`${filter ? "" : "surface sm:rounded-lg mb-2 animate-slide-in-bottom animate-delay"}`} style={{ '--delay': 'calc('+sectionIndex+' * 0.05s)'}}
                  >
                    <div className={`item ${filter ? "hidden" : ""}`}>
                      <div className="item-body py-0.5 px-4">
                        <div className="item-title font-headings text-xl italic text-ui-100">
                          {section.title}
                        </div>
                      </div>
                    </div>
                    <ul className="item-actions-hidden">
                      {section.pages
                        .filter((item) => {
                          if (!filter) return true;
                          if (
                            item.label.includes(filter.toLowerCase()) ||
                            item.tags.includes(filter.toLowerCase())
                          ) {
                            return true;
                          }
                        })
                        .map((item) => (
                          <>
                            <li
                              className={`item border-ui-700 ${
                                filter ? "border-b" : ""
                              }`}
                            >
                              <div className={`item-body ${item.tab ? "" : "pl-8"} ${item.tab === 1 ? "pl-16" : ""}  ${item.tab === 2 ? "pl-22" : ""}`}>
                                <div className="item-title text-ui-300 flex gap-2">
                                  <span>{item.label}</span>
                                  {item.new && (
                                    <div className='chip chip-xs chip-primary'>
                                      <span>NEW</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="item-actions">
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
