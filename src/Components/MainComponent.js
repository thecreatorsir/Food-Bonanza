
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
import Contact from './ContactusComponent'
import About from './AboutComponent';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      leaders:LEADERS,
      promotions:PROMOTIONS,
      comments:COMMENTS,
      setId:null
    };
  }
   
  setfunc(id){
    this.setState({
      setId:id,
    })
  }
  render() {
    const HomePage = () => {
      return (
        <Home 
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
    />
      )
    }

    return(
     
      <div>
      <Header/>
       <Switch>
         <Route path="/home" component={HomePage} />
         <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} onClick={(id)=>this.setfunc(id)} />} />
         {/* <Route path="/menu/:dishId" render={({ match }) => {
         return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments} />
      );
      }} />
           */}
         <Route path='/dishdetail'>
           <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.setId)[0]}
            comments={this.state.comments} />
         </Route>
         <Route path="/aboutus" component={()=> <About  leaders={this.state.leaders}/>} />
         <Route exact path="/contactus" component={Contact} />
         <Redirect to="/home"/>
       </Switch>
      <Footer/>
  </div>
    );
  }
}

export default Main;
