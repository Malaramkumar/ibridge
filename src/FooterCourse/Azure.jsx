import React, { useState } from 'react';
import Azure from '../assets/Azure/Azure-logo.jpg';
import './Azure.scss';
import Nar_Header from '../components/Nar_Header';
import EnquiryModal from '../components/EnquiryModal';
import Azure1 from '../assets/Azure/Azure1.png';
import Azure2 from '../assets/Azure/Azure2.png';
import Azure3 from '../assets/Azure/Azure3.png';
import Azure4 from '../assets/Azure/Azure4.png';
import AzureBg from '../assets/Azure/AzureBG.jpg'; // or .png

  const topics = [
  {
    title: 'Azure Compute',
    description:
      'Azure Compute provides on-demand computing services including Virtual Machines (VMs), Azure Functions, and App Services. It supports application hosting, background task automation, and scalable workloads with flexibility and control.',
    image: Azure1, // Replace with your image path
  },
  {
    title: 'Azure Storage',
    description:
      'Azure Storage offers scalable, secure cloud storage for blobs, files, queues, and tables. It ensures high availability and redundancy across regions—ideal for backup, big data lakes, and media hosting needs.',
    image: Azure2,
  },
  {
    title: 'Azure Networking',
    description:
      'Azure Networking includes Virtual Networks, Load Balancers, Azure CDN, and other services to ensure fast and secure communication between resources. It supports hybrid setups, traffic routing, and enterprise-grade firewall protection.',
    image: Azure3,
  },
  {
    title: 'Azure Identity & Access Management (IAM)',
    description:
      'Azure IAM manages users, groups, and access permissions using Azure Active Directory. It enables Single Sign-On (SSO), Multi-Factor Authentication (MFA), and secure access to applications—key for compliance and enterprise security.',
    image: Azure4,
  },
];



const AzureHeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="Azure-main">
        <Nar_Header />
    <section className="Azure">
 
      <div className="Azure-hero">
        <div className="Azure-hero-content-left">
          <h2>Course / Azure Training in Chennai</h2>
          <h1>Azure Training in Chennai</h1>
          <p>
            Are you aiming to break into the world of software development? Narpavi Technologies in Chennai
            offers expert-led Azure training designed to propel you into a lucrative, in-demand tech career.
            Whether you're a fresher or an experienced professional, our meticulously crafted Azure courses
            provide the skills and real-world experience needed to succeed.
          </p>

          <h3 className="Azure-dream-job-text">🚀 Get Your Dream IT Job</h3>

          <div className="Azure-star-rating-box">
            <div className="Azure-stars">⭐⭐⭐⭐⭐</div>
            <div className="Azure-rating-label">6,895 students rated this course 5 stars!</div>
          </div>
        </div>

        <div className="Azure-hero-box">
          <img src={Azure} alt="Azure Logo" className="Azure-logo" />
          <div className="Azure-cert-text">Certification Training</div>
          <div className="Azure-call-text">
            📞 Have enquiries? Call @ <strong>9884481399</strong>
          </div>
          <button className="Azure-enquiry-btn" onClick={() => setShowEnquiry(true)}>
            Enquire Now
          </button>
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal show={showEnquiry} onClose={() => setShowEnquiry(false)} />

    </section>

        <section className="Azure-interactive-topics">
      <div className="Azure-left-content">
        <h2>Explore Our In-Demand Training Tracks</h2>

        <div className="Azure-topics-list">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className={`topic ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <h3>{topic.title}</h3>
              {activeIndex === idx && (
                <p className="Azure-description">{topic.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="Azure-right-image" style={{ backgroundImage: `url(${AzureBg})` }}>
        <div className="Azure-image-overlay">
          <img src={topics[activeIndex].image} alt={topics[activeIndex].title} />
        </div>
      </div>

    </section>
    </div>
  );
};

export default AzureHeroSection;
