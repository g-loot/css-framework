import React from 'react';
import { getLayout } from '../../components/DesignSystem/DSLayout';

const DSpage = () => {

  return(
  <>
    <h1 className='mb-2'>
      Loaders
    </h1>


    {/* Spinner */}
    <div className='mb-12' id='spinner'>

      <h2 className='h3 mb-3'>
        Spinner
      </h2>

      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Extra large
                </div>
                <div className='flex-1 flex flex-wrap gap-2'>
                  <div className='loader loader-xl'></div>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Large
                </div>
                <div className='flex-1 flex flex-wrap gap-2'>
                  <div className='loader loader-lg'></div>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Medium <button className='chip chip-xs chip-secondary pointer-events-none uppercase'><span>default</span></button>
                </div>
                <div className='flex-1 flex flex-wrap gap-2'>
                  <div className='loader'></div>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Small
                </div>
                <div className='flex-1 flex flex-wrap gap-2'>
                  <div className='loader loader-sm'></div>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Extra small
                </div>
                <div className='flex-1 flex flex-wrap gap-2'>
                  <div className='loader loader-xs'></div>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/9zhaL1or/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>



    {/* G-Loot loader */}
    <div className='mb-12' id='gloot-loader'>

      <h2 className='h3 mb-3'>
        G-Loot loader
      </h2>
      
      <div className="surface rounded-lg p-4">
        <div className=''>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Extra large
                </div>
                <div className='flex-1 flex flex-wrap gap-2'>
                  <div className="loader-gloot loader-xl">
                    <div><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Large
                </div>
                <div className='flex-1 flex flex-wrap gap-2'>
                  <div className="loader-gloot loader-lg">
                    <div><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Medium <button className='chip chip-xs chip-secondary pointer-events-none uppercase'><span>default</span></button>
                </div>
                <div className='flex-1 flex flex-wrap gap-2'>
                  <div className="loader-gloot">
                    <div><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Small
                </div>
                <div className='flex-1 flex flex-wrap gap-2'>
                  <div className="loader-gloot loader-sm">
                    <div><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                </div>
              </div>
              <div className='w-full flex gap-4 items-center'>
                <div className='w-1/4 text-ui-400 text-right text-sm leading-tight'>
                  Extra small
                </div>
                <div className='flex-1 flex flex-wrap gap-2'>
                  <div className="loader-gloot loader-xs">
                    <div><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/9o0wqkLy/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* Cards */}
    <div className='mb-12' id='cards'>

      <h2 className='mb-3'>
        Cards
      </h2>

      {/* Mission card */}
      <div className="surface rounded-lg p-4">
        <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
          <h3 className='h4 mb-6 lg:mb-10'>
            Mission card
          </h3>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='card-mission is-loading'>
                <div className='card-decoration'>
                </div>
                <div className='card-body'>
                  <div className='card-title'>
                    Get 10 shots on goal
                  </div>
                  <div className='card-meta'>
                    <div className='chip chip-reward chip-xp chip-sm chip-inverted'>
                      <span className='icon icon-xp-symbol-outline'></span>
                      <span>100</span>
                    </div>
                    <div>
                      9/10 shots on goal
                    </div>
                  </div>
                  <div className='progressbar progressbar-sm' style={{"--percent": "90"}}>
                    <div></div>
                  </div>
                </div>
                <div className="card-bg">
                  <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653310937/Marketing/2022_prototype/DummyContent/mission-rocketleague_1.jpg)`}}></span>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/p0x59wf1/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
            </div>
          </div>
        </div>


        <div className=''>
          <h3 className='h4 mb-6 lg:mb-10'>
            Tournament card
          </h3>
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <div className='card-tournament is-loading'>
                <div className='card-decoration'>
                  <img src='https://res.cloudinary.com/gloot/image/upload/v1653224681/Marketing/2022_prototype/Logo/Open-sameheight.svg' width='auto' height='auto' alt='G-Loot Showdown' />
                  <div className='chip chip-secondary chip-sm'>
                    <span>Global</span>
                  </div>
                </div>
                <div className='card-body'>
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

    {/* Lists */}
    <div className='mb-12' id='list'>

      <h2 className='mb-3'>
        Lists
      </h2>

      {/* Lists */}
      <div className="surface rounded-lg p-4">
      
      
        <div className=''>
          
          <div className='flex gap-4 flex-col lg:flex-row lg:items-center'>
            <div className='flex-1 space-y-4'>
              <ul className='is-loading border rounded-lg border-ui-600'>
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
              </ul>
            </div>
            <div className='flex-1'>
              <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/08sanf9d/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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