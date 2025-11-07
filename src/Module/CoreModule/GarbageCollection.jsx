import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const GarbageCollection = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>Java Garbage Collection - Module 16 | Narpavi Technologies</title>
        <meta name="description" content="Understand Java Garbage Collection, its benefits, usage of System.gc(), Runtime.gc(), and deprecated finalize() method with examples and interview questions." />
        <meta name="keywords" content="Java garbage collection, System.gc(), Runtime.gc(), finalize method, Java memory management, JVM garbage collector" />
        <meta name="author" content="Narpavi Technologies" />
        <meta property="og:title" content="Java Garbage Collection - Module 16" />
        <meta property="og:description" content="Learn about automatic memory management in Java, including System.gc(), finalize(), and garbage collection best practices." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/modules/garbage-collection" />
        <meta property="og:image" content="https://yourdomain.com/assets/java-garbage-collection.jpg" />
        <link rel="canonical" href="https://yourdomain.com/modules/garbage-collection" />
      </Helmet>
      
      <h1>Module 16: Garbage Collection</h1>
      <p><strong>Duration:</strong> 0.5 hr</p>

      <h2>♻️ Garbage Collection Introduction</h2>
      <p>
        In Java, Garbage Collection (GC) is the process by which the Java Virtual Machine (JVM) automatically removes objects that are no longer used to free up memory.
        It eliminates the need for manual memory management (like <code>free()</code> in C/C++).
      </p>

      <h2>✅ Advantages of Garbage Collection</h2>
      <ul>
        <li>Reduces memory leaks</li>
        <li>Improves application performance</li>
        <li>Reduces chances of memory overflow</li>
        <li>Simplifies coding — no need for explicit deallocation</li>
      </ul>

      <h2>⚙️ Garbage Collection Procedure</h2>
      <p>
        The JVM automatically determines when an object is no longer in use and reclaims its memory. 
        You can suggest GC by calling:
      </p>
      <pre><code>{`System.gc(); // Suggest JVM to perform garbage collection
Runtime.getRuntime().gc();`}</code></pre>
      <p>
        These calls do not guarantee that GC will happen immediately — they are requests to the JVM.
      </p>

      <h2>🧱 Java API Classes Involved</h2>
      <ul>
        <li><code>System.gc()</code> – Requests garbage collection</li>
        <li><code>Runtime.getRuntime().gc()</code> – Gets the runtime object and requests GC</li>
        <li><code>finalize()</code> – Deprecated method used before object is reclaimed</li>
      </ul>

      <h2>💡 Example Code</h2>
      <pre><code>{`public class GCDemo {
  public void finalize() {
    System.out.println("Object is garbage collected");
  }

  public static void main(String[] args) {
    GCDemo obj = new GCDemo();
    obj = null;
    System.gc(); // Suggest GC
  }
}`}</code></pre>

      <h2>📌 Note on finalize()</h2>
      <p>
        The <code>finalize()</code> method is deprecated in recent versions of Java (Java 9+). It's no longer recommended for cleanup operations.
      </p>

      <h2>💬 Interview Questions</h2>
      <ul>
        <li>What is garbage collection in Java?</li>
        <li>Can you force garbage collection?</li>
        <li>What is the difference between <code>System.gc()</code> and <code>Runtime.gc()</code>?</li>
        <li>Why is <code>finalize()</code> deprecated?</li>
        <li>What are the benefits of automatic memory management in Java?</li>
      </ul>
    </div>
      <Footer />
    </>
  );
};

export default GarbageCollection;
