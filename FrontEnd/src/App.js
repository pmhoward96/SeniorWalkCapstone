import React, { Component } from 'react';
import './App.css';
import {Map, GoogleApiWrapper } from 'google-maps-react';
import {InputFields} from "./InputFields";


const mapStyles = {
    width: '50  %',
    height: 500
};

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        formDataFromChild: null
    }
  }

  handleFormData = (formData) => {
      this.setState({ formDataFromChild: formData })
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
          <Map
              google={this.props.google}
              zoom={18}
              style={mapStyles}
              initialCenter={{
                  lat: 36.068185,
                  lng: -94.173392
              }}
          />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_MAP_API_KEY
})(MapContainer)