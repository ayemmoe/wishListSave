import React,{Component} from 'react';


class Productsquare extends Component {
  constructor(props) {
    super(props);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteProduct () {       
    const body = {_id : this.props.props._id};    
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
        //this.props.history.push('/products');
        window.location.reload('/');
      })
      .catch( err => console.log('deleteProduct fetch /api/product Error: ',err))
    }

  render(){
  const { title, price, image, person,store,_id } = this.props.props;
  
  return (
    <div className="square">      
      <img src={image} alt='prouct' />     
      
      <div className="container">
        <div className="text">
          <div className="leftp">{title}</div>     
          <div className="leftp">Price: ${price}</div>
          <div className="rightp">For {person}</div>
        </div>
      </div>
      <button id="buy">Buy at {store}</button>
      <button id="delete" onClick={this.deleteProduct} >Delete</button>
    </div>
  );
};

}



export default Productsquare;
