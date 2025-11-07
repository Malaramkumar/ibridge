import React from 'react';
import '../CoreModule/ModuleDetail.scss';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const ConcurrentAndCollectionImplementation = () => {
  return (
    <section>
      <Nar_Header />
    <div className="module-detail">
       <Helmet>
        <title>Java Collections & Concurrency | Narpavi Technologies</title>
        <meta name="description" content="Master Java Collection Framework with practical implementations of ArrayList, LinkedList, HashMap, Queue, PriorityQueue, and Deque in our Core Java Training Module." />
        <meta name="keywords" content="Java Collection, ArrayList, LinkedList, HashMap, Queue, PriorityQueue, Deque, Java Interview Questions, Java Training Chennai, Core Java Online Course" />
        <meta name="author" content="Narpavi Technologies" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://narpavitech.in/java-core/concurrent-and-collection" />
      </Helmet>
      <h1>Module 4: Concurrent and Implementation of Collection</h1>
      <p><strong>Duration:</strong> 2 hrs</p>

      <h2>Implementation of ArrayList</h2>
      <p><strong>ArrayList</strong> is a resizable array implementation of the List interface. It allows duplicate elements and maintains insertion order.</p>
      <pre><code>{`import java.util.ArrayList;

public class ArrayListExample {
  public static void main(String[] args) {
    ArrayList<String> names = new ArrayList<>();
    names.add("Alice");
    names.add("Bob");
    names.add("Charlie");

    for (String name : names) {
      System.out.println(name);
    }
  }
}`}</code></pre>

      <h2>Implementation of LinkedList</h2>
      <p><strong>LinkedList</strong> is a doubly linked list implementation of the List and Deque interfaces. It is efficient for insertions and deletions.</p>
      <pre><code>{`import java.util.LinkedList;

public class LinkedListExample {
  public static void main(String[] args) {
    LinkedList<Integer> numbers = new LinkedList<>();
    numbers.add(10);
    numbers.add(20);
    numbers.addFirst(5);

    for (Integer number : numbers) {
      System.out.println(number);
    }
  }
}`}</code></pre>

      <h2>Implementation of HashMap</h2>
      <p><strong>HashMap</strong> stores data in key-value pairs and allows null keys and values. It does not maintain insertion order.</p>
      <pre><code>{`import java.util.HashMap;

public class HashMapExample {
  public static void main(String[] args) {
    HashMap<Integer, String> map = new HashMap<>();
    map.put(1, "Apple");
    map.put(2, "Banana");
    map.put(3, "Cherry");

    for (Integer key : map.keySet()) {
      System.out.println(key + ": " + map.get(key));
    }
  }
}`}</code></pre>

      <h2>Implementation of Queue</h2>
      <p><strong>Queue</strong> is a FIFO data structure. Elements are added at the end and removed from the front.</p>
      <pre><code>{`import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
  public static void main(String[] args) {
    Queue<String> queue = new LinkedList<>();
    queue.add("Task1");
    queue.add("Task2");

    while (!queue.isEmpty()) {
      System.out.println("Processing: " + queue.poll());
    }
  }
}`}</code></pre>

      <h2>Implementation of PriorityQueue</h2>
      <p><strong>PriorityQueue</strong> is a queue that orders elements based on their natural ordering or a custom comparator.</p>
      <pre><code>{`import java.util.PriorityQueue;

public class PriorityQueueExample {
  public static void main(String[] args) {
    PriorityQueue<Integer> pq = new PriorityQueue<>();
    pq.add(30);
    pq.add(10);
    pq.add(20);

    while (!pq.isEmpty()) {
      System.out.println("Processing: " + pq.poll());
    }
  }
}`}</code></pre>

      <h2>Implementation of Deque</h2>
      <p><strong>Deque</strong> (Double-Ended Queue) allows insertion and removal from both ends.</p>
      <pre><code>{`import java.util.ArrayDeque;
import java.util.Deque;

public class DequeExample {
  public static void main(String[] args) {
    Deque<String> deque = new ArrayDeque<>();
    deque.addFirst("Front");
    deque.addLast("Back");

    System.out.println("First: " + deque.removeFirst());
    System.out.println("Last: " + deque.removeLast());
  }
}`}</code></pre>

      <h2>💬 Interview Questions</h2>
      <ul>
        <li>What is the difference between ArrayList and LinkedList?</li>
        <li>How does HashMap handle collisions?</li>
        <li>What is the default ordering behavior of PriorityQueue?</li>
        <li>When would you use a Deque over a Queue?</li>
      </ul>
    </div>
      <Footer />
    </section>
  );
};

export default ConcurrentAndCollectionImplementation;