import actionTypes from "./actions";

export const initialState = {
  todos: [
    {
      todo: "Hit the Gym",
      done: false,
    },
    {
      todo: "Take a Bath",
      done: false,
    },
  ],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    // AddTodo
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    // Done todo
    case actionTypes.DONE_TODO:
      const doneTodo = state.todos.map((t, i) => {
        if (i === action.payload.id) {
          t.done = action.payload.isDone;
        }
        return t;
      });
      return { ...state, todos: doneTodo };

    case actionTypes.UPDATE_TODO:
      const updateTodo = state.todos.map((t, i) => {
        if (i === action.payload.id) {
          t.todo = action.payload.updatedTodo;
        }
        return t;
      });
      return { ...state, todos: updateTodo };

    // Delete todo
    case actionTypes.DELETE_TODO:
      const filterTodo = state.todos.filter((t, i) => i !== action.payload);
      return { ...state, todos: filterTodo };

    // Multi Delete
    case actionTypes.MULTI_DELETE_TODO:
      let newState = state.todos;
      action.payload.map((id) => newState.splice(id, 1));
      return { ...state, todos: newState };
    default:
      return state;
  }
};

export default reducer;
