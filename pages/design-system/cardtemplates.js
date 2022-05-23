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
                <h3 className='h4 mb-6 lg:mb-10'>
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
              <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12'>
                <h3 className='h4 mb-6 lg:mb-10'>
                  Premium locked
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row'>
                  <div className='flex-1 space-y-4'>
                    <div className='card-mission card-ui-700 card-locked'>
                      <div className='card-decoration'>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1653293407/Marketing/2022_prototype/Premium_logo.png' width='auto' height='auto' alt='G-Loot Premium' />
                      </div>
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
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/98xh1p0b/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

               {/* Premium unlocked */}
               <div className=''>
                <h3 className='h4 mb-6 lg:mb-10'>
                  Premium unlocked
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row'>
                  <div className='flex-1 space-y-4'>
                    <div className='card-mission card-ui-700 card-unlocked'>
                      <div className='card-decoration'>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1653293407/Marketing/2022_prototype/Premium_logo.png' width='auto' height='auto' alt='G-Loot Premium' />
                      </div>
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
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/e7cxnho0/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>
              
              
            </div>

            

            
          </div>


          
        </DSStructure>

      
    </div>
  );
}
