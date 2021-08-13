import React, {Component} from 'react'

export default class Todo extends Component{
    render(){
        let {task} = this.props;

        return(
            <h4>{task}</h4>
        )
    }
}