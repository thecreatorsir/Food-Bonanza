
import { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Home from './HomeComponent';
import Contact from './ContactusComponent'
import About from './AboutComponent';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}


class Main extends Component {
  
  render() {
    const HomePage = () => {
      return (
        <Home 
        dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
    />
      )
    }

    return(
     
      <div>
      <Header/>
       <Switch>
         <Route path="/home" component={HomePage} />
         <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes} />} />
         <Route path="/menu/:dishId" render={({ match }) => {
         return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}  />
      );
      }} />
         <Route path="/aboutus" component={()=> <About  leaders={this.props.leaders}/>} />
         <Route exact path="/contactus" component={Contact} />
         <Redirect to="/home"/>
       </Switch>
      <Footer/>
  </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
