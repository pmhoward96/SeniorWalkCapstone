import React from 'react';

export class InputFields extends React.Component {
    render() {
        return (
            <div>
                <h1 className={"App-title"}>
                    Senior Walk
                </h1>
                < div className = "App-search" >
                    <p>
                        < input type = "text" />
                        Name
                    </p>
                    <p>
                        <input type="number"/>
                        Year
                    </p>
                </div>
                <div>
                    <p>
                        <button className="App-button">
                            Submit
                        </button>
                    </p>
                    <p>
                        <button className="App-button">
                            Reset Map
                        </button>
                    </p>
                </div>
            </div>
        );
    }
}