import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import ProductContainer from './ProductContainer';
import AddProduct from './AddProduct';
import UrlScrapper from './UrlScrapper';






const App = props => {
  
  return (
    <div>
    <div class='topnav'>  
         <Link to={'/'}>     
            <div class="logoText">
              WishList
            </div>
          </Link>  
          <Link to={'/add'}>
            <div class="linktext"  > 
                Add Product
            </div>
          </Link>
          <Link to={'/scrape'}>  
            <div class="linktext"  >      
              Scrape Testing  
            </div>            
          </Link>
    </div> 

    <div className="router">
    <main>
    <Switch>
      <Route
        exact
        path="/"
        component = {ProductContainer}
      />
      <Route
        exact
        path="/add"
        component = {AddProduct}
      />

      <Route
        exact
        path="/scrape"
        component = {UrlScrapper}
      />
    </Switch>
    </main>
    </div>
    </div>
  );
}
  

  

export default App;
