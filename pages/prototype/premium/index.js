import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import useFetch from "../../../hooks/use-fetch";
import { useRouter } from "next/router";

export default function Premium() {
  const router = useRouter();
  const { data, loading } = useFetch("/api/brawls", { delay: 1000 });

  return (
    <>
      <PrototypeStructure title="Premium">
        <div
          className="animate-slide-in-bottom animate-delay"
          style={{ "--delay": "calc(2 * 0.05s)" }}
        >
          <section>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1636112328/GNOG%20assets/Premium/gloot-premium-horizontal.png"
                width="500"
                height="auto"
                alt="G-Loot Premium"
              />
            </div>

            <div className="flex flex-col items-center justify-center text-center mb-12 px-4 sm:px-0">
              <h2 className="font-headings font-bold italic text-3xl md:text-4xl text-gradient bg-gradient-to-b from-gold-300 to-gold-700 max-w-[30ch]">
                Join G-Loot Premium to unlock the full G-Loot gaming experience
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <button
                type="button"
                className="button button-lg button-premium is-shining"
              >
                <span>View premium plans</span>
              </button>
              <div className="flex flex-col items-center justify-center text-center mt-2">
                <p className="text-sm text-ui-300">
                  Cancel anytime.{" "}
                  <a className="underline cursor-pointer">
                    Terms and conditions
                  </a>{" "}
                  apply.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-wrap flex-col lg:flex-row lg:items-start justify-center gap-4 md:gap-0 text-center space-y-4 md:space-y-0 mb-24">
            <div className="w-96 shrink-0">
              <img
                className="mx-auto block"
                src="https://res.cloudinary.com/gloot/image/upload/v1665059216/Marketing/2022_prototype/Illustrations/picture_premium_missions.webp"
                width="400"
                height="auto"
                alt=""
              />
              <h3 className="font-headings font-bold italic text-2xl text-gradient bg-gradient-to-b from-gold-300 to-gold-700 max-w-[20ch] mx-auto">
                Get access to Premium Missions each day
              </h3>
            </div>
            <div className="w-96 shrink-0">
              <img
                className="mx-auto block"
                src="https://res.cloudinary.com/gloot/image/upload/v1665053771/Marketing/2022_prototype/Illustrations/picture_premium_rewards.webp"
                width="400"
                height="auto"
                alt=""
              />
              <h3 className="font-headings font-bold italic text-2xl text-gradient bg-gradient-to-b from-gold-300 to-gold-700 max-w-[20ch] mx-auto">
                Earn mission rewards faster
              </h3>
            </div>
            <div className="w-96 shrink-0">
              <img
                className="mx-auto block"
                src="https://res.cloudinary.com/gloot/image/upload/v1665053771/Marketing/2022_prototype/Illustrations/picture_premium_extra_tokens.webp"
                width="400"
                height="auto"
                alt=""
              />
              <h3 className="font-headings font-bold italic text-2xl text-gradient bg-gradient-to-b from-gold-300 to-gold-700 max-w-[20ch] mx-auto">
                Get free extra tokens for each token purchase
              </h3>
            </div>
            <div className="w-96 shrink-0">
              <img
                className="mx-auto block"
                src="https://res.cloudinary.com/gloot/image/upload/v1665053771/Marketing/2022_prototype/Illustrations/picture_premium_no_ads.webp"
                width="400"
                height="auto"
                alt=""
              />
              <h3 className="font-headings font-bold italic text-2xl text-gradient bg-gradient-to-b from-gold-300 to-gold-700 max-w-[20ch] mx-auto">
                Get Premium content features
              </h3>
            </div>
            <div className="w-96 shrink-0">
              <img
                className="mx-auto block"
                src="https://res.cloudinary.com/gloot/image/upload/v1665053771/Marketing/2022_prototype/Illustrations/picture_premium_discord.webp"
                width="400"
                height="auto"
                alt=""
              />
              <h3 className="font-headings font-bold italic text-2xl text-gradient bg-gradient-to-b from-gold-300 to-gold-700 max-w-[20ch] mx-auto">
                Remove ads on the platform
              </h3>
            </div>
          </section>

          <section className="relative z-10 pt-12 md:pt-20 mb-40 container max-w-lg mx-auto ">
            <img
              className="hidden lg:block absolute pointer-events-none z-20 top-0 -right-14 rotate-[33deg]"
              src="https://res.cloudinary.com/gloot/image/upload/v1657703095/Marketing/2022_prototype/3D_object_crowngold.webp"
              width="200"
              height="auto"
              alt=""
            />
            
            <img
              className="hidden lg:block absolute pointer-events-none z-20 -bottom-20 -right-32 blur-sm rotate-[120deg]"
              src="https://res.cloudinary.com/gloot/image/upload/v1657118756/Marketing/2022_prototype/CurrencyRewards/Reward-coin-side_1.webp"
              width="210"
              height="auto"
              alt=""
            />
            <img
              className="hidden lg:block absolute pointer-events-none z-20 -top-14 left-8 blur-sm -rotate-[33deg]"
              src="https://res.cloudinary.com/gloot/image/upload/v1657118756/Marketing/2022_prototype/CurrencyRewards/Reward-coin-side_2.webp"
              width="168"
              height="auto"
              alt=""
            />
            <img
              className="hidden lg:block absolute pointer-events-none z-20 -bottom-14 -left-12 -rotate-[143deg]"
              src="https://res.cloudinary.com/gloot/image/upload/v1657118756/Marketing/2022_prototype/CurrencyRewards/Reward-coin-side_2.webp"
              width="144"
              height="auto"
              alt=""
            />
            <img
              className="hidden lg:block absolute pointer-events-none z-20 top-32 -left-5 -rotate-[74deg]"
              src="https://res.cloudinary.com/gloot/image/upload/v1657118756/Marketing/2022_prototype/CurrencyRewards/Reward-coin-side_1.webp"
              width="49"
              height="auto"
              alt=""
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch gap-16 px-4 md:px-0">
              <div className="max-w-sm hidden flex-1 lg:flex flex-col bg-ui-800 rounded-xl p-2">
                <div className="text-center pt-2 text-premium-500 ">
                  <span className="font-headings text-xl uppercase font-bold">Free</span>
                </div>
                <div className="flex-1 flex-col rounded-lg p-4 lg:p-8">
                  <ul className="flex-1 space-y-8 my-8 leading-snug text-left">
                    <li className="flex gap-4 items-start">
                      <span className="icon text-2xl mt-1 icon-verified text-premium-500" />
                      <span className="text-ui-200">
                        Track your stats across all supported games and build
                        your player identity.
                      </span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="icon text-2xl mt-1 icon-verified text-premium-500" />
                      <span className="text-ui-200">
                        Compete in missions, brawls and tournaments with rewards
                        and prize money.
                      </span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="icon text-2xl mt-1 icon-e-remove text-ui-400" />
                      <span className="text-ui-400">
                        Access 3 extra missions every day to unlock rewards
                        faster.
                      </span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="icon text-2xl mt-1 icon-e-remove text-ui-400" />
                      <span className="text-ui-400">
                        Create a Discord profile to describe who you are as a
                        gamer and find a team.
                      </span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="icon text-2xl mt-1 icon-e-remove text-ui-400" />
                      <span className="text-ui-400">
                        Access an exclusive Discord channel, chat directly with
                        G-Loot devs, and try out new features before they are
                        released.
                      </span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="icon text-2xl mt-1 icon-e-remove text-ui-400" />
                      <span className="text-ui-400">
                        Enjoy an ad-free experience on G-Loot.
                      </span>
                    </li>
                  </ul>
                  <div className="button button-tertiary w-full pointer-events-none">
                    <span className="text-xl italic">Free Plan</span>
                  </div>
                </div>
              </div>
              <div className="max-w-sm flex-1 flex flex-col bg-gradient-to-r from-premium-300 to-premium-700 rounded-xl p-2">
                <div className="flex items-center gap-4 pb-1.5 text-ui-800 pl-7">
                  <span className="icon icon-ic_stars_24px text-2xl" />
                  <span className="font-headings text-xl uppercase font-bold">Premium</span>
                </div>
                <div className="flex-1 flex-col surface rounded-lg p-4 lg:p-8">
                  <ul className="flex-1 space-y-8 my-8 leading-snug text-left">
                    <li className="flex gap-4 items-start">
                      <span className="icon text-2xl mt-1 icon-verified text-premium-500" />
                      <span className="text-ui-200">
                        Track your stats across all supported games and build
                        your player identity.
                      </span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="icon text-2xl mt-1 icon-verified text-premium-500" />
                      <span className="text-ui-200">
                        Compete in missions, brawls and tournaments with rewards
                        and prize money.
                      </span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="icon text-2xl mt-1 icon-verified text-premium-500" />
                      <span className="text-ui-200">
                        Access 3 extra missions every day to unlock rewards
                        faster.
                      </span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="icon text-2xl mt-1 icon-verified text-premium-500" />
                      <span className="text-ui-200">
                        Create a Discord profile to describe who you are as a
                        gamer and find a team.
                      </span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="icon text-2xl mt-1 icon-verified text-premium-500" />
                      <span className="text-ui-200">
                        Access an exclusive Discord channel, chat directly with
                        G-Loot devs, and try out new features before they are
                        released.
                      </span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="icon text-2xl mt-1 icon-verified text-premium-500" />
                      <span className="text-ui-200">
                        Enjoy an ad-free experience on G-Loot.
                      </span>
                    </li>
                  </ul>

                  <a
                    href="https://gloot.com/features/premium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-premium is-shining w-full"
                  >
                    <span className="text-xl italic">View Premium Plans</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </PrototypeStructure>
    </>
  );
}
