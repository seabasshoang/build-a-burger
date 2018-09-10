import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

import Burger from '../../Burger/Burger';
import './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className="checkoutSummary">
            <h1>Enjoy your tasty burger!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
                <ButtonToolbar style={{width: '50%', padding: '10px', margin: 'auto'}} >
                    <Button 
                    bsStyle="danger"
                    >CANCEL</Button>
                    <Button 
                    bsStyle="success"
                    >CONTINUE</Button>
                </ButtonToolbar>
        </div>
    );
}

export default checkoutSummary;