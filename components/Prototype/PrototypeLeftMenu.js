import Ad from '../Ad/Ad';
import Button from '../Button/Button';
import Link from 'next/link';
import PrototypeGamesNav from './PrototypeGamesNav';
import { useRouter } from 'next/router';

export default function PrototypeLeftMenu(props) {
  const router = useRouter();
  const { query } = useRouter();
  const hasAds = query.ads === 'true' ? true : false;
  const { user_id } = router.query; 

  return (
    <>
    <div className='sticky top-[68px] space-y-4'>
      <div className="surface rounded-lg overflow-hidden">
        {/*<MainNav items={JSONstructure.pages} />*/}

        <ul className="menu">
          <li>
            <Link href={`/prototype/home${hasAds ? '?ads=true' : ''}`}>
              <a className={`${router.pathname.endsWith('prototype') ? 'is-active' : ''} ${router.pathname.includes("home") ? 'is-active' : ''}`}>
                <span className="icon rounded w-8 flex items-center justify-center">
                  <span className={`icon icon-16 icon-home-2`}/>
                </span>
                <span className='uppercase'>Home</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/prototype/profile/1${hasAds ? '?ads=true' : ''}`}>
              <a className={`${router.pathname.includes("profile") && user_id == 1  ? 'is-active' : ''}`}>
                <span className="icon rounded w-8 flex items-center justify-center">
                  <span className={`icon icon-16 icon-circle-09`}/>
                </span>
                <span className='uppercase'>Profile</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/prototype/clans${hasAds ? '?ads=true' : ''}`}>
              <a className={`${router.pathname.includes("clans") ? 'is-active' : ''}`}>
                <span className="icon rounded w-8 flex items-center justify-center">
                  <span className={`icon icon-16 icon-multiple-12`}/>
                </span>
                <span className='uppercase'>Clans</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/prototype/shop${hasAds ? '?ads=true' : ''}`}>
              <a className={`${router.pathname.includes("shop") ? 'is-active' : ''}`}>
                <span className="icon rounded w-8 flex items-center justify-center">
                  <span className={`icon icon-16 icon-shop`}/>
                </span>
                <span className='uppercase'>Shop</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/prototype/premium${hasAds ? '?ads=true' : ''}`}>
              <a className={`${router.pathname.includes("premium") ? 'is-active' : ''}`}>
                <span className="icon rounded w-8 flex items-center justify-center">
                  <span className={`icon icon-16 icon-ic_stars_24px`}/>
                </span>
                <span className='uppercase'>Premium</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <PrototypeGamesNav />
      <div className='text-center'>
        <Button label='Edit favorite games' variant='ghost' icon='pen-2' size='sm'></Button>
      </div>
      <div className="rounded-xl overflow-hidden relative">
        <div className="flex flex-col xl:flex-row w-full px-4 py-8 xl:items-center xl:justify-between relative z-20">
          <div className="font-headings font-bold italic text-xl leading-tight color-dark-300 mb-4 xl:mb-0">
            Tournament<br />
            Schedule 
          </div>
          <div>
            <Button variant='secondary' icon='arrow-sm-right'></Button>
          </div>
        </div>
        <div className='absolute pointer-events-none inset-0 z-10 bg-right-bottom bg-no-repeat bg-contain rounded-xl' style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1659467776/Marketing/2022_prototype/bg-tournamentschedule.webp)`}}></div>
      </div>
      <Ad width='260'height='260'/>
    </div>
    </>
  );
}