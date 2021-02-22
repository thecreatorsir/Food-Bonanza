
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
import { addComment, fetchDishes,fetchComments, fetchPromos,fetchLeaders } from '../redux/ActionCreators';

const mapDispatchToProps = dispatch => ({
addComment:(dishId,rating,author,comment) => dispatch(addComment(dishId,rating,author,comment)),
fetchDishes: () => { dispatch(fetchDishes())},
fetchComments: () => dispatch(fetchComments()),
fetchPromos: () => dispatch(fetchPromos()),
fetchLeaders:() => dispatch(fetchLeaders()) 
})

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}


class Main extends Component {
  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
  render() {
    const HomePage = () => {
      return (
        <Home 
        dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}
        promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
        promoLoading={this.props.promotions.isLoading}
        promoErrMess={this.props.promotions.errMess}
        leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
        leadersLoading={this.props.leaders.isLoading}
        leadersErrMess={this.props.leaders.errMess}
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
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          commentsErrMess={this.props.comments.errMess}
          addComment={this.props.addComment}  />
      );
      }} />
         <Route path="/aboutus" component={()=> <About  leaders={this.props.leaders.leaders}/>} />
         <Route exact path="/contactus" component={Contact} />
         <Redirect to="/home"/>
       </Switch>
      <Footer/>
  </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
