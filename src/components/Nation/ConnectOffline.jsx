import React,{useState} from "react";
import "./ConnectOffline.scss";

const ConnectOffline = () => {

const faqs = [
  {
    question: "What is Connect Offline at iBridge?",
    answer:
      "Connect Offline is a complementary feature to our Learn Online model. It provides scheduled in-person sessions where students meet trainers and peers face-to-face, combining the flexibility of online learning with the depth of offline interactions.",
  },
  {
    question: "Why is offline interaction important if the program is already online?",
    answer:
      "Offline sessions add personal mentorship, peer collaboration, and direct exposure to industry insights. They allow students to clarify complex concepts, build stronger networks, and gain perspectives that go beyond virtual classrooms.",
  },
  {
    question: "Who conducts the offline sessions?",
    answer:
      "The offline sessions are led by practicing industry professionals from domains like software, cybersecurity, data science, cloud, and engineering. Students gain first-hand insights into workflows, decision-making, and industry trends directly from experts.",
  },
  {
    question: "How do students benefit from peer-to-peer collaboration offline?",
    answer:
      "Offline sessions create opportunities for students to collaborate face-to-face, discuss projects, form study or innovation groups, and build professional networks early. This strengthens teamwork, communication, and problem-solving skills.",
  },
  {
    question: "How does Connect Offline support ICAP projects?",
    answer:
      "During offline sessions, students bring project queries and blockers from their ICAP projects. Trainers guide them through solution-oriented thinking and real-world problem-solving frameworks, ensuring they learn to analyze, decide, and deliver like professionals.",
  },
];

const [activeIndex, setActiveIndex] = useState(null);
const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div className="icap-main">
    <div className="icap-container">
      {/* Header */}
      <header className="icap-header">
        <h1>Connect Offline – Extending the Online Advantage</h1>
        <p>
          While iBridge’s online learning gives unmatched flexibility, our
          Connect Offline sessions ensure students also experience the
          irreplaceable value of personal interactions, building the{" "}
          <strong>best of both worlds</strong>.
        </p>
      </header>

      {/* Section 1 */}
      <section className="icap-section">
        <h2>🔹 An Extension of the Online Learning Experience</h2>
        <p>
         At iBridge, we believe that online learning brings unmatched flexibility, but we also understand the irreplaceable value of personal interactions. That’s why we designed “Connect Offline” as a complementary feature to our Learn Online model. While students enjoy the convenience of online sessions, they also gain opportunities to meet trainers and peers face-to-face at scheduled intervals. This dual model ensures learners experience the best of both worlds — the accessibility of online and the depth of offline connections.

        </p>
      </section>

      {/* Section 2 */}
      <section className="icap-section">
        <h2>🔹 Meeting Industry Experts in Person</h2>
        <p>Our trainers are practicing professionals from industries such as software, cybersecurity, data science, cloud, and engineering. The offline sessions allow students to:</p>
        <ul>
          <li>Interact directly with professionals beyond virtual classes.</li>
          <li>Clarify complex concepts and project blockers face-to-face.</li>
          <li>Gain industrial insights into workflows, trends, and decisions.</li>
          <li>Build personal rapport with mentors for career guidance.</li>
        </ul>
        <p>
            This personal interaction gives students a rare glimpse into the real workings of industries, an experience unavailable in traditional training programs.
        </p>
      </section>

      {/* Section 3 */}
      <section className="icap-section">
        <h2>🔹 Peer-to-Peer Collaboration and Networking</h2>
        <p>Offline connect sessions are not just about mentors — they also create a platform for students to engage with like-minded peers. By collaborating offline, learners can:</p>
        <ul>
          <li>Discuss projects and exchange ideas in person.</li>
          <li>Form study circles and innovation groups.</li>
          <li>Build a professional network early to enhance teamwork skills.</li>
        </ul>
        <p>This peer-to-peer collaboration builds a supportive community that nurtures growth, innovation, and problem-solving together.</p>
      </section>

      {/* Section 4 */}
      <section className="icap-section">
        <h2>🔹 Solving Problems, Learning Solutions</h2>
        <p>
        In every offline connect, students bring forward queries, blockers, and project issues from their ongoing ICAP (Capstone) projects. Trainers then guide them through solution-oriented thinking, demonstrating how industries approach challenges systematically. By observing and participating, students gain a framework for:
        </p>
        <ul>
          <li>Critical analysis of real-world problems.</li>
          <li>Decision-making under practical constraints.</li>
          <li>Developing professional, solution-oriented approaches.</li>
        </ul>
        <p>
            This hands-on exposure ensures students are not just learning — they are thinking and acting like professionals.
        </p>
      </section>

      {/* Section 5 */}
      <section className="icap-section">
        <h2>🔹 Significance of Offline Interaction</h2>
        <p>The importance of connecting offline lies in the insights, exposure, and community it fosters:</p>
        <ul>
          <li>Learners understand how industries operate beyond textbooks.</li>
          <li>Students sharpen interpersonal, communication, and collaborative skills.</li>
          <li>Professionals share current challenges and success stories that inspire students to go further.</li>
          <li>Offline networking helps students find mentors and role models who can influence their career journey.</li>
        </ul>
        <p>No other training program offers this blended approach of Learn Online + Connect Offline, making iBridge a category-defining learning platform.</p>
      </section>

      {/* Comparison Table */}
      <section className="icap-section comparison-section">
        <h2>📊 Combined Advantage: Learn Online + Connect Offline</h2>
        <div className="table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Learn Online</th>
                <th>Connect Offline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Flexibility</td>
                <td>Anytime, anywhere learning</td>
                <td>In-person scheduled sessions</td>
              </tr>
              <tr>
                <td>Trainer Access</td>
                <td>Live sessions with experts online</td>
                <td>Face-to-face mentorship</td>
              </tr>
              <tr>
                <td>Project Support</td>
                <td>Online guidance & resources</td>
                <td>Deep-dive discussions on blockers</td>
              </tr>
              <tr>
                <td>Peer Networking</td>
                <td>Virtual group collaboration</td>
                <td>Stronger peer bonding & circles</td>
              </tr>
              <tr>
                <td>Industry Exposure</td>
                <td>Continuous learning via modules</td>
                <td>Practical insights into workflows</td>
              </tr>
            </tbody>
          </table>
        </div>

     <section className="icap-section">
        <h2>🔹 The Blended Learning Advantage</h2>
        <p>By combining Learn Online with Connect Offline, iBridge ensures that students gain the flexibility of digital learning while also experiencing the power of in-person engagement. They don’t just graduate with technical knowledge — they leave with:</p>
        <ul>
         <li>A strong network of peers and mentors.</li>
         <li>Real-world problem-solving exposure.</li>
         <li>A deeper understanding of how industries function in practice.</li>
         <li>A skillset that is both digitally empowered and humanly connected.</li>
        </ul>
       
      </section>

      </section>

      {/* Footer */}
      <footer className="icap-footer">
        <p>
          🔥 With Connect Offline, iBridge learners unlock personal mentorship, collaborative innovation, and professional insights that make them stand out as industry-ready graduates in today’s competitive world.
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

export default ConnectOffline;
