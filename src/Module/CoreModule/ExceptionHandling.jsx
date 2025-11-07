import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const ExceptionHandling = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>Module 17: Exception Handling | Java Training</title>
        <meta name="description" content="Understand Java Exception Handling with try, catch, finally, custom exceptions, throws/throw, and interview questions." />
        <meta name="keywords" content="Java, Exception Handling, try catch, custom exception, throw, throws, Java interview questions, Java training" />
        <meta name="author" content="Narpavi Technologies" />
        <meta property="og:title" content="Module 17: Java Exception Handling" />
        <meta property="og:description" content="Learn how Java handles runtime errors using try, catch, throw, throws and custom exceptions." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://narpavi.in/java/exception-handling" />
        <meta property="og:image" content="https://narpavi.in/assets/images/java-thumbnail.jpg" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://narpavi.in/java/exception-handling" />
      </Helmet>

      <h1>Module 17: Exception Handling</h1>
      <p><strong>Duration:</strong> 2 hrs</p>

      <h2>🧨 Introduction to Exceptions</h2>
      <p>
        An exception is an event that disrupts the normal flow of a program's instructions during runtime. It is an object that describes an error condition.
      </p>

      <h2>💥 Effects of Exceptions</h2>
      <ul>
        <li>Program terminates unexpectedly</li>
        <li>Leads to resource leaks or data corruption</li>
        <li>Stack trace is printed to console</li>
      </ul>

      <h2>🛡️ Exception Handling Mechanism</h2>
      <p>
        Java provides a powerful mechanism to handle exceptions, ensuring the program continues executing or terminates gracefully.
      </p>

      <h2>🧪 try, catch, finally blocks</h2>
      <pre><code>{`try {
  int result = 10 / 0;
} catch (ArithmeticException e) {
  System.out.println("Error: " + e.getMessage());
} finally {
  System.out.println("Finally block always executes.");
}`}</code></pre>

      <h2>📜 Rules of Exception Handling</h2>
      <ul>
        <li>catch block must follow try</li>
        <li>finally is optional but recommended for cleanup</li>
        <li>Only one catch executes per try</li>
        <li>More specific exceptions should be caught first</li>
      </ul>

      <h2>🌳 Exception Class Hierarchy</h2>
      <ul>
        <li><code>Throwable</code></li>
        <ul>
          <li><code>Error</code></li>
          <li><code>Exception</code>
            <ul>
              <li><code>Checked Exceptions</code> (IOException, SQLException)</li>
              <li><code>Unchecked Exceptions</code> (NullPointerException, ArithmeticException)</li>
            </ul>
          </li>
        </ul>
      </ul>

      <h2>🚀 throw & throws keywords</h2>
      <pre><code>{`public void riskyMethod() throws IOException {
  throw new IOException("Disk not found");
}`}</code></pre>
      <p><code>throw</code> is used to explicitly throw an exception; <code>throws</code> declares exceptions in method signature.</p>

      <h2>🧰 Custom Exception Class</h2>
      <pre><code>{`class AgeException extends Exception {
  public AgeException(String msg) {
    super(msg);
  }
}`}</code></pre>

      <h2>🔗 Chained Exceptions</h2>
      <pre><code>{`Throwable t = new NumberFormatException("Wrong Format");
t.initCause(new NullPointerException("Null Found"));
throw t;`}</code></pre>

      <h2>🧹 Resource Handling & Multiple Exceptions</h2>
      <pre><code>{`try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
  String line = br.readLine();
} catch (IOException | NullPointerException e) {
  e.printStackTrace();
}`}</code></pre>

      <h2>💬 Interview Questions</h2>
      <ul>
        <li>What is the difference between checked and unchecked exceptions?</li>
        <li>Can we have multiple catch blocks?</li>
        <li>What is the use of the finally block?</li>
        <li>How do you create a custom exception in Java?</li>
        <li>Can we catch multiple exceptions in a single catch?</li>
      </ul>
    </div>
    <Footer />
    </>
  );
};

export default ExceptionHandling;
