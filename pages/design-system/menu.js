import DSMainNav from '../../components/DesignSystem/DSMainNav';
import DSdata from '../api/designsystem/data.json'
import Head from 'next/head';
import Topbar from '../../components/Topbar/Topbar';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function menu() {
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

        <div className="container flex mx-auto md:space-x-12">
          <div className="hidden md:block sticky h-screen w-auto md:w-3/12 lg:w-2/12 py-4">
            <DSMainNav data={DSdata} />
          </div>
          <div className="pt-4 pb-8 w-full md:w-9/12 lg:w-10/12">
            <h1 className='mb-2'>
              Menu
            </h1>


            {/* primary */}
            <div className='mb-12'>

              <h2 className='h3 mb-3'>
                Primary
              </h2>
            
              <div className=''>
                <div className=''>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
                    <div className='flex-1 card rounded-lg overflow-hidden'>
                      <ul className='menu'>
                        <li>
                          <a>
                            <span>Missions</span>
                          </a>
                        </li>
                        <li>
                          <a className='is-active'>
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
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/dwjbm4fn/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* secondary */}
            <div className='mb-12'>

              <h2 className='h3 mb-3'>
                Secondary
              </h2>
            
              <div className=''>
                <div className=''>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
                    <div className='flex-1 card rounded-lg overflow-hidden'>
                      <ul className='menu menu-secondary'>
                        <li>
                          <a>
                            <span>Missions</span>
                          </a>
                        </li>
                        <li>
                          <a className='is-active'>
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
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/uo6p2nve/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* with icons */}
            <div className='mb-12'>

              <h2 className='h3 mb-3'>
                With icons
              </h2>
            
              <div className=''>
                <div className=''>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
                    <div className='flex-1 card rounded-lg overflow-hidden'>
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
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/7rsbogxn/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* with separators */}
            <div className='mb-12'>

              <h2 className='h3 mb-3'>
                With separators
              </h2>
            
              <div className=''>
                <div className=''>
                  <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
                    <div className='flex-1 card rounded-lg overflow-hidden'>
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
                      <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/8no2mx4g/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
          
        </div>
    </div>
  );
}
