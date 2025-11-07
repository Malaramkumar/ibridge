import React, { useState } from 'react';
import './Selenium.scss';
import Nar_Header from '../components/Nar_Header';
import EnquiryModal from '../components/EnquiryModal';
import selenium1 from '../assets/selenium/selenium5.png';
import selenium2 from '../assets/selenium/selenium6.png';
import selenium3 from '../assets/selenium/selenium7.png';
import selenium4 from '../assets/selenium/selenium8.png';
import seleniumlogo from '../assets/selenium/seleniumlogo.png'; // Updated logo import

const topics = [
  {
    title: "1. Introduction to Selenium",
    image: selenium1,
    content: `Selenium is an open-source automated testing framework used to validate web applications across browsers and platforms.
It supports automation across different browsers and is compatible with several programming languages such as Java, C#, Python, etc.
Selenium is widely adopted for its flexibility and robust browser automation capabilities.`,
  },
  {
    title: "2. Selenium Components",
    image: selenium2,
    content: `Selenium has four major components: Selenium IDE, Selenium RC, WebDriver, and Selenium Grid.
WebDriver is the most powerful and flexible component that directly communicates with the browser.
Selenium Grid allows parallel execution across multiple browsers and machines.`,
  },
  {
    title: "3. Benefits & Industry Use",
    image: selenium3,
    content: `Selenium is platform-independent and integrates with tools like TestNG, Maven, Jenkins, Docker, and Cucumber.
It's widely used in Agile and DevOps pipelines to speed up test execution and improve test reliability.
Selenium supports automated regression testing, cross-browser testing, and UI validations.`,
  },
  {
    title: "4. Career & Certification Opportunities",
    image: selenium4,
    content: `Selenium Test Automation is a critical skill for QA Engineers, Testers, and SDETs.
Relevant certifications include Selenium WebDriver with Java/Python, Certified Selenium Professional, and ISTQB Advanced.
Automation testers with Selenium skills are in high demand in companies adopting CI/CD practices.`,
  }
];

const SeleniumHeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="selenium-main">
      <Nar_Header />
      <section className="selenium">
        <div className="selenium-hero">
          <div className="selenium-hero-content-left">
            <h2>Course / Selenium Training in Chennai</h2>
            <h1>Selenium Training in Chennai</h1>
            <p>
              Learn Selenium Test Automation from Industry Experts! At Narpavi Technologies, we offer top-notch
              Selenium training with real-time projects and placement support. Whether you're starting from scratch
              or upskilling, our structured curriculum ensures you're job-ready in no time.
            </p>
            <h3 className="selenium-dream-job-text">🚀 Get Placed in Top MNCs</h3>
            <div className="selenium-star-rating-box">
              <div className="selenium-stars">⭐⭐⭐⭐⭐</div>
              <div className="selenium-rating-label">5,432 students rated this course 5 stars!</div>
            </div>
          </div>

          <div className="selenium-hero-box">
            <img src={seleniumlogo} alt="Selenium Logo" className="selenium-logo" />
            <div className="selenium-cert-text">Certification Training</div>
            <div className="selenium-call-text">
              📞 Have enquiries? Call @ <strong>9884481399</strong>
            </div>
            <button className="selenium-enquiry-btn" onClick={() => setShowEnquiry(true)}>
              Enquire Now
            </button>
          </div>
        </div>

        {/* Enquiry Modal */}
        <EnquiryModal show={showEnquiry} onClose={() => setShowEnquiry(false)} />
      </section>

      {/* Topics Section */}
      <section className="selenium-interactive-topics">
        <div className="selenium-left-content">
          <h2>Explore Our In-Demand Training Tracks</h2>
          <div className="selenium-topics-list">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className={`selenium-topic-item ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <h3>{topic.title}</h3>
                {activeIndex === idx && (
                  <p className="selenium-description">{topic.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="selenium-right-image">
          <img src={topics[activeIndex].image} alt={topics[activeIndex].title} />
        </div>
      </section>

    </div>
  );
};

export default SeleniumHeroSection;
