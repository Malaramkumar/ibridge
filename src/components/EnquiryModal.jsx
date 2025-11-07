import React, { useEffect } from 'react';
import './EnquiryModal.scss';

const EnquiryModal = ({ show, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted!');
    onClose();
  };

  // Prevent scrolling in the background when modal is open
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);

  if (!show) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('enquiry-overlay')) {
      onClose();
    }
  };

  return (
    <div className="enquiry-overlay" onClick={handleOverlayClick}>
      <div className="enquiry-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose}>
          &times;
        </button>
        <h3>Course Enquiry</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name*" required />
          <input type="email" placeholder="Email*" required />
          <input type="tel" placeholder="Mobile No*" required />

          <select required>
            <option value="">Select Course</option>
            <option value="Java Training">Java Training</option>
            <option value="Python Training">Python Training</option>
            <option value="AWS Training">AWS Training</option>
            <option value="Full-Stack Developer Training">Full-Stack Developer Training</option>
            <option value="Data Science Training">Data Science Training</option>
            <option value="DevOps Training">DevOps Training</option>
            <option value=".NET Training">.NET Training</option>
            <option value="Android Training">Android Training</option>
            <option value="Web Development Training">Web Development Training</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="R Language Training">R Language Training</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="VmWare Training">VmWare Training</option>
            <option value="Digital Marketing Training">Digital Marketing Training</option>
            <option value="UI / UX Training">UI / UX Training</option>
          </select>

          <select required>
            <option value="">Select Batch</option>
            <option value="Immediately">Immediately</option>
            <option value="Next Week">Next Week</option>
            <option value="In a Month">In a Month</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
