// Services.jsx
import React from "react";
import "./Services.scss";
import { Phone } from "lucide-react";
import Nar_Header from '../components/Nar_Header';

const Services = () => {
  return (
    <>
      <Nar_Header />
    <section className="services">
      <div className="container">
        <p className="intro">
          Narpavi Technologies is one of the leading manpower and ERP consulting
          providers in Chennai. We offer a wide range of staffing and enterprise
          solutions to match evolving business needs.
        </p>

        <h2>Staffing</h2>
        <p className="contact">
          HR: <Phone size={16} /> <a href="tel:+919839915577"><strong>+91 98399 15577</strong></a>
        </p>

        <div className="service-block">
          <div className="text">
            <h3>Permanent Staffing</h3>
            <p>
              We maintain a talent pool of developers, administrators, and
              designers ready for full-time employment. Having the right
              long-term team is essential for business growth.
            </p>
          </div>
          <div className="image">
            <img
              src="/images/permanent-staffing.png"
              alt="Permanent Staffing"
            />
          </div>
        </div>

        <div className="divider" />

        <div className="service-block reverse">
          <div className="image">
            <img
              src="/images/contract-staffing.png"
              alt="Contract Staffing"
            />
          </div>
          <div className="text">
            <h3>Contract Staffing</h3>
            <p>
              Contract-to-Hire is a flexible model for businesses expanding
              operations. We ensure zero-risk staffing with on-demand resources.
            </p>
            <h4>Our Major Advantages:</h4>
            <ul>
              <li>Reduced administrative overhead</li>
              <li>Consistent communication and transparency</li>
              <li>Faster helpdesk and service resolutions</li>
              <li>Lower operational errors</li>
            </ul>
          </div>
        </div>

        <div className="divider" />

        <div className="service-block">
          <div className="text">
            <h2>ERP Services</h2>
            <h3>Capabilities:</h3>
            <p>
              We offer ERP man-power, implementation, and support — both
              locally and globally.
            </p>
          </div>
          <div className="image">
            <img src="/images/erp-services.png" alt="ERP Services" />
          </div>
        </div>

        <div className="erp-columns">
          <div>
            <h3>Pre-Implementation</h3>
            <ul>
              <li>Project scoping</li>
              <li>Functional requirement gathering</li>
              <li>System study</li>
            </ul>
          </div>
          <div>
            <h3>Implementation</h3>
            <ul>
              <li>Module setup</li>
              <li>Legacy migration</li>
              <li>Customization & localization</li>
              <li>Reporting & enhancements</li>
            </ul>
          </div>
          <div>
            <h3>Post-Implementation</h3>
            <ul>
              <li>Troubleshooting</li>
              <li>Server management</li>
              <li>Ongoing maintenance</li>
            </ul>
          </div>
        </div>

        <div className="divider" />

        <h3>Why Choose Us?</h3>
        <p>
          We help you unlock the true value of ERP. Whether it’s implementing,
          upgrading, or enhancing — our expertise ensures high ROI in minimal
          time. Our consultants have successfully deployed enterprise solutions
          across India, the Middle East, and the US.
        </p>
      </div>
    </section>
    </>   
  );
};

export default Services;
