import React, { useState } from 'react';
import './Devops.scss';
import Nar_Header from '../components/Nar_Header';
import EnquiryModal from '../components/EnquiryModal';
import devops1 from '../assets/devops/devops5.png';
import devops2 from '../assets/devops/devops6.png';
import devops3 from '../assets/devops/devops7.png';
import devops4 from '../assets/devops/devops8.png';
import devopslogo from '../assets/devops/devops-logo.jpg';

const topics = [
  {
    title: "1. Introduction to DevOps",
    image: devops1,
    content: `DevOps is a set of practices that combines software development (Dev) and IT operations (Ops).
It aims to shorten the development lifecycle and deliver high-quality software continuously.
DevOps fosters collaboration, automation, and faster delivery of applications.`,
  },
  {
    title: "2. Core Components of DevOps",
    image: devops2,
    content: `Key components include Continuous Integration (CI), Continuous Deployment (CD), and Infrastructure as Code (IaC).
Popular tools are Git, Jenkins, Docker, Kubernetes, Ansible, and Terraform.
Monitoring and logging are integral for performance and incident response.`,
  },
  {
    title: "3. Benefits & Use Cases",
    image: devops3,
    content: `DevOps improves deployment speed, system reliability, and cross-team communication.
It supports agile development, cloud-native apps, and microservices architecture.
Widely used in e-commerce, finance, healthcare, and SaaS product development.`,
  },
  {
    title: "4. DevOps Careers & Certifications",
    image: devops4,
    content: `DevOps roles include DevOps Engineer, Site Reliability Engineer (SRE), and Automation Architect.
Top certifications: AWS DevOps Engineer, Azure DevOps, Docker, Kubernetes (CKA), and Terraform.
Skilled DevOps professionals are in high demand for scalable, secure software delivery.`,
  }
];

const DevopsHeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="devops-main">
      <Nar_Header />
      <section className="devops">
        <div className="devops-hero">
          <div className="devops-hero-content-left">
            <h2>Course / DevOps Training in Chennai</h2>
            <h1>DevOps Training in Chennai</h1>
            <p>
              Are you aiming to break into the world of software development? Narpavi Technologies in Chennai
              offers expert-led DevOps training designed to propel you into a lucrative, in-demand tech career.
              Whether you're a fresher or an experienced professional, our meticulously crafted DevOps courses
              provide the skills and real-world experience needed to succeed.
            </p>
            <h3 className="devops-dream-job-text">🚀 Get Your Dream IT Job</h3>
            <div className="devops-star-rating-box">
              <div className="devops-stars">⭐⭐⭐⭐⭐</div>
              <div className="devops-rating-label">6,895 students rated this course 5 stars!</div>
            </div>
          </div>

          <div className="devops-hero-box">
            <img src={devopslogo}  alt="DevOps Logo" className="devops-logo" />
            <div className="devops-cert-text">Certification Training</div>
            <div className="devops-call-text">
              📞 Have enquiries? Call @ <strong>9884481399</strong>
            </div>
            <button className="devops-enquiry-btn" onClick={() => setShowEnquiry(true)}>
              Enquire Now
            </button>
          </div>
        </div>

        {/* Enquiry Modal */}
        <EnquiryModal show={showEnquiry} onClose={() => setShowEnquiry(false)} />

      </section>

      {/* Topics Section */}
      <section className="devops-interactive-topics">
        <div className="devops-left-content">
          <h2>Explore Our In-Demand Training Tracks</h2>
          <div className="devops-topics-list">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className={`devops-topic-item ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <h3>{topic.title}</h3>
                {activeIndex === idx && (
                  <p className="devops-description">{topic.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>

       <div className="devops-right-image">
      <div className="image-wrapper">
        <img src={topics[activeIndex].image} alt={topics[activeIndex].title} />
      </div>
    </div>

      </section>

    </div>
  );
};

export default DevopsHeroSection;
