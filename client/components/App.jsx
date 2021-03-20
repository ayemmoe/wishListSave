import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route, Redirect} from 'react-router-dom';
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
        this.state = {userLoggedIn:true};
        } else{
          this.state = {userLoggedIn:false}
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
          
    </div> 

    <div className="router">
    
    <main>
    <Switch >
      <Route
        exact
        path="/login"
        component = {Login}        
      />
      <Route
        exact
        path="/"
        component = {MainArea}
      />
      {/* <Route
        exact
        path="/add"
        component = {AddProduct}
      /> */}

      <Route
        exact
        path="/add"
        component = {UrlScrapper}
      />

      <Route
        exact
        path="/signup"
        component = {Signuppage}
      />
      
    </Switch>
    </main>
    {this.state.userLoggedIn ? <Redirect to="/" /> : <Redirect to="login" />}
      
    </div>
    </div>
  );
    }
}

  

  

export default App;
