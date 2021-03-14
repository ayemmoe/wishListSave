import React from 'react';
import PropTypes from 'prop-types';

const Productsquare = (props) => {
  const { title, price, image, person,store } = props.props;
  console.log(props);
  return (
    <div className="square">      
      <img src={image} alt='prouct' />     
      
      <div className="container">
        <div className="text">
          <leftp>{title}</leftp>     
          <leftp>Price: ${price}</leftp>
          <rightp>For {person}</rightp>
          <button>Go To {store}</button>
        </div>
      </div>
    </div>
  );
};



export default Productsquare;
