import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from 'react-native-elements';
import MapView from 'react-native-maps';

export default class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mapRegion: null,
            latitude: null,
            longitude: null,
            error: null,
        };
    }

    componentDidMount() {
        this.watchID = navigator.geolocation.watchPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
                let region = {
                    latitude:       position.coords.latitude,
                    longitude:      position.coords.longitude,
                    latitudeDelta:  0.00922*1.5,
                    longitudeDelta: 0.00421*1.5
                }
                this.onRegionChange(region, region.latitude, region.longitude);
            },
            (error) => this.setState({error: error.message}),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
    }

    onRegionChange(region, lastLat, lastLong) {
        this.setState({
            mapRegion: region,
            lastLat: lastLat || this.state.lastLat,
            lastLong: lastLong || this.state.lastLong
        });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    backgroundColor="#333"
                    centerComponent={{text: 'Map', style: {color: '#fff'}}}
                />
                <View style={{flex: 1}}>
                    <MapView
                        style={{ flex: 1, width: "100%" }}
                        region={this.state.mapRegion}
                        showsUserLocation={true}
                        followUserLocation={true}
                        onRegionChange={this.onRegionChange.bind(this)}>
                        <MapView.Marker
                            coordinate={{
                                latitude: (this.state.lastLat + 0.00050) || -32.82339,
                                longitude: (this.state.lastLong + 0.00050) || -33.03569,
                            }}>
                            <View>
                                <Text style={{color: '#000'}}>
                                    { this.state.lastLong } / { this.state.lastLat }
                                </Text>
                            </View>
                        </MapView.Marker>
                    </MapView>
                </View>
            </View>
        );
    }
}