import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header, List, ListItem} from 'react-native-elements'

export default class Settings extends Component {
    render() {
        const list = [
            {
                title: 'Location',
                icon: 'location'
            },
            {
                title: 'Notifications',
                icon: 'notification'
            }
        ];

        return (
            <View style={{flex: 1}}>
                <Header
                    outerContainerStyles={{height: 51, borderBottomColor: '#e67e22', borderBottomWidth: 2}}
                    backgroundColor="#333"
                    centerComponent={{text: 'SETTINGS', style: {color: '#fff'}}}
                />
                <List>
                    {
                        list.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                leftIcon={{name: item.icon, type: 'entypo'}}
                            />
                        ))
                    }
                </List>
            </View>
        );
    }
}