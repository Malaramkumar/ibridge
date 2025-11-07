import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const FundamentalsOfJava = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>Fundamentals of Java Programming - Module 3 | Narpavi Technologies</title>
        <meta name="description" content="Learn Java fundamentals including naming conventions, data types, operators, type casting, and more in this detailed Module 3 guide." />
        <meta name="keywords" content="Java fundamentals, Java programming, Java variables, Java type casting, Java operators, Java interview questions" />
        <meta name="author" content="Narpavi Technologies" />
        <meta property="og:title" content="Fundamentals of Java Programming - Module 3" />
        <meta property="og:description" content="Explore Java basics such as variables, blocks, comments, data types, and more with real code examples and interview questions." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/modules/fundamentals-of-java" />
        <meta property="og:image" content="https://yourdomain.com/assets/java-thumbnail.jpg" />
        <link rel="canonical" href="https://yourdomain.com/modules/fundamentals-of-java" />
      </Helmet>

      <h1>Module 3: Fundamentals of Java Programming</h1>
      <p><strong>Duration:</strong> 1 hr</p>

      <h2>Naming Convention of Java Language</h2>
      <p>Java follows standard naming conventions for better readability:</p>
      <ul>
        <li><strong>Classes:</strong> PascalCase (e.g., <code>StudentInfo</code>)</li>
        <li><strong>Methods/Variables:</strong> camelCase (e.g., <code>calculateTotal</code>)</li>
        <li><strong>Constants:</strong> UPPER_SNAKE_CASE (e.g., <code>MAX_VALUE</code>)</li>
      </ul>

      <h2>Comments</h2>
      <p>Used to explain and document the code:</p>
      <pre>
        <code>{`// Single-line comment
/* Multi-line
   comment */
/** JavaDoc comment for documentation tools */`}
        </code>
      </pre>

      <h2>Statements</h2>
      <p>Statements are complete units of execution, terminated with a semicolon:</p>
      <pre>
        <code>{`int age = 25;
System.out.println("Age: " + age);`}</code>
      </pre>

      <h2>Blocks (Static and Instance)</h2>
      <p>Blocks are groups of statements enclosed in braces. Static blocks run once when the class is loaded:</p>
      <pre>
        <code>{`static {
  System.out.println("Static block executed.");
}

{
  System.out.println("Instance block executed.");
}`}</code>
      </pre>

      <h2>Identifiers</h2>
      <p>Identifiers are names for classes, methods, variables, etc. They must begin with a letter, underscore (_) or dollar sign ($) and cannot use Java keywords.</p>

      <h2>Keywords</h2>
      <p>Reserved words in Java like <code>public</code>, <code>static</code>, <code>void</code>, <code>class</code>, etc.</p>

      <h2>Literals</h2>
      <p>Fixed values used directly in the code:</p>
      <pre>
        <code>{`int x = 100; // 100 is a literal
char c = 'A';
String s = "Java";`}</code>
      </pre>

      <h2>Primitive Data Types and Ranges</h2>
      <ul>
        <li><code>byte</code>: -128 to 127</li>
        <li><code>short</code>: -32,768 to 32,767</li>
        <li><code>int</code>: -2<sup>31</sup> to 2<sup>31</sup>-1</li>
        <li><code>long</code>: -2<sup>63</sup> to 2<sup>63</sup>-1</li>
        <li><code>float</code>, <code>double</code>: For decimal numbers</li>
        <li><code>char</code>: Unicode characters</li>
        <li><code>boolean</code>: true or false</li>
      </ul>

      <h2>Reference (User Defined) Data Types</h2>
      <pre>
        <code>{`class Student {
  String name;
}

Student s1 = new Student();`}</code>
      </pre>

      <h2>Variables (Primitive and Reference)</h2>
      <pre>
        <code>{`// Primitive
int age = 22;

// Reference
String name = "John";`}</code>
      </pre>

      <h2>Type Casting and Default Values</h2>
      <p><strong>Implicit (Widening):</strong> Automatically done by Java</p>
      <pre>
        <code>{`int x = 10;
float y = x;`}</code>
      </pre>
      <p><strong>Explicit (Narrowing):</strong> Requires casting</p>
      <pre>
        <code>{`double d = 9.7;
int i = (int) d; // 9`}</code>
      </pre>
      <p><strong>Default Values:</strong></p>
      <ul>
        <li><code>int</code>: 0</li>
        <li><code>boolean</code>: false</li>
        <li><code>Object</code>: null</li>
      </ul>

      <h2>Operators</h2>
      <ul>
        <li><strong>Arithmetic:</strong> +, -, *, /, %</li>
        <li><strong>Relational:</strong> ==, !=, &lt;=</li>
        <li><strong>Logical:</strong> &&, ||, !</li>
        <li><strong>Bitwise:</strong> &, |, ^, ~</li>
        <li><strong>Assignment:</strong> =, +=, -=, *=</li>
      </ul>

      <h2>Interview Question: Sum of Two Numbers</h2>
      <pre>
        <code>{`public class SumExample {
  public static void main(String[] args) {
    int a = 5, b = 10;
    int sum = a + b;
    System.out.println("Sum: " + sum);
  }
}`}</code>
      </pre>

      <h2>Difference Between == and .equals()</h2>
      <ul>
        <li><code>==</code>: Compares memory addresses</li>
        <li><code>.equals()</code>: Compares actual values/content</li>
      </ul>

      <h2>Swap Two Variables Without Temp Variable</h2>
      <pre>
        <code>{`int x = 10, y = 20;
x = x + y;
y = x - y;
x = x - y;`}</code>
      </pre>
    </div>
      <Footer />
    </>
  );
};

export default FundamentalsOfJava;
