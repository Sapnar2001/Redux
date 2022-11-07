export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const AddTodo = payload => ({type: ADD_TODO, payload});
export const RemoveTodo = payload => ({type: REMOVE_TODO, payload});