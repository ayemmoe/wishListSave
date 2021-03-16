import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Products from './Products';


function getInitialState() {
  return {
    fetchedProducts : false,
    products: [
      {title:'Toaster',
       price: 79,
       image: "https://m.media-amazon.com/images/I/71rCwRiD8SL._AC_UY218_.jpg",
       person: 'Mom',
       store: 'Amazon',
       _id: 0,
      },     
      
    ],
    
  };
}



class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
    
  }
  
  componentDidMount() {
    fetch('/api/product')
      .then(res => res.json())
      .then( (products) => {
        if (!Array.isArray(products)) products =[];
        return this.setState({
          products,
          fetchedProducts:true
        });
      })
      .catch( err => console.log('App.componentDidMount: get products : ERROR : ', err));
  }

  render() {
    if(!this.state.fetchedProducts) return (
      <div>
        <h1>Loading data, please wait...</h1>
      </div>
    )
    const { products} = this.state;
    
    if (!products) return null;

    if (!products.length) return (
      <div>Sorry, no characters found
        <section className="mainSection">
        <header className="pageHeader">          
          <Link to={'/add'}>
            <button
              type="button"
              className="btnSecondary"
            >
              Add Product
            </button>
          </Link>
        </header>
      </section>
      </div>
    );

    <section className="mainSection">
        <header className="pageHeader">
          <h2>Saved Products</h2>
          <Link to={'/add'}>
            <button
              type="button"
              className="btnSecondary"
            >
              Add Product
            </button>
          </Link>
        </header>
      </section>
    

    return (      
        <div>
            
          <div className="products">
          <Products props={products} />                   
          </div>
        </div>
        
     
      
    );
  }
}

export default ProductContainer;