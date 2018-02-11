import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableHighlight} from 'react-native';

export default class StatisticsDay extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <View style={{height: 65, backgroundColor: '#333', flexDirection: 'row'}}>
                    <TouchableHighlight
                        style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#444'}}
                        onPress={() => {
                            this.props.navigation.navigate('StatsDay')
                        }}>
                        <Text style={styles.menuText}>Day</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}
                                        onPress={() => {
                                            this.props.navigation.navigate('StatsWeek')
                                        }}>
                        <Text style={styles.menuText}>Week</Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex: 4, flexDirection: 'row', backgroundColor: '#dbdbdb'}}>
                    <ScrollView style={{flex: 2, backgroundColor: '#cdcdcd'}}>
                        <View style={{flexDirection: 'row'}} padding={10}>
                            <View style={[styles.activity, {flex: 1, height: 100}]}><Text
                                style={styles.text}>9:00</Text></View>
                            <View style={{width: 1, backgroundColor: '#afafaf'}}/>
                            <View style={[styles.activity, {flex: 2, height: 100}]}><Text
                                style={styles.text}>Idle</Text></View>
                        </View>
                        <View style={{flexDirection: 'row'}} padding={10}>
                            <View style={[styles.activity, {flex: 1, height: 100}]}><Text
                                style={styles.text}>10:00</Text></View>
                            <View style={{width: 1, backgroundColor: '#afafaf'}}/>
                            <View style={[styles.activity, {flex: 2, height: 100}]}><Text
                                style={styles.text}>Project</Text></View>
                        </View>
                        <View style={{flexDirection: 'row'}} padding={10}>
                            <View style={[styles.activity, {flex: 1, height: 100}]}><Text
                                style={styles.text}>12:00</Text></View>
                            <View style={{width: 1, backgroundColor: '#afafaf'}}/>
                            <View style={[styles.activity, {flex: 2, height: 100}]}><Text
                                style={styles.text}>Homework</Text></View>
                        </View>
                        <View style={{flexDirection: 'row'}} padding={10}>
                            <View style={[styles.activity, {flex: 1, height: 100}]}><Text
                                style={styles.text}>15:00</Text></View>
                            <View style={{width: 1, backgroundColor: '#afafaf'}}/>
                            <View style={[styles.activity, {flex: 2, height: 100}]}><Text
                                style={styles.text}>Training</Text></View>
                        </View>
                        <View style={{flexDirection: 'row'}} padding={10}>
                            <View style={[styles.activity, {flex: 1, height: 100}]}><Text
                                style={styles.text}>18:00</Text></View>
                            <View style={{width: 1, backgroundColor: '#afafaf'}}/>
                            <View style={[styles.activity, {flex: 2, height: 100}]}><Text
                                style={styles.text}>Idle</Text></View>
                        </View>
                    </ScrollView>
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
        color: '#cdcdcd'
    },
    menuText: {
        fontSize: 20,
        color: '#cdcdcd'
    },
    activity: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#555555'
    },
});
