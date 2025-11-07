import React, { useState, useEffect, useRef } from 'react';
import './JavaChatBot.scss';
import { Bot, User, Send, Loader2, MessageCircle } from 'lucide-react'; // Add MessageCircle icon
import axios from 'axios';

// ✅ Load FAQ Data
const faqs = [
  // About Narpavi Technologies
  {
    q: 'What is Narpavi Technologies?',
    a: 'Narpavi Technologies is a premier software training institute established in Chennai, specializing in cutting-edge IT training programs. We offer comprehensive courses in Java, Full Stack Development, Selenium Automation, Python, Data Science, and more. Our institute is known for providing industry-relevant training with 100% placement support and has trained over 5000+ students successfully.',
    tags: ['narpavi', 'institute', 'about', 'company', 'chennai', 'software training', 'IT training'],
    category: 'About Institute'
  },
  {
    q: 'Where is Narpavi Technologies located?',
    a: 'Narpavi Technologies is strategically located in Chennai, Tamil Nadu. Our main campus is situated in a prime location with excellent connectivity to all parts of Chennai. We have state-of-the-art infrastructure with modern classrooms, computer labs, and all necessary facilities for effective learning.',
    tags: ['location', 'address', 'chennai', 'campus', 'where', 'situated'],
    category: 'Location & Infrastructure'
  },
  {
    q: 'What makes Narpavi Technologies different from other institutes?',
    a: 'Narpavi Technologies stands out with: 1) Industry-expert trainers with 10+ years experience, 2) Real-time project-based learning, 3) Small batch sizes for personalized attention, 4) 100% placement assistance, 5) Flexible timing options, 6) Lifetime support, 7) Industry-recognized certifications, 8) Modern infrastructure with latest technology, 9) Regular mock interviews and assessments, 10) Strong industry connections.',
    tags: ['unique', 'different', 'why choose', 'advantages', 'benefits', 'special'],
    category: 'Why Choose Us'
  },
  {
    q: 'How experienced are the trainers at Narpavi?',
    a: 'Our trainers are highly experienced professionals with 10-15+ years of industry experience. They have worked in leading MNCs like TCS, Infosys, Wipro, Cognizant, and HCL. All trainers are certified professionals who bring real-world project experience to the classroom. They regularly update their knowledge with latest industry trends and technologies.',
    tags: ['trainers', 'faculty', 'experience', 'qualified', 'expert', 'professional'],
    category: 'Faculty & Training'
  },
  
  // Java Course Details
  {
    q: 'What is covered in the Java training course?',
    a: 'Our comprehensive Java course covers: Core Java (OOPs, Collections, Exception Handling, Multithreading), Advanced Java (JDBC, Servlets, JSP), Spring Framework, Spring Boot, Hibernate, REST APIs, Microservices, Maven, Git, JUnit Testing, Design Patterns, and real-world project development. The course is designed to make you industry-ready Java developer.',
    tags: ['java', 'syllabus', 'topics', 'curriculum', 'course content', 'what learn'],
    category: 'Java Course'
  },
  {
    q: 'Is this Java course suitable for beginners?',
    a: 'Absolutely! Our Java course is designed for both beginners and professionals. We start from basics like Java syntax, variables, and data types, then gradually move to advanced topics. No prior programming experience is required. Our trainers ensure every student understands the concepts thoroughly before moving to the next level.',
    tags: ['beginner', 'fresher', 'no experience', 'starting', 'basic', 'suitable'],
    category: 'Course Level'
  },
  {
    q: 'What projects will I work on during Java training?',
    a: 'Students work on multiple real-time projects including: 1) E-commerce application with Spring Boot, 2) Banking management system using JDBC, 3) Employee management system with Hibernate, 4) RESTful web services project, 5) Microservices architecture project, 6) Library management system, 7) Online examination system. These projects help build a strong portfolio.',
    tags: ['projects', 'real-time', 'practical', 'hands-on', 'portfolio', 'experience'],
    category: 'Projects & Practical'
  },
  {
    q: 'How long is the Java training program?',
    a: 'The complete Java training program is 3-4 months for regular batches and 2 months for fast-track batches. The duration includes Core Java (1 month), Advanced Java (1 month), Framework training (1-2 months), and project work. We also offer weekend batches that extend to 4-5 months with the same comprehensive curriculum.',
    tags: ['duration', 'how long', 'months', 'time', 'course length', 'period'],
    category: 'Course Duration'
  },
  {
    q: 'What are the Java course fees?',
    a: 'Our Java course fees are very competitive and affordable. We offer different packages: Regular batch (3-4 months), Fast-track batch (2 months), and Weekend batch (4-5 months). EMI options are available. The fee includes all study materials, project guidance, placement support, and certification. Contact us at +91-9884481399 for detailed fee structure and current offers.',
    tags: ['fees', 'cost', 'price', 'charges', 'payment', 'emi', 'affordable'],
    category: 'Fees & Payment'
  },
  {
    q: 'Do you provide Java certification?',
    a: 'Yes, we provide industry-recognized Java certification upon successful completion of the course. The certification includes your performance in assessments, project work, and overall progress. This certification is valued by employers and helps in job interviews. We also prepare students for Oracle Java certification exams.',
    tags: ['certification', 'certificate', 'credential', 'oracle', 'recognized', 'industry'],
    category: 'Certification'
  },
  
  // Placement Support
  {
    q: 'What is the placement support provided?',
    a: 'Narpavi provides comprehensive placement support including: 1) Resume building and optimization, 2) Mock interviews and HR rounds, 3) Soft skills training, 4) Technical interview preparation, 5) Direct connections with 200+ hiring companies, 6) Job referrals and recommendations, 7) Salary negotiation guidance, 8) Continuous support until placement, 9) Alumni network access, 10) Career counseling sessions.',
    tags: ['placement', 'job', 'support', 'assistance', 'career', 'hiring', 'companies'],
    category: 'Placement Support'
  },
  {
    q: 'What is the placement record of Narpavi?',
    a: 'Narpavi has an outstanding placement record with 95%+ placement success rate. Our students have been placed in top companies like TCS, Infosys, Wipro, Cognizant, HCL, Capgemini, Accenture, IBM, Tech Mahindra, and many more. Starting packages range from 3-8 LPA for freshers and up to 15 LPA for experienced professionals.',
    tags: ['placement record', 'success rate', 'companies', 'salary', 'package', 'statistics'],
    category: 'Placement Statistics'
  },
  {
    q: 'Which companies hire from Narpavi?',
    a: 'Our hiring partners include: TCS, Infosys, Wipro, Cognizant, HCL, Capgemini, Accenture, IBM, Tech Mahindra, Mindtree, L&T Infotech, Mphasis, Hexaware, Cyient, Ramco Systems, and 200+ other companies. We have strong relationships with both service-based and product-based companies across various domains.',
    tags: ['companies', 'hiring partners', 'recruiters', 'employers', 'MNCs', 'jobs'],
    category: 'Hiring Companies'
  },
  
  // Batch Details
  {
    q: 'What are the batch timings available?',
    a: 'We offer flexible batch timings to suit everyone: Morning batches (9:00 AM - 12:00 PM), Afternoon batches (1:00 PM - 4:00 PM), Evening batches (6:00 PM - 9:00 PM), Weekend batches (Saturday & Sunday), and Fast-track batches (intensive 6-8 hours daily). Online and offline modes are available for all batches.',
    tags: ['timings', 'batch', 'schedule', 'morning', 'evening', 'weekend', 'flexible'],
    category: 'Batch Timings'
  },
  {
    q: 'What is the batch size?',
    a: 'We maintain small batch sizes of 15-20 students maximum to ensure personalized attention and effective learning. This allows trainers to focus on each student individually, clear doubts immediately, and provide hands-on guidance during practical sessions. Small batches also facilitate better interaction and peer learning.',
    tags: ['batch size', 'students', 'small batch', 'personal attention', 'class strength'],
    category: 'Batch Size'
  },
  {
    q: 'When does the next Java batch start?',
    a: 'We start new Java batches every week! Morning batches start on Mondays, Evening batches on Tuesdays, and Weekend batches on Saturdays. Fast-track batches start on 1st and 15th of every month. Contact us at +91-9884481399 to book your seat in the upcoming batch. Limited seats available!',
    tags: ['next batch', 'starting date', 'when start', 'new batch', 'upcoming'],
    category: 'Batch Schedule'
  },
  
  // Learning Support
  {
    q: 'Do you provide study materials?',
    a: 'Yes, we provide comprehensive study materials including: 1) Detailed course notes and handouts, 2) Video recordings of all sessions, 3) Practice assignments and exercises, 4) Real-time project documentation, 5) Interview preparation materials, 6) E-books and reference materials, 7) Online portal access, 8) Lifetime access to updated content.',
    tags: ['study materials', 'notes', 'books', 'resources', 'videos', 'assignments'],
    category: 'Study Materials'
  },
  {
    q: 'Is online training available?',
    a: 'Yes, we offer both online and offline training modes. Online classes are conducted through interactive platforms with live sessions, screen sharing, doubt clearing, and practical demonstrations. Online students get the same quality training, study materials, placement support, and certification as offline students. Recorded sessions are also provided.',
    tags: ['online', 'virtual', 'remote', 'live classes', 'digital', 'webinar'],
    category: 'Online Training'
  },
  {
    q: 'Can I get demo classes?',
    a: 'Absolutely! We offer FREE demo classes to help you understand our teaching methodology, trainer expertise, and course structure. Demo classes are available for all courses and timings. You can attend 2-3 demo sessions before enrollment. Book your free demo by calling +91-8939915577 or visit our website.',
    tags: ['demo', 'free class', 'trial', 'sample', 'preview', 'test'],
    category: 'Demo Classes'
  },
  
  // Technical Support
  {
    q: 'What software and tools are taught?',
    a: 'We provide training on industry-standard tools: IDEs (Eclipse, IntelliJ IDEA, VS Code), Build tools (Maven, Gradle), Version control (Git, GitHub), Database (MySQL, PostgreSQL), Servers (Tomcat, JBoss), Testing (JUnit, TestNG, Mockito), Cloud platforms (AWS basics), and Development methodologies (Agile, Scrum).',
    tags: ['software', 'tools', 'IDE', 'eclipse', 'git', 'maven', 'database', 'testing'],
    category: 'Tools & Software'
  },
  {
    q: 'Do you provide laptop or computer facility?',
    a: 'Yes, we have well-equipped computer labs with latest configuration systems for all students. Each student gets individual access to computers during practical sessions. However, we also encourage students to bring their own laptops for better learning experience. All necessary software is pre-installed and configured.',
    tags: ['laptop', 'computer', 'lab', 'systems', 'facility', 'infrastructure'],
    category: 'Infrastructure'
  },
  
  // Support Services
  {
    q: 'What support is provided after course completion?',
    a: 'We provide lifetime support including: 1) Continued placement assistance, 2) Technology updates and refresher sessions, 3) Alumni network access, 4) Career guidance and mentoring, 5) Interview preparation support, 6) Resume updates, 7) Job change assistance, 8) Advanced course discounts, 9) Industry event invitations, 10) Continuous learning opportunities.',
    tags: ['after course', 'lifetime support', 'alumni', 'continued', 'ongoing', 'post training'],
    category: 'Post-Training Support'
  },
  {
    q: 'How can I contact Narpavi Technologies?',
    a: 'You can reach us through: Phone: +91-8939915577, Email: info@narpavi.com, Website: www.narpavi.com, Address: Chennai, Tamil Nadu. Our counselors are available Monday to Saturday (9 AM - 8 PM). You can also visit our campus for direct consultation. We respond to all queries within 24 hours.',
    tags: ['contact', 'phone', 'email', 'address', 'reach', 'call', 'visit'],
    category: 'Contact Information'
  },
  
  // Career Guidance
  {
    q: 'What career opportunities are available after Java training?',
    a: 'Java opens numerous career opportunities: Java Developer, Full Stack Developer, Backend Developer, Software Engineer, System Analyst, Application Developer, Web Developer, Enterprise Application Developer, Microservices Developer, DevOps Engineer, Technical Lead, and Architect roles. Java skills are in high demand across all industries.',
    tags: ['career', 'opportunities', 'jobs', 'roles', 'developer', 'engineer', 'future'],
    category: 'Career Opportunities'
  },
  {
    q: 'What salary can I expect after Java training?',
    a: 'Starting salaries for Java developers range from 3-6 LPA for freshers and 6-12 LPA for experienced professionals. With experience and additional skills, salaries can reach 15-25 LPA. Package depends on company, location, skills, and experience. Our placement team helps with salary negotiations and provides market insights.',
    tags: ['salary', 'package', 'pay', 'earnings', 'income', 'compensation', 'LPA'],
    category: 'Salary Expectations'
  },
  
  // Additional Services
  {
    q: 'Do you offer other courses besides Java?',
    a: 'Yes, we offer multiple courses: Full Stack Development (MEAN/MERN), Python Programming, Data Science, Machine Learning, Selenium Automation Testing, DevOps, Cloud Computing (AWS), Angular, React, Node.js, and Database Management. We also provide corporate training and customized curriculum for organizations.',
    tags: ['other courses', 'full stack', 'python', 'data science', 'selenium', 'testing', 'devops'],
    category: 'Other Courses'
  },
  {
    q: 'Is there any entrance test for Java course?',
    a: 'No entrance test is required for our Java course. We welcome students from all backgrounds - engineering, non-engineering, freshers, and working professionals. However, we conduct a brief assessment to understand your current knowledge level and customize the training approach accordingly.',
    tags: ['entrance test', 'exam', 'eligibility', 'requirements', 'assessment', 'qualification'],
    category: 'Eligibility'
  },
  
  // Success Stories
  {
    q: 'Are there any success stories from Narpavi students?',
    a: 'Yes! We have numerous success stories. Our students have been placed in top companies with excellent packages. Many have received multiple job offers and quick promotions. Several alumni have started their own companies and become successful entrepreneurs. We regularly share success stories and testimonials on our website and social media.',
    tags: ['success stories', 'testimonials', 'alumni', 'achievements', 'placements', 'examples'],
    category: 'Success Stories'
  },
  
  // Java Specific Technical Questions
  {
    q: 'What is the difference between Core Java and Advanced Java?',
    a: 'Core Java covers fundamental concepts like OOPs, Collections, Exception Handling, Multithreading, and basic syntax. Advanced Java includes enterprise technologies like Servlets, JSP, JDBC, EJB, and frameworks like Spring and Hibernate. Our course covers both comprehensively with practical implementation.',
    tags: ['core java', 'advanced java', 'difference', 'fundamentals', 'enterprise', 'concepts'],
    category: 'Java Technical'
  },
  {
    q: 'Which Java frameworks are taught at Narpavi?',
    a: 'We teach popular Java frameworks including: Spring Framework (Core, MVC, Boot, Security), Hibernate ORM, Struts, JSF, REST APIs, Microservices architecture, and build tools like Maven and Gradle. All frameworks are taught with hands-on projects and real-world applications.',
    tags: ['frameworks', 'spring', 'hibernate', 'struts', 'rest api', 'microservices', 'maven'],
    category: 'Java Frameworks'
  },
  
  // Interview Preparation
  {
    q: 'How do you prepare students for Java interviews?',
    a: 'Our interview preparation includes: 1) Technical concept revision, 2) Coding practice and problem-solving, 3) Mock interviews with feedback, 4) HR round preparation, 5) Company-specific preparation, 6) Resume building and optimization, 7) Common interview questions practice, 8) Salary negotiation tips, 9) Confidence building sessions, 10) Industry insights and trends.',
    tags: ['interview preparation', 'mock interview', 'coding', 'technical', 'HR', 'resume'],
    category: 'Interview Preparation'
  }
];


const JavaChatBot = () => {
  const [showChat, setShowChat] = useState(false); // Add state for chat visibility
  const [chat, setChat] = useState([{ sender: 'bot', text: 'Hi! I\'m your Java Assistant. Ask me anything like "#fees", "placement", or "Java course".' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [chat]);

  const findFAQAnswer = (message) => {
    const keyword = message.startsWith('#') ? message.substring(1).toLowerCase() : message.toLowerCase();
    const matchByTag = faqs.find(faq => faq.tags.some(tag => tag.toLowerCase() === keyword));
    if (matchByTag) return matchByTag.a;
    const matchByQuestion = faqs.find(faq => faq.q.toLowerCase().includes(keyword));
    if (matchByQuestion) return matchByQuestion.a;
    return null;
  };

  const getGPTAnswer = async (message) => {
    try {
      const res = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant for a Java training institute called Narpavi Technologies.' },
            { role: 'user', content: message },
          ],
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer YOUR_OPENAI_API_KEY`,
            'Content-Type': 'application/json',
          },
        }
      );
      return res.data.choices[0].message.content.trim();
    } catch (err) {
      return 'Oops! Something went wrong while fetching the answer. Please try again later.';
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setChat(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    setTimeout(async () => {
      const faqAnswer = findFAQAnswer(userMessage);
      if (faqAnswer) {
        setChat(prev => [...prev, { sender: 'bot', text: faqAnswer }]);
        setLoading(false);
      } else {
        const gptAnswer = await getGPTAnswer(userMessage);
        setChat(prev => [...prev, { sender: 'bot', text: gptAnswer }]);
        setLoading(false);
      }
    }, 400);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Button */}
      {!showChat && (
        <button
          className="chat-toggle-btn"
          onClick={() => setShowChat(true)}
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Box */}
      {showChat && (
        <div className="java-chatbot-ui">
          <div className="chat-header">
            <Bot size={18} />
            <span>Java Assistant</span>
            <button className="close-btn" onClick={() => setShowChat(false)}>×</button>
          </div>
          <div className="chat-body">
            {chat.map((msg, i) => (
              <div key={i} className={`chat-bubble ${msg.sender}`}>
                {msg.sender === 'bot' ? <Bot size={14} /> : <User size={14} />}
                <p>{msg.text}</p>
              </div>
            ))}
            {loading && (
              <div className="chat-bubble bot typing">
                <Loader2 size={14} className="spin" />
                <p>Typing...</p>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder='Type "#fees", "placement", or ask a Java question...'
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button onClick={handleSend}><Send size={16} /></button>
          </div>
        </div>
      )}
    </>
  );
};

export default JavaChatBot;
