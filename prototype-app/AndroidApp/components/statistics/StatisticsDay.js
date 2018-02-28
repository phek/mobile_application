import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default class StatisticsDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount() {
        this.getCategoriesFromApi();
    }

    getCategoriesFromApi(){
        return fetch('http://84.217.10.60:3000/productivity/categories')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({data: responseJson});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <View style={{flex: 4, flexDirection: 'row', backgroundColor: '#dbdbdb'}}>
                    <ScrollView style={{flex: 2, backgroundColor: '#cdcdcd'}}>
                        <View style={{flexDirection: 'row'}} padding={10}>
                            <View style={[styles.activity, {flex: 1, height: 100}]}><Text
                                style={styles.text}>{this.state.data.gaming}</Text></View>
                            <View style={{width: 1, backgroundColor: '#afafaf'}}/>
                            <View style={[styles.activity, {flex: 2, height: 100}]}><Text
                                style={styles.text}>Gaming</Text></View>
                        </View>
                        <View style={{flexDirection: 'row'}} padding={10}>
                            <View style={[styles.activity, {flex: 1, height: 100}]}><Text
                                style={styles.text}>{this.state.data.productive}</Text></View>
                            <View style={{width: 1, backgroundColor: '#afafaf'}}/>
                            <View style={[styles.activity, {flex: 2, height: 100}]}><Text
                                style={styles.text}>Productive</Text></View>
                        </View>
                        <View style={{flexDirection: 'row'}} padding={10}>
                            <View style={[styles.activity, {flex: 1, height: 100}]}><Text
                                style={styles.text}>{this.state.data.browsing}</Text></View>
                            <View style={{width: 1, backgroundColor: '#afafaf'}}/>
                            <View style={[styles.activity, {flex: 2, height: 100}]}><Text
                                style={styles.text}>Browsing</Text></View>
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
