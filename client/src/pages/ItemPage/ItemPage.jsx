import { commerce } from '../../lib/commerce';
import React, { Component } from 'react';
import BigCard from '../../components/Big Card/BigCard';
import ItemDesc from '../../components/ItemDesc/ItemDesc';
import './ItemPage.scss'

export default class ItemPage extends Component {
    state={
        id: null
    }

fetchProduct() {
    commerce.products.retrieve(this.props.match.params.id).then((product) => 
        this.setState({
            product: product}),
            console.log()
            )}
        
// addToCart() {
//     commerce.cart.add(this.props.match.params.id, 1).then((response) => console.log(response))
//     }

componentDidMount() {
    this.fetchProduct();
        }

render() {
return (
    <>
        <div className="item__container">
            <div className="item__img-container">
                <h1 
                    className="BC__title">{this.state.product?.name}
                </h1>
                <BigCard 
                    itemImage={this.state.product?.assets[0].url} />
            </div>
            <div>
                <ItemDesc 
                    desc={this.state.product?.description}
                    onClick={()=>{this.props.addToCart(this.props.match.params.id)}}
                />
                {/* <button 
                    onClick=}>
                    Add to cart
                </button> */}
            </div>
        </div>
    </>
)}
}

// const commerce = new Commerce('{your_public_key}');