import React from 'react';
import { Helmet } from 'react-helmet';
import '../CoreModule/ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const JUnitModule = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>JUnit Module - Core Java Training | Narpavi Technologies</title>
        <meta name="description" content="Learn JUnit testing framework in our Core Java training. Understand annotations, assertions, and test case structures with hands-on examples." />
        <meta name="keywords" content="JUnit, JUnit annotations, Java testing, Java test cases, JUnit test case examples, unit testing Java, Core Java course, Narpavi Technologies" />
        <meta name="author" content="Narpavi Technologies" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="JUnit Module - Core Java Training" />
        <meta property="og:description" content="Master unit testing using JUnit. Get hands-on practice with annotations, test cases, and test lifecycle in Java." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.narpavitech.in/java/junit-module" />
        <meta property="og:image" content="https://www.narpavitech.in/images/java-banner.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JUnit Module - Core Java Training" />
        <meta name="twitter:description" content="Learn JUnit testing in Core Java course at Narpavi Technologies. Real-world examples and annotations explained." />
        <meta name="twitter:image" content="https://www.narpavitech.in/images/java-banner.jpg" />
      </Helmet>

      <h1>Module 8: JUnit</h1>
      <p><strong>Duration:</strong> 1 hr</p>

      <h2>JUnit: What and Why?</h2>
      <p>
        <strong>JUnit</strong> is a unit testing framework for Java. It helps developers write and run repeatable automated tests to ensure code quality. It is widely used in test-driven development (TDD).
      </p>

      <h2>Annotations used in JUnit</h2>
      <ul>
        <li><code>@Test</code> - Marks a method as a test method</li>
        <li><code>@BeforeEach</code> - Runs before each test method</li>
        <li><code>@AfterEach</code> - Runs after each test method</li>
        <li><code>@BeforeAll</code> - Runs once before all tests</li>
        <li><code>@AfterAll</code> - Runs once after all tests</li>
      </ul>

      <h2>Assert Class</h2>
      <pre><code>{`import static org.junit.jupiter.api.Assertions.*;

@Test
void testAddition() {
  int expected = 10;
  int actual = 5 + 5;
  assertEquals(expected, actual);
}`}</code></pre>

      <h2>Test Cases</h2>
      <pre><code>{`import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

  @Test
  void testMultiply() {
    Calculator calc = new Calculator();
    assertEquals(20, calc.multiply(4, 5));
  }
}`}</code></pre>

      <h2>💬 Interview Tip</h2>
      <p>Be prepared to write a simple JUnit test case and explain the purpose of assertions and annotations. Also, understand the structure of a test suite and the life cycle of test execution in JUnit.</p>
    </div>
      <Footer />
    </>
  );
};

export default JUnitModule;
