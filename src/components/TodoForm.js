import React, { useState, useContext } from "react";
import { Form, InputGroup, Input, InputGroupAddon, Button } from "reactstrap";
import { TodosContext } from "../contexts/TodosContext";

function TodoForm() {
  const { addTodo } = useContext(TodosContext);
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <InputGroupAddon addonType="append">
          <Button type="submit" color="primary">
            追加
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
}

export default TodoForm;
