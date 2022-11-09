import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodo, editdata} from '../redux/Action/addAction';
import {Text, View, TextInput, TouchableOpacity,StyleSheet} from 'react-native';
import ScreenTwo from './ScreenTwo';
const ScreenThree = ({route}) => {
  console.log('roiuyytrd=========>', route);
  const {type} = route.params;
  const {item} = route.params;
  const {edit} = route.params;
  console.log('edit====>', edit);
  const {List} = useSelector(state => state.addReducer);
  const [todoValue, setTodoValue] = useState();
  const [ID, setID] = useState();
  const dispatch = useDispatch();

  const handleeSubmit = () => {
    if (edit) {
      const prevData = List[type];
      const newData = prevData.map(ele => {
        if (ele.key === item.key) {
          return {
            ...ele,
            id: ID,
            title: todoValue,
          };
        } else {
          return ele;
        }
      });
      dispatch(editdata(newData, type));
    } else {
      dispatch(
        AddTodo(
          [...List[type], {title: todoValue, id: ID, key: +new Date()}],
          type,
        ),
      );
      // navigation.navigate('ScreenTwo');
    }
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={styles.mainView}>
        <Text>{type}</Text>
      </View>
      <View
        style={styles.mainView}>
        <TextInput
          placeholder="subtitle"
          onChangeText={val => {
            setID(val);
          }}
        />
      </View>
      <View
        style={styles.mainView}>
        <TextInput
          placeholder="TITLE"
          onChangeText={val => {
            setTodoValue(val);
          }}
          value={todoValue}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleeSubmit}>
        <Text style={styles.buttonText}>
          ADD TASK
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default ScreenThree;
const styles = StyleSheet.create({
mainView:{
  borderBottomColor: 'grey',
  borderWidth: 2,
  padding: 20,
  margin: 12,
},
button:{
  backgroundColor: 'red', margin: 12, borderRadius: 100
},
buttonText:{
  color: 'white', padding: 20, alignSelf: 'center'
}
})
