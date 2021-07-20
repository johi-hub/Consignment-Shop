import React, { Component } from 'react';
import './StoreCard.scss';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

export default class StoreCard extends Component {
    render() {
        let description = this.props.desc;
        console.log(description);
return (
    <div className="storecard__container">
        <Card 
            style={{  textAlign: 'center', backgroundColor: '#FFFFFF'   }}>
            <Card.Header>{this.props.name} 
            </Card.Header>

            <Card.Img 
                className="storecard__img"
                variant="bottom" 
                src={this.props.image} />
            <Link 
                className="storecard__desc"
                to={`/${this.props.url}`} >
                <div className="storecard__desc-container "
dangerouslySetInnerHTML={{ __html: description }}>
                </div>
            </Link>

        </Card>
    </div>
        )
    }
}
