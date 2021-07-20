import React, { Component } from 'react'
import { commerce } from '../../lib/commerce';

import './Checkout.scss'
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import Button from 'react-bootstrap/Button';


// commerce.checkout.generateToken('cart_J5aW6Yaxm4nmAw', { type: 'cart' })

//   .then((checkout) => console.log(checkout.id))


// const commerce = new Commerce('{your_public_key}');

// commerce.checkout.capture('chkt_N5YbkWROYQYO2l', {
//   line_items: {
//     item_7RyWOwmK5nEa2V: {
//       quantity: 1,
//       selected_options: {
//         vgrp_p6dP5g0M4ln7kA: 'optn_DeN1ql93doz3ym'
//       }
//     }
//   },
//   customer: {
//     firstname: 'John',
//     lastname: 'Doe',
//     email: 'john.doe@example.com'
//   },
//   shipping: {
//     name: 'John Doe',
//     street: '123 Fake St',
//     town_city: 'San Francisco',
//     county_state: 'US-CA',
//     postal_zip_code: '94103',
//     country: 'US'
//   },
//   fulfillment: {
//     shipping_method: 'ship_7RyWOwmK5nEa2V'
//   },
//   billing: {
//     name: 'John Doe',
//     street: '234 Fake St',
//     town_city: 'San Francisco',
//     county_state: 'US-CA',
//     postal_zip_code: '94103',
//     country: 'US'
//   },
//   payment: {
//     gateway: 'stripe',
//     card: {
//       token: 'irh98298g49'
//     }
//   },
//   pay_what_you_want: '149.99'
// }).then((response) => console.log(response));
export default class Checkout extends Component {
render() {
    return (
    <>
        <div className="checkout__container">
            <CheckoutForm 
                cart={this.props.match.params.id} />
        </div>
    </>
    )
}
}
