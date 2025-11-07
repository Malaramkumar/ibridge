import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";


const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="narpavi-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Students Zone */}
          <div className="footer-column">
            <h4>Students Zone</h4>
            <ul>
              <li onClick={() => navigate("/blog")}>Blog</li>
              <li onClick={() => navigate("/internship")}>Internship</li>
              <li onClick={() => navigate("/tutorials")}>Tutorials</li>
              {/*<li onClick={() => navigate("/video-reviews")}>Video Reviews</li>*/}
              <li onClick={() => navigate("/online-training-reviews")}>Online Training Reviews</li>
              <li onClick={() => navigate("/reviews")}>Reviews</li>
              <li onClick={() => navigate("/interview-questions")}>Interview Questions</li>
              <li onClick={() => navigate("/online-training")}>Online Training</li>
              <li onClick={() => navigate("/placed-students")}>Placed Students List</li>
              <li className="highlight" onClick={() => navigate("/gst-invoice")}>Collect GST Invoice</li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li onClick={() => navigate("/about")}>About Us</li>
              <li onClick={() => navigate("/services")}>Services</li>
              <li onClick={() => navigate("/contact")}>Contact Us</li>
              <li onClick={() => navigate("/careers")}>Careers</li>
              <li onClick={() => navigate("/corporate-training")}>Corporate Training</li>

              {/*<li onClick={() => navigate("/instructor")}>Become an Instructor</li>
              <li onClick={() => navigate("/terms")}>Terms and Conditions</li>
              <li onClick={() => navigate("/franchise")}>Franchise Opportunities</li>
              <li onClick={() => navigate("/branches")}>Branches</li>
              <li onClick={() => navigate("/hire-talent")}>Hire Talent</li>
              <li onClick={() => navigate("/privacy-policy")}>Privacy Policy</li>
              <li onClick={() => navigate("/refund-policy")}>Refund/Cancellation Policy</li>*/}
            </ul>
          </div>

          {/* Top Courses */}
          <div className="footer-column">
            <h4>Top Online Courses</h4>
            <ul>
              <li onClick={() => navigate("/footerCourse/aws")}>AWS Online Training</li>
              <li onClick={() => navigate("/footerCourse/devops")}>DevOps Certification</li>
              <li onClick={() => navigate("/footerCourse/python")}>Python Online Training</li>
              <li onClick={() => navigate("/footerCourse/selenium")}>Selenium Online Training</li>
              <li onClick={() => navigate("/footerCourse/data-science-python")}>Data Science with Python</li>
              <li onClick={() => navigate("/footerCourse/machine-learning")}>Machine Learning</li>
              <li onClick={() => navigate("/footerCourse/power-bi")}>Power BI Training</li>
              <li onClick={() => navigate("/footerCourse/azure")}>Azure Online Training</li>
              <li onClick={() => navigate("/footerCourse/fullstack")}>Full Stack Developer</li>
              <li onClick={() => navigate("/footerCourse/ai")}>Artificial Intelligence</li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer-column social">
            <h4>Follow Us!</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Branch Area */}
        <div className="footer-branches">
          <p><strong>We are conveniently located</strong> in Chennai.</p>
          <p className="branch-list">
            Adambakkam, Adyar, Alandur, Arumbakkam, Ashok Nagar, Besant Nagar, Chengalpet, Choolaimedu, Chromepet,
            Ekkaduthangal, Guindy, Jafferkhanpet, K.K. Nagar, Kodambakkam, Kottivakkam, Madipakkam, Mandaveli,
            Medavakkam, Nandanam, Nanganallur, Neelankarai, Nugambakkam, Pallavaram, Pallikaranai, Pammal, Perungalathur,
            Perungudi, Poonamallee, Porur, Pozhichalur, Saidapet, Santhome, Selaiyur, Sholinganallur, Singaperumalkoil,
            St. Thomas Mount, T. Nagar, Tambaram, Teynampet, Thiruvanmiyur, Thoraipakkam, Urapakkam, Vadapalani,
            Valasaravakkam, Vandular, Velachery, Virugambakkam, West Mambalam.
          </p>
        </div>

        {/* Footer Note */}
        <div className="footer-note">
          <p>PS: "We promise to lead you to the best training institute that matches your goals."</p>
          <p>© 2025 Narpavi Technologies. All Rights Reserved. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
