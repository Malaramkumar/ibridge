import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const Serialization = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>Java Serialization Explained | Module 20</title>
        <meta
          name="description"
          content="Learn Java Serialization with examples: object streams, transient keyword, deserialization, and common interview questions. Boost your Java knowledge."
        />
        <meta
          name="keywords"
          content="Java Serialization, Java Serializable, ObjectOutputStream, ObjectInputStream, Transient keyword, serialVersionUID, Java Interview Questions"
        />
        <meta name="author" content="Narpavi Technologies" />
        <meta property="og:title" content="Java Serialization Explained | Module 20" />
        <meta
          property="og:description"
          content="Understand Java Serialization and Deserialization with examples, code snippets, and key concepts explained simply."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourwebsite.com/modules/serialization" />
        <meta property="og:image" content="https://yourwebsite.com/images/java-serialization-cover.jpg" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/modules/serialization" />
      </Helmet>

      <h1>Module 20: Serialization</h1>
      <p><strong>Duration:</strong> 0.5 hr</p>

      <h2>📦 Introduction to Serialization</h2>
      <p>
        Serialization is the process of converting an object into a byte stream so that it can be saved to a file or sent over a network. Deserialization is the reverse process of reconstructing an object from a byte stream.
      </p>

      <h2>💡 Using Object Streams to Read/Write Objects</h2>
      <p>
        Java provides <code>ObjectOutputStream</code> and <code>ObjectInputStream</code> for serializing and deserializing objects.
      </p>
      <pre><code>{`import java.io.*;

class Student implements Serializable {
  int id;
  String name;

  Student(int id, String name) {
    this.id = id;
    this.name = name;
  }
}

public class SerializeDemo {
  public static void main(String[] args) throws Exception {
    Student s1 = new Student(101, "John");
    ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("student.ser"));
    out.writeObject(s1);
    out.close();
  }
}`}</code></pre>

      <h2>🔄 Deserialization Process</h2>
      <pre><code>{`ObjectInputStream in = new ObjectInputStream(new FileInputStream("student.ser"));
Student s = (Student) in.readObject();
System.out.println(s.id + " " + s.name);
in.close();`}</code></pre>

      <h2>🛡️ Transient Keyword</h2>
      <p>
        If you don't want to serialize a specific field of a class, mark it as <code>transient</code>. Such fields are not persisted during serialization.
      </p>
      <pre><code>{`class Employee implements Serializable {
  int id;
  transient String password; // won't be serialized
}`}</code></pre>

      <h2>✅ Serialization Process</h2>
      <ul>
        <li>Class must implement <code>Serializable</code> interface</li>
        <li>All fields must be serializable or marked <code>transient</code></li>
        <li>Use <code>ObjectOutputStream</code> to serialize</li>
      </ul>

      <h2>🔁 Deserialization Process</h2>
      <ul>
        <li>Use <code>ObjectInputStream</code> to read the object back</li>
        <li>Use casting to assign to appropriate type</li>
      </ul>

      <h2>💬 Interview Questions</h2>
      <ul>
        <li>What is serialization in Java?</li>
        <li>How do you prevent a field from being serialized?</li>
        <li>What is the purpose of the <code>serialVersionUID</code>?</li>
        <li>What happens if a class does not implement <code>Serializable</code>?</li>
      </ul>
    </div>
      <Footer />
    </>
  );
};

export default Serialization;
