import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Image from './components/Image'


export default class App extends Component{
  
  render(){
    
    return (
      <div className="App">
        <Image url={'https://i.ytimg.com/vi/gUIJ-UkQsXI/maxresdefault.jpg'}/>
      </div>
    );

  };
}

