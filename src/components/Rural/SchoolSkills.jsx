import React from "react";
import "./SchoolSkills.scss";

const SchoolSkills = () => {
  return (
    <div className="school-main">
      <div className="school-container">
        {/* Header */}
        <header className="school-header">
          <h1>Shaping the Future of School Students through Next-Gen Skills across Tamil Nadu</h1>
          <p>
            At iBridge, we are empowering Tamil Nadu’s school students with next-generation skills to become innovators, problem-solvers, and leaders. Our mission nurtures curiosity, creativity, and technical expertise to build a strong foundation for the future.
          </p>
        </header>

        {/* Section 1 */}
        <section className="school-section">
          <h2>🔹 Our Vision for School Students</h2>
          <p>
            The future of Tamil Nadu’s growth lies in its young learners. iBridge’s program introduces students to emerging domains like Artificial Intelligence, Robotics, Coding & Programming, Data Science, Cybersecurity, Renewable Energy, Design Thinking, and Digital Literacy. Alongside technical skills, we foster 21st-century competencies such as critical thinking, collaboration, and communication to prepare students for a fast-evolving world.
          </p>
        </section>

        {/* Section 2 */}
        <section className="school-section">
          <h2>🔹 Significance of Skill-Based Learning from School Level</h2>
          <p>
            Traditional education provides knowledge, but skill-based learning ensures practical application. By introducing industry-relevant skills early, students connect theory with practice, boosting retention and creativity. Early exposure to hands-on projects fosters confidence and an entrepreneurial mindset. Key advantages include:
          </p>
          <ul>
            <li><strong>Future-Ready Students:</strong> Equipped with skills aligned to global career demands.</li>
            <li><strong>Holistic Development:</strong> Gaining communication, collaboration, and leadership skills.</li>
            <li><strong>Innovation Mindset:</strong> Fostering creativity and resilience through problem-solving.</li>
            <li><strong>Stronger Career Pathways:</strong> Early industry exposure guides informed choices for higher studies and careers.</li>
            <li><strong>Equal Opportunity:</strong> Bridging the gap between rural and urban students for inclusivity.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="school-section">
          <h2>🔹 Experiential Learning with iBridge</h2>
          <p>
            Our initiative emphasizes hands-on, experiential education through project-based modules, interactive workshops, and real-world challenges. Students work on Capstone Projects (ICAP – iBridge Capstone Application Projects) to innovate and solve societal problems. Early mentorship and career awareness connect students with industry experts, guiding them toward higher education and future careers.
          </p>
        </section>

        {/* Section 4 */}
        <section className="school-section">
          <h2>🔹 Program Highlights</h2>
          <p>The iBridge program is designed to prepare students for both academic and professional success:</p>
          <ul>
            <li><strong>Comprehensive Skill Development:</strong> Equipping students with technical and life skills for academics and careers.</li>
            <li><strong>Multi-Domain Learning Pathways:</strong> Exposure to AI/ML, Data Science, Cybersecurity, Mechanical, Civil, Electrical, ECE, Biomedical, and Energy.</li>
            <li><strong>Hands-On Project-Based Learning:</strong> Applying concepts through experiments and real-world problem-solving.</li>
            <li><strong>Early Innovation Mindset:</strong> Nurturing creativity, critical thinking, and design-based approaches.</li>
            <li><strong>Digital Literacy & Emerging Tech Skills:</strong> Building foundations in coding and next-gen technologies.</li>
            <li><strong>Career & Higher Education Readiness:</strong> Awareness of industry opportunities and global career pathways.</li>
            <li><strong>Collaboration & Communication Skills:</strong> Preparing students for teamwork and leadership.</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="school-footer">
          <p>
            🔥 By shaping the skills of today’s school students, iBridge is building a generation of thinkers, creators, and leaders who will drive Tamil Nadu’s progress across industries and communities.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SchoolSkills;