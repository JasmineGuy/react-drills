import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  state={
    groceries: ['tuna', 'bacon', 'celery', 'catnip', 'parsley', 'grapes'],
    list: []
  }
  render(){
    let {groceries } = this.state

    const changeHandler = (value)=> {
      let items = groceries.filter(item => item.includes(value))
      let newItems = items.map((item, index) => <h2 key={index}>{item}</h2>)
      this.setState({list: newItems})
    }
    return (
      <div className="App">
        <input className="inputField" onChange={(e) => changeHandler(e.target.value)}/>
        <div>{this.state.list}</div>
      </div>
    );

  }
}

export default App;
