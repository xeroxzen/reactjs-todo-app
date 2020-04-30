import React, {Component} from 'react';
import Todos from './components/Todos';
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
        completed: true
      },
      {
        id: 4,
        title: "What's the end game?",
        completed: false
      }
    ]
  }
  render() {
    // console.log(this.state.todos)
    return(
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
