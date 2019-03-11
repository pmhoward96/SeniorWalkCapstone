import React, { Component } from 'react';
import './App.css';
import {Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import {InputFields} from "./InputFields";
import {TopBanner} from "./TopBanner";


const mapStyles = {
    width: '50  %',
    height: 700
};

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        formDataFromChild: null,
        locations: [],
        testData: []
    }
  }

  handleFormData = (formData) => {
      this.setState({ formDataFromChild: formData })
  };

  onMarkerClick() {
      window.alert('this is annoying')
  }

  render() {
    return (
      <div className="App">
          <TopBanner/>
        <InputFields callbackFormData={this.handleFormData}/>


          {/* this section right here is to test using data collected in InputFields child */}
          {this.state.formDataFromChild &&
            <h1>
                { "received: " + this.state.formDataFromChild.lat + " " + this.state.formDataFromChild.lng }
            </h1>
          }

        <br/><br/><br/>
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
              <Marker onClick={this.onMarkerClick}

                      title={'Hello World'}
                      name={'Current location'}
                      position={{lat: 36.078185, lng: -94.173392}} />

              <Marker onClick={this.onMarkerClick}
                      title={'Hello World'}
                      name={'Second Marker'}
                      position={{lat: 36.059703, lng: -94.173392}} />
              <Marker onClick={this.onMarkerClick}
                      title={'Hello World'}
                      name={'Third Marker'}
                      position={{lat: 36.082391, lng: -94.173392}} />
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_MAP_API_KEY
})(MapContainer)