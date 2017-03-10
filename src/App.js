import React, { Component } from 'react';
import { UserList } from './components/UserList/UserList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <UserList />        
      </div>
    )
  }
}

export default App;