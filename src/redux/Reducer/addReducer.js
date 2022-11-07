import {ADD_TODO, REMOVE_TODO} from '../Action/addAction';
const INITIAL_STATE = {todos: []};
const addReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case ADD_TODO:
      return {todos: [...state.todos]};
    // case REMOVE_TODO:
    // return {todos: handleRemoveTodo(action.payload, state.todos)};
    default:
      return state;
  }
};
// const handleRemoveTodo = (item, todos) => {
// const todoIndex = todos.indexOf(item);
// todos.splice(todoIndex, 1);
// return todos;
// };
export default addReducer;
