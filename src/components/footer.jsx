import React from 'react';
import Logo from '../assets/Images/logo.png'
import { Link } from 'react-router-dom';
import { ReactComponent as CallIcon } from '../assets/icons/call-icon.svg'
import { ReactComponent as EmailIcon } from '../assets/icons/email-icon.svg'
import { ReactComponent as MapIcon } from '../assets/icons/map.svg'
import CounterTopdivider from '../assets/Images/layered-wave.svg'

const Footer = () => {
    return (
        <footer>
            <div className="divider-top">
                <img src={CounterTopdivider} alt="shape-divider-bottom" width="100%"
                    height="auto" />
            </div>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="d-flex align-items-center justify-content-start">
                            <img src={Logo} className="brand" alt="logo" width="100%" height="100%" />
                        </div>
                        <p className="f-para">Experience Customer-centric Approach Product Development Contract Manufacturing Export Assistance</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="footer-widget">
                            <h5 className="footer-widget-title">Services</h5>
                            <ul>
                                <li className="link"><Link to="/services">Export Assistance </Link></li>
                                <li className="link"><Link to="/services">Product Development</Link></li>
                                <li className="link"><Link to="/services">Contract Manufacturing </Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="footer-widget">
                            <h5 className="footer-widget-title">Quick links</h5>
                            <ul>
                                <li className="link"><Link to="/">Home</Link></li>
                                <li className="link"><Link to="/about">About</Link></li>
                                <li className="link"><Link to="/services">Services</Link></li>
                                <li className="link"><Link href="/ptoducrs">Products</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="footer-widget">
                            <h5 className="footer-widget-title">Contact</h5>
                            <Link className="cursor icon-box call mb-3" to="tel:+8000041402">
                                <span>
                                    <CallIcon />
                                </span>
                                +91 8000041402
                            </Link>
                            <Link className="cursor icon-box" to="mailto:info@cygnox.com">
                                <span>
                                    <EmailIcon />
                                </span>
                                info@avnain.com
                            </Link>

                            <h5 className="footer-widget-title mt-4">Address</h5>
                            <Link className="icon-box" to="https://www.google.com/maps/search/s.one+complex,+b-417,+circle,+near+Gujarat+high+court,+Shayona+City,+Chanakyapuri,+Ahmedabad,+Gujarat+380061/@23.079098,72.531832,13z?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D" target='_blank'>
                                <span>
                                    <MapIcon />
                                </span>
                                s.one complex, b-417, circle, near Gujarat high court, Shayona City, Chanakyapuri, Ahmedabad, Gujarat 380061.
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2025 AVNA. All Rights Reserved. Design & Developed by <Link to="https://inspirefox.com/" target='_blank'>InspireFox</Link></p>
            </div>
        </footer>
    );
};

export default Footer;