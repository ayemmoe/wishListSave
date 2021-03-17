import React, {Component} from 'react';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
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
        this.props.history.push('/');
    }

    OnSubmit () {        
        if(this.state.username !=='' && this.state.password!==''){
        
        const body = this.state;
        console.log(body);
        fetch('/api/user/verify', {
            method: 'POST',
            headers : {
                'Content-Type' : 'Application/JSON'
            },
            body: JSON.stringify(body)
        })
          .then( resp => {
              console.log(resp);
              resp.json()
            })
          .then( data => {
              console.log(data);
          })
        //   .then( () => {
        //       this.props.history.push('/');
        //   })
          .catch( err => console.log('Login fetch /api/verify Error: ',err))
        }
        console.log('Error with form');
        
    }


    render() {
        return (
            <form>
            <h2>Login</h2>
            <ul>         
              <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleUsernameChange} />            
              <input type="text" name="person" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
              <button type="button" onClick={this.handleCancel}>Back</button>
              <button type="button" onClick={this.OnSubmit}>Submit</button>
            </ul>
        </form>
        );
    }


}


export default Login;