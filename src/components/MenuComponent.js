import React from "react";
import { Card ,CardImg,CardImgOverlay,CardTitle } from 'reactstrap';

    // function RenderMenuItem(props)    one way to doing other is
    function RenderMenuItem({dish,onClick}){
        return(
          <Card onClick={()=> onClick(dish.id)} >
               <CardImg width="100%" src={dish.image} alt={dish.name} />
               <CardImgOverlay>
                  <CardTitle>
                     {dish.name}
                  </CardTitle>
               </CardImgOverlay>
          </Card>
        );
    }

    const Menu = (props)=>{
        const menu=props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            )
        });
        console.log("render menu invoked");
        // render return coresponding view for component
          return(  
              <div className="container">
                  <div className="row">
                           {/* javascript variable {menu} */}
                           {/* make use of javascript variable in jsx code */}
                            {menu}
                  </div>
              </div>
          );

    }
  
     
 

// because we want to make use of it wherever we want to use of it
// within our application
export default Menu;
