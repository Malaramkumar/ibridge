import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BottomSectionMenu.scss';

import JavaChatBot from './JavaChatBot'; 

const BottomSectionMenu = () => {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [initialOffsetTop, setInitialOffsetTop] = useState(0);

  useEffect(() => {
    if (menuRef.current) {
      setInitialOffsetTop(menuRef.current.offsetTop);
    }

    const handleScroll = () => {    
      if (window.scrollY >= initialOffsetTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      if (menuRef.current) setInitialOffsetTop(menuRef.current.offsetTop);
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [initialOffsetTop]);

  return (
    <div
      ref={menuRef}
      className={`bottom-menu-container ${isFixed ? 'fixed' : ''}`}
    >
      <div className="menu-links">
        <button onClick={() => {document.getElementById('course-highlights-section')?.scrollIntoView({ behavior: 'smooth' });}}>
        Course Highlights
        </button>

        <button onClick={() => {document.getElementById('upcoming-batches-section')?.scrollIntoView({ behavior: 'smooth' });}}>
        Upcoming Batches
        </button>

        <button onClick={() => document.getElementById('syllabus-section')?.scrollIntoView({ behavior: 'smooth' })}>
          Syllabus
        </button>

        <button onClick={() => document.getElementById('trainer-profile')?.scrollIntoView({ behavior: 'smooth' })}>
          Trainer Profile
        </button>
        
        <button onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}>
          Certifications
        </button>

        <button onClick={() => document.getElementById('testimonial')?.scrollIntoView({ behavior: 'smooth' })}>
          Testimonial
        </button>

        <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}>
          FAQ
        </button>
      </div>
     

 <JavaChatBot />
   </div>
  );
};

export default BottomSectionMenu;
