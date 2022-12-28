import { useContext } from "react";
import Ad from "../../../components/Ad/Ad";
import Link from "next/link";
import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import { usePrototypeData } from "../../../contexts/prototype";
import { UiContext } from "../../../contexts/ui";
import ModalBuyTokens from "../wallet/modal-buytokens";

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

        <section className="mb-4">
          <div className="header surface sm:rounded-lg">
            <div className="header-content">
              <div className="header-body">
                <h1>Shop</h1>
                <p className="text-ui-300 max-w-[70ch] mt-4">
                  Turn your hard work and successes into rewards you can enjoy!
                  Will you invest in some new gaming gear or just treat yourself
                  to something you&#39;ve had your eye on? Earn more coins to
                  spend in the shop by finishing Missions or competing in
                  Brawls.
                </p>
              </div>
            </div>
            <div className="header-bg">
              <img src="https://res.cloudinary.com/gloot/image/upload/v1672216041/Stryda/illustrations/Shop_bg.jpg" />
            </div>
          </div>
        </section>
        <section className="px-4 md:px-0 mb-4">
          <h2 className="px-2 sm:px-0 py-2 text-2xl">Gift cards</h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4">
            {prototype.vouchers.map((voucher, voucherIndex) => (
              <>
                <li
                  key={voucher.id}
                  className="surface rounded-2xl w-3/4 sm:w-2/3 md:w-auto p-4 flex flex-col items-stretch text-center animate-slide-in-right animate-delay"
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
                      href={`/prototype/shop/${voucher.id}${prototype.getURLparams()}`}
                    >
                      <a type="button" className="button button-primary w-full">
                        <span>View gift cards</span>
                      </a>
                    </Link>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </section>

        <section className="px-4 md:px-0 mb-4">
          <h2 className="px-2 sm:px-0 py-2 text-2xl">Tokens</h2>
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
              src="https://res.cloudinary.com/gloot/image/upload/v1672157996/Stryda/currencies/Reward-token-side_2.png"
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
              src="https://res.cloudinary.com/gloot/image/upload/v1672157996/Stryda/currencies/Reward-token-side_2.png"
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
              src="https://res.cloudinary.com/gloot/image/upload/v1672157996/Stryda/currencies/Reward-token-side_1.png"
              width="49"
              height="auto"
              alt=""
            />

            <div
              className="relative z-10 surface surface-dimmed rounded-lg p-8 text-center flex flex-col items-center justify-center"
            >
              <h2 className="text-4xl">
                Need a token <span className="text-main">refill</span>?
              </h2>
              <p className="text-lg mt-4 mb-6 max-w-[25ch]">
                Purchase tokens to enter brawls and keep on climbing the
                leaderboards.
              </p>
              <button onClick={openModalBuyTokens} type="button" className="button button-primary">
                <span>Buy tokens</span>
              </button>
            </div>
          </div>
        </section>
        <section className="px-4 md:px-0 my-8">
          <p className="p-2 text-ui-300 text-sm">
            Don&#39;t see anything that suits you? Don&#39;t worry, this is just
            the start! More items should be coming to our shop soon.
            <br />
            By making a purchase you agree to our Terms and Conditions.
          </p>
        </section>
      </PrototypeStructure>
    </>
  );
}
