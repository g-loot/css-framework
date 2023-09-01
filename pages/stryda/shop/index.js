import { useContext } from "react";
import Ad from "@/components/Ad/Ad";
import Link from "next/link";
import Structure from "@/pages/stryda/components/Structure";
import { usePrototypeData } from "@/contexts/prototype";
import { UiContext } from "@/contexts/ui";
import ModalBuyTokens from "../wallet/modal-buytokens";
import dataShopitems from "@/mock-data/data-shopitems";
import Loader from "../components/Loader";

export default function Home() {
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  function openModalBuyTokens() {
    uiContext.openModal(<ModalBuyTokens></ModalBuyTokens>);
  }

  return (
    <>
      <Structure title="Shop">
        <Ad width="1005" height="300" />
        <Loader
          loader={
            <section className="container grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4 mx-4 sm:mx-0 my-8">
              <div className="surface is-loading rounded aspect-square w-full" />
              <div className="surface is-loading rounded aspect-square w-full" />
              <div className="surface is-loading rounded aspect-square w-full" />
              <div className="surface is-loading rounded aspect-square w-full" />
              <div className="surface is-loading rounded aspect-square w-full" />
              <div className="surface is-loading rounded aspect-square w-full" />
              <div className="surface is-loading rounded aspect-square w-full" />
              <div className="surface is-loading rounded aspect-square w-full" />
            </section>
          }
        >
          <section className="header header-quaternary my-8">
            <div className="header-content">
              <div className="header-body">
                <h1 className="text-7xl mb-2">Shop</h1>
                <p className="text-ui-300 max-w-[70ch]">
                  Turn your hard work and successes into rewards you can enjoy!
                  Will you invest in some new gaming gear or just treat yourself
                  to something you&#39;ve had your eye on? Earn more coins to
                  spend in the shop by finishing Missions or competing in
                  Ladders.
                </p>
              </div>
            </div>
            <div className="header-bg">
              <img src="https://res.cloudinary.com/gloot/image/upload/v1689683517/Stryda/illustrations/stryda_v2_pagebg_shop.jpg" />
            </div>
          </section>

          <section className="px-4 md:px-0 mb-8">
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4">
              <li
                onClick={openModalBuyTokens}
                className="interactive surface rounded w-full sm:w-2/3 md:w-full p-4 flex flex-col items-stretch text-center animate-slide-in-bottom animate-delay"
                style={{ "--delay": `calc( 0 * 0.05s)` }}
              >
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="py-2 relative">
                    <div className="w-6 h-6 rounded-full border border-t-ui-700 border-l-ui-700 border-b-ui-700/0 border-r-ui-700/0 bg-ui-900 absolute z-20 rotate-45 left-[calc(50%-0.75rem)] -top-1"></div>
                    <div className="w-28 h-4 rounded-full border border-ui-700 bg-ui-900 relative z-10"></div>
                  </div>
                  <div className="text-ui-300 text-sm h-10 flex flex-col justify-center items-center" />
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1677840913/Stryda/shop/giftcards/store_stryda_tokens.jpg"
                    className="w-4/5 object-[16/10] object-contain rounded-xl shadow-2xl my-3"
                    height="auto"
                    alt="Tokens"
                  />
                  <h3 className="flex flex-col gap-2 items-center leading-none mb-4">
                    <span>Tokens</span>
                  </h3>
                </div>
                <div className="border-t border-ui-700 pt-4">
                  <button
                    type="button"
                    onClick={openModalBuyTokens}
                    className="button button-secondary w-full"
                  >
                    <span>Get tokens</span>
                  </button>
                </div>
              </li>
              <Link
                href={`/stryda/shop/avatar-frame${prototype.getURLparams()}`}
              >
                <li
                  className="interactive surface rounded w-full sm:w-2/3 md:w-full p-4 flex flex-col items-stretch text-center animate-slide-in-bottom animate-delay"
                  style={{ "--delay": `calc( 1 * 0.05s)` }}
                >
                  <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="py-2 relative">
                      <div className="w-6 h-6 rounded-full border border-t-ui-700 border-l-ui-700 border-b-ui-700/0 border-r-ui-700/0 bg-ui-900 absolute z-20 rotate-45 left-[calc(50%-0.75rem)] -top-1"></div>
                      <div className="w-28 h-4 rounded-full border border-ui-700 bg-ui-900 relative z-10"></div>
                    </div>
                    <div className="text-ui-300 text-sm h-10 flex flex-col justify-center items-center" />
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1677840913/Stryda/shop/giftcards/store_stryda_avatarframes.jpg"
                      className="w-4/5 object-[16/10] object-contain rounded-xl shadow-2xl my-3"
                      height="auto"
                      alt="Avatar frames"
                    />
                    <h3 className="flex flex-col gap-2 items-center leading-none mb-4">
                      <span>Avatar frames</span>
                    </h3>
                  </div>
                  <div className="border-t border-ui-700 pt-4">
                    <Link
                      href={`/stryda/shop/avatar-frame${prototype.getURLparams()}`}
                    >
                      <button
                        type="button"
                        className="button button-secondary w-full"
                      >
                        <span>View frames</span>
                      </button>
                    </Link>
                  </div>
                </li>
              </Link>
              <Link
                href={`/stryda/shop/profile-banner${prototype.getURLparams()}`}
              >
                <li
                  className="interactive surface rounded w-full sm:w-2/3 md:w-full p-4 flex flex-col items-stretch text-center animate-slide-in-bottom animate-delay"
                  style={{ "--delay": `calc( 2 * 0.05s)` }}
                >
                  <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="py-2 relative">
                      <div className="w-6 h-6 rounded-full border border-t-ui-700 border-l-ui-700 border-b-ui-700/0 border-r-ui-700/0 bg-ui-900 absolute z-20 rotate-45 left-[calc(50%-0.75rem)] -top-1"></div>
                      <div className="w-28 h-4 rounded-full border border-ui-700 bg-ui-900 relative z-10"></div>
                    </div>
                    <div className="text-ui-300 text-sm h-10 flex flex-col justify-center items-center" />
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1677840913/Stryda/shop/giftcards/store_stryda_profilebanners.jpg"
                      className="w-4/5 object-[16/10] object-contain rounded-xl shadow-2xl my-3"
                      height="auto"
                      alt="Player banners"
                    />
                    <h3 className="flex flex-col gap-2 items-center leading-none mb-4">
                      <span>Player banners</span>
                    </h3>
                  </div>
                  <div className="border-t border-ui-700 pt-4">
                    <Link
                      href={`/stryda/shop/profile-banner${prototype.getURLparams()}`}
                    >
                      <button
                        type="button"
                        className="button button-secondary w-full"
                      >
                        <span>View banners</span>
                      </button>
                    </Link>
                  </div>
                </li>
              </Link>
              {prototype.vouchers.map((voucher, voucherIndex) => (
                <>
                  <Link
                    href={`/stryda/shop/${
                      voucher.id
                    }${prototype.getURLparams()}`}
                  >
                    <li
                      key={voucher.id}
                      className="interactive surface rounded w-full sm:w-2/3 md:w-full p-4 flex flex-col items-stretch text-center animate-slide-in-bottom animate-delay"
                      style={{
                        "--delay": `calc( ${voucherIndex + 3} * 0.05s)`,
                      }}
                    >
                      <div className="flex-1 flex flex-col items-center gap-2">
                        <div className="py-2 relative">
                          <div className="w-6 h-6 rounded-full border border-t-ui-700 border-l-ui-700 border-b-ui-700/0 border-r-ui-700/0 bg-ui-900 absolute z-20 rotate-45 left-[calc(50%-0.75rem)] -top-1"></div>
                          <div className="w-28 h-4 rounded-full border border-ui-700 bg-ui-900 relative z-10"></div>
                        </div>
                        <div className="text-ui-300 text-sm h-10 flex flex-col justify-center items-center">
                          <div className="leading-tight">
                            <strong className="uppercase">Valid in:</strong>
                            <br />
                            <span className="leading-none">
                              {voucher.validity}
                            </span>
                          </div>
                        </div>
                        <img
                          src={voucher.image}
                          className="w-4/5 object-[16/10] object-contain rounded-xl shadow-2xl my-3"
                          height="auto"
                          alt="Gift card"
                        />
                        <h3 className="flex flex-col gap-2 items-center leading-none mb-4">
                          <span>Gift cards</span>
                        </h3>
                        <div className="text-xl">
                          {voucher.name}
                        </div>
                        <div className="mt-2 h-12 flex items-center">
                          {voucher.exception && (
                            <>
                              <p className="text-ui-300 text-sm max-w-[45ch]">
                                *Available worldwide but only redeemable through
                                Amazon US (amazon.com)
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="border-t border-ui-700 pt-4">
                        <Link
                          href={`/stryda/shop/${
                            voucher.id
                          }${prototype.getURLparams()}`}
                        >
                          <button
                            type="button"
                            className="button button-secondary w-full"
                          >
                            <span>View gift cards</span>
                          </button>
                        </Link>
                      </div>
                    </li>
                  </Link>
                </>
              ))}
            </ul>
          </section>

          <section className="px-4 md:px-0 my-8">
            <p className="text-ui-300 text-sm text-center md:text-left">
              Don&#39;t see anything that suits you? Don&#39;t worry, this is
              just the start! More items should be coming to our shop soon.
              <br />
              By making a purchase you agree to our{" "}
              <a href="#" className="link">
                Terms and Conditions
              </a>
              .
            </p>
          </section>
        </Loader>
      </Structure>
    </>
  );
}
