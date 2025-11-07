import React,{useState} from 'react';
import './ExpertLed.scss';

const ExpertLedTraining = () => {

  // Expert-Led Training FAQ Data
const faqs = [
  {
    question: "What makes expert-led training at iBridge different from regular training?",
    answer:
      "Unlike traditional training that relies on textbooks and academic delivery, iBridge training is delivered by practicing industry professionals. They bring real-world insights, case studies, and live project experience, ensuring that learning stays practical, current, and industry-ready.",
  },
  {
    question: "How do trainers bridge theory with real-world practices?",
    answer:
      "Our trainers map classroom concepts to actual industry applications. Through case studies, live demos, and workflows, learners see how tools like React, Node.js, MongoDB, .NET, Cybersecurity, and Cloud are applied in real projects — building confidence and clarity.",
  },
  {
    question: "What kind of industry challenges do students work on?",
    answer:
      "Students engage with real-world challenges such as building scalable applications, deploying cloud solutions, solving cybersecurity issues, and integrating cross-platform apps. These tasks simulate professional environments and build problem-solving, teamwork, and resilience.",
  },
  {
    question: "How does expert-led training improve employability?",
    answer:
      "Graduates build a portfolio of real-world projects under professional guidance, gain exposure to industry-standard tools and workflows, and learn to solve practical problems. This positions them as job-ready professionals who stand out in interviews and hiring processes.",
  },
  {
    question: "Why do employers prefer iBridge-trained students?",
    answer:
      "Employers value practical ability, adaptability, and problem-solving over just degrees. iBridge graduates can confidently discuss real challenges they've solved, showcase multi-technology skills, and prove they are ready to contribute from day one.",
  },
];

const [activeIndex, setActiveIndex] = useState(null);
const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='expert-training-main'>
    <div className="expert-training-container">
      <header className="expert-training-header">
        <h1>Expert-Led Training at iBridge</h1>
      </header>

      <section className="expert-training-section">
        <h2>🔹 Learning Directly from Practicing Professionals</h2>
        <p>
          At iBridge, training is delivered by working industry professionals who bring insights from their daily roles in technology, engineering, and business. Unlike regular trainers or faculty members whose focus is limited to textbooks and academic delivery, our trainers actively contribute to real projects in leading organizations. This dual role enables them to deliver knowledge that is both current and practical, ensuring students receive skills that matter today and tomorrow.
        </p>
      </section>

      <section className="expert-training-section">
        <h2>🔹 Bridging Knowledge with Real-World Practices</h2>
        <p>
          Whereas traditional training often stops at theory, our expert trainers go a step further by mapping classroom concepts to real-world practices. Students are not just told what a tool does — they are shown how it is applied in industry. Concepts are explained through case studies, live demonstrations, and industry workflows, giving learners a clear picture of how technologies like React, Node.js, MongoDB, .NET, Cybersecurity, and Cloud are used in actual projects. This bridge between theory and practice builds confidence and clarity, setting iBridge learners apart from peers who only study in abstract terms.
        </p>
      </section>

      <section className="expert-training-section">
        <h2>🔹 Exposure to Industry Challenges</h2>
        <p>
       A hallmark of iBridge expert-led training is direct exposure to industry problems. Instead of solving simplified exercises or academic scenarios, students are challenged with tasks that mirror professional environments:
        </p>
        <ul>
            <li>Building secure, scalable applications.</li>
            <li>Deploying solutions on cloud platforms.</li>
            <li>Tackling real issues in cybersecurity and data integrity.</li>
            <li>Integrating cross-platform mobile applications.</li>
        </ul>
        <p>By engaging in these industry-aligned challenges, learners develop not just technical know-how but also resilience, problem-solving ability, and teamwork skills — the very qualities industries demand from new hires.</p>
      </section>

      <section className="expert-training-section">
        <h2>🔹 Developing Solution-Oriented Professionals</h2>
        <p>
          Every expert session is designed to encourage students to think like professionals. Trainers introduce real challenges and guide learners in analyzing, designing, and delivering solutions. This process instills an innovation-driven mindset, where students learn to break down complex issues, weigh constraints, and identify the most practical outcomes. Unlike regular training where exercises are predefined, iBridge learners gain the ability to deal with ambiguity, adapt to change, and craft solutions independently.
        </p>
      </section>

      <section className="expert-training-section">
        <h2>🔹  Advantages Over Conventional Training</h2>
        <p>
       The difference between regular training and expert-led training is profound:
        </p>
        <ul>
            <li>Regular training focuses on textbooks; expert training focuses on live problems.</li>
            <li>Regular trainers may lack current industry exposure; our trainers practice what they teach daily.</li>
            <li>Regular training produces tool familiarity; expert-led training produces solution-driven mastery.</li>
        </ul>
        <p>In simple terms, where conventional programs create learners, iBridge creates professionals.</p>
      </section>

       <section className="expert-training-section">
        <h2>🔹  Standing Out in the Talent Pool</h2>
        <p>
       Graduates with only degrees, or even those with standard training, often enter the job market with limited applied experience. In contrast, iBridge learners graduate with:
        </p>
        <ul>
            <li>A portfolio of real-world projects completed under professional guidance.</li>
           <li>Familiarity with industry-standard tools, workflows, and practices.</li>
           <li>The ability to showcase practical solutions in interviews instead of just memorized answers.</li>
        </ul>
        <p>This makes iBridge-trained students stand out in the hiring pool. Employers view them as ready-to-contribute professionals rather than fresh graduates who need lengthy onboarding.</p>
      </section>

         <section className="expert-training-section">
        <h2>🔹 Employability Aligned with Industry Hiring</h2>
        <p>
      Recruitment strategies in today’s industries go far beyond checking academic degrees. Companies now prioritize practical ability, adaptability, and problem-solving skills during selection. iBridge graduates match these expectations by demonstrating:
        </p>
        <ul>
            <li>Experience with industry-grade projects.</li>
            <li>Confidence to discuss real challenges they have solved.</li>
            <li>Skills across multiple technologies, making them versatile hires.</li>
        </ul>
        <p>This alignment with employer hiring strategies dramatically improves employability. Instead of competing only on marks or certificates, iBridge learners compete with proof of applied knowledge and readiness for industry roles.b  </p>
      </section>


      <section className="modern-comparison-section">
  <h2>📊 Regular Training vs. Expert-Led Training at iBridge</h2>
  <div className="table-wrapper">
    <table className="modern-comparison-table">
      <thead>
        <tr>
          <th>Aspect</th>
          <th>Regular Training</th>
          <th>iBridge Expert-Led Training</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Trainers</strong></td>
          <td><span className="icon">👨‍🏫</span> Academic faculty</td>
          <td><span className="icon">👨‍💼</span> Practicing industry experts</td>
        </tr>
        <tr>
          <td><strong>Learning Style</strong></td>
          <td><span className="icon">📚</span> Theoretical</td>
          <td><span className="icon">🛠</span> Practical & project-based</td>
        </tr>
        <tr>
          <td><strong>Industry Relevance</strong></td>
          <td><span className="icon">⏳</span> Outdated trends</td>
          <td><span className="icon">⚡</span> Always updated</td>
        </tr>
        <tr>
          <td><strong>Problem Solving</strong></td>
          <td><span className="icon">✏️</span> Simplified exercises</td>
          <td><span className="icon">💡</span> Real-world challenges</td>
        </tr>
        <tr>
          <td><strong>Portfolio</strong></td>
          <td><span className="icon">📄</span> Limited project</td>
          <td><span className="icon">🚀</span> Multi-project portfolio</td>
        </tr>
        <tr>
          <td><strong>Hiring Impact</strong></td>
          <td><span className="icon">🎓</span> Compete as degree-only</td>
          <td><span className="icon">🏆</span> Stand out as work-ready</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


      <footer className="expert-training-footer">
        <p>
          🔥 With Expert-Led Training at iBridge, students don’t just study — they practice, apply, and deliver solutions under the mentorship of industry professionals, making them among the most sought-after candidates in today’s job market.
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

export default ExpertLedTraining;
