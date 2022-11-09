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
      // adding,
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
      List[type].push(newTask)
      this.props.adding(List[type],type)
      // adding(newTask,type);
    }
  };


  
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
