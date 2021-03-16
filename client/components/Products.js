import React, { Component } from 'react';
import Productsquare from './Productsquare';


const Products = (props) => {
  const allinfo = props;
  
  const squareElements = allinfo.props.map((product, i) => (    
     <Productsquare key={i} props={product} />
  ));

  
  return (
    <div>
      {squareElements}
    </div>
  );
};



export default Products;
