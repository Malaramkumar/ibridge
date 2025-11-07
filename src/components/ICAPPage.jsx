import React from 'react';
import { motion } from 'framer-motion';
import './ICAPPage.scss';

const ICAPPage = () => {
  return (
    <motion.div
      className="icap-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.header
        className="icap-header"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, type: 'spring', stiffness: 100, damping: 20 }}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        <motion.h1
          className="icap-title"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
          whileHover={{ color: '#2a5298', textShadow: '0 0 10px rgba(30, 58, 138, 0.5)' }}
          whileTap={{ scale: 0.98 }}
        >
          I-CAP - Industry-aligned Capstone Application Program
        </motion.h1>
        <motion.h2
          className="icap-subtitle"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
          whileHover={{ color: '#64748b', letterSpacing: '1px' }}
        >
          Bridging Academia & Industry for Engineering Excellence
        </motion.h2>
      </motion.header>

      <motion.section
        className="icap-section"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease: 'backOut' }}
        whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(30, 58, 138, 0.3)' }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="icap-section-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
        <motion.h3
          className="icap-subheading"
          initial={{ opacity: 0, y: 30, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 1.0, duration: 0.7, ease: 'easeOut' }}
          whileHover={{ color: '#2a5298', scale: 1.03 }}
        >
          What is I-CAP?
        </motion.h3>
        <motion.p
          className="icap-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7, type: 'spring', stiffness: 80 }}
          whileHover={{ backgroundColor: '#f0f4f8', padding: '1rem', borderRadius: '4px' }}
        >
          A project development and research training program designed specifically for engineering students across all departments. Students work in teams on real-world, cutting-edge projects per current industry standard in accordance with knowledge sources from the latest IEEE Transactions papers (2025 edition), guided by industry experts.
        </motion.p>
      </motion.section>

      <motion.section
        className="icap-section"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: 'circOut' }}
        whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(30, 58, 138, 0.3)' }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="icap-section-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
        <motion.h3
          className="icap-subheading"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.7, ease: 'easeInOut' }}
          whileHover={{ color: '#2a5298', textDecoration: 'underline' }}
        >
          Key Features
        </motion.h3>
        <motion.ul
          className="icap-list"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.7, staggerChildren: 0.2 }}
        >
          <motion.li
            initial={{ opacity: 0, x: -20, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, type: 'tween' }}
            whileHover={{ color: '#2a5298', scale: 1.02 }}
          >
            <strong>Collaborative Projects:</strong> Groups of 2-4 students develop innovative solutions based on Emerging Technology.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, type: 'tween' }}
            whileHover={{ color: '#2a5298', scale: 1.02 }}
          >
            <strong>Hands-On Training:</strong> From software installation and concept clarity to coding and algorithms—end-to-end support.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, type: 'tween' }}
            whileHover={{ color: '#2a5298', scale: 1.02 }}
          >
            <strong>Research Article Support:</strong> Professional research paper drafting (Optional, on request , Rs. 4,500 per paper). Assistance in publishing in IEEE conferences with Scopus indexing ( Rs. 6,000–10,000).
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, type: 'tween' }}
            whileHover={{ color: '#2a5298', scale: 1.02 }}
          >
            <strong>Career-Oriented Skill Enhancement:</strong> Optional upskilling in job-relevant languages and tools tailored to student needs.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, type: 'tween' }}
            whileHover={{ color: '#2a5298', scale: 1.02 }}
          >
            <strong>Faculty Collaboration:</strong> Faculty members can propose their own research projects as capstone titles.
          </motion.li>
        </motion.ul>
      </motion.section>

      <motion.section
        className="icap-section"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2.1, duration: 0.8, ease: 'backInOut' }}
        whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(30, 58, 138, 0.3)' }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="icap-section-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
        <motion.h3
          className="icap-subheading"
          initial={{ opacity: 0, y: 30, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 2.2, duration: 0.7, ease: 'easeOut' }}
          whileHover={{ color: '#2a5298', scale: 1.03 }}
        >
          Why I-CAP Matters for Students’ Careers
        </motion.h3>
        <motion.ul
          className="icap-list"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.7, staggerChildren: 0.2 }}
        >
          <motion.li
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            whileHover={{ color: '#2a5298', scale: 1.02 }}
          >
            <strong>Industry-Relevant Experience:</strong> Students gain hands-on knowledge of the latest technologies and methodologies directly aligned with industry demands.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            whileHover={{ color: '#2a5298', scale: 1.02 }}
          >
            <strong>Research & Publication:</strong> Boost academic profiles and resumes with IEEE-indexed publications — a Game-changer for higher studies and job placements.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            whileHover={{ color: '#2a5298', scale: 1.02 }}
          >
            <strong>Teamwork & Problem Solving:</strong> Real-world project collaboration builds soft skills critical for workplace success.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            whileHover={{ color: '#2a5298', scale: 1.02 }}
          >
            <strong>Job-Ready Skills:</strong> Optional training in niche B2B/B2C solutions ensures students are prepared for immediate employment opportunities.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            whileHover={{ color: '#2a5298', scale: 1.02 }}
          >
            <strong>Mentorship by Experts:</strong> Learning from professionals with 15+ years of industry experience bridges the gap between theory and practice.
          </motion.li>
        </motion.ul>
      </motion.section>

      <motion.section
        className="icap-section"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2.7, duration: 0.8, ease: 'easeIn' }}
        whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(30, 58, 138, 0.3)' }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="icap-section-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
        <motion.h3
          className="icap-subheading"
          initial={{ opacity: 0, y: 30, rotate: 10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 2.8, duration: 0.7, ease: 'easeInOut' }}
          whileHover={{ color: '#2a5298', scale: 1.03 }}
        >
          How I-CAP Works
        </motion.h3>
        <motion.ul
          className="icap-list"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 0.7, staggerChildren: 0.2 }}
        >
          <motion.li
            initial={{ opacity: 0, x: 20, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, type: 'tween' }}
            whileHover={{ color: '#2a5298', scale: 1.02 }}
          >
            <strong>Project Selection:</strong> Choose from the latest IEEE 2025 papers or faculty-suggested research topics. Topics are primarily focused on real-world industrial challenges.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: 20, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, type: 'tween' }}
            whileHover={{ color: '#2a5298', scale: 1.02 }}
          >
            <strong>Team Formation:</strong> Students form groups of 2-4 to encourage collaboration and collective learning.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: 20, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, type: 'tween' }}
            whileHover={{ color: '#2a5298', scale: 1.02 }}
          >
            <strong>Comprehensive Training:</strong> Software setup, concept building, algorithm understanding, and coding—all guided by industry experts.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: 20, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, type: 'tween' }}
            whileHover={{ color: '#2a5298', scale: 1.02 }}
          >
            <strong>Project Development:</strong> Build innovative, high-impact solutions with novelty enhancement support.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: 20, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, type: 'tween' }}
            whileHover={{ color: '#2a5298', scale: 1.02 }}
          >
            <strong>Research Paper Creation (On Request as an additional service):</strong> Assistance in drafting and polishing research articles for academic publishing.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: 20, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.5, type: 'tween' }}
            whileHover={{ color: '#2a5298', scale: 1.02 }}
          >
            <strong>Publishing Support (On Request as an additional service):</strong> End-to-end help to publish in IEEE conferences with Scopus indexing.
          </motion.li>
        </motion.ul>
      </motion.section>

      <motion.section
        className="icap-section icap-cta"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 3.9, duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.03, boxShadow: '0 12px 24px rgba(30, 58, 138, 0.3)' }}
      >
        <motion.div
          className="icap-section-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
        <motion.h3
          className="icap-subheading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.0, duration: 0.7 }}
          whileHover={{ color: '#ffcf6e', scale: 1.02 }}
        >
          Ready to Elevate Your Students’ Careers?
        </motion.h3>
        <motion.p
          className="icap-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.2, duration: 0.7 }}
          whileHover={{ color: '#e2e8f0', scale: 1.01 }}
        >
          Partner with RANMARS CORP. and empower your students with I-CAP — the bridge from classroom to career.
        </motion.p>
        <motion.a
          href="mailto:partnerships@ranmarscorp.com"
          className="icap-cta-button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, backgroundColor: '#f7c948', color: '#1e3a8a', boxShadow: '0 0 15px rgba(247, 201, 72, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 4.4, duration: 0.7 }}
        >
          Contact Us
        </motion.a>
      </motion.section>
    </motion.div>
  );
};

export default ICAPPage;