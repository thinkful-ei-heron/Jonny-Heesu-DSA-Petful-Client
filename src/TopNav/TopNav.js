import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class TopNav extends Component {
    render() {
        return (
            <div className="nav">
                {this.props.links.map((link, index) =><div onClick={() =>
                    window.scrollTo(0, 0)}><Link key={index}
                                                 to={link.to}
                                                 className={(link.to === this.props.currentActive.pathname)
                                                     ? 'active' : ''}>{link.name}</Link></div>)}
            </div>
        );
    }
}

export default TopNav;
