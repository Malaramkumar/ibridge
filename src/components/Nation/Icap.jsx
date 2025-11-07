import React from 'react';
import './ICAP.scss';
import { useState } from 'react';

const ICAP = () => {
  const faqs = [
  {
    question: "What makes ICAP different from traditional academic projects?",
    answer:
      "Unlike traditional projects that usually happen only in the final year, ICAP integrates continuous capstone projects at every stage of training. These projects are industry-aligned, multi-technology, and simulate real-world scenarios — ensuring students graduate with hands-on experience and a strong portfolio.",
  },
  {
    question: "What kind of technologies and tools will students work with in ICAP?",
    answer:
      "Students apply a wide range of tools including HTML, JavaScript, React, Node.js, MongoDB, .NET, Android Studio, DevOps, and Cybersecurity — ensuring exposure to both front-end, back-end, mobile, and cloud-based technologies.",
  },
  {
    question: "How does ICAP prepare students for the real industry?",
    answer:
      "ICAP projects are designed to mirror real business challenges, such as developing secure e-commerce platforms, scalable cloud apps, and impactful mobile solutions. Students experience collaborative, deadline-driven work environments that reflect actual industry workflows.",
  },
  {
    question: "What benefits do students gain from completing ICAP?",
    answer:
      "By the end of the program, students develop a problem-solving mindset, adaptability, project management skills, and industry exposure. They also graduate with a portfolio of projects that showcases their readiness for jobs, internships, and entrepreneurial opportunities.",
  },
  {
    question: "How does ICAP enhance career opportunities?",
    answer:
      "Instead of just a certificate, students carry a robust project portfolio that proves their applied knowledge. This gives them a strong edge in interviews, placements, and startups, positioning them as confident, solution-driven professionals.",
  },
];
const [activeIndex, setActiveIndex] = useState(null);
const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='icap1-main'>
    <div className="icap-container">
      <header className="icap-header">
        <h1>ICAP – Industry Aligned Capstone Application Program</h1>
        <p>
         At iBridge, we believe that knowledge gains its true value only when it is applied to solve real-world problems. Our ICAP (Industry Aligned Capstone Application Program) is designed with this vision — ensuring that students don’t just learn technologies, but consistently apply their knowledge and tools to tackle challenges that reflect real industry needs.
        </p>
      </header>

      <section className="icap-section">
        <h2>🔹 Capstone Projects – The Core of Applied Learning</h2>
        <p>
         Every stage of the iBridge program is anchored by a capstone project. Instead of limiting project work to the end of a course, ICAP integrates practical projects at every level of the two-year training. These projects allow students to:
        </p>
        <ul>
          <li>Apply the technologies and tools they’ve learned (from HTML, JavaScript, React, Node.js, MongoDB, and .NET to Android Studio, DevOps, and Cybersecurity).</li>
          <li>Work on problem statements inspired by real industries.</li>
          <li>Understand how individual skills connect to create end-to-end solutions.</li>
        </ul>
        <p>This ensures that learners move beyond theory and gain the confidence to think, design, and implement like industry professionals.</p>
      </section>

      <section className="icap-section">
        <h2>🔹 Real-World Problem Solving & Industry Exposure</h2>
        <p>
          ICAP projects are structured to simulate real business scenarios — such as building a secure e-commerce platform, deploying scalable cloud applications, or creating mobile apps that address social and commercial needs. By managing these projects, students experience:
        </p>
        <ul>
          <li>Industry exposure while still in their academic years.</li>
          <li>The challenges of collaborative, deadline-driven work environments.</li>
          <li>The process of transforming classroom concepts into impactful solutions.</li>
        </ul>
        <p>This practical immersion bridges the gap between academic learning and professional execution.</p>
      </section>

      <section className="icap-section">
        <h2>🔹 Building Solution-Driven Professionals</h2>
        <p>
          Through ICAP, students don’t just develop technical skills — they learn to analyze problems, design solutions, and deliver outcomes. This develops them into solution-driven professionals capable of managing projects, adapting to changing requirements, and adding value in any organization. The program nurtures:
        </p>
        <ul>
          <li>A problem-solving mindset</li>
          <li>Adaptability to industry tools and trends</li>
          <li>Confidence to work on live projects</li>
          <li>Practical skills in project management and execution</li>
        </ul>
      </section>
      
      <section className="icap-section">
        <h2>🔹 A Portfolio that Proves Readiness</h2>
        <p>
         By the time students complete the two-year program, they hold not just certificates but a portfolio of capstone projects that demonstrates their ability to apply knowledge to real-world challenges. This portfolio gives them an unmatched edge in interviews, internships, placements, and entrepreneurial pursuits, showcasing them as industry-ready professionals.
        </p>
      </section>
<section className="icap-section card-comparison">
  <h2>📊 Traditional Projects vs. ICAP</h2>
  <div className="comparison-cards">
    <div className="comparison-card">
      <h3>Timing</h3>
      <div className="options">
        <div className="option traditional">Final-year only, one project</div>
        <div className="option icap">Continuous projects at every level of training</div>
      </div>
    </div>

    <div className="comparison-card">
      <h3>Focus</h3>
      <div className="options">
        <div className="option traditional">Theoretical or academic demonstration</div>
        <div className="option icap">Real-world, industry-aligned challenges</div>
      </div>
    </div>

    <div className="comparison-card">
      <h3>Application</h3>
      <div className="options">
        <div className="option traditional">Limited to course concepts</div>
        <div className="option icap">Multi-tool, cross-technology integration</div>
      </div>
    </div>

    <div className="comparison-card">
      <h3>Industry Exposure</h3>
      <div className="options">
        <div className="option traditional">Minimal</div>
        <div className="option icap">Simulates professional projects & workflows</div>
      </div>
    </div>

    <div className="comparison-card">
      <h3>Outcome</h3>
      <div className="options">
        <div className="option traditional">Single report or demo</div>
        <div className="option icap">Robust portfolio showcasing applied skills</div>
      </div>
    </div>

    <div className="comparison-card">
      <h3>Career Impact</h3>
      <div className="options">
        <div className="option traditional">Limited value in hiring</div>
        <div className="option icap">Strong proof of readiness & solution-driven expertise</div>
      </div>
    </div>
  </div>
</section>


      <footer className="icap-footer">
        <p>
          🔥 With ICAP, students transform from learners into problem-solvers. They graduate with not just knowledge, but the ability to deliver industry-ready solutions, making them confident, employable, and future-ready.
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

export default ICAP;
