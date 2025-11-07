import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const InputFundamentals = () => {
  return (
      <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>Java Input Fundamentals & Arrays - Narpavi Technologies</title>
        <meta name="description" content="Master Java input techniques using Scanner and BufferedReader, learn arrays, varargs, and solve real-world Java problems. Ideal for interviews and practical coding." />
        <meta name="keywords" content="Java Input, Java Scanner, Java BufferedReader, Java Array, Java Interview Questions, Java Programming Basics, Java Varargs, Java for beginners" />
        <meta name="author" content="Narpavi Technologies" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) for Social Sharing */}
        <meta property="og:title" content="Java Input Fundamentals & Arrays - Narpavi Technologies" />
        <meta property="og:description" content="Learn how to take input from users, use arrays, and solve basic problems in Java. Great for interviews and beginner developers." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.narpavitechnologies.com/java/input-fundamentals" />
        <meta property="og:image" content="https://www.narpavitechnologies.com/assets/java-input-cover.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Java Input Fundamentals & Arrays - Narpavi Technologies" />
        <meta name="twitter:description" content="Explore Java Scanner, BufferedReader, Arrays, and interview questions in this focused module from Narpavi Technologies." />
        <meta name="twitter:image" content="https://www.narpavitechnologies.com/assets/java-input-cover.jpg" />
      </Helmet>

      <h1>Module 5: Input Fundamentals and Datatypes in Java</h1>
      <p><strong>Duration:</strong> 2 hrs</p>

      <h2>Java Program Inputs from Keyboard</h2>
      <p>Java allows users to input data via the console using several input methods.</p>

      <h2>Methods of Keyboard Inputs</h2>
      <ul>
        <li>Using <code>Scanner</code> class</li>
        <li>Using <code>BufferedReader</code></li>
      </ul>

      <h3>Scanner Example:</h3>
      <pre><code>{`import java.util.Scanner;
Scanner sc = new Scanner(System.in);
System.out.print("Enter name: ");
String name = sc.nextLine();
System.out.println("Hello, " + name);`}</code></pre>

      <h3>BufferedReader Example:</h3>
      <pre><code>{`import java.io.*;
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
System.out.print("Enter age: ");
int age = Integer.parseInt(br.readLine());`}</code></pre>

      <h2>Problem Solving with Input</h2>
      <p>Taking input is the first step in solving real-world problems with Java programs.</p>

      <h2>Java Array</h2>

      <h3>What is an Array?</h3>
      <p>An array is a container that holds values of the same data type at contiguous memory locations.</p>

      <h3>Array Declaration</h3>
      <pre><code>{`int[] nums = new int[5]; // Java
int nums[5]; // C/C++ style, not used in Java`}</code></pre>

      <h3>Instantiation of an Array</h3>
      <pre><code>{`int[] scores = new int[3];
scores[0] = 90;
scores[1] = 85;
scores[2] = 95;`}</code></pre>

      <h3>String vs Character Array</h3>
      <pre><code>{`String str = "Hello";
char[] ch = {'H','e','l','l','o'};`}</code></pre>

      <h3>Accessing Array Elements</h3>
      <pre><code>{`System.out.println(scores[1]); // 85`}</code></pre>

      <h3>Default Values in Array</h3>
      <p>Default value for <code>int</code> array elements is 0, <code>boolean</code> is false, and <code>Object</code> is null.</p>

      <h3>for-each Loop</h3>
      <pre><code>{`for (int num : scores) {
  System.out.println(num);
}`}</code></pre>

      <h3>Varargs (Variable-Length Arguments)</h3>
      <pre><code>{`public void printNames(String... names) {
  for (String name : names) {
    System.out.println(name);
  }
}`}</code></pre>

      <h3>Array Length and Exception</h3>
      <pre><code>{`System.out.println(scores.length); // 3
// scores[3] = 100; // Throws ArrayIndexOutOfBoundsException`}</code></pre>

      <h3>Increasing/Decreasing Size</h3>
      <pre><code>{`int[] newScores = new int[6];
System.arraycopy(scores, 0, newScores, 0, scores.length);`}</code></pre>

      <h3>Multi-Dimensional Arrays</h3>
      <pre><code>{`int[][] matrix = {
  {1, 2},
  {3, 4}
};
System.out.println(matrix[1][1]); // 4`}</code></pre>

      <h2>Program / Interview Questions</h2>
      <h3>Q1: Java program to calculate average of numbers</h3>
      <pre><code>{`int[] nums = {10, 20, 30};
int sum = 0;
for (int n : nums) sum += n;
double avg = (double) sum / nums.length;
System.out.println("Average: " + avg);`}</code></pre>

      <h2>Difference between C/C++ and Java</h2>
      <ul>
        <li>No pointers in Java</li>
        <li>Automatic garbage collection</li>
        <li>Platform independent (JVM)</li>
        <li>Object-Oriented</li>
      </ul>

      <h2>Application Compilation and Run</h2>
      <pre><code>{`javac MyApp.java
java MyApp`}</code></pre>

      <h2>Interview Related Questions</h2>
      <ul>
        <li>What is the default value of an array element?</li>
        <li>Difference between length and length()</li>
        <li>How does Java handle array bounds?</li>
      </ul>
    </div>
      <Footer />
      </>   
  );
};

export default InputFundamentals;
