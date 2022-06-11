import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import { useRouter } from 'next/router';

export default function ListItems() {
  const router = useRouter();
  

  return (
    <div>
        <DSHead title='List items' />
        
        <DSTopBar data={DSdata} />

        <DSStructure data={DSdata}>
          <h1 className='mb-2'>
            List items
          </h1>


          {/* Structure */}
          <div className='mb-12' id='structure'>

            <h2 className='h3 mb-3'>
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
                        <div className='item-body'>
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
                        <div className='item-body'>
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
                        <div className='item-body'>
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
                        <div className='item-body'>
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
          <div className='mb-12' id='with-action'>

            <h2 className='h3 mb-3'>
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
                        <div className='item-body'>
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
                        <div className='item-body'>
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
                        <div className='item-body'>
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
                        <div className='item-body'>
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
          <div className='mb-12' id='as-table'>

            <h2 className='h3 mb-3'>
              As table
            </h2>
          
            <div className=''>
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
                  <div className='flex-1 surface rounded-lg overflow-hidden'>
                    <ul>
                      <li className='item'>
                        <div className='item-image'>
                          <div className="chip chip-reward chip-gold chip-xs chip-inverted h-6 w-6 text-xs">
                            <span>1</span>
                          </div>
                        </div>
                        <div className='item-image'>
                          <figure className='avatar avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                        <div className='item-body'>
                          <div className='item-title'>
                            Croc Esports
                          </div>
                        </div>
                        <div className='item-body text-center text-sm text-ui-300'>
                          54
                        </div>
                        <div className='item-body text-center flex-2 hidden xl:block'>
                          <div className='flex justify-center'>
                            <div className='flex justify-center items-center px-3 gap-2 bg-gradient-to-b from-ui-900/50 to-ui-900/0 rounded-full'>
                              <div className='flex items-center'>
                                <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-centered-coin-small.png' width='34' height='auto' />
                                <span className='text-sm text-gold-500'>16350</span>
                              </div>
                              <div className='flex items-center gap-1'>
                                <img src='https://res.cloudinary.com/gloot/image/upload/v1654152412/Marketing/2022_prototype/CurrencyRewards/Reward-centered-ticket-unique.png' width='34' height='auto' />
                                <span className='text-sm text-bronze-500'>1</span>
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
                          <div className="chip chip-reward chip-silver chip-xs chip-inverted h-6 w-6 text-xs">
                            <span>2</span>
                          </div>
                        </div>
                        <div className='item-image'>
                          <figure className='avatar avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_l10n.png)`}}></span>
                          </figure>
                        </div>
                        <div className='item-body'>
                          <div className='item-title'>
                            Kingzz
                          </div>
                        </div>
                        <div className='item-body text-center text-sm text-ui-300'>
                          27
                        </div>
                        <div className='item-body text-center flex-2 hidden xl:block'>
                          <div className='flex justify-center'>
                            <div className='flex justify-center items-center px-3 gap-2 bg-gradient-to-b from-ui-900/50 to-ui-900/0 rounded-full'>
                              <div className='flex items-center'>
                                <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-centered-coin-small.png' width='34' height='auto' />
                                <span className='text-sm text-gold-500'>13100</span>
                              </div>
                              <div className='flex items-center gap-1'>
                                <img src='https://res.cloudinary.com/gloot/image/upload/v1654152412/Marketing/2022_prototype/CurrencyRewards/Reward-centered-ticket-unique.png' width='34' height='auto' />
                                <span className='text-sm text-bronze-500'>1</span>
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
                          <div className="chip chip-reward chip-bronze chip-xs chip-inverted h-6 w-6 text-xs">
                            <span>4</span>
                          </div>
                        </div>
                        <div className='item-image'>
                          <figure className='avatar avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_AngryBeavers.png)`}}></span>
                          </figure>
                        </div>
                        <div className='item-body'>
                          <div className='item-title'>
                            Angry Beavers
                          </div>
                        </div>
                        <div className='item-body text-center text-sm text-ui-300'>
                          12
                        </div>
                        <div className='item-body text-center flex-2 hidden xl:block'>
                          <div className='flex justify-center'>
                            <div className='flex justify-center items-center px-3 gap-2 bg-gradient-to-b from-ui-900/50 to-ui-900/0 rounded-full'>
                              <div className='flex items-center'>
                                <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-centered-coin-small.png' width='34' height='auto' />
                                <span className='text-sm text-gold-500'>10600</span>
                              </div>
                              <div className='flex items-center gap-1'>
                                <img src='https://res.cloudinary.com/gloot/image/upload/v1654152412/Marketing/2022_prototype/CurrencyRewards/Reward-centered-ticket-unique.png' width='34' height='auto' />
                                <span className='text-sm text-bronze-500'>1</span>
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
                          <div className="chip chip-reward chip-ui chip-xs chip-inverted h-6 w-6 text-xs">
                            <span>3</span>
                          </div>
                        </div>
                        <div className='item-image'>
                          <figure className='avatar avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_Bunny_Hunger.png)`}}></span>
                          </figure>
                        </div>
                        <div className='item-body'>
                          <div className='item-title'>
                            Bunny Hunger
                          </div>
                        </div>
                        <div className='item-body text-center text-sm text-ui-300'>
                          10
                        </div>
                        <div className='item-body text-center flex-2 hidden xl:block'>
                          <div className='flex justify-center'>
                            <div className='flex justify-center items-center px-3 gap-2 bg-gradient-to-b from-ui-900/50 to-ui-900/0 rounded-full'>
                              <div className='flex items-center'>
                                <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-centered-coin-small.png' width='34' height='auto' />
                                <span className='text-sm text-gold-500'>8150</span>
                              </div>
                              <div className='flex items-center gap-1'>
                                <img src='https://res.cloudinary.com/gloot/image/upload/v1654152412/Marketing/2022_prototype/CurrencyRewards/Reward-centered-ticket-unique.png' width='34' height='auto' />
                                <span className='text-sm text-bronze-500'>1</span>
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
                      
                    </ul>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/vet6bdh5/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* With dimmed actions */}
          <div className='mb-12' id='with-dimmed-actions'>

            <h2 className='h3 mb-3'>
              With dimmed actions
            </h2>
          
            <div className=''>
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
                  <div className='flex-1 surface rounded-lg overflow-hidden'>
                    <ul className='item-actions-dimmed'>
                      <li className='item'>
                        <div className='item-body'>
                          <div className='item-title'>
                            Brawl #1
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='View details'>
                              <span className='icon icon-view'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Share'>
                              <span className='icon icon-network-communication'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Delete'>
                              <span className='icon icon-e-remove'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-body'>
                          <div className='item-title'>
                            Brawl #2
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='View details'>
                              <span className='icon icon-view'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Share'>
                              <span className='icon icon-network-communication'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Delete'>
                              <span className='icon icon-e-remove'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-body'>
                          <div className='item-title'>
                            Brawl #3
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='View details'>
                              <span className='icon icon-view'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Share'>
                              <span className='icon icon-network-communication'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Delete'>
                              <span className='icon icon-e-remove'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-body'>
                          <div className='item-title'>
                            Brawl #4
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='View details'>
                              <span className='icon icon-view'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Share'>
                              <span className='icon icon-network-communication'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Delete'>
                              <span className='icon icon-e-remove'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-body'>
                          <div className='item-title'>
                            Brawl #5
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='View details'>
                              <span className='icon icon-view'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Share'>
                              <span className='icon icon-network-communication'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Delete'>
                              <span className='icon icon-e-remove'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-body'>
                          <div className='item-title'>
                            Brawl #6
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='View details'>
                              <span className='icon icon-view'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Share'>
                              <span className='icon icon-network-communication'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Delete'>
                              <span className='icon icon-e-remove'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-body'>
                          <div className='item-title'>
                            Brawl #7
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='View details'>
                              <span className='icon icon-view'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Share'>
                              <span className='icon icon-network-communication'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Delete'>
                              <span className='icon icon-e-remove'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/gnfe8zrm/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* With hidden actions */}
          <div className='mb-12' id='with-hidden-actions'>

            <h2 className='h3 mb-3'>
              With hidden actions
            </h2>
          
            <div className=''>
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
                  <div className='flex-1 surface rounded-lg overflow-hidden'>
                    <ul className='item-actions-hidden'>
                      <li className='item'>
                        <div className='item-body'>
                          <div className='item-title'>
                            Brawl #1
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='View details'>
                              <span className='icon icon-view'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Share'>
                              <span className='icon icon-network-communication'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Delete'>
                              <span className='icon icon-e-remove'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-body'>
                          <div className='item-title'>
                            Brawl #2
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='View details'>
                              <span className='icon icon-view'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Share'>
                              <span className='icon icon-network-communication'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Delete'>
                              <span className='icon icon-e-remove'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-body'>
                          <div className='item-title'>
                            Brawl #3
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='View details'>
                              <span className='icon icon-view'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Share'>
                              <span className='icon icon-network-communication'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Delete'>
                              <span className='icon icon-e-remove'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-body'>
                          <div className='item-title'>
                            Brawl #4
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='View details'>
                              <span className='icon icon-view'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Share'>
                              <span className='icon icon-network-communication'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Delete'>
                              <span className='icon icon-e-remove'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-body'>
                          <div className='item-title'>
                            Brawl #5
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='View details'>
                              <span className='icon icon-view'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Share'>
                              <span className='icon icon-network-communication'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Delete'>
                              <span className='icon icon-e-remove'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-body'>
                          <div className='item-title'>
                            Brawl #6
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='View details'>
                              <span className='icon icon-view'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Share'>
                              <span className='icon icon-network-communication'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Delete'>
                              <span className='icon icon-e-remove'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className='item'>
                        <div className='item-body'>
                          <div className='item-title'>
                            Brawl #7
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='View details'>
                              <span className='icon icon-view'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Share'>
                              <span className='icon icon-network-communication'></span>
                            </button>
                          </div>
                        </div>
                        <div className='item-actions'>
                          <div>
                            <button className='button button-sm button-secondary rounded-full tooltip tooltip-left' data-tooltip='Delete'>
                              <span className='icon icon-e-remove'></span>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/57s9pt4v/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* As notification */}
          <div className='mb-12' id='as-notification'>

            <h2 className='h3 mb-3'>
              As notification
            </h2>
          
            <div className=''>
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
                  <div className='flex-1 surface rounded-lg overflow-hidden'>
                   
                    <div className='item'>
                      <div className='item-image'>
                        <figure className='avatar avatar-square avatar-simple'>
                          <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654158104/Marketing/2022_prototype/DummyContent/carousel-item-pubg-s6.jpg)`}}></span>
                        </figure>
                      </div>
                      <div className='item-body'>
                        <div className='text-xs text-ui-300'>
                          Game or Area
                        </div>
                        <div className='item-title font-headings italic text-xl'>
                          Notification title
                        </div>
                        <p className='text-sm text-ui-200'>
                          Lorem ipsum dolor sit amet, consectetur adipisc ing elit
                        </p>
                      </div>
                      <div className='item-actions absolute top-2 right-2'>
                        <div data-badge="." className='after:bg-error-300'></div>
                      </div>
                    </div>
                    
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/emsrdyck/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* As header */}
          <div className='mb-12' id='as-header'>

            <h2 className='h3 mb-3'>
              As header
            </h2>
          
            <div className=''>
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
                  <div className='flex-1 surface rounded-lg overflow-hidden'>
                   
                    <div className='item'>
                      <div className='item-image'>
                        <figure className='avatar avatar-square avatar-tiny avatar-simple'>
                          <span className='icon icon-chart-bar-33'></span>
                        </figure>
                      </div>
                      <div className='item-body'>
                        <div className='item-title'>
                          Your stats
                        </div>
                      </div>
                      <div className='item-actions'>
                        <div>
                          <span className="icon icon-24 icon-arrow-sm-down text-ui-300"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/sgneyr3w/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Loading */}
          <div className='mb-12' id='loading'>

            <h2 className='h3 mb-3'>
              Loading
            </h2>
          
            <div className=''>
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
                  <div className='flex-1 surface rounded-xl overflow-hidden'>
                    <ul className='is-loading'>
                      <li className='item'>
                        <div className='item-image'>
                          <figure className='avatar avatar-square avatar-simple avatar-xs'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                        <div className='item-body'>
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
                        <div className='item-body'>
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
                        <div className='item-body'>
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
                        <div className='item-body'>
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
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/08sanf9d/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </DSStructure>

      
    </div>
  );
}
