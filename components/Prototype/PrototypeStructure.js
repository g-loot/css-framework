import Ad from "../Ad/Ad";
import Footer from "../Footer/Footer";
import Link from "next/link";
import PrototypeHead from "./PrototypeHead";
import PrototypeLeftMenu from "./PrototypeLeftMenu";
import PrototypeLeftMenuNew from "./PrototypeLeftMenuNew";
import Topbar from "../Topbar/Topbar";
import TopbarNew from "../Topbar/TopbarNew";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";

export default function PrototypeStructure({ children, title }) {
  const prototype = usePrototypeData();
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  const isNewStructure = query.newstructure === "true" || query.newstructure === undefined ? true : false;
  return (
    <>
      {!isNewStructure && (
        <>
          <PrototypeHead title={title} />
          <div className="drawer">
            <input
              id="drawer-prototype"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="drawer-content">
              <Topbar />
              <div className="container relative">
                <div
                  className={`max-w-2xl flex lg:gap-8 mx-auto ${
                    hasAds ? "3xl:m-0" : ""
                  }`}
                >
                  <div className="w-56 hidden lg:block top-16 py-4">
                    <PrototypeLeftMenu />
                  </div>
                  <div className="flex-1 pt-4 pb-8 min-h-screen overflow-hidden">
                    {children}
                  </div>
                </div>
                {hasAds && (
                  <div className="hidden 3xl:block absolute inset-y-0 right-0 w-[260px]">
                    <div className="sticky top-[68px]">
                      <Ad width="260" height="260" />
                    </div>
                  </div>
                )}
              </div>
              <Footer />
            </div>
            <div className="drawer-side scrollbar-hidden">
              <label
                htmlFor="drawer-prototype"
                className="drawer-overlay"
              ></label>
              <aside className="w-80 bg-ui-850 border-r border-ui-700">
                <div className="sticky z-20 top-0 bg-ui-850/75 p-2 backdrop-blur-sm">
                  <label
                    htmlFor="drawer-prototype"
                    className="drawer-button button button-tertiary button-close"
                  >
                    <div className="icon icon-e-remove"></div>
                  </label>
                </div>
                <div className="px-2 pb-2">
                  <div className="rounded-lg bg-ui-850">
                    <PrototypeLeftMenu />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </>
      )}
      {isNewStructure && (
        <>
          <PrototypeHead title={title} />
          <div className="drawer drawer-mobile">
            <input
              id="drawer-prototype"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="drawer-content">
              <TopbarNew />
              <div className="container relative">
                <div
                  className={`max-w-2xl flex lg:gap-8 mx-auto px-0 md:px-10 xl:px-20 ${
                    hasAds ? "3xl:m-0" : ""
                  }`}
                >
                  <div className="flex-1 pt-4 pb-8 min-h-screen overflow-hidden">
                    {children}
                  </div>
                </div>
                {hasAds && (
                  <div className="hidden 3xl:block absolute inset-y-0 right-0 w-[260px]">
                    <div className="sticky top-[68px]">
                      <Ad width="260" height="260" />
                    </div>
                  </div>
                )}
              </div>
              <Footer className="max-w-2xl mx-auto px-0 md:px-10 xl:px-20" />
            </div>
            <div className="drawer-side scrollbar-hidden">
              <label
                htmlFor="drawer-prototype"
                className="drawer-overlay"
              ></label>
              <aside className="w-72 bg-ui-800 border-r border-ui-700 flex flex-col shadow-2xl">
                <div className="h-14 flex items-center justify-between border-b border-ui-700 pl-7 pr-2 sticky z-10 top-0 bg-ui-800/95 backdrop-blur">
                  <Link href={`/prototype/home${prototype.getURLparams()}`}>
                    <a className="flex items-center gap-2 interactive">
                      <img
                        width="110"
                        height="auto"
                        src="https://res.cloudinary.com/gloot/image/upload/v1636647109/glootcom/v2-202111/gloot_logo.svg"
                        alt="G-Loot logo"
                      />
                    </a>
                  </Link>
                  <div className="block md:hidden">
                    <label
                      htmlFor="drawer-prototype"
                      className="drawer-button button button-tertiary button-close"
                    >
                      <div className="icon icon-e-remove"></div>
                    </label>
                  </div>
                </div>
                <PrototypeLeftMenuNew />
              </aside>
            </div>
          </div>
        </>
      )}
    </>
  );
}
