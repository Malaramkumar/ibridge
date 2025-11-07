import React from 'react';
import { Helmet } from 'react-helmet';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const JavaFeatures = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>Java 8, 9, 10 Features | Lambda, Streams, var - Java Training</title>
        <meta
          name="description"
          content="Learn the top Java 8, 9, 10 features including Lambda Expressions, Stream API, Optional class, JShell, and var keyword with examples and interview Q&As."
        />
        <meta
          name="keywords"
          content="Java 8 features, Java 9 features, Java 10 features, Lambda expression, Streams API, JShell, Java var keyword, Java Optional class, Java module system"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Java 8/9/10 Features - Learn Java with Hands-on Examples" />
        <meta property="og:description" content="Explore Java's powerful features including Lambdas, Streams, Optional, JShell, and more for modern application development." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/java-features" />
        <meta property="og:image" content="https://yourdomain.com/images/java-features-banner.jpg" />
      </Helmet>

      <h1>Module 22: Java 8/9/10 Features</h1>
      <p><strong>Duration:</strong> 1 hr</p>

      <h2>Java 8/9/10 New Features Overview</h2>
      <p>Each Java version introduced significant enhancements in language features and libraries for better performance, readability, and developer productivity.</p>

      <h2>Lambda Expressions (Java 8)</h2>
      <p>Provides a clear and concise way to represent one method interface (functional interface):</p>
      <pre><code>{`(a, b) -> a + b`}</code></pre>
      <pre><code>{`
interface Addable {
  int add(int a, int b);
}

Addable ad = (a, b) -> (a + b);
System.out.println(ad.add(10, 20));`}</code></pre>

      <h2>Streams API (Java 8)</h2>
      <p>Used for processing collections of objects in a functional style.</p>
      <pre><code>{`
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
names.stream().filter(n -> n.startsWith("A")).forEach(System.out::println);`}</code></pre>

      <h2>Optional Class (Java 8)</h2>
      <p>Helps avoid null pointer exceptions:</p>
      <pre><code>{`
Optional<String> name = Optional.ofNullable(null);
System.out.println(name.orElse("Unknown"));`}</code></pre>

      <h2>Date and Time API (Java 8)</h2>
      <p>New package: <code>java.time</code> for better date/time handling.</p>
      <pre><code>{`
LocalDate today = LocalDate.now();
System.out.println(today);`}</code></pre>

      <h2>Default and Static Methods in Interfaces (Java 8)</h2>
      <p>Interfaces can have method implementations using <code>default</code> or <code>static</code> keywords.</p>
      <pre><code>{`
interface MyInterface {
  default void greet() {
    System.out.println("Hello from interface");
  }
}`}</code></pre>

      <h2>Nashorn JavaScript Engine (Java 8)</h2>
      <p>Executes JavaScript code from Java:</p>
      <pre><code>{`
ScriptEngineManager manager = new ScriptEngineManager();
ScriptEngine engine = manager.getEngineByName("nashorn");
engine.eval("print('Hello, JavaScript')");`}</code></pre>

      <h2>Modular System (Java 9)</h2>
      <p>Introduced the Java Platform Module System (JPMS) to better structure large applications.</p>
      <pre><code>{`
module my.module {
  requires java.base;
}`}</code></pre>

      <h2>JShell (Java 9)</h2>
      <p>JShell is an interactive tool to quickly run Java code snippets.</p>
      <p><strong>Example:</strong> Just type <code>jshell</code> in the terminal and run: <code>System.out.println("Hello JShell");</code></p>

      <h2>Local Variable Type Inference (Java 10)</h2>
      <p>Use <code>var</code> to infer local variable types:</p>
      <pre><code>{`
var list = new ArrayList<String>();
list.add("Java 10");`}</code></pre>

      <h2>💬 Interview Questions</h2>
      <ul>
        <li>What is a functional interface?</li>
        <li>Difference between Stream API and Collections?</li>
        <li>How does Optional prevent NullPointerException?</li>
        <li>What are modules in Java 9?</li>
        <li>What is the use of <code>var</code> in Java 10?</li>
      </ul>
    </div>
      <Footer />        
    </>
  );
};

export default JavaFeatures;
