import React, {Component} from 'react';
import './Line.css';

class Line extends Component {
    constructor(props){
        super(props)
        this.state = {
            timeToWait: 0,
            positionInLine: 0
        }
    }

    componentDidMount() {
        this.props.users
        setInterval()
    }

    render() {
        return (
            <ul className="animals-list">
                {this.props.animals.map((animal, index) =>
                    <div key={index}>
                        <img src={animal.imageURL} alt={animal.imageDescription}/>
                        <h3>{animal.name}</h3>
                        <p>Sex: {animal.sex}</p>
                        <p>Age: {animal.age}</p>
                        <p>Breed: {animal.breed}</p>
                        <p>Story: {animal.story}</p>
                    </div>)}
            </ul>
        );
    }
};

export default Line;



