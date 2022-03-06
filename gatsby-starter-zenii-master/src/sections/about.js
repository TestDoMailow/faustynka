import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import AboutItem from 'components/aboutItem';

const About = ({ contentModuleId }) => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulLayoutAbout {
                edges {
                    node {
                        id
                        heading
                        description {
                            description
                        }
                        featureItem {
                            id
                            title
                            icon
                            description {
                                description
                            }
                        }
                        image {
                            fluid(quality:100) {
                                ...GatsbyContentfulFluid
                            }
                        }
                    }
                }
            }
        }
    `);

    const content = data.allContentfulLayoutAbout.edges.find(edge => edge.node.id === contentModuleId); 

    const featureItems = [
        {id: 1, icon: 'favorite', title: 'Bo bardzo mi na tobie zależy', description: 'Co za tym idzie obiecuje o Ciebie dbać i upewniać się, że jesteś szczęśliwa.'},
        {id: 2, icon: 'favorite', title: 'Bo jestem przystojniakiem', description: 'Czyli otrzymasz takiego przystojniaka na wyłączność.'},
        {id: 3, icon: 'favorite', title: 'Bez ciebie zgubię się na rondzie', description: 'Serio gdyby nie Ty, już dawno zgubiłbym się na drodzę i skończył gdzieś pod Moskwą zamiast w Tychach.'}
    ]

    return (
        <section id="about" className="about-us bg-gray">
            <div className="container section mx-auto">
                <div className="about-us__content">
                    <h2 className="section__title" data-sal="fade" data-sal-easing="ease-in-cubic">Dlaczego powinnaś ze mną chodzić</h2>
                    <p data-sal="slide-up" data-sal-easing="ease-in-cubic" data-sal-delay="100">Nie ma co rzucać słów na wiatr. Tutaj przedstawię ci 3 główne powody dla, których powinnaś rozważyć mnie jako potencjalnego partnera.</p>
                    { 
                        content.node.featureItem.length > 0 &&
                        <ul className="mt-10 md:ml-8">
                            {
                                featureItems.map(feature => (
                                    <AboutItem feature={ feature } key={ feature.id } />
                                ))
                            }
                        </ul>
                    }
                </div>
                <div className="about-us__image">
                    <div className="mx-auto about-us__image-wrap" data-sal="slide-up" data-sal-delay="200" data-sal-duration="500">
                        <Img fluid={ content.node.image.fluid } />
                    </div>
                </div>
            </div>
        </section>
   );
};

About.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default About;