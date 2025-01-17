import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as DNAIcon } from '../assets/icons/dna-icon.svg'
import { ReactComponent as ExploreArrow } from '../assets/icons/double-arrow.svg'
import SmallBanner from '../components/smallBanner';
import BlogImg1 from '../assets/Images/blog1.png'
import BlogImg2 from '../assets/Images/blog2.jpg'
import BlogImg3 from '../assets/Images/blog3.jpg'


const blogs = () => {
    return (
        <main className="blogs-page">
            <SmallBanner Heading={'Our Blogs'} />

            <section className="blogs-wrapper py-100">
                <div className="container">
                    <div className="row justify-content-center mb-lg-5 mb-4" data-aos="fade-up" data-aos-duration="3000">
                        <div className="col-lg-7 text-center">
                            <div className="banner-subtitle secondary-text"><DNAIcon className="" />Our Blogs</div>
                            <h2 className='section-title my-sm-2 my-0'>News & Articles From Avna</h2>
                            <p className='para-text my-3 col-md-8 mx-auto'>Specializing in exporting pharmaceuticals, nutraceuticals, and ayurvedic products with a strong focus on quality.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <Link to="/blogView" className="blog-card">
                                <div className="top">
                                    <img src={BlogImg1} alt="Blog" className="blog-img w-100" />
                                    <h3 className="blog-title">Why Nutraceuticals Are the Future of Preventive Healthcare</h3>
                                    <p className="blog-desc">Explore how nutraceuticals are revolutionizing preventive healthcare with their natural and health-boosting properties.</p>
                                </div>
                                <button className="blog-link">Read more <span><ExploreArrow className="next-icon" /> </span></button>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <Link to="/blogView" className="blog-card">
                                <div className="top">
                                    <img src={BlogImg2} alt="Blog" className="blog-img w-100" />
                                    <h3 className="blog-title">Pharmaceutical Export: Ensuring Quality and Compliance in International Markets</h3>
                                    <p className="blog-desc">Discover Avna Pvt Ltd's approach to overcoming regulatory challenges in pharmaceutical exports while maintaining quality.</p>
                                </div>
                                <button className="blog-link">Read more <span><ExploreArrow className="next-icon" /> </span></button>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <Link to="/blogView" className="blog-card">
                                <div className="top">
                                    <img src={BlogImg3} alt="Blog" className="blog-img w-100" />
                                    <h3 className="blog-title">The Rising Demand for Ayurvedic Products in the Global Market</h3>
                                    <p className="blog-desc">Learn about the increasing global popularity of ayurvedic products and how Avna Pvt Ltd meets this growing demand.</p>
                                </div>
                                <button className="blog-link">Read more <span><ExploreArrow className="next-icon" /> </span></button>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}
export default blogs