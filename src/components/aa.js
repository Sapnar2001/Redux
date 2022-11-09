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
  import {deletedata} from '../redux/Action/addAction';
  import ScreenThree from './ScreenThree';
  
  const ScreenTwo = ({route, navigation}) => {
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
      console.log('list======>', List);
      const newData = prevData.filter(element => element.id !== Id);
      // console.log(newData);
      dispatch(deletedata(newData, type));
      // dispatch(AddTodo([...List[type], {title: todoValue},{id:ID}], type));
    };
  
    return (
      <View style={{flex: 1}}>
        {List &&
          List[type]?.map(item => {
            return (
              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  borderWidth: 2,
                  marginBottom: 10,
                  padding: 5,
                }}>
                {/* <View> */}
                <View>
                  <Text style={{fontSize: 20, textAlign: 'center'}}>
                    {item.id}
                  </Text>
                  <Text style={{fontSize: 20, textAlign: 'center'}}>
                    {item.title}
                  </Text>
                  <TouchableOpacity onPress={() => deleteHandler(item.id)}>
                    <Text
                      style={{fontSize: 20, textAlign: 'center', color: 'red'}}>
                      Delete
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
  
  
        <TouchableOpacity
          style={styles.button}
          // onPress={() => props.navigation.navigate('ScreenThree')}
          // navigation={props.navigation}>
          onPress={handleButton}>
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
  });
  export default ScreenTwo;
  
  // import { View, Text, TouchableOpacity } from 'react-native'
  // import React from 'react';
  // import style from './ParticularCatStyle';
  // import { useSelector } from 'react-redux';
  
  //  const ParticularCategory = ({route, navigation})=> {
  //     const {data} = useSelector((state) => state)
  
  //     const {nav} = route.params
  
  //     const handleAddButton = () => {
  //         navigation.navigate('USERINPUT')
  //     }
  
  //   return (
  //     <View>
  //       {data && Object.keys(data).length > 0 && data[nav]?.map((item) => {
  //         return(
  //             <View>
  //                 <Text>{item.title}</Text>
  //             </View>
  //         )
  //       })}
  //                 <TouchableOpacity onPress={handleAddButton}><Text>ADD</Text></TouchableOpacity>
  
  //     </View>
  //   )
  // }
  
  // export default ParticularCategory
  