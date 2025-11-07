import React from 'react';
import { Helmet } from 'react-helmet';
import '../CoreModule/ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const JDBC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "JDBC (Java Database Connectivity)",
    "description": "Learn how to connect Java applications with relational databases using JDBC. Covers drivers, statements, transactions, and interview prep.",
    "provider": {
      "@type": "Organization",
      "name": "Narpavi Technologies",
      "url": "https://narpavitech.in"
    },
    "educationalCredentialAwarded": "Certificate of Completion",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "instructor": {
        "@type": "Person",
        "name": "Certified Java Trainer"
      }
    }
  };

  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>JDBC Module - Java Database Connectivity | Narpavi Technologies</title>
        <meta
          name="description"
          content="Master JDBC (Java Database Connectivity) with hands-on examples and real-time project training. Learn how to use Statement, PreparedStatement, CallableStatement, and handle transactions in Java."
        />
        <meta name="keywords" content="JDBC, Java Database Connectivity, JDBC Drivers, Statement, PreparedStatement, CallableStatement, JDBC Interview Questions, Narpavi Technologies" />
        <link rel="canonical" href="https://narpavitech.in/java-course/jdbc-module" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <h1>Module 1: JDBC (Java Database Connectivity)</h1>
      <p><strong>Duration:</strong> 3 hrs</p>

      <h2>Introduction to JDBC</h2>
      <p>
        JDBC is a Java API that connects Java applications with relational databases
        through drivers. It allows execution of SQL queries from within Java code.
      </p>

      <h2>Databases and Drivers</h2>
      <p>
        JDBC requires appropriate database drivers. For example:
        MySQL: <code>com.mysql.cj.jdbc.Driver</code>,
        Oracle: <code>oracle.jdbc.driver.OracleDriver</code>
      </p>

      <h2>Types of Driver</h2>
      <ul>
        <li>Type 1: JDBC-ODBC Bridge</li>
        <li>Type 2: Native API</li>
        <li>Type 3: Network Protocol</li>
        <li>Type 4: Thin Driver (Pure Java)</li>
      </ul>

      <h2>Loading a Driver Class</h2>
      <pre><code>{`Class.forName("com.mysql.cj.jdbc.Driver");`}</code></pre>

      <h2>Establishing Connection</h2>
      <pre><code>{`Connection con = DriverManager.getConnection(
  "jdbc:mysql://localhost:3306/mydb", "root", "password"
);`}</code></pre>

      <h2>Using Different Drivers</h2>
      <p>
        Different databases require different JDBC drivers. Always include the required
        driver JAR in your classpath.
      </p>

      <h2>Executing SQL Queries</h2>
      <h3>Using Statement</h3>
      <pre><code>{`Statement stmt = con.createStatement();
ResultSet rs = stmt.executeQuery("SELECT * FROM users");
while (rs.next()) {
  System.out.println(rs.getString("name"));
}`}</code></pre>

      <h3>Using PreparedStatement</h3>
      <pre><code>{`PreparedStatement pst = con.prepareStatement("SELECT * FROM users WHERE id = ?");
pst.setInt(1, 1);
ResultSet rs = pst.executeQuery();`}</code></pre>

      <h3>Using CallableStatement</h3>
      <pre><code>{`CallableStatement cs = con.prepareCall("{call getUser(?)}");
cs.setInt(1, 1);
ResultSet rs = cs.executeQuery();`}</code></pre>

      <h2>Transaction Management</h2>
      <pre><code>{`con.setAutoCommit(false);
// execute operations
con.commit(); // or con.rollback();`}</code></pre>

      <h2>Batch Update</h2>
      <pre><code>{`PreparedStatement ps = con.prepareStatement("INSERT INTO employee VALUES (?, ?)");
ps.setInt(1, 1);
ps.setString(2, "John");
ps.addBatch();

ps.setInt(1, 2);
ps.setString(2, "Jane");
ps.addBatch();

ps.executeBatch();`}</code></pre>

      <h2>Interview Questions</h2>
      <ul>
        <li>What are the different types of JDBC drivers?</li>
        <li>Explain the difference between Statement and PreparedStatement.</li>
        <li>How is transaction handled in JDBC?</li>
        <li>What is the role of CallableStatement?</li>
      </ul>
    </div>
      <Footer />
    </>
  );
};

export default JDBC;
