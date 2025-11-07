import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Demo.scss';
import { useNavigate } from "react-router-dom";

// Define the slide variants for animation
const slideVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, x: '-100%', transition: { duration: 0.5, ease: 'easeOut' } },
};

// Updated domains
const domains = [
  { title: 'Artificial Intelligence & Machine Learning', description: 'Transforming industries with intelligent automation, smart systems, and data-driven innovation.', image: 'url(/images/AI-ML.png)' },
  { title: 'Data Science & Business Analytics', description: 'Critical for decision-making in sectors like finance, manufacturing, healthcare, logistics, and IT.', image: 'url(/images/DS-BS.png)' },
  { title: 'Web, Mobile & Full Stack Development', description: 'In-demand across tech companies, startups, and product development firms.', image: 'url(/images/W-FSD.png)' },
  { title: 'Cybersecurity & Ethical Hacking', description: 'Essential for IT, defense, banking, and digital infrastructure security.', image: 'url(/images/Ethical_Hacking.jpg)' },
  { title: 'Cloud Computing & DevOps', description: 'Powering scalable solutions in IT, automation, and enterprise platforms.', image: 'url(/images/CC-D.png)' },
  { title: 'Internet of Things (IoT) & Embedded Systems', description: 'Connecting devices and systems in smart homes, factories, vehicles, and cities.', image: 'url(/images/IOT-ES.png)' },
  { title: 'AR/VR & Immersive Technologies', description: 'Revolutionizing training, design, simulation, and entertainment industries.', image: 'url(/images/AR-VR.png)' },
  { title: 'Robotics, Mechatronics & Industrial Automation', description: 'Key in automotive, manufacturing, aerospace, and precision engineering.', image: 'url(/images/RM-IA.png)' },
  { title: 'Low Code / No Code Platforms & Software Integration', description: 'Accelerating application development across industries, even for non-CS backgrounds.', image: 'url(/images/LC-NC.png)' },
  { title: 'Green Tech, Renewable Energy & Sustainable Engineering', description: 'Crucial for civil, mechanical, and electrical engineers tackling climate and energy challenges.', image: 'url(/images/GT-RE.png)' },
  { title: 'Smart Infrastructure & Urban Mobility', description: 'Modern solutions in construction, transportation, and city planning.', image: 'url(/images/SI-UM.png)' },
  { title: 'Advanced Materials & Nanotechnology', description: 'Emerging in biomedical, aerospace, electronics, and chemical sectors.', image: 'url(/images/AM-N.png)' },
  { title: 'Process Engineering & Industry 4.0', description: 'Transforming traditional manufacturing with digital technologies and smart processes.', image: 'url(/images/PE-I.png)' },
];

const skills = [
  { title: 'Skill-Centric Curriculum', description: 'Get trained in cutting-edge technologies with a curriculum that evolves with market demands — not outdated syllabi.', icon: '★' },
  { title: 'Real-World Projects from Day One', description: 'Work on live, mentor-led projects that simulate industry challenges — and graduate with a portfolio that proves your capabilities.', icon: '★' },
  { title: 'Global Teaching Methodologies', description: 'Learn through a blended pedagogy that combines the best of global education frameworks, flipped classrooms, and active problem-solving.', icon: '★' },
  { title: 'Industry-Endorsed Certifications', description: 'Earn certifications that carry weight — aligned with global tech ecosystems and recognized by hiring managers across sectors.', icon: '★' },
  { title: 'Pan-Engineering Inclusivity', description: "Whether you're from mechanical, civil, electrical, or computer science — our training is designed to elevate every discipline.", icon: '★' },
  { title: '360° Career Development', description: 'From technical mastery to communication skills, design thinking to agile practices — iBridge ensures you are not just employable, you are exceptional.', icon: '★' },
];

const pageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const taglineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
};

const skillListVariants = {
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
};

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
};

const Slideshow = ({ showCourses }) => {
    const navigate = useNavigate();
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides1 = [
    // Slide 1: Hero Section
    <div className="main-home" key="slide1">
      <div className="main-home__hero">
        <motion.div
          className="main-home__hero-content"
          animate={{ x: showCourses ? '-30%' : 0, scale: showCourses ? 0.95 : 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="main-home__title-wrapper">
            <span className="main-home__title-ranmars">RANMARS</span>
            <h1 className="main-home__title-ibridge">
              <span className="i">i</span>BRIDGE
            </h1>
          </div>
          <p className="main-home__description">
            iBridge is a next-gen technical training program designed to bridge your passion with the skillsets demanded by
            today's industries. With global pedagogy, expert mentorship, and hands-on project experience, iBridge empowers
            aspirers to go far beyond conventional academic boundaries.
          </p>
          <motion.button
            className="main-home__explore"
            whileHover={{ scale: 1.1, rotate: 2, boxShadow: '0 0 15px #41729f' }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Courses
          </motion.button>
         
        </motion.div>
      </div>
    </div>,

    // Slide 2: Page One (Domains Carousel)
    <div className="industry-skills" key="slide2">
      <section className="page-one">
        <motion.div
          className="content-layout"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
           Skills First, Career Next
          </motion.h1>
            
          <div className="text-content">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Today’s industries are evolving at lightning speed. Traditional degrees alone are no longer enough - what companies need are job-ready individuals with practical skills, adaptability, and real-world exposure.From startups to tech giants, every organization is on the lookout for professionals who can hit the ground running.
            </motion.p>
            
             <motion.button className="slide2btn"
      whileHover={{ scale: 1.1, rotate: 2, boxShadow: "0 0 15px #41729f" }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate("/Homeslide2")} > Read More </motion.button>

              {/* <button className="slide2btn" onClick={() => navigate("/Homeslide2")}>More</button> */}

          </div>
        </motion.div>  
        
        {/* end */}
      </section>
    </div>,

    // Slide 3: Page Two (Skills List)
    <div className="industry-skills" key="slide3">
      <section className="page-two">
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Skills Are the New Degree
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            In today’s innovation-driven economy, employers seek skills over scores, and capabilities over credentials. That’s why iBridge isn’t just another training program - it’s a career acceleration platform tailored to help you succeed in the real world.
          </motion.p>
                        
       <motion.button
      className="slide2wbtn"
      whileHover={{ scale: 1.1, rotate: 2, boxShadow: "0 0 15px #41729f" }}
      whileTap={{ scale: 0.95 }}
     onClick={() => navigate("/Homeslide3")}
    >
      Read More
    </motion.button>           
          
        </motion.div>
      </section>
    </div>,
  ];

  // Handle arrow key navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % slides1.length);
      } else if (event.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + slides1.length) % slides1.length);
      }
    };
 
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides1.length]);

  return (
    <div className="slideshow-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {slides1[currentSlide]}
        </motion.div>
      </AnimatePresence>
      
       <div className="rect-dots-container">
    {slides1.map((_, index) => (
      <span
        key={index}
        className={`rect-dot ${currentSlide === index ? "active" : ""}`}
        onClick={() => setCurrentSlide(index)} // 👈 switch to clicked slide
      />
    ))}
  </div>

    </div>
  );
};

export default Slideshow;
