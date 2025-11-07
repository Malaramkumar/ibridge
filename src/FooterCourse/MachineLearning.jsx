import React, { useState } from 'react';
import MachineLearning from '../assets/ML/ML-logo.png';
import './MachineLearning.scss';
import Nar_Header from '../components/Nar_Header';
import EnquiryModal from '../components/EnquiryModal';
import MachineLearning1 from '../assets/ML/ML1.png';
import MachineLearning2 from '../assets/ML/ML2.png';
import MachineLearning3 from '../assets/ML/ML3.png';
import MachineLearning4 from '../assets/ML/ML4.png';
import MachineLearningBg from '../assets/ML/ML-bg.jpg'; 
const topics = [
  {
    title: 'Introduction to Machine Learning',
    description:
      'Machine Learning (ML) is a branch of AI that enables computers to learn from data without explicit programming. It helps build systems that can improve over time, driving technologies like chatbots, image recognition, and recommendations.',
    image: MachineLearning1, // replace with your image path
  },
  {
    title: 'Core Concepts & Tools',
    description:
      'ML techniques include supervised, unsupervised, and reinforcement learning. Key tools and libraries include Python, Scikit-learn, TensorFlow, Keras, and PyTorch. Preprocessing, feature engineering, and evaluation are vital steps in model development.',
    image: MachineLearning2,
  },
  {
    title: 'Applications & Advantages',
    description:
      'ML is widely used in industries like healthcare (disease prediction), finance (fraud detection), and marketing (customer segmentation). It enables real-time decisions, automation, and discovery of deep insights from massive datasets.',
    image: MachineLearning3,
  },
  {
    title: 'Careers & Certifications',
    description:
      'Career paths include ML Engineer, Data Scientist, and AI Researcher. Certifications such as Google ML Crash Course, AWS ML Specialty, and IBM AI Engineering boost credentials in the high-demand AI and data science job market.',
    image: MachineLearning4,
  },
];



const MachineLearningHeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="MachineLearning-main">
        <Nar_Header />
    <section className="MachineLearning">
 
      <div className="MachineLearning-hero">
        <div className="MachineLearning-hero-content-left">
          <h2>Course / MachineLearning Training in Chennai</h2>
          <h1>MachineLearning Training in Chennai</h1>
          <p>
            Are you aiming to break into the world of software development? Narpavi Technologies in Chennai
            offers expert-led MachineLearning training designed to propel you into a lucrative, in-demand tech career.
            Whether you're a fresher or an experienced professional, our meticulously crafted MachineLearning courses
            provide the skills and real-world experience needed to succeed.
          </p>

          <h3 className="MachineLearning-dream-job-text">🚀 Get Your Dream IT Job</h3>

          <div className="MachineLearning-star-rating-box">
            <div className="MachineLearning-stars">⭐⭐⭐⭐⭐</div>
            <div className="MachineLearning-rating-label">6,895 students rated this course 5 stars!</div>
          </div>
        </div>

        <div className="MachineLearning-hero-box">
          <img src={MachineLearning} alt="MachineLearning Logo" className="MachineLearning-logo" />
          <div className="MachineLearning-cert-text">Certification Training</div>
          <div className="MachineLearning-call-text">
            📞 Have enquiries? Call @ <strong>9884481399</strong>
          </div>
          <button className="MachineLearning-enquiry-btn" onClick={() => setShowEnquiry(true)}>
            Enquire Now
          </button>
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal show={showEnquiry} onClose={() => setShowEnquiry(false)} />

    </section>

        <section className="MachineLearning-interactive-topics">
      <div className="MachineLearning-left-content">
        <h2>Explore Our In-Demand Training Tracks</h2>

        <div className="MachineLearning-topics-list">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className={`topic ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <h3>{topic.title}</h3>
              {activeIndex === idx && (
                <p className="MachineLearning-description">{topic.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="MachineLearning-right-image" style={{ backgroundImage: `url(${MachineLearningBg})` }}>
        <div className="MachineLearning-image-overlay">
          <img src={topics[activeIndex].image} alt={topics[activeIndex].title} />
        </div>
      </div>

    </section>
    </div>
  );
};

export default MachineLearningHeroSection;
