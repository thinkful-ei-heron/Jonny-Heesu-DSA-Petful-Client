import React, {Component} from 'react';

class Animals extends Component {
    render() {
        return (
            <ul className="animals-list">
                {this.props.animals.map((animal, index) =>
                    <div>
                        <img src={animal.imageUrl} alt={animal.imageDescription}/>
                        <h3>{animal.name}</h3>
                        <p>Sex: {animal.sex}</p>
                        <p>Age: {animal.age}</p>
                        <p>Breed: {animal.breed}</p>
                        <p>Story: {animal.stroy}</p>
                    </div>)}
            </ul>
        );
    }
}

export default Animals;
