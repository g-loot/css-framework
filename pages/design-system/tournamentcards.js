import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function TournamentCards() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Tournament Cards' />
        
        <DSTopBar />

        <DSStructure data={DSdata}>
          <h1 className='mb-2 mx-2 md:mx-0'>
            Tournament cards
          </h1>


          {/* Tournament card */}
          <div className='mb-12'>

          
           
            
            <div className="card rounded-lg p-4">
              <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                {/* Showdown */}
                <h3 className='h4 mb-6 lg:mb-10'>
                  Showdown
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row'>
                  <div className='flex-1 space-y-4'>
                    <div className='card-tournament card-premium'>
                      <div className='card-decoration'>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1653224681/Marketing/2022_prototype/Logo/Showdown-sameheight.svg' width='auto' height='auto' alt='G-Loot Showdown' />
                        <div className='chip chip-secondary chip-xs'>
                          <span>Valorant europe</span>
                        </div>
                      </div>
                      <div className='card-info'>
                        <div className='chip chip-sliced'>
                          <span>Open</span>
                        </div>
                        <div className='card-title'>
                          G-Loot Monthly Showdown
                        </div>
                        <div className='card-meta'>
                          <div>
                            <label>Entry</label>
                            <div>
                              <div className='chip chip-reward chip-ticket chip-inverted chip-sm'>
                                <span className='icon icon-ticket'></span>
                                <span>1 ticket</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <label>Prize Pool</label>
                            <div className='font-bold text-gradient bg-gradient-to-b from-premium-700 via-premium-300 to-premium-700'>
                              $50 000
                            </div>
                          </div>
                          <div>
                            <ul>
                              <li>4v4</li>
                              <li>64 slots</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card-bg">
                        <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-apexlegends_1.jpg)`}}></span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/uh5Lwakn/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

              {/* Skirmish */}
              <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                <h3 className='h4 mb-6 lg:mb-10'>
                  Skirmish
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row'>
                  <div className='flex-1 space-y-4'>
                    <div className='card-tournament card-ui-800'>
                      <div className='card-decoration'>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1653224681/Marketing/2022_prototype/Logo/Skirmish-sameheight.svg' width='auto' height='auto' alt='G-Loot Showdown' />
                        <div className='chip chip-secondary chip-xs'>
                          <span>Global</span>
                        </div>
                      </div>
                      <div className='card-info'>
                        <div className='chip chip-sliced chip-blue'>
                          <span>Ongoing</span>
                        </div>
                        <div className='card-title'>
                          G-Loot Skirmish Tournament
                        </div>
                        <div className='card-meta'>
                          <div>
                            <label>Entry</label>
                            <div className='font-bold'>
                              FREE
                            </div>
                          </div>
                          <div>
                            <label>Prize Pool</label>
                            <div>
                              <div className='chip chip-reward chip-ticket chip-inverted chip-sm'>
                                <span className='icon icon-ticket'></span>
                                <span>1 ticket</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <ul>
                              <li>4v4</li>
                              <li>64 slots</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card-bg">
                        <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-valorant_1.jpg)`}}></span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/8w2cg5s4/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

              {/* Open */}
              <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                <h3 className='h4 mb-6 lg:mb-10'>
                  Open
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row'>
                  <div className='flex-1 space-y-4'>
                    <div className='card-tournament card-ui-800'>
                      <div className='card-decoration'>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1653224681/Marketing/2022_prototype/Logo/Open-sameheight.svg' width='auto' height='auto' alt='G-Loot Showdown' />
                        <div className='chip chip-secondary chip-xs'>
                          <span>Global</span>
                        </div>
                      </div>
                      <div className='card-info'>
                        <div className='chip chip-sliced chip-gray'>
                          <span>Finished</span>
                        </div>
                        <div className='card-title'>
                          G-Loot Open Tournament
                        </div>
                        <div className='card-meta'>
                          <div>
                            <label>Entry</label>
                            <div className='font-bold'>
                              FREE
                            </div>
                          </div>
                          <div>
                            <label>Prize Pool</label>
                            <div>
                              <div className='chip chip-reward chip-ticket chip-inverted chip-sm'>
                                <span className='icon icon-ticket'></span>
                                <span>1 ticket</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <ul>
                              <li>4v4</li>
                              <li>64 slots</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card-bg">
                        <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-pubg_1.jpg)`}}></span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/4pq9ros7/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>


              {/* Loading */}
              <div className=''>
                <h3 className='h4 mb-6 lg:mb-10'>
                  Loading
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row'>
                  <div className='flex-1 space-y-4'>
                    <div className='card-tournament is-loading'>
                      <div className='card-decoration'>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1653224681/Marketing/2022_prototype/Logo/Open-sameheight.svg' width='auto' height='auto' alt='G-Loot Showdown' />
                        <div className='chip chip-secondary chip-xs'>
                          <span>Global</span>
                        </div>
                      </div>
                      <div className='card-info'>
                        <div className='chip chip-sliced chip-gray'>
                          <span>Finished</span>
                        </div>
                        <div className='card-title'>
                          G-Loot Open Tournament
                        </div>
                        <div className='card-meta'>
                          <div>
                            <label>Entry</label>
                            <div className='font-bold'>
                              FREE
                            </div>
                          </div>
                          <div>
                            <label>Prize Pool</label>
                            <div>
                              <div className='chip chip-reward chip-ticket chip-inverted chip-sm'>
                                <span className='icon icon-ticket'></span>
                                <span>1 ticket</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <ul>
                              <li>4v4</li>
                              <li>64 slots</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card-bg">
                        <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-pubg_1.jpg)`}}></span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/5ycrswhx/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

              
            </div>

            

            
          </div>


          
        </DSStructure>

      
    </div>
  );
}
