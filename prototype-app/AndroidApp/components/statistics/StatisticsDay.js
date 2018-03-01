import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {scheduleNotification} from '../tools/notifications';

export default class StatisticsDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.shouldAlert = true;
    }

    componentDidMount() {
        const updateInterval = 10; // seconds

        this.getCategoriesFromApi();
        setInterval(() => {
            this.getCategoriesFromApi();
        }, 1000 * updateInterval);
    }

    getCategoriesFromApi() {
        fetch('http://84.217.10.60:3000/productivity/processLog')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({data: responseJson});
                this.isUnproductive();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    isUnproductive() {
        let gaming = 0;
        let productive = 0;
        let browsing = 0;
        this.state.data.forEach((value) => {
            switch (value.type) {
                case 'gaming':
                    gaming += this.getTimeInSeconds(value.start, value.stop);
                    break;
                case 'productive':
                    productive += this.getTimeInSeconds(value.start, value.stop);
                    break;
                case 'browsing':
                    browsing += this.getTimeInSeconds(value.start, value.stop);
                    break;
            }
        });
        if (gaming > productive) {
            if (this.shouldAlert) {
                scheduleNotification("You seem to be unproductive!");
                this.shouldAlert = false;
            }
        } else {
            this.shouldAlert = true;
        }
    }

    getTimeInSeconds(start, stop) {
        return (stop - start) / 1000;
    }

    render() {
        let keyInt = 0;

        let activityArr = this.state.data;
        let activityList = activityArr.map(activity =>
            <View key={keyInt++} style={{flexDirection: 'row'}} padding={10}>
                <View style={[styles.activity, {flex: 1, height: 100}]}>
                    <Text style={styles.text}>{Math.round((activity.stop - activity.start) / 1000) / 60} min</Text>
                </View>
                <View style={{width: 1, backgroundColor: '#afafaf'}}/>
                <View style={[styles.activity, {flex: 2, height: 100}]}>
                    <Text style={styles.text}>{activity.name}</Text>
                </View>
            </View>
        );

        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <View style={{flex: 4, flexDirection: 'row', backgroundColor: '#dbdbdb'}}>
                    <ScrollView style={{flex: 2, backgroundColor: '#cdcdcd'}}>
                        {activityList}
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
