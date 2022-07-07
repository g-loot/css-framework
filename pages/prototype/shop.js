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
    validity: 'Worldwide',
    image: 'https://res.cloudinary.com/gloot/image/upload/v1643193561/shop/Gift_Card_Image_-_DRKN_1x.png',
    name: 'DRKN Gaming Streetwear',
  },
  {
    validity: 'Brazil',
    image: 'https://res.cloudinary.com/gloot/image/upload/v1657092351/Marketing/2022_prototype/giftcards/store_giftcard_ifood.webp',
    name: 'iFood',
  }
]

export default function Home() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/brawls', { delay: 1000 });

  return (
    <>
      <PrototypeStructure title="Shop">
        <Ad width='1005'height='124'/>
        
        <section className='px-4 md:px-0 my-8'>
          <h1 className='h2 leading-none mb-4'>
            Shop
          </h1>
          <p className='text-ui-300 max-w-[70ch]'>
            Turn your hard work and successes into rewards you can enjoy! Will you invest in some new gaming gear or just treat yourself to something you&#39;ve had your eye on? Earn more coins to spend in the shop by finishing Missions or competing in Brawls.
          </p>
        </section>

        <section className='px-4 md:px-0 my-8'>
          <h2 className='p-2 text-2xl'>
            Gift cards
          </h2>
          <ul className='grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
            {GiftCards.map((giftcard, giftcardIndex) => (
              <>
                <li key={giftcard} className='surface rounded-2xl p-4 flex flex-col items-stretch text-center animate-slide-in-right animate-delay' style={{ '--delay': `calc( ${giftcardIndex} * 0.05s)`}}>
                  <div className='flex-1 flex flex-col items-center gap-2'>
                    <div className='py-2 relative'>
                      <div className='w-6 h-6 rounded-full border border-t-ui-700 border-l-ui-700 border-b-ui-700/0 border-r-ui-700/0 bg-ui-900 absolute z-20 rotate-45 left-[calc(50%-0.75rem)] -top-1'></div>
                      <div className='w-28 h-4 rounded-full border border-ui-700 bg-ui-900 relative z-10'></div>
                    </div>
                    <div className='text-ui-300 text-sm h-10 flex flex-col justify-center items-center'>
                      <div className='leading-tight'>
                        <strong className='uppercase'>Valid in:</strong><br />
                        <span className='leading-none'>{giftcard.validity}</span>
                      </div>
                    </div>
                    <img src={giftcard.image} className='w-4/5 rounded-xl shadow-2xl my-3' height='auto' alt='Gift card' />
                    <h3 className='uppercase flex flex-col gap-2 items-center leading-none'>
                      <span>Gift cards</span>
                      <small className='text-ui-300'>{giftcard.name}</small>
                    </h3>
                    <div className='mt-2 h-12 flex items-center'>
                      { giftcard.exception && (
                        <>
                          <p className='text-ui-300 text-sm max-w-[45ch]'>
                            *Available worldwide but only redeemable through Amazon US (amazon.com)
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  <div className='border-t border-ui-700 pt-4'>
                    <button type='button' className='button button-primary w-full'>
                      <span>View gift cards</span>
                    </button>
                  </div>
                </li>
              </>
            ))}
            
          </ul>
        </section>

        <section className='px-4 md:px-0 my-8'>
          <h2 className='p-2 text-2xl'>
            Tokens
          </h2>
          <div className='relative'>
            <img className="hidden lg:block absolute z-20 -top-20 -right-4 rotate-[33deg]" src="https://res.cloudinary.com/gloot/image/upload/v1657118756/Marketing/2022_prototype/CurrencyRewards/Reward-token-side_1.webp" width="160" height="auto" alt="" />
            <img className="hidden lg:block absolute z-20 top-32 right-32 rotate-[67deg]" src="https://res.cloudinary.com/gloot/image/upload/v1657118756/Marketing/2022_prototype/CurrencyRewards/Reward-token-side_2.webp" width="75" height="auto" alt="" />
            <img className="hidden lg:block absolute z-20 -bottom-20 -right-32 blur-sm rotate-[120deg]" src="https://res.cloudinary.com/gloot/image/upload/v1657118756/Marketing/2022_prototype/CurrencyRewards/Reward-token-side_1.webp" width="210" height="auto" alt="" />
            <img className="hidden lg:block absolute z-20 -top-14 left-32 blur-sm -rotate-[33deg]" src="https://res.cloudinary.com/gloot/image/upload/v1657118756/Marketing/2022_prototype/CurrencyRewards/Reward-token-side_2.webp" width="168" height="auto" alt="" />
            <img className="hidden lg:block absolute z-20 -bottom-14 left-20 -rotate-[143deg]" src="https://res.cloudinary.com/gloot/image/upload/v1657118756/Marketing/2022_prototype/CurrencyRewards/Reward-token-side_2.webp" width="144" height="auto" alt="" />
            <img className="hidden lg:block absolute z-20 top-16 left-16 -rotate-[74deg]" src="https://res.cloudinary.com/gloot/image/upload/v1657118756/Marketing/2022_prototype/CurrencyRewards/Reward-token-side_1.webp" width="49" height="auto" alt="" />

            <div className='relative z-10 surface rounded-lg p-8 text-center flex flex-col items-center justify-center bg-cover bg-center' style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1657120628/Marketing/2022_prototype/shop_token_bg.webp)`}}>

              <h2 className='text-4xl'>Need a token <span className='text-main'>refill</span>?</h2>
              <p className='text-lg mt-4 mb-6 max-w-[25ch]'>
                Purchase tokens to enter brawls and keep on climbing the leaderboards.
              </p>
              <button type="button" className='button button-lg button-primary'>
                <span>Buy tokens</span>
              </button>
            </div>

          </div>
        </section>
        <section className='px-4 md:px-0 my-8'>
          <p className='p-2 text-ui-300 text-sm'>
            Don&#39;t see anything that suits you? Don&#39;t worry, this is just the start! More items should be coming to our shop soon.<br />
            By making a purchase you agree to our Terms and Conditions.
          </p>
        </section>




      </PrototypeStructure>
        
    </>
  );
}