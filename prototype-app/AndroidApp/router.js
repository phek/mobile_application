    import React from 'react';
    import {TabNavigator, TabBarBottom} from 'react-navigation';
    import {Icon} from 'react-native-elements';

    import Overview from './components/overview/Overview';
    import StatisticsDay from './components/statistics/StatisticsDay';
    import Planning from './components/planning/Planning';
    import Map from './components/map/Map';
    import Settings from './components/settings/Settings';


    export const Tabs = TabNavigator({
        Overview: {
            screen: Overview,
            navigationOptions: {
                tabBarLabel: 'Overview',
                tabBarIcon: () => <Icon type='entypo' name='home' color="#fff"/>,
            }
        },
        StatisticsDay:{
            screen: StatisticsDay,
            navigationOptions: {
                tabBarLabel: 'Statistics',
                tabBarIcon: () => <Icon type='entypo' name='area-graph' color="#fff"/>,
            },
        },
        Planning:{
            screen: Planning,
            navigationOptions: {
                tabBarLabel: 'Planning',
                tabBarIcon: () => <Icon type='entypo' name='calendar' color="#fff"/>,
            },
        },
        Map:{
            screen: Map,
            navigationOptions: {
                tabBarLabel: 'Map',
                tabBarIcon: () => <Icon type='entypo' name='location' color="#fff"/>,
            }
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                tabBarLabel: 'Settings',
                tabBarIcon: () => <Icon type='entypo' name='cog' color="#fff"/>,
            }
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