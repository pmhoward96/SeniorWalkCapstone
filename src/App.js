import React, { Component } from 'react';
import './App.css';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import axios from 'axios';
import {InputFields} from "./InputFields";


const mapStyles = {
    width: '50  %',
    height: 500
};

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        formDataFromChild: null,
        locations: []
    }
  }

  handleFormData = (formData) => {
      this.setState({ formDataFromChild: formData })
  }

  componentDidUpdate() {
      // this is place holder code for now, let's expand on this to perform the test
      // need to SEND formDataFromChild and return location data.
    axios.get('http://localhost:3000/',{
        params: {
            firstName: this.state.formDataFromChild['firstName'],
            lastName:  this.state.formDataFromChild['lastName'],
            year:      this.state.formDataFromChild['year']
        }
    }).then(res => {
            const locations = res.data;
            this.setState({ locations });
        })
  }

  render() {
    return (
      <div className="App">
        <InputFields callbackFormData={this.handleFormData}/>


          {/* this section right here is to test using data collected in InputFields child */}
          {this.state.formDataFromChild &&
            <h1>
                {this.state.formDataFromChild['firstName'] + ' ' + this.state.formDataFromChild['lastName'] + ' ' + this.state.formDataFromChild['year']}
            </h1>
          }

        <br/><br/><br/>
        <div>
            <Map google={this.props.google}
                 style={{width: '100%', height: '100%', position: 'relative'}}
                 initialCenter={{
                     lat: 36.068185,
                     lng: -94.173392
                 }}
                 className={'map'}
                 zoom={14}>
                <Marker
                    title={'Hello World'}
                    name={'First Marker'}
                    position={{lat: 36.068185, lng: -94.173392}} />
                <Marker
                    title={'Hello World'}
                    name={'Second Marker'}
                    position={{lat: 36.059703, lng: -94.173392}} />
                <Marker />
                <Marker
                    title={'Hello World'}
                    name={'Third Marker'}
                    position={{lat: 36.082391, lng: -94.173392}}
                     />
            </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_MAP_API_KEY
})(MapContainer)