import React, { Component } from 'react';
import './Adoption.css';

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

    joinLine(bool){
        switch (bool) {
            case 'Cat':
                break;
            case 'Dog':
                break;
            default:
                break;
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
                    <button onClick={()=> this.joinLine(animal.header)}>Join {animal.header} Line</button>
                </section>)}
            </div>
        );
    }
}

export default Adoption;


