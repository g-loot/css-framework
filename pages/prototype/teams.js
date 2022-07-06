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
      <PrototypeStructure title="Teams">
        <Ad width='1005'height='124'/>
        <section className='mb-4'>
          <div className='surface md:rounded-lg p-4 lg:p-8 bg-cover bg-right' style={{ backgroundImage: 'url(https://res.cloudinary.com/gloot/image/upload/v1657085925/Marketing/2022_prototype/Teams_bg.jpg)'}}>
            <div className=''>
              <h1 className='h2 leading-none'>
                Teams
              </h1>
              <p className='leading-relaxed text-ui-300 mt-4 mb-6'>
                Want to be the next big thing or just play more with your friends?
                <br />
                Compare your stats and join tournaments and Showdowns together.
                <br />
                Create or join a team today.
              </p>
              <div className='flex gap-4'>
                <button type='button' className='button button-primary'>
                  <span>Create a team</span>
                </button>
                <button type='button' className='button button-secondary'>
                  <span>Join a team</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className='px-4 md:px-0'>
          <h2 className='p-2 text-2xl'>
            My teams
          </h2>
          <ul className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            <li className='animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 2 * 0.05s)'}}>
              <div className='surface surface-dimmed hover:scale-95 hover:opacity-50 transition-all duration-200 cursor-pointer rounded-xl p-4 flex flex-col gap-4 items-center'>
                <figure className="avatar avatar-squircle">
                  <div>
                    <img src="https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png" />
                  </div>
                </figure>
                <h3 className='text-xl not-italic flex gap-2'>
                  <span className='max-w-[20ch] whitespace-nowrap overflow-hidden overflow-ellipsis'>Team name</span>
                  <span className='chip chip-sm chip-secondary'>
                    <span>[GT2]</span>
                  </span>
                </h3>
                <div className='rounded-full p-0.5 surface surface-ui-600 flex items-center pr-3'>
                  <div className="avatar-group -space-x-2 bg-ui-800 rounded-full">
                    <div className="avatar avatar-simple avatar-circle avatar-xs">
                      <div className="">
                        <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                      </div>
                    </div>
                    <div className="avatar avatar-simple avatar-circle avatar-xs">
                      <div className="">
                        <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg" />
                      </div>
                    </div>
                    <div className="avatar avatar-simple avatar-circle avatar-xs">
                      <div className="">
                        <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
                      </div>
                    </div>
                  </div>
                  <div className='pl-2 text-sm text-ui-300'>
                    + 3 members
                  </div>
                </div>
              </div>
            </li>
            <li className='animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 3 * 0.05s)'}}>
              <div className='surface surface-dimmed hover:scale-95 hover:opacity-50 transition-all duration-200 cursor-pointer rounded-xl p-4 flex flex-col gap-4 items-center'>
                <figure className="avatar avatar-squircle">
                  <div>
                    <img src="https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png" />
                  </div>
                </figure>
                <h3 className='text-xl not-italic flex gap-2'>
                  <span className='max-w-[20ch] whitespace-nowrap overflow-hidden overflow-ellipsis'>Team name</span>
                  <span className='chip chip-sm chip-secondary'>
                    <span>[GT2]</span>
                  </span>
                </h3>
                <div className='rounded-full p-0.5 surface surface-ui-600 flex items-center pr-3'>
                  <div className="avatar-group -space-x-2 bg-ui-800 rounded-full">
                    <div className="avatar avatar-simple avatar-circle avatar-xs">
                      <div className="">
                        <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                      </div>
                    </div>
                    <div className="avatar avatar-simple avatar-circle avatar-xs">
                      <div className="">
                        <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg" />
                      </div>
                    </div>
                    <div className="avatar avatar-simple avatar-circle avatar-xs">
                      <div className="">
                        <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
                      </div>
                    </div>
                  </div>
                  <div className='pl-2 text-sm text-ui-300'>
                    + 3 members
                  </div>
                </div>
              </div>
            </li>
            <li className='animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 4 * 0.05s)'}}>
              <div className='surface surface-dimmed hover:scale-95 hover:opacity-50 transition-all duration-200 cursor-pointer rounded-xl p-4 flex flex-col gap-4 items-center'>
                <figure className="avatar avatar-squircle">
                  <div>
                    <img src="https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png" />
                  </div>
                </figure>
                <h3 className='text-xl not-italic flex gap-2'>
                  <span className='max-w-[20ch] whitespace-nowrap overflow-hidden overflow-ellipsis'>Team name</span>
                  <span className='chip chip-sm chip-secondary'>
                    <span>[GT2]</span>
                  </span>
                </h3>
                <div className='rounded-full p-0.5 surface surface-ui-600 flex items-center pr-3'>
                  <div className="avatar-group -space-x-2 bg-ui-800 rounded-full">
                    <div className="avatar avatar-simple avatar-circle avatar-xs">
                      <div className="">
                        <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                      </div>
                    </div>
                    <div className="avatar avatar-simple avatar-circle avatar-xs">
                      <div className="">
                        <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg" />
                      </div>
                    </div>
                    <div className="avatar avatar-simple avatar-circle avatar-xs">
                      <div className="">
                        <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
                      </div>
                    </div>
                  </div>
                  <div className='pl-2 text-sm text-ui-300'>
                    + 3 members
                  </div>
                </div>
              </div>
            </li>
            <li className='animate-slide-in-bottom animate-delay' style={{ '--delay': 'calc( 5 * 0.05s)'}}>
              <div className='surface surface-dimmed hover:scale-95 hover:opacity-50 transition-all duration-200 cursor-pointer rounded-xl p-4 flex flex-col gap-4 items-center'>
                <figure className="avatar avatar-squircle">
                  <div>
                    <img src="https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png" />
                  </div>
                </figure>
                <h3 className='text-xl not-italic flex gap-2'>
                  <span className='max-w-[20ch] whitespace-nowrap overflow-hidden overflow-ellipsis'>Team name</span>
                  <span className='chip chip-sm chip-secondary'>
                    <span>[GT2]</span>
                  </span>
                </h3>
                <div className='rounded-full p-0.5 surface surface-ui-600 flex items-center pr-3'>
                  <div className="avatar-group -space-x-2 bg-ui-800 rounded-full">
                    <div className="avatar avatar-simple avatar-circle avatar-xs">
                      <div className="">
                        <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                      </div>
                    </div>
                    <div className="avatar avatar-simple avatar-circle avatar-xs">
                      <div className="">
                        <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg" />
                      </div>
                    </div>
                    <div className="avatar avatar-simple avatar-circle avatar-xs">
                      <div className="">
                        <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
                      </div>
                    </div>
                  </div>
                  <div className='pl-2 text-sm text-ui-300'>
                    + 3 members
                  </div>
                </div>
              </div>
            </li>
            
          </ul>
        </section>
      </PrototypeStructure>
    </>
  );
}
