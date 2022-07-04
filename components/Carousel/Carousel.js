import React, { useEffect, useState } from 'react';

const slides = [
  {
    title: 'Season 6 is here',
    description: '32 teams will duke it out over 3 days across 18 matches. The top teams will move on to the Grand Final. Do not miss out!',
    image: 'https://res.cloudinary.com/gloot/image/upload/v1654158104/Marketing/2022_prototype/DummyContent/carousel-item-pubg-s6.jpg',
    buttonLabel: 'Learn more',
    buttonURL: '#'
  },
  {
    title: 'New tournaments available',
    description: 'There are some new tournaments for you to compete in. Check them out now!',
    image: 'https://res.cloudinary.com/gloot/image/upload/v1654158116/Marketing/2022_prototype/DummyContent/carousel-item-gloot-newtournaments.jpg',
    buttonLabel: 'Learn more',
    buttonURL: '#'
  },
  {
    title: 'Apex Legends: Fade, the Phasing Punisher',
    description: 'Apex Legends Mobile is finally here, and it brings a new, mobile-exclusive Legend to the fold.',
    image: 'https://res.cloudinary.com/gloot/image/upload/v1654158114/Marketing/2022_prototype/DummyContent/carousel-item-apexlegends-fade.jpg',
    buttonLabel: 'Read the blog',
    buttonExternal: true,
    buttonURL: '#'
  }
];

export default function Carousel(props) {

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
  
  return (
    <div className='carousel'>
      <div className='carousel-slides'>
        {slides.map((slide, slideIndex) => (
          <>
            <div className={`carousel-slide ${slideNumber === slideIndex ? 'is-active' : ''}`} key={slideIndex}>
              <div className='carousel-image'>
                <span style={{ backgroundImage: `url(${slide.image})`}}></span>
              </div>
              <div className='carousel-body'>
                <div>
                  <h2 className='h3 text-ui-100'>
                    {slide.title}
                  </h2>
                  <p className='mb-5 mt-2 text-ui-200'>
                    {slide.description}
                  </p>
                  <button className='button button-primary'>
                    <span>{slide.buttonLabel}</span>
                    {slide.buttonExternal && (
                      <>
                        <span className='icon icon-box-arrow-top-right'></span>
                      </>
                    )}
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
  );
}