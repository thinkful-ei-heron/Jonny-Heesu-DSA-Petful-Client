import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import TopNav from "./TopNav/TopNav";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home/Home";
import Animals from "./Animals/Animals";
import Adoption from "./Adoption/Adoption";
import UserApiService from "./services/user-api-service";
import Line from "./Line/Line";
import AnimalsApiService from "./services/animals-api-service";

//import Line from "./Line/Line";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [{name: 'Home', to: '/'}, {name: 'Animals', to: '/animals'}, {name: 'Adopt', to: '/adopt'}],
            animals: [],
            users: [],
            username: '',
            animalAdopted: null
        };
        this.updateAnimals = this.updateAnimals.bind(this);
        this.updateUsers = this.updateUsers.bind(this);
        this.saveUsername = this.saveUsername.bind(this);
        this.saveAnimal = this.saveAnimal.bind(this);
        UserApiService.resetUsers().then(res => this.updateUsers(res));
    }

    componentDidMount() {
        AnimalsApiService.getAllAnimals().then(res => this.updateAnimals(res))
    }

    updateAnimals(animals) {
        if(animals)
            this.setState({animals: animals})
    }

    updateUsers(users) {
        if (users)
            this.setState({users: users})
    }

    saveUsername(name) {
        this.setState({username: name});
    }

    saveAnimal(animal) {
        this.setState({animalAdopted: animal})
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Route render={(routeProps) => <TopNav currentActive={routeProps.location}
                                                           links={this.state.links}/>}/>
                    <Switch>
                        <Route path={'/adopt'} component={() => <Adoption/>}/>
                        <Route path={'/animals'}
                               component={() => <Animals animals={this.state.animals}/>}/>
                        <Route path={'/queue'}><Line updateUsers={this.updateUsers} users={this.state.users}
                                                      username={this.state.username}
                                                      animalAdopted={this.state.animalAdopted}
                                                     updateAnimals={this.updateAnimals}
                                                      saveUsername={this.saveUsername} saveAnimal={this.saveAnimal}/>
                        </Route>
                        <Route exact path={'/'} component={() => <Home/>}/>
                    </Switch>

                    <footer>Copyright © 2019 Heesu Kang & Jonny Deates. All rights reserved.</footer>
                </div>
            </Router>
        );
    }
}

export default App;
