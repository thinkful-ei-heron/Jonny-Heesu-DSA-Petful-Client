import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './TopNav.css';
class TopNav extends Component {
    render() {
        return (
            <div className="nav">
                <h1> FIFO Pet Adaption Agency </h1>
                {this.props.links.map((link, index) =><div onClick={() =>
                    window.scrollTo(0, 0)}><Link key={index}
                                                to={link.to}
                                                className={(link.to === this.props.currentActive.pathname)
                                                ? 'active' : ''}>{link.name}</Link></div>)}
            </div>
        );
    }
};

export default TopNav;



