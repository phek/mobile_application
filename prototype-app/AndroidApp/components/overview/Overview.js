import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scheduleNotification} from '../tools/notifications';
import Header from "react-native-elements/src/header/Header";

export default class Overview extends Component {
    componentDidMount() {
        scheduleNotification("Hi", 10);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    outerContainerStyles={{height: 51, borderBottomColor: '#3498db', borderBottomWidth: 2}}
                    backgroundColor="#333"
                    centerComponent={{text: 'OVERVIEW', style: {color: '#fff'}}}
                />
                <View style={{height: 50, justifyContent: 'center', alignItems: 'center',}}><Text
                    style={styles.menuText}>Today's Priorities</Text></View>
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
                <View style={{height: 50, justifyContent: 'center', alignItems: 'center',}}><Text
                    style={styles.menuText}>Today's Schedule</Text></View>
                <View style={{flex: 1.5, borderWidth: 1, borderColor: '#222'}}>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        flexDirection: 'row',
                        backgroundColor: '#ddd'
                    }}>
                        <View style={{flex: 1}}>
                            <Text style={{textAlign: 'center'}}>08:00 - 10:00</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={{textAlign: 'center'}}>Training</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <Text style={{textAlign: 'center'}}>10:00 - 12:00</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={{textAlign: 'center'}}>School</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        flexDirection: 'row',
                        backgroundColor: '#abdda9'
                    }}>
                        <View style={{flex: 1}}>
                            <Text style={{textAlign: 'center'}}>12:00 - 14:00</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={{textAlign: 'center'}}>Free Time</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <Text style={{textAlign: 'center'}}>14:00 - 16:00</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={{textAlign: 'center'}}>Homework</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        flexDirection: 'row',
                        backgroundColor: '#ddd'
                    }}>
                        <View style={{flex: 1}}>
                            <Text style={{textAlign: 'center'}}>16:00 - 19:00</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={{textAlign: 'center'}}>Project</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <Text style={{textAlign: 'center'}}>19:00 - 21:00</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={{textAlign: 'center'}}>Learn Spanish</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        flexDirection: 'row',
                        backgroundColor: '#ddd'
                    }}>
                        <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                            <View style={{flex: 1}}>
                                <Text style={{textAlign: 'center'}}>21:00 - 23:00</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{textAlign: 'center'}}>Free Time</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{height: 50, justifyContent: 'center', alignItems: 'center',}}><Text
                    style={styles.menuText}>Today's Progress</Text></View>
                <View style={{flex: 1}}>
                    <View style={{flex: 1}}/>
                    <View style={{flex: 1, flexDirection: 'row', borderWidth: 1, borderColor: '#222'}}>
                        <View style={{flex: 2, backgroundColor: '#e35f4f'}}/>
                        <View style={{flex: 8,}}/>
                    </View>
                    <View style={{flex: 1}}/>
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