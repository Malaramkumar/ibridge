import React from 'react';
import { Helmet } from 'react-helmet';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const Multithreading = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>Java Multithreading Explained | Thread, Runnable, Synchronization</title>
        <meta
          name="description"
          content="Learn Java Multithreading concepts with examples: Thread class, Runnable interface, thread lifecycle, synchronization, deadlock prevention, and interview tips."
        />
        <meta name="keywords" content="Java Multithreading, Java Thread, Runnable, Synchronization in Java, Java Deadlock, Java Thread Lifecycle, Java Interview Questions" />
        <meta name="author" content="Narpavi Technologies" />
        <meta property="og:title" content="Java Multithreading | Threads, Runnable, Synchronization" />
        <meta property="og:description" content="Master multithreading in Java. Understand Thread class, Runnable, synchronization, thread states, and tips to crack interviews." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.narpavi.com/java/multithreading" />
        <meta property="og:image" content="https://www.narpavi.com/images/java-multithreading-banner.jpg" />
      </Helmet>

      <h1>Module 18: Multithreading</h1>
      <p><strong>Duration:</strong> 3 hrs</p>

      <h2>🧵 Introduction</h2>
      <p>Multithreading is a Java feature that allows concurrent execution of two or more parts of a program for maximum CPU utilization.</p>

      <h2>✅ Advantages</h2>
      <ul>
        <li>Efficient CPU utilization</li>
        <li>Improved performance on multicore systems</li>
        <li>Concurrent execution of tasks</li>
      </ul>

      <h2>🧬 Creating a Thread by Inheriting from Thread Class</h2>
      <pre><code>{`class MyThread extends Thread {
  public void run() {
    System.out.println("Thread is running...");
  }

  public static void main(String[] args) {
    MyThread t1 = new MyThread();
    t1.start();
  }
}`}</code></pre>

      <h2>▶️ run() vs start()</h2>
      <ul>
        <li><code>run()</code>: Executes code in the same thread</li>
        <li><code>start()</code>: Creates a new thread and then executes <code>run()</code></li>
      </ul>

      <h2>🔧 Constructor of Thread Class</h2>
      <p>Thread class constructors allow naming and grouping of threads.</p>

      <h2>🔁 Various Methods of Thread Class</h2>
      <ul>
        <li><code>start()</code>, <code>run()</code>, <code>sleep()</code></li>
        <li><code>join()</code>, <code>isAlive()</code></li>
        <li><code>setPriority()</code>, <code>getPriority()</code></li>
      </ul>

      <h2>💡 Runnable Interface Implementation</h2>
      <pre><code>{`class MyRunnable implements Runnable {
  public void run() {
    System.out.println("Running thread via Runnable...");
  }

  public static void main(String[] args) {
    Thread t = new Thread(new MyRunnable());
    t.start();
  }
}`}</code></pre>

      <h2>👥 Thread Group</h2>
      <p>Used to manage multiple threads as a single group.</p>

      <h2>🕰 Thread States and Priorities</h2>
      <ul>
        <li>New → Runnable → Running → Blocked → Dead</li>
        <li>Priorities range from 1 (MIN_PRIORITY) to 10 (MAX_PRIORITY)</li>
      </ul>

      <h2>🔐 Synchronization (Method and Block)</h2>
      <pre><code>{`synchronized void print() {
  // sync method
}`}</code></pre>
      <pre><code>{`void print() {
  synchronized(this) {
    // sync block
  }
}`}</code></pre>

      <h2>🔒 Class & Object Level Lock</h2>
      <p><strong>Object-level lock:</strong> synchronized non-static method.<br /><strong>Class-level lock:</strong> synchronized static method.</p>

      <h2>💥 Deadlock & Its Prevention</h2>
      <p>Occurs when two threads hold resources and wait for each other to release. Prevent with ordering, timeout, or try-lock mechanisms.</p>

      <h2>🔄 Inter-thread Synchronization</h2>
      <p>Using <code>wait()</code>, <code>notify()</code>, <code>notifyAll()</code> for coordinating thread execution.</p>

      <h2>🔃 Life Cycle of Thread</h2>
      <p>New → Runnable → Running → Waiting/Blocked → Dead</p>

      <h2>⛔ Deprecated Methods</h2>
      <ul>
        <li><code>stop()</code>, <code>suspend()</code>, <code>resume()</code> are unsafe and deprecated.</li>
      </ul>

      <h2>💬 Interview Tips</h2>
      <ul>
        <li>Difference between Runnable and Thread class?</li>
        <li>How is synchronization implemented in Java?</li>
        <li>How to avoid deadlocks?</li>
        <li>What are daemon threads?</li>
      </ul>
    </div>
      <Footer />
    </> 
  );
};

export default Multithreading;
