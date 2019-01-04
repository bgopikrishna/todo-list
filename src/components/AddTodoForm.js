import React from "react";
import { Input, Button } from "semantic-ui-react";

function AddTodoForm({ handleChange, textFieldValue, addTodoItem }) {
  return (
    <div className="addTodo">
      <form onSubmit={addTodoItem}>
        <Input
          className="fluid"
          placeholder="Add Todo..."
          action={<Button type="submit"  icon="add" />}
          onChange={handleChange}
          value={textFieldValue}
        />
      </form>
    </div>
  );
}

export default AddTodoForm;
