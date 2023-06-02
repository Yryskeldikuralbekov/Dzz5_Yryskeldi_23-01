const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  if (action.type == "ADD_TODO") {
    return { ...state, todos: [...state.todos, action.payload] };
  }
  return state;
};

const addTodo = (payload) => ({ type: "ADD_TODO", payload });

export const asyncAddTodo = (payload) => {
  return async (dispatch) => {
    dispatch(
      addTodo(payload)
      // type: "ADD_TODO",
      // payload: payload,
    );
  };
};

export default todosReducer;
