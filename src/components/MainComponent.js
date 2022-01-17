// sudo container component conatiner for this application
import React ,{ Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent ';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { addComment , fetchDishes,fetchComments,fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
// import { DISHES } from '../shared/dishes';
// import { COMMENTS } from '../shared/comments';
// import { PROMOTIONS } from '../shared/promotions';
// import { LEADERS } from '../shared/leaders';
import { Switch, Route, Redirect ,withRouter } from 'react-router-dom';
// to connect our react to redux 
import { connect } from 'react-redux';

// map redux store state into props that will available to my component
const mapStateToProps = state =>{
  return{
      dishes : state.dishes ,
      comments : state.comments ,
      promotions : state.promotions,
      leaders :state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: ()=> {dispatch(fetchDishes())} ,
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  resetFeedbackForm: () => { dispatch(actions.reset("feedback"))}
});


class Main extends Component {
  constructor(props){
    super(props);
    
    // this.state={
    //   dishes :DISHES,
    //   comments : COMMENTS,
    //   promotions: PROMOTIONS,
    //   leaders : LEADERS
      // selectedDish:null
    // };
  } 

  // every time when component mount
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
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
        <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promoLoading={this.props.promotions.isLoading}
              promoErrMess={this.props.promotions.errMess}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    // functional component when some dish is clicked from menu component route pass 3 props match,location ,hostory ,we use only match object
     const DishWithId= ({match}) =>{
       return(
        //  filter return array there so we use [0] and parseInt return integer of string with base specified (here 10)
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}
        comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        commentsErrMess={this.props.comments.errMess}
        addComment={this.props.addComment}
      />
       );
     }

     const AboutInfo = () =>{
       return(
         <About leaders = {this.props.leaders} />
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
             <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes} />} />
             {/* <Route path="/menu"> <Menu dishes={this.state.dishes} /> </Route> */}
             
              <Route path="/menu/:dishId" component={DishWithId} />
              <Route exact path="/contactus" component={() => <Contact  resetFeedbackForm={this.props.resetFeedbackForm} />}  />
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
// to connect props to redux store we wrap this main by connect , (connect(mapStateToProps)(Main))
// in order to use router we surround it by withRouter( (connect(mapStateToProps)(Main)))
export default withRouter((connect(mapStateToProps, mapDispatchToProps)(Main)));
