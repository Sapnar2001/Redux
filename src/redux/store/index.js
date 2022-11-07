import {combineReducers, legacy_createStore} from 'redux';
import addReducer from '../Reducer/addReducer';
const rootReducer = combineReducers({
    addReducer,
    
  });
  const store = legacy_createStore(rootReducer);
  export default store;