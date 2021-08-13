import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

export default class App extends Component {

  state={
    input: '',
    list: []
  }
  render(){
    console.log('STATE: ', this.state.list)
    const handleChange =(value) => {
      this.setState({input: value})
    }

    const addToList =(input)=> {
      let list = []
      console.log("INPUT:", input)
      list.push(input)
      this.setState({list: list})
    
  
    }

    // input onchange set state of input to value of input
    // button click push state input value into state list
  
    return (
      <div className="App">
          <h2>My to-do List</h2>
          <input className="inputField" onChange={(e)=> {
            handleChange(e.target.value)
          }}/>
          <button onClick={()=> {
            addToList(this.state.input)
          }}>Add</button>
          
          {
            this.state.list.map((item,index) => {
              return(
                // <h4 key={index}>{item}</h4>
                <Todo 
                  key={index}
                  task={item} 
                />
              ) 
              })
          } 
      </div>
    );
  }
}


