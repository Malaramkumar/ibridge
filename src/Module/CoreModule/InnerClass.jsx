import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const InnerClass = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>Java Inner Classes Explained | Narpavi Technologies</title>
        <meta name="description" content="Learn all about Java Inner Classes - types, usage, syntax, and real-world examples. Boost your Java knowledge with practical coding examples." />
        <meta name="keywords" content="Java Inner Class, Static Nested Class, Local Inner Class, Anonymous Class, Java OOP, Java Interview, Java Examples" />
        <meta name="author" content="Narpavi Technologies" />
        <link rel="canonical" href="https://www.narpavitechnologies.com/java/inner-class" />

        {/* Open Graph (OG) for Social Media */}
        <meta property="og:title" content="Java Inner Classes Explained | Narpavi Technologies" />
        <meta property="og:description" content="Understand Inner Classes in Java with examples: static, non-static, local, and anonymous inner classes. Ideal for interviews and projects." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.narpavitechnologies.com/java/inner-class" />
        <meta property="og:image" content="https://www.narpavitechnologies.com/images/java-inner-class-banner.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Java Inner Classes Explained | Narpavi Technologies" />
        <meta name="twitter:description" content="Master Java Inner Classes - Static, Local, and Anonymous. With real examples and interview tips." />
        <meta name="twitter:image" content="https://www.narpavitechnologies.com/images/java-inner-class-banner.png" />
      </Helmet>

      <h1>Module 9: Inner Class</h1>
      <p><strong>Duration:</strong> 1 hr</p>

      <h2>📌 First View of Inner Class</h2>
      <p>
        An <strong>Inner Class</strong> is a class defined within another class. Java allows this to logically group classes that are only used in one place, making code more readable and maintainable.
      </p>
      <pre><code>{`class Outer {
  class Inner {
    void show() {
      System.out.println("Inside Inner class");
    }
  }
}`}</code></pre>

      <h2>🔓 Outer Class Access</h2>
      <p>
        Inner classes can access all members (including private) of the outer class. This is useful when the inner class needs context from its outer class.
      </p>
      <pre><code>{`class Outer {
  private String message = "Hello from Outer";

  class Inner {
    void display() {
      System.out.println(message); // Accessing private member of outer class
    }
  }
}`}</code></pre>

      <h2>📚 Types of Inner Classes</h2>
      <ul>
        <li><strong>Non-static Nested Class (Inner Class)</strong></li>
        <li><strong>Static Nested Class</strong></li>
        <li><strong>Local Inner Class</strong> (inside methods)</li>
        <li><strong>Anonymous Inner Class</strong></li>
      </ul>

      <h3>1️⃣ Non-static Inner Class</h3>
      <p>Requires an instance of the outer class to be created:</p>
      <pre><code>{`Outer.Inner inner = new Outer().new Inner();`}</code></pre>

      <h3>2️⃣ Static Nested Class</h3>
      <p>Doesn’t need an outer class object to instantiate:</p>
      <pre><code>{`class Outer {
  static class Nested {
    void run() {
      System.out.println("Static Nested Class");
    }
  }
}

// Usage
Outer.Nested obj = new Outer.Nested();
obj.run();
`}</code></pre>

      <h3>3️⃣ Local Inner Class</h3>
      <p>Defined inside a method, available only within that method:</p>
      <pre><code>{`void myMethod() {
  class Local {
    void greet() {
      System.out.println("Hello from local inner class");
    }
  }
  Local l = new Local();
  l.greet();
}`}</code></pre>

      <h3>4️⃣ Anonymous Inner Class</h3>
      <p>Defined and instantiated in one go, mostly for implementing interfaces or extending classes:</p>
      <pre><code>{`Runnable r = new Runnable() {
  public void run() {
    System.out.println("Running anonymously");
  }
};
new Thread(r).start();
`}</code></pre>

      <h2>💡 When to Use Inner Classes</h2>
      <ul>
        <li>To logically group classes that are only used in one place</li>
        <li>To encapsulate helper classes and hide them from the outer world</li>
        <li>For better organization of code (e.g., in GUI development)</li>
      </ul>

      <h2>💬 Interview Tip</h2>
      <ul>
        <li>Be prepared to explain the difference between static and non-static inner classes.</li>
        <li>Understand where anonymous inner classes are typically used (e.g., GUI, threading).</li>
        <li>Practice coding examples of each type of inner class.</li>
      </ul>
    </div>
    <Footer />
    </>
  );
};

export default InnerClass;
