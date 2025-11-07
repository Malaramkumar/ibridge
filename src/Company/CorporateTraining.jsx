import React from "react";
import "./CorporateTraining.scss";
import { Users, Briefcase, BookOpenCheck, Phone } from "lucide-react";
import Nar_Header from '../components/Nar_Header';

const CorporateTraining = () => {
  return (
    <>
      <Nar_Header />
    <div className="corporate-page">
      <section className="hero">
        <div className="content">
          <h1>👨‍🏫 Corporate Training</h1>
          <p>
            Upskill your team with customized corporate training solutions designed to meet industry demands.
          </p>
        </div>
      </section>

      <section className="why-choose">
        <h2>💡 Why Choose Narpavi?</h2>
        <ul>
          <li><Users /> Experienced Trainers with Industry Exposure</li>
          <li><Briefcase /> Real-Time Project-Based Training</li>
          <li><BookOpenCheck /> Flexible On-site & Online Modules</li>
          <li><Phone /> Dedicated Manager for Corporate Clients</li>
        </ul>
      </section>

      <section className="modules">
        <h2>📘 Popular Training Modules</h2>
        <div className="grid">
          <div className="module-card">
            <h3>Java Full Stack</h3>
            <p>Complete web development using Java, Spring Boot, React, and SQL.</p>
          </div>
          <div className="module-card">
            <h3>Python + Data Science</h3>
            <p>Covering Python, Pandas, NumPy, Machine Learning, and AI fundamentals.</p>
          </div>
          <div className="module-card">
            <h3>DevOps & Cloud</h3>
            <p>Hands-on training in Docker, Jenkins, AWS, Azure, CI/CD pipelines.</p>
          </div>
          <div className="module-card">
            <h3>Selenium Automation</h3>
            <p>Master test automation using Selenium, TestNG, Maven, and CI tools.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>📞 Let’s Train Your Team</h2>
        <p>Contact us today to schedule a demo or get a customized corporate training proposal.</p>
        <a href="/contact" className="cta-button">Contact Us</a>
      </section>
    </div>
    </>
  );
};

export default CorporateTraining;
