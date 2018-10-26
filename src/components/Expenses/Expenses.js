import React, { Component } from 'react';
import './Expenses.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Expenses extends Component {
    state = {}
    render() {
        return (
            <div>
                <h4 className="expenses-title">Expenses</h4>
                <div className="list-group">
                    <Link to="/editExpense" className="list-group-item list-group-item-action flex-column align-items-start active">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">2500 Tk</h5>
                            <small>6 Oct 2018</small>
                        </div>
                        <small>Shopping for home</small>
                    </Link>
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">210 Tk</h5>
                            <small>15 Sep 2018</small>
                        </div>
                        <small>Shopping for home</small>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">3300 Tk</h5>
                            <small>13 Aug 2018</small>
                        </div>
                        <small>Crocaries buy</small>
                    </a>
                </div>
            </div>
        );
    }
}

export default Expenses;