import React from 'react';
import { Helmet } from 'react-helmet';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const CommandLineArguments = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Java Command-Line Arguments | Explained with Examples",
    "author": {
      "@type": "Organization",
      "name": "Narpavi Technologies"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Narpavi Technologies"
    },
    "datePublished": "2025-07-17",
    "description": "Master Java command-line arguments with real-time examples. Learn how to pass, parse, and use CLI inputs effectively in your Java programs.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.narpavitech.com/java/command-line-arguments"
    }
  };

  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>Java Command-Line Arguments - Explained with Examples</title>
        <meta name="description" content="Master Java command-line arguments with real-time examples. Learn how to pass, parse, and use CLI inputs effectively in your Java programs." />
        <meta name="keywords" content="Java command line arguments, Java args[], Java CLI, Java parsing CLI, Java interview questions, Java training Chennai" />
        <meta name="author" content="Narpavi Technologies" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Java Command-Line Arguments - Explained with Examples" />
        <meta property="og:description" content="Master Java command-line arguments with hands-on examples and real-time practice programs." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.narpavitech.com/java/command-line-arguments" />
        <meta property="og:site_name" content="Narpavi Technologies" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Java Command-Line Arguments - Explained with Examples" />
        <meta name="twitter:description" content="Learn how to pass arguments to Java programs via command-line and parse them safely." />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <h1>Module 7: Command-Line Arguments</h1>
      <p><strong>Duration:</strong> 1 hr</p>

      <h2>📌 What is a Command-Line Argument?</h2>
      <p>
        Command-line arguments are values passed to the Java program when it's executed. These values are stored in the <code>String[] args</code> parameter of the <code>main()</code> method.
      </p>

      <h2>🛠 Java Application with Command-Line Arguments</h2>
      <pre><code>{`public class CmdExample {
  public static void main(String[] args) {
    System.out.println("Number of arguments: " + args.length);
    for (String arg : args) {
      System.out.println(arg);
    }
  }
}`}</code></pre>
      <p><strong>Run:</strong> <code>java CmdExample Hello World Java</code></p>

      <h2>🔄 Conversion of Command-Line Arguments</h2>
      <p>Command-line arguments are strings by default. You can convert them to integers or other data types using parsing methods.</p>
      <pre><code>{`public class SumArgs {
  public static void main(String[] args) {
    int a = Integer.parseInt(args[0]);
    int b = Integer.parseInt(args[1]);
    System.out.println("Sum: " + (a + b));
  }
}`}</code></pre>
      <p><strong>Run:</strong> <code>java SumArgs 10 20</code></p>

      <h2>🚀 How to Pass Command-Line Arguments</h2>
      <ul>
        <li>Compile: <code>javac ClassName.java</code></li>
        <li>Run: <code>java ClassName arg1 arg2 arg3</code></li>
      </ul>
      <p>Arguments are separated by spaces. Enclose multi-word arguments in quotes.</p>

      <h2>🧠 Common Mistake: No Arguments Passed</h2>
      <pre><code>{`public class SafeArgs {
  public static void main(String[] args) {
    if (args.length == 0) {
      System.out.println("No arguments passed.");
    } else {
      System.out.println("First argument: " + args[0]);
    }
  }
}`}</code></pre>

      <h2>⚙️ Using Static and Non-Static Methods</h2>
      <pre><code>{`public class Greet {
  public static void main(String[] args) {
    if (args.length > 0) {
      greetUser(args[0]);
      Greet g = new Greet();
      g.showLength(args[0]);
    }
  }

  static void greetUser(String name) {
    System.out.println("Welcome, " + name);
  }

  void showLength(String input) {
    System.out.println("Length: " + input.length());
  }
}`}</code></pre>

      <h2>📎 Real-World Use Cases</h2>
      <ul>
        <li>Passing configuration values (e.g., file paths, user names)</li>
        <li>Creating utility tools and test drivers</li>
        <li>Writing automation scripts that accept parameters</li>
      </ul>

      <h2>🧪 Practice Program</h2>
      <p><strong>Problem:</strong> Write a program to display the product of two numbers passed via command line.</p>
      <pre><code>{`public class MultiplyArgs {
  public static void main(String[] args) {
    if (args.length < 2) {
      System.out.println("Please pass 2 arguments.");
      return;
    }
    int num1 = Integer.parseInt(args[0]);
    int num2 = Integer.parseInt(args[1]);
    System.out.println("Product = " + (num1 * num2));
  }
}`}</code></pre>

      <h2>💬 Interview Questions</h2>
      <ul>
        <li>What are command-line arguments in Java?</li>
        <li>How does Java handle spaces in command-line arguments?</li>
        <li>What happens if no arguments are passed?</li>
        <li>Can you pass multiple data types through command-line?</li>
        <li>How to handle <code>ArrayIndexOutOfBoundsException</code> when using args[]?</li>
      </ul>

      <h2>📌 Summary</h2>
      <ul>
        <li>Arguments are passed to <code>main(String[] args)</code>.</li>
        <li>They are always received as <code>String</code> values.</li>
        <li>Can be parsed and used in arithmetic or logic.</li>
        <li>Validate <code>args.length</code> to avoid runtime exceptions.</li>
      </ul>
    </div>
      <Footer />
    </>
  );
};

export default CommandLineArguments;
