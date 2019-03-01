import React from 'react';
import axios from 'axios';

export class InputFields extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            year: 2017,
            location: null
        };

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        axios.get('https://jsonplaceholder.typicode.com/users', {
            params: {
                name: this.state.firstName + " " + this.state.lastName
            }
        }).then( (response) => {
            console.log(response);
            this.setState({ location: response.data[0].username });
        }).catch(function(error){
            console.log(error);
        });

      this.handleFormDataChange();
    }

    handleReset(event) {
        // do something
    }

    handleFormDataChange = () => {

        // let formData = { firstName: this.state.firstName,
        //                   lastName: this.state.lastName,
        //                       year: this.state.year};

        let formData = this.state.locations;

        this.props.callbackFormData(formData);
    }

    render() {

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
                <div>
                        <div className={"App-color2"}>
                            <div className={"App-image"}>
                                <img src="universitylogo2.png" alt="University Logo" width= "250px" height ="250px"></img>
                            </div>
                        </div>
                        <div className={"App-color"}>
                            <h1 className={"App-title"} >
                                University of Arkansas
                                <br/>Senior Walk
                            </h1>

                        </div>
                        <div className={"App-color2"} >
                            <img src="hoglogo1.gif" alt="Hog Logo" width= "250px" height ="250px" align="right"></img>
                        </div>

                </div>
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
                    <label>
                        Graduation Year:
                        <select value={this.state.year}
                                onChange={this.handleYearChange}>
                            {yearList}
                        </select>
                    </label>
                    <br/> <br/>
                    <input className={"App"} type="submit" value="Submit" />
                    <input className={"App"} type="reset" value="Reset" />
                </form>

            </div>
        );
    }
}