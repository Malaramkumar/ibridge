import React from 'react';
import { Helmet } from 'react-helmet';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const CollectionFramework = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>Java Collection Framework | Generics, List, Set, Map</title>
        <meta
          name="description"
          content="Master Java Collection Framework with concepts like Generics, List, Set, Map, HashMap, TreeSet, Vector, Stack, LinkedList, and more. Includes real-time code samples and interview questions."
        />
        <meta
          name="keywords"
          content="Java Collection Framework, Java Generics, Java List, Set, Map, Java Interview Questions, Java Programming, HashMap, TreeSet, Vector, LinkedList, Stack, Java util package"
        />
        <meta name="author" content="Narpavi Technologies" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Java Collection Framework | Generics, List, Set, Map" />
        <meta
          property="og:description"
          content="Deep dive into Java Collection Framework - Learn Lists, Maps, Sets, Generics, with practical examples and interview questions."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.narpavitech.in/java-collection-framework" />
        <meta property="og:image" content="https://www.narpavitech.in/images/java-collections.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content="Java Collection Framework | Generics, List, Set, Map" />
        <meta
          name="twitter:description"
          content="Learn Java Collection Framework in detail with examples. Covers Generics, Lists, Sets, Maps, and usage of java.util classes."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.narpavitech.in/images/java-collections.jpg" />
      </Helmet>
      
      <h1>Module 21: Collection Framework</h1>
      <p><strong>Duration:</strong> 3 hrs</p>

      <h2>Generics (Templates)</h2>
      <p>Generics provide compile-time type safety and eliminate the need for typecasting.</p>
      <pre><code>{`List<String> list = new ArrayList<>();
list.add("Java");
String s = list.get(0);`}</code></pre>

      <h2>Creating User Defined Generic Classes</h2>
      <pre><code>{`class Box<T> {
  private T value;
  public void set(T value) { this.value = value; }
  public T get() { return value; }
}`}</code></pre>

      <h2>The java.util Package</h2>
      <p>This package contains collections framework classes like List, Set, Map, Queue, etc.</p>

      <h2>Collection & Framework</h2>
      <p><strong>Collection:</strong> Root interface of List and Set.
      <br /><strong>Collection Framework:</strong> Unified architecture for representing and manipulating collections.</p>

      <h2>List, Set & Map Interfaces</h2>
      <ul>
        <li><strong>List:</strong> Ordered, allows duplicates (ArrayList, LinkedList)</li>
        <li><strong>Set:</strong> Unordered, no duplicates (HashSet, TreeSet)</li>
        <li><strong>Map:</strong> Key-value pairs (HashMap, TreeMap)</li>
      </ul>

      <h2>Using Vector, ArrayList, Stack, LinkedList</h2>
      <pre><code>{`ArrayList<String> list = new ArrayList<>();
list.add("Apple");

Stack<Integer> stack = new Stack<>();
stack.push(10);

LinkedList<String> ll = new LinkedList<>();
ll.add("Node");`}</code></pre>

      <h2>Using Collections Class for Sorting</h2>
      <pre><code>{`List<Integer> numbers = Arrays.asList(3, 1, 2);
Collections.sort(numbers);`}</code></pre>

      <h2>Hashtable, HashMap, TreeMap, SortedMap, LinkedHashMap</h2>
      <pre><code>{`Map<Integer, String> map = new HashMap<>();
map.put(1, "A");
map.put(2, "B");`}</code></pre>

      <h2>Iterator & Enumerator</h2>
      <pre><code>{`Iterator<String> it = list.iterator();
while(it.hasNext()) {
  System.out.println(it.next());
}`}</code></pre>

      <h2>Queue, Deque, SortedQueue</h2>
      <pre><code>{`Queue<String> queue = new LinkedList<>();
queue.add("Task1");

Deque<Integer> deque = new ArrayDeque<>();
deque.addFirst(1);`}</code></pre>

      <h2>HashSet, TreeSet, LinkedHashSet</h2>
      <pre><code>{`Set<String> set = new HashSet<>();
set.add("Java");`}</code></pre>

      <h2>Using Random Class</h2>
      <pre><code>{`Random rand = new Random();
int number = rand.nextInt(100);`}</code></pre>

      <h2>Using Properties in Java</h2>
      <pre><code>{`Properties props = new Properties();
props.setProperty("user", "admin");`}</code></pre>

      <h2>User Defined Class for DataStructure</h2>
      <pre><code>{`class Student {
  int id;
  String name;
}`}</code></pre>

      <h2>Using Date and Formatting Date Class</h2>
      <pre><code>{`Date date = new Date();
SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
System.out.println(sdf.format(date));`}</code></pre>

      <h2>Interview Questions</h2>
      <ul>
        <li>Difference between ArrayList and LinkedList?</li>
        <li>When do you use HashMap over TreeMap?</li>
        <li>What is the purpose of Generics?</li>
      </ul>
    </div>
      <Footer />
    </>
  );
};

export default CollectionFramework;
