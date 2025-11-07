import React from 'react';
import { Helmet } from 'react-helmet';
import '../CoreModule/ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const Maven = () => {
  const pageTitle = "Java Maven Module | Build Automation & Dependency Management";
  const pageDescription = "Master Maven in Java: Learn build automation, POM file, dependencies, Maven lifecycle, Eclipse integration, and more. Part of Java Full Stack Course.";
  const pageKeywords = "Maven, Java Maven, Maven tutorial, Maven vs Ant, pom.xml, Maven lifecycle, Java build tools, Maven webapp, Java course Chennai";
  const pageUrl = "https://www.yoursite.com/java-course/module-9-maven"; // change to actual URL

  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="author" content="Narpavi Technologies" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content="https://www.yoursite.com/og/java-maven.jpg" /> {/* Optional */}
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Java Maven Module",
            "description": pageDescription,
            "provider": {
              "@type": "Organization",
              "name": "Narpavi Technologies",
              "url": "https://www.yoursite.com"
            },
            "educationalCredentialAwarded": "Java Full Stack Certification",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "Online/Offline",
              "startDate": "2025-07-21",
              "endDate": "2025-09-15",
              "location": {
                "@type": "Place",
                "name": "Narpavi Technologies, Chennai",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Chennai",
                  "addressRegion": "Tamil Nadu",
                  "addressCountry": "India"
                }
              }
            }
          })}
        </script>
      </Helmet>

      <h1>Module 9: Maven</h1>
      <p><strong>Duration:</strong> 1 hr</p>

      <h2>📦 Maven: What and Why?</h2>
      <p>
        <strong>Maven</strong> is a build automation and project management tool for Java. It uses a declarative approach with the <code>pom.xml</code> file to manage dependencies, build lifecycle, and plugins.
      </p>

      <h2>🔁 Ant vs Maven</h2>
      <ul>
        <li><strong>Ant:</strong> Task-based, procedural scripting</li>
        <li><strong>Maven:</strong> Lifecycle and convention-based, declarative via <code>pom.xml</code></li>
      </ul>

      <h2>⚙️ How to install Maven?</h2>
      <ol>
        <li>Download from <a href="https://maven.apache.org/download.cgi" target="_blank" rel="noopener noreferrer">maven.apache.org</a></li>
        <li>Extract and set environment variables:
          <pre><code>set M2_HOME=C:\apache-maven-x.x.x  
set PATH=%PATH%;%M2_HOME%\bin</code></pre>
        </li>
        <li>Check installation: <code>mvn -version</code></li>
      </ol>

      <h2>🗃️ Maven Repository</h2>
      <p>
        Maven uses a <strong>local repository</strong> and <strong>remote repositories</strong> (like Maven Central) to download and manage project dependencies.
      </p>
      <pre><code>{`<dependency>
  <groupId>junit</groupId>
  <artifactId>junit</artifactId>
  <version>4.13.2</version>
  <scope>test</scope>
</dependency>`}</code></pre>

      <h2>📝 Understanding pom.xml</h2>
      <p>The <code>pom.xml</code> (Project Object Model) file contains configuration for the project, dependencies, build plugins, and more.</p>
      <pre><code>{`<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>my-app</artifactId>
  <version>1.0.0</version>
</project>`}</code></pre>

      <h2>🛠️ Maven Example</h2>
      <p>Create a basic Maven project:</p>
      <pre><code>mvn archetype:generate -DgroupId=com.demo -DartifactId=demo-app -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false</code></pre>
      <p>This generates a standard directory structure and <code>pom.xml</code>.</p>

      <h2>🌐 Maven Web App Example</h2>
      <p>Use Maven archetype for web app:</p>
      <pre><code>mvn archetype:generate -DarchetypeArtifactId=maven-archetype-webapp</code></pre>
      <p>Then add servlet API in <code>pom.xml</code>:</p>
      <pre><code>{`<dependency>
  <groupId>javax.servlet</groupId>
  <artifactId>javax.servlet-api</artifactId>
  <version>4.0.1</version>
  <scope>provided</scope>
</dependency>`}</code></pre>

      <h2>🧩 Maven using Eclipse</h2>
      <ol>
        <li>Install Eclipse IDE for Java EE</li>
        <li>File → New → Project → Maven → Maven Project</li>
        <li>Select archetype and configure the project</li>
        <li>Eclipse auto-generates <code>pom.xml</code> and folders</li>
      </ol>

      <h2>💡 Interview Tip</h2>
      <p>
        Understand Maven's <strong>build lifecycle</strong> (validate → compile → test → package → install → deploy) and common commands like <code>mvn clean install</code>, <code>mvn package</code>, and <code>mvn dependency:tree</code>.
      </p>
    </div>
      <Footer />
    </> 
  );
};

export default Maven;
