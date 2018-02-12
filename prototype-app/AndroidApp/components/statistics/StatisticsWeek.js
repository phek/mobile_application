import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default class StatisticsWeek extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <View style={{flex: 1, flexDirection: 'row',}}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text
                        style={styles.text}>Productivity</Text></View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text
                        style={styles.text}>55%</Text></View>
                </View>
                <View style={{flex: 1, flexDirection: 'row',}}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#999'}}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>Mon</Text></View>
                        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}><Text>40%</Text></View>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>Tue</Text></View>
                        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}><Text>48%</Text></View>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#999'}}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>Wed</Text></View>
                        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}><Text>50%</Text></View>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>Thu</Text></View>
                        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}><Text>62%</Text></View>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#999'}}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>Fri</Text></View>
                        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}><Text>53%</Text></View>
                    </View>
                </View>
                <View style={{flex: 4,}}>
                    <ScrollView style={{flex: 1, backgroundColor: '#cdcdcd'}}>
                        <View style={{flexDirection: 'row'}} padding={10}>
                            <View style={{flex: 1}}/>
                            <View style={[styles.activity, {flex: 4, height: 70}]}><Text
                                style={styles.prioText}>Project 10h</Text></View>
                            <View style={{flex: 1}}/>
                        </View>
                        <View style={{flexDirection: 'row'}} padding={10}>
                            <View style={{flex: 1}}/>
                            <View style={[styles.activity, {flex: 4, height: 70}]}><Text
                                style={styles.prioText}>Danger Zone 15h</Text></View>
                            <View style={{flex: 1}}/>
                        </View>
                        <View style={{flexDirection: 'row'}} padding={10}>
                            <View style={{flex: 1}}/>
                            <View style={[styles.activity, {flex: 4, height: 70}]}><Text
                                style={styles.prioText}>Homework 12h</Text></View>
                            <View style={{flex: 1}}/>
                        </View>
                        <View style={{flexDirection: 'row'}} padding={10}>
                            <View style={{flex: 1}}/>
                            <View style={[styles.activity, {flex: 4, height: 70}]}><Text
                                style={styles.prioText}>Workout 10h</Text></View>
                            <View style={{flex: 1}}/>
                        </View>
                        <View style={{flexDirection: 'row'}} padding={10}>
                            <View style={{flex: 1}}/>
                            <View style={[styles.activity, {flex: 4, height: 70}]}><Text
                                style={styles.prioText}>Spanish 4h</Text></View>
                            <View style={{flex: 1}}/>
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
        fontSize: 20,
        color: '#222'
    },
    prioText: {
        fontSize: 20,
        color: '#eee',
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
