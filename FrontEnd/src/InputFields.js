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
            this.setState({ location: response.data[0].address.geo });
        }).catch(function(error){
            console.log(error);
        });

      this.handleFormDataChange();
    }

    handleReset(event) {
        this.setState({
           firstName: '',
           lastName: '',
           year: 2017,
           location: null
        });
    }

    handleFormDataChange = () => {

        let formData = this.state.location;

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