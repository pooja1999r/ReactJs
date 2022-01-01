import React from "react";
import { Card ,CardBody,CardImg,CardText,CardTitle } from 'reactstrap';

   function RenderDish({dish}){ //dish comes as a props hear that's why we write like {dish}
            return(
                   <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                   </Card>
            ); 
    }  
   
   function RenderDishComment({comments}){
            const comment= comments.map((dish)=>{
                return(
                    <div key={dish.id} >
                                  <p>{dish.comment} </p>  
                                 <p> {dish.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}  </p> 
                    </div>
                ) 
        });
        // console.log(comment);
            return(
                <Card>
                       <h4>comments</h4>
                       {comment}
                </Card>
              
            );
    }
     
    

    const DishDetail = (props) => {
        console.log(props.dish);
        console.log("render dish deatail invoked");
        if (props.dish!=null) {
        return(
            <div className="container">
                <h1>EnteredS</h1>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                  <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-md-5 m-1">
                         <RenderDishComment comments={props.dish.comments} />
                    </div>
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
