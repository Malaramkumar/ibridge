import React, { useState } from 'react';
import aws from '../assets/aws/aws.png';
import './Aws.scss';
import Nar_Header from '../components/Nar_Header';
import EnquiryModal from '../components/EnquiryModal';
import aws1 from '../assets/aws/aws5.png';
import aws2 from '../assets/aws/aws6.png';
import aws3 from '../assets/aws/aws7.png';
import aws4 from '../assets/aws/aws8.png';
import awsBg from '../assets/aws/awsBG.jpg'; // or .png

const topics = [
  {
    title: 'Introduction to AWS',
    description:
      'Amazon Web Services (AWS) is a leading cloud platform offering over 200 on-demand services. It supports everything from web hosting to big data and AI. AWS provides scalable, secure, and cost-effective solutions for individuals and enterprises.',
    image: aws1,
  },
  {
    title: 'Core AWS Services',
    description:
      'AWS includes compute (EC2, Lambda), storage (S3, EBS), databases (RDS, DynamoDB), and networking (VPC, ELB). These services enable flexible app deployment, data management, and global scalability.',
    image: aws2,
  },
  {
    title: 'Security, Compliance & Management',
    description:
      'AWS offers advanced security through IAM, encryption, and threat protection like AWS Shield. It complies with global standards like ISO, HIPAA, and GDPR. Monitoring tools like CloudWatch and CloudTrail ensure transparency and control.',
    image: aws3,
  },
  {
    title: 'AWS Certifications & Careers',
    description:
      'AWS certifications validate cloud skills and boost job prospects in IT and DevOps. They range from foundational to specialty roles like Architect or Security Engineer. Globally recognized, they open doors to high-demand cloud careers.',
    image: aws4,
  },
];


const AwsHeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="aws-main">
        <Nar_Header />
    <section className="aws">
 
      <div className="aws-hero">
        <div className="aws-hero-content-left">
          <h2>Course / Aws Training in Chennai</h2>
          <h1>AWS Training in Chennai</h1>
          <p>
            Are you aiming to break into the world of software development? Narpavi Technologies in Chennai
            offers expert-led AWS training designed to propel you into a lucrative, in-demand tech career.
            Whether you're a fresher or an experienced professional, our meticulously crafted AWS courses
            provide the skills and real-world experience needed to succeed.
          </p>

          <h3 className="aws-dream-job-text">🚀 Get Your Dream IT Job</h3>

          <div className="aws-star-rating-box">
            <div className="aws-stars">⭐⭐⭐⭐⭐</div>
            <div className="aws-rating-label">6,895 students rated this course 5 stars!</div>
          </div>
        </div>

        <div className="aws-hero-box">
          <img src={aws} alt="AWS Logo" className="aws-logo" />
          <div className="aws-cert-text">Certification Training</div>
          <div className="aws-call-text">
            📞 Have enquiries? Call @ <strong>9884481399</strong>
          </div>
          <button className="aws-enquiry-btn" onClick={() => setShowEnquiry(true)}>
            Enquire Now
          </button>
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal show={showEnquiry} onClose={() => setShowEnquiry(false)} />

    </section>

        <section className="aws-interactive-topics">
      <div className="aws-left-content">
        <h2>Explore Our In-Demand Training Tracks</h2>

        <div className="aws-topics-list">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className={`topic ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <h3>{topic.title}</h3>
              {activeIndex === idx && (
                <p className="aws-description">{topic.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="aws-right-image" style={{ backgroundImage: `url(${awsBg})` }}>
        <div className="aws-image-overlay">
          <img src={topics[activeIndex].image} alt={topics[activeIndex].title} />
        </div>
      </div>

    </section>
    </div>
  );
};

export default AwsHeroSection;
