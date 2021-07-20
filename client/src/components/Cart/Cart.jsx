import React, { Component } from 'react'
import Commerce from '@chec/commerce.js';
import { commerce } from '../../lib/commerce';
import Table from 'react-bootstrap/Table';
import './Cart.scss';
import {Link} from 'react-router-dom';
import CheckoutForm from '../CheckoutForm/CheckoutForm';


commerce.cart.retrieve().then((cart) => console.log(cart));
commerce.checkout.generateToken('cart_roEgABgrV9ZV3l',{ type: 'cart' })
  .then((checkout) => console.log(checkout.id))



export default class Cart extends Component {
    state = { cart: this.props.cart }
    
    // getCart() {commerce.cart.retrieve().then((cart) => {
    //     this.setState({
    //     cart:cart
    //     })})
    //     .catch((error) => {
    //     console.log('There was an error fetching cart', error);
    //     })
    // }
    //  lineItems() {
      
    //   }
    componentDidMount() {
        this.props.getCart();
        // console.log(this.props)
        // console.log(this.state, "state of cart page")
    }
    
    componentDidUpdate() {

    }
    render() {
        let lineItems = this.state.cart?.line_items.map((item) => {
            console.log(this.state.cart.line_items, item.id, [item.id]);
            return ({
                [item.id] : {
        
                    quantity: `${item.quantity}`,
                        selected_options: `${item.selected_options}`
                }
            }
        )
    }
        );
        // console.log(lineItems)
let cartItems = this.props.cart?.line_items.map((item, i) => {
return (
<tr key={item.id}>
    <td>{i+1}</td>
    <td>
        <img 
            className="cart__table-image" 
            src={item.media.source} />
    </td>
    <td>{item.name}</td>
    <td>{item.price.formatted_with_symbol}</td>
    <td>x{item.quantity}</td>
    <td>${item.price.formatted * item.quantity}
    </td>
    <td>
        <button onClick={()=>{commerce.cart.remove(item.id).then((response) => console.log(response));
        this.props.getCart();
        console.log(this.state, "CARTSTATE")}}>Remove from Cart</button>
    </td>
    </tr>)})
return (
<>
    <h1>Your Cart</h1>
    <Table 
    striped borderless hover className="cart__table">
        <thead>
            <tr>
                <th className="cart__th">#</th>
                <th className="cart__th">Image</th>
                <th className="cart__th">Name</th>
                <th className="cart__th">Price per unit
                </th>
                <th className="cart__th">Quantity</th>
                <th className="cart__th">Price</th>
                <th className="cart__th">Remove from Cart</th>
            </tr>
        </thead>
        <tbody>
            {cartItems}
        </tbody>
    </Table>
    <CheckoutForm
    cart={this.state.cart} lineItems={lineItems} ></CheckoutForm>
    {/* <Link 
        cart={this.state?.cart}
        to={`/checkout/${this.state.cart?.id}`}>Checkout
    </Link> */}
</>
)}
}
