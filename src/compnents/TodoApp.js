import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

// import Components
import NavHeader from "./Header";
import FormCompnent from "./FormCompnent";
import TodoListItem from "./TodoLIstItem";

const TodoApp = () => {
  return (
    <div className="app_wrapper">
      <NavHeader />
      <Container className="py-5" style={{ maxWidth: "900px" }}>
        <FormCompnent />
        <TodoListItem />
      </Container>
    </div>
  );
};

export default TodoApp;

TodoApp.prototype = {};
