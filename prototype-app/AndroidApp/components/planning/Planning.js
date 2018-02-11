import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from 'react-native-elements'

export default class Planning extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    backgroundColor="#333"
                    centerComponent={{text: 'Planning', style: {color: '#fff'}}}
                />
            </View>
        );
    }
}