import React from 'react';
import './OnlineTraining.scss';
import Nar_Header from '../../components/Nar_Header';

const OnlineTraining = () => {
  return (
    <>
      <Nar_Header />
    <div className="online-training-wrapper">
      <header className="online-training-header">
        <h1>🖥️ Online Training</h1>
        <p className="online-training-intro">
          Join our comprehensive live online training programs conducted by industry-certified trainers. Learn at your convenience from anywhere in the world.
        </p>
      </header>

      <section className="online-training-section">
        <h2>🎯 Why Choose Our Online Training?</h2>
        <ul>
          <li>Live, instructor-led sessions</li>
          <li>Hands-on practical training</li>
          <li>Flexible batch timings</li>
          <li>Real-time projects & assignments</li>
          <li>Recorded sessions & lifetime access</li>
          <li>Dedicated support & doubt-clearing sessions</li>
        </ul>
      </section>

      <section className="online-training-section">
        <h2>📚 Courses We Offer</h2>
        <p>We provide online training across a wide range of technologies:</p>
        <ul>
          <li>Java Full Stack Development</li>
          <li>Python Programming</li>
          <li>DevOps & AWS Cloud</li>
          <li>Data Science & Machine Learning</li>
          <li>UI/UX & Front-End Technologies</li>
          <li>Mobile App Development (Android/iOS)</li>
          <li>Software Testing & Automation (Selenium)</li>
          <li>Digital Marketing & SEO</li>
          <li>Cybersecurity & Ethical Hacking</li>
        </ul>
      </section>

      <section className="online-training-section">
        <h2>🔍 Course Features</h2>
        <p>Each course includes the following features to ensure maximum benefit for our learners:</p>
        <ul>
          <li>Well-structured curriculum aligned with industry standards</li>
          <li>Live coding sessions and project walkthroughs</li>
          <li>Resume and interview preparation support</li>
          <li>Hands-on labs and remote VM access</li>
          <li>Final capstone project & certification</li>
        </ul>
      </section>

      <section className="online-training-section">
        <h2>💬 Student Reviews & Testimonials</h2>
        <p>Hear directly from our students:</p>
        <blockquote>
          “I enrolled in the Data Science Online Training, and it exceeded my expectations! The trainers were knowledgeable, and the projects were industry-standard.” – <strong>Priya M.</strong>
        </blockquote>
        <blockquote>
          “Flexible class timings helped me balance my work and study. I highly recommend their online DevOps course.” – <strong>Rahul S.</strong>
        </blockquote>
        <blockquote>
          “The recorded sessions and one-on-one mentoring helped me land my first job as a Python Developer!” – <strong>Kiran R.</strong>
        </blockquote>
      </section>

      <section className="online-training-section">
        <h2>🚀 Who Can Join?</h2>
        <p>This training is ideal for:</p>
        <ul>
          <li>College students and fresh graduates</li>
          <li>Working professionals looking for upskilling or career shift</li>
          <li>Entrepreneurs & freelancers wanting to learn new skills</li>
          <li>Job seekers aiming to crack technical interviews</li>
        </ul>
      </section>

      <section className="online-training-section">
        <h2>📞 How to Enroll</h2>
        <p>It’s simple:</p>
        <ol>
          <li>Visit our <a href="/contact">Contact Page</a> or call us at +91-89399 15577</li>
          <li>Choose your course & batch timing</li>
          <li>Make the payment and get started instantly</li>
        </ol>
        <p className="online-training-note">Note: Early bird discounts and group offers available!</p>
      </section>
    </div>
    </>
  );
};

export default OnlineTraining;
