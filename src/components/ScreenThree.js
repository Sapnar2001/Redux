// import { Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React, { Component } from 'react'

// export class ScreenThree extends Component {
//   render() {
//     return (
//       <View style={{flex:1}}>
//         <View style={{borderBottomColor:'grey', borderWidth:2,padding:20, margin:12 }}>
//         <Text>Personal Erands</Text>
//         </View>
//         <View style={{borderBottomColor:'grey', borderWidth:2,padding:20, margin:12 }}>
//         <TextInput placeholder="TITLE" />
//         </View>
//         <View style={{borderBottomColor:'grey', borderWidth:2,padding:20, margin:12 }}>
//         <TextInput placeholder="DATE AND TIME"/>
//         </View>
//         <TouchableOpacity style={{backgroundColor:'red' ,margin:12 ,borderRadius:100}}>
//             <Text style={{color:'white',padding:20, alignSelf:'center'}}> ADD TASK</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }

// export default ScreenThree


import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
const ScreenThree=()=>{
  const [todoValue, setTodoValue] = useState('');
  // const dispatch = useDispatch();
  const data = useSelector(state => state);
  // const todos = data.todos.todos;
  // const addTodo = () => {
  //   if (todos && !todos.includes(todoValue)) {
  //     dispatch(AddTodo(todoValue));
  //     setTodoValue('');
  //   } else {
  //     alert(`${todoValue} already added in Todo List`);
  //   }
  // };
  return(
          <View style={{flex:1}}>
        <View style={{borderBottomColor:'grey', borderWidth:2,padding:20, margin:12 }}>
        <Text>Personal Erands</Text>
        </View>
        <View style={{borderBottomColor:'grey', borderWidth:2,padding:20, margin:12 }}>
        <TextInput placeholder="TITLE"  onChangeText={setTodoValue}
        value={todoValue} />
        </View>
        <View style={{borderBottomColor:'grey', borderWidth:2,padding:20, margin:12 }}>
        <TextInput placeholder="DATE AND TIME"/>
        </View>
        <TouchableOpacity style={{backgroundColor:'red' ,margin:12 ,borderRadius:100}} onPress={addTodo}>
            <Text style={{color:'white',padding:20, alignSelf:'center'}}> ADD TASK</Text>
        </TouchableOpacity>
      </View>
  )
}
export default ScreenThree;