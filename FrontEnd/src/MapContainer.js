import React, { Component } from 'react';
import './App.css';
import {Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '50  %',
    height: 700
};

export class MapContainer extends Component {
    constructor(props) {
        super(props);
    }

    static onMarkerClick() {
        window.alert('this is annoying')
    }

    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                        lat: 36.068185,
                        lng: -94.173392
                    }}
                    className={'map'}
                >

                    {/*to do: add for loop to iterate through this.state.locations and generate markers*/}


                    <Marker onClick={MapContainer.onMarkerClick}

                            title={'Hello World'}
                            name={'Current location'}
                            position={{lat: 36.078185, lng: -94.173392}} />

                    <Marker onClick={MapContainer.onMarkerClick}
                            title={'Hello World'}
                            name={'Second Marker'}
                            position={{lat: 36.059703, lng: -94.173392}} />
                    <Marker onClick={MapContainer.onMarkerClick}
                            title={'Hello World'}
                            name={'Third Marker'}
                            position={{lat: 36.082391, lng: -94.173392}} />
                </Map>
            </div>
        );
    }

}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_MAP_API_KEY
})(MapContainer)