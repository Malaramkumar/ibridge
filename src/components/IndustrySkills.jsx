import React from 'react';
import { motion } from 'framer-motion';
import './IndustrySkills.scss';

// Updated domains with correct local image paths from public/images (replace with your actual file names)
const domains = [
  { title: 'Artificial Intelligence & Machine Learning', description: 'Transforming industries with intelligent automation, smart systems, and data-driven innovation.', image: 'url(/images/AI-ML.png)' },
  { title: 'Data Science & Business Analytics', description: 'Critical for decision-making in sectors like finance, manufacturing, healthcare, logistics, and IT.', image: 'url(/images/DS-BS.png)' },
  { title: 'Web, Mobile & Full Stack Development', description: 'In-demand across tech companies, startups, and product development firms.', image: 'url(/images/W-FSD.png)' },
  { title: 'Cybersecurity & Ethical Hacking', description: 'Essential for IT, defense, banking, and digital infrastructure security.', image: 'url(/images/Ethical_Hacking.jpg)' },
  { title: 'Cloud Computing & DevOps', description: 'Powering scalable solutions in IT, automation, and enterprise platforms.', image: 'url(/images/CC-D.png)' },
  { title: 'Internet of Things (IoT) & Embedded Systems', description: 'Connecting devices and systems in smart homes, factories, vehicles, and cities.', image: 'url(/images/IOT-ES.png)' },
  { title: 'AR/VR & Immersive Technologies', description: 'Revolutionizing training, design, simulation, and entertainment industries.', image: 'url(/images/AR-VR.png)' },
  { title: 'Robotics, Mechatronics & Industrial Automation', description: 'Key in automotive, manufacturing, aerospace, and precision engineering.', image: 'url(/images/RM-IA.png)' },
  { title: 'Low Code / No Code Platforms & Software Integration', description: 'Accelerating application development across industries, even for non-CS backgrounds.', image: 'url(/images/LC-NC.png)' },
  { title: 'Green Tech, Renewable Energy & Sustainable Engineering', description: 'Crucial for civil, mechanical, and electrical engineers tackling climate and energy challenges.', image: 'url(/images/GT-RE.png)' },
  { title: 'Smart Infrastructure & Urban Mobility', description: 'Modern solutions in construction, transportation, and city planning.', image: 'url(/images/SI-UM.png)' },
  { title: 'Advanced Materials & Nanotechnology', description: 'Emerging in biomedical, aerospace, electronics, and chemical sectors.', image: 'url(/images/AM-N.png)' },
  { title: 'Process Engineering & Industry 4.0', description: 'Transforming traditional manufacturing with digital technologies and smart processes.', image: 'url(/images/PE-I.png)' },
];

const skills = [
  { title: 'Skill-Centric Curriculum', description: 'Get trained in cutting-edge technologies with a curriculum that evolves with market demands — not outdated syllabi.' },
  { title: 'Real-World Projects from Day One', description: 'Work on live, mentor-led projects that simulate industry challenges — and graduate with a portfolio that proves your capabilities.' },
  { title: 'Global Teaching Methodologies', description: 'Learn through a blended pedagogy that combines the best of global education frameworks, flipped classrooms, and active problem-solving.' },
  { title: 'Industry-Endorsed Certifications', description: 'Earn certifications that carry weight — aligned with global tech ecosystems and recognized by hiring managers across sectors.', },
  { title: 'Pan-Engineering Inclusivity', description: "Whether you're from mechanical, civil, electrical, or computer science — our training is designed to elevate every discipline.",},
  { title: '360° Career Development', description: 'From technical mastery to communication skills, design thinking to agile practices — iBridge ensures you are not just employable, you are exceptional.',},
];

const pageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const taglineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
};

const skillListVariants = {
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
};

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
};

const IndustrySkills = () => {
  return (
    // slide 2
    <div className="industry-skills">
      <section className="page-one">
        <motion.div
          className="content-layout"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Pulse of Industry. The Power of iBridge.
          </motion.h1>
          <div className="text-content">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Today’s industries are evolving at lightning speed. Traditional degrees alone are no longer enough — what companies need are job-ready individuals with practical skills, adaptability, and real-world exposure.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              From startups to tech giants, every organization is on the lookout for professionals who can hit the ground running.
            </motion.p>
          </div>
        </motion.div>
        
        <motion.div
          className="domains-carousel"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="domains-list"
             animate={{ x: [0, '-50%'] }}
            transition={{ duration: domains.length * 2, repeat: Infinity, ease: 'linear' }}
          >
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                className="domain-card"
                style={{ backgroundImage: domain.image }}
                whileHover={{ scale: 1.05, rotate: 2, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)' }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              >
                <div className="card-overlay">
                  <h3>{domain.title}</h3>
                  <p>{domain.description}</p>
                </div>
              </motion.div>
            ))}
            {domains.map((domain, index) => (
              <motion.div
                key={`duplicate-${index}`}
                className="domain-card"
                style={{ backgroundImage: domain.image }}
                whileHover={{ scale: 1.05, rotate: 2, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)' }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              >
                <div className="card-overlay">
                  <h3>{domain.title}</h3>
                  <p>{domain.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      
          {/* slide 3- */}

      <section className="page-two">
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Skills Are the New Degree
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            In today’s innovation-driven economy, employers seek skills over scores, and capabilities over credentials. That’s why iBridge isn’t just another training program — it’s a career acceleration platform tailored to help you succeed in the real world.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            At iBridge, we empower learners with job-ready skills, hands-on project experience, and future-focused competencies that today’s employers truly value.
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Beyond trend-following — we cultivate trendsetters
          </motion.h2>
          <motion.p
            className="tagline"
            variants={taglineVariants}
            initial="hidden"
            animate="visible"
          >
            iBridge equips you to lead where the industry is heading next..
          </motion.p>
          <motion.div
            className="skills-list"
            variants={skillListVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-item"
                variants={skillItemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(255, 207, 110, 0.5)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <span className="skill-icon">{skill.icon}</span>
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

export default IndustrySkills;
