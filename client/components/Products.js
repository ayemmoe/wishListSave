import React, { Component } from 'react';
import Productsquare from './Productsquare';
import PropTypes from 'prop-types';
import ProuctData from '../data/products.json';

const Products = (props) => {
  const allinfo = props;
  console.log('inside Products',allinfo.props.length);
  const squareElements = allinfo.props.map((product, i) => (    
     <Productsquare key={i} props={product} />
  ));

  console.log('squareElements',squareElements);
  return (
    <div>
      {squareElements}
    </div>
  );
};



export default Products;
