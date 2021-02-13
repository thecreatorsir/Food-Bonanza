
import { Component } from 'react';
import Menu from './MenuComponent';
import {DISHES} from "../shared/dishes"
import {COMMENTS} from "../shared/comments"
import {PROMOTIONS} from "../shared/promotions"
import {LEADERS} from "../shared/leaders"
import DishDetail from './DishDetail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from './HomeComponent';
import Contactus from './ContactusComponent'
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      leaders:LEADERS,
      promotions:PROMOTIONS,
      comments:COMMENTS
    };
  }


  render() {
    return(
      <div>
      <Header/>
       <Switch>
         <Route path='/home'>
         <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
         </Route >
         <Route exact path='/menu'>
         <Menu dishes={this.state.dishes} />
         </Route>
         <Route path='/contactus'>
           <Contactus/>
         </Route>
         <Redirect to='/home'/>
       </Switch>
      <Footer/>
  </div>
    );
  }
}

export default Main;
