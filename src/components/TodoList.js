import React from "react";
import DisplayList from "./DisplayList";
import AddTodoForm from "./AddTodoForm";

function TodoList({ list, handleTodoCompleted,deleteTodo,handleChange, textFieldValue, addTodoItem }) {
  return (
    <React.Fragment>
      <DisplayList todolist={list} 
      handleTodoCompleted={handleTodoCompleted}
      deleteTodo={deleteTodo}/>
      <AddTodoForm
        handleChange={handleChange}
        textFieldValue={textFieldValue}
        addTodoItem={addTodoItem}
      />
    </React.Fragment>
  );
}

export default TodoList;
