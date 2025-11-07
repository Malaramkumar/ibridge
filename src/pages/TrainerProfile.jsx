import React from 'react';
import './TrainerProfile.scss';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const TrainerProfile = () => {
  const highlights = [
    "7+ Years of Real-Time Industry Experience",
    "Trained 2000+ Students Annually",
    "Certified Java Professionals",
    "Strong Theoretical & Practical Java Knowledge",
    "Real-World Project Exposure",
    "Direct HR & MNC Hiring Manager Connections",
    "Up-to-date with Modern Java Trends"
  ];

  const features = [
    "100% Practical Training with Real-Time Projects",
    "Led by Certified Trainers with 7+ Years Experience",
    "Flexible Batch Timings — Weekdays & Weekends",
    "Resume Building & Interview Preparation",
    "Unlimited Trainer Access & Doubt Support",
    "Live Projects with Real-World Use Cases",
    "Trainers from TCS, HCL, ZOHO, IBM, Microsoft",
    "Affordable Fees & Premium Learning Materials",
    "Dedicated Placement Support",
    "Curriculum Aligned with Industry Standards"
  ];

  return (
    <section className="trainer-profile" id="trainer-profile">
      <Helmet>
        <title>Java Trainer Profile - Learn from Certified Experts | Narpavi Technologies</title>
        <meta
          name="description"
          content="Meet our certified Java trainers with 7+ years of real-time industry experience. Get practical training, live project exposure, and placement support at Narpavi Technologies."
        />
        <meta
          name="keywords"
          content="Java Trainer in Chennai, Core Java Training, Java Expert, Practical Java Training, Java Certification, Narpavi Technologies, Java Placement Support"
        />
        <link rel="canonical" href="https://www.narpavitechnologies.com/java/trainer-profile" />
      </Helmet>
      <div className="trainer-header">
        <h2>👨 Trainer Profile for Core Java Online Training</h2>
        <p>
          At <strong>Narpavi Technologies</strong>, we take pride in delivering world-class Java training through mentors who blend real-time industry experience with excellent teaching skills.
        </p>
      </div>

      <div className="learning-style">
        <div className="learning-wrapper">
          <motion.div
            className="learning-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Learn Java the Right Way</h3>
            <ul>
              {[
                "Unlimited Doubt Clarification",
                "Real-Time Project Examples & Use Cases",
                "Interview Preparation with FAQs",
                "Guidance from Working Professionals"
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>


      <div className="key-features">
        <h3>Key Features of Core Java Training</h3>
        <ul className="features-grid">
          {features.map((feature, idx) => (
            <li key={idx} className="feature-card">
               {feature}
            </li>
          ))}
        </ul>
      </div>


      <div className="final-note">
        <p>
           Whether you're a fresher or a working professional, our program ensures practical learning, real-world readiness, and placement support to take your career to the next level.
        </p>
        <p><strong>Join Narpavi Technologies and start your Java journey with confidence!</strong></p>
      </div>
  </section>
    
  );
};

export default TrainerProfile;
