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
        locations: []
    }

    this.handleFormData = this.handleFormData.bind(this);
    this.render = this.render.bind(this);
  }

  handleFormData = (formData) => {
      this.setState({ inputData: formData });

      // attach form data to start of locations array in state
      this.setState(state => {
          const locations = [...state.locations, state.inputData];
          return {
              locations,
              formData: '',
          };
      });
  };

  render() {
    return <div className="App">
        <TopBanner/>
        <InputFields callbackFormData={this.handleFormData}/>
        <MapContainer locations={this.state.locations}/>
    </div>;
  }
}

