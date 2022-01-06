import React from "react";
import { Card ,CardBody,CardImg,CardText,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link}  from 'react-router-dom';

   function RenderDish({dish}){ //dish comes as a props hear that's why we write like {dish}
            return(
                <div className="col-12 col-md-5 m-1">
                   <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                   </Card>
                </div>
            ); 
    }  
   
   function RenderDishComment({comments}){
            const comment= comments.map((comm)=>{
                return(
                    <div key={comm.id} className="ml-3" >
                                  <p>{comm.comment} </p>  
                                 <p> {comm.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}  </p> 
                    </div>
                ) 
        });
        // console.log(comment);
            return(
                <div className="col-12 col-md-5 m-1">
                <Card>
                       <h4 className="ml-3">comments</h4>
                       {comment}
                </Card>
                </div>
              
            );
    }
     
    

    const DishDetail = (props) => {
        console.log(props.dish);
        console.log("render dish deatail invoked");
        if (props.dish!=null) {
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
                          <BreadcrumbItem active>
                              {props.dish.name}
                          </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                          <h3>{props.dish.name}</h3>
                          <hr />
                 </div>
                 </div>
                <div className="row">
                  <RenderDish dish={props.dish} />
                  <RenderDishComment comments={props.comments} />
                    
                </div>
                
            </div>
         );
            
        }
        else{
            return(
                <div> oooleee</div>
            );
        }
    }

  

export default DishDetail
