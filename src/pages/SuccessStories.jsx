import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import './SuccessStories.scss';

const successStories = [
  {
    name: "Priya M.",
    role: "Software Developer, IBM",
    message:
      "The certification training at Narpavi Technologies made my concepts crystal clear. I cleared my Oracle Java Certification and landed my dream job!",
  },
  {
    name: "Ramesh V.",
    role: "Java Developer, Microsoft",
    message:
      "The trainers focused on real-world examples, which boosted my confidence. With their placement support, I cracked technical rounds at Microsoft.",
  },
  {
    name: "Sandhya R.",
    role: "Placed in HCL Technologies",
    message:
      "Narpavi Technologies gave me practical knowledge, certification support, and complete interview preparation. Highly recommended for anyone serious about Java!",
  },
];

// JSON-LD structured data for SEO (as type: Review)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Student Success Stories - Narpavi Technologies",
  itemListElement: successStories.map((story, index) => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": story.name
    },
    "reviewBody": story.message,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": 5,
      "bestRating": 5,
      "worstRating": 1
    },
    "itemReviewed": {
      "@type": "Course",
      "name": "Core Java Training",
      "provider": {
        "@type": "Organization",
        "name": "Narpavi Technologies"
      }
    },
    "position": index + 1
  }))
};

const SuccessStories = () => {
  return (
    <section className="success-stories">
      {/* Meta Tags + SEO */}
      <Helmet>
        <title>Student Success Stories | Narpavi Technologies</title>
        <meta
          name="description"
          content="Explore real success stories from students who completed Core Java training at Narpavi Technologies and got placed in top MNCs like IBM, Microsoft, and HCL."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Student Success Stories | Narpavi Technologies" />
        <meta property="og:description" content="Explore success stories of Java students placed at IBM, Microsoft, HCL & more. Learn how Narpavi Technologies made it possible!" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Student Success Stories
      </motion.h2>

      <div className="stories-grid">
        {successStories.map((story, idx) => (
          <motion.div
            className="story-card"
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{
              scale: 1.02,
              backgroundColor: "#fff7ed",
              boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)"
            }}
          >
            <p className="message">“{story.message}”</p>
            <h4 className="name">{story.name}</h4>
            <p className="role">{story.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
