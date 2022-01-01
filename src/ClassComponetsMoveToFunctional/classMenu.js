import React ,{ Component } from "react";
import { Card ,CardImg,CardImgOverlay,CardTitle } from 'reactstrap';


class Menu extends Component{
    // required whenever define class components
    constructor(props){
        super(props);
        
        // bring some data in order to define menu
        // state store properties related to this component
        // in react only class component store state
        // this.state={
        //     selectedDisk: null
        // };
        // to change the state we have use setState()method
        console.log("constructor menu invoked");
    }

    // lifecycle method to add component in dom
    componentDidMount(){
        console.log("Mount menu inviked");
    } 
    
    // selected disk method change state 
    // onDishSelect(dish){
    //     // chenge state 
    //     this.setState({selectedDisk:dish})
    // }
    // render information of selected disk
    // renderDish(dish){
    //     if (dish!=null) {
    //         return(
    //                <Card>
    //                     <CardImg width="100%" src={dish.image} alt={dish.name} />
    //                     <CardBody>
    //                         <CardTitle>{dish.name}</CardTitle>
    //                         <CardText>{dish.description}</CardText>
    //                     </CardBody>
    //                </Card>
    //         );
    //     }
    //     else{
    //         return(
    //             <div></div>
    //         );
    //     }
    // }

//    any component in react have render() method
    render(){
        const menu=this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.props.onClick(dish.id)} >
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>
                                {dish.name}
                            </CardTitle>
                        </CardImgOverlay>
                    </Card>
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

}

// because we want to make use of it wherever we want to use of it
// within our application
export default Menu;
