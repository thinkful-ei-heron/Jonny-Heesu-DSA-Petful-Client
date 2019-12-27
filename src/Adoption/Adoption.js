import React, { Component } from 'react';
import './Adoption.css';
import {Link} from "react-router-dom";

class Adoption extends Component {
    constructor(props){
        super(props);
        this.state = {
            animalTypes: [
                {header: 'Cat', className: 'cat-lovers', description:'Do you Love cats? We will help you find the puurrrfect kitty to take home! Trust our instinct!'},
                {header: 'Dog', className: 'dog-lovers', description:'Do you love dogs? Are you thinking about getting a rescue off the streets and out of our shelter? You\'ll find your soul-pup!'},
            ]
        }
    }

    render() {
        return (
            <div className="adoption">
                <h2>Adoption</h2>
                {this.state.animalTypes.map((animal,index) => <section key={index} className={animal.className + ' half-width'}>
                    <h3>{animal.header} Lovers</h3>
                    <p>{animal.description} </p>
                </section>)}
                <p>Would you like to take a place in line to start the adoption process? </p>
                <div> <Link to='/queue'>Join Adoption Line</Link></div>
            </div>
        );
    }
};

export default Adoption;


