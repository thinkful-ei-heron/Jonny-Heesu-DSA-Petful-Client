import React, {Component} from 'react';
import './Animals.css';

class Animals extends Component {
    render() {
        return (
            <ul className="animals-list">
                {this.props.animals.map((animal, index) =>
                    <div key={index}>
                        <img src={animal.imageURL} alt='animals'/>
                        <h3>{animal.name}</h3>
                        <p>Description: {animal.imageDescription}</p>
                        <p>Sex: {animal.sex}</p>
                        <p>Age: {animal.age}</p>
                        <p>Breed: {animal.breed}</p>
                        <p>Story: {animal.story}</p>
                    </div>)}
            </ul>
        );
    }
};

export default Animals;



