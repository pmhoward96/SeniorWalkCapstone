import React, { Component } from 'react';
import './App.css';

export class TopBanner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
            );

    }

}