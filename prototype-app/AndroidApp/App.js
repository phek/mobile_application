import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import BottomBar from './components/bottom-bar/BottomBar';
import Map from "./components/map/Map";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Map/>
                </View>
                <BottomBar/>
            </View>
        );
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
