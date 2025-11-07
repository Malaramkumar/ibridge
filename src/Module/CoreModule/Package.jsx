import React from 'react';
import { Helmet } from 'react-helmet';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const Package = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>Java Packages & Classpath - Learn Module 13 | Java Full Stack Training</title>
        <meta name="description" content="Master Java packages, classpath, importing classes, sub-packages, and access modifiers. Learn practical usage and compile/run with examples." />
        <meta name="keywords" content="Java Package, Classpath, Java Import, Sub-package, Java Namespace, Java Access Modifiers, Java Modules, Java Full Stack, Java Training" />
        <meta name="author" content="Narpavi Technologies" />
        <meta property="og:title" content="Java Package & Classpath | Java Full Stack Training" />
        <meta property="og:description" content="Understand packages in Java, how to use classpath, organize code using modular structures, and manage namespaces." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://yourwebsite.com/images/java-packages-banner.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/java/package" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/java/package" />
      </Helmet>
      
      <h1>Module 13: Package</h1>
      <p><strong>Duration:</strong> 2 hrs</p>

      <h2>📦 Package and Classpath</h2>
      <p>
        A <strong>package</strong> in Java is a namespace that organizes a set of related classes and interfaces. The <strong>classpath</strong> tells the JVM where to find .class files.
      </p>

      <h2>👀 First Look into Packages</h2>
      <p>
        Java packages are declared using the <code>package</code> keyword. They help prevent class name conflicts and maintain project structure.
      </p>
      <pre><code>{`package com.example.demo;

public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello from package!");
  }
}`}</code></pre>

      <h2>✅ Benefits of Packages</h2>
      <ul>
        <li>Encapsulation and access control</li>
        <li>Code organization and modularity</li>
        <li>Prevention of name conflicts</li>
        <li>Helps in reusability and maintenance</li>
      </ul>

      <h2>🛠️ Package Creation and Use</h2>
      <p>Create folders that match the package name:</p>
      <pre><code>
com/
 └── example/
      └── demo/
           └── HelloWorld.java
</code></pre>

      <h2>🔍 Classpath Setting</h2>
      <p>Use <code>-cp</code> or <code>CLASSPATH</code> environment variable to specify the path:</p>
      <pre><code>javac -d . HelloWorld.java
java com.example.demo.HelloWorld</code></pre>

      <h2>📥 Importing Packages and Classes</h2>
      <pre><code>{`import java.util.Scanner;
import com.example.demo.HelloWorld;`}</code></pre>

      <h2>🔐 Role of Access Modifiers w.r.t Package</h2>
      <ul>
        <li><strong>public:</strong> Accessible from anywhere</li>
        <li><strong>protected:</strong> Accessible within package and subclasses</li>
        <li><strong>default:</strong> Accessible within the same package only</li>
        <li><strong>private:</strong> Accessible only within the class</li>
      </ul>

      <h2>📛 Namespace Management</h2>
      <p>
        Packages act as namespaces. For example, <code>java.util.List</code> vs <code>java.awt.List</code>.
      </p>

      <h2>📂 Package vs Header File</h2>
      <p>
        In C/C++, header files provide declarations. In Java, packages group related classes. Java doesn’t use header files.
      </p>

      <h2>🧭 Creating and Using Sub-Packages</h2>
      <p>
        Sub-packages are packages inside another package:
      </p>
      <pre><code>{`package com.tech.utils;`}</code></pre>
      <p>Directory: <code>com/tech/utils</code></p>

      <h2>🗃 Sources and Class File Management</h2>
      <p>
        When using <code>javac -d</code>, Java places compiled .class files into folders based on their package:
      </p>
      <pre><code>javac -d . MyClass.java</code></pre>
      <p>This generates: <code>com/example/demo/MyClass.class</code></p>

      <h2>💬 Interview Tip</h2>
      <ul>
        <li>Know the difference between <code>import java.util.*</code> and <code>import java.util.Scanner</code>.</li>
        <li>Explain how packages help maintain large applications.</li>
        <li>Be ready to compile and run code from packages manually using the terminal.</li>
      </ul>
    </div>
      <Footer />
    </> 
  );
};

export default Package;
