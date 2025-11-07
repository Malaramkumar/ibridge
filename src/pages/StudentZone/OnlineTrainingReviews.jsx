import React from 'react';
import './OnlineTrainingReviews.scss';
import Nar_Header from '../../components/Nar_Header';

const OnlineTrainingReviews = () => {
  const reviews = [
    {
      name: "Priya S.",
      course: "Full Stack Developer",
      feedback: "The course was extremely well-structured. The trainer explained backend and frontend development very clearly with practical examples. The weekend live sessions helped me revise everything efficiently.",
    },
    {
      name: "Rahul D.",
      course: "Python with Data Science",
      feedback: "Highly interactive sessions with practical use cases in every module. The online Python course with real-time Data Science projects boosted my confidence. Worth every penny!",
    },
    {
      name: "Sathish Kumar",
      course: "AWS Cloud Training",
      feedback: "The online AWS classes gave me hands-on experience with cloud computing services like EC2, Lambda, and S3. Got my AWS certification within two months!",
    },
    {
      name: "Deepika M.",
      course: "UI/UX Design",
      feedback: "The mentor was a certified UX expert and gave us real client projects. Every session was detailed and industry-oriented. Loved the portfolio-building module.",
    },
    {
      name: "Vikram R.",
      course: ".NET with Angular",
      feedback: "I'm from a non-IT background, but this course made it easy to understand .NET concepts with step-by-step learning. The trainer was patient and experienced.",
    },
    {
      name: "Nandhini A.",
      course: "DevOps with Jenkins & Docker",
      feedback: "The online course helped me master automation tools like Jenkins, Docker, and Kubernetes. Weekly assessments kept me on track.",
    },
    {
      name: "Surya K.",
      course: "Android App Development",
      feedback: "The Kotlin-based training and Android Studio projects helped me create 3 full apps. Great support and timely doubt clearing from mentors.",
    },
    {
      name: "Aarthi G.",
      course: "Java with Spring Boot",
      feedback: "From core Java to advanced Spring Boot, the classes were super detailed. Assignments and code reviews kept us engaged. Really helped me during placements.",
    },
    {
      name: "Manikandan P.",
      course: "Digital Marketing",
      feedback: "This course covered SEO, Google Ads, SMM, and content strategy. Weekly live tasks gave me real-time experience. I even started freelancing!",
    },
    {
      name: "Kavitha R.",
      course: "R Programming & Analytics",
      feedback: "The online sessions were interactive, and the trainer always gave case studies. Built a predictive model using R and deployed it—excellent learning experience.",
    },
  ];

  return (
    <>
      <Nar_Header />
    <div className="online-training-reviews-container">
      <h1 className="otr-heading">🌐 Online Training Reviews</h1>
      <p className="otr-subheading">See what our learners say after completing their online courses with us.</p>

      <div className="otr-grid">
        {reviews.map((review, index) => (
          <div className="otr-card" key={index}>
            <h2 className="otr-name">{review.name}</h2>
            <h3 className="otr-course">Course: {review.course}</h3>
            <p className="otr-feedback">"{review.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default OnlineTrainingReviews;
