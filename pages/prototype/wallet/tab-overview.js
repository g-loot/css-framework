import Link from "next/link";
import { useRouter } from 'next/router';

const GiftCards = [
  {
    validity: "United States & Europe",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657092351/Marketing/2022_prototype/giftcards/store_giftcard_riot.webp",
    name: "Riot",
  },
  {
    validity: "Worldwide",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657092351/Marketing/2022_prototype/giftcards/store_giftcard_amazon.webp",
    name: "Amazon.com",
    exception:
      "Available worldwide but only redeemable through Amazon US (amazon.com)",
  },
  {
    validity: "United States, Europe, Philippines & Brazil",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657092351/Marketing/2022_prototype/giftcards/store_giftcard_steam.webp",
    name: "Steam",
  },
  {
    validity: "Worldwide",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1643193561/shop/Gift_Card_Image_-_DRKN_1x.png",
    name: "DRKN Gaming Streetwear",
  },
  {
    validity: "Brazil",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657092351/Marketing/2022_prototype/giftcards/store_giftcard_ifood.webp",
    name: "iFood",
  },
];

export default function TabWalletOverview() {
  const { query } = useRouter();
  const hasAds = query.ads === 'true' ? true : false;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div
          className="surface rounded-xl flex flex-col items-stretch p-2 w-full max-w-xs lg:max-w-xl mx-auto animate-slide-in-right animate-delay"
          style={{ "--delay": "calc( 1 * 0.05s)" }}
        >
          <div className="bg-gradient-to-b from-ui-900/50 to-ui-900/5 rounded overflow-hidden">
            <div className="flex gap-2 items-center justify-center">
              <img
                className="-mx-8"
                src="https://res.cloudinary.com/gloot/image/upload/v1654171544/Marketing/2022_prototype/CurrencyRewards/Reward-centered-token-unique.png"
                width="140"
                height="auto"
                alt=""
              />
              <div className="font-headings font-bold text-purple-500">
                <span className="text-3xl">29</span>{" "}
                <span className="text-lg">tokens</span>
              </div>
            </div>
          </div>
          <div className="text-sm leading-tight text-ui-300 mt-3 mb-6 flex-1">
            <div className="flex py-3 border-b border-ui-700/50 px-2 gap-2">
              <div className="w-1/4 font-bold uppercase text-ui-200">Use</div>
              <div className="flex-1">
                To enter rounds in the Weekly Brawls.
              </div>
            </div>
            <div className="flex py-3 px-2 gap-2">
              <div className="w-1/4 font-bold uppercase text-ui-200">Get</div>
              <div className="flex-1">
                From Missions, Daily Loot Streak or buy them directly from the
                Wallet.
              </div>
            </div>
          </div>
          <button type="button" className="button button-primary w-full">
            <span>Buy tokens</span>
          </button>
        </div>
        <div
          className="surface rounded-xl flex flex-col items-stretch p-2 w-full max-w-xs lg:max-w-xl mx-auto animate-slide-in-right animate-delay"
          style={{ "--delay": "calc( 2 * 0.05s)" }}
        >
          <div className="bg-gradient-to-b from-ui-900/50 to-ui-900/5 rounded overflow-hidden">
            <div className="flex gap-2 items-center justify-center">
              <img
                className="-mx-8"
                src="https://res.cloudinary.com/gloot/image/upload/v1654171544/Marketing/2022_prototype/CurrencyRewards/Reward-centered-coin-unique.png"
                width="140"
                height="auto"
                alt=""
              />
              <div className="font-headings font-bold text-gold-500">
                <span className="text-3xl">194</span>{" "}
                <span className="text-lg">coins</span>
              </div>
            </div>
          </div>
          <div className="text-sm leading-tight text-ui-300 mt-3 mb-6 flex-1">
            <div className="flex py-3 border-b border-ui-700/50 px-2 gap-2">
              <div className="w-1/4 font-bold uppercase text-ui-200">Use</div>
              <div className="flex-1">
                To purchase items in the Shop.
              </div>
            </div>
            <div className="flex py-3 px-2 gap-2">
              <div className="w-1/4 font-bold uppercase text-ui-200">Get</div>
              <div className="flex-1">
                From Daily Loot Streak and Weekly Brawls.
              </div>
            </div>
          </div>
          <Link href={`shop${hasAds ? '?ads=true' : ''}`}>
            <a type="button" className="button button-secondary w-full">
              <span>Visit shop</span>
            </a>
          </Link>
        </div>
        <div
          className="surface rounded-xl flex flex-col items-stretch p-2 w-full max-w-xs lg:max-w-xl mx-auto animate-slide-in-right animate-delay"
          style={{ "--delay": "calc( 3 * 0.05s)" }}
        >
          <div className="bg-gradient-to-b from-ui-900/50 to-ui-900/5 rounded overflow-hidden">
            <div className="flex gap-2 items-center justify-center">
              <img
                className="-mx-4"
                src="https://res.cloudinary.com/gloot/image/upload/v1654171544/Marketing/2022_prototype/CurrencyRewards/Reward-centered-ticket-unique.png"
                width="140"
                height="auto"
                alt=""
              />
              <div className="font-headings font-bold text-bronze-500">
                <span className="text-3xl">2</span>{" "}
                <span className="text-lg">tickets</span>
              </div>
            </div>
          </div>
          <div className="text-sm leading-tight text-ui-300 mt-3 mb-6 flex-1">
            <div className="flex py-3 border-b border-ui-700/50 px-2 gap-2">
              <div className="w-1/4 font-bold uppercase text-ui-200">Use</div>
              <div className="flex-1">
                To enter Monthly Tournaments.
              </div>
            </div>
            <div className="flex py-3 px-2 gap-2">
              <div className="w-1/4 font-bold uppercase text-ui-200">Get</div>
              <div className="flex-1">
                From Weekly brawls.
              </div>
            </div>
          </div>
          
        </div>
        <div
          className="surface rounded-xl flex flex-col items-stretch p-2 w-full max-w-xs lg:max-w-xl mx-auto animate-slide-in-right animate-delay"
          style={{ "--delay": "calc( 4 * 0.05s)" }}
        >
          <div className="bg-gradient-to-b from-ui-900/50 to-ui-900/5 rounded overflow-hidden">
            <div className="flex gap-2 items-center justify-center">
              <img
                className="-mx-8"
                src="https://res.cloudinary.com/gloot/image/upload/v1657618864/Marketing/2022_prototype/CurrencyRewards/Reward-centered-wallet-unique.png"
                width="140"
                height="auto"
                alt=""
              />
              <div className="font-headings font-bold text-ui-300">
                <span className="text-3xl">0.00€</span>{" "}
                <span className="text-lg">prize money</span>
              </div>
            </div>
          </div>
          <div className="text-sm leading-tight text-ui-300 mt-3 mb-6 flex-1">
            <div className="flex py-3 border-b border-ui-700/50 px-2 gap-2">
              <div className="w-1/4 font-bold uppercase text-ui-200">Use</div>
              <div className="flex-1">
                To purchase Tokens or withdraw them to your bank or PayPal account.
              </div>
            </div>
            <div className="flex py-3 px-2 gap-2">
              <div className="w-1/4 font-bold uppercase text-ui-200">Get</div>
              <div className="flex-1">
                From Tournaments.
              </div>
            </div>
          </div>
          <Link href={`shop${hasAds ? '?ads=true' : ''}`}>
            <a type="button" className="button button-primary is-disabled w-full">
              <span>Visit shop</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
