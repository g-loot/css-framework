import { FrameworkPages } from "../../pages/api/framework/pages";
import Link from "next/link";
import packageFramework from "../../framework/package.json";
import { useRouter } from "next/router";

export default function TopbarFramework(props) {
  const router = useRouter();
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  return (
    <div className="sticky top-0 z-50 bg-ui-800/50 navbar h-[52px]">
      <div className="container relative">
        <div className="max-w-2xl flex items-center gap-4 lg:gap-8 px-2 sm:px-0">
          <div className="flex items-center gap-2">
            <div className="block lg:hidden">
              <label
                htmlFor="drawer-framework"
                className="drawer-button button button-sm button-tertiary rounded-full"
              >
                <div className="icon icon-menu-8"></div>
              </label>
            </div>
            <Link href="/">
              <a className="flex items-end gap-2 interactive">
                <img
                  width="123"
                  height="64"
                  src="https://res.cloudinary.com/gloot/image/upload/v1672130648/Stryda/logos/stryda-logo-main-white.svg"
                  alt="Stryda logo"
                />
                <span className="text-ui-300 leading-none pb-1.5">
                  Design System
                </span>
              </a>
            </Link>
          </div>
          <div className="hidden flex-1 lg:flex items-center justify-end">
            <ul className="tabs">
              {FrameworkPages.pages.map((page, pageIndex) => (
                <li
                  key={page}
                  className={`${page.isDisabled ? "is-disabled" : ""}`}
                >
                  <Link href={page.url}>
                    <a
                      className={`${
                        router.pathname.includes(page.url) ? "is-active" : ""
                      }`}
                    >
                      <span className="lg:px-1">{page.label}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs text-ui-400">
              <a
                href="https://www.npmjs.com/package/@g-loot/css-framework"
                target="_blank"
                rel="noreferrer"
                className="chip chip-secondary chip-xs"
              >
                <span>v{packageFramework.version}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
