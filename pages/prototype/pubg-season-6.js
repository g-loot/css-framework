import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import PrototypeHead from '../../components/Prototype/PrototypeHead';
import PrototypeStructure from '../../components/Prototype/PrototypeStructure';
import RewardLadder from '../../components/RewardLadder/RewardLadder';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';
//import DataGames from '../../mock-data/games.json'

export default function PUBGSeason6() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/brawls', { delay: 1000 });

  return (
    <>

      <PrototypeHead title='PUBG Season 6' />
        <section 
          className='full-width bg-cover bg-no-repeat bg-center pt-24' 
          style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1655119438/Marketing/2022_PUBG_season_6/season-6-hero-bg.jpg)`}}>


          <div className='container mx-auto max-w-xl flex flex-col relative pb-12'>

            <h1 className='text-center block mx-auto my-8 text-6xl uppercase'>
              <span className='text-main'>G-Loot</span> PUBG Season 6
            </h1>

            <div className='max-w-[100vw]'>
              <iframe className='mx-auto max-w-[100%] block aspect-video h-auto rounded-2xl' src="https://player.twitch.tv/?video=1465753668" allowFullScreen={true} height={676} width={1082}></iframe>
            </div>


            <img src='https://res.cloudinary.com/gloot/image/upload/v1655120411/Marketing/2022_PUBG_season_6/season_6-hero-julie.png' className='absolute bottom-0 -left-[calc(770px/2)] scale-75 origin-bottom lg:scale-100' width={770} height={686} alt="Julie" />

          </div>

        </section>

        <section
          className='py-24 bg-ui-900'>

            <div className='container mx-auto max-w-xl flex flex-wrap justify-center gap-4'>

              <div className='surface w-64 h-64 flex flex-col items-between justify-between rounded-lg items-center text-center gap-4'>
                <div className='flex-1 flex flex-col justify-center items-center gap-2'>
                  <svg className='h-24 w-24 mx-auto block' viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100.313 91.4925L91.4902 100.313L100.311 109.136L109.134 100.315L100.313 91.4925Z" fill="white"/>
                    <path d="M151.49 100.312L162.772 111.594L187.625 100.312H151.49Z" fill="white"/>
                    <path d="M100.312 187.625V151.493L89.0307 162.772L100.312 187.625Z" fill="white"/>
                    <path d="M13 100.312H49.135L37.8532 89.0307L13 100.312Z" fill="white"/>
                    <path d="M103.774 56.0427L100.31 59.5072L96.8476 56.0427H81.9742L56.0413 81.9752V96.8494L59.5079 100.314L56.0413 103.778V118.65L81.9742 144.582H96.851L100.313 141.118L103.777 144.582H118.65L144.583 118.65V103.776L141.117 100.311L144.583 96.8468V81.9752L118.65 56.0427H103.774ZM130.343 94.0021L124.029 100.312L130.343 106.621V112.751L112.75 130.342H106.621L100.315 124.03L94.0037 130.342H87.8748L70.2825 112.751V106.622L76.5965 100.314L70.2825 94.0055V87.8737L87.8748 70.283H94.0037L100.31 76.5944L106.618 70.283H112.75L130.343 87.8737V94.0021Z" fill="white"/>
                    <path d="M100.312 13V49.1315L111.594 37.8532L100.312 13Z" fill="white"/>
                  </svg>
                  <h3 className='h4 text-2xl'>
                    Open Qualifer EU West
                  </h3>
                </div>
                <div className='w-full border-t border-ui-700 flex'>
                  <div className='p-4 text-ui-300 flex-1 border-r border-ui-700'>
                    <span>Date</span>
                  </div>
                  <div className='p-4 text-ui-300 flex-1'>
                    <span>Region</span>
                  </div>
                </div>
              </div>
              <div className='surface w-64 h-64 flex flex-col items-between justify-between rounded-lg items-center text-center gap-4'>
                <div className='flex-1 flex flex-col justify-center items-center gap-2'>
                  <svg className='h-24 w-24 mx-auto block' viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100.313 91.4925L91.4902 100.313L100.311 109.136L109.134 100.315L100.313 91.4925Z" fill="white"/>
                    <path d="M151.49 100.312L162.772 111.594L187.625 100.312H151.49Z" fill="white"/>
                    <path d="M100.312 187.625V151.493L89.0307 162.772L100.312 187.625Z" fill="white"/>
                    <path d="M13 100.312H49.135L37.8532 89.0307L13 100.312Z" fill="white"/>
                    <path d="M103.774 56.0427L100.31 59.5072L96.8476 56.0427H81.9742L56.0413 81.9752V96.8494L59.5079 100.314L56.0413 103.778V118.65L81.9742 144.582H96.851L100.313 141.118L103.777 144.582H118.65L144.583 118.65V103.776L141.117 100.311L144.583 96.8468V81.9752L118.65 56.0427H103.774ZM130.343 94.0021L124.029 100.312L130.343 106.621V112.751L112.75 130.342H106.621L100.315 124.03L94.0037 130.342H87.8748L70.2825 112.751V106.622L76.5965 100.314L70.2825 94.0055V87.8737L87.8748 70.283H94.0037L100.31 76.5944L106.618 70.283H112.75L130.343 87.8737V94.0021Z" fill="white"/>
                    <path d="M100.312 13V49.1315L111.594 37.8532L100.312 13Z" fill="white"/>
                  </svg>
                  <h3 className='h4 text-2xl'>
                    Open Qualifer EU West
                  </h3>
                </div>
                <div className='w-full border-t border-ui-700 flex'>
                  <div className='p-4 text-ui-300 flex-1 border-r border-ui-700'>
                    <span>Date</span>
                  </div>
                  <div className='p-4 text-ui-300 flex-1'>
                    <span>Region</span>
                  </div>
                </div>
              </div>
              <div className='surface w-64 h-64 flex flex-col items-between justify-between rounded-lg items-center text-center gap-4'>
                <div className='flex-1 flex flex-col justify-center items-center gap-2'>
                  <svg className='h-24 w-24 mx-auto block' viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100.313 91.4925L91.4902 100.313L100.311 109.136L109.134 100.315L100.313 91.4925Z" fill="white"/>
                    <path d="M151.49 100.312L162.772 111.594L187.625 100.312H151.49Z" fill="white"/>
                    <path d="M100.312 187.625V151.493L89.0307 162.772L100.312 187.625Z" fill="white"/>
                    <path d="M13 100.312H49.135L37.8532 89.0307L13 100.312Z" fill="white"/>
                    <path d="M103.774 56.0427L100.31 59.5072L96.8476 56.0427H81.9742L56.0413 81.9752V96.8494L59.5079 100.314L56.0413 103.778V118.65L81.9742 144.582H96.851L100.313 141.118L103.777 144.582H118.65L144.583 118.65V103.776L141.117 100.311L144.583 96.8468V81.9752L118.65 56.0427H103.774ZM130.343 94.0021L124.029 100.312L130.343 106.621V112.751L112.75 130.342H106.621L100.315 124.03L94.0037 130.342H87.8748L70.2825 112.751V106.622L76.5965 100.314L70.2825 94.0055V87.8737L87.8748 70.283H94.0037L100.31 76.5944L106.618 70.283H112.75L130.343 87.8737V94.0021Z" fill="white"/>
                    <path d="M100.312 13V49.1315L111.594 37.8532L100.312 13Z" fill="white"/>
                  </svg>
                  <h3 className='h4 text-2xl'>
                    Open Qualifer EU West
                  </h3>
                </div>
                <div className='w-full border-t border-ui-700 flex'>
                  <div className='p-4 text-ui-300 flex-1 border-r border-ui-700'>
                    <span>Date</span>
                  </div>
                  <div className='p-4 text-ui-300 flex-1'>
                    <span>Region</span>
                  </div>
                </div>
              </div>
              <div className='surface w-64 h-64 flex flex-col items-between justify-between rounded-lg items-center text-center gap-4'>
                <div className='flex-1 flex flex-col justify-center items-center gap-2'>
                  <svg className='h-24 w-24 mx-auto block' viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M165.528 148.947L133.459 101.38L153.997 109.622L132.674 86.5925L159.265 61.308L127.983 73.8546L148.948 35L101.38 67.0717L109.621 46.5316L86.5955 67.8567L61.3102 41.2628L73.8572 72.5442L35 51.5808L67.0756 99.1477L46.5325 90.907L67.8559 113.935L41.2649 139.22L72.5464 126.673L51.5812 165.528L99.1494 133.456L90.9087 153.996L113.937 132.671L139.223 159.266L126.672 127.984L165.528 148.947ZM102.999 106.542L79.4762 111.492L93.9852 102.996L89.038 79.4745L97.5354 93.9852L121.057 89.0359L106.544 97.5319L111.495 121.054L102.999 106.542Z" fill="white"/>
                  </svg>
                  <h3 className='h4 text-2xl'>
                    Open Qualifer EU West
                  </h3>
                </div>
                <div className='w-full border-t border-ui-700 flex'>
                  <div className='p-4 text-ui-300 flex-1 border-r border-ui-700'>
                    <span>Date</span>
                  </div>
                  <div className='p-4 text-ui-300 flex-1'>
                    <span>Region</span>
                  </div>
                </div>
              </div>
              <div className='surface w-64 h-64 flex flex-col items-between justify-between rounded-lg items-center text-center gap-4'>
                <div className='flex-1 flex flex-col justify-center items-center gap-2'>
                  <svg className='h-24 w-24 mx-auto block' viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M185.469 131.654L155.526 136.933L181.332 80.8125L156.906 109.922L136.521 35.4509V130.496C136.521 132.899 135.675 135.224 134.131 137.064L132.933 138.49C131.389 140.33 129.247 141.567 126.882 141.984C124.516 142.401 122.079 141.972 119.999 140.771L114.111 137.372L113.174 152.174L161.857 164.938L140.797 152.778L185.469 131.654Z" fill="white"/>
                    <path d="M74.5873 141.984L74.5856 141.984C72.2199 141.567 70.0767 140.33 68.5325 138.49L67.3354 137.065C65.791 135.225 64.9445 132.899 64.9445 130.496V35.4509L44.5598 109.922L20.1341 80.8124L45.9379 136.933L16 131.654L60.6691 152.779L39.6092 164.938L88.2919 152.174L87.3548 137.372L81.4706 140.77C79.3901 141.972 76.9533 142.402 74.5873 141.984Z" fill="white"/>
                    <path d="M100.732 12L105.777 91.4632L122.449 87.6567L110.818 100.194L122.449 112.732L105.777 108.929L100.732 188.389L95.6911 108.929L79.0188 112.732L90.6499 100.194L79.0188 87.6567L95.6911 91.4632L100.732 12Z" fill="white"/>
                  </svg>
                  <h3 className='h4 text-2xl'>
                    Open Qualifer EU West
                  </h3>
                </div>
                <div className='w-full border-t border-ui-700 flex'>
                  <div className='p-4 text-ui-300 flex-1 border-r border-ui-700'>
                    <span>Date</span>
                  </div>
                  <div className='p-4 text-ui-300 flex-1'>
                    <span>Region</span>
                  </div>
                </div>
              </div>

            </div>


        </section>

      <Footer></Footer>
        
    </>
  );
}
