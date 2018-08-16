import React from 'react';
import IndividualNavItems from './IndividualNavItems/IndividualNavItems';

const navigationItems = (props) => (
    <ul>
        <IndividualNavItems link="/">Burger Builder</IndividualNavItems>
        <IndividualNavItems link="/">Contact Us</IndividualNavItems>
        <IndividualNavItems link="/">Checkout</IndividualNavItems>
    </ul>
);

export default navigationItems;