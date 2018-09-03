import React from 'react';

import Aux from '../../../hoc/Aux';
import { Button, ButtonToolbar} from 'react-bootstrap';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
                    </li>
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Here's your burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: £{props.price.toFixed(2)}</strong></p>
            
            <ButtonToolbar>
                <Button 
                    bsStyle="danger"
                    onClick={props.modalClosed}>RETURN TO BURGER BUILDER</Button>
                <Button 
                    bsStyle="success"
                    onClick={props.purchaseContinued}>CONTINUE TO CHECKOUT</Button>
            </ButtonToolbar>
        </Aux>
    );
}; 

export default orderSummary;