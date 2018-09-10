import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

import './ContactData.css';

class ContactData extends Component {
 state = {
     name: '',
     email: '',
     address: {
         street: '',
         postCode: ''
     }
 }
orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);  
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