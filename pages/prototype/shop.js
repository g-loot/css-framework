import Accordion from '../../components/Accordion/Accordion';
import Ad from '../../components/Ad/Ad';
import Carousel from '../../components/Carousel/Carousel';
import Countdown from '../../components/Countdown/Countdown';
import PrototypeStructure from '../../components/Prototype/PrototypeStructure';
import RewardLadder from '../../components/RewardLadder/RewardLadder';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

//import DataGames from '../../mock-data/games.json'

const GiftCards = [
  {
    validity: 'United States & Europe',
    image: 'https://res.cloudinary.com/gloot/image/upload/v1657092351/Marketing/2022_prototype/giftcards/store_giftcard_riot.webp',
    name: 'Riot'
  },
  {
    validity: 'Worldwide',
    image: 'https://res.cloudinary.com/gloot/image/upload/v1657092351/Marketing/2022_prototype/giftcards/store_giftcard_amazon.webp',
    name: 'Amazon.com',
    exception: 'Available worldwide but only redeemable through Amazon US (amazon.com)'
  },
  {
    validity: 'United States, Europe, Philippines & Brazil',
    image: 'https://res.cloudinary.com/gloot/image/upload/v1657092351/Marketing/2022_prototype/giftcards/store_giftcard_steam.webp',
    name: 'Steam',
  },
  {
    validity: 'United States, Europe, Philippines & Brazil',
    image: 'https://res.cloudinary.com/gloot/image/upload/v1657092351/Marketing/2022_prototype/giftcards/store_giftcard_steam.webp',
    name: 'Steam',
  },
  {
    validity: 'United States, Europe, Philippines & Brazil',
    image: 'https://res.cloudinary.com/gloot/image/upload/v1657092351/Marketing/2022_prototype/giftcards/store_giftcard_steam.webp',
    name: 'Steam',
  }
]

export default function Home() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/brawls', { delay: 1000 });

  return (
    <>
      <PrototypeStructure title="Shop">
        <Ad width='1005'height='124'/>
        
        <section className='px-4 md:px-0 mb-4 py-8'>
          <h1 className='h2 leading-none mb-4'>
            Shop
          </h1>
          <p className='text-ui-300 max-w-[70ch]'>
            Turn your hard work and successes into rewards you can enjoy! Will you invest in some new gaming gear or just treat yourself to something you&#39;ve had your eye on? Earn more coins to spend in the shop by finishing Missions or competing in Brawls.
          </p>
        </section>

        <section className='px-4 md:px-0'>
          <h2 className='p-2 text-2xl'>
            Gift cards
          </h2>
          <ul className='grid grid-cols-2 xl:grid-cols-3 gap-4'>
            {GiftCards.map((giftcard, giftcardIndex) => (
              <>
                <li key={giftcard} className='surface surface-dimmed rounded-xl p-4 flex flex-col items-stretch gap-4 animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 2 * 0.05s)'}}>
                  <div className='flex-1 flex flex-col items-center gap-4'>
                    <div className='py-2 relative'>
                      <div className='w-4 h-4 rounded-full border border-t-ui-700 border-l-ui-700 border-b-ui-700/0 border-r-ui-700/0 bg-ui-900 absolute z-20 rotate-45 left-[calc(50%-0.5rem)] top-0'></div>
                      <div className='w-28 h-4 rounded-full border border-ui-700 bg-ui-900 relative z-10'></div>
                    </div>
                    <div className='text-ui-300 text-sm text-center'>
                      <strong className='uppercase'>Valid in:</strong><br />
                      <span>{giftcard.validity}</span>
                    </div>
                    <img src={giftcard.image} className='w-4/5 rounded-lg' height='auto' alt='Gift card' />
                    <h3 className='uppercase flex flex-col gap-2 items-center leading-none'>
                      <span>Gift cards</span>
                      <small className='text-ui-300'>{giftcard.name}</small>
                    </h3>
                    { giftcard.exception && (
                      <>
                        <p className='text-ui-300 text-sm text-center max-w-[45ch]'>
                          *Available worldwide but only redeemable through Amazon US (amazon.com)
                        </p>
                      </>
                    )}
                  </div>
                  <div className='border-t border-ui-700 text-center pt-4'>
                    <button type='button' className='button button-primary'>
                      <span>View gift cards</span>
                    </button>
                  </div>
                </li>
              </>
            ))}
            
          </ul>
        </section>


      </PrototypeStructure>
        
    </>
  );
}
