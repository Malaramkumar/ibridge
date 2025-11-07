import React from "react";
import "./Contact.scss";
import { Mail, Phone, MapPin } from "lucide-react";
import Nar_Header from "../components/Nar_Header";

const Contact = () => {
  return (
    <>
      <Nar_Header />
      <section className="getintouch-hero">
        <div className="getintouch-hero-banner">
          <div className="getintouch-hero-text">
            <h2>Placement Training In Chennai</h2>
            <h1>Igniting futures with skills, dreams, and innovation</h1>
            <p>
              Empowering minds toward bold, inclusive transformation —{" "}
              <strong>Narpavi Technologies</strong>
            </p>

            <h3 className="getintouch-highlight-text">🚀 Get Your Dream IT Job</h3>

            <div className="getintouch-rating-box">
              <div className="getintouch-stars">⭐⭐⭐⭐⭐</div>
              <div className="getintouch-rating-text">
                6,895 students rated this course 5 stars!
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="getintouch-main">
        <div className="getintouch-vision">
          <p>
            At Narpavi Technologies, we ignite your future with in-demand
            skills, real-world training, and job-ready expertise.
            <br />
            Empowering every learner to dream bigger and achieve more.
          </p>
          <p>
            Fueling your career journey with skills, certifications, and
            confidence — only at Narpavi Technologies.
            <br />
            Learn. Grow. Transform.
          </p>
          <p>
            Empowering the next generation of tech professionals through
            innovation-driven training and career support.
            <br />
            <strong>Narpavi Technologies – Where skills meet success.</strong>
          </p>
          <p>
            Narpavi Technologies is your partner in transformation — combining
            expert training with bold opportunities.
            <br />
            From classrooms to careers, we shape future-ready minds.
          </p>
          <p>
            <strong>Dream it. Learn it. Achieve it.</strong>
            <br />
            Narpavi Technologies lights the way with world-class training and
            100% placement support.
          </p>
          <p>
            Building bright futures with Core Java and beyond — Narpavi
            Technologies stands for skill, success, and transformation.
          </p>
        </div>

        <div className="getintouch-contact-box">
          <h1>📞 Get in Touch with Us</h1>

          <div className="getintouch-contact-grid">
            <div className="getintouch-contact-item">
              <MapPin className="getintouch-icon" />
              <div>
                <strong>Address:</strong>
                <p>
                  Narpavi Technologies
                  <br />
                  New No.431, Old No.289,
                  <br />
                  Anna Salai, Teynampet,
                  <br />
                  4th Floor, Cabin No.402,
                  <br />
                  Chennai - 600018.
                </p>
              </div>
            </div>

            <div className="getintouch-contact-item">
              <Phone className="getintouch-icon" />
              <div>
                <strong>Phone:</strong>
                <p>
                  044 42618280
                  <br />
                  9677111760
                  <br />
                  9884481388
                </p>
              </div>
            </div>

            <div className="getintouch-contact-item">
              <Mail className="getintouch-icon" />
              <div>
                <strong>Email:</strong>
                <p>narpavitech@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="getintouch-map">
            <iframe
              title="Narpavi Technologies Map"
              src="https://www.google.com/maps?q=Narpavi+Technologies,+Teynampet,+Chennai&output=embed"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
