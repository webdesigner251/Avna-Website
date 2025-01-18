import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import HeroShapeDividerBottom from '../assets/Images/intersecting-wave-layers.svg'
import { ReactComponent as DNAIcon } from '../assets/icons/dna-icon.svg'
import { ReactComponent as ServiceIcon01 } from '../assets/icons/service-icon-01.svg'
import { ReactComponent as ServiceIcon02 } from '../assets/icons/service-icon-02.svg'
import { ReactComponent as ServiceIcon03 } from '../assets/icons/service-icon-03.svg'
import AboutImage1 from '../assets/Images/about1.png'
import AboutImage2 from '../assets/Images/about2.png'
import AboutImage3 from '../assets/Images/about3.png'
import CerificateOne from '../assets/Images/certificate-1.png'
import CerificateTwo from '../assets/Images/certificate-2.png'
import CerificateThree from '../assets/Images/certificate-3.jpeg'
import CerificateFour from '../assets/Images/certificate-4.jpeg'
import CerificateFive from '../assets/Images/certificate-5.jpeg'
import CerificateSix from '../assets/Images/certificate-6.jpeg'
import CounterTopdivider from '../assets/Images/layered-wave.svg'
import { ReactComponent as Ratingstar } from '../assets/icons/star.svg'
import { ReactComponent as UserIcon } from '../assets/icons/user.svg'
import { ReactComponent as ExploreArrow } from '../assets/icons/right-arrow.svg'
import Globe from '../assets/Images/globe-img.jpg'

const Home = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });


    return (
        <main>
            <section className="hero-wrapper">
                <Swiper className="swiper mySwiper h-100"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    loop={true}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-nav .swiper-button-next',
                        prevEl: '.swiper-nav .swiper-button-prev',
                    }}
                    modules={[Pagination, EffectFade, Autoplay, Navigation]}
                    effect="fade" >
                    <SwiperSlide>
                        <div className="inner-wrapper slide1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xxl-8 col-lg-10" data-aos="fade-right" data-aos-duration="2000">
                                        <div className="banner-subtitle text-white"><DNAIcon className="svg-fill-white" /> welcome to Avnain</div>
                                        <h1 className="hero-heading sora-font">Quality Global <span
                                            className="fw-normal">Outreach Services</span></h1>
                                        <Link href="/#" className="btn-grad d-inline-block">
                                            learn more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="inner-wrapper slide2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xxl-8 col-lg-10" data-aos="fade-right" data-aos-duration="2000">
                                        <div className="banner-subtitle text-white"><DNAIcon className="svg-fill-white" />Welcome to Avnain</div>
                                        <h2 className="hero-heading sora-font">Laboratory & <span className="fw-normal"> Medical
                                            Research</span></h2>
                                        <Link href="/#" className="btn-grad d-inline-block">
                                            learn more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="container position-relative">
                    <div className='swiper-nav'>
                        <div className="swiper-button swiper-button-next"></div>
                        <div className="swiper-button swiper-button-prev"></div>
                    </div>
                </div>

                <div className="shape-divider-bottom">
                    <img src={HeroShapeDividerBottom} alt="shape-divider-bottom" width="100%"
                        height="auto" />
                </div>
            </section>

            <section className="about-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row position-relative z-1" >
                                <img src={AboutImage1} alt="About" width="100%" height="100%" />
                                <img src={AboutImage2} className='about-image-2 about-img infinite-slide' alt="About" width="100%" height="100%" />
                                <img src={AboutImage3} className='about-image-3 about-img infinite-slide2' alt="About" width="100%" height="100%" />
                            </div>

                        </div>
                        <div className="col-lg-6 ps-lg-5 mt-lg-0 pt-lg-0 pt-5 mt-5" data-aos="fade-left" data-aos-duration="2000">
                            <div className="banner-subtitle secondary-text"><DNAIcon /> About us</div>
                            <h2 className='section-title my-sm-2 my-0'>Your Trusted Partner in Pharmaceutical Exports</h2>
                            <p className='para-text my-3'>Avna Pvt Ltd specializes in exporting pharmaceuticals, nutraceuticals, and ayurvedic products with a strong focus on quality and global outreach. Based in Ahmedabad, India, the company offers product development, contract manufacturing, and export assistance.</p>
                        </div>
                    </div>
                </div>
                <div className="shape-divider-bottom">
                    <img src={HeroShapeDividerBottom} alt="shape-divider-bottom" width="100%"
                        height="auto" />
                </div>
            </section>

            <section className='services-wrapper'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="banner-subtitle secondary-text"><DNAIcon className="" />Quality Global Outreach</div>
                            <h2 className='section-title my-sm-2 my-0'>Our Services</h2>
                            <p className='para-text my-3 col-md-7 mx-auto'>Specializing in exporting pharmaceuticals, nutraceuticals, and ayurvedic products with a strong focus on quality.</p>
                        </div>
                    </div>
                    <div className="row mt-lg-5 pt-lg-5">
                        <div className="col-lg-4">
                            <div className="services-box-wrapper">
                                <div className="services-inner box">
                                    <div className="media_wrap" data-aos="zoom-in" data-aos-duration="3000">
                                        <ServiceIcon01 />
                                    </div>
                                    <div className="services-box-content">
                                        <div className="services-box-title">
                                            <h3 className="title">Export Assistance Services</h3>
                                        </div>
                                        <div className="desc-text">
                                            Specialized in exporting pharmaceuticals, nutraceuticals, and ayurvedic products.
                                        </div>
                                        <Link to='products' className='explore-btn'>  Explore more <ExploreArrow className='icon' /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-box-wrapper">
                                <div className="services-inner box">
                                    <div className="media_wrap" data-aos="zoom-in" data-aos-duration="3000">
                                        <ServiceIcon02 />
                                    </div>
                                    <div className="services-box-content">
                                        <div className="services-box-title">
                                            <h3 className="title">Product Development Services</h3>
                                        </div>
                                        <div className="desc-text">
                                            Quality-focused contract manufacturing services.
                                        </div>
                                        <Link to='products' className='explore-btn'>  Explore more <ExploreArrow className='icon' /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="services-box-wrapper">
                                <div className="services-inner box">
                                    <div className="media_wrap" data-aos="zoom-in" data-aos-duration="3000">
                                        <ServiceIcon03 />
                                    </div>
                                    <div className="services-box-content">
                                        <div className="services-box-title">
                                            <h3 className="title">Contract Manufacturing Services
                                            </h3>
                                        </div>
                                        <div className="desc-text">
                                            Customer-centric product development services.
                                        </div>
                                        <Link to='products' className='explore-btn'>  Explore more <ExploreArrow className='icon' /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='why-choose-us-wrapper py-100'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-in" data-aos-duration="3000">
                            <div className="banner-subtitle secondary-text"><DNAIcon className="" />Why choose Us</div>
                            <h2 className='section-title my-sm-2 my-0'>Why Choose Us</h2>
                            <p className='para-text my-3'>Avna Pvt Ltd specializes in exporting pharmaceuticals, nutraceuticals, and ayurvedic products with a strong focus on quality and global outreach. Based in Ahmedabad, India, the company offers product development, contract manufacturing, and export assistance.</p>
                            <ul className='icon-list'>
                                <li><strong>Extensive Export Experience:</strong>With over 2 years of export experience, Avna Pvt Ltd has a proven track record of success in navigating international markets and delivering results for our clients.</li>
                                <li><strong>Quality Manufacturing:</strong>We uphold the highest standards of quality in our manufacturing processes, ensuring that every product meets and exceeds customer expectations.</li>
                                <li><strong>Global Reach:</strong>With extensive experience in international trade, we export wellness products to various countries worldwide, including Kenya, Philippines, Nigeria, Zambia, Sri Lanka, Cambodia, UAE, Sudan, and Qatar.</li>
                                <li><strong>Customer-Centric Approach:</strong>Your satisfaction is our top priority. We are dedicated to providing personalized service and support to meet your unique needs and requirements.</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 text-center" data-aos="fade-left" data-aos-duration="3000">
                            <img src={Globe} alt="Globe" className='globe-img' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='counter-wrapper'>
                <div className="divider-top">
                    <img src={CounterTopdivider} alt="shape-divider-bottom" width="100%"
                        height="auto" />
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="banner-subtitle secondary-text"><DNAIcon className="" />Trusted Worldwide</div>
                            <h2 className='section-title my-sm-2 my-0'>Our Achievements in Numbers</h2>
                            <p className='para-text my-3'>Empowering Global Healthcare Through Our Expertise</p>
                        </div>
                    </div>
                    <div className="row" ref={ref}>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="counter-box">
                                <h3 className='count-title space-font'>
                                    {inView && <CountUp end={1300} duration={12} />} <span>+</span>
                                </h3>
                                <p className='count-desc'>Happy Clients Worldwide</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="counter-box">
                                <h3 className='count-title space-font'>
                                    {inView && <CountUp end={139} duration={12} />} <span>+</span>
                                </h3>
                                <p className='count-desc'>Products Exported Globally</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="counter-box">
                                <h3 className='count-title space-font'>
                                    {inView && <CountUp end={25} duration={12} />} <span>+</span>
                                </h3>
                                <p className='count-desc'>Years of Industry Experience</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="counter-box">
                                <h3 className='count-title space-font'>
                                    {inView && <CountUp end={100} duration={12} />} <span>+</span>
                                </h3>
                                <p className='count-desc'>International Markets Served</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider-bottom">
                    <img src={CounterTopdivider} alt="shape-divider-bottom" width="100%"
                        height="auto" />
                </div>
            </section>

            <section className='certificate-wrapper'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 text-lg-start text-center">
                            <div className="banner-subtitle secondary-text"><DNAIcon className="" />Quality Global Outreach</div>
                            <h2 className='section-title my-sm-2 my-0'>Our Certifications</h2>
                            {/* <p className='para-text my-3'>We are proud to hold certifications that demonstrate our commitment to quality and excellence in our field.</p> */}
                            <p className='para-text my-3'>We are the largest exporter of pharmaceutical, nutraceutical, and cosmeceutical products into various countries across the world with quality and certifications that are simply unmatched, be it the EU-GMP approval, PIC/S approval, WHO-GMP approval, and USFDA approval.</p>
                        </div>

                        <div className="col-lg-7" data-aos="fade-left" data-aos-duration="2000">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 2,
                                        spaceBetween: 0,
                                    },
                                }}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: true,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}

                                className="certificateSlider"
                            >
                                <SwiperSlide>
                                    <div className="certificate-box">
                                        <img src={CerificateOne} alt="Cerificate one" width='100%' height="100%" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="certificate-box">
                                        <img src={CerificateTwo} alt="Cerificate two" width='100%' height="100%" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="certificate-box">
                                        <img src={CerificateThree} alt="Cerificate three" width='100%' height="100%" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="certificate-box">
                                        <img src={CerificateFour} alt="Cerificate three" width='100%' height="100%" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="certificate-box">
                                        <img src={CerificateFive} alt="Cerificate three" width='100%' height="100%" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="certificate-box">
                                        <img src={CerificateSix} alt="Cerificate three" width='100%' height="100%" />
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            <section className='testimonial-wrapper'>
                <div className="container">
                    <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-duration="2000">
                        <div className="col-lg-7 text-center">
                            <div className="banner-subtitle secondary-text"><DNAIcon className="" />what people say</div>
                            <h2 className='section-title my-sm-2 my-0'>Our Testimonials</h2>
                            <p className='para-text my-3 col-md-9 mx-auto'>Specializing in exporting pharmaceuticals, nutraceuticals, and ayurvedic products with a strong focus on quality.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 testimonial-inner-wrapper" data-aos="fade-right" data-aos-duration="2000">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: true,
                                }}
                                navigation={{
                                    nextEl: '.swiper-nav-testimonial .swiper-button-next',
                                    prevEl: '.swiper-nav-testimonial .swiper-button-prev',
                                }}
                                modules={[Navigation]}
                                className="testimonialSlider"
                            >
                                <SwiperSlide>
                                    <div className="testimonial-box">
                                        <div className="d-flex rating-box">
                                            <Ratingstar />
                                            <Ratingstar />
                                            <Ratingstar />
                                            <Ratingstar />
                                            <Ratingstar />
                                        </div>
                                        <p className='desc'>AVNain's dedication to excellence and adherence to international standards has set them apart in the industry. Their pharmaceuticals have consistently met our high standards, ensuring patient safety and satisfaction.</p>
                                        <div className="d-flex author-box">
                                            <UserIcon />
                                            <span>Sara Smith</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-box">
                                        <div className="d-flex rating-box">
                                            <Ratingstar />
                                            <Ratingstar />
                                            <Ratingstar />
                                            <Ratingstar />
                                            <Ratingstar />
                                        </div>
                                        <p className='desc'>AVNain has been a game-changer for our pharmaceutical supply chain. Their commitment to quality and timely delivery has significantly improved our operations. We highly recommend AVNain for anyone looking for a reliable pharmaceutical export partner.</p>
                                        <div className="d-flex author-box">
                                            <UserIcon />
                                            <span>Ravi Sharma</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-box">
                                        <div className="d-flex rating-box">
                                            <Ratingstar />
                                            <Ratingstar />
                                            <Ratingstar />
                                            <Ratingstar />
                                            <Ratingstar />
                                        </div>
                                        <p className='desc'>Avna pvt ltd is a reliable partner for exporting pharmaceuticals and ayurvedic products.</p>
                                        <div className="d-flex author-box">
                                            <UserIcon />
                                            <span>Vikram Singh</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="container position-relative px-0 py-4">
                                <div className='swiper-nav-testimonial'>
                                    <div className="swiper-button swiper-button-next"></div>
                                    <div className="swiper-button swiper-button-prev"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 px-0 d-flex flex-lg-column flex-sm-row flex-column justify-content-center" data-aos="fade-left" data-aos-duration="2000">
                            <div className="feature-box one">
                                <ServiceIcon02 className="icon-wrapper" />
                                <h4 className='feature-title'>Product Development Services</h4>
                                <p className='feature-desc'>Offering services such as product development, contract manufacturing, and export assistance with global outreach.
                                </p>
                            </div>
                            <div className="feature-box">
                                <ServiceIcon03 className="icon-wrapper" />
                                <h4 className='feature-title'>Customer-Centric Approach</h4>
                                <p className='feature-desc'>Emphasizing a customer-centric approach with over two years of experience in the industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;