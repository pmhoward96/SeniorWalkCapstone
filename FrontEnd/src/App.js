import React, { Component } from 'react';
import './App.css';
import {InputFields}  from "./InputFields";
import {TopBanner}    from "./TopBanner";
import MapContainer   from "./MapContainer";


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        inputData: null,
        locations: [],
        testData: []
    }
  }

  handleFormData = (formData) => {
      this.setState({ inputData: formData });
      // this.state.locations.append(formData); // to do: confirm this works/syntax
  };

  render() {
    return <div className="App">
        <TopBanner/>
        <InputFields callbackFormData={this.handleFormData}/>
        {/* this section is to test using data collected in InputFields child */}
        {this.state.inputData &&
        <h1>
            {"received: " + this.state.inputData.lat + " " + this.state.inputData.lng + " " + this.state.inputData.year}
        </h1>
        }
        <MapContainer/>
    </div>;
  }
}

