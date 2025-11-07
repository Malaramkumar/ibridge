import React from 'react';
import { Helmet } from 'react-helmet';
import '../CoreModule/ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const DesignPatterns = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
        <Helmet>
        <title>Java Design Patterns - Core Java Module 7 | Narpavi Technologies</title>
        <meta
          name="description"
          content="Learn Java Design Patterns including Singleton, DAO, DTO, MVC, Factory, and more. Master best practices for interviews and real-world development."
        />
        <meta
          name="keywords"
          content="Java Design Patterns, Singleton, Factory Pattern, MVC, DAO, DTO, Front Controller, Builder, Observer, Decorator, Adapter, Java Interview Questions"
        />
        <meta name="author" content="Narpavi Technologies" />
        <meta property="og:title" content="Java Design Patterns - Core Java Module 7" />
        <meta
          property="og:description"
          content="Master essential Java Design Patterns with practical examples from Narpavi Technologies' Core Java Training."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://narpavitechnologies.com/core-java/design-patterns" />
        <meta property="og:image" content="https://narpavitechnologies.com/assets/java-design-patterns-banner.jpg" />
      </Helmet>

      <h1>Module 7: Design Pattern</h1>
      <p><strong>Duration:</strong> 2 hrs</p>

      <h2>Singleton Pattern</h2>
      <p>
        Ensures only one instance of a class is created and provides a global point of access to it.
      </p>
      <pre><code>{`public class Singleton {
  private static Singleton instance;

  private Singleton() { }

  public static Singleton getInstance() {
    if (instance == null) {
      instance = new Singleton();
    }
    return instance;
  }
}`}</code></pre>

      <h2>DAO (Data Access Object)</h2>
      <p>
        DAO is used to separate the data persistence logic from business logic. It provides CRUD operations for an entity.
      </p>
      <pre><code>{`public interface UserDao {
  void save(User user);
  User findById(int id);
}

public class UserDaoImpl implements UserDao {
  // JDBC or JPA implementation
}`}</code></pre>

      <h2>DTO (Data Transfer Object)</h2>
      <p>
        A DTO is a simple object used to transfer data between layers of an application.
      </p>
      <pre><code>{`public class UserDTO {
  private String name;
  private String email;
  // Getters and Setters
}`}</code></pre>

      <h2>MVC (Model-View-Controller)</h2>
      <p>
        An architectural pattern that separates an application into Model (data), View (UI), and Controller (logic).
      </p>
      <ul>
        <li><strong>Model:</strong> Handles data and business logic</li>
        <li><strong>View:</strong> Displays UI to the user</li>
        <li><strong>Controller:</strong> Handles user input and updates the model</li>
      </ul>

      <h2>Front Controller Pattern</h2>
      <p>
        Provides a single point of entry for handling all requests. Common in web apps using Servlets or Spring MVC.
      </p>
      <pre><code>{`public class FrontController extends HttpServlet {
  protected void doGet(HttpServletRequest request, HttpServletResponse response) {
    String action = request.getParameter("action");
    if ("login".equals(action)) {
      new LoginController().handle(request, response);
    }
  }
}`}</code></pre>

      <h2>Factory Method Pattern</h2>
      <p>
        Defines an interface for creating objects, but lets subclasses decide which class to instantiate.
      </p>
      <pre><code>{`abstract class Animal {
  abstract void speak();
}

class Dog extends Animal {
  void speak() { System.out.println("Woof"); }
}

class AnimalFactory {
  static Animal getAnimal(String type) {
    return "dog".equals(type) ? new Dog() : null;
  }
}`}</code></pre>

      <h2>Abstract Factory Pattern</h2>
      <p>
        Produces families of related or dependent objects without specifying their concrete classes.
      </p>
      <pre><code>{`interface GUIFactory {
  Button createButton();
  Checkbox createCheckbox();
}

class WinFactory implements GUIFactory {
  public Button createButton() { return new WinButton(); }
  public Checkbox createCheckbox() { return new WinCheckbox(); }
}`}</code></pre>

      <h2>Other Common Design Patterns</h2>
      <ul>
        <li><strong>Builder Pattern:</strong> Simplifies object creation with complex constructors</li>
        <li><strong>Observer Pattern:</strong> One-to-many dependency between objects</li>
        <li><strong>Decorator Pattern:</strong> Adds behavior to objects at runtime</li>
        <li><strong>Adapter Pattern:</strong> Converts interface of one class to another</li>
      </ul>

      <h2>💬 Interview Tip</h2>
      <p>
        Understand the real-world use cases for each design pattern. Be ready to implement Singleton, Factory, and MVC in Java during interviews.
      </p>
    </div>
      <Footer />
    </>
  );
};

export default DesignPatterns;
