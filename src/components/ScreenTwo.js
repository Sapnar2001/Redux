import { Button, Text, TouchableOpacity, View,Image ,StyleSheet} from 'react-native'
import React, { Component } from 'react'
import ScreenThree from './ScreenThree'

export class ScreenTwo extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
       <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('ScreenThree')} navigation={this.props.navigation}>
       <Image source={{uri: 'https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/add_red.png'}}
       style={styles.img} />
</TouchableOpacity>
      </View>
    )
  }
}
const styles=StyleSheet.create({
button:{width: 70, height:70, bottom: 10,right:10,position: 'absolute'},
img:{
    width: '100%', height:'100%'
}


})

export default ScreenTwo