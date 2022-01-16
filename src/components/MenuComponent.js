import React from "react";
import { Card ,CardImg,CardImgOverlay,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import  { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

    // function RenderMenuItem(props)    one way to doing other is
    function RenderMenuItem({dish }){
        return(
          <Card >
              {/* this link send t0 specific url and corresponding dish id send to react router and from that react router we pass dish id to DishdetailComponent*/}
              <Link to={`/menu/${dish.id}`}>
               <CardImg width="100%" src={dish.image} alt={dish.name} />
               <CardImgOverlay>
                  <CardTitle>
                     {dish.name}
                  </CardTitle>
               </CardImgOverlay>
               </Link>
          </Card>
        );
    }

    const Menu = (props)=>{
        const menu=props.dishes.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} />
                </div>
            )
        });
        console.log("render menu invoked");
        // render return coresponding view for component
        if (props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else
        
          return(  
              <div className="container">
                  <div className="row">
                      <Breadcrumb>
                          <BreadcrumbItem>
                              <Link to="/home" >Home</Link>
                          </BreadcrumbItem>
                          <BreadcrumbItem>
                              <Link to="/menu" >Menu</Link>
                          </BreadcrumbItem>
                      </Breadcrumb>
                      <div className="col-12">
                          <h3>Menu</h3>
                          <hr />
                      </div>
                  </div>
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
