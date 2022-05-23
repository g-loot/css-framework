import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function CardTemplates() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Card templates' />
        
        <DSTopBar />

        <DSStructure data={DSdata}>
          <h1 className='mb-2'>
            Card templates
          </h1>


          {/* Mission card */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Mission card
            </h2>

           
            {/* Reward: XP */}
            <div className="card rounded-lg p-4">
              <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                <h3 className='mb-6 lg:mb-10'>
                  Normal
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row'>
                  <div className='flex-1 space-y-4'>
                    <div className='card-mission card-ui-700'>
                      <div className='card-decoration'></div>
                      <div className='card-info'>
                        <div className='card-title'>
                          Get 22 kills
                        </div>
                        <div className='card-meta'>
                          <div className='chip chip-reward chip-xp chip-sm chip-inverted'>
                            <span className='icon icon-xp-symbol-outline'></span>
                            <span>100</span>
                          </div>
                          <div>
                            50/100 kills
                          </div>
                        </div>
                        <div className='progressbar progressbar-sm' style={{"--percent": "75"}}>
                          <div></div>
                        </div>
                      </div>
                      <div className="card-bg">
                        <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1638737621/Marketing/202109_gloot2/mission-valorant_3.jpg)`}}></span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/16r43ftn/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

              {/* Premium locked */}
              <div className=''>
                <h3 className='mb-6 lg:mb-10'>
                  Premium locked
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row'>
                  <div className='flex-1 space-y-4'>
                    <div className='card-mission card-ui-700 card-locked'>
                      <div className='card-decoration'></div>
                      <div className='card-info'>
                        <div className='card-title'>
                          Get 22 kills
                        </div>
                        <div className='card-meta'>
                          <div className='chip chip-reward chip-xp chip-sm chip-inverted'>
                            <span className='icon icon-xp-symbol-outline'></span>
                            <span>100</span>
                          </div>
                          <div>
                            50/100 kills
                          </div>
                        </div>
                        <div className='progressbar progressbar-sm' style={{"--percent": "75"}}>
                          <div></div>
                        </div>
                      </div>
                      <div className="card-bg">
                        <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1638737621/Marketing/202109_gloot2/mission-valorant_1.jpg)`}}></span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/jm5q8oap/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
              
              {/* Reward: ticket */}
              <div className=''>
                <h3 className='mb-6 lg:mb-10'>
                  Ticket
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                  <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Normal
                      </div>
                      <div className='chip chip-reward chip-ticket'>
                        <span className='icon icon-ticket'></span>
                        <span>1</span>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                      Inverted
                      </div>
                      <div className='chip chip-reward chip-ticket chip-inverted'>
                        <span className='icon icon-ticket'></span>
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/jm5q8oap/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>


              {/* Reward: small */}
              <div className=''>
                <h3 className='mb-6 lg:mb-10'>
                  Small
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                  <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                        Small
                      </div>
                      <div className='chip chip-reward chip-ticket chip-inverted chip-sm'>
                        <span className='icon icon-ticket'></span>
                        <span>1 ticket</span>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                      </div>
                      <div className='chip chip-reward chip-xp chip-inverted chip-sm'>
                        <span className='icon icon-xp-symbol-outline'></span>
                        <span>500 XP</span>
                      </div>
                    </div>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='w-1/4 text-ui-400 text-right'>
                      </div>
                      <div className='chip chip-reward chip-token chip-inverted chip-sm'>
                        <span className='icon icon-token'></span>
                        <span>500 tokens</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/jm5q8oap/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>

            

            
          </div>


          {/* multiple */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Multiple
            </h2>

            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='flex-1 space-y-4'>
                        <div className="form-group form-select">
                          <label for="favorite-games">Favorite games:</label>
                          <select multiple id="favorite-games">
                            <option disabled>Choose an option</option>
                            <option>PUBG: BATTLEGROUNDS</option>
                            <option>DOTA 2</option>
                            <option>VALORANT</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/eL9patvh/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* Validation */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Validation
            </h2>

            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='flex-1 space-y-4'>
                        <div className="form-group form-select" data-error="Please choose an option.">
                          <label for="favorite-agent">Favorite agent:</label>
                          <select id="favorite-agent">
                            <option>Choose an option</option>
                            <option>Astra</option>
                            <option>Breach</option>
                            <option>Brimstone</option>
                            <option>Chamber</option>
                            <option>Cypher</option>
                            <option>Fade</option>
                            <option>Jett</option>
                            <option>Kayo</option>
                            <option>Killjoy</option>
                            <option>Neon</option>
                            <option>Omen</option>
                            <option>Phoenix</option>
                            <option>Raze</option>
                            <option>Reyna</option>
                            <option>Sage</option>
                            <option>Skye</option>
                            <option>Sova</option>
                            <option>Viper</option>
                            <option>Yoru</option>
                          </select>
                        </div>
                        <div className="form-group form-select" data-success="Good choice.">
                          <label for="favorite-role">Favorite role:</label>
                          <select id="favorite-role">
                            <option>Choose an option</option>
                            <option>Controller</option>
                            <option selected>Duelist</option>
                            <option>Initiator</option>
                            <option>Sentinel</option>
                          </select>
                        </div>
                        <div className="form-group form-select" data-attention="Are you sure?">
                          <label for="favorite-map">Favorite map:</label>
                          <select id="favorite-map">
                            <option>Choose an option</option>
                            <option>Ascent</option>
                            <option>Bind</option>
                            <option>Breeze</option>
                            <option>Fracture</option>
                            <option selected>Haven</option>
                            <option>Icebox</option>
                            <option>Split</option>
                          </select>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/tmvchn3f/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* With loader */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Status
            </h2>

            <div className="card rounded-lg p-4">
              <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                <h3 className='h4 mb-6 lg:mb-10'>
                  Loading
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='flex-1 space-y-4'>
                        <div className="form-group form-select is-loading">
                          <label for="favorite-weapon">Favorite weapon:</label>
                          <select id="favorite-weapon">
                            <option>Choose an option</option>
                            <option>Knife</option>
                            <option>Gun</option>
                            <option>Initiator</option>
                            <option>Sentinel</option>
                          </select>
                        </div>
                        <div className="form-group form-select is-loading">
                          <label for="favorite-weapons">Favorite weapons:</label>
                          <select id="favorite-weapons" multiple>
                            <option>Choose an option</option>
                            <option>Knife</option>
                            <option>Gun</option>
                            <option>Initiator</option>
                            <option>Sentinel</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/1jL870xb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
              <div className=''>
                <h3 className='h4 mb-6 lg:mb-10'>
                  Disabled
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='flex-1 space-y-4'>
                        <div className="form-group form-select is-disabled">
                          <label for="favorite-weapon2">Favorite weapon:</label>
                          <select id="favorite-weapon2">
                            <option>Choose an option</option>
                            <option>Knife</option>
                            <option>Gun</option>
                            <option>Initiator</option>
                            <option>Sentinel</option>
                          </select>
                        </div>
                        <div className="form-group form-select is-disabled">
                          <label for="favorite-weapons2">Favorite weapons:</label>
                          <select id="favorite-weapons2" multiple>
                            <option>Choose an option</option>
                            <option>Knife</option>
                            <option>Gun</option>
                            <option>Initiator</option>
                            <option>Sentinel</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/ehp7vfdk/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>



          
        </DSStructure>

      
    </div>
  );
}
