import React from "react";
import { ReactComponent as DNAIcon } from '../assets/icons/dna-icon.svg'
import SmallBanner from '../components/smallBanner';
// import Globe from '../assets/Images/globe-img.jpg'
import Service01 from '../assets/Images/service-01.png'
import Service02 from '../assets/Images/service-02.png'
import Service03 from '../assets/Images/service-03.png'


const services = () => {
    return (
        <main className="services-page">
            <SmallBanner Heading={'Our Services'} />

            <section className="our-services-wrapper py-100">
                <div className="container">
                    <div className="row align-items-center pb-5">
                        <div className="col-lg-6 order-lg-0 order-1" data-aos="fade-right" data-aos-duration="3000">
                            <img src={Service01} alt="pharmaceutical" className="globe-img" />
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-subtitle secondary-text"><DNAIcon className="" />Our services</div>
                            <h2 className='section-title my-sm-2 my-0'>Export Assistance Services</h2>
                            <p className='para-text my-3 col-xl-10'> Avna Pvt Ltd, your trusted partner in pharmaceutical exports, ensures seamless export operations for pharmaceuticals, nutraceuticals, and ayurvedic products. With our expertise, we manage the complexities of international regulations and quality standards, ensuring your products reach global markets efficiently.</p>
                        </div>
                    </div>

                    <div className="row align-items-center pb-5">
                        <div className="col-lg-6">
                            <div className="banner-subtitle secondary-text"><DNAIcon className="" />Our services</div>
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
                            <div className="banner-subtitle secondary-text"><DNAIcon className="" />Our services</div>
                            <h2 className='section-title my-sm-2 my-0'>Contract Manufacturing Services</h2>
                            <p className='para-text my-3 col-xl-10'> We provide customer-centric contract manufacturing services, tailored to meet your business's specific production requirements. Our state-of-the-art facilities and experienced team ensure high-quality manufacturing processes, delivering products that adhere to stringent global standards.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default services