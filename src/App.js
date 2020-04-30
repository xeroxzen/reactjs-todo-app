import React, {Component} from 'react';
import Todos from './components/Todos';
import HeaderItem from './components/layout/HeaderItem'
// import TodoItem from './components/TodoItem';
import './App.css';

class App extends Component {

  state = {
    todos:[
      {
        id: 1,
        title: 'Take out the trash',
        completed: false

      },
      {
        id: 2,
        title: "Let's code",
        completed: false
      },
      {
        id: 3,
        title: 'Happy Hacking',
        completed: false
      },
      {
        id: 4,
        title: "What's the end game?",
        completed: false
      }
    ]
  }

  // Toggle Complete 
  markComplete = (id) =>{
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  render() {
    return(
      <div className="App">
        <HeaderItem />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo } />
      </div>
    );
  }
}

export default App;
