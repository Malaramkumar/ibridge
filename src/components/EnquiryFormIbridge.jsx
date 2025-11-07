import React, { useState } from 'react';
import './EnquiryFormIbridge.scss'; // Your existing CSS file

function EnquiryForm() {
    // State to control the visibility of the modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State to hold the form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
    });

    // State to manage the submission status message
    const [status, setStatus] = useState('');

    // --- Handlers for opening and closing the modal ---
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        // Optional: Reset form fields and status when closing the modal
        setFormData({ name: '', email: '', phone: '', course: '', message: '' });
        setStatus('');
    };

    // Handler for input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...'); 

        try {
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', { // <-- Replace with your Form ID
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('Thanks for your enquiry! We will get back to you soon.');
                setFormData({ name: '', email: '', phone: '', course: '', message: '' }); // Clear the form
            } else {
                setStatus('Oops! There was a problem submitting your form.');
            }
        } catch (error) {
            setStatus('Oops! There was a problem submitting your form.');
        }
    };
    

    return (
        <>
            {/* This is the button that will be visible on your page */}
            <button onClick={openModal} className="open-enquiry-btn">
                Enquire Now
            </button>

            {/* The Modal, which only renders when isModalOpen is true */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    {/* Stop click propagation to prevent closing modal when clicking inside the form */}
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        
                        {/* Your original form container */}
                        <div className="enquiry-form-container">
                             <button onClick={closeModal} className="close-modal-btn">&times;</button>
                            <h2>Enquiry Form</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="input-group">
                                    <label htmlFor="name">Name</label>
                                    <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="phone">Phone No</label>
                                    <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="course">Course</label>
                                    <input id="course" type="text" name="course" value={formData.course} onChange={handleChange} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                                </div>
                                <button type="submit" className="submit-btn">Submit</button>
                                {status && <p className="status-message">{status}</p>}
                            </form>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}

export default EnquiryForm;
 