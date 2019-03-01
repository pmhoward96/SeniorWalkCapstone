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
        formDataFromChild: null,
        locations: [],
        testData: []
    }
  }

  handleFormData = (formData) => {
      this.setState({ formDataFromChild: formData })
  };

  componentDidUpdate() {

      // this is place holder code for now, let's expand on this to perform the test
      // need to SEND formDataFromChild and return location data.
    // axios.get('http://localhost:3000/',{
    //     params: {
    //         firstName: this.state.formDataFromChild['firstName'],
    //         lastName:  this.state.formDataFromChild['lastName'],
    //         year:      this.state.formDataFromChild['year']
    //     }
    // }).then(res => {
    //         const locations = res.data;
    //         this.setState({ locations });
    //     })
  }

  render() {
    return (
      <div className="App">
        <InputFields callbackFormData={this.handleFormData}/>


          {/* this section right here is to test using data collected in InputFields child */}
          {this.state.formDataFromChild &&
            <h1>
                {/*{this.state.formDataFromChild['firstName'] + ' ' + this.state.formDataFromChild['lastName'] + ' ' + this.state.formDataFromChild['year']}*/}
                { "received: " + this.state.formDataFromChild }
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