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
                                            <Link href="mailto:info@avnain.com" className="link">info@avnain.com</Link>
                                        </div>
                                    </div>
                                    <div className="col-12 icon-box">
                                        <div className="icon-wrapper">
                                            <CallIcon />
                                        </div>
                                        <div>
                                            <h4 className="title-text">Call Us</h4>
                                            <Link href="tel:+8000041402" className="link">+91 8000041402</Link>
                                        </div>
                                    </div>
                                    <div className="col-12 icon-box">
                                        <div className="icon-wrapper">
                                            <MapIcon />
                                        </div>
                                        <div>
                                            <h4 className="title-text">Locations</h4>
                                            <Link href="https://www.google.com/maps/search/s.one+complex,+b-417,+circle,+near+Gujarat+high+court,+Shayona+City,+Chanakyapuri,+Ahmedabad,+Gujarat+380061/@23.079098,72.531832,13z?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D" target='_blank' className="link mb-0">s.one complex, b-417, circle, near Gujarat high court, Shayona City, Chanakyapuri, Ahmedabad, Gujarat 380061.</Link>

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