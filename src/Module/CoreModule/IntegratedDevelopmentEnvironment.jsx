import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const IntegratedDevelopmentEnvironment = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>Module 8: Java IDE Setup & Eclipse Guide | Narpavi Java Course</title>
        <meta name="description" content="Learn how to install Eclipse IDE, set up Java projects, compile programs using basic editors and IDEs, and understand the benefits of using an IDE like Eclipse." />
        <meta name="keywords" content="Java IDE, Eclipse, Java Editors, Java Compilation, Java Setup, Eclipse Installation, Java Projects" />
        <meta name="author" content="Narpavi Technologies" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Module 8: Java IDE Setup & Eclipse Guide | Narpavi Java Course" />
        <meta property="og:description" content="Step-by-step guide to using Eclipse IDE and Java editors like VS Code and Notepad++. Learn to compile, debug, and manage Java projects efficiently." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://narpavi.in/java-course/module-8-ide-setup" />
        <meta property="og:image" content="https://narpavi.in/images/java-ide-guide.jpg" />

        {/* Twitter */}
        <meta name="twitter:title" content="Java IDE Setup & Eclipse Guide - Narpavi Java Training" />
        <meta name="twitter:description" content="Understand the tools to write, compile, and debug Java projects. From basic text editors to full IDEs like Eclipse." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://narpavi.in/images/java-ide-guide.jpg" />
      </Helmet>
      
      <h1>Module 8: Integrated Development Environment</h1>
      <p><strong>Duration:</strong> 0.5 hr</p>

      <h2>📝 Using Various Editors</h2>
      <p>You can write Java code using different editors:</p>
      <ul>
        <li><strong>Text Editors:</strong> Notepad, Notepad++, Sublime Text</li>
        <li><strong>Code Editors:</strong> VS Code, Atom</li>
        <li><strong>IDEs:</strong> Eclipse, IntelliJ IDEA, NetBeans</li>
      </ul>

      <h2>⚙️ Program Compilation & Execution in Basic Editors</h2>
      <p>Compile and run Java programs manually:</p>
      <pre><code>{`// Hello.java
public class Hello {
  public static void main(String[] args) {
    System.out.println("Hello, Java!");
  }
}`}</code></pre>
      <p>Use the terminal:</p>
      <pre><code>javac Hello.java
java Hello</code></pre>

      <h2>💡 Why Use an IDE Like Eclipse?</h2>
      <p>An IDE simplifies development with:</p>
      <ul>
        <li>Code completion and syntax highlighting</li>
        <li>Error detection and debugging tools</li>
        <li>Project management and version control</li>
      </ul>

      <h2>🧰 Installing Eclipse</h2>
      <ol>
        <li>Download from <a href="https://www.eclipse.org/downloads/" target="_blank" rel="noopener noreferrer">eclipse.org</a></li>
        <li>Install Java JDK first (e.g., JDK 21)</li>
        <li>Launch Eclipse and set up a workspace</li>
      </ol>

      <h2>📁 Creating a Java Project</h2>
      <ol>
        <li><strong>File → New → Java Project</strong></li>
        <li>Enter project name (e.g., <code>HelloJava</code>)</li>
        <li>Right-click on <code>src</code> → <strong>New → Class</strong></li>
        <li>Provide class name and check <code>public static void main()</code></li>
        <li>Click Finish</li>
      </ol>

      <h2>📄 Source File Generation</h2>
      <p>Eclipse generates .java files with correct folder/package structure under <code>src</code>.</p>

      <h2>▶ Running & Debugging</h2>
      <ul>
        <li>Click the green <strong>Run</strong> ▶ button</li>
        <li>Output appears in the Console panel</li>
        <li>Use breakpoints and Debug mode for troubleshooting</li>
      </ul>

      <h2>🎯 Benefits of Eclipse</h2>
      <ul>
        <li>Real-time error checking</li>
        <li>Integrated Git and Maven support</li>
        <li>Efficient navigation between files and classes</li>
        <li>Pluggable features for Java EE, Spring, etc.</li>
      </ul>

      <h2>💬 Interview Tips</h2>
      <ul>
        <li>Know how to set up and run a Java project in Eclipse</li>
        <li>Understand how to compile and run Java from command-line</li>
        <li>Explain the benefits of IDEs in development workflow</li>
      </ul>
    </div>
    <Footer />
    </>
  );
};

export default IntegratedDevelopmentEnvironment;
