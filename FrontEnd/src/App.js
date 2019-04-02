import React, { Component } from 'react';
import './App.css';
import {InputFields}  from "./InputFields";
import {TopBanner}    from "./TopBanner";
import MapContainer   from "./MapContainer";


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        formDataFromChild: null,
        locations: [],
        testData: []
    }
  }

  handleFormData = (formData) => {
      this.setState({ formDataFromChild: formData });
      // this.state.locations.append(formData); // to do: confirm this works/syntax
  };

  render() {
    return (
      <div className="App">
          <TopBanner/>
        <InputFields callbackFormData={this.handleFormData}/>

          {/* this section is to test using data collected in InputFields child */}
          {this.state.formDataFromChild &&
            <h1>
                { "received: " + this.state.formDataFromChild.lat + " " + this.state.formDataFromChild.lng }
            </h1>
          }

        <br/><br/><br/>
        <MapContainer/>
      </div>
    );
  }
}

