import React, {Component} from 'react';
import './Line.css';
import UserApiService from "../services/user-api-service";
import Animals from "../Animals/Animals";
import AnimalsApiService from "../services/animals-api-service";
// import DogApiService from "../services/dogs-api-service";
// import CatApiService from "../services/cats-api-service";

class Line extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            positionInLine: 0
        }

    }

    handleInput(e) {
        this.setState({input: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();

        let name = this.state.input.trim();
        if (name.length > 0) {
            this.props.saveUsername(name);
            UserApiService.postUser(name)
                .then(() => this.props.updateUsers([...this.props.users, {id: this.props.users.length, name: name}]));
            let interval = setInterval(() => {
                UserApiService.moveLine().then((res) => {
                    if (res.left) {
                        AnimalsApiService.getAllAnimals().then(res => this.props.updateAnimals(res));
                        if (res.left.user.name === this.props.username) {
                            this.props.saveAnimal(res.left.animal);
                        }
                        this.props.updateUsers(res.users);
                    } else {
                        clearInterval(interval)
                    }
                    // let rand = Math.floor(Math.random()*2);
                    // (rand % 2 === 0) ? DogApiService.deleteGoal( this.props.dogs.find((dog, i)=> i === Math.floor(Math.random()*(this.props.dogs.length-1))).id)
                    //     : CatApiService.deleteCat(this.props.cats.find((cat, i)=> i === Math.floor(Math.random()*(this.props.cats.length-1))).id)
                })
            }, 2000);
        }
        this.setState({input: ''})
    }

    isAnimalAdopted() {
        if (this.props.animalAdopted)
            return (<><img src={this.props.animalAdopted.imageURL} alt='animals'/>
                <h3>Name: {this.props.animalAdopted.name}</h3>
                <p>Description: {this.props.animalAdopted.imageDescription}</p>
                <p>Sex: {this.props.animalAdopted.sex}</p>
                <p>Age: {this.props.animalAdopted.age}</p>
                <p>Breed: {this.props.animalAdopted.breed}</p>
                <p>Story: {this.props.animalAdopted.story}</p></>)
    }


    render() {
        let body = (this.props.users.length > 0) ? <>
            <h2>Current Queue:</h2>
            {this.props.users.map((user, index) => <p key={index}>{user.name}</p>)}
            <h2>Join the Line!</h2>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input value={this.state.input} onChange={(e) => this.handleInput(e)}/>
                <button type='submit'>Submit</button>
            </form>
        </> : <>
            <h1>Here is your DESTINED Animal</h1>
            <div className='info'>
                {this.isAnimalAdopted()}
            </div>
        </>;

        return (
            <div className="line-list">
                {body}
            </div>
        );
    }
};

export default Line;


