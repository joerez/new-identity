import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class Landing extends Component {
  static navigationOptions = {
    title: 'Identity Changer',
  };


  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.text}>Welcome to the Identity Changer!</Text>
        <View style={styles.btn}>
        <Button
          title="Get Started"
          color="white"
          onPress={() => this.props.navigation.navigate('Main')}
        />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 20,
  },
  renderedText: {
    paddingTop: 50,
  },
  btn: {
    marginTop: 50,
    width: 200,
    backgroundColor: '#9b59b6',
    color: '#ffffff',
    borderRadius: 30,
    padding: 5,
    borderColor: 'white',
  },
});


export default Landing
