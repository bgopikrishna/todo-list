import React from "react";
import { Button, List, Checkbox } from "semantic-ui-react";

function ShowListItem({ todo, checked, handleTodoCompleted, deleteTodo }) {
  return (
    <List.Item>
      <List.Content floated="right">
        <Button
          size="mini"
          basic
          circular
          compact
          icon="close"
          onClick={() => deleteTodo(todo.id)}
        />
      </List.Content>
      <List.Content>
        <Checkbox
          label={<label className="">{todo.content}</label>}
          checked={checked}
          onChange={() => handleTodoCompleted(todo.id)}
        />
      </List.Content>
    </List.Item>
  );
}

export default ShowListItem;
