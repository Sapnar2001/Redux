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
  import {connect} from 'react-redux';
  import addReducer from '../redux/Reducer/addReducer';
  import {deletedata, editdata, AddTodo} from '../redux/Action/addAction';
  // import ScreenThree from './ScreenThree';
  
  export class ScreenTwo extends React.Component {
    constructor(props) {
      super(props);
    }
  
    handleButton = type => {
      this.props.navigation.navigate('ScreenThree', {type});
    };
    render() {
      const {
        List,
        route: {
          params: {type},
        },
      } = this.props;
      console.log('second===========>',type);
      return (
        <View style={{flex: 1}}>
          {List &&
            List[type]?.map(item => {
              return (
                <View style={styles.showView}>
                  <Text style={StyleSheet.showText}>{item.id}</Text>
                  <Text style={StyleSheet.showText}>{item.title}</Text>
                  <TouchableOpacity>
                    <Image
                      source={require('../asset/del.png')}
                      style={styles.delImg}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../asset/edit.png')}
                      style={styles.editImg}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          <TouchableOpacity
            style={styles.button}
            onPress={()=>this.handleButton(type)}>
            <Image
              source={{
                uri: 'https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/add_red.png',
              }}
              style={styles.img}
            />
          </TouchableOpacity>
        </View>
  );}}
  const mapStateToProps = state => {
    return {
      List: state.addReducer,
    };
  };
  const mapDispatchToProps = {
    AddTodo,
    deletedata,
    editdata,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ScreenTwo);
  
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
      padding: 20,
    },
    showText: {
      fontSize: 20,
      textAlign: 'center',
    },
    delImg: {
      height: 35,
      width: 35,
    },
    editImg: {
      height: 39,
      width: 39,
    },
  });
-----------------------------------

import React, {useState} from 'react';
import {connect} from 'react-redux';
import {AddTodo, editdata} from '../redux/Action/addAction';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ScreenTwo from './ScreenTwo';
// console.log('roiuyytrd=========>', route);
// const {type} = route.params;
// const {item} = route.params;
// const {edit} = route.params;
// console.log('edit====>', edit);
// const {List} = useSelector(state => state.addReducer);
// const [todoValue, setTodoValue] = useState();
// const [ID, setID] = useState();
// const dispatch = useDispatch();

export class ScreenThree extends React.Component {
  constructor(props) {
    super(props);

    const {route} = this.props;
    const {type} = route.params;

    this.state = {
      title: type?.item?.title || '',
      sub: type?.item?.sub || '',
    };
  }
  handleeSubmit = () => {

    const {
      adding,
      List,
      route: {
        params: {type, item, edit},
      },
    } = this.props;

    if (edit) {
      const prevData = List[type];
      const finalData = prevData.map(element => {
        if (element.id === item.id) {
          return {
            ...element,
            title: this.state.title,
            sub: this.state.sub,
          };
        } else {
          return element;
        }
      });
      // console.log('finalData',finalData);
      this.props.pEditTask(finalData, type);
    } else {
      const newTask = {
        title: this.state.title,
        sub: this.state.sub,
        id: +new Date(),
      };
      adding(newTask,type);



      // List[type].push(newTask)
      // this.props.adding(List[type],type)
    }
  };
  // this.props.navigation.goBack()

  //   if (edit) {
  //     const prevData = List[type];
  //     const newData = prevData.map(ele => {
  //       if (ele.key === item.key) {
  //         return {
  //           ...ele,
  //           id: ID,
  //           title: todoValue,
  //         };
  //       } else {
  //         return ele;
  //       }
  //     });
  //     dispatch(editdata(newData, type));
  //   } else {
  //     dispatch(
  //       AddTodo(
  //         [...List[type], {title: todoValue, id: ID, key: +new Date()}],
  //         type,
  //       ),
  //     );
  //     // navigation.navigate('ScreenTwo');
  //   }
  // };
  render() {
    
    return (
      <View style={{flex: 1}}>
        {/* <View
        style={styles.mainView}>
        <Text>{type}</Text>
      </View> */}
        <View style={styles.mainView}>
          <TextInput
            placeholder="title"
            value={this.state.title}
            onChangeText={text => this.setState({title: text})}
          />
        </View>
        <View style={styles.mainView}>
          <TextInput
            placeholder="subtitle"
            value={this.state.sub}
            onChangeText={text => this.setState({sub: text})}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={this.handleeSubmit}>
          <Text style={styles.buttonText}>ADD TASK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapDispatchToProps = {
  adding: AddTodo,
  pEditTask: editdata,
};

const mapStateToProps = state => {
  return {
    List: state.addReducer,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ScreenThree);
const styles = StyleSheet.create({
  mainView: {
    borderBottomColor: 'grey',
    borderWidth: 2,
    padding: 20,
    margin: 12,
  },
  button: {
    backgroundColor: 'red',
    margin: 12,
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    padding: 20,
    alignSelf: 'center',
  },
});
---------------


import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image
  } from 'react-native';
  import React from 'react';
  data = [
    {title1: 'All', title2: 'Schedule',img:require('../asset/all.png'),},
    {title1: 'Personal', title2: 'Erands',img:require('../asset/person.png')},
    {title1: 'Work', title2: 'Projects',img:require('../asset/work.png')},
  ];
  export default  function Home(props){
  
    const handleButtonClick = (type) => {
      props.navigation.navigate('ScreenTwo',{type});
      console.log('type==============================>',type)
    }
  
      return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <View style={styles.MainView}>
            <Text style={styles.HelloText}>Hello</Text>
            <Text style={styles.Text}>Sapna</Text>
          </View>
          <View style = {{marginTop: 30}}>
            <FlatList
              numColumns={2}
              data={data}
              renderItem={({item}) => {
                console.log('item===========>',item)
                const {title1} = item
                console.log(title1)
                return (
                  <View style={styles.boxView} >
                    <TouchableOpacity style={styles.mainView} onPress= {() =>handleButtonClick(title1)}>
                    <Image
                     source={item.img}
                    />
                      <Text style={styles.mainText}>{item.title1}</Text>
                      <Text style={styles.mainText}>{item.title2}</Text>
                    </TouchableOpacity>
           
                  </View>
                );
              }}
            />
          </View>
        </SafeAreaView>
      );
    }
  const styles = StyleSheet.create({
    MainView: {
      // top:40,
      marginBottom: 25,
  
    },
    HelloText: {
      paddingTop: 10,
      fontSize: 40,
      color: 'blue',
      letterSpacing: 5,
      marginHorizontal: 20,
    },
    Text: {
      fontWeight: 'bold',
      fontSize: 40,
      color: 'blue',
      letterSpacing: 5,
      marginHorizontal: 30,
    },
    mainView: {
      height: 150,
      width: 180,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius:10,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainText: {
      fontSize: 20,
    },
    boxView:{
      padding:7,
    }
  
  });
  