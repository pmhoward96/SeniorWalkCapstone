import React from 'react';
import axios from 'axios';

export class InputFields extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            year: 2017,
            lat: -1,
            lng: -1
        };

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleFirstNameChange(event) {
        this.setState({firstName: event.target.value});
    }

    handleLastNameChange(event) {
        this.setState({lastName: event.target.value});
    }

    handleYearChange(event) {
        this.setState({year: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {firstName, lastName, year} = this.state;
        console.log(firstName, lastName, year)
        // try {
        //     const response = await axios.post('/api/latlong', {
        //         firstname: firstName,
        //         lastname: lastName,
        //         year
        //     });
        //
        //     this.setState({ lat: response.data.latitude});
        //     this.setState({ lng: response.data.longitude}, () => {
        //         // this callback function is so that the state is updated before passing data back
        //         // necessary because setState() is asynchronous
        //         this.handleFormDataChange();
        //     });
        // } catch (err) {
        //     console.log(err);
        // }

    }

    // clear form data and call function in App.js to clear stored data
    handleReset(event) {
        this.setState({
           firstName: '',
           lastName: '',
           year: 2017,
           location: null
        });

        this.props.callbackReset();
    }

    // returns lat, lng, and year info to App.js
    handleFormDataChange = () => {
        let formData = { firstName: this.state.firstName,
                         lastName:  this.state.lastName,
                         lat:       this.state.lat,
                         lng:       this.state.lng,
                         year:      this.state.year};

        this.props.callbackFormData(formData);
    }

    render() {
        const {firstName} = this.state;
        const {lat} = this.state;
        const {lng} = this.state;
        const {year} = this.state;


        // preparing list of dates for drop down select
        let firstYear = 1876;
        let lastYear = 2017;
        let years = [];
        for (let i = firstYear; i <= lastYear; i++) {
            years.push(i);
        }

        const yearList = years.map((x) => {return(<option key={x}>{x}</option>)});

        return (
            <div>
                <form className={"App-button"}
                      onSubmit={this.handleSubmit}
                      onReset={this.handleReset}>

                    <label className={"App-button"}>
                        First Name:
                        <input type="text"
                               value={this.state.firstName}
                               onChange={this.handleFirstNameChange} />
                    </label>
                    <br/>
                    <label className = {"App-button"}>
                        Last Name:
                        <input type="text"
                               value = {this.state.lastName}
                               onChange={this.handleLastNameChange} />
                    </label>
                    <br/>
                    <label class = {"grad-button"}>
                        Graduation Year:
                        <select value={this.state.year}
                                onChange={this.handleYearChange}>
                            {yearList}
                        </select>

                    <br/> <br/>

                    <input className={"App"} type="submit" value="Submit" />
                    <input className={"App"} type="reset" value="Reset" />
                    </label>

                </form>

                <div class="container">

                <div>Current Name: {firstName}</div>
                <div>Current Pin Latitude: {lat}</div>
                <div>Current Pin Longitude: {lng}</div>
                </div>
            </div>
        );
    }
}
