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
    letterSpacing: 3,
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
