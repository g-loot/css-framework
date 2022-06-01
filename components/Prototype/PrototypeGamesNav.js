import React, { useRef, useState } from 'react';

import PrototypeDataGames from '../../mock-data/games.json';
import PrototypeGamesNavItem from './PrototypeGamesNavItem';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router'

export default function PrototypeGamesNav({children}) {
  const router = useRouter();
  const [isActive, setActive] = useState(false);
  const elementRef = useRef(null);

  var height = elementRef.current?.clientHeight;

  const handleToggle = e => {
    e.preventDefault()
    setActive(!isActive);
  };

  return (
    <>
     {PrototypeDataGames.map((item, itemIndex) => (
        <>
          <div className='surface rounded-lg accordion accordion-sm' key={itemIndex}>
            <PrototypeGamesNavItem
              header={(
                <>
                <div className={`rounded h-8 w-8 flex items-center justify-center bg-gradient-to-b from-ui-900 to-ui-800 aspect-square text-game-${item.slug.replace('_', '')}`}>
                  <span className={`icon icon-20 icon-game-${item.slug.replace('_', '')}-symbol`}></span>
                </div>
                <div className='accordion-title'>
                  <span>{item.shortName}</span>
                </div>
                <div>
                  <span className='icon icon-24 icon-arrow-sm-down'></span>
                </div>
                </>
              )}
            >

              <ul className="menu menu-secondary">
                <li><a href="cards"><span className="icon icon-16 icon-undefined"></span><span>Missions</span></a></li>
                <li><a href="colors"><span className="icon icon-16 icon-undefined"></span><span>Brawls</span></a></li>
                <li><a href="icons"><span className="icon icon-16 icon-undefined"></span><span>Tournaments</span></a></li>
                <li><a href="typography"><span className="icon icon-16 icon-undefined"></span><span>Stats</span></a></li>
              </ul>

            </PrototypeGamesNavItem>
          </div>
          
        </>
      ))}
    </>
   
  )
};




/*

 {PrototypeDataGames.map((game, gameIndex) => (
        <>
          <div className='' key={gameIndex}>
            {game.gameId}
          </div>
        </>
      ))}
      */