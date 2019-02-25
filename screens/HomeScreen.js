import React, { Component } from 'react'
import { Text, View, Platform, StatusBar, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Container, Content, Icon, Header, Left, Right, Input, Item, Card, CardItem } from 'native-base';
import { DrawerActions } from 'react-navigation';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import RecommendedItem from '../components/RecommendedItem';

class HomeScreen extends Component {

    haventMade = () => {
        alert('You havent made any functions for this');
    }

    toggleDrawer = () => {
        this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    }

    render() {
        return (
            <Container style={styles.containerStyle}>
                <Header style={{ height: 90, backgroundColor: '#3a455c', borderBottomWidth: 1, borderBottomColor: 'grey' }}>
                    <Left style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name={'md-menu'} style={{ color: 'white', marginRight: 5 }} onPress={this.toggleDrawer} />
                        <FAIcon name={'amazon'} style={{ color: 'white', fontSize: 22, fontStyle: 'italic' }} />
                    </Left>
                    <Right>
                        <Icon name={'cart'} style={{ color: 'white' }} />
                    </Right>
                </Header>
                <View style={{
                    height: 70,
                    position: 'absolute',
                    backgroundColor: '#3a455c',
                    top: 90, left: 0, right: 0,
                    alignItems: 'center', paddingHorizontal: 5, flexDirection: 'row'
                }}>
                    <TouchableOpacity>
                        <View style={{
                            backgroundColor: 'white',
                            borderRadius: 4,
                            width: 100, height: 50, justifyContent: 'center',
                            padding: 10,
                        }}>
                            <Text style={{ fontSize: 12 }}>Shop by</Text>
                            <Text style={{ fontWeight: 'bold' }}>Category</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{
                        justifyContent: 'center', flex: 1, height: '100%', marginLeft: 5
                    }}>
                        <Item style={{
                            backgroundColor: 'white', paddingHorizontal: 5, borderRadius: 4
                        }}>
                            <Icon name={'search'} />
                            <Input placeholder={'Search'} />
                        </Item>
                    </View>
                </View>

                <Content style={{ marginTop: 70, backgroundColor: '#d5d5d6' }}>
                    <View style={{
                        justifyContent: 'space-between', flexDirection: 'row', padding: 10,
                        backgroundColor: 'white', height: 50, alignItems: 'center'
                    }}>
                        <Text>Hello, fadilnatakusumah</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text>Your account </Text><Icon style={{ fontSize: 18 }} name={'arrow-forward'} />
                        </View>
                    </View>

                    {/* react native swiper */}
                    <Swiper style={{ height: 100 }} autoplay>
                        <View style={{ flex: 1 }}>
                            <Image style={{ flex: 1, width: null, height: null }} source={require('../assets/cat1.jpg')} resizeMode={'cover'} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image style={{ flex: 1, width: null, height: null }} source={require('../assets/cat2.jpg')} resizeMode={'cover'} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image style={{ flex: 1, width: null, height: null }} source={require('../assets/cat3.jpg')} resizeMode={'cover'} />
                        </View>
                    </Swiper>

                    {/* header card */}
                    <Card style={{ marginLeft: 5, marginRight: 5 }}>
                        <CardItem header style={{ borderBottomWidth: 1, borderColor: 'grey', marginLeft: 5, marginRight: 5 }}>
                            <Text>Your recommendation</Text>
                        </CardItem>
                        <RecommendedItem
                            imageUri={require('../assets/recommended.jpg')}
                            cardTitle={'You can heal your soul'}
                            cardAuthor={'Fadil Natakusumah'}
                            cardRating={5}
                            cardPrice={'Rp. 100.000'}
                            saving={'100000'}
                        />
                        <RecommendedItem
                            imageUri={require('../assets/recommended2.jpg')}
                            cardTitle={'You can heal your soul'}
                            cardAuthor={'Fadil Natakusumah'}
                            cardRating={5}
                            cardPrice={'Rp. 100.000'}
                            saving={'100000'}
                        />
                        <RecommendedItem
                            imageUri={require('../assets/recommended3.jpg')}
                            cardTitle={'You can heal your soul'}
                            cardAuthor={'Fadil Natakusumah'}
                            cardRating={5}
                            cardPrice={'Rp. 100.000'}
                            saving={'100000'}
                        />
                    </Card>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
});

export default HomeScreen;
