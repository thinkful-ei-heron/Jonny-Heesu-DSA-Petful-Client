import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import TopNav from "./TopNav/TopNav";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Home from "./Home/Home";
import Animals from "./Animals/Animals";
import Adoption from "./Adoption/Adoption";
import DogApiService from "./services/dogs-api-service";
import CatApiService from "./services/cats-api-service";
import UserApiService from "./services/user-api-service";
import Line from "./Line/Line";
//import Line from "./Line/Line";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [{name: 'Home', to:'/'},{name: 'Animals', to:'/animals'}, {name: 'Adopt', to:'/adopt'}],
            dogs: [],
            cats: [],
            users: []
        }
    }

    componentDidMount() {
    //  this.state.users.enqueue({name: 'Tom', time: 10});
        DogApiService.getAllDogs()
            .then(res=> this.setState({dogs: res}));
        CatApiService.getAllCats()
            .then(res=> this.setState({cats: res}));
        UserApiService.getAllUsers()
            .then(res=> this.setState({users: res}));
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Route render={(routeProps) => <TopNav currentActive={routeProps.location}
                                                    links={this.state.links}/>}/>
                    <Switch>
                        <Route path={'/adopt'} component={() => <Adoption/>}/>
                        <Route path={'/animals'} component={() => <Animals animals={[...this.state.cats, ...this.state.dogs]}/>}/>
                         <Route path={'/queue'} component={() => <Line users={this.state.users}/>}/>
                        <Route exact path={'/'} component={() => <Home/>}/>
                    </Switch>
                    
                    <footer>
                        Copyright © 2019  Heesu Kang & Jonny Deates. All rights reserved.
                    </footer>
                </div>
            </Router>
        );
    }
};

export default App;


