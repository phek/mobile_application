    import React from 'react';
    import {TabNavigator, TabBarBottom} from 'react-navigation';
    import {Icon} from 'react-native-elements';

    import StatisticsDay from './components/statistics/StatisticsDay';
    import Map from './components/map/Map';
    import BottomBar from './components/bottom-bar/BottomBar';

    export const Tabs = TabNavigator({
        Map:{
            screen: Map,
            navigationOptions: {
                tabBarLabel: 'Map',
                tabBarIcon: () => <Icon type='entypo' name='location' color="#fff"/>,
            },
        },
        StatisticsDay:{
            screen: StatisticsDay,
            navigationOptions: {
                tabBarLabel: 'Stats',
                tabBarIcon: () => <Icon type='entypo' name='calendar' color="#fff"/>,
            },
        },
    },{
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            inactiveBackgroundColor: '#333',
            activeBackgroundColor: '#444',
            labelStyle: { color: '#fff',},
        },
    })