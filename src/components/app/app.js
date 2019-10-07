import React, { Component } from 'react';
import Controls from '../controls';

import './app.css';
import CanvasWrap from '../canvas-wrap';





export default class App extends Component {

    // constructor() {
    //     super();

        
    // }

    
    

    submitFormControl = (data) => {
        console.log(data);
    };

    render() {
        return (
            <div className="main-wrap">
                <Controls sublitForm={this.submitFormControl} />
                <CanvasWrap/>
                <div className="uuid">
                    <button>X</button>
                </div>
            </div>
        );
    };

};