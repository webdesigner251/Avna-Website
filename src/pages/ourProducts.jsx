import React from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as DNAIcon } from '../assets/icons/dna-icon.svg'
import { ReactComponent as ProductIcon1 } from '../assets/icons/pharmaceutical.svg'
import { ReactComponent as ProductIcon2 } from '../assets/icons/nutraceuticals.svg'
import { ReactComponent as ProductIcon3 } from '../assets/icons/ayurvedic.svg'
import SmallBanner from '../components/smallBanner';
import { ReactComponent as ExploreArrow } from '../assets/icons/double-arrow.svg'

const OurProducts = () => {
    return (
        <main className="our-products-page" >
            <SmallBanner Heading={'Our Products'} />
            <section className="py-100 pb-5">
                <div className="container">
                    <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="3000">
                        <div className="col-lg-7 text-center">
                            <div className="banner-subtitle secondary-text"><DNAIcon className="" />Our products</div>
                            <h2 className='section-title my-sm-2 my-0'>Comprehensive Global Health Solutions</h2>
                            <p className='para-text my-3 col-md-8 mx-auto'>At Avna Pvt Ltd, we take pride in offering a diverse range of high-quality products across the pharmaceutical, nutraceutical, and ayurvedic sectors.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-products-wrapper" data-aos="fade-in" data-aos-duration="3000">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-sm-12 my-sm-3 my-2">
                            <Link className="product-box" to="/product-view">
                                <div className="img-wrapper">
                                    <ProductIcon1 className="pro-icon" />
                                </div>
                                <div className="right-wrapper">
                                    <h3 className="pro-title">pharmaceutical</h3>
                                    <span className="pro-link">Learn More <ExploreArrow className="icon" /> </span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12 my-sm-3 my-2">
                            <Link className="product-box" to="/product-view">
                                <div className="img-wrapper">
                                    <ProductIcon2 className="pro-icon" />
                                </div>
                                <div className="right-wrapper">
                                    <h3 className="pro-title">nutraceuticals</h3>
                                    <span className="pro-link">Learn More <ExploreArrow className="icon" /> </span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12 my-sm-3 my-2">
                            <Link className="product-box" to="/product-view">
                                <div className="img-wrapper">
                                    <ProductIcon3 className="pro-icon" />
                                </div>
                                <div className="right-wrapper">
                                    <h3 className="pro-title">ayurvedic</h3>
                                    <span className="pro-link">Learn More <ExploreArrow className="icon" /> </span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 text-center mt-sm-5 mt-4">
                            <Link className="btn-grad d-inline-flex align-items-center justify-content-center text-uppercase">View More</Link>
                        </div>
                        {/* <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                            <div className="product-box">
                                <div className="img-wrapper">
                                    <img src={Product2} alt="nutraceuticals Product" className="pro-image" width="100%" height="100%" />
                                </div>
                                <h3 className="pro-title">nutraceuticals</h3>
                                <Link className="pro-link">Learn More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                            <div className="product-box">
                                <div className="img-wrapper">
                                    <img src={Product3} alt="ayurvedic  Product" className="pro-image" width="100%" height="100%" />
                                </div>
                                <h3 className="pro-title">ayurvedic </h3>
                                <Link className="pro-link">Learn More</Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* <section className="cta-wrapper">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h4>Explore Wide range of AVNA Products</h4>
                        </div>
                    </div>
                </div>
            </section> */}
        </main>
    )
}

export default OurProducts