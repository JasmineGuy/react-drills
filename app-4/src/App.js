import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import Login from './components/Login'

class App extends Component {

 state={
   username: '',
   password: ''
 }
  render(){
  const setUsername = (value) => {
    this.setState({username: value})
  }

  const setPassword = (value) => {
    this.setState({password: value})
  }
 
    return (
      <div className="App">
        <input placeholder="username"onChange={((e)=> {
          setUsername(e.target.value)
        })}/>
         <input placeholder="password"onChange={((e)=> {
          setPassword(e.target.value)
        })}/>
        <Login 
          username = {this.state.username}
          password = {this.state.password}

        />
      </div>
    );

  }
}

export default App;
