import { Component } from 'react';
import {Navbar,NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from "../shared/dishes"
import DishDetail from './DishDetail';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish:null,
    };
  }

  onDishSelect(dishId){
    this.setState({
      selectedDish:dishId,
    })
  }

  render() {
    return(
      <div>
      <Navbar dark color="success">
        <div className="container">
          <NavbarBrand href="/">Food Bonanza</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} onClick={(dishId)=> this.onDishSelect(dishId)}/>
      <DishDetail dish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]}/>
  </div>
    );
  }
}

export default Main;
