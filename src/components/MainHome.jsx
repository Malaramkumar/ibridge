import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './MainHome.scss';
import { Briefcase, Brain, Link as LinkIcon, Building2 } from 'lucide-react';
import pillar1 from '../assets/pillars/pillar1.png';
import pillar2 from '../assets/pillars/pillar2.png';
import pillar3 from '../assets/pillars/pillar3.png';
import pillar4 from '../assets/pillars/pillar4-1.png';
import shapingfuture from "../assets/Article/Shapingfuture.jpg"
import aa1 from '../../public/images/skills.jpg';
import Slideshow from './Demo'; // slide 1,2,3 home page
import "./Demo.scss"
//import n1 from "../../public/images/offine.png"

import ph1 from "../../public/images/effects/1.png"
import ph2 from "../../public/images/effects/2.png"
import ph3 from "../../public/images/effects/3.png"
import ph4 from "../../public/images/effects/4.png"
import ph5 from "../../public/images/effects/7.png"
import ph6 from "../../public/images/effects/8.png"
import ph7 from "../../public/images/effects/10.png"

import i28 from "../../public/images/28.png"

// school student tranforming
import SchoolStudent from "../../public/images/ShapingthefutureSchoolStudent.png"
import Ruralpeople from "../../public/images/RuralPeople.png"
import t1 from "../../public/images/Transforming/t1.png"
import t2 from "../../public/images/Transforming/t2.png"
import t3 from "../../public/images/Transforming/t3.png"


// Hero Boxes Data
const heroBoxes = [
  {
    title: 'Industry Insight & Future Foresight',
    description:
      'We equip learners with a deep understanding of current and emerging industry landscapes, enabling them to anticipate trends and align their aspirations with the future of work.',
    backHeading: 'Illuminating the path to tomorrow’s industries',
    image: pillar1,
    icon: <Briefcase size={48} />,
  },
  {
    title: 'Mindset for Skillset Mastery',
    description:
      'At iBridge, we see skillset development as essential—not optional—throughout a student’s academic journey. As industries rapidly evolve, we equip learners with in-demand technical and professional skills that go beyond the classroom, preparing them to graduate with confidence and industry readiness.',
    backHeading: 'Championing skill growth as an integral part of education',
    image: pillar2,
    icon: <Brain size={48} />,
  },
  {
    title: 'iBridge: Bridging Skills and Industry Needs',
    description:
      'iBridge serves as a dynamic conduit between academia and industry, transforming conventional education into real-world readiness through relevant, hands-on, and demand-driven training.',
    backHeading: 'Translating academic potential into professional impact',
    image: pillar3,
    icon: <LinkIcon size={48} />,
  },
  {
    title: 'Empowering Industry, Enriching India',
    description:
      'At iBridge, we believe that a skilled workforce is the backbone of thriving industries and a prosperous nation. By nurturing competent professionals, we enable industries to innovate, grow, and compete globally—creating a ripple effect that accelerates India’s economic and digital transformation.',
    backHeading: 'Fueling national progress through skilled professionals',
    image: pillar4,
    icon: <Building2 size={48} />,
  },
];

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

// Publications Slider Data
const Publicationslides = [
  { img: ph1, title:( <> Multiple technologies &<br/> Diversified skills</>), link:"/5-1" },
  { img: ph2, title: ' iCAP Industry-Aligned Capstone Application Program ',link:"/5-2" },
  { img: ph3, title: ' Expert-Led Training ',link:"/5-3" },
  { img: ph4, title: ' Learn Online ', link:"/5-4" },
  { img: ph5, title: ' Connect Offline ',link:"/5-5" },
  { img: ph6, title: ' Building Skills During Graduation ',link:"/5-6" },
  { img: ph7, title: ' Program Fee Structure ',link:"/5-7" },
 
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const MainHome = () => {
  const Navigate=useNavigate();
  const [showCourses, setShowCourses] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [expandedLevelTopics, setExpandedLevelTopics] = useState({});
  const [expandedSections, setExpandedSections] = useState({
    programSignificance: false,
    careerOpportunities: false,
    startupOpportunities: false,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [current, setCurrent] = useState(0);

  const [isFlipped, setIsFlipped] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Course toggle handlers
  const handleButtonMouseEnter = () => setShowCourses(true);
  const handleMouseLeaveCourses = () => setShowCourses(false);
  const handleKeyDown = (event) => (event.key === 'Enter' || event.key === ' ') && setShowCourses(!showCourses);
  const handleClick = () => setShowCourses(!showCourses);

  // Toggle syllabus topic
  const toggleLevelTopic = (level, topicId) => {
    setExpandedLevelTopics((prev) => ({
      ...prev,
      [level]: prev[level] === topicId ? null : topicId,
    }));
  };

  // Toggle program highlights section
  const toggleSection = (section) => setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));

  // Slider handlers
  const selectSlide = (index) => {
    setActiveIndex(index);
    setFlipped(false);
  };

  const total = Publicationslides.length;
  const half = Math.floor(total / 2);
  const cardWidth = 30;
  const gapPercent = 5;
  const centerLeft = (100 - cardWidth) / 2;

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
  
     const scrollRef = useRef(null);
     
  return (
    <motion.div className="main-home" variants={containerVariants} initial="hidden" animate="visible">
      {/* Class 1: home page slide content */}

      <Slideshow showCourses={true} /> 
      
      {/* Class 2: Hero Boxes Section */}
      <div className="main-home__hero-boxes-section">
        <motion.h1 className="vision-heading" variants={itemVariants} initial="hidden" animate="visible">
          iBridge Vision 2030 Pillars
        </motion.h1>
        <motion.div className="main-home__hero-boxes" variants={containerVariants} initial="hidden" animate="visible">
          {heroBoxes.map((box, index) => (
            <motion.div
              key={index}
              className="flip-box"   
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flip-box-inner">
                <div className="flip-box-front" style={{ backgroundImage: `url(${box.image})` }}>
                  <div className="overlay"></div>
                  <motion.div
                    className="front-content"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
                  >
                    <h3 className="main-home__hero-title">{box.title}</h3>
                  </motion.div>
                </div>
                <div className="flip-box-back">
                  <motion.div
                    className="back-content"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
                  >
                    <div className="back-icon">{box.icon}</div>
                    <h4 className="main-home__hero-subtitle">{box.backHeading}</h4>
                    <p className="main-home__hero-desc">{box.description}</p>
                  </motion.div>
                </div>
               
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
          
            {/* class 4 : Nations Slider */}
            {/* <div className="ibridge"> */}
              <div className="program-slider-wrapper">
                <h2 className="slider-title">Program Highlights</h2>
                <div className="slider">
                  {Publicationslides.map((slide, index) => {
                    let offset = index - current;
                    if (offset < -half) offset += total;
                    if (offset > half) offset -= total;
                    const isCenter = offset === 0;
                    const isSide = Math.abs(offset) === 1;
                    const isHidden = !isCenter && !isSide;
                    const position = centerLeft + offset * (cardWidth + gapPercent);
                    const style = {
                      position: 'absolute',
                      top: 0,
                      left: `${position}%`,
                      width: `${cardWidth}%`,
                      height: '100%',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: '12px',
                      zIndex: isCenter ? 2 : 1,
                      opacity: isHidden ? 0 : isCenter ? 1 : 0.8,
                      backgroundImage: `url(${slide.img})`,
                      '--base-scale': isCenter ? 1.05 : 0.95,
                    };
                    return (
                      <div key={index} style={style} className="slide-card">
                        <div className="overlay">
                          <h3>{slide.title}</h3>
                          
                         <button className="read-more" onClick={() => Navigate(slide.link)}> Read more </button>
                                                       
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="dots">
                  {Publicationslides.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${current === index ? 'active' : ''}`}
                      onClick={() => setCurrent(index)}
                    ></span>
                  ))}
                </div>
                <div className="view-all">
                  <a href="/programs">→ View All</a>
                </div>
              </div>
            {/* </div> */}
                    
        {/* Class 5: Publications Section */}

        <div class="newsroom-main"> 
          <div class="newsroom-grid">
            {/* <!-- Card 1 --> */}
            <div class="newsroom-card">

       <img src={t1} alt="Student developer" className="newsroom-image" />
      <p className="newsroom-text">
        Transforming Rural India by Upskilling 2 Lakh People in Advanced Technical Skills
      </p>
      {/* <button
        className="newsroom-link"
        onClick={() => Navigate("/6-1")}
      >
        →
      </button> */}
      <a href="/6-1" class="newsroom-link">→</a>

            </div>
            {/* <!-- Card 2 --> */}
            <div class="newsroom-card">
              <img src={t2} alt="AI training" class="newsroom-image" />
              <p class="newsroom-text">Shaping the future of school students through next gen skill across tamilnadu</p>
              <a href="/6-2" class="newsroom-link">→</a>
            </div>
            {/* <!-- Card 3 --> */}
            <div class="newsroom-card">
              <img src={t3} alt="Global training" class="newsroom-image" />
              <p class="newsroom-text"> The Power of Early Skill Development: Shaping Successful Futures.</p>
              <a href="/6-3" class="newsroom-link">→</a>
            </div>
          </div>
        </div>

    

        {/* class 6 */}

<div className="containerimage">
  <h1>Publication and Article</h1>
  <div className="Images-wrap">  
    <div className="photo">
      <img src={aa1} alt="Publication 1" className="newsroom-image1" />
    </div>
    <div className="photo">
      <img src={aa1} alt="Publication 2" className="newsroom-image1" />
    </div>
    <div className="photo">
      <img src={aa1} alt="Publication 3" className="newsroom-image1" />
    </div>
    <div className="photo">
      <img src={aa1} alt="Publication 4" className="newsroom-image1" />
    </div>
  </div>
</div>
  
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

    </motion.div>
  );
};

export default MainHome;