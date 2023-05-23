import React, { useContext, useRef, useState } from "react";

import Footer from "../Footer/Footer";
import Link from "next/link";
import SBHead from "./SBHead";
import SBMainNav from "./SBMainNav";
import SBTopBar from "./SBTopBar";
import { SBpages } from "../../pages/api/sandbox/pages";
import { getLayout as getSiteLayout } from "../SiteLayout";
import { useRouter } from "next/router";

const SBLayout = ({ children }) => {
  const [filter, setFilter] = useState("");

  const router = useRouter();
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollTo(0, 0);

  React.useEffect(() => {
    window.scrollTo(0, myRef.current.offsetTop);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    router.push(item.url);
  };

  return (
    <>
      
      <SBHead title="Docs" />
      <div className="drawer drawer-mobile">
        <input id="drawer-ds" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content" ref={myRef}>
          <div className="block lg:hidden">
            <SBTopBar data={SBpages} />
          </div>

          <div className="pt-12 pb-24 px-4">
            <div className="container max-w-lg mx-auto">{children}</div>
          </div>
          <Footer className="px-0 md:px-8" />
        </div>
        <div className="drawer-side scrollbar-hidden">
          <label htmlFor="drawer-ds" className="drawer-overlay"></label>
          <aside className="w-80 bg-ui-800 border-r border-ui-700">
            <div className="sticky z-20 top-0 bg-ui-800/75 p-4 backdrop-blur-sm">
              <div className="flex justify-between">
                <Link href="../">
                  <a className="hover:opacity-50 transition-opacity duration-150">
                    <img
                      className=""
                      width="123"
                      height="64"
                      src="https://res.cloudinary.com/gloot/image/upload/f_auto/v1672130648/Stryda/logos/stryda-logo-main-white.svg"
                      alt="Stryda logo"
                    />
                    <div className="text-lg uppercase not-italic leading-none pl-9">
                      Sandbox
                    </div>
                  </a>
                </Link>
              </div>
              <div className="form-group mt-4">
                <div className="input-group">
                  <span className="icon icon-zoom" />
                  <input
                    id="filter"
                    name="filter"
                    type="text"
                    value={filter}
                    placeholder=""
                    autoComplete="off"
                    className="input-sm"
                    onChange={(event) => setFilter(event.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="relative z-0 px-4 pb-4">
              {SBpages.map((item, itemIndex) => (
                <div className={`${filter ? "" : "mb-4"}`} key={item}>
                  <button
                    className={`flex items-center px-4 ${
                      filter ? "hidden" : "py-2"
                    }`}
                  >
                    {/*
                    <span className={`icon icon-16 icon-${item.icon}`}/>
                  */}
                    <span className="uppercase text-ui-100">
                      {item.label}
                    </span>
                  </button>
                  <div
                    className={`${
                      router.pathname.includes(item.url) ? "is-active" : ""
                    }`}
                  >
                    <div
                      className={`${filter ? "" : "border-t border-ui-700/50"}`}
                    >
                      <SBMainNav
                        filter={filter}
                        items={item.pages.sort((a, b) =>
                          a.label.localeCompare(b.label)
                        )}
                        style="secondary"
                        rounded="true"
                        onClick={executeScroll.bind(this)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export const getLayout = (page) => getSiteLayout(<SBLayout>{page}</SBLayout>);

export default SBLayout;