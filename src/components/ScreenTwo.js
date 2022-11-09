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
import {deletedata, AddTodo} from '../redux/Action/addAction';
// import ScreenThree from './ScreenThree';

export class ScreenTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  handleButton = type => {
    this.props.navigation.navigate('ScreenThree', {type});
  };
  editHandler=(item,type)=>{
    this.props.navigation.navigate('ScreenThree',{type,item,edit:true})
  }
  deleteHandler=id=>{
    const {
      List,
    route:{
      params:{type},
    },}=this.props;
    const prevData = List[type];
    const newData = prevData.filter(ele => ele.id != id);
    console.log('newwwwwwwwwww====================', newData);
    this.props.deletedata(newData, type);
  }
  render() {
    const {
      List,
      route: {
        params: {type},
      },
    } = this.props;
    console.log('second===========>',List[type]);
    return (
      <View style={{flex: 1}}>
        {
          List[type]?.map(item => {
            console.log('item============>',item)
            return (
              <View style={styles.showView}>
                <Text style={StyleSheet.showText}>{item.title}</Text>
                <Text style={StyleSheet.showText}>{item.sub}</Text>
                <TouchableOpacity onPress={() => this.deleteHandler(item.id)}>
                  <Image
                    source={require('../asset/del.png')}
                    style={styles.delImg}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.editHandler(item,type)}>
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
