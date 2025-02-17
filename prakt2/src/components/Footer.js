import React from 'react';
import facebook from '../icons/facebook.svg'
import twitter from '../icons/twitter.svg'
import instagram from '../icons/instagram.svg'
import linkedin from '../icons/linkedin.svg'
import '../App.css';

const Footer = () => {
    return (
        <section className="footer">
            <div className="part1">
                <div>
                    <h3 className="logo">{'{Finsweet'}</h3>
                    <p className="smth">We are always open to discuss your project and <br/> improve your online presence.</p>
                    <div className="email">
                        <p>Email me at<br/><span>contact@website.com</span></p>
                        <p>Call us<br/><span>0927 6277 28525</span></p>
                    </div>
                </div>
                <div className="talk">
                    <h1>Lets Talk!</h1>
                    <p>We are always open to discuss your project,<br/> improve your online presence and help with your<br/> UX/UI design challenges.</p>
                    <div className="socials">
                        <a href="https://www.facebook.com" target="_blank">
                            <img src={facebook} alt="Facebook"/>
                        </a>
                        <a href="https://www.twitter.com" target="_blank">
                            <img src={twitter} alt="Twitter"/>
                        </a>
                        <a href="https://www.instagram.com" target="_blank">
                            <img src={instagram} alt="Instagram"/>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank">
                            <img src={linkedin} alt="LinkedIn"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
