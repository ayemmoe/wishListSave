import React, { Component } from 'react';
import rp from "request-promise";
import cheerio from "cheerio";
import {Checkmark} from 'react-checkmark';

class UrlScrapper extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            title : '',
            store: '',
            person: '',
            price : 0,
            image : '',
            URL: '',
            user_id:'',
            scrapedone: false,
        }      

        if(localStorage.getItem('user_id')){
            this.state.user_id = JSON.parse(JSON.parse(localStorage.getItem('user_id'))).user_id;
        } 
            
            
        console.log('we are in urlscrapper');
        console.log(this.state)
        this.handleURLChange = this.handleURLChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handlePersonChange = this.handlePersonChange.bind(this);
        this.OnSubmit = this.OnSubmit.bind(this);
        this.onScrape = this.onScrape.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this);
    }

    handleURLChange(e){
        this.setState({URL:e.target.value})
        
    }

    handlePersonChange(e){
        this.setState({person:e.target.value})
       }

    handlePriceChange(e){
    this.setState({price:e.target.value})
    }
 
    handleCancel(){
        this.props.history.push('/');
    }

    

    onScrape(){
        rp("https://thingproxy.freeboard.io/fetch/"+this.state.URL)
        .then( (html) => {
            //console.log(html);
            return cheerio.load(html);})
        .then( $ => {
            
            const Store = this.state.URL.match(/www.(.*).com/).pop().toUpperCase();

            switch(Store){
                case 'AMAZON': {
                    const Title =$("#productTitle").prepend().text().trim();
                    const getPrice = $("#priceblock_ourprice").prepend().text().trim();
                    const Image = $("#imgTagWrapperId img").attr('src');
                    const Price = getPrice.replace('$','');
                    console.log("Title",Title);
                    console.log("Price", Price);
                    console.log("image",Image);
                    this.setState({
                        title: Title,
                        price: parseInt(Price),
                        image: Image,
                        store: Store,
                        scrapedone: true
                    })

                }
                break;

                case 'TARGET': {
                    var obj =$("script[type='application/ld+json']");
                    var data = JSON.parse(obj[0].children[0].data);
                    const Title =data['@graph'][0].name;
                    
                    const Image = data['@graph'][0].image;
                    //const Price = getPrice.replace('$','');
                    console.log("Title",Title);
                    console.log("image",Image);
                    this.setState({
                        title: Title,
                        image: Image,
                        store: Store,
                        scrapedone: true
                    })

                }
                break;
            }

            
            
            
            
            
            
            
        })
    }

    OnSubmit () {        
        if(this.state.URL !=='' && this.state.person!=='' ){        
        const body = this.state;
        console.log(body);
        fetch('/api/product/add', {
            method: 'POST',
            headers : {
                'Content-Type' : 'Application/JSON'
            },
            body: JSON.stringify(body)
        })
          .then( resp => resp.json())
          .then( data => {
              console.log('inside the post method',data);
          })
          .then( () => {
              this.props.history.push('/');
          })
          .catch( err => console.log('AddProduct fetch /api/product Error: ',err))
        }
        console.log('Error with form');
        
    }

    render() {
        return (
            <form>
            <h2>Add Product Info<span>{this.state.scrapedone ? <Checkmark size="30px" /> :null} </span></h2>
            <ul>                      
              <input type="text" placeholder="Enter URL " name="url" value={this.state.URL} onChange={this.handleURLChange} />            
              <input type="text" name="person" placeholder="Name of Person" value={this.state.person} onChange={this.handlePersonChange} />
              <input type="text" name="price" placeholder="Price" value={this.state.price} onChange={this.handlePriceChange} />
              <button type="button" onClick={this.handleCancel}>Back</button>
              <button type="button" onClick={this.onScrape}>Extract</button>              
              <button type="button" onClick={this.OnSubmit}>Submit</button>
            </ul>
        </form>
        );
    }


}




export default UrlScrapper;