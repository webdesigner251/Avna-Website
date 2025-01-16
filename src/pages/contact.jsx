import React from "react";
import { Link } from "react-router-dom";
import SmallBanner from '../components/smallBanner';
import { ReactComponent as CallIcon } from '../assets/icons/call-icon.svg'
import { ReactComponent as EmailIcon } from '../assets/icons/email-icon.svg'
import { ReactComponent as MapIcon } from '../assets/icons/map.svg'

const Contact = () => {
    return (
        <main className="contact-page"> 
            <SmallBanner Heading={'Contact us'} />
            <section className="contact-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="form-wrapper" data-aos="fade-right" data-aos-duration="3000">
                                <h2 className="title">Got a question?</h2>
                                <form action="">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12 mb-3">
                                            <input type="text" className="form-control" id="exampleFormControlInputname"
                                                placeholder="Your Name" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 mb-3">
                                            <input type="tel" className="form-control" id="exampleFormControlInputphoneno"
                                                placeholder="Phone Number" />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <input type="email" className="form-control" id="exampleFormControlInputEmail"
                                                placeholder="Your Email Address" />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <textarea name="message" className="form-control" placeholder="Drop a Message"
                                                rows="3"></textarea>
                                        </div>
                                    </div>
                                    <Link className="btn-grad d-inline-flex align-items-center justify-content-center text-uppercase">Submit</Link>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="card" data-aos="fade-left" data-aos-duration="3000">
                                <div className="row">
                                    <div className="col-12 icon-box">
                                        <div className="icon-wrapper">
                                            <EmailIcon />
                                        </div>
                                        <div>
                                            <h4 className="title-text">Contact Us</h4>
                                            <a href="mailto:info@avnain.com" className="link">info@avnain.com</a>
                                        </div>
                                    </div>
                                    <div className="col-12 icon-box">
                                        <div className="icon-wrapper">
                                            <CallIcon />
                                        </div>
                                        <div>
                                            <h4 className="title-text">Call Us</h4>
                                            <a href="tel:+1234567890" className="link">+91 1234567890</a>
                                        </div>
                                    </div>
                                    <div className="col-12 icon-box">
                                        <div className="icon-wrapper">
                                            <MapIcon />
                                        </div>
                                        <div>
                                            <h4 className="title-text">Locations</h4>
                                            <p className="link mb-0"> Gujarat, India</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact