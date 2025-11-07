import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './UpcomingBatches.scss';
import EnquiryModal from '../components/EnquiryModal';

const batches = [
  { date: '2025-06-19', type: 'Weekdays', days: 'Thursday (Monday - Friday)' },
  { date: '2025-06-21', type: 'Weekend', days: 'Saturday (Saturday - Sunday)' },
  { date: '2025-06-23', type: 'Weekdays', days: 'Monday (Monday - Friday)' },
  { date: '2025-06-26', type: 'Weekdays', days: 'Thursday (Monday - Friday)' },
];

const UpcomingBatches = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Upcoming Java Course Batches",
    "description": "Narpavi Technologies – Upcoming Java batches with flexible schedules, live online and classroom options.",
    "itemListElement": batches.map((batch, index) => ({
      "@type": "Event",
      "name": `Java ${batch.type} Batch`,
      "startDate": batch.date,
      "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": "Narpavi Technologies, Chennai",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressRegion": "TN",
          "addressCountry": "IN"
        }
      },
      "description": `Join our ${batch.type} batch starting ${batch.date}. Sessions held on ${batch.days}.`,
      "url": "https://www.narpavitech.com/java-course-chennai",
      "position": index + 1
    }))
  };

  const openEnquiryModal = () => setShowEnquiry(true);

  return (
    <div id="upcoming-batches-section" className="upcoming-batches-container">
      <Helmet>
        <title>Upcoming Java Batches - Narpavi Technologies Chennai</title>
        <meta
          name="description"
          content="Explore the latest upcoming Java training batches in Chennai at Narpavi Technologies. Choose classroom or online options with weekday/weekend flexibility."
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <h2 className="heading">Upcoming Batches</h2>

      <div className="batches-table">
        {batches.map((batch, idx) => (
          <div key={idx} className="batch-row">
            <div className="cell">{batch.date}</div>
            <div className="cell">{batch.type}</div>
            <div className="cell">{batch.days}</div>
            <div className="cell buttons">
              <button className="fees-btn" onClick={openEnquiryModal}>COURSE FEES</button>
              <button className="availability-btn" onClick={openEnquiryModal}>CHECK AVAILABILITY</button>
            </div>
          </div>
        ))}
      </div>

      <div className="custom-batch">
        <img src="https://cdn-icons-png.flaticon.com/512/747/747310.png" alt="calendar" />
        <button className="custom-batch-btn" onClick={openEnquiryModal}>
          REQUEST A CUSTOM BATCH
        </button>
      </div>

      <div className="training-options">
        <div className="training-box">
          <h3>Classroom Training</h3>
          <ul>
            <li>Get trained by Industry Experts via Classroom Training at any Narpavi branch near you</li>
            <li>Why Wait? Jump Start your Career by taking the Java Training in Chennai!</li>
          </ul>
          <button className="enquire-btn" onClick={openEnquiryModal}>ENQUIRE NOW</button>
        </div>

        <div className="training-box">
          <h3>Instructor-Led Live Online Training</h3>
          <ul>
            <li>Take-up Instructor-led Live Online Training. Get the Recorded Videos of each session.</li>
            <li>Travelling is a Constraint? Jump Start your Career by taking the <strong>Java Online Course!</strong></li>
          </ul>
          <button className="enquire-btn" onClick={openEnquiryModal}>ENQUIRE NOW</button>
        </div>
      </div>

      <EnquiryModal show={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </div>
  );
};

export default UpcomingBatches;
