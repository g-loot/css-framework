import React, { useEffect, useState } from 'react';

const slides = [
  {
    title: 'Season 6 is here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo diam quis ante mollis, ac elementum dolor elementum. In vel consectetur tortor, nec porta lectus.',
    image: 'https://res.cloudinary.com/gloot/image/upload/v1654158104/Marketing/2022_prototype/DummyContent/carousel-item-pubg-s6.jpg',
    buttonLabel: 'Learn more',
    buttonURL: '#'
  },
  {
    title: 'New tournaments available',
    description: 'Aliquam erat volutpat. Aenean iaculis, nunc molestie interdum consequat, urna tortor scelerisque ante, vel commodo mauris lectus sed massa.',
    image: 'https://res.cloudinary.com/gloot/image/upload/v1654158116/Marketing/2022_prototype/DummyContent/carousel-item-gloot-newtournaments.jpg',
    buttonLabel: 'Learn more',
    buttonURL: '#'
  },
  {
    title: 'Apex Legends: Fade, the Phasing Punisher',
    description: 'Aenean at libero ligula. Sed gravida dapibus lectus nec finibus. Morbi egestas vitae tellus eget egestas. Donec scelerisque gravida metus, non pulvinar augue finibus eu. ',
    image: 'https://res.cloudinary.com/gloot/image/upload/v1654158114/Marketing/2022_prototype/DummyContent/carousel-item-apexlegends-fade.jpg',
    buttonLabel: 'Read the blog',
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
              <div className='carousel-content'>
                <div>
                  <h2 className='h3 text-ui-100'>
                    {slide.title}
                  </h2>
                  <p className='mb-5 mt-2 text-ui-200'>
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
  );
}