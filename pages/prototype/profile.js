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
      <PrototypeStructure title="Profile">
        <Ad width='1005'height='124'/>

        <section className='flex items-end justify-between mb-4'>
          <h1 className='h4'>
            Profile
          </h1>
          <button type='button' className='button button-secondary'>
            <span className='icon icon-cogwheel'></span>
            <span>Profile settings</span>
          </button>
        </section>

        <section className='flex items-center justify-between mb-4'>
          <div className='flex gap-4 items-center'>
            <figure className="avatar avatar-xl avatar-circle">
              <div>
                <img src="https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png" />
              </div>
            </figure>
            <div className='space-y-2'>
              <h2 className='h3 leading-none'>
                JackAttack123
              </h2>
              <div className='flex items-center gap-2'>
                <img src='https://flagcdn.com/tt.svg' className='aspect-video rounded-sm max-w-[1.5rem]' />
                <span className='text-ui-300'>Trinidad and Tobago</span>
              </div>
              <a href='#' target='_blank' rel="noreferrer" className='transition-colors duration-75 text-ui-300 hover:text-main flex items-center gap-2'>
                <span className='icon icon-24 icon-twitch'></span>
                <span>@jackattack123</span>
              </a>
            </div>
          </div>
          <div className='flex-1 flex justify-center gap-4'>
            <div className="gauge" style={{"--percent": 55}}>
              <div className="gauge-chart">
                <svg className="h-28 w-28" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M102.402 110.916C101.593 110.916 100.802 110.671 100.135 110.212C99.4678 109.753 98.9556 109.103 98.6659 108.347C98.3763 107.591 98.3229 106.765 98.5128 105.978C98.7027 105.191 99.1269 104.48 99.7295 103.939C108.015 96.5056 113.85 86.7325 116.464 75.9118C119.077 65.0912 118.345 53.7322 114.365 43.3362C110.385 32.9403 103.344 23.9967 94.1732 17.6874C85.0021 11.3782 74.1324 8.0003 63.0006 8.00023C51.8688 8.00015 40.9991 11.3779 31.8279 17.687C22.6567 23.9961 15.6157 32.9396 11.6357 43.3356C7.65559 53.7315 6.92371 65.0904 9.53675 75.9111C12.1498 86.7319 17.9848 96.505 26.2705 103.939C26.6621 104.29 26.9808 104.714 27.2083 105.188C27.4357 105.662 27.5676 106.176 27.5962 106.701C27.6249 107.226 27.5498 107.751 27.3752 108.247C27.2006 108.743 26.93 109.199 26.5789 109.591C26.2277 109.982 25.8029 110.3 25.3287 110.527C24.8545 110.754 24.3402 110.885 23.8153 110.913C23.2903 110.941 22.765 110.865 22.2694 110.69C21.7737 110.515 21.3175 110.244 20.9267 109.892C11.4363 101.377 4.75315 90.1821 1.76042 77.7877C-1.23232 65.3932 -0.393727 52.3824 4.16536 40.4748C8.72445 28.5671 16.7894 18.323 27.2944 11.0965C37.7994 3.86992 50.25 0.00102438 63.0006 0.00109863C75.7512 0.00117288 88.2017 3.87021 98.7066 11.0969C109.212 18.3236 117.276 28.5677 121.835 40.4754C126.394 52.3832 127.233 65.394 124.24 77.7884C121.247 90.1828 114.564 101.377 105.073 109.893C104.34 110.552 103.389 110.917 102.402 110.916Z" />
                    <path d="M23.5986 106.916C14.7106 98.9412 8.4515 88.4573 5.64858 76.8498C2.84566 65.2422 3.63086 53.0574 7.9004 41.9055C12.1699 30.7537 19.7228 21.1599 29.5609 14.3921C39.399 7.6242 51.0591 4.00084 63.0003 4.00085C74.9414 4.00087 86.6016 7.62426 96.4396 14.3922C106.278 21.16 113.831 30.7539 118.1 41.9057C122.37 53.0575 123.155 65.2423 120.352 76.8499C117.549 88.4574 111.29 98.9413 102.402 106.916" strokeWidth="8" strokeMiterlimit="10" strokeLinecap="round" />
                </svg>
              </div>
              <div className="gauge-content">
                <div className='text-2xl font-headings'>
                  {55}%
                </div>
                <div className='text-xs text-ui-300 uppercase'>
                  win rate
                </div>
              </div>
            </div>
            <div className="gauge" style={{"--percent": 86}}>
              <div className="gauge-chart">
                <svg className="h-28 w-28" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M102.402 110.916C101.593 110.916 100.802 110.671 100.135 110.212C99.4678 109.753 98.9556 109.103 98.6659 108.347C98.3763 107.591 98.3229 106.765 98.5128 105.978C98.7027 105.191 99.1269 104.48 99.7295 103.939C108.015 96.5056 113.85 86.7325 116.464 75.9118C119.077 65.0912 118.345 53.7322 114.365 43.3362C110.385 32.9403 103.344 23.9967 94.1732 17.6874C85.0021 11.3782 74.1324 8.0003 63.0006 8.00023C51.8688 8.00015 40.9991 11.3779 31.8279 17.687C22.6567 23.9961 15.6157 32.9396 11.6357 43.3356C7.65559 53.7315 6.92371 65.0904 9.53675 75.9111C12.1498 86.7319 17.9848 96.505 26.2705 103.939C26.6621 104.29 26.9808 104.714 27.2083 105.188C27.4357 105.662 27.5676 106.176 27.5962 106.701C27.6249 107.226 27.5498 107.751 27.3752 108.247C27.2006 108.743 26.93 109.199 26.5789 109.591C26.2277 109.982 25.8029 110.3 25.3287 110.527C24.8545 110.754 24.3402 110.885 23.8153 110.913C23.2903 110.941 22.765 110.865 22.2694 110.69C21.7737 110.515 21.3175 110.244 20.9267 109.892C11.4363 101.377 4.75315 90.1821 1.76042 77.7877C-1.23232 65.3932 -0.393727 52.3824 4.16536 40.4748C8.72445 28.5671 16.7894 18.323 27.2944 11.0965C37.7994 3.86992 50.25 0.00102438 63.0006 0.00109863C75.7512 0.00117288 88.2017 3.87021 98.7066 11.0969C109.212 18.3236 117.276 28.5677 121.835 40.4754C126.394 52.3832 127.233 65.394 124.24 77.7884C121.247 90.1828 114.564 101.377 105.073 109.893C104.34 110.552 103.389 110.917 102.402 110.916Z" />
                    <path d="M23.5986 106.916C14.7106 98.9412 8.4515 88.4573 5.64858 76.8498C2.84566 65.2422 3.63086 53.0574 7.9004 41.9055C12.1699 30.7537 19.7228 21.1599 29.5609 14.3921C39.399 7.6242 51.0591 4.00084 63.0003 4.00085C74.9414 4.00087 86.6016 7.62426 96.4396 14.3922C106.278 21.16 113.831 30.7539 118.1 41.9057C122.37 53.0575 123.155 65.2423 120.352 76.8499C117.549 88.4574 111.29 98.9413 102.402 106.916" strokeWidth="8" strokeMiterlimit="10" strokeLinecap="round" />
                </svg>
              </div>
              <div className="gauge-content">
                <div className='text-2xl font-headings'>
                  {86}%
                </div>
                <div className='text-xs text-ui-300 uppercase'>
                  win rate
                </div>
              </div>
            </div>
          </div>
        </section>
        


      </PrototypeStructure>
        
    </>
  );
}
