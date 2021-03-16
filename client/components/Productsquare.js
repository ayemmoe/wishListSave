import React from 'react';


const Productsquare = (props) => {
  const { title, price, image, person,store,_id } = props.props;
  
  
  const deleteProduct = () => {       
    const body = {_id : _id};
    
    fetch('/api/product/:id', {
        method: 'DELETE',
        headers : {
            'Content-Type' : 'Application/JSON'
        },
        body: JSON.stringify(body)
    })
      .then( resp => resp.json())
      .then( data => {
          console.log(data);
      })
      .then( () => {
          //this.props.history.push('/');
          window.location.reload();
      })
      .catch( err => console.log('deleteProduct fetch /api/product Error: ',err))
    }
    //console.log('Error with deleteProduct');
    
  
  
  

  return (
    <div className="square">      
      <img src={image} alt='prouct' />     
      
      <div className="container">
        <div className="text">
          <div className="leftp">{title}</div>     
          <div className="leftp">Price: ${price}</div>
          <div className="rightp">For {person}</div>
          <button>Go To {store}</button>
          <button name="delete" onClick={deleteProduct} >Delete</button>
        </div>
      </div>
    </div>
  );
};



export default Productsquare;
