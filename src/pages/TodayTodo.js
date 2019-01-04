import React, { Component } from "react";
import TodoList from "../components/TodoList";

export class TodayTodo extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "Buy some milk",
        completed: false
      },
      {
        id: 2,
        content: "Go To Groccey store",
        completed: false
      },
      {
        id: 3,
        content: "Complete Cooking",
        completed: true
      },
      {
        id: 4,
        content: "Buy a Keyboard",
        completed: true
      },
      {
        id: 5,
        content: "Watch a movie",
        completed: false
      },
      {
        id: 6,
        content: "Go for a walk",
        completed: false
      }
    ],
    textFieldValue: ""
  };

  handleChange = e => {
    this.setState({
      textFieldValue: e.currentTarget.value
    });
  };
  addTodoItem = e => {
    e.preventDefault();
    const { textFieldValue, todos } = this.state;
    if (textFieldValue) {
      const newTodo = {
        id: Math.random(),
        content: textFieldValue,
        completed: false
      };
      this.setState({
        todos: [...todos, newTodo],
        textFieldValue: ""
      });
    } else {
      alert("Mmm.. Todo can't be empty");
    }
  };

  handleTodoCompleted = id => {
    const { todos } = this.state;
    const newTodos = todos.map(todo => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: newTodos
    });
  };

  deleteTodo = id => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => todo.id !== id);
    this.setState({
      todos: newTodos
    });
  };

  render() {
    const { todos, textFieldValue } = this.state;
    return (
      <div className="todo-list">
        <TodoList
          list={todos}
          handleTodoCompleted={this.handleTodoCompleted}
          deleteTodo={this.deleteTodo}
          handleChange={this.handleChange}
          textFieldValue={textFieldValue}
          addTodoItem={this.addTodoItem}
        />
      </div>
    );
  }
}

export default TodayTodo;
