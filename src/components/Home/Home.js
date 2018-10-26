import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="card text-center">
                    <div className="card-body">
                        <h3 className="card-title-d">20000000 <small>Tk</small></h3>
                        <Link to="/addbalance" className="btn btn-secondary btn-cs">Deposit</Link>
                        <Link to="/addexpense" className="btn btn-secondary btn-cs">Spent</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;