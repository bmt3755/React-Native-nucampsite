import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Directory(props) {

    //an object is passed by default from flatlist, we are destructuring to get one of the properties {item}
    // FlatList is also similar like map. 
    //It will iterate through every item in the object array given in data param and applies the renderItem function to every single item
    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                leftAvatar={{ source: require('./images/react-lake.jpg')}}
            />
        );
    };

    return (
        //loosely equivalent to ul and ui tags in HTML but takes 3 params
        <FlatList
            data={props.campsites}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Directory;