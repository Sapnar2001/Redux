import {ADD_TODO, DELETE_DATA, EDIT_DATA} from '../Action/addAction';
const INITIAL_STATE = {
  List: {
    All: [
      {
        id: 1,
        title: 'groceries',
      },
    ],
    Work: [
      {
        id: 5,
        title: 'assignents',
      },
    ],
    Personal: [
      {
        id: 3,
        title: 'shopping',
      },
    ],
  },
};
export const addReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case ADD_TODO:
      return {List:{...state.List, ...payload}};
case  DELETE_DATA:
  return {List:{...state.List, ...payload}};
  case EDIT_DATA:
    return {List:{...state.List, ...payload}};
    default:
      return state;
  }
};
export default addReducer;
