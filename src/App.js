import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from "./TopNav/TopNav";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Home from "./Home/Home";
import Animals from "./Animals/Animals";
import Adoption from "./Adoption/Adoption";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [{name: 'Home', to:'/'},{name: 'Animals', to:'/animals'}, {name: 'Adopt', to:'/adopt'}],
            animals: [],
        }
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Route render={(routeProps) => <TopNav currentActive={routeProps.location}
                                                    links={this.state.links}/>}/>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    
                    <Switch>
                        <Route path={'/adopt'} component={() => <Adoption/>}/>
                        <Route path={'/animals'} component={() => <Animals animals={this.state.animals}/>}/>
                        <Route exact path={'/'} component={() => <Home/>}/>
                    </Switch>
                    
                    <footer>
                        Copyright © 2019  Heesu Kang & Jonny Deates. All rights reserved.
                    </footer>
                </div>
            </Router>
        );
    }
}

export default App;


