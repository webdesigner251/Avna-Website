import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { ReactComponent as DNAIcon } from '../assets/icons/dna-icon.svg'
import SmallBanner from '../components/smallBanner';
import CounterTopdivider from '../assets/Images/layered-wave.svg'
import AboutImage1 from '../assets/Images/about1.png'
import AboutImage2 from '../assets/Images/about2.png'
import AboutImage3 from '../assets/Images/about3.png'
import HeroShapeDividerBottom from '../assets/Images/intersecting-wave-layers.svg'
import MissionImage from '../assets/Images/mission-image.jpg'
import VisionImage from '../assets/Images/vision-image.jpg'
import MissionIcon from '../assets/Images/mision-Icon.png'
import VisionIcon from '../assets/Images/vision-icon.png'
import CerificateOne from '../assets/Images/certificate-1.png'
import CerificateTwo from '../assets/Images/certificate-2.png'
import CerificateThree from '../assets/Images/certificate-3.jpeg'
import CerificateFour from '../assets/Images/certificate-4.jpeg'
import CerificateFive from '../assets/Images/certificate-5.jpeg'
import CerificateSix from '../assets/Images/certificate-6.jpeg'
import Service01 from '../assets/Images/service-01.png'
import Service02 from '../assets/Images/service-02.png'
import Service03 from '../assets/Images/service-03.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });


    return (
        <main className='about-page'>
            <SmallBanner Heading={'About us'} />

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

            <section className='aboutus-wrapper py-100'>
                <div className="container">
                    <div className="row justify-content-center mb-lg-5 mb-4" data-aos="fade-up" data-aos-duration="3000">
                        <div className="col-lg-7 text-center">
                            <div className="banner-subtitle secondary-text"><DNAIcon className="" />About industrie</div>
                            <h2 className='section-title my-sm-2 my-0'>Welcome to the Trusted Partner in Pharmaceutical Exports</h2>
                            <p className='para-text my-3 col-md-8 mx-auto'>Specializing in exporting pharmaceuticals, nutraceuticals, and ayurvedic products with a strong focus on quality.</p>
                        </div>
                    </div>

                    <div className="row about-row-gap mx-0">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration="3000">
                            <div className="row mx-0">
                                <div className='col-md-6 col-7'>
                                    <img src={MissionImage} className='mv-image' alt="Our vision" width="100%" height="100%" />
                                </div>
                                <div className='col-md-6 col-5 d-flex align-items-md-start align-items-center justify-content-center'>
                                    <img src={MissionIcon} className='mv-icon' alt="Our vision" width="100%" height="100%" />
                                </div>
                            </div>
                            <div className="row mx-0">
                                <div className="col-md-4 col-sm-3 col-2"></div>
                                <div className="col-md-8 col-sm-9 col-10">
                                    <div className="mv-box">
                                        <h3 className='mv-title'>Our Vision</h3>
                                        <p className='mv-desc'>our vision is to lead the way in shaping the
                                            future of the wellness industry. We envision a world where
                                            everyone has access to high-quality, government-approved
                                            wellness solutions that promote health, happiness, and wellbeing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration="3000">
                            <div className="row">
                                <div className='col-md-6 col-7'>
                                    <img src={VisionImage} className='mv-image' alt="Our vision" width="100%" height="100%" />
                                </div>
                                <div className='col-md-6 col-5 d-flex align-items-md-start align-items-center justify-content-center'>
                                    <img src={VisionIcon} className='mv-icon' alt="Our vision" width="100%" height="100%" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-3 col-2"></div>
                                <div className="col-md-8 col-sm-9 col-10">
                                    <div className="mv-box">
                                        <h3 className='mv-title'>Our Mision</h3>
                                        <p className='mv-desc'>Avna Pvt Ltd specializes in exporting pharmaceuticals, nutraceuticals, and ayurvedic products with a strong focus on quality and global outreach. Based in Ahmedabad, India, the company offers product development, contract manufacturing, and export assistance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-services-wrapper py-100" id="services">
                <div className="container">
                    <div className="row justify-content-center mb-lg-5 mb-4" data-aos="fade-up" data-aos-duration="3000">
                        <div className="col-lg-7 text-center">
                            <div className="banner-subtitle secondary-text"><DNAIcon className="" />Our services</div>
                            <h2 className='section-title my-sm-2 my-0'>Explore Our Services</h2>
                            <p className='para-text my-3 col-md-8 mx-auto'>Specializing in exporting pharmaceuticals, nutraceuticals, and ayurvedic products with a strong focus on quality.</p>
                        </div>
                    </div>

                    <div className="row align-items-center pb-5">
                        <div className="col-lg-6 order-lg-0 order-1" data-aos="fade-right" data-aos-duration="3000">
                            <img src={Service01} alt="pharmaceutical" className="globe-img" />
                        </div>
                        <div className="col-lg-6">
                            <h2 className='section-title my-sm-2 my-0'>Export Assistance Services</h2>
                            <p className='para-text my-3 col-xl-10'> Avna Pvt Ltd, your trusted partner in pharmaceutical exports, ensures seamless export operations for pharmaceuticals, nutraceuticals, and ayurvedic products. With our expertise, we manage the complexities of international regulations and quality standards, ensuring your products reach global markets efficiently.</p>
                        </div>
                    </div>

                    <div className="row align-items-center pb-5">
                        <div className="col-lg-6">
                            <h2 className='section-title my-sm-2 my-0'>Product Development Services</h2>
                            <p className='para-text my-3 col-xl-10'> At Avna Pvt Ltd, we offer comprehensive product development services. From formulation to final product, our quality-focused approach ensures that every stage of development meets the highest standards, catering to the unique needs of our clients in the pharmaceutical and nutraceutical industries.</p>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration="3000">
                            <img src={Service02} alt="pharmaceutical" className="globe-img" />
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-0 order-1" data-aos="fade-right" data-aos-duration="3000">
                            <img src={Service03} alt="pharmaceutical" className="globe-img" />
                        </div>
                        <div className="col-lg-6">
                            <h2 className='section-title my-sm-2 my-0'>Contract Manufacturing Services</h2>
                            <p className='para-text my-3 col-xl-10'> We provide customer-centric contract manufacturing services, tailored to meet your business's specific production requirements. Our state-of-the-art facilities and experienced team ensure high-quality manufacturing processes, delivering products that adhere to stringent global standards.</p>
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

            {/* <section className='certificate-wrapper pb-0'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 text-lg-start text-center">
                            <div className="banner-subtitle secondary-text"><DNAIcon className="" />Quality Global Outreach</div>
                            <h2 className='section-title my-sm-2 my-0'>Our Certifications</h2>
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
            </section> */}
            <section className='certificate-wrapper'>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="banner-subtitle secondary-text"><DNAIcon className="" />Quality Global Outreach</div>
                            <h2 className='section-title my-sm-2 my-0'>Our Certifications</h2>
                            <p className='para-text my-3'>We are the largest exporter of pharmaceutical, nutraceutical, and cosmeceutical products into various countries across the world with quality and certifications that are simply unmatched, be it the EU-GMP approval, PIC/S approval, WHO-GMP approval, and USFDA approval.</p>
                        </div>

                        <div className="col-lg-12">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 4,
                                        spaceBetween: 0,
                                    },
                                }}
                                loop={true}
                                speed={6000} // Adjust for smoother scrolling
                                autoplay={{
                                    delay: 0, // Continuous autoplay without delay
                                    disableOnInteraction: false, // Keep autoplay even after user interaction
                                }}
                                pagination={true}
                                modules={[Pagination, Autoplay]} // Ensure Autoplay module is included
                                className="certificateSlider"
                            >
                                <SwiperSlide>
                                    <div className="certificate-box">
                                        <img src={CerificateOne} alt="Certificate one" width='100%' height="100%" />
                                        <span>ISO</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="certificate-box">
                                        <img src={CerificateTwo} alt="Certificate two" width='100%' height="100%" />
                                        <span>Import Export Code</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="certificate-box">
                                        <img src={CerificateThree} alt="Certificate three" width='100%' height="100%" />
                                        <span>WHO GMP</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="certificate-box">
                                        <img src={CerificateFour} alt="Certificate four" width='100%' height="100%" />
                                        <span>USFDA</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="certificate-box">
                                        <img src={CerificateFive} alt="Certificate five" width='100%' height="100%" />
                                        <span>GMP Certified</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="certificate-box">
                                        <img src={CerificateSix} alt="Certificate six" width='100%' height="100%" />
                                        <span>EU GMP</span>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About