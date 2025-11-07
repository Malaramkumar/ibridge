import React, { useState } from 'react';
import EnquiryModal from './EnquiryModal';
import './Home_Page.scss';
import javalogo from '../assets/java-logo.png';
import BottomSectionMenu from './BottomSectionMenu';
import EnhancedPosterSection from './EnhancedPosterSection';
import { Helmet } from 'react-helmet';
import Header from './Nar_Header';
import InteractiveTopics from './InteractiveTopics';
import CourseHighlights from '../pages/CourseHighlights';
import UpcomingBatches from '../pages/UpcomingBatches';
import FaqSection from '../pages/FaqSection';
import JavaObjectivesWithEnquiry from '../pages/JavaObjectivesWithEnquiry';
import InteractiveSyllabus from '../pages/InteractiveSyllabus';
import TrainerProfile from '../pages/TrainerProfile';
import Testimonials from '../pages/Testimonials';
import CertificationSection from '../pages/CertificationSection';
import SuccessStories from '../pages/SuccessStories';
import CallToAction from './CallToAction';



const Home = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who can join this Java course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Freshers, graduates, and working professionals who want to build a career in Java development can join this course."
        }
      },
      {
        "@type": "Question",
        "name": "Does the course include placement support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Narpavi Technologies offers 100% placement assistance including resume preparation, mock interviews, and job referrals."
        }
      },
      {
        "@type": "Question",
        "name": "What will I learn in this Java course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You will learn Core Java, OOPs, Collections, Exception Handling, JDBC, and more with hands-on projects and real-world applications."
        }
      }
    ]
  };

  return (
    <div className="home-page">
      <Header />
      <Helmet>
        <title>Core Java Training in Chennai | Ranmars-iBridge</title>
        <meta name="description" content="Join the best Core Java course in Chennai at Narpavi Technologies. Learn Java from scratch with certification, real-time projects & placement support." />
        <meta name="keywords" content="Core Java Course Chennai, Java Training in Chennai, Java Certification, Java Classes, Java with Placement" />
        <meta property="og:title" content="Core Java Training in Chennai with Placement" />
        <meta property="og:description" content="Kickstart your software career with our hands-on Core Java training in Chennai. Classroom & online options available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.narpavitech.in/java-core-course" />
        <meta property="og:image" content="https://www.narpavitech.in/assets/java-og.jpg" />
        <link rel="canonical" href="https://www.narpavitech.in/java-core-course" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Core Java Training in Chennai",
            "description": "Learn Core Java from industry experts at Narpavi Technologies. Get hands-on training, certification prep, and placement support.",
            "provider": {
              "@type": "Organization",
              "name": "Narpavi Technologies",
              "sameAs": "https://www.narpavitech.in"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Narpavi Technologies",
            "url": "https://www.narpavitech.in",
            "logo": "https://www.narpavitech.in/logo.png",
            "sameAs": [
              "https://www.facebook.com/narpavitech",
              "https://www.linkedin.com/company/narpavi-technologies"
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="hero">
          <div className="hero-content-left">
            <h2>Course / Java Training in Chennai</h2>
            <h1>Java Training in Chennai</h1>
            <p>
              Are you aiming to break into the world of software development? Narpavi Technologies in Chennai
              offers expert-led Java training designed to propel you into a lucrative, in-demand tech career.
              Whether you're a fresher or an experienced professional, our meticulously crafted Java courses
              provide the skills and real-world experience needed to succeed.
            </p>

            <h3 className="dream-job-text">🚀 Get Your Dream IT Job</h3>

            <div className="star-rating-box">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <div className="rating-label">6895 ratings lead</div>
            </div>
          </div>

          <div className="hero-box">
            <img src={javalogo} alt="Java Logo" className="java-logo" />
            <div className="cert-text">Certification Training</div>
            <div className="call-text">📞 Have enquiries? Call @ <strong>9884481399</strong></div>
            <button className="enquiry-btn" onClick={() => setShowEnquiry(true)}>Enquiry Now</button>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="narpavi-showcase">
        <div className="narpavi-content">
          <h1>On-Demand Industry Authority as Trainers</h1>
          <p>Professional Growth Bootcamps</p>
          <p>Supported by a Global Alumni Network of 100,000+</p>
          <p>Continuous Career Guidance Until You Achieve Your Employment Goals</p>
          <p>Zero-Cost Resume Refinement & Aptitude Skill Development</p>

          <div className="feature-box">
            <h3>🚀 Accelerate Your Tech Career with Premier Java Training in Chennai at Narpavi Technologies</h3>
            <p>
              Are you ready to transform your career and step into the world of high-paying tech opportunities?
              At Narpavi Technologies, Chennai's leading Java training institute, we offer a comprehensive, industry-aligned curriculum
              designed to equip you with cutting-edge skills and hands-on experience. Our dynamic Java course begins with foundational concepts:
              Data Types, Variables, Methods, Classes, Objects, Collections, Core OOPS Principles.
            </p>
          </div>

          <div className="side-features">
            <div className="side-feature">🤖 <strong>AI-Powered Tools</strong><br /> Automate processes with smart algorithms and intelligent suggestions.</div>
            <div className="side-feature">☁️ <strong>Secure Cloud Infrastructure</strong><br /> Launch with confidence on robust, scalable architecture.</div>
            <div className="side-feature">📊 <strong>Real-Time Analytics</strong><br /> Monitor, measure, and optimize with live dashboards and performance tracking.</div>
          </div>
        </div>
      </section>

      <BottomSectionMenu />
      <EnhancedPosterSection />
      <EnquiryModal show={showEnquiry} onClose={() => setShowEnquiry(false)} />
      <CourseHighlights />
      <UpcomingBatches />
      <InteractiveSyllabus />
      <InteractiveTopics />
      <JavaObjectivesWithEnquiry />
      <TrainerProfile />  
      <CertificationSection />
      <Testimonials />  
      <SuccessStories />  
      <FaqSection />
      <CallToAction />
   
    </div>
  );
};

export default Home;
