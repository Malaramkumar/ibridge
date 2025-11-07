import React,{useState} from "react";
import "./GraduationSkills.scss";

const GraduationSkills = () => {
  // FAQs: Building Skills During Graduation
const faqs = [
  {
    question: "Why should I build skills during graduation instead of after?",
    answer:
      "Learning during graduation saves time and money by running parallel with your degree. You graduate with both academic knowledge and applied skills, making you job-ready immediately."
  },
  {
    question: "What are the benefits of parallel learning with iBridge?",
    answer:
      "You gain time advantage, continuous practice alongside academics, career readiness at graduation, and confidence backed by real-world ICAP projects."
  },
  {
    question: "How does learning during graduation compare with after graduation?",
    answer:
      "During graduation: 2 years integrated with your degree, immediate career entry, affordable fee, early exposure to tools. After graduation: extra 6 months–2 years, delayed entry, higher costs, and lost income opportunity."
  },
  {
    question: "Do recruiters prefer skilled graduates?",
    answer:
      "Yes. Recruiters prioritize candidates who can contribute from day one. With both a degree and multi-technology skills, you stand out as a low-risk, job-ready hire."
  },
  {
    question: "What is the iBridge advantage?",
    answer:
      "iBridge students graduate with academic foundation, real ICAP project portfolio, hands-on mastery of technologies, and professional networks — making them career-ready from day one."
  }
];

const [activeIndex, setActiveIndex] = useState(null);
const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div className="grad-main">
      <div className="grad-container">
        {/* Header */}
        <header className="grad-header">
          <h1>Building Skills During Graduation – The Smarter Choice</h1>
          <p>
            At iBridge, our integrated two-year training program runs in parallel with your college graduation, ensuring you graduate with both academic knowledge and industry-ready skills to jumpstart your career.
          </p>
        </header>

        {/* Section 1 */}
        <section className="grad-section">
          <h2>🔹 Learning Early, Succeeding Faster</h2>
          <p>
          At iBridge, our integrated two-year training program is carefully designed to run in parallel with a student’s college graduation. This approach ensures that learners graduate not only with academic knowledge but also with applied technical skills that make them immediately employable. Instead of waiting until after college to invest time and money in skill development, students can gain industry exposure and project experience while still pursuing their degree.
          </p>
        </section>

        {/* Section 2 */}
        <section className="grad-section">
          <h2>🔹 The Value of Parallel Learning</h2>
          <p>
            Graduation provides the foundation, but industries today demand applied, job-ready expertise. By learning skills during their college years, students benefit from:
          </p>
          <ul>
            <li><strong>Time advantage:</strong> No delay in entering the job market.</li>
            <li><strong>Continuous practice:</strong> Applying concepts alongside academics.</li>
            <li><strong>Career readiness at graduation:</strong> Standing out from degree-only peers.</li>
            <li><strong>Confidence in interviews:</strong> Backed by real projects and applied knowledge.</li>
          </ul>
        </section>

      {/* Comparison Table */}
       <section className="grad-section comparison-section">
  <h2>📊 Comparison: Learning During Graduation vs. After Graduation</h2>
  <div className="comparison-chart">
    <div className="comparison-col">
      <h3>🎓 During Graduation <span>(Integrated Training)</span></h3>
      <ul>
        <li><strong>Time Taken:</strong> 2 years (alongside degree)</li>
        <li><strong>Career Entry:</strong> Immediate job readiness at graduation</li>
        <li><strong>Financial Impact:</strong> One-time affordable fee, early earnings</li>
        <li><strong>Industry Advantage:</strong> Early exposure to tools and workflows</li>
        <li><strong>Confidence & Readiness:</strong> High (portfolio + ICAP projects completed)</li>
      </ul>
    </div>

    <div className="vs">VS</div>

    <div className="comparison-col after">
      <h3>📘 After Graduation <span>(Separate Training)</span></h3>
      <ul>
        <li><strong>Time Taken:</strong> 6 months – 2 years extra after graduation</li>
        <li><strong>Career Entry:</strong> Delayed entry into workforce</li>
        <li><strong>Financial Impact:</strong> Higher costs + lost income opportunity</li>
        <li><strong>Industry Advantage:</strong> Late exposure, already competing with peers</li>
        <li><strong>Confidence & Readiness:</strong> Moderate (projects limited to training)</li>
      </ul>
    </div>
  </div>
</section>


        {/* Section 3 */}
        <section className="grad-section">
          <h2>🔹 Skilled Graduates: The First Choice for Recruiters</h2>
          <p>
           Recruiters prioritize candidates who can contribute from day one. Students who graduate with both a degree and multi-technology skills have a clear advantage over peers who need additional training. They are viewed as low-risk hires, as employers do not need to spend months on upskilling or onboarding. This improves placement chances and opens doors to better job offers, internships, and global opportunities.
          </p>
        </section>

        {/* Section 4 */}
        <section className="grad-section">
          <h2>🔹 Smart Career Planning</h2>
          <p>
            Graduates who delay skill-building often face a “lost year” — where they spend extra time and money catching up with industry requirements. By enrolling in iBridge’s integrated training during graduation, students avoid this delay and begin earning earlier than their peers. Over the course of a career, this early start translates into faster promotions, better pay, and long-term advantages.
          </p>
        </section>

        {/* Section 5 */}
        <section className="grad-section">
          <h2>🔹 iBridge Advantage</h2>
          <p>By combining graduation with integrated training, students build:</p>
          <ul>
            <li>A strong academic foundation.</li>
            <li>A portfolio of real-world ICAP projects.</li>
            <li>Hands-on mastery of multiple technologies.</li>
            <li>Networking opportunities with peers and professionals.</li>
          </ul>
          <p>
            This unique blend makes them stand out at graduation, not as job-seekers, but as job-ready professionals ready to take on industry challenges.
          </p>
        </section>

        {/* Footer */}
        <footer className="grad-footer">
          <p>
            🔥 Don’t wait until after your degree. With iBridge, graduate with confidence, skills, and a career advantage that puts you miles ahead of the competition.
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

export default GraduationSkills;