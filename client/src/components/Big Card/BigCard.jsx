import React, { Component } from 'react';
import './BigCard.scss'
import Card from 'react-bootstrap/Card';

export default class BigCard extends Component {
render() {
  return (
    <>
      <div  className="BC">
        <Card>
          <Card.Img className="bigCard__image" variant="top" 
          src={this.props.itemImage}/>
        </Card>
      </div>
    </>
  )
}}
