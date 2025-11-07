import React, { useState } from 'react';
import DotNet from '../assets/DotNet/DotNet.png';
import './DotNet.scss';
import Nar_Header from '../components/Nar_Header';
import EnquiryModal from '../components/EnquiryModal';
import DotNet1 from '../assets/DotNet/dotnet1.jpg';
import DotNet2 from '../assets/DotNet/dotnet2.jpg';
import DotNet3 from '../assets/DotNet/dotnet3.jpg';
import DotNet4 from '../assets/DotNet/dotnet4.jpg';
import DotNetBg from '../assets/DotNet/DotNetBG.png'; // or .png

const topics = [
  {
    title: 'Introduction to .NET Framework & .NET Core',
    description:
      '.NET is a Microsoft-developed open-source framework used to build scalable web, desktop, and mobile applications. It supports multiple languages like C#, F#, and VB.NET. The evolution to .NET Core and now .NET 6+ enables cross-platform development with improved performance and flexibility.',
    image: DotNet1,
  },
  {
    title: 'Core .NET Technologies',
    description:
      '.NET supports MVC architecture, Razor Pages, Web APIs, and advanced features like Dependency Injection and Entity Framework for ORM. It integrates seamlessly with front-end libraries, databases, and cloud platforms, making it ideal for full-stack enterprise applications.',
    image: DotNet2,
  },
  {
    title: 'Security, Testing & Performance',
    description:
      'The .NET platform ensures application security using authentication, authorization, and secure coding practices. Testing frameworks like MSTest and xUnit are widely used. Performance enhancements through asynchronous programming, caching, and dependency injection make .NET applications robust and scalable.',
    image: DotNet3,
  },
  {
    title: '.NET Certifications & Career Path',
    description:
      '.NET professionals are in high demand in enterprise software development. Certifications like Microsoft Certified: .NET Developer and Azure Developer Associate validate your expertise. Career roles include .NET Developer, Full Stack Engineer, and Software Architect.',
    image: DotNet4,
  },
];


const DotNetHeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="DotNet-main">
        <Nar_Header />
    <section className="DotNet">
 
      <div className="DotNet-hero">
        <div className="DotNet-hero-content-left">
          <h2>Course / DotNet Training in Chennai</h2>
          <h1>DotNet Training in Chennai</h1>
          <p>
            Are you aiming to break into the world of software development? Narpavi Technologies in Chennai
            offers expert-led DotNet training designed to propel you into a lucrative, in-demand tech career.
            Whether you're a fresher or an experienced professional, our meticulously crafted DotNet courses
            provide the skills and real-world experience needed to succeed.
          </p>

          <h3 className="DotNet-dream-job-text">🚀 Get Your Dream IT Job</h3>

          <div className="DotNet-star-rating-box">
            <div className="DotNet-stars">⭐⭐⭐⭐⭐</div>
            <div className="DotNet-rating-label">6,895 students rated this course 5 stars!</div>
          </div>
        </div>

        <div className="DotNet-hero-box">
          <img src={DotNet} alt="DotNet Logo" className="DotNet-logo" />
          <div className="DotNet-cert-text">Certification Training</div>
          <div className="DotNet-call-text">
            📞 Have enquiries? Call @ <strong>9884481399</strong>
          </div>
          <button className="DotNet-enquiry-btn" onClick={() => setShowEnquiry(true)}>
            Enquire Now
          </button>
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal show={showEnquiry} onClose={() => setShowEnquiry(false)} />

    </section>

        <section className="DotNet-interactive-topics">
      <div className="DotNet-left-content">
        <h2>Explore Our In-Demand Training Tracks</h2>

        <div className="DotNet-topics-list">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className={`topic ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <h3>{topic.title}</h3>
              {activeIndex === idx && (
                <p className="DotNet-description">{topic.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="DotNet-right-image" style={{ backgroundImage: `url(${DotNetBg})` }}>
        <div className="DotNet-image-overlay">
          <img src={topics[activeIndex].image} alt={topics[activeIndex].title} />
        </div>
      </div>

    </section>
    </div>
  );
};

export default DotNetHeroSection;
