import React from 'react';
import { Helmet } from 'react-helmet';
import './FaqSection.scss';
 

const faqs = [
  {
    question: "Who can enroll in the Core Java Online Training at Narpavi Technologies?",
    answer: "Anyone interested in building a career in software development can join — freshers, students, working professionals, and anyone wanting to master Java programming.",
  },
  {
    question: "Do I need prior programming knowledge to join this course?",
    answer: "No prior experience is required. We start from the basics and guide you step-by-step to advanced concepts, making it suitable for beginners.",
  },
  {
    question: "Will I get hands-on project experience?",
    answer: "Yes, we provide real-time project training to ensure you gain practical, industry-level coding experience.",
  },
  {
    question: "Do you offer placement support?",
    answer: "Absolutely! Our placement team offers resume building, interview preparation, job referrals, and connects you with top MNCs.",
  },
  {
    question: "Are your trainers industry-experienced?",
    answer: "Yes, all our trainers have 7+ years of experience and currently work with top companies like TCS, HCL, ZOHO, IBM, Microsoft, etc.",
  },
];

// Structured data for SEO
const generateFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
};

const FaqSection = () => {
  return (
    <div className="faq-section" id="faq">
      {/* SEO Meta and FAQ JSON-LD */}
      <Helmet>
        <title>Narpavi Tech</title>
        <meta name="description" content="Explore frequently asked questions about Java training at Narpavi Technologies. Learn about placement, trainer experience, projects & more." />
        <script type="application/ld+json">{JSON.stringify(generateFAQSchema())}</script>
      </Helmet>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <details key={index} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
      
    </div>
  );
};

export default FaqSection;
