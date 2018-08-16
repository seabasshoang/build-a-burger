import React from 'react';
import classes from './Layout.css';
import Aux from '../../hoc/Aux';

const layout = (props) => (
    <Aux>
    <main className={classes.content}>{props.children}</main>
    </Aux>
);

export default layout;