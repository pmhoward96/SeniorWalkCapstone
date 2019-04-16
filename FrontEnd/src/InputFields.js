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



    handleSubmit(event) {
        event.preventDefault();
        // here, we are using JSONplaceholder to test the form submit
        // to test, an option is FirstName: Ervin LastName: Howell
        // check site for others
        axios.get('https://jsonplaceholder.typicode.com/users', {
            params: {
                name: this.state.firstName + " " + this.state.lastName
            }
        }).then( (response) => {
            console.log(response);
            this.setState({ lat: response.data[0].address.geo.lat});
            this.setState({ lng: response.data[0].address.geo.lng}, () => {
                // this callback function is so that the state is updated before passing data back
                // necessary because setState() is asynchronous
                this.handleFormDataChange();
            }
            );

        }).catch(function(error){
            console.log(error);
        });
const data = this.state
        console.log(data);

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

                    <h2>Your Location Information:</h2>
                <div>First name is: {firstName}</div>
                <div>Lat: {lat}</div>
                <div>Lng: {lng}</div>
                </div>
            </div>
        );
    }
}