import React from 'react';
import { Helmet } from 'react-helmet';
import '../CoreModule/ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const JSP = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "JSP (JavaServer Pages) Module",
    "description": "Learn JSP lifecycle, scripting, MVC architecture, JSTL, and EL with real-time examples and interview questions.",
    "provider": {
      "@type": "Organization",
      "name": "Narpavi Technologies",
      "sameAs": "https://narpavitech.in"
    }
  };

  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>JSP (JavaServer Pages) Training Module | Narpavi Technologies</title>
        <meta
          name="description"
          content="Master JSP in just 5 hours! Learn JSP lifecycle, scripting, directives, MVC architecture, EL, JSTL, and practical CRUD operations with Narpavi Technologies."
        />
        <meta name="keywords" content="JSP training, JavaServer Pages, Narpavi Technologies, MVC, JSTL, EL, CRUD in JSP, JSP Interview Questions" />
        <meta name="author" content="Narpavi Technologies" />
        <link rel="canonical" href="https://narpavitech.in/java-training/jsp-module" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <h1>Module 2: JSP (JavaServer Pages)</h1>
      <p><strong>Duration:</strong> 5 hrs</p>

      <h2>JSP Lifecycle and API</h2>
      <p>
        The JSP lifecycle includes translation, compilation, loading, instantiation, initialization, request processing,
        and destruction. APIs are found in <code>javax.servlet.jsp</code>.
      </p>

      <h2>Scripting Elements</h2>
      <ul>
        <li><code>&lt;% ... %&gt;</code> - Scriptlet: Java code</li>
        <li><code>&lt;%= ... %&gt;</code> - Expression: Output result</li>
        <li><code>&lt;%! ... %&gt;</code> - Declaration: Declare variables/methods</li>
      </ul>

      <h2>Implicit Objects</h2>
      <ul>
        <li><code>out</code>: Output stream</li>
        <li><code>request</code>, <code>response</code>: For request/response handling</li>
        <li><code>session</code>, <code>application</code>, <code>pageContext</code>, etc.</li>
      </ul>

      <h2>Directive Elements</h2>
      <ul>
        <li><code>&lt;%@ page ... %&gt;</code></li>
        <li><code>&lt;%@ include ... %&gt;</code></li>
        <li><code>&lt;%@ taglib ... %&gt;</code></li>
      </ul>

      <h2>JSP Exception Handling</h2>
      <p>Use <code>errorPage</code> and <code>isErrorPage</code> directives to handle exceptions.</p>

      <h2>JSP Action Elements</h2>
      <ul>
        <li><code>&lt;jsp:useBean /&gt;</code></li>
        <li><code>&lt;jsp:setProperty /&gt;</code></li>
        <li><code>&lt;jsp:getProperty /&gt;</code></li>
      </ul>

      <h2>Expression Language (EL)</h2>
      <p>Simplifies access to data. Example: <code>{`$\{user.name\}`}</code></p>

      <h2>MVC Architecture in JSP</h2>
      <p>
        <strong>Model:</strong> Java Beans or DB Logic<br />
        <strong>View:</strong> JSP Page<br />
        <strong>Controller:</strong> Servlet (handling requests and passing data)
      </p>

      <h2>JSTL and Custom Tags</h2>
      <p>JSTL provides tags for iteration, conditionals, and formatting.</p>
      <pre><code>{`<c:forEach var="item" items="\${list}">...</c:forEach>`}</code></pre>

      <h2>CRUD operations with MVC</h2>
      <p>JSP is used as the View, Servlet as Controller, and a DAO class handles database operations.</p>
      <pre><code>{`<form action="UserServlet" method="post">...</form>`}</code></pre>

      <h2>Programs/Interview Questions</h2>
      <ul>
        <li>Difference between include directive and include action?</li>
        <li>How to handle form data in JSP?</li>
        <li>Can we use Java code in JSP? How?</li>
      </ul>
    </div>
      <Footer />
    </>
  );
};

export default JSP;
