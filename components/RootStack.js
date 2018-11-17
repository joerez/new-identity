import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Main from './Main';
import MainDetails from './MainDetails';

const RootStack = createStackNavigator({
  Home: {
    screen: Main
  },
  MainDetails: {
    screen: MainDetails
  },
});

export default RootStack;
