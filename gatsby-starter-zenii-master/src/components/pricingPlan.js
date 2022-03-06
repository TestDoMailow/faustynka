import React from 'react';
import PropTypes from 'prop-types';

const PricingPlan = ({ plan }) => (
    <div className={`pricing__item ${plan.featured ? 'pricing__item--active': ''} `} data-sal="fade" data-sal-easing="ease-in-cubic" data-sal-duration="400" style={{flex: 1}}>
        <div className="pricing__item-content">
            <p className="pricing__item-price"><span>{ plan.currency }</span><span>{ plan.price }</span>{ plan.perItem }</p>
            <h3 className="pricing__item-title">{ plan.title }</h3>
            {

                <p className="pricing__item-features">
                    {
                        plan.feature
                    }
                </p>
            }
        </div>
        <i className={`item__icon material-icons ${!plan.featured && 'text-primary'}`}>favorite</i>
    </div>
);

PricingPlan.propTypes = {
    plan: PropTypes.object.isRequired
};


export default PricingPlan;