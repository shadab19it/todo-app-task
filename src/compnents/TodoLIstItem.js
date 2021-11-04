import React from "react";
import { ListGroup, Row, Col, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useGlobalState } from "../context/context";
import actionTypes from "../context/actions";
import DeleteIcon from "../assest/delete-icon.svg";

const TodoListItem = () => {
  const [{ todos }, dispatch] = useGlobalState();
  const [selectedTodoItem, setSelectedTodo] = React.useState([]);
  const [toggleInput, setToggleInput] = React.useState(null);
  const [updatedTodo, setUpdatedTodo] = React.useState("");

  const onDbClickInput = (todo, id) => {
    setToggleInput(id);
    setUpdatedTodo(todo.todo);
  };

  const onUpdateTodo = (e) => {
    setUpdatedTodo(e.target.value);
  };

  const onClickUpdateTodo = (todo, id) => {
    dispatch({ type: actionTypes.UPDATE_TODO, payload: { id, updatedTodo } });
    cancelUpdate();
  };

  // Delete Todo
  const onDeleteTodo = (id) => {
    dispatch({ type: actionTypes.DELETE_TODO, payload: id });
  };

  //   Select Todo for Delete
  const onSelectedTodo = (id) => {
    const currentIndex = selectedTodoItem.indexOf(id);
    const newSelectedTodo = [...selectedTodoItem];

    if (currentIndex === -1) {
      newSelectedTodo.push(id);
    } else {
      newSelectedTodo.splice(currentIndex, 1);
    }
    setSelectedTodo(newSelectedTodo);
  };

  //Set Dodo Status
  const onDoneTodo = (todo, id) => {
    dispatch({ type: actionTypes.DONE_TODO, payload: { id: id, isDone: !todo.done } });
  };

  // Delete Multiple Todo
  const onDeleteSelectedTodo = () => {
    dispatch({ type: actionTypes.MULTI_DELETE_TODO, payload: selectedTodoItem });
    setSelectedTodo([]);
  };

  const cancelUpdate = () => {
    setToggleInput(null);
  };
  return (
    <div className="todo_list_container mt-3">
      {/* show selected no Todo item */}
      {selectedTodoItem.length > 0 && (
        <div className="d-flex align-items-center justify-content-between py-2">
          <div>Selected Todo : {selectedTodoItem.length}</div>
          <OverlayTrigger placement="top" overlay={<Tooltip>Delete Selected Todo</Tooltip>}>
            <div className="cursor-pointer" style={{ cursor: "pointer" }} onClick={onDeleteSelectedTodo}>
              <img src={DeleteIcon} alt="Delete Todo" />
            </div>
          </OverlayTrigger>
        </div>
      )}

      {/* list All Todo Item */}
      <ListGroup>
        {todos.map((todo, i) => (
          <ListGroup.Item className="p-3" key={i}>
            <Row className="align-items-center">
              <Col xs="1">
                <Form.Check type="checkbox" checked={todo.done} onChange={() => onDoneTodo(todo, i)} />
              </Col>
              <Col xs="9">
                {toggleInput === i ? (
                  <div className="d-flex align-items-center">
                    <span className="px-2" onClick={cancelUpdate} style={{ cursor: "pointer" }}>
                      X
                    </span>
                    <Form onSubmit={() => onClickUpdateTodo(todo, i)} className="w-100">
                      <Form.Control onChange={onUpdateTodo} value={updatedTodo} type="text" placeholder="Update Todo" />
                    </Form>
                  </div>
                ) : (
                  <div
                    onDoubleClick={() => onDbClickInput(todo, i)}
                    className={`${todo.done ? "text-decoration-line-through" : ""} d-block`}>
                    {todo.todo}
                  </div>
                )}
              </Col>
              <Col xs="2">
                <div className="d-flex align-items-center justify-content-around">
                  <img style={{ cursor: "pointer" }} src={DeleteIcon} onClick={() => onDeleteTodo(i)} alt="Delete Todo" />
                  <Form.Check
                    type="checkbox"
                    id={i}
                    checked={selectedTodoItem.indexOf(i) !== -1}
                    style={{ cursor: "pointer" }}
                    className="pl-2"
                    onChange={() => onSelectedTodo(i)}
                  />
                </div>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoListItem;
