import React from 'react';
import FAQ from '../components/FAQ'
import '../App.css';

const Pricing = () => {
    return (
        <div>
        <h1 style={{ color: "#282938", textAlign: "center", paddingTop: "80px" }}>Our Pricing Plans</h1>
<p style={{ color: "#282938", textAlign: "center" }}>When you’re ready to go beyond prototyping in Figma, Webflow is<br /> ready to help you bring your designs to life — without coding them.</p>

<section className="pricing">
    <div className="land">
        <div className="mintext">
            <h1>$299</h1>
            <h5 style={{ color: "blue" }}>Per Design</h5>
        </div>
        <h3>Landing Page</h3>
        <p>When you’re ready to go beyond prototyping in Figma, </p>
        <div className="points">
            <ul>
                <li>All limited links</li>
                <li>Own analytics platform</li>
                <li>Chat support</li>
                <li>Optimize hashtags</li>
                <li>Unlimited users</li>
            </ul>
        </div>
        <div className="btns">
            <a href="">Get started</a>
        </div>
    </div>
    <div className="web">
        <div className="mintext">
            <h1>$399</h1>
            <h5 style={{ color: "#f4b400" }}>Multi Design</h5>
        </div>
        <h3>Website Page</h3>
        <p>When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.</p>
        <div className="points">
            <ul>
                <li>All limited links</li>
                <li>Own analytics platform</li>
                <li>Chat support</li>
                <li>Optimize hashtags</li>
                <li>Unlimited users</li>
            </ul>
        </div>
        <div className="btns">
            <a href="">Get started</a>
        </div>
    </div>
    <div className="complex">
        <div className="mintext">
            <h1>$499+</h1>
            <h5 style={{ color: "blue" }}>Per Design</h5>
        </div>
        <h3>Complex Project</h3>
        <p>When you’re ready to go beyond prototyping in Figma, </p>
        <div className="points">
            <ul>
                <li>All limited links</li>
                <li>Own analytics platform</li>
                <li>Chat support</li>
                <li>Optimize hashtags</li>
                <li>Unlimited users</li>
                <li>Assist and Help</li>
            </ul>
        </div>
        <div className="btns">
            <a href="contact.html">Contact us</a>
        </div>
    </div>
</section>
        <section class="body">
        <FAQ />
        </section>
    </div>
    );
};

export default Pricing;
