import React, { Component } from 'react';
import './EditExpense.css';

class EditExpense extends Component {
    state = {}
    render() {
        return (
            <div className="my-container">
                <h4 className="text-center">Update Expense</h4>
                <form>
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
                        <input type="submit" className="btn btn-primary btn-block" value="Update Expense" />
                    </div>
                </form>
            </div>
        );
    }
}

export default EditExpense;