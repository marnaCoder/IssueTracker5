import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink} from 'react-router-dom';
import './App.css';
import Header from './Header/Header'
import AllIssueListPage from './Issue/AllIssueListPage'
import AddIssue from './Issue/AddIssue'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Header/>

        <Switch>
          <Route exact path="/" component={AllIssueListPage} />
          <Route exact path="/Delete/:id" component={AllIssueListPage} />
          <Route exact path="/addIssue" component={AddIssue} />
          <Route exact path="/addIssue/:id" component={AddIssue}/>
          {/* <Route path="/comment/:id" component={CommentDetailPage} />
          <Route path="/about" render={() => <h1>About Page</h1> } />
          <Redirect from="/about-us" to="/about" />
          <Redirect from="/about-wipro" to="/about" />
          <Route component={NotFoundPage} /> */}
        </Switch>
      </div>
    </Router>
     
    );
  }
}

export default App;
