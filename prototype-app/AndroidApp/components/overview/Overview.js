import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Header, List, ListItem} from 'react-native-elements'

export default class Overview extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    backgroundColor="#333"
                    centerComponent={{text: 'Overview', style: {color: '#fff', fontSize: 18}}}
                />
                <View style={{height: 50, justifyContent: 'center', alignItems: 'center',}}><Text style={styles.menuText}>Today's Priorities</Text></View>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={styles.text}>Project</Text>
                        <Text style={styles.text}>Learn Spanish</Text>
                        <Text style={styles.text}>Training</Text>
                        <Text style={styles.text}>Homework</Text>
                    </View>
                    <View style={{flex: 2,}}>

                    </View>
                </View>
                <View style={{height: 50, justifyContent: 'center', alignItems: 'center',}}><Text style={styles.menuText}>Today's Schedule</Text></View>
                <View style={{flex: 1.5, borderWidth: 1, borderColor: '#222'}}>
                    <View style={{flex: 1,justifyContent: 'space-around', alignItems: 'center', flexDirection:'row', backgroundColor: '#ddd'}}>
                        <Text>8:00</Text>
                        <Text>Project</Text>
                    </View>
                    <View style={{flex: 1,justifyContent: 'space-around', alignItems: 'center', flexDirection:'row'}}>
                        <Text>10:00</Text>
                        <Text>Project</Text>
                    </View>
                    <View style={{flex: 1,justifyContent: 'space-around', alignItems: 'center', flexDirection:'row', backgroundColor: '#ddd'}}>
                        <Text>12:00</Text>
                        <Text>Project</Text>
                    </View>
                    <View style={{flex: 1,justifyContent: 'space-around', alignItems: 'center', flexDirection:'row'}}>
                        <Text>14:00</Text>
                        <Text>Project</Text>
                    </View>
                    <View style={{flex: 1,justifyContent: 'space-around', alignItems: 'center', flexDirection:'row', backgroundColor: '#ddd'}}>
                        <Text>16:00</Text>
                        <Text>Project</Text>
                    </View>
                    <View style={{flex: 1,justifyContent: 'space-around', alignItems: 'center', flexDirection:'row'}}>
                        <Text>19:00</Text>
                        <Text>Project</Text>
                    </View>
                </View>
                <View style={{height: 50, justifyContent: 'center', alignItems: 'center',}}><Text style={styles.menuText}>Today's Progress</Text></View>
                <View style={{flex: 1}}>
                    <View style={{flex:1}}/>
                    <View style={{flex: 1, flexDirection: 'row', borderWidth: 1, borderColor: '#222'}}>
                        <View style={{flex: 6, backgroundColor: '#555'}}/>
                        <View style={{flex: 4,}}/>
                    </View>
                    <View style={{flex:1}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 17,
        color: '#222',
    },
    menuText: {
        fontSize: 20,
        color: '#222'
    },
    activity: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#555555'
    },
});