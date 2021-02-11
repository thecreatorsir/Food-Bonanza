import './App.css';
import { Component } from 'react';
import {Navbar,NavbarBrand } from 'reactstrap';
class App extends Component {
  
  render() {
    return(
      <div className="App">
      <Navbar dark color="success">
        <div className="container">
          <NavbarBrand href="/">Food Bonanza</NavbarBrand>
        </div>
      </Navbar>
  </div>
    );
  }
}

export default App;
