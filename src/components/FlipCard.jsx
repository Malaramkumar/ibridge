import React, { useState, useRef, useEffect } from 'react';
import './FlipCard.scss';
import ph1 from "../../public/images/effects/1.png"
import ph2 from "../../public/images/effects/2.png"
import ph3 from "../../public/images/effects/3.png"
import i28 from "../../public/images/28.png"

const cardData = [
  {
    frontTitle: (<><h3>Introducing</h3> <h2>2 YEAR INTEGRATED PROGRAM</h2></>),
    frontText: ' " ONE PROGRAM. MANY SKILLS. COUNTLESS CAREERS. " ',
    backTitle: 'From Classroom to Career',
    /* Corrected backText to be an array of paragraphs for proper rendering */
    backText: [
        'For the first time in India, a two-year integrated program is being introduced across multiple engineering disciplines—crafted to equip students with multi-stream expertise.',
        'What makes this initiative truly pioneering is its immersion in real-world practice, guided by seasoned industry professionals.',
        'This is not merely an academic program—it’s a transformative journey to shape future-ready professionals.'
    ],
    frontBg: i28,
    backBg: ph2
  },
  {
    frontTitle: 'Slide 2: The Front',
    frontText: 'This is the front content of the second slide. It has its own back side.',
    backTitle: 'Slide 2: The Back',
    backText: 'Welcome to the back of the second card.Welcome to the back of the second card.Welcome to the back of the second card.Welcome to the back of the second card.Welcome to the back of the second card.Welcome to the back of the second card.  ',
    frontBg: ph3,
    backBg: 'url("https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=500&q=80")'
  },
  {
    frontTitle: 'Slide 3: The Front',
    frontText: 'Here is the Front of the third slide. Each card flips independently.',
    backTitle: 'Slide 3: The Back',
    backText: 'This is the back content of the final slide.',
    frontBg: 'url("https://images.unsplash.com/photo-1503676260728-1c62c693a20e?w=500&q=80")',
    backBg: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80")'
  },
  {
    frontTitle: 'Slide 4: The Front',
    frontText: 'Here is the front of the final fourth slide. This is also a flip card.',
    backTitle: 'Slide 4: The Back',
    backText: 'This is the back content of the final slide.',
    frontBg: 'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80")',
    backBg: 'url("https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&q=80")'
  }
];

const FlipCardCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});
  const [slideWidth, setSlideWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setSlideWidth(carouselRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    setFlippedCards({});
  };

  const handleFlip = (index) => {
    setFlippedCards(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className='carousel-main'>
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-wrapper" style={{ transform: `translateX(-${currentSlide * slideWidth}px)` }}>
          {cardData.map((card, index) => (
            /* Added card-${index} class for unique styling */
            <div key={index} className={`flip-container card-${index} ${flippedCards[index] ? 'flipped' : ''}`} style={{ width: `${slideWidth}px` }}>
              <div className="flipper">
                <div className="front" style={{ backgroundImage: `url(${card.frontBg})` }}>
                  <div className="content">
                    <h2>{card.frontTitle}</h2>
                    <p>{card.frontText}</p>
                    <button onClick={() => handleFlip(index)}>Read More</button>
                  </div>
                </div>
                <div className="back" style={{ backgroundImage: `url(${card.backBg})` }}>
                  <div className="content">
                    <h2>{card.backTitle}</h2>
                    {/* Logic to handle both string and array for backText */}
                    {Array.isArray(card.backText)  
                      ? card.backText.map((paragraph, i) => <p key={i}>{paragraph}</p>)
                      : <p>{card.backText}</p>}
                    <button onClick={() => handleFlip(index)}>Go Back</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-nav">
          {cardData.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlipCardCarousel;

