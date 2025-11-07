import React from 'react';
import './Reviews.scss';
import Nar_Header from '../../components/Nar_Header';

const studentReviews = [
  {
    name: "Anjali R.",
    course: "Full Stack Developer Training",
    feedback: "The course was well structured with excellent real-time projects. The trainer clarified all doubts and gave us live coding sessions regularly.",
    rating: 5
  },
  {
    name: "Rahul M.",
    course: "Python Training",
    feedback: "The concepts were clearly explained. The LMS access with recordings helped me revisit sessions and practice effectively.",
    rating: 4
  },
  {
    name: "Suresh K.",
    course: "DevOps Training",
    feedback: "From Jenkins to Kubernetes, the training covered all tools with practical labs. I got placed right after completing the course!",
    rating: 5
  },
  {
    name: "Nandhini P.",
    course: "Data Science Training",
    feedback: "Statistics, ML, Deep Learning — all topics were taught hands-on. Trainers were industry experts with real-world knowledge.",
    rating: 5
  },
  {
    name: "Harish V.",
    course: "AWS Training",
    feedback: "The certification guidance was spot-on. I cleared AWS SAA with 90% and the interview prep module was a bonus.",
    rating: 5
  },
  {
    name: "Deepa S.",
    course: "UI/UX Training",
    feedback: "From wireframing to Figma, this training helped me build my portfolio. I’m now interning as a UI Designer at a tech startup.",
    rating: 4
  },
  {
    name: "Karthik B.",
    course: "Digital Marketing",
    feedback: "Covered SEO, SEM, Social Media & Analytics. The real-time campaigns I created helped me secure a freelance project.",
    rating: 5
  },
  {
    name: "Ritika G.",
    course: ".NET Full Stack Training",
    feedback: "Full-stack with C#, ASP.NET, and SQL Server. The trainer was very knowledgeable and provided job referral assistance.",
    rating: 4
  },
  {
    name: "Prakash J.",
    course: "Mobile App Development",
    feedback: "We built real apps using Flutter. This course boosted my confidence to publish on Play Store.",
    rating: 5
  },
  {
    name: "Swetha L.",
    course: "Java Training",
    feedback: "Clear explanations on OOPs, Spring Boot, and Hibernate. Assignments and live tasks were very helpful.",
    rating: 4
  }
];

const Reviews = () => {
  return (
    <>
      <Nar_Header />  
    <div className="review-page-container">
      <h1 className="review-heading">🌟 Student Reviews</h1>
      <p className="review-subtext">Discover feedback and experiences from our learners across different programs.</p>
      <div className="review-grid">
        {studentReviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3 className="review-name">{review.name}</h3>
            <h4 className="review-course">{review.course}</h4>
            <p className="review-feedback">"{review.feedback}"</p>
            <p className="review-rating">Rating: {Array(review.rating).fill("⭐").join("")}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Reviews;
