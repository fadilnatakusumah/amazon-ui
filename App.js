import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen';


export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
const AppDrawer = createDrawerNavigator({
  HomeScreen: { screen: HomeScreen }
})

const AppContainer = createAppContainer(AppDrawer);
