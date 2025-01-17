import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as DNAIcon } from '../assets/icons/dna-icon.svg'
import { ReactComponent as ExploreArrow } from '../assets/icons/double-arrow.svg'
import SmallBanner from '../components/smallBanner';
import BlogImg1 from '../assets/Images/blog1.png'
import BlogImg2 from '../assets/Images/blog2.jpg'
import BlogImg3 from '../assets/Images/blog3.jpg'


const blogView = () => {
    return (
        <main className="blogView-page">
            <SmallBanner Heading={'Blog Title'} />
            <section className="blog-content-wrapper py-100 pb-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8 col-md-12 col-12">
                            <img src={BlogImg1} alt="Blog Banner" className="blog-banner" />

                            <div className="blog-desc">
                                <p>Explore how nutraceuticals are revolutionizing preventive healthcare with their natural and health-boosting properties.</p>
                                <h2>Introduction:</h2>
                                <ul>
                                    <li>Define nutraceuticals and their role in modern healthcare.</li>
                                    <li> Mention Avna Pvt Ltd’s specialization in exporting high-quality nutraceuticals.</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore adipisci ab perspiciatis dicta velit eos, id ex porro rem provident quod ea magnam, amet sunt at aspernatur dolor, in harum maiores impedit delectus magni accusantium! Voluptatum ipsa sequi optio laboriosam ducimus quibusdam magnam enim, incidunt veniam officia tenetur quisquam, modi dolores nesciunt veritatis! Eveniet impedit inventore unde eum alias. Provident voluptas reprehenderit doloremque aut magni asperiores dolore nihil dicta modi animi fugiat neque temporibus ratione sint, nisi sapiente corrupti est a magnam? Quo, consequuntur laudantium repudiandae fuga reiciendis ullam facilis iusto, quaerat tempora voluptatum voluptate, adipisci porro? Sint alias dignissimos, ea aperiam laboriosam velit ullam cupiditate sequi. Quo, omnis suscipit. Error veniam voluptatem molestiae? Iusto fugiat quis, molestiae corporis nulla obcaecati. Culpa incidunt minima numquam perspiciatis, officia eius optio maxime animi saepe enim sit beatae corporis, dolorem id quae accusantium. Reprehenderit quos reiciendis voluptatem quas molestiae quisquam sapiente magni dolorem?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem necessitatibus quaerat est, rem asperiores dolorum quos, veniam ex corrupti libero voluptatibus molestias. Quasi a, nihil eos nostrum aut, ex enim assumenda dolorum repudiandae, qui animi rerum officiis nam minima. Doloribus necessitatibus vel magnam ea laboriosam? Non possimus reiciendis nesciunt porro eligendi itaque eaque architecto, ab ea ullam officia odit, quod repellendus labore minus fugit, fuga deserunt? Vel dicta ullam soluta architecto hic ex, esse dolores sunt similique doloribus, eligendi dolor distinctio modi cupiditate rerum! Asperiores natus accusantium, nobis ab fugiat ducimus dolor placeat praesentium debitis aspernatur harum odio assumenda voluptatum quae nulla, cum impedit blanditiis? Adipisci pariatur nulla magni voluptates, quisquam distinctio sunt minima nisi explicabo nostrum, non praesentium odit nihil tempore totam. Earum incidunt est delectus eveniet quaerat, ipsa rerum iusto enim voluptatem vero porro odio inventore nobis facilis quisquam! Cumque quasi labore hic eaque, sunt esse nulla? Praesentium iure ipsum, aut explicabo nam autem blanditiis quisquam a similique veniam. Voluptatem, eum ex quo odit sed nemo culpa similique! Provident maxime modi, ea tempora nobis labore repellendus doloribus laborum nam quibusdam, minima sequi? Voluptates, odit maxime eligendi impedit molestias dolores iusto eaque odio quaerat nam explicabo excepturi, amet nihil nemo quod nostrum cupiditate, omnis alias consectetur magnam ipsam fugit nulla rem culpa. Sint, tenetur blanditiis. Cum distinctio, quo modi nulla illum ipsam ratione temporibus minus? Eos quos ipsum, asperiores natus commodi deserunt eum! Error adipisci nostrum repudiandae corporis vero explicabo ex ab, deleniti doloremque, eos, hic qui nesciunt maiores!</p>

                                <h3>Conclusion:</h3>
                                <p>Reaffirm the potential of nutraceuticals in preventive healthcare. Call to action for potential clients to explore partnership opportunities with Avna Pvt Ltd.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default blogView