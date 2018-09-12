import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

import './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
 state = {
     name: '',
     email: '',
     address: {
         street: '',
         postCode: ''
     },
     loading: false
 }
orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);  
    this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Sylvia Hoang',
                address: {
                    street: 'example street',
                    postCode: '123 ABC',
                    city: 'London'
                },
                email: 'example@email.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('orders.json', order)
             .then(response => {
                 this.setState({ loading: false });
             })
             .catch(error => {
                 this.setState({ loading: false });
             });
}

 render () {
     return (
         <div className="ContactData">
             <h4>Enter your Contact Details</h4>
             <form className="Input">
                 <input type="text" name="name" placeholder="Your Name" />
                 <input type="email" name="email" placeholder="Your Email" />
                 <input type="text" name="street" placeholder="Street Name" />
                 <input type="text" name="postcode" placeholder="Post Code" />
                <ButtonToolbar style={{margin: '10px auto', width: '50%'}}>
                    <Button bsStyle="success" onClick={this.orderHandler}>PLACE ORDER</Button>
                </ButtonToolbar>
             </form>
         </div>
     );
 }
}

export default ContactData;