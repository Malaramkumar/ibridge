import React, { useState } from 'react';
import ai from '../assets/ai/ai-logo.jpg';
import './AI.scss';
import Nar_Header from '../components/Nar_Header';
import EnquiryModal from '../components/EnquiryModal'; // ✅ Import EnquiryModal

import ai1 from '../assets/ai/ai1.png';
import ai2 from '../assets/ai/ai2.png';
import ai3 from '../assets/ai/ai3.png';
import ai4 from '../assets/ai/ai4.png';
import aiBg from '../assets/ai/aiBG.jpg';

const topics = [
  {
    title: 'Introduction to AI',
    description:
      'Artificial Intelligence (AI) simulates human intelligence in machines, enabling them to reason, learn, and make decisions. It powers innovations like self-driving cars, virtual assistants, and robotics by allowing systems to perceive and act intelligently.',
    image: ai1,
  },
  {
    title: 'Core Areas & Technologies',
    description:
      'AI includes domains like Machine Learning, Natural Language Processing (NLP), Computer Vision, and Expert Systems. Popular tools include Python, TensorFlow, OpenAI, spaCy, and PyTorch. These systems rely on large datasets and neural networks.',
    image: ai2,
  },
  {
    title: 'Applications & Impact',
    description:
      'AI is used in healthcare diagnostics, autonomous vehicles, chatbots, fraud detection, and recommendation engines. It enhances automation, personalization, and prediction, transforming businesses and how people interact with technology.',
    image: ai3,
  },
  {
    title: 'Careers & Certifications',
    description:
      'AI careers include AI Engineer, NLP Engineer, Robotics Engineer, and Research Scientist. Leading certifications include IBM AI Engineering, Microsoft Azure AI Engineer, and Stanford AI courses, offering high-paying, in-demand opportunities.',
    image: ai4,
  },
];

const AiHeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="ai-main">
      <Nar_Header />
      <section className="ai">
        <div className="ai-hero">
          <div className="ai-hero-content-left">
            <h2>Course / AI Training in Chennai</h2>
            <h1>AI Training in Chennai</h1>
            <p>
              Are you aiming to break into the world of software development? Narpavi Technologies in Chennai
              offers expert-led AI training designed to propel you into a lucrative, in-demand tech career.
              Whether you're a fresher or an experienced professional, our meticulously crafted AI courses
              provide the skills and real-world experience needed to succeed.
            </p>

            <h3 className="ai-dream-job-text">🚀 Get Your Dream IT Job</h3>

            <div className="ai-star-rating-box">
              <div className="ai-stars">⭐⭐⭐⭐⭐</div>
              <div className="ai-rating-label">6,895 students rated this course 5 stars!</div>
            </div>
          </div>

          <div className="ai-hero-box">
            <img src={ai} alt="AI Logo" className="ai-logo" />
            <div className="ai-cert-text">Certification Training</div>
            <div className="ai-call-text">
              📞 Have enquiries? Call @ <strong>9884481399</strong>
            </div>
            <button className="ai-enquiry-btn" onClick={() => setShowEnquiry(true)}>
              Enquire Now
            </button>
          </div>
        </div>
      </section>

      <section className="ai-interactive-topics">
        <div className="ai-left-content">
          <h2>Explore Our In-Demand Training Tracks</h2>

          <div className="ai-topics-list">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className={`topic ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <h3>{topic.title}</h3>
                {activeIndex === idx && (
                  <p className="ai-description">{topic.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="ai-right-image1" style={{ backgroundImage: `url(${aiBg})` }}>
          <div className="ai-image-overlay">
            <img src={topics[activeIndex].image} alt={topics[activeIndex].title} />
          </div>
        </div>
      </section>

      {/* ✅ Enquiry Modal Component */}
      <EnquiryModal show={showEnquiry} onClose={() => setShowEnquiry(false)} />

    </div>
  );
};

export default AiHeroSection;
