import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default class StatisticsWeek extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            categoryArray: []
        };
    }

    componentDidMount() {
        this.getCategoriesFromApi();
    }

    getCategoriesFromApi() {
        fetch('http://84.217.10.60:3000/productivity/processLog')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({data: responseJson});
                this.sumCategories();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    sumCategories() {
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
        let categoryArray =
        [{name:"gaming",duration:gaming},{name:"productive",duration:productive},{name:"browsing",duration:browsing}];

       this.setState({categoryArray: categoryArray});
       this.setState({gaming: gaming, productive: productive, browsing: browsing});
    }

    getTimeInSeconds(start, stop) {
        return (stop - start) / 1000;
    }


    render() {

        let keyInt = 0;

        let activityArr = this.state.categoryArray;
        let activityList = activityArr.map(activity =>
            <View key={keyInt++} style={{flexDirection: 'row'}} padding={10}>
                <View style={{flex: 1}}/>
                <View style={[styles.activity, {flex: 4, height: 70}]}><Text
                    style={styles.prioText}>{activity.name}  {Math.round(activity.duration/60)} min</Text></View>
                <View style={{flex: 1}}/>
            </View>
        );

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
                        style={styles.text}>{Math.round((this.state.productive/(this.state.gaming+this.state.browsing))*100)/100}%</Text></View>
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
