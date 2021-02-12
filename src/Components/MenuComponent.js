import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [
                {
                  id: 0,
                  name:'Aloo Paratha',
                  image: 'assets/images/AlooParatha.jpg',
                  category: 'mains',
                  label:'Hot',
                  price:'40 ₹',
                  description:'Aloo paratha are Indian breakfast flatbreads made with whole wheat flour, mashed potatoes, spices & herbs. These flavorful and delicious stuffed parathas are a staple in many North Indian households. These are most commonly topped with white butter and served alongside pickle and yogurt.'                        },
               {
                  id: 1,
                  name:'Kadai Paneer',
                  image: 'assets/images/KadaiPaneer.jpg',
                  category: 'appetizer',
                  label:'',
                  price:'100 ₹',
                  description:'Kadai Paneer is a popular paneer recipe where paneer and bell peppers are cooked in a spicy masala. It is one of the most popular paneer recipes. Its there on the menu in almost all Indian restaurants'                        },
                  {
                     id: 2,
                     name:'Chole Bhature',
                     image: 'assets/images/CholeBhature.jpg',
                     category: 'appetizer',
                     label:'New',
                     price:'60 ₹',
                     description:'Sort of the unofficial dish of New Delhi, though its popular elsewhere in North India, chole bhature is a Punjabi concoction of spicy curried chickpeas (chole) and puffy fried white-flour bread (bhature), most often eaten together for breakfast (its also known as chana bhatura).'                        },
                     {
                      id: 2,
                      name:'Butter Chicken',
                      image: 'assets/images/butterchicken.jpg',
                      category: 'appetizer',
                      label:'New',
                      price:'500 ₹',
                      description:'Chunks of grilled chicken (tandoori chicken) cooked in a smooth buttery & creamy tomato based gravy is known as Butter chicken or murgh makhani. It was invented by Kundan lal Gujral, who was the owner of a popular restaurant named Moti Mahal in Delhi.'                        }
                  ],
           };
       }
       render() {
           const menu = this.state.dishes.map((dish) => {
               return (
                 <div key={dish.id} className="col-12 mt-5">
                   <Media tag="li">
                    <Media object src={dish.image} alt={dish.name} className="w-25" />
                     <Media body className="ml-5">
                       <Media heading>{dish.name}</Media>
                       <em>{dish.description}</em>
                     </Media>
                   </Media>
                 </div>
               );
           });
   
           return (
             <div className="container">
             <div className="row">
              <Media list>
                  {menu}
              </Media>
            </div>
          </div>
        );
    }
}

export default Menu;   