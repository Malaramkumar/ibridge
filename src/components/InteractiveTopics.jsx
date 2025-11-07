import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './InteractiveTopics.scss';
import a from "../assets/FSd.png";

// Topic list with explicit route slugs
const topics = [
  {
    title: 'Full-Stack Training',
    description: 'Learn both frontend and backend technologies including HTML, CSS, React, Node.js, and databases. Build complete web applications from scratch.',
    image: a,
    route: '/footerCourse/fullstack'
  },
  {
    title: 'Data Science & Python',
    description: 'Data Science with Python combines statistical analysis, machine learning, and data visualization using powerful libraries like Pandas, NumPy, Scikit-learn, and Matplotlib.',
    image: a,
    route: '/footerCourse/data-science-python'
  },
  {
    title: 'DevOps & Cloud',
    description: 'Understand CI/CD, Docker, Kubernetes, and cloud platforms like AWS and Azure. Automate and scale applications.',
    image: a,
    route: '/footerCourse/devops'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Dive into ML, neural networks, and data analysis using Python libraries like TensorFlow and scikit-learn.',
    image: a,
    route: '/footerCourse/ai'
  }
];

const InteractiveTopics = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleTopicClick = (idx, route) => {
    setActiveIndex(idx);
    navigate(route); // Navigate to the specified route
  };

  return (
    <section className="interactive-topics">
      <div className="left-content">
        <h2>Explore Our In-Demand Training Tracks</h2>

        <div className="topics-list">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className={`topic ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => handleTopicClick(idx, topic.route)}
            >
              <h3>{topic.title}</h3>
              {activeIndex === idx && (
                <p className="description">{topic.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="right-image">
        <img src={topics[activeIndex].image} alt={topics[activeIndex].title} />
      </div>
    </section>
  );
};

export default InteractiveTopics;
