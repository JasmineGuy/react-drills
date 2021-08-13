import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';


class App extends Component {

  state={
    groceries: ['tuna', 'bacon', 'celery', 'catnip', 'parsley', 'grapes']
  }
  render(){

    const renderList = ()=> {
      return groceries.map(item => <h2>{item}</h2>)
    }


    const { groceries } = this.state
    return (
      <div className="App">
        {/* { 
          groceries.map(item => <h2>{item}</h2>)
        } */}
        {renderList()}
      </div>
    );

  }
}

export default App;
