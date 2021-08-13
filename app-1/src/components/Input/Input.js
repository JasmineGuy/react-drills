import React, {Component}  from "react";

export default class Input extends Component{

    state={
        userInput: ''
    }
    render(){
        console.log('userInput:', this.state.userInput)
        return(
            <div>
                <input 
                    className="inputField"
                    onChange={(e) => {
                        this.setState({userInput: e.target.value})
                    }}
                />
                <div>{this.state.userInput}</div>
            </div>
        )
    }
}