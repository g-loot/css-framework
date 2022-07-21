import React, { useEffect, useState } from 'react';

export default function RewardLadder(props) {

  const [step, setStep] = useState(1);
  const maxStep = 10;

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(3)
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className='ladder-container scrollbar-desktop' style={{"--max": maxStep, "--step": step}}>
      <div className='ladder-avatar py-2'>
        <div>
          <div>
            <figure className='avatar avatar-circle avatar-xs'>
              <div>
                <img src='https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png' alt='' />
              </div>
              <i className='radar'/>
            </figure>
          </div>
        </div>
      </div>
      <ul className='ladder ladder-sm'>
        <li className={`${step === 1 ? `is-active` : ''}`}>
          <div className='ladder-info'>
            <div>
              <span>1</span>
              <span>0/200</span>
            </div>
          </div>
          <div className='ladder-content'>
            <div className='ladder-decoration'></div>
            <div className='ladder-body'>
              <div className='chip chip-xs chip-reward chip-xp chip-inverted chip-sm'>
                <span>500</span>
                <span className='icon icon-xp-symbol-outline'/>
              </div>
              <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-token-unique.png' width='100%' height='auto' alt='Reward' />
              <span>
                1 token
              </span>
            </div>
          </div>
        </li>
        <li className={`${step === 2 ? `is-active` : ''}`}>
          <div className='ladder-info'>
            <div>
              <span>2</span>
              <span>0/200</span>
            </div>
          </div>
          <div className='ladder-content'>
            <div className='ladder-decoration'></div>
            <div className='ladder-body'>
              <div className='chip chip-xs chip-reward chip-xp chip-inverted chip-sm'>
                <span>500</span>
                <span className='icon icon-xp-symbol-outline'/>
              </div>
              <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-token-unique.png' width='100%' height='auto' alt='Reward' />
              <span>
                1 token
              </span>
            </div>
          </div>
        </li>
        <li className={`${step === 3 ? `is-active` : ''}`}>
          <div className='ladder-info'>
            <div>
              <span>3</span>
              <span>0/200</span>
            </div>
          </div>
          <div className='ladder-content'>
            <div className='ladder-decoration'></div>
            <div className='ladder-body'>
              <div className='chip chip-xs chip-reward chip-xp chip-inverted chip-sm'>
                <span>800</span>
                <span className='icon icon-xp-symbol-outline'/>
              </div>
              <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-coin-small.png' width='100%' height='auto' alt='Reward' />
              <span>
                50 coins
              </span>
            </div>
          </div>
        </li>
        <li className={`${step === 4 ? `is-active` : ''}`}>
          <div className='ladder-info'>
            <div>
              <span>4</span>
              <span>0/200</span>
            </div>
          </div>
          <div className='ladder-content'>
            <div className='ladder-decoration'></div>
            <div className='ladder-body'>
              <div className='chip chip-xs chip-reward chip-xp chip-inverted chip-sm'>
                <span>1100</span>
                <span className='icon icon-xp-symbol-outline'/>
              </div>
              <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-token-unique.png' width='100%' height='auto' alt='Reward' />
              <span>
                1 token
              </span>
            </div>
          </div>
        </li>
        <li className={`${step === 5 ? `is-active` : ''}`}>
          <div className='ladder-info'>
            <div>
              <span>5</span>
              <span>0/200</span>
            </div>
          </div>
          <div className='ladder-content'>
            <div className='ladder-decoration'></div>
            <div className='ladder-body'>
              <div className='chip chip-xs chip-reward chip-xp chip-inverted chip-sm'>
                <span>1400</span>
                <span className='icon icon-xp-symbol-outline'/>
              </div>
              <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-token-unique.png' width='100%' height='auto' alt='Reward' />
              <span>
                1 token
              </span>
            </div>
          </div>
        </li>
        <li className={`${step === 6 ? `is-active` : ''}`}>
          <div className='ladder-info'>
            <div>
              <span>6</span>
              <span>0/200</span>
            </div>
          </div>
          <div className='ladder-content'>
            <div className='ladder-decoration'></div>
            <div className='ladder-body'>
              <div className='chip chip-xs chip-reward chip-xp chip-inverted chip-sm'>
                <span>1700</span>
                <span className='icon icon-xp-symbol-outline'/>
              </div>
              <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-coin-small.png' width='100%' height='auto' alt='Reward' />
              <span>
                100 coins
              </span>
            </div>
          </div>
        </li>
        <li className={`${step === 7 ? `is-active` : ''}`}>
          <div className='ladder-info'>
            <div>
              <span>7</span>
              <span>0/200</span>
            </div>
          </div>
          <div className='ladder-content'>
            <div className='ladder-decoration'></div>
            <div className='ladder-body'>
              <div className='chip chip-xs chip-reward chip-xp chip-inverted chip-sm'>
                <span>2000</span>
                <span className='icon icon-xp-symbol-outline'/>
              </div>
              <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-token-extrasmall.png' width='100%' height='auto' alt='Reward' />
              <span>
                2 tokens
              </span>
            </div>
          </div>
        </li>
        <li className={`is-locked ${step === 8 ? `is-active` : ''}`}>
          <div className='ladder-info'>
            <div>
              <span>8</span>
              <span>0/200</span>
            </div>
          </div>
          <div className='ladder-content'>
            <div className='ladder-decoration'></div>
            <div className='ladder-body'>
              <div className='chip chip-xs chip-reward chip-xp chip-inverted chip-sm'>
                <span>2000</span>
                <span className='icon icon-xp-symbol-outline'/>
              </div>
              <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-mixed-extrasmall.png' width='100%' height='auto' alt='Reward' />
              <span>
                250 coins<br/>
                2 tokens
              </span>
            </div>
          </div>
        </li>
        <li className={`is-locked ${step === 9 ? `is-active` : ''}`}>
          <div className='ladder-info'>
            <div>
              <span>9</span>
              <span>0/200</span>
            </div>
          </div>
          <div className='ladder-content'>
            <div className='ladder-decoration'></div>
            <div className='ladder-body'>
              <div className='chip chip-xs chip-reward chip-xp chip-inverted chip-sm'>
                <span>2000</span>
                <span className='icon icon-xp-symbol-outline'/>
              </div>
              <img src='https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-mixed-extrasmall.png' width='100%' height='auto' alt='Reward' />
              <span>
                250 coins<br/>
                2 tokens
              </span>
            </div>
          </div>
        </li>
        <li className={`is-locked ${step === 10 ? `is-active` : ''}`}>
          <div className='ladder-info'>
            <div>
              <span>10</span>
              <span>0/200</span>
            </div>
          </div>
          <div className='ladder-content'>
            <div className='ladder-decoration'></div>
            <div className='ladder-body'>
              <div className='chip chip-xs chip-reward chip-xp chip-inverted chip-sm'>
                <span>2000</span>
                <span className='icon icon-xp-symbol-outline'/>
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
  );
}