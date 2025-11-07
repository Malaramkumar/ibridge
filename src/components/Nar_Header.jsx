import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Nar_Header.scss';

const Nar_Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="top-info-bar">
        📞 For Enquiry: <strong>9884481399</strong> ✅ 100% Placement
      </div>

      <nav className="navbar">
        <div className="logo-wrapper1" onClick={() => navigate('/')}>
          <img
            src="/images/narpavi-tap-logo.png"
            alt="Logo"
            className="logo-image"
          />
          <div className="logo-title">Ranmars-iBridge</div>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? "line open" : "line"}></span>
          <span className={menuOpen ? "line open" : "line"}></span>
          <span className={menuOpen ? "line open" : "line"}></span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li onClick={() => navigate('/')}>Home</li>
          <li className="dropdown">
            <span>Top Courses</span>
            <ul className="dropdown-menu">
              <li onClick={() => navigate('/FooterCourse/fullstack')}>Full-Stack Web Development</li>
              <li onClick={() => navigate('/FooterCourse/cloud')}>Cloud Computing</li>
              <li onClick={() => navigate('/FooterCourse/data-science-python')}>Data Science & ML</li>
              <li onClick={() => navigate('/course/cybersecurity')}>Cybersecurity</li>
              <li onClick={() => navigate('/top_course')}>→ View All</li>
            </ul>
          </li>

          <li className="dropdown">
            <span>All Programs</span>
            <ul className="dropdown-menu">
              <li onClick={() => navigate('/')}>Java Training</li>
              <li onClick={() => navigate('/FooterCourse/python')}>Python Training</li>
              <li onClick={() => navigate('/FooterCourse/aws')}>AWS Training</li>
              <li onClick={() => navigate('/FooterCourse/fullstack')}>Full-Stack Developer</li>
              <li onClick={() => navigate('/FooterCourse/data-science-python')}>Data Science</li>
              <li onClick={() => navigate('/FooterCourse/devops')}>DevOps Training</li>
              <li onClick={() => navigate('/FooterCourse/dotnet')}>.NET Training</li>
              <li onClick={() => navigate('/FooterCourse/android')}>Android Training</li>
              <li onClick={() => navigate('/FooterCourse/webdev')}>Web Development</li>
              <li onClick={() => navigate('/FooterCourse/cloud')}>Cloud Computing</li>
              <li onClick={() => navigate('/FooterCourse/r')}>R Programming Training</li>
              <li onClick={() => navigate('/FooterCourse/mobileapp')}>Mobile App Dev</li>
              <li onClick={() => navigate('/FooterCourse/vmware')}>VmWare</li>
              <li onClick={() => navigate('/FooterCourse/dm')}>Digital Marketing</li>
              <li onClick={() => navigate('/FooterCourse/uiux')}>UI / UX Training</li>
              <li onClick={() => navigate('/components/AllPrograms')}>→ View All</li>
            </ul>
          </li>

          <li onClick={() => navigate('/careers')}>Career Support</li>
          <li onClick={() => navigate('/about')}>Our Story</li>
          <li onClick={() => navigate('/contact')}>Get in Touch</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nar_Header;
