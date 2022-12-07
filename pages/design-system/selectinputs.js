import React from 'react';
import { getLayout } from '../../components/DesignSystem/DSLayout';

const DSpage = () => {

  return(
  <>
    <h1 className='mb-2'>
      Select inputs
    </h1>


    {/* Single */}
    <div className='mb-12' id='single'>

      <h2 className='h3 mb-3'>
        Single
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex gap-4 items-center'>
                <div className='flex-1 space-y-4'>
                  <div className="form-group form-select">
                    <label htmlFor="favorite-game">Favorite game</label>
                    <select id="favorite-game">
                      <option disabled selected>Choose an option</option>
                      <option>PUBG: BATTLEGROUNDS</option>
                      <option>DOTA 2</option>
                      <option>VALORANT</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/wn28Lgye/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* Multiple */}
    <div className='mb-12' id='multiple'>

      <h2 className='h3 mb-3'>
        Multiple
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex gap-4 items-center'>
                <div className='flex-1 space-y-4'>
                  <div className="form-group form-select">
                    <label htmlFor="favorite-games">Favorite games</label>
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
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/zeku7gj0/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>



    {/* Validation */}
    <div className='mb-12' id='validation'>

      <h2 className='h3 mb-3'>
        Validation
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex gap-4 items-center'>
                <div className='flex-1 space-y-4'>
                  <div className="form-group form-select" data-error="Please choose an option.">
                    <label htmlFor="favorite-agent">Favorite agent</label>
                    <select id="favorite-agent">
                      <option disabled selected>Choose an option</option>
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
                    <label htmlFor="favorite-role">Favorite role</label>
                    <select id="favorite-role">
                      <option disabled selected>Choose an option</option>
                      <option>Controller</option>
                      <option selected>Duelist</option>
                      <option>Initiator</option>
                      <option>Sentinel</option>
                    </select>
                  </div>
                  <div className="form-group form-select" data-attention="Are you sure?">
                    <label htmlFor="favorite-map">Favorite map</label>
                    <select id="favorite-map">
                      <option disabled selected>Choose an option</option>
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
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/xymvewdu/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>



    {/* Loading */}
    <div className='mb-12' id='loading'>

      <h2 className='h3 mb-3'>
        Status
      </h2>

      <div className="surface rounded-lg p-4">
        <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
          <h3 className='h4 mb-6 lg:mb-10'>
            Loading
          </h3>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex gap-4 items-center'>
                <div className='flex-1 space-y-4'>
                  <div className="form-group form-select is-loading">
                    <label htmlFor="favorite-weapon">Favorite weapon</label>
                    <select id="favorite-weapon">
                      <option>Choose an option</option>
                      <option>Knife</option>
                      <option>Gun</option>
                      <option>Initiator</option>
                      <option>Sentinel</option>
                    </select>
                  </div>
                  <div className="form-group form-select is-loading">
                    <label htmlFor="favorite-weapons">Favorite weapons</label>
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
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/bj5v97o6/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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
                    <label htmlFor="favorite-weapon2">Favorite weapon</label>
                    <select id="favorite-weapon2">
                      <option>Choose an option</option>
                      <option>Knife</option>
                      <option>Gun</option>
                      <option>Initiator</option>
                      <option>Sentinel</option>
                    </select>
                  </div>
                  <div className="form-group form-select is-disabled">
                    <label htmlFor="favorite-weapons2">Favorite weapons</label>
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
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/50d81yuj/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

DSpage.getLayout = getLayout;

export default DSpage;