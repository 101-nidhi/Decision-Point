
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/PersonComponent';
import { USERS } from './shared/users';
import SearchPage from './components/searchBar';

class App extends Component {
  constructor(props)
  {
    super(props);

    this.state={
      users : USERS
    };
  }
  render()
  {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">List of users</NavbarBrand>
        </div>
        <SearchPage/>
      </Navbar>

      <Menu users={this.state.users}/>
    </div>
  );
  }
}

export default App;
