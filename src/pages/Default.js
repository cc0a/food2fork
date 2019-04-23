import React, {Component} from 'react';
import Header from '../components/Header';
import {Link} from 'react-router-dom';
export default class Default extends Component {
    render() {
        return <Header title='404' styleClass='default-hero'>
            <h2 className="text-light text-uppercase">Page Does Not Exist</h2>
            <Link
                to='/'
                className="text-uppercase btn btn-secondary btn-large mt-3"
            >
                Return Home
            </Link>
        </Header>;
    }
}
