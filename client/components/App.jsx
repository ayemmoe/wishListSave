import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import ProductContainer from './ProductContainer';
import AddProduct from './AddProduct';






const App = props => {
  
  return (
    <div>
    <div className='topnav'>  
         <Link to={'/'}>     
            <div className="logoText">
              WishList
            </div>
          </Link>  
          <Link to={'/add'}>
            <div className="linktext"  > 
                Add Product
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

      {/* <Route
        exact
        path="/scrape"
        component = {UrlScrapper}
      /> */}
    </Switch>
    </main>
    </div>
    </div>
  );
}
  

  

export default App;
