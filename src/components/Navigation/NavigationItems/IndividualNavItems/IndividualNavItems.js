import React from 'react';

import classes from './IndividualNavItems.css';

const individualNavItems = (props) => (
    <li className={classes.IndividualNavItems}>
        <a
            href={props.links}
            className={props.active ? classes.active : null}>
            {props.children}
        </a>
    </li>
);

export default individualNavItems;