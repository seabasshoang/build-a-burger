import React from 'react';

import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad (+50p)', type: 'salad' },
    { label: 'Bacon (+70p)', type: 'bacon' },
    { label: 'Cheese (+40p)', type: 'cheese' },
    { label: 'Meat (+£1.30)', type: 'meat' }
]

const buildControls = (props) => (
    <div className="BuildControls">
    <p>Price: <strong>£{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}/>
                    
        ))}
        <button 
        className="OrderButton"
        disabled={!props.purchasable}
        onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;