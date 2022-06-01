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
                  <div className='flex-1 surface rounded-lg overflow-hidden'>
                    <ul>
                      <li className='item'>
                        <div className='item-image'>
                          <figure className='avatar avatar-square avatar-simple avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                        <div className='item-content'>
                          <div className='item-title'>
                            This is the title This is the title This is the title This is the title This is the title
                          </div>
                        </div>
                        <div>qsd</div>
                      </li>
                      <li className='item'>
                        <div className='item-image'>
                          <figure className='avatar avatar-square avatar-simple avatar-tiny'>
                            <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                          </figure>
                        </div>
                        <div className='item-content'>
                          <div className='item-title'>
                            This is the title
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/dwjbm4fn/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* secondary */}
          <div className='mb-12'>

            <h2 className='h3 mb-3 mx-2 md:mx-0'>
              Secondary
            </h2>
          
            <div className=''>
              <div className=''>
                <div className='flex gap-4 flex-col lg:flex-row lg:items-start'>
                  <div className='flex-1 surface rounded-lg overflow-hidden'>
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
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/uo6p2nve/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
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
