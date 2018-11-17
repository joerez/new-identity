import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import RootStack from './components/RootStack';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
