import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

export default function RewardLadder() {
  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Reward Ladder' />
        
        <DSTopBar />

        <DSStructure data={DSdata}>
          <h1 className='mb-2'>
            Reward Ladder
          </h1>


          {/* Reward ladder */}
          <div className='mb-12'>

            <div className='pt-4'>
              <div className=''>
                
                <div className='flex gap-4 flex-col'>
                  <div className='flex-1 space-y-4'>
                    <div className='ladder-container scrollbar-desktop'>
                      <div className='ladder-avatar' style={{"--max": "10", "--step": "1"}}>
                        <div>
                          <div>
                            <figure className='avatar avatar-md'>
                              <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                              <i className='radar'></i>
                            </figure>
                          </div>
                        </div>
                      </div>
                      <ul className='ladder'>
                        <li className='is-active'>
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
                        <li>
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
                        <li>
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
                        <li>
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
                        <li>
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
                        <li>
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
                        <li>
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