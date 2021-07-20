import React, { Component } from 'react'
import { commerce } from '../../lib/commerce';
import ItemCard from '../../components/Item Card/ItemCard';
import './Shop1.scss';
require('dotenv').config();
// commerce.categories.list().then((category) => console.log(category.name));

export default class Shop1 extends Component {
    state={
    products: []
    }

addToCart(id) {
  commerce.cart.add(id, 1).then((response) => console.log(response))
}

fetchProducts = () => {
  commerce.products.list({category_id: [this.props?.storeId],}).then((products) => {
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
  let productCards = this.state.products?.map(item => {
      return <ItemCard 
              id={item.id} 
              key={item.id} 
              image={item.assets[0].url} 
              name={item.name} 
              price={item.price.formatted_with_symbol} 
              addToCart={()=>{this.addToCart(item.id)}} 
              />})
return (
  <div className="shop">
    <div className="shop__titlecontainer">
      <h1 className='shop__title'>{this.props.title}
      </h1>
      {/* <div className="storecard__desc-container "
dangerouslySetInnerHTML={{ __html: description }}>
                </div> */}
      {/* <p className="shop__description">
        This is John’s Jewelry Page.  A little  bitty about what makes John so great and why you should buy his jewelry.  Don’t cha know he has been selling these jewels for
        decades and it’s the very best most top of the line stuff.  You should buy all of John’s jewelry because he isn’t just legit.  He is 2 legit.  He is 2 legit to quit.  And so He’s just gonna keep on sellin’ it to you for as long as you will buy it.
      </p> */}
    </div>
    <div className="shop__card-container">
        {productCards} 
    </div>
  </div>
    )
}
}
