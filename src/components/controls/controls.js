import React, { Component } from 'react';

import './controls.css';

export default class Controls extends Component {

    constructor() {
        super();
        
        this.state = {
            selectVal: '',
            inputVal: ''
        }
    }

    onSelectChange = (e) => {
        this.setState({
            selectVal: e.target.value
        });
    };

    onInputChange = (e) => {
        this.setState({
            inputVal: e.target.value
        });
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        const { selectVal, inputVal } = this.state;

        if (selectVal !== '' && inputVal !== '') {
            const data = [selectVal, inputVal];
            this.props.sublitForm(data);
        }
    };
    
    render() {
        
        const { selectVal, inputVal } = this.state;
        return (
            <form onSubmit={this.onSubmitForm} className="controls" >
                <select onChange={this.onSelectChange} value={selectVal}>
                    <option>Shose figure</option>
                    <option value="cube">Cube</option>
                    <option value="icosahedron">Icosahedron</option>
                    <option value="cylinder">Cylinder</option>
                </select>
                <input placeholder="Scale" value={inputVal} onChange={this.onInputChange} />
                <button>Create</button>
            </form>
        );

    };

};