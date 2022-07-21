import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import Link from "next/link";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from 'next/router';

export default function Topbar() {
  const { query } = useRouter();
  const prototypeData = usePrototypeData();
  const hasAds = query.ads === 'true' ? true : false;

  return (
    <div className="sticky top-0 z-50 bg-ui-800/50 navbar">
      <div className="container relative">
        <div className="max-w-2xl grid grid-cols-5 gap-4 lg:gap-8 items-center px-2 sm:px-0">
          <div className="col-span-2 lg:col-span-1 flex items-center gap-2">
            <div className="block lg:hidden">
              <label
                htmlFor="drawer-prototype"
                className="drawer-button button button-sm button-tertiary rounded-full"
              >
                <div className="icon icon-menu-8"></div>
              </label>
            </div>
            <Link href="/">
              <a
                className="block transition-opacity duration-100 hover:opacity-50"
              >
                <img
                  width="123"
                  height="64"
                  src="https://res.cloudinary.com/gloot/image/upload/v1636647109/glootcom/v2-202111/gloot_logo.svg"
                  alt="G-Loot logo"
                />
              </a>
            </Link>
          </div>
          <div className="col-span-3 lg:col-span-4 flex items-center justify-end lg:justify-between">
            <div className="hidden lg:flex items-center">
              <Button
                variant="secondary"
                size="sm"
                label="Download tracker"
                icon="tv"
              />
            </div>
            <div className="flex items-center justify-end">
              <div className="hidden xl:hiden relative text-ui-500 items-center justify-end rounded border border-ui-700">
                <input
                  className="border border-ui-600 bg-transparent h-8 px-3 pr-16 rounded text-sm focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Search"
                />
                <button type="submit" className="absolute mr-2 text-0">
                  <span className="icon icon-16 icon-zoom text-ui-600" />
                </button>
              </div>
              <div className="flex justify-end items-center gap-2">
                <div className="hidden sm:flex space-x-3 items-center border border-ui-600 pr-2 rounded-full">
                  <div
                    className="flex items-center tooltip tooltip-bottom"
                    data-tooltip="Coins"
                  >
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_coininverted.png"
                      width="32"
                      height="32"
                      alt="coins"
                    />
                    <span className="text-sm font-bold text-gold-500">
                      42352
                    </span>
                  </div>
                  <div
                    className="flex items-center tooltip tooltip-bottom"
                    data-tooltip="Tokens"
                  >
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_token.png"
                      width="32"
                      height="32"
                      alt="tokens"
                    />
                    <span className="text-sm font-bold text-purple-500">
                      48
                    </span>
                  </div>
                  <div
                    className="flex items-center tooltip tooltip-bottom"
                    data-tooltip="Tickets"
                  >
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_tikethorizontal.png"
                      width="32"
                      height="32"
                      alt="tickets"
                    />
                    <span className="text-sm font-bold ml-1 text-bronze-500">
                      12
                    </span>
                  </div>
                </div>
                <button className="button button-sm  button-tertiary rounded-full">
                  <Icon icon="alarm"></Icon>
                </button>
                <button className="button button-sm button-tertiary rounded-full">
                  <Icon icon="c-question"></Icon>
                </button>
                <div className="dropdown dropdown-end">
                  <figure
                    tabIndex="0"
                    className="avatar avatar-circle avatar-xs"
                  >
                    <div>
                      <img src={prototypeData.getUserByID(0)?.avatar} alt="avatar" />
                    </div>
                  </figure>
                  <div
                    tabIndex="0"
                    className="dropdown-content bg-ui-600 w-52 p-1"
                  >
                    <ul className="menu menu-rounded">
                      <li>
                        <Link href={`/prototype/wallet${hasAds ? '?ads=true' : ''}`}>
                          <a>
                            <span className="icon icon-wallet-43" />
                            <span>Wallet</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href={`/prototype/profile/0${hasAds ? '?ads=true' : ''}`}>
                          <a>
                            <span className="icon icon-circle-09" />
                            <span>Public profile</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href={`/prototype/profile/settings${hasAds ? '?ads=true' : ''}`}>
                          <a>
                            <span className="icon icon-cogwheel" />
                            <span>Settings</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href={`/prototype/logout${hasAds ? '?ads=true' : ''}`}>
                          <a>
                            <span className="icon icon-leave" />
                            <span>Log out</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
