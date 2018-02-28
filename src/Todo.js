import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
export default class Todo extends Component{
    render(){
        let {id,todo, onRemove} = this.props
        return(
            <li className="list-group-item">{todo}<Button className="button" bsStyle="success" bsSize="xsmall" onClick={() => onRemove(id)}>Delete</Button></li>
        )
    }
}