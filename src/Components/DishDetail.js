import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

  const RenderDish = ({ dish }) => {
      return (
        <Card>
        <CardImg src={dish.image} alt={dish.name} />
        <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText><em>{dish.description}</em></CardText>
        </CardBody>
    </Card>
      )
  }  


  const RenderComment = ({comments}) => {
      return (
      <div> 
      <div className='h3'>Comments</div>
      {comments.map((com)=>{
        return(
              <ul key={com.id} className = "list-unstyled">
              <li>{com.comment}</li>
              <li><em> -- {com.author}</em> </li>
              </ul>
        )
        })}
      </div> 
        )
    
  }

const DishDetail = (props) => {
  if(props.dish!=null){
  return (
    <div className='container'>
      <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
        </div>
    <div className="row">
      <div  className="col-12 col-md-5 m-1">
         <RenderDish dish={props.dish}/> 
      </div>
      <div  className="col-12 col-md-5 m-1">
          <RenderComment comments={props.comments}/>
      </div>
    </div>
    </div>
  )
  }else{
    <div></div>
  }
}


export default DishDetail
