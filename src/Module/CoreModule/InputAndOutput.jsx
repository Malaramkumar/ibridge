import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const InputOutputStreams = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>Java I/O Streams | InputOutputStreams Module</title>
        <meta name="description" content="Learn about Java Input and Output Streams including Byte Streams, Character Streams, File Handling, BufferedReader, Data Streams, and more." />
        <meta name="keywords" content="Java I/O, Java Streams, Byte Streams, Character Streams, File Handling, BufferedReader, Data Streams, Java File Example, RandomAccessFile" />
        <meta name="author" content="Narpavi Technologies" />
        <meta property="og:title" content="Java I/O Streams Module" />
        <meta property="og:description" content="Master Java's Input and Output Streams in this detailed module with examples and interview questions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.narpavi.com/java/io-streams" />
        <meta property="og:image" content="https://www.narpavi.com/images/java-io-banner.png" />
      </Helmet>
      
      <h1>Module 19: Input and Output Streams</h1>
      <p><strong>Duration:</strong> 3 hrs</p>

      <h2>Java I/O Stream</h2>
      <p>Java I/O is used to process the input and produce output. Java uses the concept of stream to make I/O operation fast.</p>

      <h2>Types of Streams</h2>
      <ul>
        <li><strong>Byte Streams:</strong> Handle 8-bit bytes</li>
        <li><strong>Character Streams:</strong> Handle 16-bit Unicode</li>
      </ul>

      <h2>Stream Class Hierarchy</h2>
      <p>All stream classes are under the <code>java.io</code> package, including <code>InputStream</code>, <code>OutputStream</code>, <code>Reader</code>, and <code>Writer</code>.</p>

      <h2>Using File Class</h2>
      <pre><code>{`File file = new File("example.txt");
System.out.println(file.exists());`}</code></pre>

      <h2>Copy and Paste the Content of a File</h2>
      <pre><code>{`FileInputStream in = new FileInputStream("input.txt");
FileOutputStream out = new FileOutputStream("output.txt");
int c;
while ((c = in.read()) != -1) {
  out.write(c);
}
in.close();
out.close();`}</code></pre>

      <h2>Byte Streams vs Character Streams</h2>
      <ul>
        <li>Byte Streams: <code>InputStream</code>, <code>OutputStream</code></li>
        <li>Character Streams: <code>Reader</code>, <code>Writer</code></li>
      </ul>

      <h2>Text File vs Binary File</h2>
      <p>Text files store data in human-readable characters, binary files store data in binary form (0s and 1s).</p>

      <h2>Character Reading from Keyboard by InputStreamReader</h2>
      <pre><code>{`InputStreamReader isr = new InputStreamReader(System.in);
BufferedReader br = new BufferedReader(isr);
String input = br.readLine();
System.out.println("You entered: " + input);`}</code></pre>

      <h2>Reading Line/String from Keyboard by BufferedReader</h2>
      <pre><code>{`BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
String name = br.readLine();
System.out.println("Hello " + name);`}</code></pre>

      <h2>Standard I/O Streams</h2>
      <ul>
        <li><code>System.in</code>: Standard input</li>
        <li><code>System.out</code>: Standard output</li>
        <li><code>System.err</code>: Standard error</li>
      </ul>

      <h2>Using Data Streams to Read/Write Primitive Data</h2>
      <pre><code>{`DataOutputStream dos = new DataOutputStream(new FileOutputStream("data.txt"));
dos.writeInt(10);
dos.writeBoolean(true);
dos.close();

DataInputStream dis = new DataInputStream(new FileInputStream("data.txt"));
int x = dis.readInt();
boolean y = dis.readBoolean();
dis.close();`}</code></pre>

      <h2>PrintStream vs PrintWriter</h2>
      <p><strong>PrintStream:</strong> Older class for writing text.
      <br /><strong>PrintWriter:</strong> Preferred for Unicode text output with formatting features.</p>

      <h2>Using StreamTokenizer and RandomAccessFile</h2>
      <pre><code>{`RandomAccessFile file = new RandomAccessFile("data.txt", "rw");
file.writeUTF("Hello");
file.seek(0);
System.out.println(file.readUTF());
file.close();`}</code></pre>

      <h2>💬 Interview Questions</h2>
      <ul>
        <li>What is the difference between byte and character streams?</li>
        <li>How does Java manage file I/O?</li>
        <li>What is RandomAccessFile and when do we use it?</li>
        <li>How do you read input from the keyboard?</li>
      </ul>
    </div>
    <Footer />
    </>
  );
};

export default InputOutputStreams;
