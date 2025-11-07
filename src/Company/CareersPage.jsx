import React from "react";
import "./CareersPage.scss";
import Nar_Header from "../components/Nar_Header";
import { Briefcase, GraduationCap, PhoneCall, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const careers = [
  {
    title: "Marketing Head",
    ctc: "4.5 LPA - 6 LPA",
    experience: "3 - 5 Years",
    passOut: "2018 / 2019 / 2020",
    degree: "Any Graduate / MBA Preferred",
    description: [
      "Develop marketing strategies and oversee implementation",
      "Lead the marketing team and manage campaigns",
      "Analyze ROI and market trends",
    ],
    contact: {
      number: "+91-9884481399",
      person: "Mr.Kumar",
    },
  },
  {
    title: "Training Head",
    ctc: "3.5 LPA - 5 LPA",
    experience: "2 - 4 Years",
    passOut: "2019 / 2020 / 2021",
    degree: "B.E / B.Tech / M.E / M.Tech",
    description: [
      "Oversee training curriculum and modules",
      "Coordinate with trainers and manage schedules",
      "Ensure high-quality delivery and feedback collection",
    ],
    contact: {
      number: "+91-9884481399",
      person: "Mr.Kumar",
    },
  },
  {
    title: "Software Developer",
    ctc: "2.8 LPA - 4 LPA",
    experience: "1 - 3 Years",
    passOut: "2020 / 2021 / 2022",
    degree: "B.E / B.Tech / B.Sc (CS/IT)",
    description: [
      "Write clean, scalable code for web applications",
      "Collaborate with designers and backend team",
      "Maintain and improve performance of applications",
    ],
    contact: {
      number: "+91-9884481399",
      person: "Mr.Kumar",
    },
  },
];

const CareersPage = () => {
  return (
    <div>
      <Nar_Header />
      <div className="careers-page">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          🚀 We're Hiring!
        </motion.h1>

        {careers.map((job, index) => (
          <motion.div
            key={index}
            className="job-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <h2>{job.title}</h2>
            <div className="ctc-badge">CTC: {job.ctc}</div>

            <ul className="details">
              <li>
                <Briefcase size={16} /> Experience: {job.experience}
              </li>
              <li>
                <CalendarDays size={16} /> Pass Out: {job.passOut}
              </li>
              <li>
                <GraduationCap size={16} /> Degree: {job.degree}
              </li>
            </ul>

            <h4>Job Description</h4>
            <ul className="description">
              {job.description.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>

            <a href={`tel:${job.contact.number}`} className="call-button">
              <PhoneCall size={16} /> Call: {job.contact.number} [{job.contact.person}]
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CareersPage;
