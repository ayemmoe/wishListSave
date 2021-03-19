import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import MainArea from './MainArea';
import AddProduct from './AddProduct';
import UrlScrapper from './UrlScrapper';
import Signuppage from './Signuppage';
import Login from './Login'; 
    
  


// const App = props => {
  
  class App extends Component {
    constructor(props) {
      super(props);
      if(localStorage.getItem('user_id')){
      this.state = {user_id:JSON.parse(JSON.parse(localStorage.getItem('user_id'))).user_id };
      } else{
          this.state = {user_id: ''}
      }
      
    }
  
    render(){

  
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
    <Switch >
      <Route
        exact
        path="/"
        component = {MainArea}
        // render ={(props) => (
        //   <ProductContainer {...props.user} />
        // )}
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
}

  

  

export default App;
