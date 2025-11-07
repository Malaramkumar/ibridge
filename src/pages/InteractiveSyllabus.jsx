import React, { useState } from 'react';
import './InteractiveSyllabus.scss';
import { Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'; 

const coreModules = [
  
  {
    title: "Module 1: Introduction",
    duration: "0.5 hr",
    topics: [
      "Java Why? What? How? When? Where?",
      "Different Java Versions",
      "How Java is different from other Technologies",
      
    ],
    viewMoreLink: "/modules/introduction",
  },
  {
  title: "Module 2: Introduction To Java Programming Environment",
  duration: "1 hr",
  topics: [
    "How to Install & set PATH",
    "A Simple Java Program",
    "Compiling & executing Java Program",
    "Phases of Java Program",
    "Analysis of a Java Program",
    "Understanding Syntax and Semantic Error",
    "Why are explicit pointers not used in Java like they are in C or C++?",
    "Runtime Exception",
    "Name of a Java Source File",
    "Platform Independency",
    "Java Technology (JDK, JRE, JVM, JIT)",
    "Features of Java",
    "Text Editors",
    "Consoles",
  ],
  viewMoreLink: "/modules/java-environment",
},

  {
  title: "Module 3: Fundamentals of Java Programming",
  duration: "1 hr",
  topics: [
    "Naming convention of Java language",
    "Comments",
    "Statements",
    "Blocks (Static, Non-static/instance)",
    "Identifiers",
    "Keywords",
    "Literals",
    "Primitive Data Types, Range",
    "Reference (User defined) Data type",
    "Variables (Primitive, Reference)",
    "Type Casting, Default Value",
    "Operators",
    "Program/Interview questions",
  ],
    viewMoreLink: "/modules/fundamentals-of-java",
},
  {
  title: "Module 4: Control Structures",
  duration: "1 hr",
  topics: [
    "Working with Control Structures",
    "Types of Control Structures",
    "Decision Control Structure (if, if-else, if else if, switch–case)",
    "Repetition Control Structure (do–while, while, for)",
    "Program/Interview questions",
  ],
  viewMoreLink: "/modules/control-structures",
},

    {
  title: "Module 5: Input Fundamentals And Datatypes In Java",
  duration: "2 hrs",
  topics: [
    "Java program inputs from Keyboard",
    "Methods of Keyboard inputs",
    "Scanner, Buffered Reader",
    "Problem Solving",
    "Java Array",
    "What is Array",
    "Array Declaration in Java vs C and C++",
    "Instantiation of an Array",
    "String vs Character Array. Accessing Array Elements",
    "Default Value, for-each loop, varargs",
    "Length of an Array (Array Index Out Of Bounds Exception)",
    "Increasing/Decreasing the Size and Copy of an Array",
    "Multi-Dimensional Arrays",
    "Program/Interview questions",
    "Difference between C and C++ with Java",
    "Application Compilation and Run",
    "Interview related Question and Answer",
  ],
  viewMoreLink: "/modules/input-fundamentals",
},

    {
  title: "Module 6: Object Oriented Programming (OOPs Concepts In Deep)",
  duration: "4 hrs",
  topics: [
    "Procedural Vs Object Oriented Program",
    "Different types of Programs: Procedural Vs Object Oriented",
    "Top Down Vs Bottom Up Approach",
    "Introduction to Object Oriented Concepts",
    "Abstraction, Encapsulation, Inheritance, Polymorphism",
    "Introduction to Classes and Objects",
    "Custom Class Definition",
    "Instance and Static Variables",
    "Different ways to create Object Instances",
    "Instance Variable and its role in a Class",
    "Constructors, types of Constructor",
    "Constructor Rules, Constructor Overloading",
    "Static Variables and their use",
    "Methods and their behavior",
    "Constructor vs Methods",
    "this Keyword",
    "Java Access Modifiers (and Specifiers)",
    "Programming Interview related Questions and Answers",
    "Call by value, Call by reference",
  ],
  viewMoreLink: "/modules/object-oriented-programming",
},

    {
  title: "Module 7: Command-Line Arguments",
  duration: "1 hr",
  topics: [
    "What is a Command-Line Argument?",
    "Java Application with Command-Line Arguments",
    "Conversion of Command-Line Arguments",
    "Passing Command-Line Arguments",
    "Using methods (Static, Non Static)",
  ],
  viewMoreLink: "/modules/command-line-arguments",
},

    {
  title: "Module 8: Integrated Development Environment",
  duration: "0.5 hr",
  topics: [
    "Using various Editors",
    "Program Compilation, Execution in Editor",
    "Using Eclipse IDE",
    "Project Set Up",
    "Source File Generation",
    "Application Compilation and Run",
  ],
  viewMoreLink: "/modules/integrated-development-environment",
},

    {
  title: "Module 9: Inner Class",
  duration: "1 hr",
  topics: [
    "First View of Inner Class",
    "Outer Class Access",
    "Types of Inner Class",
  ],
  viewMoreLink: "/modules/inner-class",
},

    {
  title: "Module 10: Inheritance",
  duration: "2 hrs",
  topics: [
    "Complete concepts of Inheritance",
    "Sub-Classes",
    "Object Classes",
    "Constructor Calling Chain",
    "The use of 'super' Keyword",
    "The use of 'private' keyword in Inheritance",
    "Reference Casting",
  ],
  viewMoreLink: "/modules/inheritance",
},
    {
  title: "Module 11: Abstract Classes and Inheritance",
  duration: "2 hrs",
  topics: [
    "Introduction to Abstract Methods",
    "Abstract Classes and Interface",
    "Interface as a Type",
    "Interface vs Abstract Class",
    "Interface Definition",
    "Interface Implementation",
    "Multiple Interfaces’ Implementation",
    "Interfaces’ Inheritance",
    "How to create object of Interface",
  ],
  viewMoreLink: "/modules/abstract-classes-and-inheritance",
},

    {
  title: "Module 12: Polymorphism",
  duration: "1 hr",
  topics: [
    "Introduction to Polymorphism",
    "Types of Polymorphism",
    "Overloading Methods",
    "Overriding Methods",
    "Hiding Methods",
    "Final Class and Method",
    "Polymorphic Behavior in Java",
    "Benefits of Polymorphism",
    "“Is-A” vs “Has-A”",
    "Association Vs Aggregation",
    "Interview related Question and Answer"
  ],
  viewMoreLink: "/modules/polymorphism",
},

    {
  title: "Module 13: Package",
  duration: "2 hrs",
  topics: [
    "Package and Class path and its use",
    "First look into Packages",
    "Benefits of Packages",
    "Package Creation and Use",
    "First look into Class path",
    "Class path Setting",
    "Class Import",
    "Package Import",
    "Role of public, protected, default and private w.r.t package",
    "Namespace Management",
    "Package vs. Header File",
    "Creating and Using the Sub Package",
    "Sources and Class Files Management"
  ],
  viewMoreLink: "/modules/package",
},

    {
  title: "Module 14: Using Predefined Package & Other Classes",
  duration: "2 hrs",
  topics: [
    "Java.lang Hierarchy",
    "Object class and using toString(), equals(), hashCode(), clone(), finalize() etc",
    "Using Runtime Class, Process Class to play music, video from Java Program",
    "Primitives and Wrapper Class",
    "Math Class",
    "String, StringBuffer, StringBuilder Class",
    "String Constant Pool",
    "Various usage and methods of String, StringBuffer, StringBuilder",
    "Wrapper Classes",
    "System Class using gc(), exit(), etc."
  ],
  viewMoreLink: "/modules/predefined-package-and-classes",
},

    {
  title: "Module 15: New Concepts in Package",
  duration: "1 hr",
  topics: [
    "Auto boxing and Auto unboxing",
    "Static import",
    "Instance of operator",
    "Enum and its use in Java",
    "Working with jar"
  ],
  viewMoreLink: "/modules/new-concepts-in-package",
},

    {
  title: "Module 16: Garbage Collection",
  duration: "0.5 hr",
  topics: [
    "Garbage Collection Introduction",
    "Advantages of Garbage Collection",
    "Garbage Collection Procedure",
    "Java API",
    "Interview related Question and Answer"
  ],
  viewMoreLink: "/modules/garbage-collection",
},

    {
  title: "Module 17: Exception Handling",
  duration: "2 hrs",
  topics: [
    "Introduction to Exceptions",
    "Effects of Exceptions",
    "Exception Handling Mechanism",
    "Try, catch, finally blocks",
    "Rules of Exception Handling",
    "Exception class Hierarchy, Checked & Unchecked Exception",
    "Throw & throws keyword",
    "Custom Exception Class",
    "Chained Exception",
    "Resource handling & multiple exception classes",
    "Interview related Question and Answer"
  ],
  viewMoreLink: "/modules/exception-handling",
},

    {
  title: "Module 18: Multithreading",
  duration: "3 hrs",
  topics: [
    "Introduction",
    "Advantages",
    "Creating a Thread by inheriting from Thread class",
    "Run() and start() method",
    "Constructor of Thread Class",
    "Various Method of Thread Class",
    "Runnable Interface Implementation",
    "Thread Group",
    "Thread States and Priorities",
    "Synchronization method, block",
    "Class & Object Level Lock",
    "Deadlock & its Prevention",
    "Inter thread Synchronization",
    "Life Cycle of Thread",
    "Deprecated methods: stop(), suspend(), resume(), etc",
    "Interview related Question and Answer"
  ],
  viewMoreLink: "/modules/multithreading",
},

    {
  title: "Module 19: Input and Output Streams",
  duration: "3 hrs",
  topics: [
    "Java I/O Stream",
    "I/O Stream – Introduction",
    "Types of Streams",
    "Stream Class Hierarchy",
    "Using File Class",
    "Copy and Paste the content of a file",
    "Byte Streams vs Character Streams",
    "Text File vs Binary File",
    "Character Reading from Keyboard by Input Stream Reader",
    "Reading a Line/String from Keyboard by Buffered Reader",
    "Standard I/O Streams",
    "Using Data Streams to read/write primitive data",
    "PrintStream vs PrintWriter",
    "Using StreamTokenizer and RandomAccessFile",
    "Interview related Question and Answer"
  ],
  viewMoreLink: "/modules/input-and-output",
},

    {
  title: "Module 20: Serialization",
  duration: "0.5 hr",
  topics: [
    "Introduction to Serialization",
    "Using Object Streams to read/write object",
    "Transient Keyword",
    "Serialization Process",
    "Deserialization Process",
    "Interview related Question and Answer"
  ],
  viewMoreLink: "/modules/serialization",
},

    {
  title: "Module 21: Collection Framework",
  duration: "3 hrs",
  topics: [
    "Generics (Templates)",
    "What is generic",
    "Creating User defined Generic classes",
    "The java.util package",
    "Collection",
    "What is Collection Framework",
    "List, Set & Map interfaces",
    "Using Vector, Array List, Stack, Linked List, etc.",
    "Using Collections class for sorting",
    "Using Hashtable, HashMap, TreeMap, SortedMap, LinkedHashMap etc.",
    "Iterator, Enumerator",
    "Using Queue, Deque, SortedQueue, etc.",
    "Using HashSet, TreeSet, LinkedHashSet etc.",
    "Using Random class",
    "Using Properties in a Java Program",
    "Using user defined class for DataStructure",
    "Using Date and Formatting Date class",
    "Interview related Question and Answer"
  ],
  viewMoreLink: "/modules/collection-framework",
},

    {
  title: "Module 22: Java 8/9/10 Features",
  duration: "1 hr",
  topics: [
    "Java 8/9/10 New Features Overview",
    "Lambda Expressions",
    "Streams API",
    "Optional Class",
    "Date and Time API",
    "Default and Static Methods in Interfaces",
    "Nashorn JavaScript Engine",
    "Modular System (Java 9)",
    "JShell (Java 9)",
    "Local Variable Type Inference (Java 10)"
  ],
  viewMoreLink: "/modules/javafeatures",
},
  // ✅ Add more modules here...
];

export const advancedModules = [
  {
  title: "Module 1: JDBC",
  duration: "3 hrs",
  topics: [
    "Introduction to JDBC",
    "Databases and Drivers",
    "Types of Driver",
    "Loading a driver class file",
    "Establishing the Connection to different Databases",
    "Using different Drivers for Database Connection",
    "Executing SQL queries using ResultSet, Statement, PreparedStatement",
    "Using CallableStatement",
    "Transaction Management & BatchUpdate",
    "Programs/Interview related Questions and Answers"
  ],
  viewMoreLink: "/modules/jdbc",
},

    {
    title: "Module 2: JSP",
    duration: "5 hrs",
    topics: [
      "JSP Lifecycle and API",
      "Scripting Elements: scriptlet, expression, declaration",
      "Implicit Objects: out, request, response, session, etc.",
      "Directive Elements: page, include, taglib",
      "JSP Exception Handling",
      "JSP Action Elements: useBean, setProperty, getProperty",
      "Expression Language (EL) usage",
      "MVC Architecture in JSP",
      "JSTL and Custom Tags",
      "CRUD operations with MVC",
      "Programs/Interview related Questions and Answers",
    ],
    viewMoreLink: "/modules/jsp",
  },

    {
    title: "Module 3: Servlet",
    duration: "7 hrs",
    topics: [
      "Servlet Introduction & Lifecycle",
      "GenericServlet, HttpServlet",
      "Using Tomcat, Eclipse, NetBeans",
      "Servlet API and Web Basics",
      "Servlet Request Methods and Examples",
      "Servlet Collaboration: RequestDispatcher, sendRedirect",
      "ServletConfig and ServletContext",
      "Session Tracking: Cookies, URL Rewriting, HttpSession",
      "Registration Example with DB",
    ],
    viewMoreLink: "/modules/servlet",
  },

    {
  title: "Module 4: Concurrent and Implementation of Collection",
  duration: "2 hrs",
  topics: [
    "Implementation of ArrayList",
    "Implementation of LinkedList",
    "Implementation of HashMap",
    "Implementation of Queue / PriorityQueue / Deque"
  ],
  viewMoreLink: "/modules/concurrent-and-collection-implementation",
},
{
  title: "Module 5: Advanced Multi-Threading",
  duration: "3 hrs",
  topics: [
    "Implementation of Executor Pool Service and working mechanism with real-time example",
    "Big file (single, multiple) processing using multiple threads",
    "Implementation using Thread class and Runnable interface"
  ],
  viewMoreLink: "/modules/advanced-multithreading",
},
{
  title: "Module 6: JavaMail API",
  duration: "2 hrs",
  topics: [
    "Sending Email",
    "Sending email through Gmail server",
    "Receiving Email",
    "Sending HTML content"
  ],
  viewMoreLink: "/modules/javamail-api",
},
{
  title: "Module 7: Design Pattern",
  duration: "2 hrs",
  topics: [
    "Singleton",
    "DAO (Data Access Object)",
    "DTO (Data Transfer Object)",
    "MVC (Model-View-Controller)",
    "Front Controller",
    "Factory Method",
    "Abstract Factory Pattern",
    "Other Design Patterns"
  ],
  viewMoreLink: "/modules/design-patterns",
},
{
  title: "Module 8: JUnit",
  duration: "1 hr",
  topics: [
    "JUnit: What and Why?",
    "Annotations used in JUnit",
    "Assert class",
    "Test Cases"
  ],
  viewMoreLink: "/modules/junit",
},
{
  title: "Module 9: Maven",
  duration: "1 hr",
  topics: [
    "Maven: What and Why?",
    "Ant vs Maven",
    "How to install Maven?",
    "Maven Repository",
    "Understanding pom.xml",
    "Maven Example",
    "Maven Web App Example",
    "Maven using Eclipse"
  ],
  viewMoreLink: "/modules/maven",
},
{
  title: "Module 10: Project Guidance",
  duration: "4 hrs",
  topics: [
    "End-to-end project guidance using Java and relevant technologies",
    "Project structuring and design discussion",
    "Development, debugging, and deployment steps",
    "Industry best practices and tools"
  ],
  viewMoreLink: "/modules/project-guidance",
},

];

const InteractiveSyllabus = () => {
  const usenavigate = Navigate;
  const [coreActiveIndex, setCoreActiveIndex] = useState(0);
  const [advActiveIndex, setAdvActiveIndex] = useState(0);

  return (
    <>
      {/* ✅ SEO META TAGS */}
      <Helmet>
        <title>Java Full Course Syllabus | Core & Advanced Java Training</title>
        <meta name="description" content="Explore the comprehensive Java training syllabus including Core Java and Advanced Java modules with real-world projects and interview preparation." />
        <meta name="keywords" content="Java syllabus, Core Java course, Advanced Java training, Java training online, Java modules, Java course content" />
        <meta name="author" content="Your Institute Name" />
        <meta property="og:title" content="Java Full Course Syllabus | Core & Advanced Java" />
        <meta property="og:description" content="Full list of Core and Advanced Java modules with duration, topics, and view more links. Prepare for interviews with practical content." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/java-syllabus" />
        <meta property="og:image" content="https://yourwebsite.com/assets/java-banner.jpg" />
        <link rel="canonical" href="https://yourwebsite.com/java-syllabus" />
      </Helmet>

      <section id="syllabus-section" className="interactive-syllabus">
        {/* ✅ Core Java Syllabus */}
        <div className="syllabus-block">
          <div className="left-panel">
            <h2> Core Java Online Training Syllabus (Total Duration - 35 hrs)</h2>
            <div className="module-list">
              {coreModules.map((mod, idx) => (
                <div
                  key={idx}
                  className={`module ${coreActiveIndex === idx ? 'active' : ''}`}
                  onClick={() => setCoreActiveIndex(idx)}
                >
                  <h3>{mod.title}</h3>
                  <span className="duration"> {mod.duration}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="right-panel">
            <h3>{coreModules[coreActiveIndex].title}</h3>
            <p className="duration-label"> Duration: {coreModules[coreActiveIndex].duration}</p>
            <ul className="topics">
              {coreModules[coreActiveIndex].topics.map((topic, i) => (
                <li key={i}> {topic}</li>
              ))}
            </ul>

            {coreModules[coreActiveIndex].viewMoreLink && (
              <a
                href={coreModules[coreActiveIndex].viewMoreLink}
                className="navigate-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 View More
              </a>
            )}
          </div>
        </div>

        {/* ✅ Advanced Java Syllabus */}
        <div className="syllabus-block">
          <div className="left-panel">
            <h2> Advanced Java Syllabus (Total Duration - 30 hrs)</h2>
            <div className="module-list">
              {advancedModules.map((mod, idx) => (
                <div
                  key={idx}
                  className={`module ${advActiveIndex === idx ? 'active' : ''}`}
                  onClick={() => setAdvActiveIndex(idx)}
                >
                  <h3>{mod.title}</h3>
                  <span className="duration"> {mod.duration}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="right-panel">
            <h3>{advancedModules[advActiveIndex].title}</h3>
            <p className="duration-label"> Duration: {advancedModules[advActiveIndex].duration}</p>
            <ul className="topics">
              {advancedModules[advActiveIndex].topics.map((topic, i) => (
                <li key={i}> {topic}</li>
              ))}
            </ul>

            {advancedModules[advActiveIndex].viewMoreLink && (
              <a
                href={advancedModules[advActiveIndex].viewMoreLink}
                className="navigate-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 View More
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default InteractiveSyllabus;