import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Glider from 'glider-js';
import Testimonial from 'components/testimonial';

const Testimonials = ({ contentModuleId }) => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulLayoutTestimonials {
                edges {
                    node {
                        id
                        heading
                        description {
                            description
                        }
                        testimonials {
                            id
                            name
                            company
                            comment {
                                comment
                            }
                            image{
                                fluid (quality: 100) {
                                    ...GatsbyContentfulFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    const content = data.allContentfulLayoutTestimonials.edges.find(edge => edge.node.id === contentModuleId); 

    const initSlider = () => {
        new Glider(document.querySelector('.glider'),{
            slidesToShow: 1,
            dots: '.glider__dots',
            draggable: true,
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            }
        });
    }
   
    useEffect(() => {
        initSlider();
    });

    const testimonials = [
        {id: 1, name: "Rudy", company: "Policjant, Reprezentat RP", comment: "Ogólnie Mati jest głupi, ale czasem zdarzy mu się coś mądrego powiedzieć xD." },
        {id: 2, name: "Noras", company: "Biseksualny geneaolog z Bierunia", comment: "Mati to produkt typu gniotsja nie łamiotsja, Wytrzymały, ale toporny w użyciu."},
        {id: 3, name: "Róża", company: "Moja babcia", comment: "Taki przystojniak, pewnie wszystkie dziewczyny się za nim oglądają. (Sorry, za brak zdjęcia xD)" },
    ]

    const testimonials2 = testimonials.map((c, i) => ({...c, image: { fluid : content.node.testimonials[i].image.fluid}}));

   return (
    <section id="testimonials" className="testimonials container section mx-auto">
        <div className="w-full md:w-1/2 pl-0 md:pl-16 text-center md:text-left">
            <h2 className="w-full md:w-3/4 font-bold text-5xl leading-none mb-6" data-sal="fade" data-sal-easing="ease-in-cubic">Ciągle jesteś nieprzekonana?</h2>
            <p className="w-full md:w-3/4" data-sal="fade" data-sal-easing="ease-in-cubic">Posłuchaj opinii innych ludzi na mój temat! Albo lepiej nie, bo w sumie są mieszane xD</p>
        </div>
        <div className="w-full md:w-1/2 pt-12 md:pt-0">
            {
                content.node.testimonials.length > 0 &&
                <div className="testimonial__slider" data-sal="fade" data-sal-easing="ease-in-cubic">
                    <div className="glider">
                        {
                            testimonials2.map(testimonial => (
                                <Testimonial testimonial={ testimonial } key={ testimonial.id }/>
                            ))
                        }
                    </div>
                    <button className="glider-prev material-icons">keyboard_arrow_left</button>
                    <button className="glider-next material-icons">keyboard_arrow_right</button> 
                    <div className="glider__dots"></div>
                </div>
            }
            
        </div>
    </section>
   );
};

Testimonials.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default Testimonials;