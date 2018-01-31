import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import './map.css';
import TitleBar from '../building-blocks/titlebar/TitleBar';

class MapContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TitleBar title="Map"/>
                <Map
                    google={this.props.google}
                    className="map"
                    zoom={14} initialCenter={{
                    lat: 59.4024341,
                    lng: 17.9464824
                }}
                >
                    <Marker name={'Current location'}/>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBQnLL3XdhKRxWiqpF_tex24_2T370tzio")
})(MapContainer)