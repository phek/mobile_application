import React, {Component} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import MapView from 'react-native-maps';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            },
            markerPosition: {
                latitude: 0,
                longitude: 0
            }
        };
    }

    watchID: ?number = null;

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let lat = parseFloat(position.coords.latitude);
                let long = parseFloat(position.coords.longitude);
                let initialRegion = {
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                };
                this.setState({initialPosition: initialRegion});
                this.setState({markerPosition: initialRegion});
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});

        this.watchID = navigator.geolocation.watchPosition((position => {
            let lat = parseFloat(position.coords.latitude);
            let long = parseFloat(position.coords.longitude);
            let lastRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            };
            this.setState({initialPosition: lastRegion});
            this.setState({markerPosition: lastRegion});
        }));
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    outerContainerStyles={{height: 51, borderBottomColor: '#2ecc71', borderBottomWidth: 2}}
                    backgroundColor="#333"
                    centerComponent={{text: 'MAP', style: {color: '#fff'}}}
                />
                <View style={{flex: 1}}>
                    <MapView
                        style={{flex: 1, width: "100%"}}
                        region={this.state.initialPosition}>
                        <MapView.Marker
                            coordinate={this.state.markerPosition}>
                            <View style={styles.radius}>
                                <View style={styles.marker}/>
                            </View>
                        </MapView.Marker>
                    </MapView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    radius: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 122, 255, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(0, 112, 255, 0.3)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    marker: {
        height: 20,
        width: 20,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 20 / 2,
        overflow: 'hidden',
        backgroundColor: '#007AFF'
    }
});