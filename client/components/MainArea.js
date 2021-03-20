import React, { Component, useEffect } from 'react';
import {Link} from 'react-router-dom';
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
    this.handleLogout = this.handleLogout.bind(this);

    }

    
    handleLogout(){
      //const history = useHistory();
      localStorage.clear();
      this.props.history.push('/login');
    }

    
     


    render(){
        const user = this.state.user_id;
        
    return(
        <div>  
          <div className="mainNav">
          <Link to={'/add'}>
            <div className="linktext"  > 
                Add Product
            </div>
          </Link>
          {/* <Link to={'/scrape'}>  
            <div className="linktext"  >      
              Scrape Testing  
            </div>            
          </Link>
          <Link to={'/signup'}>  
            <div className="linktext"  >      
              SignUp  
            </div>            
          </Link>
          <Link to={'/'}>  
            <div className="linktext"  >      
              Products 
            </div>            
          </Link> */}
          <button className= "linktext" id="logout" onClick={this.handleLogout}>Logout</button>           
          </div>    
          
          <div className="products">
          <ProductContainer props={user} />                   
          </div>
        </div>
    )}

}

export default MainArea;