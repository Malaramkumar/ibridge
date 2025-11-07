import React from 'react';
import { Helmet } from 'react-helmet';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const AbstractClassesAndInheritance = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        {/* Title & Canonical */}
        <title>Abstract Classes and Interfaces in Java | Module 11</title>
        <link
          rel="canonical"
          href="https://www.narpavitechnologies.com/java/module-11"
        />

        {/* Meta Tags */}
        <meta
          name="description"
          content="Master Java's Abstract Classes and Interfaces in Module 11. Learn inheritance, abstraction, interface implementation, interview tips and real-world examples."
        />
        <meta
          name="keywords"
          content="Java Abstract Class, Java Interface, Inheritance, Multiple Interface, Java Interview, OOP, Java Training, Abstract vs Interface, Java Module 11"
        />
        <meta name="author" content="Narpavi Technologies" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags for Facebook/LinkedIn */}
        <meta property="og:title" content="Java Module 11: Abstract Classes and Interfaces" />
        <meta
          property="og:description"
          content="Deep dive into Java abstract classes, interfaces, and inheritance. Learn with examples, code snippets, and tips from Narpavi Technologies."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.narpavitechnologies.com/java/module-11" />
        <meta property="og:site_name" content="Narpavi Technologies" />
        <meta
          property="og:image"
          content="https://www.narpavitechnologies.com/assets/java-module11-thumbnail.jpg"
        />

        {/* Twitter Card SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abstract Classes and Interfaces in Java | Module 11" />
        <meta
          name="twitter:description"
          content="Understand abstract classes and interfaces in Java with clear examples and interview tips from Narpavi Technologies."
        />
        <meta
          name="twitter:image"
          content="https://www.narpavitechnologies.com/assets/java-module11-thumbnail.jpg"
        />
      </Helmet>
      
      <h1>Module 11: Abstract Classes and Inheritance</h1>
      <p><strong>Duration:</strong> 2 hrs</p>

      <h2>📘 Introduction to Abstract Methods</h2>
      <p>Abstract methods are methods declared without implementation. They must be implemented by subclasses.</p>
      <pre><code>{`abstract class Animal {
  abstract void sound();
}`}</code></pre>

      <h2>🧱 Abstract Classes and Interface</h2>
      <p>An abstract class can contain both abstract and concrete methods, while interfaces only declare method signatures (prior to Java 8).</p>
      <pre><code>{`abstract class Shape {
  abstract void draw();
  void color() {
    System.out.println("Colored");
  }
}`}</code></pre>

      <h2>🧩 Interface as a Type</h2>
      <p>Interfaces can be used as types for reference variables.</p>
      <pre><code>{`interface Drawable {
  void draw();
}

class Circle implements Drawable {
  public void draw() {
    System.out.println("Drawing Circle");
  }
}`}</code></pre>

      <h2>📊 Interface vs Abstract Class</h2>
      <ul>
        <li>Interfaces cannot have constructors; abstract classes can.</li>
        <li>A class can implement multiple interfaces, but only extend one abstract class.</li>
        <li>Interfaces are fully abstract (until Java 7), abstract classes can have both.</li>
      </ul>

      <h2>🔧 Interface Definition</h2>
      <pre><code>{`interface Vehicle {
  void start();
  void stop();
}`}</code></pre>

      <h2>🔨 Interface Implementation</h2>
      <pre><code>{`class Car implements Vehicle {
  public void start() {
    System.out.println("Car started");
  }
  public void stop() {
    System.out.println("Car stopped");
  }
}`}</code></pre>

      <h2>🔗 Multiple Interfaces’ Implementation</h2>
      <pre><code>{`interface Flyable {
  void fly();
}

interface Swimmable {
  void swim();
}

class Duck implements Flyable, Swimmable {
  public void fly() {
    System.out.println("Duck flies");
  }
  public void swim() {
    System.out.println("Duck swims");
  }
}`}</code></pre>

      <h2>📚 Interfaces’ Inheritance</h2>
      <p>One interface can extend another interface.</p>
      <pre><code>{`interface Animal {
  void eat();
}

interface Pet extends Animal {
  void play();
}`}</code></pre>

      <h2>🚀 How to Create Object of Interface</h2>
      <p>You cannot instantiate an interface directly, but you can reference objects that implement it.</p>
      <pre><code>{`Drawable d = new Circle();
d.draw();`}</code></pre>

      <h2>💬 Interview Tips</h2>
      <ul>
        <li>Explain the difference between abstract class and interface with examples.</li>
        <li>Discuss when to use which: abstract class vs interface.</li>
        <li>Prepare real-life scenarios for multiple interface implementations.</li>
      </ul>
    </div>
      <Footer />
    </>
  );
};

export default AbstractClassesAndInheritance;
