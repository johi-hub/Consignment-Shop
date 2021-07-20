import React, { Component } from 'react';
import StoreCard from '../../components/StoreCard/StoreCard';
import {commerce} from '../../lib/commerce';
import './OurShops.scss';


commerce.categories.list().then((category) => console.log(category, "CONSOLE LOG CATS"));

export default class OurShops extends Component {
    state={stores: null}


    fetchProducts = () => {
        commerce.products.list({category_id: ['cat_kd6Ll2mPE5V2mj'],}).then((products) => {
          this.setState({products: products.data})
          console.log(products)
        })
        .catch((error) => {
          console.log('There was an error fetching the products', error);
        });
      }

      componentDidMount() {
          this.fetchProducts();
      }
    render() {
        console.log(this.state?.products);
        let storeCards = this.state.products?.map(store => {
        return <StoreCard 
                id={store.id} 
                key={store.id} 
                image={store.assets[0].url} 
                name={store.name} 
                desc={store.description}
                url={store.seo.title}
                />})
        return (
            <div className="stores__container">
                {storeCards}
            </div>
        )
    }
}
