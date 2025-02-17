import React, { useState } from "react";
import "../App.css";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        { id: 1, question: "How much time does it take?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
        { id: 2, question: "What is your class naming convention?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
        { id: 3, question: "How do we communicate?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
        { id: 4, question: "I have a bigger project. Can you handle it?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
        { id: 5, question: "What is your class naming convention?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
    ];

    return (
        <div className="questions">
            <div className="faq">
                <h1>Frequently<br /> asked question</h1>
                <a href="/contact">Contact us for more info</a>
            </div>
            <div className="quest">
                {faqData.map((item, index) => (
                    <div key={item.id}>
                        <div
                            className={`faq-item ${openIndex === index ? "open" : ""}`}
                            onClick={() => toggleQuestion(index)}
                        >
                            <div className="question">
                                <span className="numbers">{`0${item.id}`}</span>
                                {item.question}
                                <span className={`toggle ${openIndex === index ? "open" : ""}`}>
                                    +
                                </span>
                            </div>
                            <div className="answer" style={{ maxHeight: openIndex === index ? "200px" : "0" }}>
                                {item.answer}
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
