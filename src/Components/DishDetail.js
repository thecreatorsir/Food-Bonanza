import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';
const DishDetail = ({dish}) => {
  
  function renderDish(dish){
    if(dish!=null){
      return (
         <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText><em>{dish.description}</em></CardText>
        </CardBody>
     </Card>
      )
      
    }else{
      return(
       <div></div>
      )
      
    }
  }
 

  function renderComment(dish){
    if(dish!=null){
      return (
      <Card>
        <CardBody>
        <CardTitle>Comments</CardTitle>
      {dish.comments.map((com)=>{
        return(
              <>
              <CardText>{com.comment}</CardText>
              <CardText><em> -- {com.author}</em> </CardText>
              </>
        )
        })}
        </CardBody>
        </Card>
        )
    }else{
      return(
       <div></div>
      )
    }
  }

  return (
    <div className="row">
      <div  className="col-12 col-md-5 m-1">
         {renderDish(dish)}  
      </div>
      <div  className="col-12 col-md-5 m-1">
          {renderComment(dish)} 
      </div>
    </div>
    
  )
}


export default DishDetail
