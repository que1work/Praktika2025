import React from 'react';
import FAQ from '../components/FAQ'
import illustration from '../images/Illustration.png'
import ic1 from '../icons/ic1.svg'
import ic2 from '../icons/ic2.svg'
import ic3 from '../icons/ic3.svg'
import manex from '../images/man-explaining.png'
import man2 from '../images/man2.png'
import man3 from '../images/man3.png'
import man4 from '../images/man4.png'
import logosec from '../images/logo_section.png'
import '../App.css';

const Main = () => {
    return (
        <section>
        <div class="header">
        <section className="headsec">
            <div className="text-content">
                <h1>All the features <br />you need</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt.</p>
                    <div className="buttons">
                        <a href="/pricing" className="btn">View Pricing</a>
                    </div>
            </div>
            <div className="image-content">
                <img src={illustration} alt="webdev illustration" />
            </div>  
        </section>
        </div>

        <section className="body">
        <div className="block1">
            <img src={logosec} alt="Logo section" className="logo_sec" />
            <h1>The benefits of working <br /> with our team</h1>
            <div className="blocks">
                <div className="block">
                    <img src={ic1} alt="SVG Icon" className="icon" />
                    <h3>Customize with ease</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="block">
                    <img src={ic2} alt="SVG Icon" />
                    <h3>Perfectly Responsive</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="block">
                    <img src={ic3} alt="SVG Icon" />
                    <h3>Friendly Support</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    
        <div className="block2"> 
            <div className="text-content2">
                <h4>Use Client-first</h4>
                <h1>Top agencies and freelancers around the world use Client-first</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <img src={manex} alt="" />
        </div>
    
        <div className="block2" style={{ backgroundColor: "#EEF4FA" }}>
            <img src={man3} alt="" />
            <div className="text-content2">
                <h4>Free Revision Rounds</h4>
                <h1>Get free Revisions and one week of free maintenance</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
        </div>
    
        <div className="block2">
            <div className="text-content2">
                <h4>24/7 Support</h4>
                <h1>Working with us, you will be getting 24/7 priority support</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <img src={man2} alt="" />
        </div>
    
        <div className="block2" style={{ backgroundColor: "#FCD9801A" }}>
            <img src={man4} alt="" />
            <div className="text-content2">
                <h4>Quick Delivery</h4>
                <h1>Guaranteed 1 week delivery for standard five pager website</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
        </div>

        <FAQ />
    </section>

    </section>
    );
};

export default Main;
