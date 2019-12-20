import React, {Component} from 'react';
import './Line.css';

class Line extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: '',
            timeToWait: 0,
            positionInLine: 0
        }
    }

    componentDidMount() {
    }

    handleInput(e){ this.setState({input: e.target.value})}
    render() {
        return (
            <div className="line-list">
                <h2>Current Queue:</h2>
                {this.props.users.map((user,index)=> <p key={index}>{user.name}</p>)}
            </div>
        );
    }
};

export default Line;



