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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo diam quis ante mollis, ac elementum dolor elementum. In vel consectetur tortor, nec porta lectus.',
    image: 'https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-pubg_1.jpg',
    buttonLabel: 'Label',
    buttonURL: '#'
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


          {/* Tournament brackets */}
          <div className='mb-12'>

            <div className='pt-4'>
              <div className=''>
                
                <div className='flex gap-4 flex-col'>
                  <div className='flex-1 space-y-4'>

                    <div className='brackets'>
                      <div className='bracket-round'>
                        <div className='bracket-title'>
                          <span>
                            Super Weekend
                          </span>
                        </div>
                        <ul>
                          <li className='bracket-item'>
                            <div>
                              <div className='bracket-meta'>
                                <div>
                                  <span className='icon icon-calendar-2'></span>
                                  <span>May 5 • 15:30 PM</span>
                                </div>
                                <div>
                                  <a href='#'>
                                    Match details
                                  </a>
                                </div>
                              </div>
                              <ul className='bracket-teams'>
                                <li className='is-active'>
                                  <figure className='avatar'>
                                    <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                                  </figure>
                                  <b>
                                    Team name
                                  </b>
                                  <i>
                                    1
                                  </i>
                                </li>
                                <li>
                                  <figure className='avatar'>
                                    <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                                  </figure>
                                  <b>
                                    Team name
                                  </b>
                                  <i>
                                    1
                                  </i>
                                </li>
                              </ul>
                              <div className='bracket-info'>
                                Upper bracket 1.1
                              </div>
                            </div>
                          </li>
                          <li className='bracket-item'>
                            <div>
                              <div className='bracket-meta'>
                                <div>
                                  <span className='icon icon-calendar-2'></span>
                                  <span>May 5 • 15:30 PM</span>
                                </div>
                                <div>
                                  <a href='#'>
                                    Match details
                                  </a>
                                </div>
                              </div>
                              <ul className='bracket-teams'>
                                <li>
                                  <figure className='avatar'>
                                    <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                                  </figure>
                                  <b>
                                    Team name
                                  </b>
                                  <i>
                                    1
                                  </i>
                                </li>
                                <li>
                                  <figure className='avatar'>
                                    <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                                  </figure>
                                  <b>
                                    Team name
                                  </b>
                                  <i>
                                    1
                                  </i>
                                </li>
                              </ul>
                              <div className='bracket-info'>
                                Upper bracket 1.1
                              </div>
                            </div>
                          </li>
                          <li className='bracket-item'>
                            <div>
                              <div className='bracket-meta'>
                                <div>
                                  <span className='icon icon-calendar-2'></span>
                                  <span>May 5 • 15:30 PM</span>
                                </div>
                                <div>
                                  <a href='#'>
                                    Match details
                                  </a>
                                </div>
                              </div>
                              <ul className='bracket-teams'>
                                <li className='is-active'>
                                  <figure className='avatar'>
                                    <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                                  </figure>
                                  <b>
                                    Team name
                                  </b>
                                  <i>
                                    1
                                  </i>
                                </li>
                                <li>
                                  <figure className='avatar'>
                                    <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                                  </figure>
                                  <b>
                                    Team name
                                  </b>
                                  <i>
                                    1
                                  </i>
                                </li>
                              </ul>
                              <div className='bracket-info'>
                                Upper bracket 1.1
                              </div>
                            </div>
                          </li>
                          <li className='bracket-item'>
                            <div>
                              <div className='bracket-meta'>
                                <div>
                                  <span className='icon icon-calendar-2'></span>
                                  <span>May 5 • 15:30 PM</span>
                                </div>
                                <div>
                                  <a href='#'>
                                    Match details
                                  </a>
                                </div>
                              </div>
                              <ul className='bracket-teams'>
                                <li>
                                  <figure className='avatar'>
                                    <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                                  </figure>
                                  <b>
                                    Team name
                                  </b>
                                  <i>
                                    1
                                  </i>
                                </li>
                                <li>
                                  <figure className='avatar'>
                                    <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                                  </figure>
                                  <b>
                                    Team name
                                  </b>
                                  <i>
                                    1
                                  </i>
                                </li>
                              </ul>
                              <div className='bracket-info'>
                                Upper bracket 1.1
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className='bracket-round'>
                        <div className='bracket-title'>
                          <span>
                            Super Weekend
                          </span>
                        </div>
                        <ul>
                          <li className='bracket-item'>
                            <div>
                              <div className='bracket-meta'>
                                <div>
                                  <span className='icon icon-calendar-2'></span>
                                  <span>May 5 • 15:30 PM</span>
                                </div>
                                <div>
                                  <a href='#'>
                                    Match details
                                  </a>
                                </div>
                              </div>
                              <ul className='bracket-teams'>
                                <li className='is-active'>
                                  <figure className='avatar'>
                                    <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                                  </figure>
                                  <b>
                                    Team name
                                  </b>
                                  <i>
                                    1
                                  </i>
                                </li>
                                <li>
                                  <figure className='avatar'>
                                    <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                                  </figure>
                                  <b>
                                    Team name
                                  </b>
                                  <i>
                                    1
                                  </i>
                                </li>
                              </ul>
                              <div className='bracket-info'>
                                Upper bracket 1.1
                              </div>
                            </div>
                          </li>
                          <li className='bracket-item'>
                            <div>
                              <div className='bracket-meta'>
                                <div>
                                  <span className='icon icon-calendar-2'></span>
                                  <span>May 5 • 15:30 PM</span>
                                </div>
                                <div>
                                  <a href='#'>
                                    Match details
                                  </a>
                                </div>
                              </div>
                              <ul className='bracket-teams'>
                                <li className='is-active'>
                                  <figure className='avatar'>
                                    <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                                  </figure>
                                  <b>
                                    Team name
                                  </b>
                                  <i>
                                    1
                                  </i>
                                </li>
                                <li>
                                  <figure className='avatar'>
                                    <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                                  </figure>
                                  <b>
                                    Team name
                                  </b>
                                  <i>
                                    1
                                  </i>
                                </li>
                              </ul>
                              <div className='bracket-info'>
                                Upper bracket 1.1
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className='bracket-round'>
                        <div className='bracket-title'>
                          <span>
                            Super Weekend
                          </span>
                        </div>
                        <ul>
                          <li className='bracket-item'>
                            <div>
                              <div className='bracket-meta'>
                                <div>
                                  <span className='icon icon-calendar-2'></span>
                                  <span>May 5 • 15:30 PM</span>
                                </div>
                                <div>
                                  <a href='#'>
                                    Match details
                                  </a>
                                </div>
                              </div>
                              <ul className='bracket-teams'>
                                <li className='is-active'>
                                  <figure className='avatar'>
                                    <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                                  </figure>
                                  <b>
                                    Team name
                                  </b>
                                  <i>
                                    1
                                  </i>
                                </li>
                                <li>
                                  <figure className='avatar'>
                                    <span style={{ backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644921493/Marketing/202109_gloot2/teamlogo_CrocEsports.png)`}}></span>
                                  </figure>
                                  <b>
                                    Team name
                                  </b>
                                  <i>
                                    1
                                  </i>
                                </li>
                              </ul>
                              <div className='bracket-info'>
                                Upper bracket 1.1
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                    </div>
                  
                  </div>
                  <div className='flex-1'>
                    <iframe className="rounded" width="100%" height="400" src="//jsfiddle.net/augustin_hiebel/kjq7t1rd/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094" ></iframe>
                  </div>
                </div>
              </div>

              
              
            </div>

            

            
          </div>


          
        </DSStructure>

      
    </div>
  );
}