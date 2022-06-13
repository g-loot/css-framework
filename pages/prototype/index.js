import Carousel from '../../components/Carousel/Carousel';
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
        
        <section className='surface sm:rounded-lg overflow-hidden mb-4'>
          <Carousel></Carousel>
        </section>

        <section className='mb-4'>
          <div className='flex items-center justify-between mb-2'>
            <div>
              <h2 className='h5 mb-1'>Weekly Mission Rewards</h2>
              <p className='text-sm text-ui-300 leading-none'>
                XP is accumulated from all missions in all games on G-Loot
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <div className='chip chip-sm chip-secondary'>
                <span className='icon icon-time-machine'></span>
                <span>Resets in 02:03:22</span>
              </div>
              <button className='tooltip tooltip-left text-ui-300 text-0' data-tooltip='Unlock rewards to earn XP'><span className='icon icon-16 icon-c-info'></span></button>
            </div>
          </div>
          <RewardLadder></RewardLadder>
        </section>

        <section className='mb-4 grid grid-cols-1 xl:grid-cols-3 gap-4'>
          
          <div className='surface flex flex-col flex-1 min-h-[16rem] lg:min-h-fit relative overflow-hidden sm:rounded-lg p-4'>
            <div className='relative z-30 flex-1'>
              <div className='relative z-30 mb-2'>
                <div className='flex items-baseline gap-2 mb-1'>
                  <h2 className='h5'>
                    <span>Daily Loot Streak</span>
                  </h2>
                  <button className='tooltip text-ui-300' data-tooltip='Claim a free reward each day you visit gloot.com'><span className='icon icon-16 icon-c-info'></span></button>
                </div>
                <p className='text-sm text-ui-300 leading-none'>
                  Claim a free reward each day
                </p>
              </div>
            </div>
            <div className='relative z-30 flex flex-col items-center justify-center'>
              <button className='button button-claim is-shining'>
                <span>Claim rewards</span>
              </button>
            </div>
            <div className='absolute pointer-events-none inset-0 z-10 bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653907437/Marketing/2022_prototype/bg-claim.jpg)`}}></div>
          </div>
          
          <div className='surface surface-dimmed flex flex-col flex-1 min-h-[16rem] lg:min-h-fit relative overflow-hidden sm:rounded-lg p-4'>
            <div className='relative z-30 flex-1 flex flex-col items-center justify-center text-center'>
              <button className="button button-secondary button-sm button-play">
                <span className="icon icon-circle-caret-right"></span>
                <span>How to brawl</span>
              </button>
              <h3 className='h4 mt-6'>
                Install the tracker to track your stats and compete.
              </h3>
            </div>
            <div className='relative z-30 flex flex-col items-center justify-center'>
              <button className='button button-primary'>
                <span>Download tracker</span>
              </button>
            </div>
          </div>

          <div className='surface flex flex-col flex-1 min-h-[16rem] lg:min-h-fit relative overflow-hidden sm:rounded-lg p-4'>
            <div className='relative z-30 flex-1'>
              <div className='flex items-start gap-4'>
                <div className="rounded flex items-center justify-center h-12 w-12 bg-gradient-to-b from-ui-900/75 to-ui-800">
                  <span className="icon icon-32 icon-game-valorant-symbol text-game-valorant color-white"></span>
                </div>
                <div>
                  <div className='flex items-baseline gap-2 mb-1'>
                    <h2 className='h5'>
                      <span>Latest Match Summary</span>
                    </h2>
                  </div>
                  <p className='text-sm text-ui-300 leading-none'>
                    May 19 / 11:05 PM
                  </p>
                </div>
              </div>
              <div className='w-full rounded-xl grid grid-cols-4 gap-2 leading-none mb-4 pt-10 pb-8'>
                <div className='flex-1 sm:rounded-lg bg-gradient-to-b from-ui-900/75 to-ui-800/75 backdrop-blur-sm text-center aspect-square flex flex-col gap-1 justify-center'>
                  <div className='text-2xl xl:text-3xl font-headings italic text-ui-100'>11</div>
                  <div className='text-xs text-ui-300 h-5'>Assists</div>
                </div>
                <div className='flex-1 rounded-lg bg-gradient-to-b from-ui-900/75 to-ui-800/75 backdrop-blur-sm text-center aspect-square flex flex-col gap-1 justify-center'>
                  <div className='text-2xl xl:text-3xl font-headings italic text-ui-100'>53</div>
                  <div className='text-xs text-ui-300 h-5'>Kills</div>
                </div>
                <div className='flex-1 rounded-lg bg-gradient-to-b from-ui-900/75 to-ui-800/75 backdrop-blur-sm text-center aspect-square flex flex-col gap-1 justify-center'>
                  <div className='text-2xl xl:text-3xl font-headings italic text-ui-100'>23</div>
                  <div className='text-xs text-ui-300 h-5'>Deaths</div>
                </div>
                <div className='flex-1 rounded-lg bg-gradient-to-b from-ui-900/75 to-ui-800/75 backdrop-blur-sm text-center aspect-square flex flex-col gap-1 justify-center'>
                  <div className='text-2xl xl:text-3xl font-headings italic text-ui-100'>38</div>
                  <div className='text-xs text-ui-300 h-5'>Headshot<br/>kills</div>
                </div>
              </div>
            </div>
            <div className='relative z-30 flex flex-col items-center justify-center'>
              <button className='button button-secondary'>
                <span>View stats</span>
              </button>
            </div>

            <div className='absolute pointer-events-none inset-0 z-10 bg-right-bottom bg-no-repeat bg-contain' style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653289889/Marketing/202109_gloot2/laststats-valorant.png)`}}></div>
            
          </div>
          
         

        </section>


      </PrototypeStructure>
        
    </>
  );
}
