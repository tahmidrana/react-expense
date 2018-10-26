import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Expenses from './components/Expenses/Expenses';
import AddExpense from './components/AddExpense/AddExpense';
import AddBalance from './components/AddBalance/AddBalance';
import Settings from './components/Settings/Settings';
import EditExpense from './components/EditExpense/EditExpense';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="">
            <Home />
            <Route path="/" exact={true} component={Expenses} />
            <Route path="/addexpense" component={AddExpense} />
            <Route path="/addbalance" component={AddBalance} />
            <Route path="/editExpense" component={EditExpense} />
            <Route path="/settings" component={Settings} />
          </div>
        </div >
      </Router>
    );
  }
}

export default App;
