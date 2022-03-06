import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import PricingPlan from 'components/pricingPlan';

const Pricing = ({ contentModuleId }) => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulLayoutPricing {
                edges {
                    node {
                        id
                        heading
                        description {
                            description
                        }
                        pricingPlans {
                            id
                            title
                            price
                            perItem
                            currency
                            planFeatures
                            buttonText
                            buttonUrl
                            featured
                        }
                    }
                }
            }
        }
    `);

    const content = data.allContentfulLayoutPricing.edges.find(edge => edge.node.id === contentModuleId);

    const plans = [
        {id: 1, price: 200, title: "Przytulasów miesięcznie", feature: "Oczywiście conajmniej. Większe liczby zawsze wchodzą w grę. No i w każdego będę wkładał serce."},
        {id: 2, price: "Cole", title: "Kiedy tylko zapragniesz", feature: "Możesz mnie obudzić w środku nocy, jeśli cię najdzie ochota. Pojadę i kupię specjalnie dla ciebie.", featured: true},
        {id: 3, price: '100%', title: "Mojej szczerej miłość", feature: "Może i nic za nią nie kupisz, ale obiecuje ci do niej nieograniczony dostęp. "},
    ]

    return (
        <section id="pricing" className="pricing section bg-gray">
            <div className="container mx-auto">
                <h2 className="section__title text-center mb-16" data-sal="fade" data-sal-easing="ease-in-cubic">Co otrzymasz w zamian</h2>
                {
                    content.node.pricingPlans.length > 0 && 
                    <div className="pricing__items" >
                        {
                            plans.map(plan => (
                                <PricingPlan plan={ plan } key={ plan.id } />
                            ))
                        }
                    </div>
                }
                
            </div>
        </section>
    );
};

Pricing.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default Pricing;