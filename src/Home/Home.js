import React, { Component } from 'react';
import './Home.css';
class Home extends Component {
    render() {
        return (
            <div className="home">
                <h2>About our Mission</h2>
                <p>The FIFO Pet Adaption Agency is an animals shelter which allows adoption of dogs and cats. 
                    There are many dogs and cats waiting for new sweet family to live together.
                    People can adopt a dog and a cat, but they need to visit our shelter first.
                    Also, people who want to adopt need to wait until their turn. <br />
                    * Please be nice and think seriously before you adopt animals. *
                </p>
            </div>
        );
    }
};

export default Home;


