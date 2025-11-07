import React from 'react';
import  { useState } from "react";
import './IBridgeAdvantage.scss';

const IBridgeAdvantage = () => {
const faqs = [
    {
      question: "What makes the iBridge program different from conventional training?",
      answer:
        "Unlike short-term courses that focus on a single technology, the iBridge program is a two-year integrated journey that covers multiple domains, hands-on ICAP projects, and industry-expert-led training. It runs parallel to graduation, giving students an early career advantage."
    },
    {
      question: "Which technologies are covered in the iBridge program?",
      answer:
        "Students gain expertise in Front-End (HTML5, CSS3, JavaScript, React), Back-End (Node.js, PHP, .NET, MySQL, MongoDB), Mobile Development (Android Studio, Cross-Platform Apps), Cloud & DevOps (CI/CD, Deployment, Cloud Integration), and Specialized areas like SEO, Cybersecurity, UI/UX, Database Management, and Quality Assurance."
    },
    {
      question: "Who are the trainers in the iBridge program?",
      answer:
        "All training is conducted by industry experts with years of real-world experience. They provide practical insights, case studies, live project exposure, and industry best practices rather than just theoretical knowledge."
    },
    {
      question: "What are ICAP projects in the iBridge program?",
      answer:
        "ICAP (iBridge Capstone Application Projects) are real-world projects completed at the end of each stage. They ensure deeper knowledge retention, practical application of skills, and a strong portfolio to showcase to employers."
    },
    {
      question: "What career opportunities does the iBridge program prepare me for?",
      answer:
        "Graduates can pursue careers in software development, web development, mobile app development, cybersecurity, cloud computing, DevOps, database management, UI/UX design, SEO, quality assurance, and even entrepreneurship."
    }
  ];

const [activeIndex, setActiveIndex] = useState(null);
const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <div className='ibridge1-main'>
    <div className="advantage-container">
      <header className="advantage-header">
        <h1>🌟 iBridge Advantage: Unified Learning. Multi-Technology Skills. Real-World Success.</h1>
        <p>
          At iBridge, we are committed to shaping future-ready professionals through a comprehensive two-year integrated training program. Our model is designed to foster mastery across multiple technologies while students are still pursuing their graduation, making them job-ready and globally competitive.
        </p>
      </header>

      <section className="advantage-section">
        <h2>🔹 Multi-Technology Upskilling: Building Versatile Professionals</h2>
        <p>
          The iBridge program empowers learners with end-to-end technology exposure. Students gain expertise in:
        </p>
        <ul className="skills-list">
          <li><strong>Front-End Development:</strong> HTML5, CSS3, JavaScript, React</li>
          <li><strong>Back-End Development:</strong> Node.js, PHP, .NET, MySQL, MongoDB</li>
          <li><strong>Mobile Application Development:</strong> Android Studio, Cross-Platform Apps</li>
          <li><strong>Cloud & DevOps:</strong> Deployment, CI/CD, Cloud Integration</li>
          <li><strong>Specialized Areas:</strong> SEO, Cybersecurity, UI/UX, Database Management, Quality Assurance</li>
        </ul>
        <p>This diversified skill portfolio enables students to pursue careers across development, data, security, project management, and entrepreneurship, offering adaptability in today’s dynamic job market.
</p>
      </section>

      <section className="advantage-section">
        <h2>🔹 Expert-Led Training: Real Insights Beyond Theory</h2>
        <p>
          At iBridge, training is conducted exclusively by industry professionals with years of real-world experience. Unlike conventional faculty-led programs that rely heavily on academic theory, our trainers provide:
        </p>
        <ul>
          <li>Practical insights from live industry projects</li>
          <li>Real-world case studies and best practices</li>
          <li>Exposure to current technologies and workflows</li>
        </ul>
        <p>This industry-first approach equips students with both the knowledge and the practical application skills demanded by employers globally.</p>
      </section>

      <section className="advantage-section">
        <h2>🔹 Integrated 2-Year Journey with ICAP Projects</h2>
        <p>
         Our two-year integrated training program is built for progressive learning and application. At the end of each stage, students complete an ICAP (iBridge Capstone Application Project) where they apply newly acquired knowledge to solve real-world challenges.
        </p>
        <p>This model ensures:</p>
        <ul>
          <li>Deeper knowledge retention</li>
          <li>Practical exposure to industry scenarios</li>
          <li>A strong project portfolio to showcase to employers</li>
        </ul>
        <p>Unlike short crash courses, this integrated journey acknowledges that true mastery requires time, practice, and commitment, giving students a clear edge during their academic years.</p>
      </section>

      <section className="advantage-section">
        <h2>🔹 Early Industry Exposure: A Time Advantage</h2>
        <p>
          Because iBridge’s training runs in parallel with graduation, students begin exploring industry-relevant tools and technologies well before completing their degrees. By the time they graduate, learners already possess:
        </p>
        <ul>
            <li>Applied skills in web development, cybersecurity, cloud integration, and application deployment</li>
            <li>Experience with real-world projects through ICAP</li>
            <li>A time advantage in placements, higher studies, or entrepreneurial pursuits</li>
        </ul>
        <p>This early exposure ensures that students are not just prepared — they are ahead of the curve.</p>
      </section>

      <section className="advantage-section comparison-chart">
  <h2>📊 Conventional Training vs. iBridge Integrated Training</h2>
  <div className="comparison-wrapper">
    <div className="comparison-col conventional">
      <h3>Conventional Training Programs</h3>
      <ul>
        <li><strong>Learning Scope:</strong> Focused on a single tool or technology</li>
        <li><strong>Duration:</strong> Short-term (3–6 months)</li>
        <li><strong>Application:</strong> Limited hands-on practice</li>
        <li><strong>Trainers:</strong> Regular academic faculty</li>
        <li><strong>Career Readiness:</strong> Narrow career opportunities, tool-specific</li>
        <li><strong>Timing:</strong> Post-graduation or after job search begins</li>
        <li><strong>Outcome:</strong> Basic certification</li>
      </ul>
    </div>

    <div className="vs">VS</div>

    <div className="comparison-col ibridge">
      <h3>iBridge Integrated Training Program</h3>
      <ul>
        <li><strong>Learning Scope:</strong> Multi-technology (Front-End, Back-End, Mobile, Cloud, Cybersecurity, etc.)</li>
        <li><strong>Duration:</strong> Long-term (2 years integrated with graduation)</li>
        <li><strong>Application:</strong> ICAP Projects at every stage – real-world application</li>
        <li><strong>Trainers:</strong> Industry experts with proven real-world experience</li>
        <li><strong>Career Readiness:</strong> Diversified pathways across industries and roles</li>
        <li><strong>Timing:</strong> Parallel to graduation – early head start</li>
        <li><strong>Outcome:</strong> Certifications + portfolio + multi-domain skills</li>
      </ul>
    </div>
  </div>
</section>


      <footer className="advantage-footer">
        <p>
          🔥 With iBridge, students don’t just learn technology — they master multiple domains, apply knowledge continuously, and gain industry exposure early, ensuring they graduate with confidence, competence, and a competitive edge.
        </p>
      </footer>

      <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
        >
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className="faq-icon">
              {activeIndex === index ? "−" : "+"}
            </span>
          </button>
          {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default IBridgeAdvantage;
