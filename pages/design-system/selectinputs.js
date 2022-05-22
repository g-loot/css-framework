import DSStructure from '../../components/DesignSystem/DSStructure';
import DSdata from '../api/designsystem/data.json'
import Head from 'next/head';
import Topbar from '../../components/Topbar/Topbar';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function SelectInputs() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <Head>
          <title>Gnog Prototype</title>
          <meta name="description" content="Internal playground" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Topbar />

        <DSStructure data={DSdata}>
          <h1 className='mb-2'>
            Select inputs
          </h1>


          {/* single */}
          <div className='mb-12'>

            <h2 className='h3 mb-3'>
              Single
            </h2>

            <div className="card rounded-lg p-4">
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
                  <div className='flex-1 space-y-4'>
                    <div className='w-full flex gap-4 items-center'>
                      <div className='flex-1 space-y-4'>
                        <div className="form-group form-select">
                          <label for="favorite-game">Favorite game:</label>
                          <select id="favorite-game">
                            <option>Choose an option</option>
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
