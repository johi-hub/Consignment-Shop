import React, { Component} from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Userfront from "@userfront/react";
import LandingPage from './pages/LandingPage/LandingPage';
import Header from './components/Header/Header';
import ProtectedRoute from "./protectedroutes/ProtectedRoutes";
import SideBar from './components/SideBar/SideBar';
import Shop1 from './pages/Shops/Shop1';
import Signup from './components/Signup/Signup.jsx';
import AboutUs from "./pages/AboutUs/AboutUs.jsx"
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import ItemPage from './pages/ItemPage/ItemPage';
import { commerce } from '../src/lib/commerce';
import OurShops from './pages/OurShops/OurShops.jsx';
import axios from 'axios';

require("dotenv").config();

Userfront.init("wn9965n5");

const SignupForm = Userfront.build({
  toolId: "bmrlnk",
});
console.log(Userfront.build)

const LoginForm = Userfront.build({
  toolId: "ldkoaa",
});

const LogoutButton = Userfront.build({
  toolId: "naornr",
});

const PasswordResetForm = Userfront.build({
  toolId: "klnram",
});
export default class App extends Component {

  state={
    items: null,
    update: null
  }

  // fetchProducts = (storeId) => {
  //   commerce.products.list({category_id: [storeId],}).then((products) => {
  //     this.setState({products: products.data})
  //     console.log(products)
  //   })
  //   .catch((error) => {
  //     console.log('There was an error fetching the products', error);
  //   });
  // }
  fetchStores (){
    commerce.products.list({category_id: ['cat_kd6Ll2mPE5V2mj'],}).then((stores) => {
      this.setState({stores: stores.data})
      console.log(this.state.stores);
    })
    .catch((error) => {
      console.log('There was an error fetching the products', error);
    });
  }
getCart() {
  commerce.cart.retrieve().then((cart) => {
    
    this.setState({
      cart:cart
    })
  })
    .catch((error) => {
      console.log('There was an error fetching cart', error);
    })
  }

  addToCart(id) {
    commerce.cart.add(id, 1).then((response) => 
    console.log(response)
    )
  }

componentDidMount(){
    this.getCart();
    this.fetchStores();
    // axios
    // .get("http://localhost:8080/stores")
    // .then(result=>{
    //   console.log(result)
    // })
    // .catch(err=>{
    //   console.log(err)
    // })
    }
  

componentDidUpdate(prevProps, prevState) {
  if(this.state.cart != prevState.cart) {
console.log(this.state.cart, "thisstate", prevState.cart, "prevstate")
  }
}

render() {
  // let storeRoutes = this.state.stores?.map(store => {
  //   return (

  //           <ProtectedRoute 
  //               exact path={store.seo.title}
                
  //               render={(routeProps)=> (
  //               <Shop1
  //                 title={store.name}
  //                 storeId={store.seo.description}
  //                 products={this.state.products}
  //                 addToCart={this.addToCart}
  //                 fetchProducts={this.fetchProducts} 
  //                 {...routeProps} /> )} />
  // )});
  // console.log(storeRoutes);


  return (
    <div className="landingpage">
      <Router className="App">
        <Header 
          cart={this.state.cart} />
        <div className="app__container">
          <SideBar />
          <div className="app__login-form">
            <Switch>          
              <ProtectedRoute
                exact path="/"
                render={() => (
                <LandingPage
                  logoutButton={LogoutButton} /> )} />
              <Route 
                exact path ="/about" 
                component={AboutUs} />
              <Route 
                exact path="/login" 
                component={LoginForm} />
              <Route 
                exact path="/password-reset" 
                component={PasswordResetForm} />
              <Route 
                exact path="/register" 
                component={Home} />
              <ProtectedRoute 
                exact path="/cart" 
               
                     render={(routeProps)=> (
                <Cart
                getCart={this.getCart} 
                cart={this.state.cart} 
                  {...routeProps} /> )} /> 
                  {/* <Route 
                path='/cart' 
                render={(routeProps) => 
                <Cart 
                  getCart={this.getCart}
                  {...routeProps}  />} /> */}
              <Route 
                exact path="/shops" 
                component={OurShops} />
              <Route 
                exact path="/checkout/:id" 
                component={Checkout} />
              <Route 
                path='/item/:id' 
                render={(routeProps) => 
                <ItemPage  
                  addToCart={this.addToCart}
                  {...routeProps}  />} />

              {/* {storeRoutes} */}
              <ProtectedRoute 
                exact path="/johnsjewelry" 
                render={(routeProps)=> (
                <Shop1
                  title="John's Jewelry"
                  storeId="cat_VKXmwD4GnwrgDA"
                  products={this.state.products}
                  addToCart={this.addToCart}
                  fetchProducts={this.fetchProducts} 
                  {...routeProps} /> )} />
              <ProtectedRoute 
                exact path="/sarasclothing" 
                
                render={(routeProps)=> (
                <Shop1 
                  title="Sara's Clothing"
                  storeId="cat_4OANwROLYovYL8"
                  addToCart={this.addToCart} {...routeProps} /> )} />
              <ProtectedRoute 
                exact path="/franksfurniture" 
                
                render={(routeProps)=> (
                <Shop1 
                  title="Frank's Furniture"
                  storeId="cat_yA6nldg735EWbz"
                  addToCart={this.addToCart} {...routeProps} /> )} />
              <ProtectedRoute 
                exact path="/ygrettesgotcollection"
                 
                render={(routeProps)=> (
                  <Shop1 
                  title="Ygrette's Game Of Thrones Collection"
                  storeId="cat_VPvL5zjZK5AQkX"
                  addToCart={this.addToCart} {...routeProps} /> )} />
              <ProtectedRoute 
                exact path="/loraslamp" 
                
                render={(routeProps)=> (
                <Shop1 
                title="Lora's Lamps"
                storeId="cat_nPEVlNGrxwa7dM"
                addToCart={this.addToCart} {...routeProps} /> )} />
              <ProtectedRoute 
                exact path="/timmysfancyclothes"
                
                render={(routeProps)=> (
                <Shop1 
                title="Timmy's Fancy Clothes"
                storeId="cat_9BAmwJn0VweXdn"
                addToCart={this.addToCart} {...routeProps} /> )} />
              <ProtectedRoute 
                exact path="/nicksknickknacks" 
                
                render={(routeProps)=> (
                <Shop1 
                title="Nick's Knick-Knacks"
                  storeId="cat_mOVKl46YNoprRP"
                addToCart={this.addToCart} {...routeProps} /> )} />
              <ProtectedRoute 
                exact path="/thestorestore" 
                
                render={(routeProps)=> (
                <Shop1 
                title="The Store Store"
                storeId="cat_ZM8X5nqxvopv4q"
                addToCart={this.addToCart} {...routeProps} /> )} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
);
}}

function Home() {
  return (
    <div>
      <SignupForm />
    </div>
  );
}