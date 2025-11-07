import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import './EnhancedPosterSection.scss';
import StickyKeywordsSidebar from './StickyKeywordsSidebar';
   
const EnhancedPosterSection = () => {
  return (
    <div className="mainheader">
      <Helmet>
        {/* Basic Meta */}
        <title>Narpavi Technologies | Real-World IT Training & Placement</title>
        <meta
          name="description"
          content="Narpavi Technologies offers industry-ready IT training with hands-on projects, expert mentors, and guaranteed placement support. Unlock your career potential with us."
        />
        <meta name="keywords" content="Narpavi Technologies, IT Training, Placement Support, Java, Python, Full Stack, Selenium, Software Courses" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta for social media */}
        <meta property="og:title" content="Narpavi Technologies | Real-World IT Training & Placement" />
        <meta
          property="og:description"
          content="Master in-demand skills with industry experts. Get hands-on training and unlimited placement support at Narpavi Technologies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://narpavitechnologies.com/" />
        <meta property="og:image" content="https://narpavitechnologies.com/images/og-banner.jpg" />

        {/* JSON-LD SEO Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Narpavi Technologies",
            "url": "https://narpavitechnologies.com/",
            "logo": "https://narpavitechnologies.com/images/logo.png",
            "sameAs": [
              "https://www.facebook.com/NarpaviTechnologies",
              "https://www.instagram.com/narpavitechnologies",
              "https://www.linkedin.com/company/narpavi-technologies"
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91-98844-81399",
                "contactType": "Customer Service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Tamil"]
              }
            ],
            "description":
              "Narpavi Technologies is a leading IT training institute in Chennai offering real-world software development and automation courses with placement support."
          })}
        </script>
      </Helmet>

      <div className="narpavi-enhanced-wrapper">
        <div className="narpavi-poster-section">
          <motion.div
            className="poster-left"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2>NARPAVI TECHNOLOGIES</h2>
            <p className="tagline">
              At Narpavi Technologies, we are committed to delivering high-quality, practical IT
              training that transforms your career. With experienced trainers from leading global
              companies, industry-relevant curriculum, and strong placement support, we help
              students and professionals master the latest technologies. Our mission is simple — to
              provide accessible, real-world training that prepares you for success in today’s
              competitive job market.
            </p>
          </motion.div>

          <motion.div
            className="poster-right"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="poster-box">
              <h3>Unlock your potential with us!</h3>
              <p>
                We empower students across disciplines to master in-demand skills.
                Enjoy <strong>unlimited placement support</strong> until you achieve your career goals.
              </p>
              <button className="enroll-btn">📞 Talk to Us</button>
            </div>
          </motion.div>
        </div>
      </div>
      <StickyKeywordsSidebar />
    </div>
  );
};

export default EnhancedPosterSection;
