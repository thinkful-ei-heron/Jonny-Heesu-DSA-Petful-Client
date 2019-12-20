import React, {Component} from 'react';
import './Line.css';
import UserApiService from "../services/user-api-service";
import Animals from "../Animals/Animals";
import DogApiService from "../services/dogs-api-service";
import CatApiService from "../services/cats-api-service";

class Line extends Component {
    constructor(props) {
        super(props)
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
        UserApiService.postUser(name)
            .then(() => this.props.updateUsers([...this.props.users, {id: this.props.users.length, name: name}]));
        let interval = setInterval(() => {
            UserApiService.moveLine().then((res) =>{
                (res.left) ? this.props.updateUsers(res.users) : clearInterval(interval);
                // let rand = Math.floor(Math.random()*2);
                // (rand % 2 === 0) ? DogApiService.deleteGoal( this.props.dogs.find((dog, i)=> i === Math.floor(Math.random()*(this.props.dogs.length-1))).id)
                //     : CatApiService.deleteCat(this.props.cats.find((cat, i)=> i === Math.floor(Math.random()*(this.props.cats.length-1))).id)
        })
        }, 2000);
        this.setState({input: ''})
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
        </> : <><h1>Time to Adopt</h1><Animals animals={this.props.animals}/></>
        return (
            <div className="line-list">
                {body}
            </div>
        );
    }
};

export default Line;



