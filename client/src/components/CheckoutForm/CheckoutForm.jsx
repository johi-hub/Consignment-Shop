import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {commerce} from '../../lib/commerce';
import './CheckoutForm.scss'


export default class CheckoutForm extends Component {
  state = {}
  

  checkout = (e) => {
    e.preventDefault();
    commerce.checkout.capture('chkt_3l8M8jqKY8Z9ew', {
      line_items: 
        this.props.lineItems,
          customer: {
          firstname: `${e.target.FirstName4.value}`,
          lastname: `${e.target.LastName4.value}`,
          email: `${e.target.inputEmail4.value}`
        },
      
          shipping: {
          name: `${e.target.FirstName4.value}` + ' ' + `${e.target.LastName4.value}`,
          street: `${e.target.billAddress.value}`,
          town_city: `${e.target.billCity.value}`,
          county_state: `US-${e.target.billState.value}`,
          postal_zip_code: `${e.target.inputZip.value}`,
          country: 'US'
        },
          fulfillment: {
          shipping_method: 'ship_7RyWOwmK5nEa2V'
        },
          billing: {
          name: `${e.target.FirstName4.value}` + ' ' + `${e.target.LastName4.value}`,
          street: `${e.target.billAddress.value}`,
          town_city: `${e.target.billCity.value}`,
          county_state: `US-${e.target.billState.value}`,
          postal_zip_code: `${e.target.inputZip.value}`,
          country: 'US'
        },
          payment: {
          gateway: 'stripe',
          card: {
            token: 'irh98298g49'
          }
        },
          pay_what_you_want: '149.99'
    }).then((response) => console.log(response))
  }

  render() {
      console.log(this.props.lineItems)
    // console.log(lineItems)
    // console.log(lineItems())

      let statesArray = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];
      // console.log(this.props.cart?.line_items);
    
      let statesOptions = statesArray.map(state => {
        return (<option>{state}</option>)
      });
      // console.log(this.props)
    
      return (
        <div>
          <form
            className="form"
            onSubmit={(e) => { this.checkout(e) }}>
            <div className="form-row">
        
              <div className="form__input--first one-third">
                <label htmlFor="inputEmail4">First Name</label>
                <input
                  type="string"
                  className="form__input--third" id="FirstName4"
                  placeholder="First Name" />
              </div>

              <div className="one-third">
                <label htmlFor="LastName4">Last Name</label>
                <input
                  type="string"
                  className="form__input--third"
                  id="LastName4"
                  placeholder="Last Name" />
              </div>

              <div className="one-third">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form__input--third" id="inputEmail4"
                  placeholder="Email" />
              </div>
            </div>

            <div className="one-line">
              <label htmlFor="inputAddress">Billing Address</label>
              <input type="text"
                className="form-control"
                id="billAddress"
                placeholder="1234 Main St" />
            </div>

            <div className="form-row">
              <div className="form-group one-quarter">
                <label htmlFor="billAddress2">Apt/Studio/Floor</label>
                <input type="text"
                  className="form-control"
                  id="billAddress2"
                  placeholder="Apt, studio, or floor" />
              </div>

              <div className="one-quarter">
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="billCity" />
              </div>

              <div className="one-quarter">
                <label htmlFor="billState">State</label>
                <select
                  id="billState"
                  className="form-control"
                defaultValue="Choose...">
                 
                  {statesOptions}
                </select>
              </div>

              <div className="one-quarter">
                <label htmlFor="billZip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip" />
              </div>
            </div>

            <div className="one-line form-group">
              <label htmlFor="inputAddress">Shipping Address</label>
              <input
                type="text"
                className="form-control"
                id="shipAddress"
                placeholder="1234 Main St" />
            </div>

            <div className="form-row">
              <div className="form-group one-quarter">
                <label htmlFor="shipAddress2">Apt/Studio/Floor</label>
                <input
                  type="text"
                  className="form-control"
                  id="shipAddress2"
                  placeholder="Apt, studio, or floor" />
              </div>

              <div className="one-quarter">
                <label htmlFor="shipCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="shipCity" />
              </div>

              <div className="one-quarter">
                <label htmlFor="shipState">State</label>
                <select
                  id="shipState"
                  className="form-control"
                defaultValue="Choose...">
                  {statesOptions}
                </select>
              </div>

              <div className="one-quarter">
                <label htmlFor="shipZip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="shipZip" />
              </div>
            </div>

            <div className="form-group bottom">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck" />
                <label
                  className="form-check-label"
                  htmlFor="gridCheck"> Check here if Shipping address is same as Billing Address
          </label>
              </div>
            </div>
      
            <button
              type="submit"
              className="btn btn-primary">Submit Order
      </button>
          </form>
        </div>
      )
    }
  }
