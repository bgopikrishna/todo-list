import React from "react";
import { List, Dimmer, Segment, Loader } from "semantic-ui-react";
import ShowListItem from "./ShowListItem";

function DisplayList({ todolist, handleTodoCompleted, deleteTodo }) {
  const completedList = todolist.filter(todo => todo.completed);
  const unCompletedList = todolist.filter(todo => !todo.completed);

  const renderedList = todolist ? (
    <List relaxed divided verticalAlign="middle">
      {unCompletedList.map(todo => (
        <ShowListItem
          checked={todo.completed}
          key={todo.id}
          todo={todo}
          handleTodoCompleted={handleTodoCompleted}
          deleteTodo={deleteTodo}
        />
      ))}

      {completedList.map(todo => (
        <ShowListItem
          checked={todo.completed}
          key={todo.id}
          todo={todo}
          handleTodoCompleted={handleTodoCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </List>
  ) : (
    <Segment>
      <Dimmer active>
        <Loader indeterminate>We know you hate loading, but....</Loader>
      </Dimmer>
    </Segment>
  );

  return renderedList;
}

export default DisplayList;
