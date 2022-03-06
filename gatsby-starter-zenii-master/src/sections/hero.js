import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const Hero = ({ contentModuleId }) => {
    
    const data = useStaticQuery(graphql`
        query {
            allContentfulLayoutHero {
                edges {
                    node {
                        id
                        heading
                        subheading
                        description {
                            description
                        }
                        ctaText
                        ctaUrl
                        image {
                            fluid(quality: 100) {
                                ...GatsbyContentfulFluid
                            }
                        }
                    }
                }
            }
        }
    `);

    const content = data.allContentfulLayoutHero.edges.find(edge => edge.node.id === contentModuleId);

    return (
        <section className="hero container section mx-auto">
            <div className="hero__tagline">
                <div className="hero__tagline-content-wrap">
                    <h2 className="hero__tagline-title" data-sal="fade">Droga Faustynko</h2>
                    <p className="hero__tagline-subtitle" data-sal="fade" data-sal-delay="100">Pewnie zastanawiasz się co to jest</p>
                    <p className="hero__tagline-text" data-sal="fade" data-sal-delay="200">Ta strona ma na celu przekonanie cię, że związek ze mną to najlepsze co możesz zrobić nie tylko dla siebie ale także dla świata.</p>
                    <a href={ content.node.ctaUrl }><button className="btn btn--primary mt-8" data-sal="fade" data-sal-delay="300">Dlaczego?</button></a>
                </div>
            </div>
            <div className="hero__image">
                <img src={ content.node.image.fluid.src }  className="mx-auto" alt="Hero" data-sal="slide-right" data-sal-delay="400" data-sal-duration="500" />
            </div>
        </section>
    );
};

Hero.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default Hero;