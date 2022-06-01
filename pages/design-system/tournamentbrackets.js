import React, { useEffect, useState } from 'react';

import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

const bracketsRounds = [
  {
    title: 'Super Weekend',
    matches: [
      {
        date: 'May 5',
        time: '15:30 PM',
        url: '#',
        teams: [
          {
            name: 'Angry Beavers',
            image: 'https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_AngryBeavers.png',
            score: 2,
            iswinning: true
          },
          {
            name: 'Kingzz',
            image: 'https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_l10n.png',
            score: 1
          }
        ]
      },
      {
        date: 'May 6',
        time: '15:30 PM',
        url: '#',
        teams: [
          {
            name: 'Bunny Hunger',
            image: 'https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_Bunny_Hunger.png',
            score: 5,
            iswinning: true
          },
          {
            name: 'Croc Esports',
            image: 'https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png',
            score: 1
          }
        ]
      },
      {
        date: 'May 5',
        time: '18:00 PM',
        url: '#',
        teams: [
          {
            name: 'CockyStars',
            image: 'https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_CockyStars.png',
            score: 2
          },
          {
            name: 'anUbis',
            image: 'https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_anUbis.png',
            score: 3,
            iswinning: true
          }
        ]
      },
      {
        date: 'May 6',
        time: '18:00 PM',
        url: '#',
        teams: [
          {
            name: 'Squids',
            image: 'https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_Squides.png',
            score: 7
          },
          {
            name: 'Gladion2',
            image: 'https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_Gladion2.png',
            score: 9,
            iswinning: true
          }
        ]
      }
    ]
  },
  {
    title: 'Qualifiers',
    matches: [
      {
        date: 'May 10',
        time: '20:00 PM',
        url: '#',
        teams: [
          {
            name: 'Angry Beavers',
            image: 'https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_AngryBeavers.png',
            score: 3,
            iswinning: true
          },
          {
            name: 'Croc Esports',
            image: 'https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png',
            score: 1
          }
        ]
      },
      {
        date: 'May 11',
        time: '20:00 PM',
        url: '#',
        teams: [
          {
            name: 'anUbis',
            image: 'https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_anUbis.png',
            score: 1
          },
          {
            name: 'Gladion2',
            image: 'https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_Gladion2.png',
            score: 5,
            iswinning: true
          }
        ]
      }
    ]
  },
  {
    title: 'Grand Final',
    matches: [
      {
        date: 'May 15',
        time: '20:30 PM',
        url: '#',
        teams: [
          {
            name: 'Angry Beavers',
            image: 'https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_AngryBeavers.png',
            score: '?'
          },
          {
            name: 'Gladion2',
            image: 'https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_Gladion2.png',
            score: '?'
          }
        ]
      }
    ]
  }
];

export default function TournamentBracketsDS() {


  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Tournament brackets' />
        
        <DSTopBar />

        <DSStructure data={DSdata}>
          <h1 className='mb-2 mx-2 md:mx-0'>
            Tournament brackets
          </h1>


          {/* Structure */}
          <div className='mb-12'>

            <h2 className='h3 mb-3 mx-2 md:mx-0'>
              Structure
            </h2>

            <div className='pt-4'>
              <div className=''>
                
                <div className='flex gap-4 flex-col'>
                  <div className='flex-1 space-y-4'>


                    <div className='brackets-container scrollbar-desktop'>
                      <div className='brackets'>
                        {bracketsRounds.map((round, roundIndex) => (
                          <>
                            <div className='bracket-round' key={roundIndex}>
                                <div className='bracket-title'>
                                  <span>
                                    {round.title}
                                  </span>
                                </div>
                                <ul>
                                {round.matches.map((match, matchIndex) => (
                                  <li className='bracket-item' key={matchIndex}>
                                    <div>
                                      <div className='bracket-meta'>
                                        <div>
                                          <span className='icon icon-calendar-2'></span>
                                          <span>{match.date} • {match.time}</span>
                                        </div>
                                        <div>
                                          <a href={match.url}>
                                            Match details
                                          </a>
                                        </div>
                                      </div>
                                      <ul className='bracket-teams'>
                                        {match.teams.map((team, teamIndex) => (
                                          <li className={`${team.iswinning ? 'is-active' : ''}`} key={teamIndex}>
                                            <figure className='avatar'>
                                              <span style={{ backgroundImage: `url(${team.image})`}}></span>
                                            </figure>
                                            <b>
                                              {team.name}
                                            </b>
                                            <i>
                                              {team.score}
                                            </i>
                                          </li>
                                        ))}
                                      </ul>
                                      <div className='bracket-info'>
                                        Upper bracket {roundIndex + 1}.{matchIndex + 1}
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>

                  
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="200" src="//jsfiddle.net/augustin_hiebel/4pkyt6u8/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

            </div>
            
          </div>

          {/* Responsive */}
          <div className='mb-12'>

            <h2 className='h3 mb-3 mx-2 md:mx-0'>
              Responsive brackets
            </h2>

            <div className='pt-4'>
              <div className=''>
                
                <div className='flex gap-4 flex-col'>
                  <div className='flex-1 space-y-4'>


                    <div className='brackets-container is-responsive'>
                      <div className='brackets'>
                        {bracketsRounds.map((round, roundIndex) => (
                          <>
                            <div className='bracket-round' key={roundIndex}>
                                <div className='bracket-title'>
                                  <span>
                                    {round.title}
                                  </span>
                                </div>
                                <ul>
                                {round.matches.map((match, matchIndex) => (
                                  <li className='bracket-item' key={matchIndex}>
                                    <div>
                                      <div className='bracket-meta'>
                                        <div>
                                          <span className='icon icon-calendar-2'></span>
                                          <span>{match.date} • {match.time}</span>
                                        </div>
                                        <div>
                                          <a href={match.url}>
                                            Match details
                                          </a>
                                        </div>
                                      </div>
                                      <ul className='bracket-teams'>
                                        {match.teams.map((team, teamIndex) => (
                                          <li className={`${team.iswinning ? 'is-active' : ''}`} key={teamIndex}>
                                            <figure className='avatar'>
                                              <span style={{ backgroundImage: `url(${team.image})`}}></span>
                                            </figure>
                                            <b>
                                              {team.name}
                                            </b>
                                            <i>
                                              {team.score}
                                            </i>
                                          </li>
                                        ))}
                                      </ul>
                                      <div className='bracket-info'>
                                        Upper bracket {roundIndex + 1}.{matchIndex + 1}
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>

                  
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="200" src="//jsfiddle.net/augustin_hiebel/wL3590hq/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

            </div>
            
          </div>


          
        </DSStructure>

      
    </div>
  );
}