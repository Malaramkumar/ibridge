import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const Inheritance = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>Java Inheritance Explained - OOP Concepts | Narpavi Technologies</title>
        <meta
          name="description"
          content="Master Java Inheritance with real examples, constructor chaining, use of super keyword, reference casting, and interview tips. Learn OOP effectively."
        />
        <meta
          name="keywords"
          content="Java Inheritance, OOP Concepts, super keyword in Java, constructor chaining, Java interview questions, Java class inheritance, Narpavi Java Training"
        />
        <meta name="author" content="Narpavi Technologies" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.narpavitechnologies.com/java/inheritance" />
        {/* Social Sharing Tags */}
        <meta property="og:title" content="Java Inheritance Module | Narpavi Technologies" />
        <meta property="og:description" content="Deep dive into Java inheritance concepts with real-world examples and expert tips. Boost your OOP skills." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.narpavitechnologies.com/java/inheritance" />
        <meta property="og:image" content="https://www.narpavitechnologies.com/images/java-inheritance-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Java Inheritance - Complete OOP Guide" />
        <meta name="twitter:description" content="Understand inheritance, super keyword, constructor chaining, and more. A must-read Java module." />
        <meta name="twitter:image" content="https://www.narpavitechnologies.com/images/java-inheritance-cover.jpg" />
      </Helmet>
      
      <h1>Module 10: Inheritance</h1>
      <p><strong>Duration:</strong> 2 hrs</p>

      <h2>📌 Complete Concepts of Inheritance</h2>
      <p>
        <strong>Inheritance</strong> is one of the four pillars of OOP. It allows a class (child/subclass) to acquire properties and behaviors (fields and methods) from another class (parent/superclass).
      </p>
      <pre><code>{`class Animal {
  void sound() {
    System.out.println("Animal makes sound");
  }
}

class Dog extends Animal {
  void bark() {
    System.out.println("Dog barks");
  }
}`}</code></pre>
      <p><strong>Output:</strong> Dog can use both <code>bark()</code> and <code>sound()</code>.</p>

      <h2>🧩 Sub-Classes</h2>
      <p>
        A <strong>subclass</strong> (or derived class) inherits all non-private members from its superclass.
      </p>
      <pre><code>{`class Vehicle {
  int speed = 60;
}

class Car extends Vehicle {
  void display() {
    System.out.println("Speed: " + speed);
  }
}`}</code></pre>

      <h2>🧱 Object Class (Super Parent of All)</h2>
      <p>
        In Java, <code>Object</code> is the parent class of all classes. Even if you don’t extend any class explicitly, Java automatically extends <code>Object</code>.
      </p>
      <pre><code>{`class MyClass {
  // implicitly extends Object
}`}</code></pre>
      <p>This allows access to methods like <code>toString()</code>, <code>equals()</code>, <code>hashCode()</code>, etc.</p>

      <h2>🔗 Constructor Calling Chain</h2>
      <p>
        When a subclass object is created, the parent class constructor is invoked first.
      </p>
      <pre><code>{`class Parent {
  Parent() {
    System.out.println("Parent constructor");
  }
}

class Child extends Parent {
  Child() {
    System.out.println("Child constructor");
  }
}

public class Main {
  public static void main(String[] args) {
    Child c = new Child();
  }
}`}</code></pre>
      <p><strong>Output:</strong><br />Parent constructor<br />Child constructor</p>

      <h2>🧭 The Use of <code>super</code> Keyword</h2>
      <p>
        <code>super</code> is used to refer to the immediate parent class:
      </p>
      <ul>
        <li>To call superclass methods</li>
        <li>To access superclass variables</li>
        <li>To invoke parent class constructor</li>
      </ul>
      <pre><code>{`class Animal {
  String name = "Animal";
}

class Dog extends Animal {
  String name = "Dog";

  void printNames() {
    System.out.println(super.name); // prints "Animal"
  }
}`}</code></pre>

      <h2>🔐 Use of <code>private</code> Keyword in Inheritance</h2>
      <p>
        Private members of the parent class are <strong>not accessible</strong> directly in the child class.
      </p>
      <pre><code>{`class A {
  private int data = 10;
}

class B extends A {
  void display() {
    // System.out.println(data); // ❌ Compile Error
  }
}`}</code></pre>
      <p>Access should be done via public or protected getter/setter methods.</p>

      <h2>🔄 Reference Casting</h2>
      <p>
        Reference casting allows treating a subclass object as an instance of the parent class:
      </p>
      <pre><code>{`class Animal {
  void speak() {
    System.out.println("Animal speaks");
  }
}

class Cat extends Animal {
  void meow() {
    System.out.println("Cat meows");
  }
}

public class Test {
  public static void main(String[] args) {
    Animal a = new Cat(); // Upcasting
    a.speak();            // Allowed
    // a.meow(); ❌ Compile Error

    Cat c = (Cat) a;      // Downcasting
    c.meow();             // ✅ Works
  }
}`}</code></pre>
      <p><strong>Note:</strong> Downcasting requires care. If <code>a</code> isn't actually a <code>Cat</code>, a <code>ClassCastException</code> will occur.</p>

      <h2>💬 Interview Tips</h2>
      <ul>
        <li>Explain constructor chaining and the order of execution.</li>
        <li>Understand the role of <code>super</code> keyword deeply.</li>
        <li>Know the access rules of <code>private</code>, <code>protected</code>, <code>default</code>, and <code>public</code> in inheritance.</li>
        <li>Prepare examples on runtime polymorphism using inheritance.</li>
      </ul>
    </div>
      <Footer />
    </>
  );
};

export default Inheritance;
