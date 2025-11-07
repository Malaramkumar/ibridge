import React, { useState } from 'react';
import './Cloud.scss';
import Nar_Header from '../components/Nar_Header';
import EnquiryModal from '../components/EnquiryModal';
import Cloud1 from '../assets/Cloud/Cloud1.jpg';
import Cloud2 from '../assets/Cloud/Cloud2.jpg';
import Cloud3 from '../assets/Cloud/Cloud3.jpg';
import Cloud4 from '../assets/Cloud/Cloud4.jpg';
import Cloudlogo from '../assets/Cloud/Cloud-logo.jpg';

const topics = [
  {
    title: 'Introduction to Cloud Computing',
    content:
      'Cloud computing delivers computing services like servers, storage, databases, networking, and software over the internet. It offers flexible resources, faster innovation, and economies of scale. Users only pay for what they use, reducing infrastructure costs.',
    image: Cloud1,
  },
  {
    title: 'Types & Deployment Models',
    content:
      'Cloud computing is categorized into IaaS, PaaS, and SaaS. Deployment models include Public Cloud, Private Cloud, and Hybrid Cloud. These models offer different levels of control, security, and management depending on business needs.',
    image: Cloud2,
  },
  {
    title: 'Key Providers & Services',
    content:
      'Major cloud providers are AWS, Microsoft Azure, and Google Cloud. Services include virtual machines, object storage, serverless computing, AI tools, and DevOps pipelines. These enable scalable application development and deployment across the globe.',
    image: Cloud3,
  },
  {
    title: 'Careers & Certifications in Cloud',
    content:
      'Cloud roles include Cloud Engineer, DevOps Engineer, Solutions Architect, and Security Specialist. In-demand certifications: AWS Certified Solutions Architect, Microsoft Azure Fundamentals, Google Cloud Associate Engineer. Cloud skills are highly sought after in the tech industry.',
    image: Cloud4,
  },
];


const CloudHeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="Cloud-main">
      <Nar_Header />
      <section className="Cloud">
        <div className="Cloud-hero">
          <div className="Cloud-hero-content-left">
            <h2>Course / Cloudelopment Training in Chennai</h2>
            <h1>Cloudelopment Training in Chennai</h1>
            <p>
              Are you aiming to break into the world of software development? Narpavi Technologies in Chennai
              offers expert-led Cloud training designed to propel you into a lucrative, in-demand tech career.
              Whether you're a fresher or an experienced professional, our meticulously crafted Cloud courses
              provide the skills and real-world experience needed to succeed.
            </p>
            <h3 className="Cloud-dream-job-text">🚀 Get Your Dream IT Job</h3>
            <div className="Cloud-star-rating-box">
              <div className="Cloud-stars">⭐⭐⭐⭐⭐</div>
              <div className="Cloud-rating-label">6,895 students rated this course 5 stars!</div>
            </div>
          </div>

          <div className="Cloud-hero-box">
            <img src={Cloudlogo}  alt="Cloud Logo" className="Cloud-logo" />
            <div className="Cloud-cert-text">Certification Training</div>
            <div className="Cloud-call-text">
              📞 Have enquiries? Call @ <strong>9884481399</strong>
            </div>
            <button className="Cloud-enquiry-btn" onClick={() => setShowEnquiry(true)}>
              Enquire Now
            </button>
          </div>
        </div>

        {/* Enquiry Modal */}
        <EnquiryModal show={showEnquiry} onClose={() => setShowEnquiry(false)} />

      </section>

      {/* Topics Section */}
      <section className="Cloud-interactive-topics">
        <div className="Cloud-left-content">
          <h2>Explore Our In-Demand Training Tracks</h2>
          <div className="Cloud-topics-list">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className={`Cloud-topic-item ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <h3>{topic.title}</h3>
                {activeIndex === idx && (
                  <p className="Cloud-description">{topic.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>

       <div className="Cloud-right-image">
      <div className="image-wrapper">
        <img src={topics[activeIndex].image} alt={topics[activeIndex].title} />
      </div>
    </div>
      </section>
    </div>
  );
};

export default CloudHeroSection;
