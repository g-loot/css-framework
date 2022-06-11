import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import { useRouter } from 'next/router';

export default function MissionCards() {
  const router = useRouter();
  

  return (
    <div>
        <DSHead title='Mission Cards' />
        
        <DSTopBar data={DSdata} />

        <DSStructure data={DSdata}>
          <h1 className='mb-2'>
            Mission cards
          </h1>


          {/* Normal */}
          <div className='mb-12'>
           
            <div className="surface rounded-lg p-4">
              <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12' id='normal'>
                <h3 className='h4 mb-6 lg:mb-10'>
                  Normal
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row'>
                  <div className='flex-1 space-y-4'>
                    <div className='card-mission surface-ui-700'>
                      <div className='card-decoration'></div>
                      <div className='card-body'>
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
                        <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653310937/Marketing/2022_prototype/DummyContent/mission-pubg_1.jpg)`}}></span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/16r43ftn/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

              {/* Premium locked */}
              <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12' id='premium-locked'>
                <h3 className='h4 mb-6 lg:mb-10'>
                  Premium locked
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row'>
                  <div className='flex-1 space-y-4'>
                    <div className='card-mission surface-ui-700 card-locked'>
                      <div className='card-decoration'>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1653293407/Marketing/2022_prototype/Premium_logo.png' width='auto' height='auto' alt='G-Loot Premium' />
                      </div>
                      <div className='card-body'>
                        <div className='card-title'>
                          Get 3 double kills
                        </div>
                        <div className='card-meta'>
                          <div className='chip chip-reward chip-xp chip-sm chip-inverted'>
                            <span className='icon icon-xp-symbol-outline'></span>
                            <span>100</span>
                          </div>
                          <div>
                            2/3 double kills
                          </div>
                        </div>
                        <div className='progressbar progressbar-sm' style={{"--percent": "66"}}>
                          <div></div>
                        </div>
                      </div>
                      <div className="card-bg">
                        <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653310937/Marketing/2022_prototype/DummyContent/mission-valorant_1.jpg)`}}></span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/98xh1p0b/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

               {/* Premium unlocked */}
               <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12' id='premium-unlocked'>
                <h3 className='h4 mb-6 lg:mb-10'>
                  Premium unlocked
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row'>
                  <div className='flex-1 space-y-4'>
                    <div className='card-mission surface-ui-700 card-unlocked'>
                      <div className='card-decoration'>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1653293407/Marketing/2022_prototype/Premium_logo.png' width='auto' height='auto' alt='G-Loot Premium' />
                      </div>
                      <div className='card-body'>
                        <div className='card-title'>
                          Get 6 assists
                        </div>
                        <div className='card-meta'>
                          <div className='chip chip-reward chip-xp chip-sm chip-inverted'>
                            <span className='icon icon-xp-symbol-outline'></span>
                            <span>100</span>
                          </div>
                          <div>
                            2/6 assists
                          </div>
                        </div>
                        <div className='progressbar progressbar-sm' style={{"--percent": "33"}}>
                          <div></div>
                        </div>
                      </div>
                      <div className="card-bg">
                        <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653310937/Marketing/2022_prototype/DummyContent/mission-apexlegends_1.jpg)`}}></span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/e7cxnho0/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

               {/* Interactive */}
               <div className='border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12' id='interactive'>
                <h3 className='h4 mb-6 lg:mb-10'>
                  Interactive
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row'>
                  <div className='flex-1 space-y-4'>
                    <div className='card-mission surface-ui-700 card-interactive'>
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
                    <iframe className="rounded" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/z4b9y2dh/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

               {/* Loading */}
               <div className='' id='loading'>
                <h3 className='h4 mb-6 lg:mb-10'>
                  Loading
                </h3>
                <div className='flex gap-4 flex-col lg:flex-row'>
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
              
              
            </div>

            

            
          </div>


          
        </DSStructure>

      
    </div>
  );
}
