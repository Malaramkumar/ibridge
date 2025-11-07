import React from 'react';
import { Helmet } from 'react-helmet';
import '../CoreModule/ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const Servlet = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Servlet Module – Java Full Stack Training | Narpavi Technologies</title>
        <meta name="description" content="Learn Servlet fundamentals including lifecycle, API, session tracking, and database integration in our Java Full Stack Course at Narpavi Technologies." />
        <meta name="keywords" content="Servlet, Java Servlet, Servlet lifecycle, HttpServlet, GenericServlet, Java Web, Java Training, Java Course Chennai, Servlet with JDBC, Java Full Stack Course" />
        <meta name="author" content="Narpavi Technologies" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Servlet Module – Java Full Stack Training | Narpavi Technologies" />
        <meta property="og:description" content="Master Servlet concepts like request handling, session tracking, and database interaction in Java Full Stack development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://narpavitech.in/java-course/servlet" />
        <meta property="og:site_name" content="Narpavi Technologies" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Servlet Module – Java Full Stack Training" />
        <meta name="twitter:description" content="Master Java Servlet lifecycle, request handling, session management, and JDBC with expert training at Narpavi Technologies." />
      </Helmet>

      <h1>Module 3: Servlet</h1>
      <p><strong>Duration:</strong> 7 hrs</p>

      <h2>Servlet Introduction & Lifecycle</h2>
      <p>Servlet is a Java class used to handle HTTP requests and generate dynamic web content. Its lifecycle methods are:</p>
      <ul>
        <li><code>init()</code>: Called once when the servlet is first loaded.</li>
        <li><code>service()</code>: Handles requests and responses.</li>
        <li><code>destroy()</code>: Called before the servlet is unloaded.</li>
      </ul>

      <h2>GenericServlet and HttpServlet</h2>
      <p>
        <code>GenericServlet</code> is a protocol-independent class, while <code>HttpServlet</code> is designed specifically for HTTP protocol.
      </p>

      <h2>Using Tomcat, Eclipse, NetBeans</h2>
      <ul>
        <li><strong>Tomcat:</strong> Lightweight servlet container to run web apps.</li>
        <li><strong>Eclipse/NetBeans:</strong> IDEs with built-in support for web project creation, deployment, and testing.</li>
      </ul>

      <h2>Servlet API and Web Basics</h2>
      <p>Servlets are part of the <code>javax.servlet</code> and <code>javax.servlet.http</code> packages. Key interfaces: <code>Servlet</code>, <code>ServletRequest</code>, <code>ServletResponse</code>.</p>

      <h2>Servlet Request Methods and Examples</h2>
      <ul>
        <li><code>doGet()</code>: Handles GET requests.</li>
        <li><code>doPost()</code>: Handles POST requests.</li>
      </ul>
      <pre><code>{`protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
  response.getWriter().println("GET request received");
}`}</code></pre>

      <h2>Servlet Collaboration: RequestDispatcher, sendRedirect</h2>
      <ul>
        <li><code>RequestDispatcher</code>: Forwards a request from one servlet to another on the server side.</li>
        <li><code>sendRedirect</code>: Redirects to a new resource on the client side.</li>
      </ul>
      <pre><code>{`RequestDispatcher rd = request.getRequestDispatcher("secondServlet");
rd.forward(request, response);`}</code></pre>
      <pre><code>{`response.sendRedirect("secondServlet");`}</code></pre>

      <h2>ServletConfig and ServletContext</h2>
      <ul>
        <li><strong>ServletConfig:</strong> Used to pass configuration to a single servlet.</li>
        <li><strong>ServletContext:</strong> Shared across all servlets for the application.</li>
      </ul>

      <h2>Session Tracking: Cookies, URL Rewriting, HttpSession</h2>
      <ul>
        <li><strong>Cookies:</strong> Stored on the client-side.</li>
        <li><strong>URL Rewriting:</strong> Appends session info in the URL.</li>
        <li><strong>HttpSession:</strong> Stores session data on the server.</li>
      </ul>

      <h2>Registration Example with DB</h2>
      <p>Example of servlet taking registration form inputs and storing in a database:</p>
      <pre><code>{`protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
  String name = request.getParameter("name");
  String email = request.getParameter("email");
  try {
    Class.forName("com.mysql.jdbc.Driver");
    Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/test", "root", "");
    PreparedStatement ps = con.prepareStatement("INSERT INTO users (name, email) VALUES (?, ?)");
    ps.setString(1, name);
    ps.setString(2, email);
    ps.executeUpdate();
    con.close();
    response.getWriter().println("Registered successfully");
  } catch(Exception e) {
    e.printStackTrace();
  }
}`}</code></pre>
    </div>
      <Footer />
    </>
  );
};

export default Servlet;
