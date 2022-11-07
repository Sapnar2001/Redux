import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
data = [
  {title1: 'All', title2: 'Schedule'},
  {title1: 'Personal', title2: 'Erands'},
  {title1: 'work', title2: 'Projects'},
];
export class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.MainView}>
          <Text style={styles.HelloText}>Hello</Text>
          <Text style={styles.Text}>Sapna</Text>
        </View>
        <View  style = {{marginTop: 30}}>
          <FlatList
            numColumns={2}
            data={data}
            renderItem={({item}) => {
              return (
                <View>
                  <TouchableOpacity style={styles.mainView} onPress={() => this.props.navigation.navigate('ScreenTwo')} navigation={this.props.navigation}>
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
    width: 200,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
  },
});
export default Home;
