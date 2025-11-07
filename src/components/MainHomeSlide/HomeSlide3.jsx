import React from "react";
import { motion } from "framer-motion";
import "./Homeslide.scss";

const skills = [
  { title: 'Skill-Centric Curriculum', description: 'Get trained in cutting-edge technologies with a curriculum that evolves with market demands — not outdated syllabi.', icon: '★' },
  { title: 'Real-World Projects from Day One', description: 'Work on live, mentor-led projects that simulate industry challenges — and graduate with a portfolio that proves your capabilities.', icon: '★' },
  { title: 'Global Teaching Methodologies', description: 'Learn through a blended pedagogy that combines the best of global education frameworks, flipped classrooms, and active problem-solving.', icon: '★' },
  { title: 'Industry-Endorsed Certifications', description: 'Earn certifications that carry weight — aligned with global tech ecosystems and recognized by hiring managers across sectors.', icon: '★' },
  { title: 'Pan-Engineering Inclusivity', description: "Whether you're from mechanical, civil, electrical, or computer science — our training is designed to elevate every discipline.", icon: '★' },
  { title: '360° Career Development', description: 'From technical mastery to communication skills, design thinking to agile practices — iBridge ensures you are not just employable, you are exceptional.', icon: '★' },
];

const pageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const taglineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const skillListVariants = {
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
};

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
};

const HomeSlide3 = () => {
  return (
    <div className="MainHomeSlideindustry-skills">
      <section className="MainHomeSlidepage-two">
        <motion.div variants={pageVariants} initial="hidden" animate="visible">
          <motion.h1 className="MainHomeSlidetitle" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Skills Are the New Degree
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
          In today’s innovation-driven economy, employers seek skills over scores, and capabilities over credentials. That’s why iBridge isn’t just another training program - it’s a career acceleration platform tailored to help you succeed in the real world.
          </motion.p>

         

          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>
            At iBridge, we empower learners with job-ready skills, hands-on project experience, and future-focused competencies that today’s employers truly value.

          </motion.h2>
          <motion.p className="MainHomeSlidetagline" variants={taglineVariants} initial="hidden" animate="visible">
            iBridge equips you to lead where the industry is heading next.
          </motion.p>

          <motion.div className="MainHomeSlideskills-list" variants={skillListVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="MainHomeSlideskill-item"
                variants={skillItemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(255,207,110,0.5)" }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <span className="MainHomeSlideskill-icon">{skill.icon}</span>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomeSlide3;
