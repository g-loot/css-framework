import Accordion from '../../components/Accordion/Accordion';
import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import { useRouter } from 'next/router';

export default function AccordionDS() {
  const router = useRouter();
  

  return (
    <div>
        <DSHead title='Accordion' />

        <DSTopBar data={DSdata} />

        <DSStructure data={DSdata}>

          <h1 className='mb-2'>
            Accordion
          </h1>


          {/* Structure */}
          <div className='mb-12' id='structure'>

            <h2 className='h3 mb-3'>
              Structure
            </h2>

            <div className='mb-10'>
            <div className='flex flex-col lg:flex-row gap-4'>
              <div className='flex-3'>
                <div className='surface rounded-lg accordion'>

                  <Accordion header={(
                  <>
                    <div className='item'>
                      <div className='item-body'>
                        <div className='p-2 item-title font-headings text-lg italic'>
                          Before entering a Brawl
                        </div>
                      </div>
                      <div className='item-actions'>
                        <div>
                          <span className='icon icon-24 icon-arrow-sm-down'></span>
                        </div>
                      </div>
                    </div>
                  </>
                )}>
                    <div className='flex flex-col md:flex-row items-center gap-8 p-8'>
                      <div className='flex-none grow-0'>
                        <img src='https://res.cloudinary.com/gloot/image/upload/v1653224681/Marketing/2022_prototype/Logo/Brawl.svg' width='auto' className='h-26 mx-auto' />
                      </div>
                      <div className='text-ui-300 space-y-4'>
                        <p>
                          Make sure you have the G-Loot Tracker installed and running on your PC. See if everthing is working by running the G-Loot app on your PC, then start your game.
                        </p>
                        <p>
                          The G-Loot icon should appear in your game with a green dot. This means everything is up and running to track your Mission progress.
                        </p>
                      </div>
                    </div>
                  </Accordion>
                  <Accordion header={(
                  <>
                    <div className='item'>
                      <div className='item-body'>
                        <div className='p-2 item-title font-headings text-lg italic'>
                          Play your first matches to join the leaderboard
                        </div>
                      </div>
                      <div className='item-actions'>
                        <div>
                          <span className='icon icon-24 icon-arrow-sm-down'></span>
                        </div>
                      </div>
                    </div>
                  </>
                )}>
                    <div className='p-8 text-ui-300 space-y-4'>
                        <p>
                          To join the leaderboard, you need to complete a certain number of matches depending on the rules of the Brawl you want to compete in.
                        </p>
                        <p>
                          When you have played the minimum amount of matches, your Brawl points will be added to the leaderboard.
                        </p>
                        <p>
                          You can always play more matches as long as you have Tokens. Only your best scores will count.
                        </p>
                    </div>
                  </Accordion>
                  <Accordion header={(
                  <>
                    <div className='item'>
                      <div className='item-body'>
                        <div className='p-2 item-title font-headings text-lg italic'>
                          Pay tokens to activate Brawl matches
                        </div>
                      </div>
                      <div className='item-actions'>
                        <div>
                          <span className='icon icon-24 icon-arrow-sm-down'></span>
                        </div>
                      </div>
                    </div>
                  </>
                )}>
                    <div className='flex flex-col md:flex-row items-center gap-8 p-8'>
                      <div className='flex-none grow-0'>
                        <video autoPlay playsinline muted loop preload width="150" height="150">
                          <source src="https://res.cloudinary.com/gloot/video/upload/v1644396746/Marketing/202109_gloot2/3D/HomeStepToken.webm" type="video/webm" />
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1644184592/Marketing/202109_gloot2/Square_token.png" />
                        </video>
                      </div>
                      <div className='text-ui-300 space-y-4'>
                        <p>
                          To play in the Brawl you need Tokens.
                        </p>
                        <p>
                          Each match costs a certain number of Tokens. When you have spent a Token and activated a Brawl match, your next game match in the correct game mode will count towards the Brawl.
                        </p>
                      </div>
                    </div>
                  </Accordion>
                  
                </div>
              </div>
              <div className='flex-2'>
                <iframe className="rounded-lg" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/qejv3rwu/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
              </div>
            </div>
          </div>
          
            
          </div>


          {/* With halo */}
          <div className='mb-12' id='with-halo'>

            <h2 className='h3 mb-3'>
              With halo
            </h2>

            <div className='mb-10'>
            <div className='flex flex-col lg:flex-row gap-4'>
              <div className='flex-3'>
                <div className='surface rounded-lg accordion accordion-halo'>

                  <Accordion title='Before entering a Brawl' active header={(
                  <>
                    <i className='bg-gradient-to-r from-game-valorant/0 via-game-valorant to-game-valorant/0'></i>
                    <i className='bg-gradient-to-r from-game-valorant/0 via-game-valorant to-game-valorant/0'></i>
                
                    
                    <div className='item'>
                      <div className='item-image'>
                        <div className={`rounded h-10 w-10 flex items-center justify-center bg-gradient-to-b from-ui-900/50 to-ui-900/0 aspect-square text-game-valorant`}>
                          <span className={`icon icon-24 icon-game-valorant-symbol`}></span>
                        </div>
                      </div>
                      <div className='item-body'>
                        <div className='item-title font-headings text-xl italic'>
                          Valorant
                        </div>
                      </div>
                      <div className='item-actions'>
                        <div>
                          <span className='icon icon-24 icon-arrow-sm-down'></span>
                        </div>
                      </div>
                    </div>
                  </>
                  
                )}>
                    <ul className="menu menu-primary">
                      <li><a><span className="icon icon-16 icon-undefined"></span><span>Missions</span></a></li>
                      <li><a><span className="icon icon-16 icon-undefined"></span><span>Brawls</span></a></li>
                      <li><a><span className="icon icon-16 icon-undefined"></span><span>Tournaments</span></a></li>
                      <li><a><span className="icon icon-16 icon-undefined"></span><span>Stats</span></a></li>
                    </ul>
                  </Accordion>
                  <Accordion title='Play your first matches to join the leaderboard' header={(
                  <>
                    <i className='bg-gradient-to-r from-game-pubg/0 via-game-pubg to-game-pubg/0'></i>
                    <i className='bg-gradient-to-r from-game-pubg/0 via-game-pubg to-game-pubg/0'></i>
                
                    
                    <div className='item'>
                      <div className='item-image'>
                        <div className={`rounded h-10 w-10 flex items-center justify-center bg-gradient-to-b from-ui-900/50 to-ui-900/0 aspect-square text-game-pubg`}>
                          <span className={`icon icon-24 icon-game-pubg-symbol`}></span>
                        </div>
                      </div>
                      <div className='item-body'>
                        <div className='item-title font-headings text-xl italic'>
                          PUBG: BATTLEGROUNDS
                        </div>
                      </div>
                      <div className='item-actions'>
                        <div>
                          <span className='icon icon-24 icon-arrow-sm-down'></span>
                        </div>
                      </div>
                    </div>
                  </>
                  
                )}>
                    <ul className="menu menu-primary">
                      <li><a><span className="icon icon-16 icon-undefined"></span><span>Missions</span></a></li>
                      <li><a><span className="icon icon-16 icon-undefined"></span><span>Brawls</span></a></li>
                      <li><a><span className="icon icon-16 icon-undefined"></span><span>Tournaments</span></a></li>
                      <li><a><span className="icon icon-16 icon-undefined"></span><span>Stats</span></a></li>
                    </ul>
                  </Accordion>
                  <Accordion title='Pay tokens to activate Brawl matches' header={(
                  <>
                    <i className='bg-gradient-to-r from-game-rocketleague/0 via-game-rocketleague to-game-rocketleague/0'></i>
                    <i className='bg-gradient-to-r from-game-rocketleague/0 via-game-rocketleague to-game-rocketleague/0'></i>
                
                    
                    <div className='item'>
                      <div className='item-image'>
                        <div className={`rounded h-10 w-10 flex items-center justify-center bg-gradient-to-b from-ui-900/50 to-ui-900/0 aspect-square text-game-rocketleague`}>
                          <span className={`icon icon-24 icon-game-rocketleague-symbol`}></span>
                        </div>
                      </div>
                      <div className='item-body'>
                        <div className='item-title font-headings text-xl italic'>
                          Rocket League
                        </div>
                      </div>
                      <div className='item-actions'>
                        <div>
                          <span className='icon icon-24 icon-arrow-sm-down'></span>
                        </div>
                      </div>
                    </div>
                  </>
                  
                )}>
                    <ul className="menu menu-primary">
                      <li><a><span className="icon icon-16 icon-undefined"></span><span>Missions</span></a></li>
                      <li><a><span className="icon icon-16 icon-undefined"></span><span>Brawls</span></a></li>
                      <li><a><span className="icon icon-16 icon-undefined"></span><span>Tournaments</span></a></li>
                      <li><a><span className="icon icon-16 icon-undefined"></span><span>Stats</span></a></li>
                    </ul>
                  </Accordion>
                  
                </div>
              </div>
              <div className='flex-2'>
                <iframe className="rounded-lg" width="100%" height="300" src="//jsfiddle.net/augustin_hiebel/pc0w3eda/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
              </div>
            </div>
          </div>
          
            
          </div>

        
        
        </DSStructure>

        
    </div>
  );
}
