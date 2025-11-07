import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StickyKeywordsSidebar.scss';

const stickyKeywords = [
  { title: "Core Java Training in Chennai with Placement", url: "/core-java-chennai" },
  { title: "Advanced Java & Full Stack Java Training in Chennai", url: "/advanced-fullstack-java" },
  { title: "Java with Spring & Microservices Training in Chennai", url: "/spring-microservices" },
  { title: "Java with Selenium Automation Training in Chennai", url: "/java-selenium-training" },
  { title: "Java Full Stack + Selenium Automation Training in Chennai", url: "/fullstack-selenium" },
];

const StickyKeywordsSidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="sticky-sidebar-keywords">
      <h3 className="sticky-sidebar-keywords__title">Keywords | Narpavi Technology</h3>
      <div className="sticky-sidebar-keywords__list">
        {stickyKeywords.map((item, index) => (
          <button
            key={index}
            className="sticky-sidebar-keywords__item"
            onClick={() => navigate(item.url)}
          >
            {item.title}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default StickyKeywordsSidebar;
