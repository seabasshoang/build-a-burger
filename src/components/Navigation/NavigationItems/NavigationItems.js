import React from 'react';
import IndividualNavItems from './IndividualNavItems/IndividualNavItems';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <IndividualNavItems link="/">Burger Builder</IndividualNavItems>
        <IndividualNavItems link="/">Contact Us</IndividualNavItems>
        <IndividualNavItems link="/">Checkout</IndividualNavItems>
    </ul>
);

export default navigationItems;