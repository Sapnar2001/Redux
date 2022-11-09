import {
  Button,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import addReducer from '../redux/Reducer/addReducer';
import {deletedata,editdata} from '../redux/Action/addAction';
import ScreenThree from './ScreenThree';

const ScreenTwo = ({route, navigation}) => {
  console.log('routes==========>', route);
  const dispatch = useDispatch();
  const {List} = useSelector(state => state.addReducer);
  const {type} = route.params;
  console.log(List[type]);
  console.log(route);

  const handleButton = route => {
    navigation.navigate('ScreenThree', {type});
  };
  const deleteHandler = Id => {
    const prevData = List[type];
    console.log('prevData======>', prevData);
    const newData = prevData.filter(element => element.id !== Id);
    dispatch(deletedata(newData, type));
  };
  const editHandler=(item,type)=>{
navigation.navigate('ScreenThree',{item,type,edit:true});
  }

  return (
    <View style={{flex: 1}}>
      {List &&
        List[type]?.map(item => {
          return (
            <View style={styles.showView}>
              <View>
                <View>
                  <Text style={StyleSheet.showText}>{item.id}</Text>
                  <Text style={StyleSheet.showText}>{item.title}</Text>
                  <TouchableOpacity onPress={() => deleteHandler(item.id)}>
                    <Text style={styles.buttonText}>Delete</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => editHandler(item,type)}>
                    <Text
                      style={{
                        fontSize: 20,
                        textAlign: 'center',
                        color: 'blue',
                      }}>
                      Edit
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}

      <TouchableOpacity style={styles.button} onPress={handleButton}>
        <Image
          source={{
            uri: 'https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/add_red.png',
          }}
          style={styles.img}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {width: 70, height: 70, bottom: 10, right: 10, position: 'absolute'},
  img: {
    width: '100%',
    height: '100%',
  },
  container: {
    width: '80%',
    margin: 10,
    alignSelf: 'center',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  workItem: {
    fontStyle: 'italic',
    fontSize: 16,
    color: '#000',
    fontWeight: '700',
  },
  showView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderWidth: 2,
    marginBottom: 10,
    padding: 5,
  },
  showText: {
    fontSize: 20,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
  },
});
export default ScreenTwo;
