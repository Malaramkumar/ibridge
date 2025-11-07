import React from 'react';
import './PlacedStudents.scss';
import Nar_Header from '../../components/Nar_Header';

const placedStudentsData = [
  { name: "Akhil R", company: "TCS", role: "Java Developer" },
  { name: "Sneha M", company: "Infosys", role: "Full-Stack Engineer" },
  { name: "Ravi Kumar", company: "Accenture", role: "Data Analyst" },
  { name: "Priya S", company: "Capgemini", role: "Python Developer" },
  { name: "Vignesh K", company: "HCL", role: "DevOps Engineer" },
  { name: "Meena V", company: "Cognizant", role: "Cloud Engineer" },
  { name: "Hari Prasad", company: "Wipro", role: "Frontend Developer" },
  { name: "Swetha L", company: "Zoho", role: "Software Engineer" },
  { name: "Arjun P", company: "IBM", role: "System Analyst" },
  { name: "Deepa K", company: "Amazon", role: "Cloud Support Associate" },
  { name: "Manoj T", company: "Mindtree", role: "Mobile App Developer" },
  { name: "Lavanya S", company: "Tech Mahindra", role: "Digital Marketing Analyst" },
  { name: "Suresh B", company: "Google", role: "UI/UX Designer" },
  { name: "Anitha R", company: "Paypal", role: "Full Stack Developer" },
  { name: "Ramesh M", company: "Dell", role: "Cyber Security Analyst" },
  { name: "Pavithra S", company: "Oracle", role: "Database Engineer" },
  { name: "Jeeva K", company: "Cisco", role: "Network Engineer" },
  { name: "Karthik V", company: "Freshworks", role: "Support Engineer" },
  { name: "Divya R", company: "Zoho", role: "Backend Developer" },
  { name: "Naveen P", company: "Infosys", role: "Software Tester" },
  // Add more if you need!
];

const PlacedStudents = () => {
  return (
    <>
      <Nar_Header />
    <div className="placed-students-container">
      <h1>✅ Placed Students</h1>
      <p>Meet our successfully placed students and the companies they've joined.</p>

      <div className="students-grid">
        {placedStudentsData.map((student, index) => (
          <div key={index} className="student-card">
            <h3>{student.name}</h3>
            <p><strong>Company:</strong> {student.company}</p>
            <p><strong>Role:</strong> {student.role}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PlacedStudents;
