import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const Introduction = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>Java Introduction Module | Learn Java Basics</title>
        <meta name="description" content="Get a strong foundation in Java with our Introduction module. Learn Java basics, versions, and how it's different from other technologies." />
        <meta name="keywords" content="Java Introduction, Java Basics, Java Versions, Why Java, Java vs Other Technologies, Platform Independent, OOP, Java 21" />
        <meta name="author" content="Narpavi Technologies" />
        <link rel="canonical" href="https://www.yourdomain.com/modules/java/introduction" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Java Introduction Module | Learn Java Basics" />
        <meta property="og:description" content="Explore the fundamentals of Java programming: What, Why, and How Java works. Ideal for beginners starting their Java journey." />
        <meta property="og:url" content="https://www.yourdomain.com/modules/java/introduction" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.yourdomain.com/images/java-intro-banner.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Java Introduction Module | Learn Java Basics" />
        <meta name="twitter:description" content="Explore Java fundamentals including versions and key differences from other technologies. Start coding in Java today!" />
        <meta name="twitter:image" content="https://www.yourdomain.com/images/java-intro-banner.png" />
      </Helmet>
      
      <h1>Module 1: Introduction</h1>
      <p><strong>Duration:</strong> 0.5 hr</p>

      <ul>
        <li>✅ Java Why? What? How? When? Where?</li>
        <li>✅ Different Java Versions</li>
        <li>✅ How Java is different from other Technologies</li>
      </ul>

      <section>
        <h2>What is Java?</h2>
        <p>Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.</p>

        <h2>Why Java?</h2>
        <p>Java is widely used for building enterprise-scale applications. It's secure, robust, platform-independent, and has a large community.</p>

        <h2>Different Java Versions</h2>
        <p>From Java 1.0 to Java 21+, new features like lambdas, streams, var keyword, and records have been introduced to simplify programming.</p>

        <h2>How Java Differs from Other Technologies</h2>
        <ul>
          <li>✅ Platform-independent (WORA: Write Once Run Anywhere)</li>
          <li>✅ Robust memory management (Garbage Collector)</li>
          <li>✅ Backward compatibility and rich API ecosystem</li>
          <li>✅ Strong OOP principles</li>
        </ul>
      </section>
    </div>
      <Footer />
    </>
  );
};

export default Introduction;
