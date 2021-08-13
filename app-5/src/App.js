import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Image from './components/Image'


export default class App extends Component{
  
  render(){
    
    return (
      <div className="App">
        <Image url={'https://en.bcdn.biz/Images/2018/6/12/27565ee3-ffc0-4a4d-af63-ce8731b65f26.jpg'}/>
      </div>
    );

  };
}

