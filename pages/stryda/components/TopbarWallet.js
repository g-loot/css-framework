import { useEffect, useState, useRef, useContext } from "react";
import { usePrototypeData } from "@/contexts/prototype";
import Link from "next/link";

export default function TopbarWallet() {
  const prototype = usePrototypeData();
  const [isActive, setActive] = useState(false);
  const ref = useRef(null);

  const dropdownActive = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setActive(false);
    }
  };

  const currencies = [
    {
      id: 0,
      icon: "icon-coin",
      colour: "text-currency-1-500",
      name: "Coins",
      value: prototype.getUserByID(1)?.wallet.coins,
    },
    {
      id: 1,
      icon: "icon-token",
      colour: "text-currency-2-500",
      name: "Tokens",
      value: prototype.getUserByID(1)?.wallet.tokens,
    },
    {
      id: 2,
      icon: "icon-powertoken",
      colour: "text-currency-3-500",
      name: "Power Tokens",
      value: prototype.getUserByID(1)?.wallet.powertokens,
    },
  ];

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <>
      <div
        ref={ref}
        className={`dropdown dropdown-end dropdown-responsive ${
          isActive ? "dropdown-open" : "dropdown-closed"
        }`}
      >
        <button
          type="button"
          tabIndex="1"
          className="button button-ghost rounded-full"
          onClick={dropdownActive}
        >
          <span className="icon icon-wallet-43" />
        </button>

        <div
          tabIndex="1"
          className="dropdown-content bg-ui-500 w-[calc(100vw-100px)] sm:w-72 overflow-hidden rounded-xl shadow-xl"
        >
          <div className="p-1.5">
            <div className="p-1.5">
              <h3 className="text-base">Wallet overview</h3>
              <ul className="space-y-3 my-3 px-1.5">
                {currencies.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`flex items-center justify-between gap-2 ${item.colour}`}
                  >
                    <div className="relative">
                      <div className="flex items-center gap-2">
                        <span className={`icon text-2xl ${item.icon}`} />
                        <span className="flex-1 font-bold">{item.value}</span>
                      </div>
                      <div
                        className={`flex items-center gap-2 cash-in ${
                          isActive && itemIndex === 0 ? "is-active" : ""
                        }`}
                      >
                        <span className={`icon text-2xl ${item.icon}`} />
                        <span className="flex-1 font-bold">{item.value}</span>
                      </div>
                    </div>
                    <span className="text-sm text-ui-300">{item.name}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/stryda/wallet${prototype.getURLparams()}`}>
                <button
                  type="button"
                  className="button button-sm button-tertiary w-full"
                >
                  <span className="icon icon-wallet-43" />
                  <span>View wallet</span>
                </button>
              </Link>
            </div>
            <div className="relative rounded overflow-hidden bg-gradient-to-b from-ui-600 to-ui-800 border border-ui-400/40 px-1.5 py-10 text-center">
              <div className="relative z-10">
                <div className="">Need more Tokens?</div>
                <Link href={`/stryda/shop${prototype.getURLparams()}`}>
                  <button
                    type="button"
                    className="button button-sm button-secondary"
                  >
                    <span className="icon icon-store" />
                    <span>Visit the shop</span>
                  </button>
                </Link>
              </div>
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1696596692/Stryda/illustrations/wallet_dropdown_bg.webp"
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-75"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
