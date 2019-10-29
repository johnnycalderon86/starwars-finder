import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Characters from "./components/users/Characters";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";

class App extends Component {

  state = {
    users: [],
    loading: false
  };
  
  // SEARCH STAR WARS CHARACTERS
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://swapi.co/api/people/?search=${text}`
      );
      
      this.setState({ users: res.data.items, loading: false });
    };
    //CLEAR USERS FROM STATE
    clearUsers = () => this.setState({ users: [], loading: false });
    

  render() {
    const { users, loading } = this.state;

    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />

          <Characters loading={loading} users={users} />
        </div>
      </div>
    );
  }
}
export default App;
