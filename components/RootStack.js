import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Main from './Main';
import Landing from './Landing'
import MainDetails from './MainDetails';

const RootStack = createStackNavigator({
  Home: {
    screen: Landing
  },
  Main: {
    screen: Main
  },
  Details: {
    screen: MainDetails
  },

});

export default RootStack;
