import React from 'react';
import '../App.css';

const Contact = () => {
    return (
        <div>
        <h1 style={{ color: "#282938", textAlign: "center", paddingTop: "80px" }}>Contact Us</h1>
        <p style={{ color: "#282938", textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore.</p>

    <div className="form">
    <div className="container">
        <div className="row">
            <div className="namesub">
                <p>Name</p>
                <input type="text" placeholder="Enter your name" />
                <p>Subject</p>
                <input type="text" placeholder="Provide context" />
            </div>
            <div className="emailsub">
                <p>Email</p>
                <input type="email" placeholder="Enter your Email" />
                <p>Subject</p>
                <select>
                    <option>Select Subject</option>
                    <option>General Inquiry</option>
                    <option>Support</option>
                    <option>Feedback</option>
                </select>
            </div>
        </div>
        <p>Message</p>
        <textarea placeholder="Write your question here"></textarea>
        <button>Send Message</button>
    </div>
    </div>
    </div>
    );
};

export default Contact;
