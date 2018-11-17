import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class MainDetails extends Component {
  render() {
    return (
      <View>
        <Text>wow</Text>
        <Button
          title="Go Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />

      </View>
    )
  }
}

export default MainDetails
