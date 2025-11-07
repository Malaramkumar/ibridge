import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const NewConceptsInPackage = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>Java New Concepts: Auto Boxing, Static Import, Enum & JAR | Narpavi</title>
        <meta
          name="description"
          content="Explore advanced Java concepts like Auto Boxing, Static Import, Enum usage, instanceof, and JAR file handling in this comprehensive Java tutorial."
        />
        <meta
          name="keywords"
          content="Java Auto Boxing, Java Static Import, Java Enums, Java JAR file, instanceof Java, Java Packages, Java Advanced Concepts"
        />
        <meta name="author" content="Narpavi Technologies" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Java New Concepts: Auto Boxing, Static Import, Enum & JAR | Narpavi" />
        <meta
          property="og:description"
          content="Learn advanced Java topics including Auto Boxing, Static Import, Enum handling, JAR operations, and instanceof usage."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.narpavitech.com/java/new-concepts-in-package" />
        <meta property="og:image" content="https://www.narpavitech.com/images/java-meta.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Java New Concepts in Package | Narpavi Technologies" />
        <meta
          name="twitter:description"
          content="Master advanced Java topics such as static import, enum, instanceof, JAR operations, and more."
        />
        <meta name="twitter:image" content="https://www.narpavitech.com/images/java-meta.jpg" />
      </Helmet>
      
      <h1>Module 15: New Concepts in Package</h1>
      <p><strong>Duration:</strong> 1 hr</p>

      <h2>🔁 Auto Boxing and Unboxing</h2>
      <p>
        <strong>Auto-boxing</strong> is the automatic conversion of primitive types to their corresponding wrapper classes. 
        <strong>Unboxing</strong> is the reverse.
      </p>
      <pre><code>{`Integer a = 10;       // Auto-boxing
int b = a;           // Auto-unboxing`}</code></pre>

      <h2>📦 Static Import</h2>
      <p>
        The <code>static import</code> feature allows members (fields and methods) defined in a class as <code>public static</code> to be used in Java code without specifying the class they belong to.
      </p>
      <pre><code>{`import static java.lang.Math.*;

public class Test {
  public static void main(String[] args) {
    System.out.println(sqrt(16)); // No need to write Math.sqrt()
  }
}`}</code></pre>

      <h2>🔍 instanceof Operator</h2>
      <p>
        The <code>instanceof</code> operator is used to test whether the object is an instance of a specific class or subclass.
      </p>
      <pre><code>{`String str = "Hello";
System.out.println(str instanceof String); // true`}</code></pre>

      <h2>📑 Enum and Its Use in Java</h2>
      <p>
        An <code>enum</code> is a special Java type used to define a collection of constants.
      </p>
      <pre><code>{`enum Level {
  LOW, MEDIUM, HIGH
}

public class TestEnum {
  public static void main(String[] args) {
    Level l = Level.HIGH;
    System.out.println(l);
  }
}`}</code></pre>
      <p>
        Enums are type-safe and can include constructors, methods, and variables like regular classes.
      </p>

      <h2>📦 Working with JAR Files</h2>
      <p>
        JAR (Java Archive) is a package file format used to aggregate many Java classes and associated metadata/resources into one file.
      </p>
      <ul>
        <li><code>jar cf MyJarFile.jar *.class</code> – Create a JAR</li>
        <li><code>jar tf MyJarFile.jar</code> – List contents</li>
        <li><code>jar xf MyJarFile.jar</code> – Extract contents</li>
      </ul>
      <p>You can run a JAR using:</p>
      <pre><code>java -jar MyJarFile.jar</code></pre>

      <h2>💬 Interview Questions</h2>
      <ul>
        <li>What is the use of <code>static import</code>?</li>
        <li>How is auto-boxing different from manual boxing?</li>
        <li>What are advantages of using enums in Java?</li>
        <li>How do you run and extract JAR files?</li>
        <li>What is the role of <code>instanceof</code> in inheritance?</li>
      </ul>
    </div>
      <Footer />
    </>
  );
};

export default NewConceptsInPackage;
