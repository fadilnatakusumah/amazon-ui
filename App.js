import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, FlatList, TouchableHighlight } from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen';
import { Container, Header, Icon, ListItem, Content } from "native-base";


export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
_keyExtractor = (item, index) => index.toString();

const drawerComponent = () => {
  return (
    <Container>
      <Header style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
        <Icon name={'person'} style={{ color: 'white', marginRight: 10 }} fontSize={26} />
        <Text style={{ color: 'white', fontSize: 18 }}>Hello, <Text style={{ color: 'white', fontSize: 18, fontStyle: 'italic', fontWeight: 'bold' }}>fadilnatakusumah</Text></Text>
      </Header>
      <Content>
        <FlatList
          keyExtractor={this._keyExtractor}
          data={['Home', 'Shop by Category', "Today's deals"]}
          renderItem={({ item, index }) => (
            <ListItem noBorder style={{borderTopWidth: 0.5, borderTopColor: '#f0f0f0'}}>
              <Text>{item}</Text>
            </ListItem>
          )}
        />
        <FlatList
          keyExtractor={this._keyExtractor}
          data={['Settings', 'Costumer Service']}
          renderItem={({ item, index }) => (
            <ListItem noBorder style={{borderTopWidth: 0.5, borderTopColor: '#f0f0f0'}}>
              <Text>{item}</Text>
            </ListItem>
          )}
        />

      </Content>
    </Container>
  )
}

const AppDrawer = createDrawerNavigator({
  HomeScreen: { screen: HomeScreen }
}, {
    contentComponent: drawerComponent,
    style: {
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
  })

const AppContainer = createAppContainer(AppDrawer);
