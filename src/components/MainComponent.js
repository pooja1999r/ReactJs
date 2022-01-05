// sudo container component conatiner for this application
import React ,{ Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent ';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes :DISHES,
      comments : COMMENTS,
      promotions: PROMOTIONS,
      leaders : LEADERS
      // selectedDish:null
    };
  } 

//   onDishSelect(dishId){
//     // chenge state 
//     console.log(dishId);
//     this.setState({ selectedDisk: dishId})
// }

  render(){ 
    //  other way to define functional component or pass props 
    const HomePage= ()=>{
      return(
        // filter return an array s0 we select first element 
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
              promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
              leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
         />
      );
    }

    // functional component when some dish is clicked from menu component route pass 3 props match,location ,hostory ,we use only match object
     const DishWithId= ({match}) =>{
       return(
        //  filter return array there so we use [0] and parseInt return integer of string with base specified (here 10)
            <DishDetail dish={this.state.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId,10))[0]}
                        comments ={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            />
       );
     }

     const AboutInfo = () =>{
       return(
         <About leaders = {this.state.leaders} />
       );
     }

      return (
    <div>
        <Header />
        <Switch>
             <Route path="/home" component={HomePage} />
             {/* <Route path="/home"> <Home /> </Route> */}
     
             {/* use exact because DishdetailComponent have same path  which start with /Menu that's why we use exact path here*/}
              {/* if path match but we have to pass some inforamation(props) from main component so we use function and return some information */}
              {/* one we to pass props or define functional component */}
             <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes} />} />
             {/* <Route path="/menu"> <Menu dishes={this.state.dishes} /> </Route> */}
             
              <Route path="/menu/:dishId" component={DishWithId} />
              <Route exact path="/contactus" component={Contact}  />
              <Route path="/aboutus" component={AboutInfo} />

             {/* default path if route does not match any of these above */}
             {/* <Navigate to="/home" /> */}
             <Redirect to='/home' />
        </Switch>
        {/* <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}/> */}
        {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        <Footer />
    </div>
  );
}

}
export default Main;
