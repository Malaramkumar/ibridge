import React,{useState} from "react";
import "./LearnOnline.scss";

const LearnOnline = () => {

// Learn Online FAQ Data
const faqs = [
  {
    question: "Is the iBridge program completely online?",
    answer:
      "Yes, the iBridge training program is delivered 100% online. Students can learn from anywhere, anytime, without being tied to physical classrooms or long commutes.",
  },
  {
    question: "How does online learning save time for students?",
    answer:
      "Traditional offline training often requires hours of commuting. iBridge’s online model eliminates travel, allowing students to reinvest that time into focused learning, practice, and ICAP project work — balancing academics and training effectively.",
  },
  {
    question: "Will I still get access to industry experts if the program is online?",
    answer:
      "Absolutely. Our trainers are working industry professionals. Online delivery makes it possible for students to connect with them in real time, gaining insights directly from experts handling live projects, without geographical barriers.",
  },
  {
    question: "Does online learning provide the same value as offline classes?",
    answer:
      "Yes, and often more. iBridge offers interactive tools, project tracking, real-time collaboration, and access to recorded sessions for revision. This ensures deeper understanding and flexibility, which traditional offline classes often cannot provide.",
  },
  {
    question: "How flexible is the online model for college students?",
    answer:
      "The program is designed to fit around students’ degree schedules. They can learn at their own pace, schedule sessions as needed, and apply knowledge through ICAP projects from the comfort of their own space — simulating real hybrid work environments.",
  },
];

const [activeIndex, setActiveIndex] = useState(null);
const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div className="learn-online-main">
    <div className="learn-online-container">
      {/* Header */}
      <header className="learn-online-header">
        <h1>Learn Online with iBridge</h1>
        <p className="sub-heading">
          Flexible, accessible, and guided by industry experts
        </p>
      </header>

      {/* Sections */}
      <section className="learn-online-section">
        <h2> Learning Without Boundaries</h2>
        <p>
         At iBridge, we bring the classroom to your fingertips. Our integrated training program is designed to be delivered 100% online, allowing students to learn anywhere, anytime. In today’s fast-paced world, learning should not be tied to physical classrooms or long commutes. By embracing digital learning, we give students the power to focus on their degree and professional training together, without sacrificing valuable time.
        </p>
      </section>

      <section className="learn-online-section">
        <h2> Save Time, Focus More</h2>
        <p>
          Time is one of the most precious resources for a student. Traditional offline training requires hours of commuting to centers or institutions, leaving less room to concentrate on academics. With iBridge’s online model, that time is saved and reinvested into focused learning, practice, and project work. Students can balance their college degree studies and integrated training more effectively, ensuring they graduate with both qualifications and skills without burnout.
        </p>
      </section>

      <section className="learn-online-section">
        <h2> Direct Access to Industry Experts</h2>
        <p>Our trainers are not regular faculty — they are working professionals from the industry. Expecting them to travel and conduct sessions offline on a regular basis is impractical. Online delivery makes it possible for students to connect with leading experts in real time, gaining insights directly from professionals handling live projects. This accessibility is one of the greatest strengths of iBridge, offering students a chance to learn from the best minds in the field without geographical barriers.</p>
      </section>

      <section className="learn-online-section">
        <h2> More Knowledge, Less Limitation</h2>
        <p>
          The belief that offline learning is superior is outdated. In today’s world, online platforms offer richer learning experiences through interactive tools, real-time collaboration, project tracking, and access to recorded sessions for revision. At iBridge, students enjoy continuous access to resources, project guidelines, and expert mentorship far beyond what is possible in a limited offline class. Online learning enables them to pause, replay, and revisit lessons, ensuring deeper understanding and mastery.
        </p>
      </section>

      <section className="learn-online-section">
        <h2> Flexibility That Fits Every Student</h2>
        <p>
         Our students juggle degree courses, projects, and career planning — which makes flexibility critical. The online mode ensures they can learn at their own pace, schedule sessions around their academic requirements, and manage both degree and training with ease. With this model, learners not only study but also apply knowledge through ICAP projects from the comfort of their own space, simulating the way professionals work in today’s hybrid and digital-first industries.
        </p>
      </section>

      <section className="learn-online-section">
        <h2> The Smarter Way to Learn</h2>
        <p>
        Choosing online learning with iBridge is not about compromise — it’s about advantage. Students save time, gain access to industry professionals, enjoy multi-technology exposure, and build career-ready portfolios while staying focused on their college degrees. It’s a smarter, faster, and more impactful way to learn — preparing them for the industries of tomorrow without the limits of traditional classrooms.
        </p>
      </section>

      {/* Footer / Quote */}
      <footer className="learn-online-footer">
        <p>
          🔥 “Why waste time commuting when you can spend it mastering the skills
          of the future?” <br />
          With iBridge’s Learn Online model, students step into a world where{" "}
          <strong>knowledge, flexibility, and opportunity</strong> meet at their
          fingertips.
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

export default LearnOnline;
