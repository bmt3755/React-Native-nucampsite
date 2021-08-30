import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';

//destructuring from props object
function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/react-lake.jpg')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            promotions: PROMOTIONS,
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            //ScrollView component is used to render groups or lists of items like flatList
            //major difference is scrollvew loads all its child components at once
            //FlatList uses Lazy loading - only a part of a list rendered at a time, the part thats on0-screen. The parts that are scrolled off screen are removed from memory.
            //flatlist is efficient for longer lists 
            <ScrollView>
                <RenderItem 
                    item={this.state.campsites.filter(campsite => campsite.featured)[0]}
                />
                <RenderItem 
                    item={this.state.promotions.filter(promotion => promotion.featured)[0]}
                />
                <RenderItem 
                    item={this.state.partners.filter(partner => partner.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default Home;