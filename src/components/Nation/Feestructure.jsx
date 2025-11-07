import React,{useState} from "react";
import "./Feestructure.scss";

const FeeStructure = () => {
  
const faqs = [
  {
    question: "What is the fee for the iBridge integrated program?",
    answer:
      "The two-year integrated online + offline connect program is priced at ₹55,000, making it highly affordable while covering multi-technology training, ICAP projects, and expert mentorship.",
  },
  {
    question: "How does the iBridge fee compare to other programs?",
    answer:
      "Comparable programs often cost more while covering only single technologies. iBridge delivers multi-technology training, expert-led sessions, and career-ready outcomes at ₹55,000, offering exceptional value easily worth over a lakh.",
  },
  {
    question: "Are there any discounts available?",
    answer:
      "Yes, iBridge offers referral discounts for students who bring friends, and group enrollment discounts for groups of three or more. These options encourage affordability and peer learning.",
  },
  {
    question: "Is there an offline-only version of the program?",
    answer:
      "Yes, Students who prefer a fully offline, in-person program can enroll at ₹1,00,000. Both modes cover the same content and ICAP projects, but the blended online + offline model is priced lower to maximize accessibility.",
  },
  {
    question: "Why is the program fee considered a long-term investment?",
    answer:
      "By the end of the program, students graduate not only with a degree but also as industry-ready professionals with project portfolios and applied skills. This unlocks high-paying roles, global opportunities, and entrepreneurial potential — making the career value far exceed the upfront cost.",
  },
];

const [activeIndex, setActiveIndex] = useState(null);
const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="fee-main">
      <div className="fee-container">
        {/* Header */}
        <header className="fee-header">
          <h1>Program Fee Structure (Affordable Fee, Unmatched Value)</h1>
          
        </header>

        {/* Section 1 */}
        <section className="fee-section">
          <h2>🔹 Affordable Learning, Maximum Impact</h2>
          <p>
            At iBridge, we have designed our two-year integrated training program with affordability and accessibility in mind. For just ₹55,000, learners gain access to multi-technology training, industry expert mentorship, ICAP projects, and career-ready outcomes. This fee is set to empower students from rural and semi-urban regions, ensuring that financial constraints do not limit their future.
          </p>
        </section>

        {/* Section 2 */}
        <section className="fee-section">
          <h2>🔹 Exceptional Value for Investment</h2>
          <p>
           Comparable training programs that cover only single technologies often cost more, yet they fail to provide the breadth, depth, and applied outcomes that iBridge delivers. The real value of our training, given the portfolio of projects, expert-led sessions, and career impact, is easily worth over a lakh. By structuring it at ₹55,000, we ensure affordability while retaining world-class quality.
          </p>
        </section>

        {/* Section 3 */}
        <section className="fee-section">
          <h2>🔹 Exclusive Discount Options</h2>
          <p>We understand the importance of making learning accessible, so we offer additional opportunities to save:</p>
          <ul>
            <li><strong>Referral Discount:</strong> Students who refer a friend to enroll in the program will receive a special fee reduction.</li>
            <li><strong>Group Enrollment Offer:</strong> Groups of three or more students enrolling together can benefit from a discounted fee package, making learning even more cost-effective.</li>
          </ul>
          <p>These options make the program not only affordable but also encourage peer learning and collaboration from the very start.</p>
        </section>

        {/* Section 4 */}
        <section className="fee-section">
          <h2>🔹 Offline Option for In-Person Learning</h2>
          <p>
            For students who prefer a fully offline, in-person program, the course is also available at ₹1,00,000. Both versions cover the same content, tools, and ICAP projects, but the online + offline connect model is intentionally priced lower at ₹55,000 to maximize reach and accessibility. This blended model provides the best balance of affordability, flexibility, and quality.
          </p>
        </section>

        {/* Section 5 */}
        <section className="fee-section">
          <h2>🔹 Long-Term Career Benefits</h2>
          <p>
            The fee should be viewed as an investment rather than an expense. By the time students graduate, they are not just degree holders but industry-ready professionals with project portfolios and applied skills. This dramatically improves their chances of securing high-paying roles, global opportunities, or entrepreneurial success. The career value unlocked by this program is worth several lakhs, far outweighing the upfront cost.
          </p>
        </section>

        {/* Comparison Table */}
      <section className="fee-section1">
  <h2>📊 Fee Structure Overview</h2>
  <div className="fee-cards">
    <div className="fee-card">
      <h3>Integrated Online + Offline Connect</h3>
      <p className="duration">⏳ Duration: 2 Years</p>
      <p className="price">₹55,000</p>
      <ul className="highlights">
        <li>Affordable & Flexible</li>
        <li>Access to Industry Experts</li>
        <li>Online + Offline Connects</li>
      </ul>
    </div>

    <div className="fee-card premium">
      <h3>Fully Offline (In-Person)</h3>
      <p className="duration">⏳ Duration: 2 Years</p>
      <p className="price">₹1,00,000</p>
      <ul className="highlights">
        <li>Exclusive In-Person Sessions</li>
        <li>Direct Trainer Interaction</li>
        <li>Hands-on Learning Experience</li>
      </ul>
    </div>
  </div>
</section>


        {/* Footer */}
        <footer className="fee-footer">
          <p>
            🔥 With its affordable pricing, referral and group discounts, and unmatched career value, the iBridge training program is one of the smartest investments a student can make for their future.
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

export default FeeStructure;