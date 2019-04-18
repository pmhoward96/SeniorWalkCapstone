import React, { Component } from 'react';
import './App.css';
import {Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: 1080,
    height: 600,
    top: -160,
    margin: 15,
    padding: 0

};

export class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.render = this.render.bind(this);
    }

    render() {
        // convert array of location objects to a set of <Marker> to render
        let markers = this.props.locations.map((object, i) => {
           return(
            <Marker
                key={i}
                title={object.firstName + " " + object.lastName}
                position={{lat: parseFloat(object.lat), lng: parseFloat(object.lng)}}
            />
           );
        });

        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={17}
                    style={mapStyles}
                    initialCenter={{
                        lat: 36.068185,
                        lng: -94.173392
                    }}
                    className={'map'}>
                    {markers}
                </Map>
            </div>
        );
    }

}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_MAP_API_KEY
})(MapContainer)