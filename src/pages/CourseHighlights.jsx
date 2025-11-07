import React from 'react';
import { Helmet } from 'react-helmet';
import './CourseHighlights.scss';

const CourseHighlights = () => {
  return (
    <>
      {/* ✅ Meta Tags for SEO */}
      <Helmet>
        <title>Java Course Highlights | Best Java Training in Chennai – Narpavi Technologies</title>
        <meta
          name="description"
          content="Explore key highlights of our Java training in Chennai at Narpavi Technologies. Industry-relevant curriculum, flexible batches, certification, and 100% placement assistance."
        />
        <meta
          name="keywords"
          content="Java Training in Chennai, Best Java Course, Java Certification Chennai, Placement Support Java Course, Java Programming Training"
        />
        <link rel="canonical" href="https://www.narpavitech.in/java-course-highlights" />
      </Helmet>

      <div id="course-highlights-section" className="course-highlights-section">
        <div className="container">
          <h1 className="title">
            Course Highlights and Why Java Training in Chennai – <span>Narpavi Technologies</span>
          </h1>

          <ul className="highlight-points">
            <li>
              Looking to build a successful career in Java programming? <strong>Narpavi Technologies</strong>
              offers industry-relevant Java training in Chennai with hands-on coding experience and real-world project exposure.
            </li>

            <li>
              Our course modules are thoughtfully designed by experts to meet global industry standards,
              ensuring you’re fully prepared for job-ready roles.
            </li>

            <li>
              We conduct regular recap sessions to reinforce previous lessons, so students stay confident and up to date on every concept.
            </li>

            <li>
              Get trained at an affordable cost with certification awarded upon course completion.
            </li>

            <li>
              Choose from flexible batch timings, including weekday and weekend options, tailored to suit both students and working professionals.
            </li>

            <li>
              With end-to-end training, certification, and <strong>100% placement assistance</strong>, Narpavi Technologies is committed to your career success.
              We also have partnerships with over <strong>3,000+ companies</strong>, ranging from startups to MNCs, to help you secure your dream job.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CourseHighlights;
