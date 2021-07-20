import React, { Component } from 'react';
import parse from "html-react-parser";
import './ItemDesc.scss'

export default class ItemDesc extends Component {
    
componentDidMount() {
        
    }

render() {
    let description = this.props.desc;

return (
    <div  id="item-desc" >
    <div 
       
        dangerouslySetInnerHTML={{ __html: description }}>       
    </div>
    <button className="item-desc__button"
            onClick={this.props.onClick}>
            Add to cart
        </button>
    </div>
)}
}
