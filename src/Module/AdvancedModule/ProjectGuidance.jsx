import React from 'react';
import { Helmet } from 'react-helmet';
import '../CoreModule/ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const ProjectGuidance = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Java Project Guidance with Architecture, Tools & Deployment</title>
        <meta
          name="description"
          content="Learn how to structure, develop, debug, and deploy a Java project with step-by-step project guidance using JDBC, JSP, Maven, and more."
        />
        <meta
          name="keywords"
          content="Java project guidance, Java architecture, MVC, DAO, JDBC, JSP, Maven, MySQL, Spring, Hibernate, Deployment, Tomcat"
        />
        <meta name="author" content="Narpavi Technologies" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Java Project Guidance Module | Narpavi Technologies" />
        <meta
          property="og:description"
          content="Get expert guidance on building Java projects using modern practices: MVC architecture, tools like Maven, Git, Jira, and full deployment steps."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://yourdomain.com/images/project-guidance-og.jpg" />
        <meta property="og:url" content="https://yourdomain.com/modules/project-guidance" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Java Project Guidance with Architecture & Tools" />
        <meta
          name="twitter:description"
          content="Understand Java project development from scratch with clean structure, Maven, GitHub, Jira, and deployment tips."
        />
        <meta name="twitter:image" content="https://yourdomain.com/images/project-guidance-og.jpg" />
      </Helmet>

      {/* Page Content */}
      <h1>Module 10: Project Guidance</h1>
      <p><strong>Duration:</strong> 4 hrs</p>

      <h2>🔧 End-to-End Project Guidance using Java and Relevant Technologies</h2>
      <p>
        This session provides step-by-step guidance on building a real-world project using Java, JDBC, Servlets, JSP, Maven, MySQL, and optionally Spring or Hibernate. You will understand how to connect front-end with back-end and perform CRUD operations.
      </p>
      <ul>
        <li>Choosing the right project idea</li>
        <li>Understanding client requirements and converting them to modules</li>
        <li>Breaking down functionality into components</li>
      </ul>

      <h2>📐 Project Structuring and Design Discussion</h2>
      <p>Learn how to properly structure a scalable Java project with clean architecture:</p>
      <pre><code>{`src/
├── controller/
├── model/
├── dao/
├── service/
├── view/ (JSPs)
├── util/
└── web.xml`}</code></pre>
      <p>
        Discuss design patterns like MVC, DAO, Singleton, Factory, and how to use them in your project.
      </p>

      <h2>💻 Development, Debugging, and Deployment Steps</h2>
      <ul>
        <li>Setup development environment using Eclipse, Tomcat, MySQL</li>
        <li>Writing Java classes and JSP pages</li>
        <li>Debugging using Eclipse breakpoints and logs</li>
        <li>Packaging your app using Maven and deploying to Tomcat</li>
      </ul>
      <pre><code>mvn clean install  
cp target/myapp.war /path/to/tomcat/webapps/</code></pre>

      <h2>📦 Industry Best Practices and Tools</h2>
      <p>You'll be introduced to tools and standards used in professional development:</p>
      <ul>
        <li>Version Control: Git & GitHub</li>
        <li>Code Formatting: Google Java Style Guide</li>
        <li>Testing: JUnit</li>
        <li>Dependency Management: Maven</li>
        <li>Issue Tracking: Jira or Trello</li>
        <li>Documentation: Swagger, Javadoc</li>
      </ul>

      <h2>📌 Sample Project Ideas</h2>
      <ul>
        <li>Student Management System</li>
        <li>Online Leave Application Portal</li>
        <li>Inventory Management</li>
        <li>Job Portal using JSP + JDBC + MySQL</li>
      </ul>

      <h2>💬 Interview Tip</h2>
      <p>
        Be ready to explain how you structured your project, why you chose specific tools and technologies, and how you handled errors, data flow, and design. Also be prepared to write basic CRUD operations or describe your architecture in interviews.
      </p>
    </div>
      <Footer />
    </>
  );
};

export default ProjectGuidance;
