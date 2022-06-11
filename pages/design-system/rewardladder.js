import React, { useState } from 'react';

import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import { useRouter } from 'next/router';

export default function RewardLadderDS() {

  const [randomNum1, setRandomNum1] = useState(1);
  const maxNum = 10;

  function clickHandlerNum1(varTarget, max) {
    if(varTarget === max) {
      setRandomNum1(varTarget = 1)
    } else {
      setRandomNum1(varTarget + 1)
    }
  }


  const router = useRouter();
  

  return (
    <div>
        <DSHead title='Reward Ladder' />
        
        <DSTopBar data={DSdata} />

        <DSStructure data={DSdata}>
          <h1 className='mb-2'>
            Reward Ladder
          </h1>


          {/* Reward ladder */}
          <div className='mb-12' id='reward-ladder'>

            <div className='pt-4'>
              <div className=''>
                
                <div className='flex gap-4 flex-col'>
                  <div className='flex-1 space-y-4'>
                    <div className='ladder-container scrollbar-desktop' style={{"--max": maxNum, "--step": randomNum1}}>
                      <div className='ladder-avatar'>
                        <div>
                          <div>
                            <figure className='avatar avatar-md'>
                              <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png)`}}></span>
                              <i className='radar'></i>
                            </figure>
                          </div>
                        </div>
                      </div>
                      <ul className='ladder'>
                        <li className={`${randomNum1 === 1 ? `is-active` : ''}`}>
                          <div className='ladder-info'>
                            <div>
                              <span>1</span>
                              <span>0/200</span>
                            </div>
                          </div>
                          <div className='ladder-content'>
                            <div className='ladder-decoration'></div>
                            <div className='ladder-body'>
                              <div className='chip chip-reward chip-xp chip-inverted chip-sm'>
                                <span>500</span>
                                <span className='icon icon-xp-symbol-outline'></span>
                              </div>
                              <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-token-unique.png' width='100%' height='auto' alt='Reward' />
                              <span>
                                1 token
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className={`${randomNum1 === 2 ? `is-active` : ''}`}>
                          <div className='ladder-info'>
                            <div>
                              <span>2</span>
                              <span>0/200</span>
                            </div>
                          </div>
                          <div className='ladder-content'>
                            <div className='ladder-decoration'></div>
                            <div className='ladder-body'>
                              <div className='chip chip-reward chip-xp chip-inverted chip-sm'>
                                <span>500</span>
                                <span className='icon icon-xp-symbol-outline'></span>
                              </div>
                              <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-token-unique.png' width='100%' height='auto' alt='Reward' />
                              <span>
                                1 token
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className={`${randomNum1 === 3 ? `is-active` : ''}`}>
                          <div className='ladder-info'>
                            <div>
                              <span>3</span>
                              <span>0/200</span>
                            </div>
                          </div>
                          <div className='ladder-content'>
                            <div className='ladder-decoration'></div>
                            <div className='ladder-body'>
                              <div className='chip chip-reward chip-xp chip-inverted chip-sm'>
                                <span>800</span>
                                <span className='icon icon-xp-symbol-outline'></span>
                              </div>
                              <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-coin-small.png' width='100%' height='auto' alt='Reward' />
                              <span>
                                50 coins
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className={`${randomNum1 === 4 ? `is-active` : ''}`}>
                          <div className='ladder-info'>
                            <div>
                              <span>4</span>
                              <span>0/200</span>
                            </div>
                          </div>
                          <div className='ladder-content'>
                            <div className='ladder-decoration'></div>
                            <div className='ladder-body'>
                              <div className='chip chip-reward chip-xp chip-inverted chip-sm'>
                                <span>1100</span>
                                <span className='icon icon-xp-symbol-outline'></span>
                              </div>
                              <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-token-unique.png' width='100%' height='auto' alt='Reward' />
                              <span>
                                1 token
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className={`${randomNum1 === 5 ? `is-active` : ''}`}>
                          <div className='ladder-info'>
                            <div>
                              <span>5</span>
                              <span>0/200</span>
                            </div>
                          </div>
                          <div className='ladder-content'>
                            <div className='ladder-decoration'></div>
                            <div className='ladder-body'>
                              <div className='chip chip-reward chip-xp chip-inverted chip-sm'>
                                <span>1400</span>
                                <span className='icon icon-xp-symbol-outline'></span>
                              </div>
                              <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-token-unique.png' width='100%' height='auto' alt='Reward' />
                              <span>
                                1 token
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className={`${randomNum1 === 6 ? `is-active` : ''}`}>
                          <div className='ladder-info'>
                            <div>
                              <span>6</span>
                              <span>0/200</span>
                            </div>
                          </div>
                          <div className='ladder-content'>
                            <div className='ladder-decoration'></div>
                            <div className='ladder-body'>
                              <div className='chip chip-reward chip-xp chip-inverted chip-sm'>
                                <span>1700</span>
                                <span className='icon icon-xp-symbol-outline'></span>
                              </div>
                              <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-coin-small.png' width='100%' height='auto' alt='Reward' />
                              <span>
                                100 coins
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className={`${randomNum1 === 7 ? `is-active` : ''}`}>
                          <div className='ladder-info'>
                            <div>
                              <span>7</span>
                              <span>0/200</span>
                            </div>
                          </div>
                          <div className='ladder-content'>
                            <div className='ladder-decoration'></div>
                            <div className='ladder-body'>
                              <div className='chip chip-reward chip-xp chip-inverted chip-sm'>
                                <span>2000</span>
                                <span className='icon icon-xp-symbol-outline'></span>
                              </div>
                              <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-token-extrasmall.png' width='100%' height='auto' alt='Reward' />
                              <span>
                                2 tokens
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className='is-locked'>
                          <div className='ladder-info'>
                            <div>
                              <span>8</span>
                              <span>0/200</span>
                            </div>
                          </div>
                          <div className='ladder-content'>
                            <div className='ladder-decoration'></div>
                            <div className='ladder-body'>
                              <div className='chip chip-reward chip-xp chip-inverted chip-sm'>
                                <span>2000</span>
                                <span className='icon icon-xp-symbol-outline'></span>
                              </div>
                              <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-mixed-extrasmall.png' width='100%' height='auto' alt='Reward' />
                              <span>
                                250 coins<br/>
                                2 tokens
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className='is-locked'>
                          <div className='ladder-info'>
                            <div>
                              <span>9</span>
                              <span>0/200</span>
                            </div>
                          </div>
                          <div className='ladder-content'>
                            <div className='ladder-decoration'></div>
                            <div className='ladder-body'>
                              <div className='chip chip-reward chip-xp chip-inverted chip-sm'>
                                <span>2000</span>
                                <span className='icon icon-xp-symbol-outline'></span>
                              </div>
                              <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-mixed-extrasmall.png' width='100%' height='auto' alt='Reward' />
                              <span>
                                250 coins<br/>
                                2 tokens
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className='is-locked'>
                          <div className='ladder-info'>
                            <div>
                              <span>10</span>
                              <span>0/200</span>
                            </div>
                          </div>
                          <div className='ladder-content'>
                            <div className='ladder-decoration'></div>
                            <div className='ladder-body'>
                              <div className='chip chip-reward chip-xp chip-inverted chip-sm'>
                                <span>2000</span>
                                <span className='icon icon-xp-symbol-outline'></span>
                              </div>
                              <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-mixed-small.png' width='100%' height='auto' alt='Reward' />
                              <span>
                                500 coins<br/>
                                2 tokens
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className='text-center'>
                      <button className='button button-tertiary mx-auto' onClick={clickHandlerNum1.bind(this, randomNum1, maxNum)}>
                        <span>Next step</span>
                      </button>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="600" src="//jsfiddle.net/augustin_hiebel/c1nbf68L/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

              
              
            </div>

            

            
          </div>


          
        </DSStructure>

      
    </div>
  );
}