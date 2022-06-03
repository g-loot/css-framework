import React, { useEffect, useState } from 'react';

import Carousel from '../../components/Carousel/Carousel';
import DSHead from '../../components/DesignSystem/DSHead';
import DSStructure from '../../components/DesignSystem/DSStructure';
import DSTopBar from '../../components/DesignSystem/DSTopBar';
import DSdata from '../api/designsystem/data.json'
import useFetch from '../../hooks/use-fetch';
import { useRouter } from 'next/router';

const slides = [
  {
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo diam quis ante mollis, ac elementum dolor elementum. In vel consectetur tortor, nec porta lectus.',
    image: 'https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-pubg_1.jpg',
    buttonLabel: 'Label',
    buttonURL: '#'
  },
  {
    title: 'Fusce a diam accumsan',
    description: 'Aliquam erat volutpat. Aenean iaculis, nunc molestie interdum consequat, urna tortor scelerisque ante, vel commodo mauris lectus sed massa.',
    image: 'https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-apexlegends_1.jpg',
    buttonLabel: 'Label',
    buttonURL: '#'
  },
  {
    title: 'Aenean at libero ligula',
    description: 'Aenean at libero ligula. Sed gravida dapibus lectus nec finibus. Morbi egestas vitae tellus eget egestas. Donec scelerisque gravida metus, non pulvinar augue finibus eu. ',
    image: 'https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-valorant_1.jpg',
    buttonLabel: 'Label',
    buttonURL: '#'
  }
];

export default function CarouselDS() {

  const [slideNumber, setSlideNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      //nextHandler(slideNumber, slides.length)
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function slideHandler(varTarget) {
    console.log(varTarget);
    setSlideNumber(varTarget)
  }
  function prevHandler(varTarget, max) {
    if(varTarget === 0) {
      setSlideNumber(varTarget = max - 1)
    } else {
      setSlideNumber(varTarget - 1)
    }
  }
  function nextHandler(varTarget, max) {
    console.log(varTarget);

    if(varTarget === max - 1) {
      setSlideNumber(varTarget = 0)
    } else {
      setSlideNumber(varTarget + 1)
    }
  }

  const router = useRouter();
  const { data, loading } = useFetch('/api/designsystem', { delay: 20 });

  return (
    <div>
        <DSHead title='Carousel' />
        
        <DSTopBar data={DSdata} />

        <DSStructure data={DSdata}>
          <h1 className='mb-2'>
            Carousel
          </h1>


          {/* Carousel */}
          <div className='mb-12'>

            <div className='pt-4'>
              <div className=''>
                
                <div className='flex gap-4 flex-col'>
                  <div className='flex-1 space-y-4'>
                  
                    <div className='surface rounded-xl overflow-hidden carousel'>


                      <div className='carousel-slides'>

                        {slides.map((slide, slideIndex) => (
                          <>
                            <div className={`carousel-slide ${slideNumber === slideIndex ? 'is-active' : ''}`} key={slideIndex}>
                              <div className='carousel-image'>
                                <span style={{ backgroundImage: `url(${slide.image})`}}></span>
                              </div>
                              <div className='carousel-content'>
                                <div>
                                  <h2 className='h3'>
                                    {slide.title}
                                  </h2>
                                  <p className='mb-5 mt-2'>
                                    {slide.description}
                                  </p>
                                  <button className='button button-primary'>
                                    <span>{slide.buttonLabel}</span>
                                  </button>
                                </div>
                              </div>
                              <div className='carousel-backdrop'>
                                <span style={{ backgroundImage: `url(${slide.image})`}}></span>
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                      <div className='carousel-nav'>
                        <ul className='carousel-list'>
                          {slides.map((item, itemIndex) => (
                            <>
                              <li key={itemIndex} className={`${slideNumber === itemIndex ? 'is-active' : ''}`}>
                                <a onClick={slideHandler.bind(this, itemIndex)}>
                                  <span>
                                    Step {itemIndex + 1}
                                  </span>
                                  <div>
                                    {item.title}
                                  </div>
                                  <i></i>
                                </a>
                              </li>
                            </>
                          ))}
                        </ul>
                        <div className='carousel-control'>
                          <button className='button button-secondary' onClick={prevHandler.bind(this, slideNumber, slides.length)}>
                            <span className='icon icon-ctrl-left'></span>
                          </button>
                          <button className='button button-secondary' onClick={nextHandler.bind(this, slideNumber, slides.length)}>
                            <span className='icon icon-ctrl-right'></span>
                          </button>
                        </div>
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