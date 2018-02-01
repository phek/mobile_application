import React from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import $ from 'jquery';
import './map.css';
import TitleBar from '../building-blocks/titlebar/TitleBar';


class MapContainer extends React.Component {

    constructor(props) {
        super(props);

        /* Hi my name is React and I want to bind my function before I use them */
        this.tryGeolocation = this.tryGeolocation.bind(this);
        this.tryGoogleGeolocation = this.tryGoogleGeolocation.bind(this);
        this.placeMarker = this.placeMarker.bind(this);
    }

    tryGoogleGeolocation(callback) {
        $.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBQnLL3XdhKRxWiqpF_tex24_2T370tzio", function (success) {
            const pos = {
                lat: success.location.lat,
                lng: success.location.lng
            };
            callback(pos);
        }).fail(function (err) {
            alert("Geolocation error!");
            console.log(err);
        });
    }

    tryGeolocation(callback) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    callback(pos);
                },
                (error) => {
                    this.tryGoogleGeolocation(callback);
                });
        }
    };


    placeMarker(mapProps, map) {
        this.tryGeolocation(function (position) {
            const {google} = mapProps;
            new google.maps.Marker({
                position: position,
                map: map,
                title: 'Hello World!'
            });
            map.setCenter(position);
        });
    }

    render() {
        return (
            <div>
                <TitleBar title="Map"/>
                <Map
                    google={this.props.google}
                    onReady={this.placeMarker}
                    className="map"
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBQnLL3XdhKRxWiqpF_tex24_2T370tzio")
})(MapContainer)