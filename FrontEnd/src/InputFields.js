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
                        <div class="col-sm-1" className={"App-color2"} >
                            <img src="hoglogo1.gif" alt="Hog Logo" width= "250px" height ="250px" align="right"></img>
                        </div>

                </div>
                <form className={"App-button"}
                      onSubmit={this.handleSubmit}
                      onReset={this.handleReset}>
                    <label className={"App-button"}>
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
                    <input className={"App"} type="submit" value="Submit" />
                    <input className={"App"} type="reset" value="Reset" />
                </form>

            </div>
        );
    }
}