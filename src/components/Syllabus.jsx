import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Syllabus.scss";

const syllabus = [
  {
    id: 1,
    level: 1,
    title: 'Responsive Site Design DSGN8236',
    details:
      'Responsive site design aims to build adaptive web pages to support a variety of devices with various screen sizes. This course focuses on front-end web development languages, such as HTML5 and CSS3. Students will learn the syntax and proper coding techniques for building rich and scalable websites while maintaining compatibility with various browsers and versions. Different integrated development environments (IDEs) will be introduced in this course. Accessibility features of HTML and CSS coding will also be an area of focus. • Hours: 56 • Credits: 4 • Pre-Requisites: NIL',
    expanded: false,
  },
  {
    id: 2,
    level: 1,
    title: 'Digital Design and User Interaction DSGN8291',
    details:
      'This course provides students the knowledge to create compelling user interfaces (UI) for various (screen-based), people-facing digital products. Students will be introduced to techniques for designing user-centric product layouts with the use of design systems, patterns, and components for implementation and evaluation. Students will explore the use of effective design systems and patterns and learn to create wireframes for blocking out information from low fidelity to high fidelity clickable prototype UI design concepts. This course will also emphasize quality user experiences (UX) and accessibility. • Hours: 56 • Credits: 4 • Pre-Requisites: NIL',
    expanded: false,
  },
  {
    id: 3,
    level: 1,
    title: 'Database Design DSGN8301',
    details:
      'In this course, students will create and design a fully functional relational database system (RDMS) using Structured Query Language (SQL). The course will also demonstrate hands-on application with the MySQL database including creating tables, normalizing databases, and building queries. Students will practice writing functions, stored procedures, and perform CRUD (Create, Read, Update, Delete) operations. • Hours: 42 • Credits: 3 • Pre-Requisites: NIL',
    expanded: false,
  },
  {
    id: 4,
    level: 1,
    title: 'Requirements Development INFO8516',
    details:
      'This course focuses on capturing, interpreting, and conveying both technical and non-technical requirements to project stakeholders. Students will learn how to develop requirements through elicitation, analysis, specification, and validation, and prioritize them to align with project scope. Course work will include a combination of written deliverables and group presentations to stakeholders. • Hours: 28 • Credits: 2 • Pre-Requisites: NIL',
    expanded: false,
  },
  {
    id: 5,
    level: 1,
    title: 'Project Management MGMT8666',
    details:
      'Project management has become central to the operations of any organization. This course focuses on the general principles of project management as well as Agile Project Management and its methodologies. This course takes a holistic, integrated approach to managing projects, exploring both technical and managerial challenges. Students will apply skills gathered from examining real-world cases into simulated projects done in the classroom. This course will help prepare students to write the Project Management Institute (PMI) exams to become a Certified Associate in Project Management (CAPM). • Hours: 56 • Credits: 4 • Pre-Requisites: NIL',
    expanded: false,
  },
  {
    id: 6,
    level: 1,
    title: 'JavaScript Programming PROG8661',
    details:
      'This course will introduce client-side browser scripting using JavaScript programming techniques. Students will focus on client-side web scripting and develop their ability to manage interactive websites using JavaScript Programming while manipulating a page\'s HTML and CSS code. Students will work with JavaScript concepts to handle both simple and complex client-side webpage events. This course will also introduce code version control and code collaboration. Accessibility features of JavaScript coding and debugging best practices will also be explored. • Hours: 56 • Credits: 4 • Pre-Requisites: NIL',
    expanded: false,
  },
  {
    id: 7,
    level: 2,
    title: 'Advanced Database Design DSGN8311',
    details:
      'This course builds on the concepts of Database Design. Students will design, implement and administer robust databases using advanced SQL features such as join, user-defined data types, trigger, transaction, functions, procedures and integrity constraints. The idea and necessity of a NoSQL database as well as the semi structured data model and XML will also be introduced. • Hours: 84 • Credits: 6 • Pre-Requisites: DSGN8300 OR DSGN8301',
    expanded: false,
  },
  {
    id: 8,
    level: 2,
    title: 'Advanced Responsive Site Design DSGN8321',
    details:
      'This course builds on the concepts of Response Site Design. Students will learn to incorporate CSS techniques for dynamic, interactive, data-driven, and customer-centered design aligned with the emerging trend and demands of the global market. Advanced topics include bits web multimedia interactivity and web accessibility. • Hours: 42 • Credits: 3 • Pre-Requisites: DSGN8235 OR DSGN8236',
    expanded: false,
  },
  {
    id: 9,
    level: 2,
    title: 'Full-Stack Programming PROG8671',
    details:
      'This course will provide students with hands-on experience with a server-side programming language and other adjoining technologies. Students will learn about user authentication, data validation, asynchronous JavaScript, password hashing, templating engines and maintaining user sessions. Students will also deploy a website on a cloud platform. • Hours: 42 • Credits: 3 • Pre-Requisites: NIL',
    expanded: false,
  },
  {
    id: 10,
    level: 2,
    title: 'Advanced JavaScript Programming PROG8681',
    details:
      'This course builds on JavaScript Programming to explore advanced concepts. Students will learn to apply intermediate concepts of JavaScript, including object-oriented programming concepts using the Document Object Model. They will also use API, exception handling, event handling, testing, and debugging techniques. This course will explore ECMAScript and use accessibility features of JavaScript for publishing websites for a variety of applications. This course will also include concepts of Ajax, Node, JSON and Web APIs. • Hours: 56 • Credits: 4 • Pre-Requisites: PROG8660 OR PROG8661',
    expanded: false,
  },
  {
    id: 11,
    level: 2,
    title: 'Mobile Application Development PROG8691',
    details:
      'In this course students will learn fundamental skills to create applications for Android mobile devices by following common Android development standards. Students will use Java for the development of modern Android applications. Problem solving and accessibility features of Android applications will also be introduced. • Hours: 56 • Credits: 4 • Pre-Requisites: NIL',
    expanded: false,
  },
  {
    id: 12,
    level: 3,
    title: 'Advanced Mobile Application Development PROG8701',
    details:
      'This course builds on the concepts studied in Mobile Application Development. Students will continue to enhance their software design and development skills to create business and technical solutions for mobile devices. Applications will be designed to use authentication to securely interact with Cloud based storage and databases. Cross-platform solutions will also be explored, allowing the students to develop applications for different mobile devices with a single codebase. • Hours: 56 • Credits: 4 • Pre-Requisites: PROG8690 OR PROG8691',
    expanded: false,
  },
  {
    id: 13,
    level: 3,
    title: 'Programming with .NET PROG8711',
    details:
      'This course introduces the students to various aspects of Microsoft Windows programming, beginning with the Application Programming Interface (API). Students will learn C# programming fundamentals using object-oriented paradigms and learn to access supporting databases working with Visual C# code, ADO.NET and HTML5/CSS3/Bootstrap to enforce business rulesets. This course puts ASP.NET Core Model-View-Controller (MVC) into context and dives deep into the tools and techniques required to build modern, cloud-optimized extensible web applications. Visual Studio.NET software will be used for project development. Topics included: Developing single/multi-page web applications, using ASP.NET essential controls, SQL data sources, and ADO.NET. • Hours: 56 • Credits: 4 • Pre-Requisites: NIL',
    expanded: false,
  },
  {
    id: 14,
    level: 3,
    title: 'PHP Programming with MySQL PROG8721',
    details:
      'In this course, students will learn and apply essential industry-standard skills in PHP scripting including writing queries to MySQL databases for dynamic and database-driven Web content. This course also provides required skills for developing PHP Web applications and MySQL database administration. Topics include common PHP script elements, file/directory handling, data encryption and working with HTML forms. Students also learn PHP techniques that address the stateless nature of HTTP; these techniques include hidden form fields, cookies, PHP session variables, PHP-Ajax, processing JSON, XML data from API Calls, accessibility, and utilizing Content Management Systems like WordPress for creating an e-Commerce website. • Hours: 56 • Credits: 4 • Pre-Requisites: NIL',
    expanded: false,
  },
  {
    id: 15,
    level: 3,
    title: 'Advanced Full-Stack Programming PROG8731',
    details:
      'This course builds on the concepts of Full-Stack Programming. Students will learn and apply MERN-based web development to meet the needs of the global market. This course combines React with industry-tested server-side technologies such as Node, Express, and MongoDB and similar tools for developing real-world web applications that include web accessibility features. Students will learn data fetching techniques using REST API/GraphQL. Student will learn React specific terminology like components, state, props, classes, router. • Hours: 56 • Credits: 4 • Pre-Requisites: PROG8670 OR PROG8671',
    expanded: false,
  },
  {
    id: 16,
    level: 3,
    title: 'Web Traffic and Search Engine Optimization PROG8741',
    details:
      'In this course, students will learn various techniques for collecting and analyzing web traffic to support marketing purposes, business initiatives and information aggregation. Students will learn and apply various Search Engine Optimization (SEO) strategies to maximize a web application\'s search engine visibility or ranking. • Hours: 56 • Credits: 4 • Pre-Requisites: NIL',
    expanded: false,
  },
  {
    id: 17,
    level: 4,
    title: 'Career Management CDEV8132',
    details:
      'This course focuses on career management skills needed to navigate the evolving workplace. Students will evaluate their skills, attitudes, and expectations within their chosen careers and explore emerging trends in the workplace. Students will refine their networking strategies and create marketing documents to position them for success. Mock interviews will provide the opportunity for practice, feedback, and reflection as students prepare for future interviews. Students will explore communication strategies that support workplace success and advancement. By the end of this course, students will have created a personalized career management plan. • Hours: 28 • Credits: 2 • Pre-Requisites: NIL',
    expanded: false,
  },
  {
    id: 18,
    level: 4,
    title: 'Management and Leadership Essentials MGMT8761',
    details:
      'In this course, students will enhance their understanding of leadership and management approaches in Canadian organizations. Emphasis on developing effective management strategies including, professional communication, planning, decision making, conflict resolution, effective team building and navigating change. Key concepts include professionalism, adaptability, boundaries and resourcefulness. • Hours: 42 • Credits: 3 • Pre-Requisites: NIL',
    expanded: false,
  },
  {
    id: 19,
    level: 4,
    title: 'Capstone (Web Development) PROG8751',
    details:
      'In this course, students will apply all the skills learned throughout the program to create industry-standard web/mobile applications that will become part of their professional portfolio. Students will work in groups and apply project management and development practices to coordinate and manage deliverables. By the end of the course, the students will produce a written project report and practical demonstration of their implemented project. • Hours: 56 • Credits: 4 • Pre-Requisites: PROG8700 OR PROG8701 AND PROG8710 OR PROG8711 AND PROG8720 OR PROG8721 AND PROG8730 OR PROG8731 AND PROG8740 OR PROG8741',
    expanded: false,
  },
  {
    id: 20,
    level: 4,
    title: 'Web Content Management Systems PROG8761',
    details:
      'Well-developed software improves daily life, includes flawless codes and an accessible user interface, and supports the most common security constraints against vulnerabilities. This course aims to allow students to integrate skills from previously learned techniques by developing feature-enriched and compelling applications. This course needs a combination of teamwork and individual efforts to build applications that meet industry trends. The developed product will be a substantial web and smartphone application. • Hours: 42 • Credits: 3 • Pre-Requisites: NIL',
    expanded: false,
  },
  {
    id: 21,
    level: 4,
    title: 'Advanced Programming with .NET PROG8771',
    details:
      'This course teaches how to use Visual Studio to design, code, and test multi-page ASP.NET Core apps that use the MVC pattern, work with a database, and use Bootstrap to make the apps look great on all screen sizes. Also includes skills of endpoint routing, razor views, model binding and using Entity framework. This course also helps the students learn the concepts of Dependency Injection, unit testing, user authentication/authorization for creating effective and industry accepted web applications. • Hours: 42 • Credits: 3 • Pre-Requisites: PROG8710 OR PROG8711',
    expanded: false,
  },
  {
    id: 22,
    level: 4,
    title: 'Trends in Web Technology PROG8781',
    details:
      'The Web development field is dynamic and continually changing with new tools, workflows, and best practices for constructing usable applications. Students explore current Web application and development trends through guest speakers\' presentations, and/or case studies, and/or hands-on exercises. Students will also explore topics like cloud, blockchain, progressive Web apps, internet of things (IoT), artificial intelligence (AI), and development frameworks. • Hours: 28 • Credits: 2 • Pre-Requisites: NIL',
    expanded: false,
  },
  {
    id: 23,
    level: 4,
    title: 'Website Security and Quality Assurance QUAL8371',
    details:
      'In this course students will learn about security vulnerabilities in client-server environments. Internet protocol techniques and various cyber-attacks on web servers will be explored. Students will learn the processes and procedures to safeguard websites from different cyber threats. Students will also learn specific aspects and frameworks of quality assurance (QA) in the web development process. • Hours: 56 • Credits: 4 • Pre-Requisites: NIL',
    expanded: false,
  },
];


// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

const SyllabusSection = () => {
  const [expandedLevelTopics, setExpandedLevelTopics] = useState({});

  const toggleLevelTopic = (level, topicId) => {
    setExpandedLevelTopics((prev) => ({
      ...prev,
      [level]: prev[level] === topicId ? null : topicId,
    }));
  };

  return (
    <div className="main-home__syllabus">
      {/* Title & Subtitle */}
      <motion.h2 className="syllabus-title" variants={itemVariants}>
        WEB AND MOBILE APPLICATIONS DESIGNING, DEVELOPMENT AND DEPLOYMENT
      </motion.h2>

      <motion.h3 className="syllabus-subtitle" variants={itemVariants}>
        Learn. Build. Deploy. Succeed.
      </motion.h3>

      <motion.p
        className="syllabus-description"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
      >
        A comprehensive multi-level online learning program meticulously crafted
        for academic students, this 2-year curriculum bridges foundational
        concepts to advanced development expertise. Designed in alignment with
        real-world industry standards, it empowers learners to become confident,
        job-ready developers and future tech innovators.
      </motion.p>

      <motion.h2 className="syllabus-section-title" variants={itemVariants}>
        Course Syllabus
      </motion.h2>

      {/* Syllabus Grid */}
      <motion.div
        className="syllabus-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[1, 2, 3, 4].map((level) => {
          const expandedId = expandedLevelTopics[level];
          const expandedTopic = expandedId
            ? syllabus.find((t) => t.id === expandedId)
            : null;

          return (
            <motion.div
              key={level}
              className={`flip-level ${expandedTopic ? "flipped" : ""}`}
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <div className="flip-level-inner">
                {/* Front Side */}
                {!expandedTopic && (
                  <div className="flip-level-front">
                    <h3>Level {level}</h3>
                    {syllabus
                      .filter((topic) => topic.level === level)
                      .map((topic) => (
                        <motion.button
                          key={topic.id}
                          className="topic-toggle"
                          onClick={() => toggleLevelTopic(level, topic.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {topic.title}
                        </motion.button>
                      ))}
                  </div>
                )}

                {/* Back Side */}
                {expandedTopic && (
                  <div className="flip-level-back">
                    <h3>Level {level}</h3>
                    <motion.button
                      className="back-button"
                      onClick={() => toggleLevelTopic(level, expandedId)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      ← Back to Level {level}
                    </motion.button>

                    <motion.p
                      className="topic-details"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      {expandedTopic.details}
                    </motion.p>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SyllabusSection;
