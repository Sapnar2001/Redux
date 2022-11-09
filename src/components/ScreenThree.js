

import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodo,editdata } from '../redux/Action/addAction';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ScreenTwo from './ScreenTwo';
const ScreenThree = ({route}) => {
  console.log('roiuyytrd=========>', route)
  const {type} = route.params;
  const {edit}=route.params
  console.log('edit====>',edit)
  const {List} = useSelector(state => state.addReducer);
  const [todoValue, setTodoValue] = useState();
  const [ID, setID] = useState();
  const dispatch = useDispatch();

  const handleeSubmit = () => {
    // dispatch(AddTodo([...List[type], {title: todoValue, id:ID}], type));
    if(edit){
      const prevData = List[type];
      const newData=prevData.map(ele=>{
        if(ele.id===ID){
          return{
            ...ele,
            title:todoValue,
          }
         } else{
            return ele;
          }
      })
      dispatch(editdata(newData, type));
    }else 
    {
      dispatch(AddTodo([...List[type], {title: todoValue,id:ID}], type))
  }
  };
  
  

  return (
    <View style={{flex: 1}}>
      <View style={{
          borderBottomColor: 'grey',
          borderWidth: 2,
          padding: 20,
          margin: 12,
        }}>
        <Text>{type}</Text>
      </View>
      <View
        style={{
          borderBottomColor: 'grey',
          borderWidth: 2,
          padding: 20,
          margin: 12,
        }}>
        <TextInput placeholder="ID"
        onChangeText={val=>{
setID(val);
        }}
        />
      </View>
      <View
        style={{
          borderBottomColor: 'grey',
          borderWidth: 2,
          padding: 20,
          margin: 12,
        }}>
        <TextInput
          placeholder="TITLE"
          onChangeText={val => {
            setTodoValue(val);
          }}
          value={todoValue}
        />
      </View>
      
      <TouchableOpacity
        style={{backgroundColor: 'red', margin: 12, borderRadius: 100}}
        onPress={handleeSubmit}>
        <Text style={{color: 'white', padding: 20, alignSelf: 'center'}}>
          ADD TASK
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default ScreenThree;
