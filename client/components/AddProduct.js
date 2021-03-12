import React, {useState, useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// const productData = require('../data/products.json');

// const useInput = init => {
//     const [value, setValue] = useState(init);
//     const onChange = e => {
//         setValue(e.target.value);
//     }

//     return [value, onChange];
// }

const AddProduct = props => {
    //const {register, handleSubmit} = useForm();
    const OnSubmit = () => {
        const body = {
            title,
            store,
            person,
            price,
            image
        };

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
              props.history.push('/');
          })
          .catch( err => console.log('AddProduct fetch /api/product Error: ',err))
    
        
    }
    return(
        <h2>Add Product</h2>
        
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

export default AddProduct;