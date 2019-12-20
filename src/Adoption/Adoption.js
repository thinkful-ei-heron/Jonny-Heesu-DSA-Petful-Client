import React, { Component } from 'react';
import './Adoption.css';
import UserApiService from "../services/user-api-service";
import {Link} from "react-router-dom";

class Adoption extends Component {
    constructor(props){
        super(props)
        this.state = {
            animalTypes: [
                {header: 'Cat', className: 'cat-lovers', description:'Do you Love cats? Are you thinking about getting a rescue off the streets and out of our shelter?'},
                {header: 'Dog', className: 'dog-lovers', description:'Do you love dogs? Are you thinking about getting a rescue off the streets and out of our shelter?'},
            ]
        }
    }

    render() {
        return (
            <div className="adoption">
                <h1>Adoption</h1>
                {this.state.animalTypes.map((animal,index) => <section key={index} className={animal.className}>
                    <h3>{animal.header} Lovers</h3>
                    <p>{animal.description} </p>
                    <p>Would you like to take a place in line to start the adoption process? </p>
                    <Link to='/queue'>Join Adoption Line</Link>
                </section>)}
            </div>
        );
    }
};

export default Adoption;


