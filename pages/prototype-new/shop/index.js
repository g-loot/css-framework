import { useContext } from "react";
import Ad from "../../../components/Ad/Ad";
import Link from "next/link";
import PrototypeStructure from "../../../components/PrototypeNew/PrototypeStructure";
import { usePrototypeData } from "../../../contexts/prototype";
import { UiContext } from "../../../contexts/ui";
import ModalBuyTokens from "../wallet/modal-buytokens";
import ShopHeader from "./shop-header";

export default function Home() {
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  function openModalBuyTokens() {
    uiContext.openModal(<ModalBuyTokens></ModalBuyTokens>);
  }

  return (
    <>
      <PrototypeStructure title="Shop">
        <Ad width="1005" height="300" />

        <ShopHeader />

        <section className="mb-8 hidden">
          <div className="header surface sm:rounded-lg">
            <div className="header-content">
              <div className="header-body">
                <h1>Shop</h1>
                <p className="max-w-[70ch] mt-2">
                  Turn your hard work and successes into rewards you can enjoy!
                  Will you invest in some new gaming gear or just treat yourself
                  to something you&#39;ve had your eye on? Earn more coins to
                  spend in the shop by finishing Missions or competing in
                  Ladders.
                </p>
              </div>
            </div>
            <div className="header-bg">
              <img src="https://res.cloudinary.com/gloot/image/upload/v1672216041/Stryda/illustrations/Shop_bg.jpg" />
            </div>
          </div>
        </section>
        <section className="px-4 md:px-0 mb-8 grid md:grid-cols-2 items-stretch gap-8 md:gap-4">
          <div className="flex flex-col">
            <h2 className="h5 mb-4">Avatar frames</h2>
            <div
              className="surface flex-1 sm:rounded-lg overflow-hidden flex flex-col xl:flex-row xl:items-center lg:justify-end"
            >
              <div className="flex-3 relative z-10 p-4 lg:p-8 lg:pr-0 order-2 xl:order-1 text-center md:text-left">
                <h3>Get a new look</h3>
                <p className="text-ui-300 mt-2 mb-4 md:max-w-[40ch]">
                  Add beautiful frames around your avatar and stand out from the
                  crowd.
                </p>
                <Link
                  href={`/prototype-new/shop/avatar-frame${prototype.getURLparams()}`}
                >
                  <button type="button" className="button button-primary">
                    <span>View avatar frames</span>
                  </button>
                </Link>
              </div>
              <div className="relative z-10 xl:order-2 flex-2 px-8 mt-8 md:mt-0 grid place-items-center">
                <img
                  className="object-contain"
                  src="https://res.cloudinary.com/gloot/image/upload/v1674739870/Stryda/illustrations/shop_avatarframes.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="h5 mb-4">Tokens</h2>
            <div
              className="surface flex-1 sm:rounded-lg overflow-hidden flex flex-col xl:flex-row xl:items-center"
            >
              <div className="flex-3 relative z-10 p-4 lg:p-8 lg:pr-0 order-2 xl:order-1 text-center md:text-left">
                <h3>Need a token refill?</h3>
                <p className="text-ui-300 mt-2 mb-4 md:max-w-[40ch]">
                  Purchase tokens to enter ladders and keep on climbing the
                  leaderboards.
                </p>
                <button
                  onClick={openModalBuyTokens}
                  type="button"
                  className="button button-primary"
                >
                  <span>Buy tokens</span>
                </button>
              </div>
              <div className="relative z-10 xl:order-2 flex-2 px-8 mt-8 md:mt-0 grid place-items-center">
                <img
                  className="object-contain"
                  src="https://res.cloudinary.com/gloot/image/upload/v1674739870/Stryda/illustrations/shop_tokens.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 md:px-0 mb-8">
          <h2 className="h5 mb-4">Gift cards</h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4">
            {prototype.vouchers.map((voucher, voucherIndex) => (
              <>
                <li
                  key={voucher.id}
                  className="surface rounded-2xl w-full sm:w-2/3 md:w-full p-4 flex flex-col items-stretch text-center animate-delay"
                  style={{ "--delay": `calc( ${voucherIndex} * 0.05s)` }}
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
                        <span className="leading-none">{voucher.validity}</span>
                      </div>
                    </div>
                    <img
                      src={voucher.image}
                      className="w-4/5 rounded-xl shadow-2xl my-3"
                      height="auto"
                      alt="Gift card"
                    />
                    <h3 className="uppercase flex text-3xl flex-col gap-2 items-center leading-none">
                      <span>Gift cards</span>
                      <small className="text-ui-300 text-2xl">
                        {voucher.name}
                      </small>
                    </h3>
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
                      href={`/prototype-new/shop/${
                        voucher.id
                      }${prototype.getURLparams()}`}
                    >
                      <a
                        type="button"
                        className="button button-secondary w-full"
                      >
                        <span>View gift cards</span>
                      </a>
                    </Link>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </section>

        {/*

        <section className="px-4 md:px-0 mb-4">
          <h2 className="h5 mb-4">Tokens</h2>
          <div className="relative">
            <img
              className="hidden lg:block absolute pointer-events-none z-20 -top-20 -right-4 rotate-[33deg]"
              src="https://res.cloudinary.com/gloot/image/upload/v1672157996/Stryda/currencies/Reward-token-side_1.png"
              width="160"
              height="auto"
              alt=""
            />
            <img
              className="hidden lg:block absolute pointer-events-none z-20 top-32 right-32 rotate-[67deg]"
              src="https://res.cloudinary.com/gloot/image/upload/v1672157996/Stryda/currencies/Reward-powertoken-side_2.png"
              width="75"
              height="auto"
              alt=""
            />
            <img
              className="hidden lg:block absolute pointer-events-none z-20 -bottom-20 right-0 blur-sm rotate-[120deg]"
              src="https://res.cloudinary.com/gloot/image/upload/v1672157996/Stryda/currencies/Reward-token-side_1.png"
              width="210"
              height="auto"
              alt=""
            />
            <img
              className="hidden lg:block absolute pointer-events-none z-20 -top-14 left-32 blur-sm -rotate-[33deg]"
              src="https://res.cloudinary.com/gloot/image/upload/v1672157996/Stryda/currencies/Reward-powertoken-side_2.png"
              width="168"
              height="auto"
              alt=""
            />
            <img
              className="hidden lg:block absolute pointer-events-none z-20 -bottom-14 left-20 -rotate-[143deg]"
              src="https://res.cloudinary.com/gloot/image/upload/v1672157996/Stryda/currencies/Reward-token-side_2.png"
              width="144"
              height="auto"
              alt=""
            />
            <img
              className="hidden lg:block absolute pointer-events-none z-20 top-16 left-16 -rotate-[74deg]"
              src="https://res.cloudinary.com/gloot/image/upload/v1672157996/Stryda/currencies/Reward-powertoken-side_1.png"
              width="49"
              height="auto"
              alt=""
            />

            <div className="relative z-10 surface surface-dimmed rounded-lg p-8 text-center flex flex-col items-center justify-center">
              <h2 className="text-4xl">
                Need a token <span className="text-main">refill</span>?
              </h2>
              <p className="text-lg mt-4 mb-6 max-w-[25ch]">
                Purchase tokens to enter ladders and keep on climbing the
                leaderboards.
              </p>
              <button
                onClick={openModalBuyTokens}
                type="button"
                className="button button-primary"
              >
                <span>Buy tokens</span>
              </button>
            </div>
          </div>
        </section>
                    */}

        <section className="px-4 md:px-0 my-8">
          <p className="text-ui-300 text-sm text-center md:text-left">
            Don&#39;t see anything that suits you? Don&#39;t worry, this is just
            the start! More items should be coming to our shop soon.
            <br />
            By making a purchase you agree to our{" "}
            <a href="#" className="link">
              Terms and Conditions
            </a>
            .
          </p>
        </section>
      </PrototypeStructure>
    </>
  );
}
