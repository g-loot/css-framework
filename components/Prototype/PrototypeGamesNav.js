import React, { useRef, useState } from 'react';

import Link from 'next/link';
import PrototypeDataGames from '../../mock-data/games.json';
import PrototypeGamesNavItem from './PrototypeGamesNavItem';
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router'

export default function PrototypeGamesNav({children}) {
  const router = useRouter();
  const [isActive, setActive] = useState(false);
  const elementRef = useRef(null);
  const { query } = useRouter();
  const hasAds = query.ads === 'true' ? true : false;

  var height = elementRef.current?.clientHeight;

  const handleToggle = e => {
    e.preventDefault()
    setActive(!isActive);
  };

  return (
    <>
     {PrototypeDataGames.map((item, itemIndex) => (
        <>
          <div className={`surface rounded-lg accordion accordion-sm accordion-halo ${itemIndex > 2 ? 'hidden' : ''}`} key={itemIndex}>
            <PrototypeGamesNavItem
              header={(
                <>
                  <i className={`bg-gradient-to-r ${item.slug === 'apex_legends' ? 'from-game-apexlegends/0 via-game-apexlegends to-game-apexlegends/0' : ''} ${item.slug === 'csgo' ? 'from-game-csgo/0 via-game-csgo to-game-csgo/0' : ''}  ${item.slug === 'dota_2' ? 'from-game-dota2/0 via-game-dota2 to-game-dota2/0' : ''}  ${item.slug === 'league_of_legends' ? 'from-game-leagueoflegends/0 via-game-leagueoflegends to-game-leagueoflegends/0' : ''}  ${item.slug === 'rocket_league' ? 'from-game-rocketleague/0 via-game-rocketleague to-game-rocketleague/0' : ''} ${item.slug === 'pubg' ? 'from-game-pubg/0 via-game-pubg to-game-pubg/0' : ''}  ${item.slug === 'valorant' ? 'from-game-valorant/0 via-game-valorant to-game-valorant/0' : ''}`}></i>
                  <i className={`bg-gradient-to-r ${item.slug === 'apex_legends' ? 'from-game-apexlegends/0 via-game-apexlegends to-game-apexlegends/0' : ''} ${item.slug === 'csgo' ? 'from-game-csgo/0 via-game-csgo to-game-csgo/0' : ''}  ${item.slug === 'dota_2' ? 'from-game-dota2/0 via-game-dota2 to-game-dota2/0' : ''}  ${item.slug === 'league_of_legends' ? 'from-game-leagueoflegends/0 via-game-leagueoflegends to-game-leagueoflegends/0' : ''}  ${item.slug === 'rocket_league' ? 'from-game-rocketleague/0 via-game-rocketleague to-game-rocketleague/0' : ''} ${item.slug === 'pubg' ? 'from-game-pubg/0 via-game-pubg to-game-pubg/0' : ''}  ${item.slug === 'valorant' ? 'from-game-valorant/0 via-game-valorant to-game-valorant/0' : ''}`}></i>
               
                  <div className='item p-0'>
                    <div className='item-image'>
                      <div className={`rounded h-8 w-8 flex items-center justify-center bg-gradient-to-b from-ui-900/50 to-ui-900/0 aspect-square text-game-${item.slug.replace(/#|_/g,'')}`}>
                        <span className={`icon icon-20 icon-game-${item.slug.replace(/#|_/g,'')}-symbol`}></span>
                      </div>
                    </div>
                    <div className='item-body'>
                      <div className='item-title font-headings uppercase'>
                        {item.name}
                      </div>
                    </div>
                    <div className='item-actions'>
                      <div>
                        <span className='icon icon-24 icon-arrow-sm-down'></span>
                      </div>
                    </div>
                  </div>
                </>
                
              )}
            >

              <ul className="menu menu-secondary">
                <li>
                  <Link href={`mission${hasAds ? '?ads=true&' : '?'}game=${item.slug}`} >
                    <a>
                      <span className='pl-9'>Missions</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`brawls${hasAds ? '?ads=true&' : '?'}game=${item.slug}`} >
                    <a>
                      <span className='pl-9'>Brawls</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`tournaments${hasAds ? '?ads=true&' : '?'}game=${item.slug}`} >
                    <a>
                      <span className='pl-9'>Tournaments</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`stats${hasAds ? '?ads=true&' : '?'}game=${item.slug}`} >
                    <a>
                      <span className='pl-9'>Stats</span>
                    </a>
                  </Link>
                </li>
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