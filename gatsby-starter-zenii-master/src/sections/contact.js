import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import validation from 'utils/validation';

const Contact = ({ contentModuleId }) => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulLayoutContact {
                edges {
                    node {
                        id
                        heading
                        description {
                            description
                        },
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

    const content = data.allContentfulLayoutContact.edges.find(edge => edge.node.id === contentModuleId);

    useEffect(() => {
       // validation.init();
    },[]);

    const onClickYes = () => {
        if(confirm("Ale napewno???")) {
            window.location.href = "https://www.youtube.com/watch?v=wdN3BmQ-E9w"
        }
    }

    const onClickNo = () => {
        if(confirm("Napewno??? Przemyśl to jeszcze raz i pamiętaj o kotkach!!!")) {
            window.location.href = "https://www.youtube.com/watch?v=EPDGwN9ggRE"
        }
    }

    return (
        <section id="contact" className="contact container section mx-auto">
            <div className="contact__content">
                <h2 className="section__title" data-sal="fade" data-sal-easing="ease-in-cubic">Czas na decyzję</h2>
                <p className="mb-4 w-full md:w-3/4" data-sal="slide-up" data-sal-easing="ease-in-cubic">Przemyśl do dokładnie i użyj jednego z przycisków by zadecydować. Ach i bym zapomniał - jak uda mi się już kupić mieszkanie to obiecuje kotki.</p>
                <div className="w-full md:w-3/4" noValidate data-sal="slide-up" data-sal-easing="ease-in-cubic" data-sal-delay="100" style={{justifyContent: 'space-between', display: 'flex'}}>
                    <button className="btn btn--primary mt-8" onClick={onClickYes}>Bierz mnie kociaku!</button>
                    <button className="btn btn--primary mt-8" style={{backgroundColor: "red"}} onClick={onClickNo}>Spadaj cieciu!</button>
                </div>
            </div>
            <div className="contact__image">
                <div className="mx-auto" data-sal="slide-up" data-sal-delay="400" data-sal-duration="500">
                    <div className="contact__image-wrap">
                        <Img fluid={ content.node.image.fluid } alt="Contact" />
                    </div>
                </div>
            </div>
        </section>   
    );
};

Contact.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default Contact;