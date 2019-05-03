import React, { Component } from 'react';
import './App.css';
import UserData from './Component/UserData'
import { BrowserRouter, Route } from 'react-router-dom';
import RejectedProfile from './Component/RejectedProfile'
import SelectedProfile from './Component/SelectedProfile'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact render={() => { return <UserData /> }}></Route>
          <Route path="/Selected" exact render={() => { return <SelectedProfile /> }}></Route>
          <Route path="/Rejected" exact render={() => { return <RejectedProfile /> }}></Route>
        </div>

      </BrowserRouter>
    );
  }

}

export default App;
