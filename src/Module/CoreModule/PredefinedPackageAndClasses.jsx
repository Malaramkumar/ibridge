import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const PredefinedPackageAndClasses = () => {
  return (
    <>
      <Nar_Header />  
    <div className="module-detail">
      <Helmet>
        <title>Module 14: Java Predefined Packages, Wrapper Classes & String Handling</title>
        <meta name="description" content="Learn how to use predefined Java packages like java.lang, explore Object class methods, String handling, wrapper classes, and system utilities with examples." />
        <meta name="keywords" content="Java, Predefined Package, java.lang, Object class, String, StringBuilder, Wrapper Classes, Math, System, Runtime, Interview Questions" />
        <meta name="author" content="Narpavi Technologies" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Java Module 14: Predefined Packages & String Handling" />
        <meta property="og:description" content="Understand Java's java.lang package, wrapper classes, string pool, and system-level classes with code examples and interview tips." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.narpavitech.com/java/module-14" />
        <meta property="og:image" content="https://www.narpavitech.com/images/java-og.jpg" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Java Module 14: Predefined Packages & String Handling" />
        <meta name="twitter:description" content="Master Java predefined packages, Object class, wrapper classes, StringBuffer vs StringBuilder, and more." />
        <meta name="twitter:image" content="https://www.narpavitech.com/images/java-twitter.jpg" />
      </Helmet>

      <h1>Module 14: Using Predefined Package & Other Classes</h1>
      <p><strong>Duration:</strong> 2 hrs</p>

      <h2>📚 Java.lang Hierarchy</h2>
      <p>
        The <code>java.lang</code> package is automatically imported in every Java program. It contains core classes like <code>Object</code>, <code>String</code>, <code>System</code>, <code>Math</code>, <code>Runtime</code>, etc.
      </p>

      <h2>👤 Object Class & Common Methods</h2>
      <p>All classes in Java inherit from <code>Object</code>. Common methods include:</p>
      <ul>
        <li><code>toString()</code> – returns string representation</li>
        <li><code>equals()</code> – compares objects</li>
        <li><code>hashCode()</code> – returns unique int hash</li>
        <li><code>clone()</code> – creates object copy</li>
        <li><code>finalize()</code> – cleanup before GC</li>
      </ul>
      <pre><code>{`public class Demo {
  public String toString() {
    return "Demo Class";
  }

  public static void main(String[] args) {
    Demo d = new Demo();
    System.out.println(d.toString());
  }
}`}</code></pre>

      <h2>🎵 Using Runtime & Process Class (Play Audio/Video)</h2>
      <p>
        You can use <code>Runtime.getRuntime()</code> to execute external applications:
      </p>
      <pre><code>{`public class MediaPlayer {
  public static void main(String[] args) throws Exception {
    Runtime.getRuntime().exec("C:\\\\Program Files\\\\Windows Media Player\\\\wmplayer.exe");
  }
}`}</code></pre>

      <h2>🔢 Primitives and Wrapper Classes</h2>
      <p>Each primitive type has a wrapper class:</p>
      <ul>
        <li><code>int → Integer</code></li>
        <li><code>char → Character</code></li>
        <li><code>boolean → Boolean</code></li>
      </ul>
      <p>Use for conversions, null handling, and collections.</p>
      <pre><code>{`Integer x = Integer.valueOf(10);
int y = x.intValue();`}</code></pre>

      <h2>📐 Math Class</h2>
      <p>Provides mathematical functions like:</p>
      <pre><code>{`Math.abs(-10);  // 10
Math.pow(2, 3); // 8
Math.sqrt(25);  // 5
Math.max(5, 10); // 10`}</code></pre>

      <h2>🧵 String, StringBuffer, StringBuilder</h2>
      <ul>
        <li><code>String</code> – Immutable</li>
        <li><code>StringBuffer</code> – Mutable & thread-safe</li>
        <li><code>StringBuilder</code> – Mutable & faster (not thread-safe)</li>
      </ul>
      <pre><code>{`String s = "Hello";
s = s.concat(" Java");

StringBuilder sb = new StringBuilder("Hi");
sb.append(" Dev");`}</code></pre>

      <h2>🔁 String Constant Pool</h2>
      <p>
        Java stores string literals in a special memory area called the **String Constant Pool** to save memory. Duplicate literals reference the same object.
      </p>
      <pre><code>{`String a = "Java";
String b = "Java";
System.out.println(a == b); // true`}</code></pre>

      <h2>🧰 Wrapper Class Usage</h2>
      <p>Wrapper classes help in:</p>
      <ul>
        <li>Parsing strings to numbers: <code>Integer.parseInt("123")</code></li>
        <li>Autoboxing/unboxing</li>
        <li>Working with Collections (e.g., <code>ArrayList&lt;Integer&gt;</code>)</li>
      </ul>

      <h2>🖥️ System Class (gc, exit)</h2>
      <p>The <code>System</code> class provides system-level functionality:</p>
      <pre><code>{`System.gc(); // Suggest GC run
System.exit(0); // Exit program`}</code></pre>

      <h2>💬 Interview Tips</h2>
      <ul>
        <li>Difference between <code>equals()</code> and <code>==</code></li>
        <li>StringBuffer vs StringBuilder</li>
        <li>Use of Runtime.exec()</li>
        <li>How wrapper classes are used in Collections</li>
      </ul>
    </div>
      <Footer />
    </> 
  );
};

export default PredefinedPackageAndClasses;
