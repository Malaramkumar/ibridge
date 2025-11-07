import React from 'react';
import './Internship.scss';
import Nar_Header from '../../components/Nar_Header';

const Internship = () => {
  return (
    <>
      <Nar_Header />
    <div className="internship-page">
      <header className="internship-banner">
        <h1>🎓 Internship Programs</h1>
        <p>Kickstart your career with real-time internship opportunities in top technologies and industry tools.</p>
      </header>

      <section className="internship-overview">
        <h2>📘 Internship Overview</h2>
        <p>
          Our internship programs are tailored to help students and graduates bridge the gap between academic learning and real-world industry experience. Through project-based training, mentorship, and skill development, we ensure you're job-ready and confident.
        </p>
      </section>

      <section className="internship-benefits">
        <h2>✅ Internship Benefits</h2>
        <ul>
          <li>Hands-on real-time project training</li>
          <li>Internship Certificate with project details</li>
          <li>Guidance from industry experts</li>
          <li>Soft skills and resume preparation sessions</li>
          <li>Flexible batch timings (weekday/weekend)</li>
        </ul>
      </section>

      <section className="internship-domains">
        <h2>🌐 Internship Domains</h2>
        <div className="domain-grid">
          <span>Java Development</span>
          <span>Python with Django</span>
          <span>Full Stack Development</span>
          <span>Data Science</span>
          <span>AWS Cloud</span>
          <span>Digital Marketing</span>
          <span>DevOps</span>
          <span>Machine Learning</span>
          <span>Mobile App Development</span>
          <span>UI/UX Design</span>
        </div>
      </section>

      <section className="internship-eligibility">
        <h2>🧑‍🎓 Eligibility Criteria</h2>
        <p>
          Our internship program is open to:
        </p>
        <ul>
          <li>Final year students (B.E., B.Tech, B.Sc, M.Sc, MCA, etc.)</li>
          <li>Recent graduates looking for project exposure</li>
          <li>Working professionals wanting hands-on experience</li>
        </ul>
      </section>

      <section className="internship-certification">
        <h2>📄 Internship Certification</h2>
        <p>
          Upon successful completion, you will receive an industry-recognized internship certificate with project name, technologies used, and duration.
        </p>
      </section>

      <section className="internship-registration">
        <h2>📝 How to Apply</h2>
        <p>
          Interested candidates can register online or walk in to our training centers. After registration, our coordinator will reach out for batch allotment.
        </p>
        <button className="register-button">Register for Internship</button>
      </section>

      <section className="internship-faq">
        <h2>❓ Frequently Asked Questions</h2>
        <div className="faq-item">
          <strong>Q: Do I need prior experience?</strong>
          <p>No, our internships are designed for beginners and intermediate learners.</p>
        </div>
        <div className="faq-item">
          <strong>Q: Will I work on live projects?</strong>
          <p>Yes, each intern works on real-time projects under mentorship.</p>
        </div>
        <div className="faq-item">
          <strong>Q: Is the certificate valid for jobs?</strong>
          <p>Absolutely! Our internship certificate is recognized by IT companies across India.</p>
        </div>
      </section>
    </div>
    </>
  );
};

export default Internship;
