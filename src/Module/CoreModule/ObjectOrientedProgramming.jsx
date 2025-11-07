import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const ObjectOrientedProgramming = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>Java OOPs Concepts Deep Dive | Narpavi Technologies</title>
        <meta name="description" content="Master Object Oriented Programming in Java. Learn Abstraction, Encapsulation, Inheritance, and Polymorphism with real-world examples." />
        <meta name="keywords" content="Java OOPs, Java Classes and Objects, Encapsulation, Inheritance, Polymorphism, Java Constructor, Java Interview Questions" />
        <meta name="author" content="Narpavi Technologies" />
        <meta property="og:title" content="Java OOPs Concepts Deep Dive" />
        <meta property="og:description" content="Learn OOPs concepts in Java including abstraction, inheritance, and polymorphism with code examples and interview questions." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.yourdomain.com/modules/java-oops" />
        <meta property="og:image" content="https://www.yourdomain.com/images/java-oops-banner.jpg" />
        <link rel="canonical" href="https://www.yourdomain.com/modules/java-oops" />
      </Helmet>
      
      <h1>Module 6: Object Oriented Programming (OOPs Concepts In Deep)</h1>
      <p><strong>Duration:</strong> 4 hrs</p>

      <h2>Procedural Vs Object Oriented Program</h2>
      <p>Procedural programming follows a step-by-step approach (e.g., C), while Object-Oriented Programming (OOP) models programs using objects (e.g., Java).</p>

      <h2>Top Down Vs Bottom Up Approach</h2>
      <p>
        <strong>Top Down:</strong> Starts from high-level design and breaks into smaller modules.<br />
        <strong>Bottom Up:</strong> Starts by creating small parts and integrates them to form larger systems.
      </p>

      <h2>Introduction to Object Oriented Concepts</h2>
      <p>Java supports OOP principles like Abstraction, Encapsulation, Inheritance, and Polymorphism.</p>

      <h2>Abstraction, Encapsulation, Inheritance, Polymorphism</h2>
      <ul>
        <li><strong>Abstraction:</strong> Hides unnecessary implementation details.</li>
        <li><strong>Encapsulation:</strong> Bundles data and code that manipulates it.</li>
        <li><strong>Inheritance:</strong> Acquires properties from another class.</li>
        <li><strong>Polymorphism:</strong> Allows one name to have many forms (overloading/overriding).</li>
      </ul>

      <h2>Introduction to Classes and Objects</h2>
      <pre><code>{`class Car {
  String model;
}

Car myCar = new Car();`}</code></pre>

      <h2>Custom Class Definition</h2>
      <pre><code>{`class Student {
  String name;
  int age;
}`}</code></pre>

      <h2>Instance and Static Variables</h2>
      <p>Instance variables are object-specific. Static variables are class-wide shared.</p>
      <pre><code>{`class Counter {
  static int count = 0;
  int id;
}`}</code></pre>

      <h2>Different ways to create Object Instances</h2>
      <ul>
        <li>Using <code>new</code> keyword</li>
        <li>Using <code>clone()</code> method</li>
        <li>Using <code>Class.forName()</code> with reflection</li>
      </ul>

      <h2>Constructors and Constructor Overloading</h2>
      <pre><code>{`class Demo {
  Demo() {
    System.out.println("Default Constructor");
  }
  Demo(int x) {
    System.out.println("Parameterized Constructor: " + x);
  }
}`}</code></pre>

      <h2>Static Variables and their use</h2>
      <p>Static variables are shared across all objects of the class. They save memory and define class-level properties.</p>

      <h2>Methods and their behavior</h2>
      <pre><code>{`public void greet() {
  System.out.println("Hello");
}`}</code></pre>

      <h2>Constructor vs Methods</h2>
      <ul>
        <li><strong>Constructor:</strong> Initializes objects, same name as class, no return type.</li>
        <li><strong>Method:</strong> Performs actions, can return values, any name allowed.</li>
      </ul>

      <h2>this Keyword</h2>
      <pre><code>{`class Example {
  int a;
  Example(int a) {
    this.a = a;
  }
}`}</code></pre>

      <h2>Java Access Modifiers</h2>
      <ul>
        <li><code>private</code> - accessible within the class only</li>
        <li><code>default</code> - accessible within the package</li>
        <li><code>protected</code> - accessible within package and subclasses</li>
        <li><code>public</code> - accessible everywhere</li>
      </ul>

      <h2>Call by Value vs Call by Reference</h2>
      <p>Java uses <strong>call by value</strong>. Even object references are passed by value (i.e., the reference is copied).</p>

      <h2>Programming Interview Questions</h2>
      <ul>
        <li><strong>Q1:</strong> What is the difference between abstraction and encapsulation?</li>
        <li><strong>Q2:</strong> Can constructors be overloaded in Java?</li>
        <li><strong>Q3:</strong> What is the output of method overriding and overloading?</li>
        <li><strong>Q4:</strong> Write a simple inheritance program in Java.</li>
      </ul>
      <pre><code>{`class Animal {
  void sound() {
    System.out.println("Animal sound");
  }
}

class Dog extends Animal {
  void sound() {
    System.out.println("Bark");
  }

  public static void main(String[] args) {
    Dog d = new Dog();
    d.sound(); // Output: Bark
  }
}`}</code></pre>
    </div>
      <Footer />
    </>
  );
};

export default ObjectOrientedProgramming;
