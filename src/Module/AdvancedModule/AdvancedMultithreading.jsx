import React from 'react';
import { Helmet } from 'react-helmet';
import '../CoreModule/ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const AdvancedMultithreading = () => {
  return (
    <section>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>Advanced Multi-Threading in Java | Narpavi Technologies</title>
        <meta
          name="description"
          content="Learn Advanced Java Multithreading including Thread Pools, ExecutorService, Runnable vs Thread, and file processing with threads in this 3-hour module."
        />
        <meta
          name="keywords"
          content="Java Multithreading, ExecutorService, Java Thread Pool, Runnable, Thread, Java File Processing, Advanced Java, Java Concurrency"
        />
        <meta name="author" content="Narpavi Technologies" />
        <link rel="canonical" href="https://www.narpavitech.in/java/advanced-multithreading" />
      </Helmet>

      <h1>Module 5: Advanced Multi-Threading</h1>
      <p><strong>Duration:</strong> 3 hrs</p>

      <h2>ExecutorService and Thread Pooling</h2>
      <p><strong>ExecutorService</strong> provides a pool of threads and manages their execution efficiently.</p>
      <pre><code>{`import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadPoolExample {
  public static void main(String[] args) {
    ExecutorService executor = Executors.newFixedThreadPool(3);
    for (int i = 0; i < 5; i++) {
      int taskId = i;
      executor.execute(() -> {
        System.out.println("Executing Task " + taskId);
      });
    }
    executor.shutdown();
  }
}`}</code></pre>

      <h2>Big File Processing with Multiple Threads</h2>
      <p>Use multithreading to process parts of a file concurrently (e.g. log analysis or data aggregation):</p>
      <pre><code>{`import java.io.*;

class FileProcessor implements Runnable {
  private final String fileName;

  public FileProcessor(String fileName) {
    this.fileName = fileName;
  }

  @Override
  public void run() {
    try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
      String line;
      while ((line = br.readLine()) != null) {
        System.out.println(Thread.currentThread().getName() + " Processing: " + line);
      }
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}

public class FileThreadDemo {
  public static void main(String[] args) {
    Thread t1 = new Thread(new FileProcessor("file1.txt"));
    Thread t2 = new Thread(new FileProcessor("file2.txt"));
    t1.start();
    t2.start();
  }
}`}</code></pre>

      <h2>Thread Class Implementation</h2>
      <p>Create a thread by extending the <code>Thread</code> class.</p>
      <pre><code>{`class MyThread extends Thread {
  public void run() {
    System.out.println("Thread running: " + Thread.currentThread().getName());
  }
}

public class Main {
  public static void main(String[] args) {
    MyThread t1 = new MyThread();
    t1.start();
  }
}`}</code></pre>

      <h2>Runnable Interface Implementation</h2>
      <p>Recommended way as it allows extending another class.</p>
      <pre><code>{`class MyRunnable implements Runnable {
  public void run() {
    System.out.println("Runnable running: " + Thread.currentThread().getName());
  }
}

public class Main {
  public static void main(String[] args) {
    Thread t1 = new Thread(new MyRunnable());
    t1.start();
  }
}`}</code></pre>

      <h2>💬 Interview Questions</h2>
      <ul>
        <li>What is the difference between extending Thread and implementing Runnable?</li>
        <li>What is ExecutorService and how does it differ from traditional threading?</li>
        <li>How can you manage large file processing using threads?</li>
        <li>What happens if you don’t call shutdown() on ExecutorService?</li>
      </ul>
    </div>
      <Footer />
    </section>
  );
};

export default AdvancedMultithreading;
