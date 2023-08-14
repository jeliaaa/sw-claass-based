import { Component } from "react";
import Todo from "./Todo";
import './todo.css'
class TodosPage extends Component {

  state = {
    inputValue: '',
    completedTodos: [],
    thingsTodo: [],
    thingstodoId: -1,
    thingsToDoShow: true,
    completedShow: true
  }

  handleComplete = (id) => {
    const completedTodo = this.state.thingsTodo[id];
    const thingsLeft = this.state.thingsTodo.filter((todo, index) => index !== id);

    this.setState({
      thingsTodo: thingsLeft,
      completedTodos: [...this.state.completedTodos, completedTodo],
    });
  };

  handleAdd = (e) => {
    e.preventDefault();
    const thingToAdd = {
      id: this.state.thingstodoId + 1,
      todo: this.state.inputValue,
    }
    this.setState({
      thingsTodo: [...this.state.thingsTodo, thingToAdd],
      inputValue: '',
      thingstodoId: this.state.thingstodoId + 1
    })
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      inputValue: e.target.value
    })
  }
  handleRemoveCompleted = (id) => {
    const completedThingsLeft = this.state.completedTodos.filter((todo) => todo.id !== id)
    this.setState({
      completedTodos: completedThingsLeft
    })
  }
  toggle = () => {
    this.setState((prevState) => {
      return {
        thingsToDoShow: !prevState.thingsToDoShow
      }
    })
  }

  render() {
    return (
      <>
        <h1>TO DO LIST MADE WITH REACT CLASS BASED COMPONENTS</h1>
        <div className="todos_wrapper">
          <div className="things_todo">
            <button onClick={() => this.toggle()}>{
              this.state.thingsToDoShow ? 'Hide' : 'Show'
            }</button>
            {this.state.thingsToDoShow ? (
              this.state.thingsTodo.map((todo, index) => (
                <Todo key={todo.id} todo={todo.todo} complete={() => this.handleComplete(index)} />
              ))
            ) : (<></>)}

          </div>
          <div className="add_todo">
            <form onSubmit={this.handleAdd}>
              <input value={this.state.inputValue} type="text" placeholder="..." onChange={this.handleChange} />
              <button type="submit">submit</button>
            </form>
          </div>
          <div className="completed_todos">
            {this.state.completedTodos.map((todo) => (
              <Todo key={todo.id} todo={todo.todo} completed={true} removeCompleted={() => this.handleRemoveCompleted(todo.id)} />
            ))}
          </div>
        </div>
      </>
    );
  }

}

export default TodosPage;
