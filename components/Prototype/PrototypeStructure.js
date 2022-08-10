import Ad from "../Ad/Ad";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import JSONstructure from "../../pages/api/prototype/structure.json";
import MainNav from "../MainNav/MainNav";
import PrototypeGamesNav from "./PrototypeGamesNav";
import PrototypeHead from "./PrototypeHead";
import PrototypeLeftMenu from "./PrototypeLeftMenu";
import Topbar from "../Topbar/Topbar";
import { useRouter } from "next/router";

export default function PrototypeStructure({ children, title }) {
  const router = useRouter();
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  return (
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
            <div className={`max-w-2xl flex lg:gap-8 mx-auto ${hasAds ? "3xl:m-0" : ""}`}>
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
          <label htmlFor="drawer-prototype" className="drawer-overlay"></label>
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
  );
}
