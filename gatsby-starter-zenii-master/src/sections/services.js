import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Service from 'components/service';

const Services = ({ contentModuleId }) => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulLayoutServices {
                edges {
                    node {
                        id
                        heading
                        description {
                            description
                        }
                        serviceItems {
                            id
                            title
                            description {
                                description
                            }
                            image {
                                fluid(quality: 100, maxWidth: 208, maxHeight: 146) {
                                    ...GatsbyContentfulFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    const content = data.allContentfulLayoutServices.edges.find(edge => edge.node.id === contentModuleId);

    const service = [
        {id: 1, title: "Jesteś piękna", description: "Nawet jeśl Cię wkurza kiedy to mówię, uważam, że jesteś najpiękniejszą dziewczyną."},
        {id: 2, title: "Genialnie gotujesz", description: "Poszedł bym na wojnę dla twoich obiadków. Serio, naprawdę je kocham."},
        {id: 3, title: "Posiadasz wiele talentów", description: "I fryzjerstwo i malowanie - jesteś prawdziwą artystką. Posiadanie pasji i ich rozwijanie to coś cennego."},
        {id: 4, title: "Sprawiasz, że czuję spokój", description: "A nie przychodzi mi to łatwo. Naprawdę czuję się przy tobie niesamowicie, jakby świat nie istniał."},
    ]

    const service2 = service.map((c, i) => ({...c, image: { fluid : content.node.serviceItems[i].image.fluid}}));

    return (
        <section id="services" className="services container section mx-auto">
            <div>
                <h2 className="section__title text-center mb-16" data-sal="fade" data-sal-easing="ease-in-cubic">Dlaczego chcę z Tobą chodzić</h2>
                {
                    content.node.serviceItems.length > 0 &&
                    <div className="services__items">
                        {
                            service2.map(service => (
                                <Service service={service} key={service.id} />
                            ))
                        }
                    </div>
                }
                
            </div>
        </section>
    );
};

Services.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default Services;