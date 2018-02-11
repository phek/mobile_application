import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {Icon} from 'react-native-elements';

export default class BottomBar extends Component {
    render() {
        return (
            <View style={{height: 60}}>
                <View style={styles.container}>
                    <TouchableHighlight
                        style={[styles.button, styles.buttonBorder]}
                        onPress={() => console.log("Hi")}>
                        <View style={styles.buttonContent}>
                            <Icon type='entypo' name='home' color="#fff" />
                            <Text style={styles.buttonText}>Overview</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[styles.button, styles.buttonBorder]}
                        onPress={() => console.log("Hi")}>
                        <View style={styles.buttonContent}>
                            <Icon type='entypo' name='area-graph' color="#fff"/>
                            <Text style={styles.buttonText}>Statistics</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[styles.button, styles.buttonBorder]}
                        onPress={() => console.log("Hi")}>
                        <View style={styles.buttonContent}>
                            <Icon type='entypo' name='calendar' color="#fff"/>
                            <Text style={styles.buttonText}>Planning</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[styles.button, styles.buttonBorder]}
                        onPress={() => console.log("Hi")}>
                        <View style={styles.buttonContent}>
                            <Icon type='entypo' name='location' color="#fff"/>
                            <Text style={styles.buttonText}>Map</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => console.log("Hi")}>
                        <View style={styles.buttonContent}>
                            <Icon type='entypo' name='cog' color="#fff"/>
                            <Text style={styles.buttonText}>Settings</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#333',
        flex: 1
    },
    buttonBorder: {
        borderRightWidth: 1,
        borderColor: '#444'
    },
    buttonContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff'
    }
});