import React, { Component, useEffect } from 'react';
import ProductContainer from './ProductContainer';


function getInitialState() {
    return {
      user_id: ''      
    };
  }

class MainArea extends Component {
    constructor(props) {
      super(props);
      if(localStorage.getItem('user_id')){
      this.state = {user_id:JSON.parse(JSON.parse(localStorage.getItem('user_id'))).user_id };
      } else{
        this.state = {user_id: ''}
      }
      
    }

    
    // componentDidMount(){        
    //     const loggedInuser = localStorage.getItem('user_id');
    //     if(loggedInuser){
    //     const user_id = JSON.parse(JSON.parse(loggedInuser));
    //     console.log("console log user_Id",user_id)
        
    //     return this.setState({user_id})
    //     }
        
    // }

    


    render(){
        const user = this.state.user_id;
        
    return(
        <div>            
          <div className="products">
          <ProductContainer props={user} />                   
          </div>
        </div>
    )}

}

export default MainArea;