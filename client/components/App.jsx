import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import ProductContainer from './ProductContainer';
import AddProduct from './AddProduct';
import UrlScrapper from './UrlScrapper';
import Signuppage from './Signuppage';
import Login from './Login';






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
          <Link to={'/scrape'}>  
            <div className="linktext"  >      
              Scrape Testing  
            </div>            
          </Link>
          <Link to={'/signup'}>  
            <div className="linktext"  >      
              SignUp  
            </div>            
          </Link>
          <Link to={'/login'}>  
            <div className="linktext"  >      
              Login 
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

      <Route
        exact
        path="/signup"
        component = {Signuppage}
      />
      <Route
        exact
        path="/login"
        component = {Login}
      />
    </Switch>
    </main>
    </div>
    </div>
  );
}
  

  

export default App;
