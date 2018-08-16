import React from 'react';

const individualNavItems = (props) => (
    <li>
        <a
            href={props.links}>
                {props.children}
        </a>
    </li>
);

export default individualNavItems;