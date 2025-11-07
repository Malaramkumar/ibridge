import React from "react";
import { motion } from "framer-motion";
import "./Homeslide.scss";

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

const pageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HomeSlide2 = () => {
  return (
    <div className="MainHomeSlideindustry-skills">
      <section className="MainHomeSlidepage-one">
        <motion.div
          className="MainHomeSlidecontent-layout"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="MainHomeSlidetitle"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Skills First, Career Next
          </motion.h1>
          <div className="MainHomeSlidetext-content">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              Today’s industries are evolving at lightning speed. Traditional degrees alone are no longer enough - what companies need are job-ready individuals with practical skills, adaptability, and real-world exposure. From startups to tech giants, every organization is on the lookout for professionals who can hit the ground running.
            </motion.p>
          </div>
        </motion.div>

        <motion.div className="MainHomeSlidedomains-carousel" variants={pageVariants} initial="hidden" animate="visible" transition={{ delay: 0.8 }}>
          <motion.div className="MainHomeSlidedomains-list" animate={{ x: [0, "-50%"] }} transition={{ duration: domains.length * 2, repeat: Infinity, ease: "linear" }}>
            {domains.concat(domains).map((domain, index) => (
              <motion.div
                key={index}
                className="MainHomeSlidedomain-card"
                style={{ backgroundImage: domain.image }}
                whileHover={{ scale: 1.05, rotate: 2, boxShadow: "0 8px 20px rgba(0,0,0,0.4)" }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <div className="MainHomeSlidecard-overlay">
                  <h3>{domain.title}</h3>
                  <p>{domain.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section> 
      
    </div>
  );
};

export default HomeSlide2;
