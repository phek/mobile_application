import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Tabs} from './router';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return <Tabs/>;
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    test: {
        height: 50,
        backgroundColor: 'steelblue'
    }
});
