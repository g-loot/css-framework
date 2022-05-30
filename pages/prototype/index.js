import Carousel from '../../components/Carousel/Carousel';
import PrototypeStructure from '../../components/Prototype/PrototypeStructure';
import RewardLadder from '../../components/RewardLadder/RewardLadder';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/users/self', { delay: 1000 });

  return (
    <>
      <PrototypeStructure title="Home">

        <section className='card rounded-lg overflow-hidden mb-4'>
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
            <div>
              <div className='chip chip-sm chip-secondary'>
                <span className='icon icon-time-machine'></span>
                <span>Resets in 02:03:22</span>
              </div>
            </div>
          </div>
          <RewardLadder></RewardLadder>
        </section>

        <section className='mb-4 grid grid-cols-1 xl:grid-cols-3 gap-4'>
          
          <div className='card flex-1 relative overflow-hidden rounded-lg p-4'>
            <div className='mb-2'>
              <div className='flex items-baseline gap-2 mb-1'>
                <h2 className='h5'>
                  <span>Daily Loot Streak</span>
                </h2>
                <button className='tooltip text-ui-300' data-tooltip='Claim a free reward each day you visit gloot.com.'><span className='icon icon-16 icon-c-info'></span></button>
              </div>
              <p className='text-sm text-ui-300 leading-none'>
                Claim a free reward each day
              </p>
            </div>
            <div className='flex-1 flex flex-col items-center py-8'>
              <button className='button button-lg button-claim'>
                <span>Claim rewards</span>
              </button>
            </div>
          </div>

          <div className='card card-halo halo-r flex-1 relative overflow-hidden rounded-lg p-4'>
            <div className='mb-2 flex items-start gap-4'>
              <div className="rounded-md bg-game-valorant flex items-center justify-center"><span className="icon icon-32 icon-game-valorant-symbol color-white"></span></div>
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


            <div className='relative z-30 flex-1 flex flex-col items-center justify-center h-60'>
              <div className='w-full rounded-xl grid grid-cols-2 lg:grid-cols-4 gap-2 leading-none mb-4'>
                <div className='flex-1 rounded-lg bg-ui-900/75 backdrop-blur-sm text-center aspect-square flex flex-col gap-1 justify-center'>
                  <div className='text-3xl font-headings italic text-ui-100'>11</div>
                  <div className='text-xs text-ui-300 h-5'>Assists</div>
                </div>
                <div className='flex-1 rounded-lg bg-ui-900/75 backdrop-blur-sm text-center aspect-square flex flex-col gap-1 justify-center'>
                  <div className='text-3xl font-headings italic text-ui-100'>11</div>
                  <div className='text-xs text-ui-300 h-5'>Kills</div>
                </div>
                <div className='flex-1 rounded-lg bg-ui-900/75 backdrop-blur-sm text-center aspect-square flex flex-col gap-1 justify-center'>
                  <div className='text-3xl font-headings italic text-ui-100'>11</div>
                  <div className='text-xs text-ui-300 h-5'>Deaths</div>
                </div>
                <div className='flex-1 rounded-lg bg-ui-900/75 backdrop-blur-sm text-center aspect-square flex flex-col gap-1 justify-center'>
                  <div className='text-3xl font-headings italic text-ui-100'>11</div>
                  <div className='text-xs text-ui-300 h-5'>Headshot<br/>kills</div>
                </div>
              </div>
              <button className='button button-secondary'>
                <span>View stats</span>
              </button>
            </div>
            


            <div className='absolute pointer-events-none inset-0 z-10 bg-right-bottom bg-no-repeat bg-contain' style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653289889/Marketing/202109_gloot2/laststats-valorant.png)`}}></div>
            
            
          </div>
          
          <div className='card flex-1 relative overflow-hidden rounded-lg p-4'>

          </div>

        </section>


      </PrototypeStructure>
        
    </>
  );
}
