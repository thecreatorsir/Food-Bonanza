import * as ActionTypes from "./ActionTypes";
import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders'
export const addComment = (dishId,rating,author,comment) => ({
   type:ActionTypes.ADD_COMMENT,
   payload:{
     dishId:dishId,
     rating:rating,
     author:author,
     comment:comment
   }
});

export const fetchDishes = () => (dispatch) => {

  dispatch(dishesLoading(true));

  setTimeout(() => {
      dispatch(addDishes(DISHES));
  }, 2000);
}

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});

export const fetchComments = () => (dispatch) => {    
  setTimeout(() => {
    dispatch(addComments(COMMENTS));
}, 2000);
};

export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});

export const fetchPromos = () => (dispatch) => {
  
  dispatch(promosLoading());

  setTimeout(() => {
    dispatch(addPromos(PROMOTIONS));
}, 2000);
}

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess
});

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos
});

export const fetchLeaders = () => (dispatch) => {
  
  dispatch(leadersLoading());

  setTimeout(() => {
    dispatch(addLeaders(LEADERS));
}, 2000);
}

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errmess
});

export const addLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders
});