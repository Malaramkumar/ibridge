import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const JavaEnvironment = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Java Programming Environment – Module 2 | Narpavi Technologies</title>
        <meta name="description" content="Learn how to install Java, set environment variables, write and run your first Java program. Understand the JVM, JDK, JRE, Java syntax and features." />
        <meta name="keywords" content="Java programming, JDK installation, Java PATH setup, Java Hello World, compile Java, JVM, JDK, JRE, Java syntax, Java platform independent, Java runtime exception" />
        <meta name="author" content="Narpavi Technologies" />
        <link rel="canonical" href="https://www.yoursite.com/modules/java-environment" />
      </Helmet>
      
      <h1>Module 2: Introduction To Java Programming Environment</h1>
      <p><strong>Duration:</strong> 1 hr</p>

      <section>
        <h2>1. How to Install & Set PATH</h2>
        <p>Download Java from Oracle or use OpenJDK. Then set JAVA_HOME and add it to your system PATH.</p>
        <pre><code>
JAVA_HOME=C:\Program Files\Java\jdk-21<br />
PATH=%JAVA_HOME%\bin;%PATH%
        </code></pre>

        <h2>2. A Simple Java Program</h2>
        <pre><code>
public class HelloWorld &#123;
  public static void main(String[] args) &#123;
    System.out.println("Hello, World!");
  &#125;
&#125;
        </code></pre>
        <p>This program prints "Hello, World!" to the console.</p>

        <h2>3. Compiling & Executing Java Program</h2>
        <p>Open terminal or command prompt:</p>
        <pre><code>
javac HelloWorld.java<br />
java HelloWorld
        </code></pre>

        <h2>4. Phases of Java Program</h2>
        <p>Write → Compile → Load → Verify → Execute (via JVM).</p>

        <h2>5. Analysis of a Java Program</h2>
        <p>Understand each part: class definition, main method, print statement.</p>

        <h2>6. Syntax vs Semantic Errors</h2>
        <ul>
          <li><strong>Syntax Error:</strong> Violates language grammar (e.g., missing `;`).</li>
          <li><strong>Semantic Error:</strong> Logic is wrong even though syntax is correct.</li>
        </ul>

        <h2>7. Why Java Has No Explicit Pointers</h2>
        <p>Java manages memory internally via references for security and simplicity. No pointer arithmetic allowed.</p>

        <h2>8. Runtime Exception</h2>
        <p>Errors during execution:</p>
        <pre><code>
int a = 10 / 0; // Causes ArithmeticException
        </code></pre>

        <h2>9. Java Source File Naming</h2>
        <p>The filename should match the public class name. Example:</p>
        <p><code>HelloWorld.java</code> → <code>public class HelloWorld</code></p>

        <h2>10. Platform Independency</h2>
        <p>Java code compiles to bytecode (.class), which runs on any OS via the JVM.</p>

        <h2>11. Java Technology Stack</h2>
        <ul>
          <li><strong>JDK:</strong> Development tools (compiler, debugger).</li>
          <li><strong>JRE:</strong> Java libraries + JVM to run programs.</li>
          <li><strong>JVM:</strong> Virtual Machine that executes bytecode.</li>
          <li><strong>JIT:</strong> Just-In-Time compiler that boosts runtime performance.</li>
        </ul>

        <h2>12. Features of Java</h2>
        <ul>
          <li>Object-Oriented</li>
          <li>Platform Independent</li>
          <li>Secure & Robust</li>
          <li>Multithreaded</li>
          <li>Dynamic & Portable</li>
        </ul>

        <h2>13. Text Editors</h2>
        <p>Popular editors include Notepad++, VSCode, Sublime, or IDEs like IntelliJ & Eclipse.</p>

        <h2>14. Consoles</h2>
        <p>Use CMD, PowerShell (Windows) or Terminal (macOS/Linux) to compile and run Java.</p>
      </section>
    </div>
      <Footer />
    </>
  );
};

export default JavaEnvironment;
