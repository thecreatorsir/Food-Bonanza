import './App.css';
import { Component } from 'react';
import {Navbar,NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent';
import {DISHES} from "./shared/dishes"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return(
      <div className="App">
      <Navbar dark color="success">
        <div className="container">
          <NavbarBrand href="/">Food Bonanza</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}/>
  </div>
    );
  }
}

export default App;
