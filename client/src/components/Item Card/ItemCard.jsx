import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './ItemCard.scss';
import {Link} from 'react-router-dom';


export default class ItemCard extends Component {
render() {
return (
  <div 
    className="card__container" 
    onClick={this.props.onClick}>
      <Card className="itemcard">
        <Card.Img 
          className="card__image" 
          variant="top" 
          src={this.props.image} />
        <Card.Body>
          <div className="card__text">
            <Card.Title>{this.props.name}
            </Card.Title>
            <Card.Title>{this.props.price}
            </Card.Title>
          </div>
        </Card.Body>
        {/* <div className="overlay">
        </div> */}
        <div className="btn__container ">
          <Link 
            className="itemcard__btn"
            to={`/item/${this.props.id}`} >Product Details 
          </Link>
          <button 
            onClick={this.props.addToCart}
            className="itemcard__btn2">Add To Cart
          </button>
        </div>
      </Card>
  </div>
)
}
}
