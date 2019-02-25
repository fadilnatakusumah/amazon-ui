import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Card, CardItem, Right } from 'native-base';
import StarRating from 'react-native-star-rating';

export class RecommendedItem extends Component {
    render() {
        return (
            <CardItem>
                <View>
                    <Image source={this.props.imageUri} resizeMode={'cover'} style={{ width: 60, height: 90, marginRight: 18 }}/>
                </View>
                <Right style={{
                    alignItems: 'flex-start', flex: 1, height: 90
                }}>
                    <Text style={{fontWeight: 'bold'}}>{this.props.cardTitle}</Text>
                    <Text style={{color: 'grey'}}>{this.props.cardAuthor}</Text>
                    <Text style={{color: 'red', fontWeight: 'bold', fontSize: 15}}>{this.props.cardPrice}</Text>
                    <Text>You save <Text style={{color: 'grey'}}>{this.props.cardPrice}</Text></Text>
                    <StarRating
                        disabled
                        rating={this.props.cardRating}
                        maxStars={5}
                        starSize={12}
                        fullStarColor={'orange'}
                        emptyStarColor={'orange'}
                    />
                </Right>
            </CardItem>
        )
    }
}

export default RecommendedItem
