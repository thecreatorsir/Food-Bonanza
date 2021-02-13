import React from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle } from 'reactstrap';


const Menu = (props) =>  {
  
      
           const menu = props.dishes.map((dish) => {
               return (
                <div key={dish.id}  className="col-12 col-md-5 m-1">
                <Card 
                  onClick={() => props.onClick(dish.id)}>
                  <CardImg src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle className="text-white">{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
               );
           });
   
           return (
             <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    
}

export default Menu;   