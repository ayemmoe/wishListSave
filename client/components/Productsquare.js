import React from 'react';
import PropTypes from 'prop-types';

const Productsquare = (props) => {
  const { title, price, image, person,store } = props.props;
  console.log(props);
  return (
    <div className="square">
      <h3>{title}</h3>
      <img src={image} alt='prouct' />
      <hr></hr>
      <label>Price: ${price}</label>
      <label>........................</label>
      <label>For {person}</label>
      <hr></hr>
      <button>Go To {store}</button>
    </div>
  );
};



export default Productsquare;
