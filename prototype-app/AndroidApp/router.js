    import React from 'react';
    import {TabNavigator, TabBarBottom, TabBarTop} from 'react-navigation';
    import {Icon} from 'react-native-elements';

    import Overview from './components/overview/Overview';
    import Planning from './components/planning/Planning';
    import Map from './components/map/Map';
    import Settings from './components/settings/Settings';
    import Statistics from './components/statistics/Statistics';
    import StatisticsDay from './components/statistics/StatisticsDay';
    import StatisticsWeek from "./components/statistics/StatisticsWeek";

    export const Tabs2 = TabNavigator({
        StatsDay: {
            screen: StatisticsDay,
            navigationOptions: {
                tabBarLabel: 'Day',
            }
        },
        StatsWeek: {
            screen: StatisticsWeek,
            navigationOptions: {
                tabBarLabel: 'Week',
            }
        }
    },{
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
        swipeEnabled: false,
        animationEnabled: false,
        tabBarOptions: {
            labelStyle: { color: '#fff',},
            style: {backgroundColor: '#333'}
        },
    });

    export const Tabs = TabNavigator({
        Overview: {
            screen: Overview,
            navigationOptions: {
                tabBarLabel: 'Overview',
                tabBarIcon: () => <Icon type='entypo' name='home' color="#fff"/>,
                headerLeft: null,
            }
        },
        Statistics:{
            screen: Statistics,
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
        swipeEnabled: false,
        animationEnabled: false,
        tabBarOptions: {
            inactiveBackgroundColor: '#333',
            activeBackgroundColor: '#444',
            labelStyle: { color: '#fff',},
        },
    });