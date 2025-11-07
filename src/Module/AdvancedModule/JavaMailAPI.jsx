import React from 'react';
import { Helmet } from 'react-helmet';
import '../CoreModule/ModuleDetail.scss';
import Footer from '../../components/Footer';
import Nar_Header from '../../components/Nar_Header';

const JavaMailAPI = () => {
  return (
    <>
      <Nar_Header />
    <div className="module-detail">
      <Helmet>
        <title>JavaMail API Tutorial | Send & Receive Emails with Java</title>
        <meta
          name="description"
          content="Learn JavaMail API to send and receive emails using SMTP, POP3, and IMAP in Java. Includes examples with Gmail SMTP and HTML email."
        />
        <meta
          name="keywords"
          content="JavaMail API, Java Email Tutorial, Java Send Email, Java SMTP, POP3, IMAP, Gmail SMTP, HTML Email Java, Java Programming"
        />
        <meta name="author" content="Narpavi Technologies" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="JavaMail API - Send & Receive Emails in Java" />
        <meta
          property="og:description"
          content="Master JavaMail API with practical Java examples for sending and receiving emails. Includes Gmail SMTP setup and HTML content email."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.yoursite.com/java-mail-api" />
        <meta property="og:image" content="https://www.yoursite.com/assets/images/java-mail-api-banner.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JavaMail API - Send & Receive Emails in Java" />
        <meta
          name="twitter:description"
          content="Step-by-step JavaMail API tutorial: sending, receiving, and configuring Gmail SMTP with Java."
        />
        <meta name="twitter:image" content="https://www.yoursite.com/assets/images/java-mail-api-banner.png" />
      </Helmet>

      <h1>Module 6: JavaMail API</h1>
      <p><strong>Duration:</strong> 2 hrs</p>

      <h2>📧 Sending Email</h2>
      <p>
        JavaMail API is used to send and receive emails using the SMTP, POP3, and IMAP protocols.
        To send an email, we use SMTP (Simple Mail Transfer Protocol).
      </p>
      <pre><code>{`import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.*;

public class SendMail {
  public static void main(String[] args) {
    String to = "recipient@example.com";
    String from = "sender@example.com";
    String host = "localhost";

    Properties properties = System.getProperties();
    properties.setProperty("mail.smtp.host", host);

    Session session = Session.getDefaultInstance(properties);

    try {
      MimeMessage message = new MimeMessage(session);
      message.setFrom(new InternetAddress(from));
      message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
      message.setSubject("Hello JavaMail");
      message.setText("This is a test mail using JavaMail API");

      Transport.send(message);
      System.out.println("Mail sent successfully!");
    } catch (MessagingException mex) {
      mex.printStackTrace();
    }
  }
}`}</code></pre>

      <h2>📨 Sending Email through Gmail Server</h2>
      <p>
        Gmail SMTP requires authentication and TLS encryption. You must allow "Less Secure Apps"
        or generate an App Password.
      </p>
      <pre><code>{`Properties props = new Properties();
props.put("mail.smtp.host", "smtp.gmail.com");
props.put("mail.smtp.port", "587");
props.put("mail.smtp.auth", "true");
props.put("mail.smtp.starttls.enable", "true");

Session session = Session.getInstance(props, new javax.mail.Authenticator() {
  protected PasswordAuthentication getPasswordAuthentication() {
    return new PasswordAuthentication("your_email@gmail.com", "your_app_password");
  }
});

try {
  Message message = new MimeMessage(session);
  message.setFrom(new InternetAddress("your_email@gmail.com"));
  message.setRecipients(Message.RecipientType.TO, InternetAddress.parse("receiver@gmail.com"));
  message.setSubject("Gmail SMTP Test");
  message.setText("Hello from Gmail SMTP!");

  Transport.send(message);
  System.out.println("Message sent");
} catch (MessagingException e) {
  e.printStackTrace();
}`}</code></pre>

      <h2>📥 Receiving Email</h2>
      <p>
        JavaMail can be used to receive emails from a POP3 or IMAP server. Below is an example of reading messages using POP3:
      </p>
      <pre><code>{`Properties properties = new Properties();
properties.put("mail.pop3.host", "pop.gmail.com");
properties.put("mail.pop3.port", "995");
properties.put("mail.pop3.starttls.enable", "true");

Session emailSession = Session.getDefaultInstance(properties);

Store store = emailSession.getStore("pop3s");
store.connect("pop.gmail.com", "your_email@gmail.com", "your_app_password");

Folder emailFolder = store.getFolder("INBOX");
emailFolder.open(Folder.READ_ONLY);

Message[] messages = emailFolder.getMessages();
for (Message message : messages) {
  System.out.println("Subject: " + message.getSubject());
  System.out.println("From: " + message.getFrom()[0]);
  System.out.println("Text: " + message.getContent());
}

emailFolder.close(false);
store.close();`}</code></pre>

      <h2>🖋 Sending HTML Content</h2>
      <p>
        JavaMail supports HTML content by using <code>setContent()</code> instead of <code>setText()</code>.
      </p>
      <pre><code>{`MimeMessage message = new MimeMessage(session);
message.setFrom(new InternetAddress("your_email@gmail.com"));
message.addRecipient(Message.RecipientType.TO, new InternetAddress("receiver@gmail.com"));
message.setSubject("HTML Mail");
message.setContent("<h1>This is HTML email</h1>", "text/html");

Transport.send(message);`}</code></pre>

      <h2>💡 Interview Tip</h2>
      <ul>
        <li>Understand SMTP, POP3, IMAP protocols</li>
        <li>Know the use of Session, MimeMessage, Transport</li>
        <li>Be ready to explain how to authenticate and configure Gmail SMTP</li>
      </ul>
    </div>
      <Footer />
    </>
  );
};

export default JavaMailAPI;
