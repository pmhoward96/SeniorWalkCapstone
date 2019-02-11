import React from 'react';

export class InputFields extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            year: 2017
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleYearChange(event) {
        this.setState({year: event.target.value});
    }

    handleSubmit(event) {
      // alert('selected: ' + this.state.name + ' and ' + this.state.year);
      this.handleFormDataChange();
      event.preventDefault(); // stops page from reloading after alert
    }

    handleReset(event) {
        // do something
    }

    handleFormDataChange = () => {

        let formData = { name: this.state.name,
                              year: this.state.year};

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
                <h1 className={"App-title"}>
                    Senior Walk
                </h1>

                <form onSubmit={this.handleSubmit}
                      onReset={this.handleReset}>
                    <label>
                        Name:
                        <input type="text"
                               value={this.state.name}
                               onChange={this.handleNameChange} />
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
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Reset" />
                </form>

            </div>
        );
    }
}