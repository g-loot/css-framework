import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function ListItems() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='List items' />
        
        <DSTopBar />

        <DSStructure data={DSdata}>
          <h1 className='mb-2 mx-2 md:mx-0'>
            List items
          </h1>


          {/* Structure */}
          <div className='mb-12'>

            <h2 className='h3 mb-3 mx-2 md:mx-0'>
              Structure
            </h2>
          
            <div className=''>
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
                  <div className='flex-1 surface rounded-xl overflow-hidden'>
                    <ul>
                      <li className='item'>
                        <div className='item-image'>
                          <figure className='avatar avatar-square avatar-simple avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                        <div className='item-content'>
                          <div className='item-title'>
                            Croc Esports
                          </div>
                          <div className='text-ui-300 text-xs'>
                            3 members
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-image'>
                          <figure className='avatar avatar-square avatar-simple avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_l10n.png)`}}></span>
                          </figure>
                        </div>
                        <div className='item-content'>
                          <div className='item-title'>
                            Kingzz
                          </div>
                          <div className='text-ui-300 text-xs'>
                            3 members
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-image'>
                          <figure className='avatar avatar-square avatar-simple avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_AngryBeavers.png)`}}></span>
                          </figure>
                        </div>
                        <div className='item-content'>
                          <div className='item-title'>
                            Angry Beavers
                          </div>
                          <div className='text-ui-300 text-xs'>
                            3 members
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-image'>
                          <figure className='avatar avatar-square avatar-simple avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_Bunny_Hunger.png)`}}></span>
                          </figure>
                        </div>
                        <div className='item-content'>
                          <div className='item-title'>
                            Bunny Hunger
                          </div>
                          <div className='text-ui-300 text-xs'>
                            3 members
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/0mn7yqpo/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* With action */}
          <div className='mb-12'>

            <h2 className='h3 mb-3 mx-2 md:mx-0'>
              With action
            </h2>
          
            <div className=''>
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
                  <div className='flex-1 surface rounded-lg overflow-hidden'>
                    <ul>
                      <li className='item'>
                        <div className='item-image'>
                          <figure className='avatar avatar-square avatar-simple avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                        <div className='item-content'>
                          <div className='item-title'>
                            Croc Esports
                          </div>
                          <div className='text-ui-300 text-xs'>
                            3 members
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-secondary rounded-full tooltip tooltip-left' data-tooltip='Join team'>
                              <span className='icon icon-b-add'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-image'>
                          <figure className='avatar avatar-square avatar-simple avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_l10n.png)`}}></span>
                          </figure>
                        </div>
                        <div className='item-content'>
                          <div className='item-title'>
                            Kingzz
                          </div>
                          <div className='text-ui-300 text-xs'>
                            3 members
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-secondary rounded-full tooltip tooltip-left' data-tooltip='Join team'>
                              <span className='icon icon-b-add'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-image'>
                          <figure className='avatar avatar-square avatar-simple avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_AngryBeavers.png)`}}></span>
                          </figure>
                        </div>
                        <div className='item-content'>
                          <div className='item-title'>
                            Angry Beavers
                          </div>
                          <div className='text-ui-300 text-xs'>
                            3 members
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-secondary rounded-full tooltip tooltip-left' data-tooltip='Join team'>
                              <span className='icon icon-b-add'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-image'>
                          <figure className='avatar avatar-square avatar-simple avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_Bunny_Hunger.png)`}}></span>
                          </figure>
                        </div>
                        <div className='item-content'>
                          <div className='item-title'>
                            Bunny Hunger
                          </div>
                          <div className='text-ui-300 text-xs'>
                            3 members
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-secondary rounded-full tooltip tooltip-left' data-tooltip='Join team'>
                              <span className='icon icon-b-add'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/xj50zs89/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* As table */}
          <div className='mb-12'>

            <h2 className='h3 mb-3 mx-2 md:mx-0'>
              As table
            </h2>
          
            <div className=''>
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
                  <div className='flex-1 surface rounded-lg overflow-hidden'>
                    <ul>
                      <li className='item'>
                        <div className='item-image'>
                          <div className="chip chip-reward chip-xp chip-xs chip-inverted h-6 w-6 text-xs">
                            <span>1</span>
                          </div>
                        </div>
                        <div className='item-image'>
                          <figure className='avatar avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                        <div className='item-content'>
                          <div className='item-title'>
                            Hunter1337-
                          </div>
                        </div>
                        <div className='item-content text-center text-sm text-ui-300'>
                          12
                        </div>
                        <div className='item-content text-center'>
                          <div className='flex justify-center'>
                            <div className='flex justify-center items-center px-3 gap-2 bg-gradient-to-b from-ui-900/50 to-ui-900/0 rounded-full'>
                              <div className='flex items-center'>
                                <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-centered-coin-small.png' width='34' height='auto' />
                                <span className='text-sm text-gold-500'>12</span>
                              </div>
                              <div className='flex items-center gap-1'>
                                <img src='https://res.cloudinary.com/gloot/image/upload/v1654152412/Marketing/2022_prototype/CurrencyRewards/Reward-centered-ticket-unique.png' width='34' height='auto' />
                                <span className='text-sm text-bronze-500'>2</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='View details'>
                              <span className='icon icon-a-chart'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-image'>
                          <figure className='avatar avatar-square avatar-simple avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_l10n.png)`}}></span>
                          </figure>
                        </div>
                        <div className='item-content'>
                          <div className='item-title'>
                            Kingzz
                          </div>
                          <div className='text-ui-300 text-xs'>
                            3 members
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-secondary rounded-full tooltip tooltip-left' data-tooltip='Join team'>
                              <span className='icon icon-b-add'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-image'>
                          <figure className='avatar avatar-square avatar-simple avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_AngryBeavers.png)`}}></span>
                          </figure>
                        </div>
                        <div className='item-content'>
                          <div className='item-title'>
                            Angry Beavers
                          </div>
                          <div className='text-ui-300 text-xs'>
                            3 members
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-secondary rounded-full tooltip tooltip-left' data-tooltip='Join team'>
                              <span className='icon icon-b-add'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-image'>
                          <figure className='avatar avatar-square avatar-simple avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_Bunny_Hunger.png)`}}></span>
                          </figure>
                        </div>
                        <div className='item-content'>
                          <div className='item-title'>
                            Bunny Hunger
                          </div>
                          <div className='text-ui-300 text-xs'>
                            3 members
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-secondary rounded-full tooltip tooltip-left' data-tooltip='Join team'>
                              <span className='icon icon-b-add'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/xj50zs89/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* with icons */}
          <div className='mb-12'>

            <h2 className='h3 mb-3 mx-2 md:mx-0'>
              With icons
            </h2>
          
            <div className=''>
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
                  <div className='flex-1 surface rounded-lg overflow-hidden'>
                    <ul className='menu'>
                      <li>
                        <a>
                          <span className='icon icon-missions'></span>
                          <span>Missions</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span className='icon icon-brawl'></span>
                          <span>Brawls</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span className='icon icon-showdown'></span>
                          <span>Tournaments</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span className='icon icon-d-chart'></span>
                          <span>Stats</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/7rsbogxn/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* with separators */}
          <div className='mb-12'>

            <h2 className='h3 mb-3 mx-2 md:mx-0'>
              With separators
            </h2>
          
            <div className=''>
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
                  <div className='flex-1 surface rounded-lg overflow-hidden'>
                    <ul className='menu'>
                      <li>
                        <a>
                          <span>Home</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span>Profile</span>
                        </a>
                      </li>
                      <li className='separator'></li>
                      <li>
                        <a>
                          <span>Missions</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span>Brawls</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span>Tournaments</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span>Stats</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/8no2mx4g/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        

          
        </DSStructure>

      
    </div>
  );
}
