import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = ({ menus }) => {

    const data = useStaticQuery(graphql`
        query {
            contentfulContactDetails {
                id
                addressLine1
                addressLine2
                contactNumber
                email
                facebookUrl
                twitterUrl
                instagramUrl
            }
        }
    `);

    const footerMenu = (menus !== null &&  menus !== undefined) ? menus.find(menu => menu.type === 'secondary') : null;

    return (
        <footer className="footer bg-tertiary text-white">
            <div className="container section mx-auto py-10">
                <div className="footer__content">
                    <h3 className="text-lg font-bold mb-4">Dane kontaktowe</h3>
                    <ul className="text-sm">
                        <li className="mb-2">
                            <div className="item">
                                <i className="item__icon material-icons text-white text-2xl">business</i>
                                <div className="item__content">
                                    <p className="item__text">43-140 Lędziny<br/>ul. Jana Długosza 42/7</p>
                                </div> 
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="item">
                                <i className="item__icon material-icons text-white text-2xl">settings_phone</i>
                                <div className="item__content">
                                    <p className="item__text">+ 48 604-819-482</p>
                                </div>
                            </div>
                        </li>
                        <li className="mb-2">
                            <div className="item">
                                <i className="item__icon material-icons text-white text-2xl">email</i>
                                <div className="item__content">
                                    <p className="item__text">hamerlamateusz@gmail.com</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

Footer.defaultProps = {
    menus: null
};

Footer.propTypes = {
    menus: PropTypes.any
};


export default Footer;