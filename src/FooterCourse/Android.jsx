import React, { useState } from 'react';
import './Android.scss';
import Nar_Header from '../components/Nar_Header';
import EnquiryModal from '../components/EnquiryModal';
import Android1 from '../assets/Android/Android1.jpg';
import Android2 from '../assets/Android/Android2.jpg';
import Android3 from '../assets/Android/Android3.jpg';
import Android4 from '../assets/Android/Android4.jpg';
import Androidlogo from '../assets/Android/Android-logo.png';

const topics = [
  {
    title: 'Introduction to Android Development',
    content:
      'Android is the most popular mobile operating system globally, powering billions of devices. Android development uses Java or Kotlin to build responsive, user-friendly mobile apps. Developers use Android Studio as the primary IDE with powerful debugging and UI design tools.',
    image: Android1,
  },
  {
    title: 'Core Android Components & Architecture',
    content:
      'Key Android components include Activities, Fragments, Services, Broadcast Receivers, and Content Providers. Modern Android apps follow MVVM architecture, using Jetpack libraries like LiveData, ViewModel, and Room for structured development.',
    image: Android2,
  },
  {
    title: 'UI/UX, APIs & Play Store Deployment',
    content:
      'Android apps use XML for layouts and support Material Design for a polished UI. Developers integrate RESTful APIs, use Firebase for real-time features, and test apps with Android Emulator. Final apps are signed and deployed on the Google Play Store.',
    image: Android3,
  },
  {
    title: 'Careers & Android Certifications',
    content:
      'Android Developers are in demand across startups and enterprises. Roles include Android App Developer, Mobile Engineer, and Kotlin Developer. Top certifications: Google Associate Android Developer, Udacity Android Nanodegree. Skills in Kotlin, Jetpack, and Firebase boost career opportunities.',
    image: Android4,
  },
];

const AndroidHeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="Android-main">
      <Nar_Header />
      <section className="Android">
        <div className="Android-hero">
          <div className="Android-hero-content-left">
            <h2>Course / Android Training in Chennai</h2>
            <h1>Android Training in Chennai</h1>
            <p>
              Are you aiming to break into the world of software development? Narpavi Technologies in Chennai
              offers expert-led Android training designed to propel you into a lucrative, in-demand tech career.
              Whether you're a fresher or an experienced professional, our meticulously crafted Android courses
              provide the skills and real-world experience needed to succeed.
            </p>
            <h3 className="Android-dream-job-text">🚀 Get Your Dream IT Job</h3>
            <div className="Android-star-rating-box">
              <div className="Android-stars">⭐⭐⭐⭐⭐</div>
              <div className="Android-rating-label">6,895 students rated this course 5 stars!</div>
            </div>
          </div>

          <div className="Android-hero-box">
            <img src={Androidlogo}  alt="Android Logo" className="Android-logo" />
            <div className="Android-cert-text">Certification Training</div>
            <div className="Android-call-text">
              📞 Have enquiries? Call @ <strong>9884481399</strong>
            </div>
            <button className="Android-enquiry-btn" onClick={() => setShowEnquiry(true)}>
              Enquire Now
            </button>
          </div>
        </div>

        {/* Enquiry Modal */}
        <EnquiryModal show={showEnquiry} onClose={() => setShowEnquiry(false)} />

      </section>

      {/* Topics Section */}
      <section className="Android-interactive-topics">
        <div className="Android-left-content">
          <h2>Explore Our In-Demand Training Tracks</h2>
          <div className="Android-topics-list">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className={`Android-topic-item ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <h3>{topic.title}</h3>
                {activeIndex === idx && (
                  <p className="Android-description">{topic.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>

       <div className="Android-right-image">
      <div className="image-wrapper">
        <img src={topics[activeIndex].image} alt={topics[activeIndex].title} />
      </div>
    </div>
      </section>

      
    </div>
  );
};

export default AndroidHeroSection;
