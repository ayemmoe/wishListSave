import React, { Component ,useState, useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// const productData = require('../data/products.json');

const useInput = init => {
    const [value, setValue] = useState(init);
    const onChange = e => {
        setValue(e.target.value);
    }

    return [value, onChange];
}
const getInitialState = () => {
    return({
    title: '',
    store: '',
    person: '',
    price : '',
    image : ''
    })
}

class AddProduct extends Component {
    constructor(props) {
      super(props);
      this.state = getInitialState();
      this.OnSubmit = this.OnSubmit.bind(this);
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleStoreChange = this.handleStoreChange.bind(this);
      this.handlePersonChange = this.handlePersonChange.bind(this);
      this.handlePriceChange = this.handlePriceChange.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
      
    }


   handleTitleChange(e){
       this.setState({title:e.target.value})
   }

   handleStoreChange(e){
    this.setState({store:e.target.value})
   }

   handlePersonChange(e){
    this.setState({person:e.target.value})
   }
   
   handlePriceChange(e){
    this.setState({price:parseInt(e.target.value)})
   }

   handleImageChange(e){
    this.setState({image:e.target.value})
   }

   handleCancel(){
       this.props.history.push('/');
   }

    OnSubmit () {
        if(this.state.title !=='' && this.state.store!=='' && this.state.price!=='' && this.state.person !=='' && this.state.image !==''){
        const body = this.state;
        console.log(body);
        fetch('/api/product', {
            method: 'POST',
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
              this.props.history.push('/');
          })
          .catch( err => console.log('AddProduct fetch /api/product Error: ',err))
        }
        console.log('Error with form');
        
    }

    render(){
        <div class='topnav'>         
          <div class="logoText">
            WishList
          </div>
  
          <Link to={'/add'}>
            <div class="linktext"  > 
                Add Product
            </div>
          </Link>
          <Link to={'/scrape'}>  
            <div class="linktext"  >      
              Scrape Testing  
            </div>            
          </Link>
        </div> 
    return(
        
        
        
        <form>
            <h2>Add Product Info</h2>
            <ul>         
              <input type="text" placeholder="Title of product" name="title" value={this.state.title} onChange={this.handleTitleChange} />            
              <input type="text" name="store" placeholder="Name of the Store" value={this.state.store} onChange={this.handleStoreChange} />
              <input type="text" name="person" placeholder="Name of Person" value={this.state.person} onChange={this.handlePersonChange} />
              <input type="text" name="price" placeholder="Price" value={this.state.price} onChange={this.handlePriceChange} />
              <input type="text" name="image" placeholder="URL of Image" value={this.state.image} onChange={this.handleImageChange} />
              <button type="button" onClick={this.handleCancel}>Back</button>
              <button type="button" onClick={this.OnSubmit}>Submit</button>
            </ul>
        </form>
        
        
        // <form >
            
        //     <input name="title" ref={register} placeholder="Product Title" />
        //     <input name="person" ref={register} placeholder="Name of Person" />
        //     <input name="store" ref={register} placeholder="Store Name" />
        //     <input name="image" ref={register} placeholder="Image URL" />
        //     <input name="price" ref={register} placeholder="Price" />
            
        //     <input type="submit" />
        // </form>
        

        )
    }
}

export default AddProduct;