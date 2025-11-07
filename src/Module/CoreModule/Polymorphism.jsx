import React from 'react';
import { Helmet } from 'react-helmet';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const Polymorphism = () => {
  return (
    <>
      <Nar_Header />  
    <div className="module-detail">
      <Helmet>
        <title>Java Polymorphism - Method Overloading & Overriding | Java OOP Concepts</title>
        <meta
          name="description"
          content="Learn Java Polymorphism with practical examples of method overloading and overriding. Understand static vs dynamic polymorphism, final methods, and interview questions."
        />
        <meta
          name="keywords"
          content="Java Polymorphism, Method Overloading, Method Overriding, Static vs Dynamic Polymorphism, Java OOP, Java Interview Questions"
        />
        <meta name="author" content="Narpavi Technologies" />
        <meta property="og:title" content="Java Polymorphism - Method Overloading & Overriding" />
        <meta
          property="og:description"
          content="Master the concept of polymorphism in Java with in-depth explanation and real-world examples. Learn how it improves code flexibility and reusability."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://narpavitech.com/modules/java/polymorphism" />
        <meta property="og:image" content="https://narpavitech.com/images/java-polymorphism-banner.jpg" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <h1>Module 12: Polymorphism</h1>
      <p><strong>Duration:</strong> 1 hr</p>

      <h2>📌 Introduction to Polymorphism</h2>
      <p>
        Polymorphism means “many forms.” It allows objects to be treated as instances of their parent class rather than their actual class.
      </p>

      <h2>📚 Types of Polymorphism</h2>
      <ul>
        <li><strong>Compile-time (Static) Polymorphism:</strong> Achieved by method overloading</li>
        <li><strong>Runtime (Dynamic) Polymorphism:</strong> Achieved by method overriding</li>
      </ul>

      <h2>🛠 Overloading Methods</h2>
      <pre><code>{`class Calculator {
  int add(int a, int b) {
    return a + b;
  }

  double add(double a, double b) {
    return a + b;
  }
}`}</code></pre>

      <h2>🔁 Overriding Methods</h2>
      <pre><code>{`class Animal {
  void sound() {
    System.out.println("Some sound");
  }
}

class Dog extends Animal {
  void sound() {
    System.out.println("Bark");
  }
}`}</code></pre>

      <h2>🚫 Hiding Methods</h2>
      <pre><code>{`class A {
  static void display() {
    System.out.println("A");
  }
}

class B extends A {
  static void display() {
    System.out.println("B");
  }
}`}</code></pre>

      <h2>🔐 Final Class and Method</h2>
      <ul>
        <li><code>final class</code> cannot be extended</li>
        <li><code>final method</code> cannot be overridden</li>
      </ul>

      <h2>🤖 Polymorphic Behavior in Java</h2>
      <pre><code>{`Animal a = new Dog();
a.sound();  // Output: Bark`}</code></pre>

      <h2>✅ Benefits of Polymorphism</h2>
      <ul>
        <li>Code reusability</li>
        <li>Interface implementation flexibility</li>
        <li>Reduces code duplication</li>
        <li>Supports extensibility and maintainability</li>
      </ul>

      <h2>🔄 “Is-A” vs “Has-A” Relationship</h2>
      <ul>
        <li><strong>Is-A:</strong> Inheritance (Dog is an Animal)</li>
        <li><strong>Has-A:</strong> Composition (Car has an Engine)</li>
      </ul>

      <h2>🧱 Association vs Aggregation</h2>
      <ul>
        <li><strong>Association:</strong> General relationship between two classes</li>
        <li><strong>Aggregation:</strong> “Has-A” relationship where the child can exist independently</li>
      </ul>

      <h2>🎯 Interview Questions & Answers</h2>
      <ul>
        <li><strong>Q:</strong> What is method overriding?</li>
        <li><strong>A:</strong> When a subclass provides a specific implementation of a method already declared in its superclass.</li>

        <li><strong>Q:</strong> Can static methods be overridden?</li>
        <li><strong>A:</strong> No, they are hidden, not overridden.</li>

        <li><strong>Q:</strong> What is the difference between overloading and overriding?</li>
        <li><strong>A:</strong> Overloading happens at compile-time; overriding at runtime.</li>
      </ul>
    </div>
      <Footer />
    </>
  );
};

export default Polymorphism;
