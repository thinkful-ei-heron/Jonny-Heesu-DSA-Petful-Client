import React, {Component} from 'react';
import './Animals.css';

class Animals extends Component {
    render() {
        return (
            <ul className="animals-list">
                {this.props.animals.map((animal, index) =>
                {
                    if(animal.adopted) {
                        return <div className='info' key={index}>
                            <img src={animal.imageURL} alt='animals' className='grayscale'/>
                            <h2>ADOPTED</h2>
                        </div>
                    } else {
                        return <div className='info' key={index}>
                            <img src={animal.imageURL} alt='animals'/>
                            <h3>Name: {animal.name}</h3>
                            <p>Description: {animal.imageDescription}</p>
                            <p>Sex: {animal.sex}</p>
                            <p>Age: {animal.age}</p>
                            <p>Breed: {animal.breed}</p>
                            <p>Story: {animal.story}</p>
                        </div>}
                })}
            </ul>
        );
    }
};

export default Animals;


