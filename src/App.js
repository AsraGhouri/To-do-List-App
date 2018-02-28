import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import { Button } from 'react-bootstrap';
class App extends Component {
  constructor(){
    super()
    this.state= {
     todos: []
    }
    this.todoInput= ""
  }
  addTodo(){
    let todoValue = this.todoInput.value
    let newTodos = this.state.todos
    newTodos.push(todoValue)
    this.setState({
      todos: newTodos
    })
    //reset value
    this.todoInput.value = ""
    //set focus to input
    this.todoInput.focus()
  }
  removeTodo(id){
    let todos = this.state.todos.filter((todo, index) =>{
      return id !== index
    })
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div>
        <center>
        
          <h3>React Todo</h3>
          <p>Todo's Count: {this.state.todos.length}</p>
          <input type="text" bsSize="large" ref={(input) => this.todoInput = input}/> 
          <div className="well" style={wellStyles}>
          <hr/>
          <Button bsStyle="success" bsSize="xsmall" onClick={this.addTodo.bind(this)} block>Add</Button>
          <br/>
          </div>
          <div className="List">
          <ul>
            { this.state.todos.map((todo,index)=>{
            return (<Todo id={index} key={index} todo={todo} onRemove={()=> this.removeTodo(index)}/>)

          })}
          </ul>
          </div>
          </center>
      </div>
    );
  }
}
const wellStyles = { maxWidth: 400, margin: '0 auto 10px', }; 


export default App;
