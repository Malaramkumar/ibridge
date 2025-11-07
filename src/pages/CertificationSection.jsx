import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import './CertificationSection.scss';

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const CertificationSection = () => {
  const highlights = [
    "Industry-aligned curriculum covering all essential Java topics",
    "Real-time project experience and hands-on coding practice",
    "Preparation for globally recognized certifications:",
    "✅ Oracle Certified Associate (OCA) – Java SE",
    "✅ Oracle Certified Professional (OCP) – Java SE",
    "Expert-led sessions by certified trainers with 7+ years of experience",
    "Mock tests, practice exams, and interview preparation",
    "Flexible training schedules — for students & working professionals",
    "Dedicated support until you clear your certification exam",
  ];

  const benefits = [
    "Gain global recognition as a certified Java developer",
    "Enhance your credibility and job opportunities",
    "Stand out in interviews with verified skills",
    "Validate expertise in OOPs, Collections, Exceptions & more",
    "Boost your salary and career growth in IT",
  ];

  const pricing = [
    { title: "Core Java Online Training", price: "₹9,999/-" },
    { title: "Java Certification + Exam Prep", price: "₹14,999/-" },
    { title: "Combo Offer: Core + Advanced Java", price: "₹17,999/-" },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Java Certification Training",
    "provider": {
      "@type": "Organization",
      "name": "Narpavi Technologies",
      "sameAs": "https://narpavitech.in"
    },
    "description": "Get certified in Core Java with hands-on training, mock exams, and preparation for OCA/OCP exams.",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "instructor": {
        "@type": "Person",
        "name": "Certified Java Trainers"
      },
      "offers": pricing.map(item => ({
        "@type": "Offer",
        "name": item.title,
        "priceCurrency": "INR",
        "price": item.price.replace(/[₹,/ -]/g, ''),
        "availability": "https://schema.org/InStock",
        "eligibleRegion": "IN",
        "url": "https://narpavitech.in/java-certification"
      }))
    }
  };

  return (
    <section className="certification-section" id="certifications">
      <Helmet>
        <title>Java Certification Course | OCA OCP Training - Narpavi Technologies</title>
        <meta
          name="description"
          content="Join our Java certification training and get prepared for OCA/OCP exams. Hands-on experience, mock tests, and expert guidance. Boost your IT career today!"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="cert-main">

        {/* Header */}
        <motion.div
          className="cert-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>🎓 Java Certification Training and Exam – Narpavi Technologies</h2>
          <p>
            Looking to earn a globally recognized Java Certification and boost your career prospects?
            Our training helps you master Core Java and confidently clear certification exams.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          className="cert-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3>Why Choose Our Java Certification Training?</h3>
          <ul>
            {highlights.map((item, i) => (
              <motion.li
                key={i}
                className="cert-list-item"
                variants={listVariants}
                custom={i}
                whileHover={{ scale: 1.02, backgroundColor: "#ffedd5" }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="cert-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3>Benefits of Java Certification</h3>
          <ul>
            {benefits.map((item, i) => (
              <motion.li
                key={i}
                className="cert-list-item"
                variants={listVariants}
                custom={i}
                whileHover={{ scale: 1.02, backgroundColor: "#ffedd5" }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
          <p>
            Narpavi Technologies equips you with all the resources, guidance, and confidence
            needed to succeed in certification exams and real-world applications.
          </p>
        </motion.div>

        {/* Pricing */}
        <motion.div
          className="cert-pricing cert-block"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02, backgroundColor: "#ffedd5" }}
        >
          <h3>Affordable Java Training & Certification – Pricing</h3>
          <ul>
            {pricing.map((item, i) => (
              <li key={i}>
                <strong>{item.title}</strong> – {item.price}
              </li>
            ))}
          </ul>
          <p className="note">
            Early-bird discounts, group enrollments, and referral bonuses available.
            <br />
            📞 Contact us to learn more!
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default CertificationSection;
