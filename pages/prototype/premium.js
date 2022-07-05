import Ad from '../../components/Ad/Ad';
import Carousel from '../../components/Carousel/Carousel';
import Countdown from '../../components/Countdown/Countdown';
import PrototypeStructure from '../../components/Prototype/PrototypeStructure';
import RewardLadder from '../../components/RewardLadder/RewardLadder';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';
//import DataGames from '../../mock-data/games.json'

export default function Home() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/brawls', { delay: 1000 });

  return (
    <>
      <PrototypeStructure title="Home">
        <div className='animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 2 * 0.05s)'}}>
          <section>
            <div className="flex flex-col items-center justify-center">
              <img src="https://res.cloudinary.com/gloot/image/upload/v1636112328/GNOG%20assets/Premium/gloot-premium-horizontal.png" width="500" height="auto" alt="G-Loot Premium" />
            </div>

            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="font-headings italic text-3xl md:text-4xl text-gradient bg-gradient-to-b from-gold-300 to-gold-700 max-w-[30ch]">
                Join G-Loot Premium to unlock the full G-Loot gaming experience
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <button
              type='button'
              className="button button-lg button-premium is-shining"
              >
                <span>View premium plans</span>
              </button>
              <div className="flex flex-col items-center justify-center text-center mt-2">
                <p className="text-sm text-ui-300">
                  Cancel anytime. <a className="underline cursor-pointer">Terms and conditions</a> apply.
                </p>
              </div>
            </div>
          </section>
          
          <section className="flex flex-col md:flex-row items-start justify-between text-center space-y-4 md:space-y-0 mb-24">
            <div>
              <img src="https://res.cloudinary.com/gloot/image/upload/v1645610357/Marketing/202109_gloot2/premium-missions.png" width="400" height="auto" alt=""/>
              <h3 className="font-headings italic text-2xl text-gradient bg-gradient-to-b from-gold-300 to-gold-700">
                Get access to Premium<br />Mission each day
              </h3>
            </div>
            <div>
              <img src="https://res.cloudinary.com/gloot/image/upload/v1645610357/Marketing/202109_gloot2/premium-rewards.png" width="400" height="auto" alt=""/>
              <h3 className="font-headings italic text-2xl text-gradient bg-gradient-to-b from-gold-300 to-gold-700">
                Earn mission<br />rewards faster
              </h3>
            </div>
            <div>
              <img src="https://res.cloudinary.com/gloot/image/upload/v1645610357/Marketing/202109_gloot2/premium-ads.png" width="400" height="auto" alt=""/>
              <h3 className="font-headings italic text-2xl text-gradient bg-gradient-to-b from-gold-300 to-gold-700">
                Remove ads<br />on the platform
              </h3>
            </div>
          </section>

          <section className="relative z-10 pt-12 md:pt-20 mb-40 container max-w-lg mx-auto ">
            <img className="absolute z-20 -top-6 -right-14" src="https://res.cloudinary.com/gloot/image/upload/v1638393248/Marketing/202109_gloot2/separator_coin_3.png" width="180" height="auto" alt="" />
            <img className="absolute z-20 top-44 -right-32" src="https://res.cloudinary.com/gloot/image/upload/v1638393248/Marketing/202109_gloot2/separator_coin_4.png" width="36" height="auto" alt="" />
            <img className="absolute z-20 -bottom-12 -right-32 blur-md" src="https://res.cloudinary.com/gloot/image/upload/v1638393248/Marketing/202109_gloot2/separator_coin_5.png" width="168" height="auto" alt="" />
            <img className="absolute z-0 top-60 -left-32 blur-sm" src="https://res.cloudinary.com/gloot/image/upload/v1638393248/Marketing/202109_gloot2/separator_coin_5.png" width="168" height="auto" alt="" />
            <img className="absolute z-20 -bottom-6 -left-6" src="https://res.cloudinary.com/gloot/image/upload/v1638393248/Marketing/202109_gloot2/separator_coin_2.png" width="112" height="auto" alt="" />
            <img className="absolute z-20 top-16 -left-6" src="https://res.cloudinary.com/gloot/image/upload/v1638393248/Marketing/202109_gloot2/separator_coin_1.png" width="49" height="auto" alt="" />

            <div className="relative z-10 flex flex-col lg:flex-row items-stretch gap-16">
              <div className="hidden lg:flex flex-col flex-1 surface rounded-xl p-4 lg:p-8">
                <div className='h-32 flex items-center justify-center'>
                  <h3 className="text-4xl italic text-center">Free</h3>
                </div>
                
                <ul className="flex-1 space-y-8 my-8">
                  <li className="flex gap-4 items-center">
                    <span className="icon text-2xl icon-verified text-premium-500"></span>
                    <span className="text-ui-200">
                      Track your stats across all supported games and build your player identity.
                    </span>
                  </li>
                  <li className="flex gap-4 items-center">
                    <span className="icon text-2xl icon-verified text-premium-500"></span>
                    <span className="text-ui-200">
                      Compete in missions, brawls and tournaments with rewards and prize money.
                    </span>
                  </li>
                  <li className="flex gap-4 items-center">
                    <span className="icon text-2xl icon-e-remove text-ui-400"></span>
                    <span className="text-ui-400">
                      Access 3 extra missions every day to unlock rewards faster.
                    </span>
                  </li>
                  <li className="flex gap-4 items-center">
                    <span className="icon text-2xl icon-e-remove text-ui-400"></span>
                    <span className="text-ui-400">
                      Create a Discord profile to describe who you are as a gamer and find a team.
                    </span>
                  </li>
                  <li className="flex gap-4 items-center">
                    <span className="icon text-2xl icon-e-remove text-ui-400"></span>
                    <span className="text-ui-400">
                      Access an exclusive Discord channel, chat directly with G-Loot devs, and try out
                      new features before they are released.
                    </span>
                  </li>
                  <li className="flex gap-4 items-center">
                    <span className="icon text-2xl icon-e-remove text-ui-400"></span>
                    <span className="text-ui-400">Enjoy an ad-free experience on G-Loot.</span>
                  </li>
                </ul>
                <div className="button button-tertiary w-full pointer-events-none">
                  <span className="text-xl italic">Free Plan</span>
                </div>
              </div>
              <div
                className="flex-1 flex flex-col bg-gradient-to-b from-premium-700 to-premium-300 rounded-xl p-2">
                <div className="flex-1 flex-col surface rounded-lg p-4 lg:p-8">
                  <div className="h-32 flex items-center justify-center">
                    <img src="https://res.cloudinary.com/gloot/image/upload/v1655983971/Marketing/202206_gloot6_update/premium-logo.webp" alt="Premium plans" width={433} height={128} className="block" />
                  </div>
                  <ul className="flex-1 space-y-8 my-8">
                    <li className="flex gap-4 items-center">
                      <span className="icon text-2xl icon-verified text-premium-500"></span>
                      <span className="text-ui-200">
                        Track your stats across all supported games and build your player identity.
                      </span>
                    </li>
                    <li className="flex gap-4 items-center">
                      <span className="icon text-2xl icon-verified text-premium-500"></span>
                      <span className="text-ui-200">
                        Compete in missions, brawls and tournaments with rewards and prize money.
                      </span>
                    </li>
                    <li className="flex gap-4 items-center">
                      <span className="icon text-2xl icon-verified text-premium-500"></span>
                      <span className="text-ui-200">
                        Access 3 extra missions every day to unlock rewards faster.
                      </span>
                    </li>
                    <li className="flex gap-4 items-center">
                      <span className="icon text-2xl icon-verified text-premium-500"></span>
                      <span className="text-ui-200">
                        Create a Discord profile to describe who you are as a gamer and find a team.
                      </span>
                    </li>
                    <li className="flex gap-4 items-center">
                      <span className="icon text-2xl icon-verified text-premium-500"></span>
                      <span className="text-ui-200">
                        Access an exclusive Discord channel, chat directly with G-Loot devs, and try out
                        new features before they are released.
                      </span>
                    </li>
                    <li className="flex gap-4 items-center">
                      <span className="icon text-2xl icon-verified text-premium-500"></span>
                      <span className="text-ui-200">Enjoy an ad-free experience on G-Loot.</span>
                    </li>
                  </ul>

                  <a href="#plans" className="button button-premium is-shining w-full">
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
