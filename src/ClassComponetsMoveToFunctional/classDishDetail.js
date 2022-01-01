import React,{ Component } from "react";
import { Card ,CardBody,CardImg,CardText,CardTitle } from 'reactstrap';
class Dishdetail extends Component{
    componentDidMount(){
        console.log("Mount dish deatail invoked");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate dish deatail invoked");
    } 

    renderDish(dish){
        if (dish!=null) {
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
        else{
            return(
                <div> no disk</div>
            );
        }
    }  
   
    renderDishComment(dish){
        if (dish!=null) {
            const comment= this.props.dish.map((dish)=>{
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
        else{
            return(
                <div> oooleee</div>
            );
        }
    }

    render(){
        console.log(this.props.dish);
        console.log("render dish deatail invoked");
        return(
           <div className="container">
               <div className="row">
                   <div className="col-12 col-md-5 m-1">
                 {this.renderDish(this.props.dish)}
                   </div>
                   <div className="col-md-5 m-1">
                        {this.renderDishComment(this.props.dish)}
                   </div>
               </div>
               
           </div>
        );
    }
}
  

export default Dishdetail
