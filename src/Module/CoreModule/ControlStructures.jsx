import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const ControlStructures = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>Java Control Structures | If, Loops, Switch | Narpavi</title>
        <meta name="description" content="Master Java control structures such as if-else, switch-case, for, while, and do-while loops. Includes example programs and interview questions." />
        <meta name="keywords" content="Java control structures, if-else, switch-case, for loop, while loop, do-while loop, Java programs, Java interview questions" />
        <meta name="author" content="Narpavi Technologies" />
        <meta property="og:title" content="Java Control Structures | Narpavi" />
        <meta property="og:description" content="Learn how to use decision-making and repetition control structures in Java with examples and interview questions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://narpavi.com/java/control-structures" />
        <meta property="og:image" content="https://narpavi.com/assets/images/java-control-structures.png" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <h1>Module 4: Control Structures</h1>
      <p><strong>Duration:</strong> 1 hr</p>

      <h2>Working with Control Structures</h2>
      <p>Control structures allow the flow of execution to change in a program based on certain conditions or repetition. Java supports decision-making and looping structures.</p>

      <h2>Types of Control Structures</h2>
      <ul>
        <li><strong>Decision Control Structures</strong> (if, if-else, if-else-if, switch)</li>
        <li><strong>Repetition Control Structures</strong> (for, while, do-while)</li>
      </ul>

      <h2>Decision Control Structure</h2>

      <h3>if Statement</h3>
      <pre>
        <code>{`int num = 10;
if (num > 0) {
  System.out.println("Positive number");
}`}</code>
      </pre>

      <h3>if-else Statement</h3>
      <pre>
        <code>{`int num = -5;
if (num >= 0) {
  System.out.println("Non-negative");
} else {
  System.out.println("Negative number");
}`}</code>
      </pre>

      <h3>if-else-if Ladder</h3>
      <pre>
        <code>{`int marks = 75;
if (marks >= 90) {
  System.out.println("Grade A");
} else if (marks >= 75) {
  System.out.println("Grade B");
} else {
  System.out.println("Grade C");
}`}</code>
      </pre>

      <h3>switch-case</h3>
      <pre>
        <code>{`int day = 3;
switch (day) {
  case 1:
    System.out.println("Sunday");
    break;
  case 2:
    System.out.println("Monday");
    break;
  case 3:
    System.out.println("Tuesday");
    break;
  default:
    System.out.println("Other day");
}`}</code>
      </pre>

      <h2>Repetition Control Structure</h2>

      <h3>for Loop</h3>
      <pre>
        <code>{`for (int i = 1; i <= 5; i++) {
  System.out.println("i = " + i);
}`}</code>
      </pre>

      <h3>while Loop</h3>
      <pre>
        <code>{`int i = 1;
while (i <= 5) {
  System.out.println("i = " + i);
  i++;
}`}</code>
      </pre>

      <h3>do-while Loop</h3>
      <pre>
        <code>{`int i = 1;
do {
  System.out.println("i = " + i);
  i++;
} while (i <= 5);`}</code>
      </pre>

      <h2>Program / Interview Questions</h2>

      <h3>Q1: Write a Java program to check if a number is even or odd.</h3>
      <pre>
        <code>{`int num = 4;
if (num % 2 == 0) {
  System.out.println("Even");
} else {
  System.out.println("Odd");
}`}</code>
      </pre>

      <h3>Q2: Print numbers from 10 to 1 using a for loop.</h3>
      <pre>
        <code>{`for (int i = 10; i >= 1; i--) {
  System.out.println(i);
}`}</code>
      </pre>

      <h3>Q3: What's the difference between while and do-while?</h3>
      <ul>
        <li><strong>while</strong>: Condition is checked before execution. May not run at all.</li>
        <li><strong>do-while</strong>: Executes at least once, then checks the condition.</li>
      </ul>
    </div>
      <Footer />
      </>
  );
};

export default ControlStructures;
