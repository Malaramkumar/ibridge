import React from 'react';
import './Blog.scss';
import Nar_Header from '../../components/Nar_Header';

const Blog = () => {
  const blogData = [
    {
      title: 'Java Training',
      content: 'Master object-oriented programming, build real-time Java applications, and prepare for enterprise-level roles with hands-on projects.',
      keyword: 'java-training'
    },
    {
      title: 'Python Training',
      content: 'Learn Python from basics to advanced, covering web development, automation, and data analytics using Python.',
      keyword: 'python-training'
    },
    {
      title: 'AWS Training',
      content: 'Gain deep expertise in cloud computing with our AWS certification-focused training modules.',
      keyword: 'aws-training'
    },
    {
      title: 'Full-Stack Developer Training',
      content: 'Become a complete developer with training in frontend, backend, database, and DevOps tools.',
      keyword: 'fullstack-training'
    },
    {
      title: 'Data Science Training',
      content: 'Explore machine learning, Python, R, and real-time data analytics projects in our immersive Data Science course.',
      keyword: 'data-science-training'
    },
    {
      title: 'DevOps Training',
      content: 'Automate development pipelines, CI/CD, containerization, and cloud integrations with expert DevOps practices.',
      keyword: 'devops-training'
    },
    {
      title: '.NET Training',
      content: 'Build scalable web applications using ASP.NET, C#, and .NET Core frameworks with real-time projects.',
      keyword: 'dotnet-training'
    },
    {
      title: 'Android Training',
      content: 'Develop high-performance mobile apps using Java/Kotlin and Android Studio with hands-on training.',
      keyword: 'android-training'
    },
    {
      title: 'Web Development Training',
      content: 'Master HTML, CSS, JavaScript, React, Node.js, and more to become a professional web developer.',
      keyword: 'webdev-training'
    },
    {
      title: 'Cloud Computing',
      content: 'Understand the foundations of cloud infrastructure, deployment models, and service layers.',
      keyword: 'cloud-training'
    },
    {
      title: 'R Language Training',
      content: 'Analyze statistical data using R programming for data visualization, modeling, and reporting.',
      keyword: 'r-language-training'
    },
    {
      title: 'Mobile App Development',
      content: 'Design and build native and cross-platform mobile apps with React Native, Flutter, and more.',
      keyword: 'mobileapp-training'
    },
    {
      title: 'VmWare Training',
      content: 'Get hands-on with virtualization, data center automation, and cloud infrastructure using VmWare tools.',
      keyword: 'vmware-training'
    },
    {
      title: 'Digital Marketing Training',
      content: 'Boost business growth with SEO, PPC, content marketing, social media, and analytics training.',
      keyword: 'digital-marketing-training'
    },
    {
      title: 'UI / UX Training',
      content: 'Learn to design intuitive user experiences using Figma, Adobe XD, wireframes, and usability testing.',
      keyword: 'uiux-training'
    }
  ];

  return (
    <>
      <Nar_Header />  
    <div className="blog-container">
      <h1 className="blog-heading">📝 Training Blogs</h1>
      <div className="blog-grid">
        {blogData.map((blog) => (
          <div key={blog.keyword} className={`blog-card ${blog.keyword}`}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Blog;
