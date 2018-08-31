import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';



class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            cheese: 2,
            bacon: 5,
            meat: 1
        },
        //totalPrice: 4,
        //purchasable: false,
        //purchasing: false
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;