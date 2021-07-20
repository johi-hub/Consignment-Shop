import React, { Component } from 'react';
import './LandingPage.scss'

export default class LandingPage extends Component {
    render() {
        return (
            <div className="landing__container">
                <img 
                className="landing__hero-img"
                src="../../assets/Storefront.jpg"
                alt="storefront" />
                <h1 className="landing__title">{this.props.name || "Consignment Shop"}</h1>
                <p className="landing__desc">{this.props.description || "Ye Olde consignment shop was founded in 1800 when some settlers needed a place to do some things so they decided to set up a shop. Margaret McUnicorn and her husband Cherry Berry Bo-Berry were the first people to start selling their stuff at this shop, and it’s been a huge  success ever since."}</p>
            </div>
        )
    }
}
