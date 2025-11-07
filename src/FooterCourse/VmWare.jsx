import React, { useState } from 'react';
import './VmWare.scss';
import Nar_Header from '../components/Nar_Header';
import Footer from '../components/Footer';

import VmWare1 from '../assets/VmWare/VmWare1.jpg';
import VmWare2 from '../assets/VmWare/VmWare2.jpg';
import VmWare3 from '../assets/VmWare/VmWare3.jpg';
import VmWare4 from '../assets/VmWare/VmWare4.jpg';
import VmWarelogo from '../assets/VmWare/VmWare-logo.png';

const topics = [
  {
    title: 'Introduction to VMware & Virtualization',
    content:
      'VMware is a global leader in cloud infrastructure and digital workspace technology. It enables virtualization—running multiple operating systems on a single physical machine—improving hardware efficiency, scalability, and isolation.',
    image: vmware1,
  },
  {
    title: 'Core VMware Products & Architecture',
    content:
      'Key VMware products include vSphere (server virtualization), ESXi (hypervisor), vCenter Server (centralized management), and Workstation/Player (desktop virtualization). These tools enable powerful virtualization and infrastructure automation.',
    image: vmware2,
  },
  {
    title: 'Networking, Storage & Security',
    content:
      'VMware offers advanced networking through NSX, storage solutions like vSAN, and robust security with features like micro-segmentation. Administrators configure virtual networks, manage storage clusters, and enforce policies to ensure data protection.',
    image: vmware3,
  },
  {
    title: 'VMware Certifications & Career Paths',
    content:
      'VMware certifications like VCTA, VCP, and VCAP validate your virtualization and cloud management skills. Career roles include VMware Administrator, Cloud Engineer, and Infrastructure Architect. These are in high demand across enterprise IT environments.',
    image: vmware4,
  },
];

const VmWareHeroSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="VmWare-main">
      <Nar_Header />
      <section className="VmWare">
        <div className="VmWare-hero">
          <div className="VmWare-hero-content-left">
            <h2>Course / VmWareelopment Training in Chennai</h2>
            <h1>VmWareelopment Training in Chennai</h1>
            <p>
              Are you aiming to break into the world of software development? Narpavi Technologies in Chennai
              offers expert-led VmWare training designed to propel you into a lucrative, in-demand tech career.
              Whether you're a fresher or an experienced professional, our meticulously crafted VmWare courses
              provide the skills and real-world experience needed to succeed.
            </p>
            <h3 className="VmWare-dream-job-text">🚀 Get Your Dream IT Job</h3>
            <div className="VmWare-star-rating-box">
              <div className="VmWare-stars">⭐⭐⭐⭐⭐</div>
              <div className="VmWare-rating-label">6,895 students rated this course 5 stars!</div>
            </div>
          </div>

          <div className="VmWare-hero-box">
            <img src={VmWarelogo}  alt="VmWare Logo" className="VmWare-logo" />
            <div className="VmWare-cert-text">Certification Training</div>
            <div className="VmWare-call-text">
              📞 Have enquiries? Call @ <strong>9884481399</strong>
            </div>
            <button className="VmWare-enquiry-btn" onClick={() => setShowEnquiry(true)}>
              Enquire Now
            </button>
          </div>
        </div>

        {/* Enquiry Modal */}
        {showEnquiry && (
          <div className="VmWare-enquiry-modal">
            <div className="VmWare-enquiry-content">
              <h2>Enquiry Form</h2>
              <p>Please contact us at <strong>9884481399</strong> or email us for further assistance.</p>
              <button className="VmWare-close-btn" onClick={() => setShowEnquiry(false)}>Close</button>
            </div>
          </div>
        )}
      </section>

      {/* Topics Section */}
      <section className="VmWare-interactive-topics">
        <div className="VmWare-left-content">
          <h2>Explore Our In-Demand Training Tracks</h2>
          <div className="VmWare-topics-list">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className={`VmWare-topic-item ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <h3>{topic.title}</h3>
                {activeIndex === idx && (
                  <p className="VmWare-description">{topic.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>

       <div className="VmWare-right-image">
      <div className="image-wrapper">
        <img src={topics[activeIndex].image} alt={topics[activeIndex].title} />
      </div>
    </div>
      </section>

      <Footer />
    </div>
  );
};

export default VmWareHeroSection;
