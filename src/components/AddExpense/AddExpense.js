import React, { Component } from 'react';
import axios from '../../axios-conf';

class AddExpense extends Component {

    constructor(props) {
        super(props);
    }
    state = {
        title: 'Shopping',
        expense_amount: '2000'
    }

    addExpense = (e) => {
        const data = {
            title: 'Shoping',
            expense_amount: '2300'
        }
        //e.preventDefault();
        axios.post('/expenses.json', data).then(response => console.log(response)).catch(error => console.log(error));
    }

    render() {
        return (
            <div className="my-container">
                <h4 className="text-center">Spent</h4>
                <form onSubmit={this.addExpense}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Amount" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Date" />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-block" value="Add Expense" />
                    </div>
                </form>
            </div>
        );
    }
}

export default AddExpense;