import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';


class Login extends Component {
 
  render(){
    console.log(this.props.username)
    const {username, password } =this.props
    const clickHandler = (username, password)=> {
      alert(`Your username is: ${username} and your password is: ${password}`)
  
    }

    return (
      <div className="App">
        <button 
          className="confirmationBtn" 
          onClick={()=> {
            clickHandler(username, password)
        }}>
          Login</button>
      </div>
    );

  }
}

export default Login;