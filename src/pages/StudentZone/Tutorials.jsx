import React from 'react';
import './Tutorials.scss';
import Nar_Header from '../../components/Nar_Header';

const Tutorials = () => {
  return (
    <>
      <Nar_Header />
    <div className="tutorials-page">
      <header className="tutorials-banner">
        <h1>📚 Course Tutorials</h1>
        <p>
          Enhance your technical knowledge with guided tutorials across the most in-demand technologies. Start learning at your own pace and build real-world skills.
        </p>
      </header>

      <section className="tutorials-what">
        <h2>📘 What Are Tutorials?</h2>
        <p>
          Tutorials are step-by-step learning materials designed to help you understand both the theoretical and practical aspects of a subject. Unlike traditional lectures, our tutorials combine videos, code samples, assignments, and downloadable content to maximize hands-on learning.
        </p>
      </section>

      <section className="tutorials-importance">
        <h2>🎯 Why Are Tutorials Important?</h2>
        <p>
          Tutorials make complex topics simple by breaking them down into smaller, easy-to-digest lessons. They're essential for:
        </p>
        <ul>
          <li>Building foundational understanding</li>
          <li>Developing hands-on skills</li>
          <li>Reinforcing classroom learning</li>
          <li>Preparing for interviews and certifications</li>
        </ul>
      </section>

      <section className="tutorials-categories">
        <h2>🧠 Tutorial Categories</h2>
        <div className="category-grid">
          <span>Java Tutorials</span>
          <span>Python Tutorials</span>
          <span>React.js Tutorials</span>
          <span>Node.js Tutorials</span>
          <span>Data Structures & Algorithms</span>
          <span>AWS Tutorials</span>
          <span>UI/UX Design Basics</span>
          <span>SQL & Database</span>
          <span>DevOps</span>
          <span>Digital Marketing</span>
        </div>
      </section>

      <section className="tutorials-learn">
        <h2>💡 What You'll Learn</h2>
        <p>
          Each tutorial is carefully structured to cover:
        </p>
        <ul>
          <li>Core Concepts (e.g., OOP, Functional Programming, APIs)</li>
          <li>Real-Time Scenarios (CRUD, REST APIs, CI/CD, etc.)</li>
          <li>Code Challenges and Quizzes</li>
          <li>Mini-Projects and Assignments</li>
        </ul>
      </section>

      <section className="tutorials-projects">
        <h2>💻 Practical Projects</h2>
        <p>
          By the end of each tutorial series, you'll complete a real-time project. Example projects include:
        </p>
        <ul>
          <li>Java Banking System</li>
          <li>React Portfolio Website</li>
          <li>Python Web Scraper</li>
          <li>Todo App with Firebase</li>
          <li>DevOps CI/CD Pipeline Setup</li>
        </ul>
      </section>

      <section className="tutorials-tools">
        <h2>🛠 Tools & Platforms</h2>
        <p>Throughout the tutorials, you’ll use:</p>
        <ul>
          <li>Visual Studio Code / IntelliJ / PyCharm</li>
          <li>Git & GitHub</li>
          <li>Figma for UI/UX</li>
          <li>AWS Cloud Console</li>
          <li>Postman / Swagger for APIs</li>
        </ul>
      </section>

      <section className="tutorials-who">
        <h2>👨‍🏫 Who Can Learn?</h2>
        <p>
          Our tutorials are made for:
        </p>
        <ul>
          <li>Students (Beginner to Advanced)</li>
          <li>Working professionals upskilling</li>
          <li>Freelancers and career switchers</li>
          <li>Non-tech learners wanting to enter IT</li>
        </ul>
      </section>

      <section className="tutorials-outcome">
        <h2>📈 Outcome & Certification</h2>
        <p>
          After completing a tutorial series, you’ll gain:
        </p>
        <ul>
          <li>Project-based skills</li>
          <li>Certificate of Completion</li>
          <li>Job-readiness and portfolio material</li>
        </ul>
      </section>

      <section className="tutorials-start">
        <h2>📥 How to Start</h2>
        <p>
          Browse our tutorial categories and click to begin. No login required. Optionally, register to track progress and earn badges!
        </p>
        <button className="tutorials-start-button">Start Learning Now</button>
      </section>
    </div>
    </>
  );
};

export default Tutorials;
