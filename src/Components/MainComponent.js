
import { Component } from 'react';
import Menu from './MenuComponent';
import {DISHES} from "../shared/dishes"
import DishDetail from './DishDetail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from './HomeComponent';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
     
    };
  }


  render() {
    return(
      <div>
      <Header/>
       <Switch>
         <Route path='/home'>
           <Home/>
         </Route >
         <Route exact path='/menu'>
         <Menu dishes={this.state.dishes} />
         </Route>
         <Redirect to='/home'/>
       </Switch>
      <Footer/>
  </div>
    );
  }
}

export default Main;
