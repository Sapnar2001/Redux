import {ADD_TODO, DELETE_DATA, EDIT_DATA} from '../Action/addAction';
const INITIAL_STATE = {

    All: [{id:1,title:'sapna',sub:'rawat'}],
    Work: [
      {id:5,title:'pooja',sub:'treeet'}
    ],
    Personal: [
      {id:54,title:'vivek',sub:'negi'}
    ],
};
export const addReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case ADD_TODO:
      console.log({List:{...state.List, ...payload}});
      return {...state, ...payload};
case  DELETE_DATA:
  return  {...state, ...payload};
  case EDIT_DATA:
    return {...state, ...payload};
    default:
      return state;
  }
};
export default addReducer;
