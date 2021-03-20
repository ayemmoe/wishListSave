
import React, {Component} from 'react';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
            user:'',
            error: true
            
        }        
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.OnSubmit = this.OnSubmit.bind(this);
    }

    handleUsernameChange(e){
        this.setState({username:e.target.value});        
    }

    
    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    handleCancel(){
        this.props.history.push('/signup');
    }

    OnSubmit (e) {    
        e.preventDefault();
        
        const {username,password} = this.state;
        const {history} = this.props;

        this.setState({error : false});

        if(this.state.username !=='' && this.state.password!==''){
        
        const body = {username: this.state.username, password: this.state.password};
        
        fetch('/api/user/verify', {
            method: 'POST',
            headers : {
                'Content-Type' : 'Application/JSON'
            },
            body: JSON.stringify(body)
        })   
           
          .then( response => response.json())             
              
              //console.log(resp.data)
            //   if(resp.status === 200){
            //       window.location.href = 'http://localhost:8080/';
            //   } else {
            //       console.log( 'error' + resp.status);
            //   }
            
          .then( data => {
              console.log(data);
              this.setState(data);
              //console.log(this.state)
              data = JSON.stringify(data);
              localStorage.setItem('user_id',JSON.stringify(data))
              history.push('/')
              
          })
        
          .catch( err => this.setState({error: true}))
        }
       
        
    }



    render() {
        return (
            <form>
            <h2>Login</h2>
            <ul>         
              <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleUsernameChange} />            
              <input type="text" name="person" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />              
              <button type="button" onClick={this.OnSubmit}>Submit</button>
              <button type="button" onClick={this.handleCancel}>Sign Up</button>
            </ul>
        </form>
        );
    }


}


export default Login;