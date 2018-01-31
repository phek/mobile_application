import React from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import './map.css';
import TitleBar from '../building-blocks/titlebar/TitleBar';

class MapContainer extends React.Component {

    placeMarker(mapProps, map) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const {google} = mapProps;
                const marker = new google.maps.Marker({
                    position: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    },
                    map: map,
                    title: 'Hello World!'
                });
            });
        } else {
            //"Geolocation is not supported by this browser."
        }
    }

    render() {
        return (
            <div>
                <TitleBar title="Map"/>
                <Map
                    google={this.props.google}
                    onReady={this.placeMarker}
                    className="map"
                    centerAroundCurrentLocation={true}
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBQnLL3XdhKRxWiqpF_tex24_2T370tzio")
})(MapContainer)