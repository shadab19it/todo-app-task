import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useGlobalState } from "../context/context";
import actionType from "../context/actions";

const FormCompnent = () => {
  const [globalState, dispatch] = useGlobalState();
  const [newTodo, setNewTodo] = React.useState("");

  // method
  const onChangeTodo = (e) => {
    setNewTodo(e.target.value);
  };

  //   Add New Todo
  const onClickAddTodo = (e) => {
    e.preventDefault();
    if (newTodo) {
      dispatch({ type: actionType.ADD_TODO, payload: { todo: newTodo, done: false } });
      setNewTodo("");
    } else {
      alert("Please Enter any Task");
    }
  };
  return (
    <div className="form_container">
      <h2 className="text-gray">ToDo List</h2>
      <Form onSubmit={onClickAddTodo}>
        <Form.Group as={Row} className="mb-4 mt-4 justify-content-center" controlId="formPlaintextPassword">
          <Col sm="8">
            <Form.Control onChange={onChangeTodo} value={newTodo} type="text" placeholder="Add New Task" />
          </Col>
          <Col sm="2 justify-content-end">
            <Button variant="primary" type="submit">
              ADD
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormCompnent;
