import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import {ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';
// import { CAMPSITES } from '../shared/campsites';
// import { PROMOTIONS } from '../shared/promotions';
// import { PARTNERS } from '../shared/partners';

//destructuring from props object
// function RenderItem({item}) {
//     if (item) {
//         return (
//             <Card
//                 featuredTitle={item.name}
//                 image={require('./images/react-lake.jpg')}
//             >
//                 <Text style={{margin: 10}}>
//                     {item.description}
//                 </Text>
//             </Card>
//         );
//     }
//     return <View />;
// }

function Mission() {
    return(
        <Card title='Our Mission'>
        <Text style={{margin: 10}}> 
        We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. 
        We increase access to adventure for the public while promoting safe and respectful use of resources. 
        The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. 
        We also present a platform for campers to share reviews on campsites they have visited with each other.
        </Text>
    </Card>
    );
    
}
class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        const renderPartner = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
                />
            );
        };
        return (
            //ScrollView component is used to render groups or lists of items like flatList
            //major difference is scrollvew loads all its child components at once
            //FlatList uses Lazy loading - only a part of a list rendered at a time, the part thats on0-screen. The parts that are scrolled off screen are removed from memory.
            //flatlist is efficient for longer lists 
            <ScrollView>
                    <Mission />
                    <Card title = 'Community Partners'>
                        <FlatList 
                            data={this.state.partners}
                            renderItem={renderPartner}
                            keyExtractor={item => item.id.toString()}
                        />                        
                    </Card>
            </ScrollView>
        );
    }
}

export default About;