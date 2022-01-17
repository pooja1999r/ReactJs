import React,{Component} from "react";
import { Card ,CardBody,CardImg,CardText,CardTitle,Breadcrumb,BreadcrumbItem,Button, ModalHeader, ModalBody,Modal, Label,Row,Col } from 'reactstrap';
import {Link}  from 'react-router-dom';
// import { CommentForm } from '.';
import { LocalForm ,Control ,Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length; //value > 0
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);


        this.state = {
            isCommentFormModalOpen: false
        };

        this.toggleCommentFormModal = this.toggleCommentFormModal.bind(this);
        this.handleCommentFormSubmit = this.handleCommentFormSubmit.bind(this);

    }

    handleCommentFormSubmit(values) {
        // console.log("Current State is: " + JSON.stringify(values));
        // alert("Current State is: " + JSON.stringify(values));
        this.props.addComment(this.props.dishId,values.rating,values.author,values.comment)
       this.toggleCommentFormModal();
       return false;

    }

    toggleCommentFormModal() {
        this.setState({
            isCommentFormModalOpen: !this.state.isCommentFormModalOpen
        });
    }


    render() {
        return (
            <React.Fragment>
                <Button outline onClick={this.toggleCommentFormModal}>
                    <span className="fa fa-comments fa-lg"></span> Submit Comment
                </Button>


                {/* commentform  Modal */}
                <Modal isOpen={this.state.isCommentFormModalOpen} toggle={this.toggleCommentFormModal} >
                    <ModalHeader toggle={this.toggleCommentFormModal}> Submit Comment </ModalHeader>
                    <ModalBody>

                        <LocalForm onSubmit={(values) => this.handleCommentFormSubmit(values)}>

                            {/* rating */}
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12} >Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating"
                                        className="form-control"
                                        name="rating"
                                        id="rating"
                                        validators={{
                                            required
                                        }}
                                    >
                                        <option>Please Select</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                    />
                                </Col>
                            </Row>


                            {/* author */}
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}> Your Name </Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>




                            {/* comment */}
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                    />
                                </Col>

                            </Row>

                            {/* submit button */}
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>

                        </LocalForm>

                    </ModalBody>
                </Modal>


            </React.Fragment>
        );
    }
}



//    form validation
// const minLength = (len) => (val) =>( !(val) && val >= len) ;
// const maxLength = (len) => (val) => (!(val) && val<= len);

 // comment form
//   class CommentForm extends Component {

//     constructor(props){
//         super(props);
//         this.state={
//             isOpenComment:false
//         };
//         this.toggleModal =this.toggleModal.bind(this);
//         this.handelCommentForm =this.handelCommentForm.bind(this);
//     }

//     toggleModal(){
//         this.setState({
//             isOpenComment : !this.state.isOpenComment
//         })
//         console.log(this.state.isOpenComment);
//     }

//     handelCommentForm(event){
//         this.toggleModal();
//         alert("Current state is :" + JSON.stringify(event));
//         // event.preventDefault();
//         return false;
//         // this.toggleModal();
//     }

//     render(){
//         return(
//             <>
//                     <Button type="submit"  onClick={this.toggleModal}>
//                            Submit Comment 
//                     </Button>

//                     <Modal  isOpen={this.state.isOpenComment} toggleModal>
//                         <ModalHeader>Submit Comment</ModalHeader>
//                         <ModalBody>
//                             <LocalForm onSubmit={this.handelCommentForm}>
//                                  <Row className='form-group'>
//                                         <Label md={3} htmlFor="rating">Rating</Label> <br />
//                                      <div md={9}>
//                                          {/* <Control.Select model=".rating" id="rating" name="rating"
//                                              className='form-control' >
//                                              <option>1</option>
//                                              <option>2</option>
//                                              <option>3</option>
//                                              <option>4</option>
//                                              <option>5</option>
//                                         </Control.Select> */}
//                                      </div>
//                                  </Row>
//                                  <Row className='form-group'>
//                                          <Label md={3} htmlFor="firstname" >Your Name</Label> <br />
//                                      <div md={9}>
//                                          {/* <Control.Text model=".firstname" id="firstname" name="firstname" 
//                                                validators={{ minLength : minLength(3) ,maxLength: maxLength(15)}}
//                                           />
//                                           <Errors 
//                                               className='text-danger'
//                                                model=".firstname"
//                                                show='touched'
//                                                messages={{
//                                                 // if the min length true
//                                                 minLength: "Must be greater than 2 characters",
//                                                 maxLength: "Must be less than 15 characters"
//                                             }}
//                                           /> */}
//                                      </div>
//                                  </Row>
//                                  <Row className="form-group">
//                                    <Label htmlFor="feedback" md={3} >Your Feedback</Label> <br />
//                                    <div md={9}>
//                                         {/* <Control.Textarea model=".message" id="feedback" name="message"
//                                            rows="6" 
//                                            className='form-control'
//                                         /> */}
//                                    </div>
//                                  </Row>
//                                  <Row className="form-group">
//                                  <div md={{size:10,offset:3}}>
//                                           <Button type="submit" color='primary'>
//                                               Submit
//                                             </Button>
//                                       </div>
//                                 </Row>
//                             </LocalForm>
//                         </ModalBody>
//                     </Modal>
//             </>
//             );
//         }
    
//     }


function RenderDish({dish}){ //dish comes as a props hear that's why we write like {dish}
            return(
                <div className="col-12 col-md-5 m-1">
                   <Card>
                        <CardImg width="100%" src={baseUrl+dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                   </Card>
                </div>
            ); 
    }  
   
   function RenderDishComment({comments,addcomment,dishId}){  
        // const myRef = React.createRef();
            const comment= comments.map((comm)=>{
                return(
                    <div key={comm.id} className="ml-3" >
                                  <p>{comm.comment} </p>  
                                 <p> {comm.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}  </p> 
                    </div>
                ) 
        });
        // console.log(addcomment);
            return(
                <div className="col-12 col-md-5 m-1">
                <Card>
                       <h4 className="ml-3">comments</h4>
                       {comment}
                          
                       <CommentForm addComment={addcomment} dishId={dishId} />
                </Card>
                </div>
            );
    }
     

    // comment form
    // class CommentForm extends Component {

    //     constructor(props){
    //         super(props);
    //         this.state={
    //             isOpenComment:false
    //         };
    //         this.toggleModal =this.toggleModal.bind(this);
    //         this.handelCommentForm =this.handelCommentForm.bind(this);
    //     }

    //     toggleModal(){
    //         this.setState({
    //             isOpenComment : !this.state.isOpenComment
    //         })
    //     }

    //     handelCommentForm(event){
    //         alert("Current state is :" + JSON.stringify(event));
    //         event.preventDefault();
    //         this.toggleModal();
    //     }

    //     render(){
    //         return(
    //             <div>
    //                 <Button type="submit"  onClick={this.toggleModal}>
    //                     <span className="fas fa-edit fa-lg"></span>Submit Comment 
                    // </Button>
                    // <Modal isOpen={this.state.isOpenComment} >
                    //     <ModalHeader>Submit Comment</ModalHeader>
                    //     <ModalBody>
                    //         <LocalForm onSubmit={this.handelCommentForm}>
                    //              <Row className='form-group'>
                    //                     <Label md={3} htmlFor="rating">Rating</Label> <br />
                    //                  <div md={9}>
                    //                      <Control.Select model=".rating" id="rating" name="rating"
                    //                          className='form-control' >
                    //                          <option>1</option>
                    //                          <option>2</option>
                    //                          <option>3</option>
                    //                          <option>4</option>
                    //                          <option>5</option>
                    //                     </Control.Select>
                    //                  </div>
                    //              </Row>
                    //              <Row className='form-group'>
                    //                      <Label md={3} htmlFor="firstname" >Your Name</Label> <br />
                    //                  <div md={9}>
                    //                      <Control.Text model=".firstname" id="firstname" name="firstname" 
                    //                            validators={{ minLength : minLength(3) ,maxLength: maxLength(15)}}
                    //                       />
                    //                       <Errors 
                                            //   className='text-danger'
                                //                model=".firstname"
                                //                show='touched'
                                //                messages={{
                                //                 // if the min length true
                                //                 minLength: "Must be greater than 2 characters",
                                //                 maxLength: "Must be less than 15 characters"
                                //             }}
                                //           />
                                //      </div>
                                //  </Row>
                                //  <Row className="form-group">
                                //    <Label htmlFor="feedback" md={3} >Your Feedback</Label> <br />
                                //    <div md={9}>
                                //         <Control.Textarea model=".message" id="feedback" name="message"
                                //            rows="6" 
                                //            className='form-control'
                                //         />
                                //    </div>
                                //  </Row>
                                //  <Row className="form-group">
                                //      <div md={{size:10,offset:3}}>
                                //           <Button type="submit" color='primary'>
                                //               Submit
                                //             </Button>
                                //       </div>
    //                             // </Row>
    //                         </LocalForm>
    //                     </ModalBody>
    //                 </Modal>
    //             </div>
    //         );
    //     }
    
    // }

    const DishDetail = (props) => {
        // console.log(props.dish);
        // console.log("render dish deatail invoked");
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null) {
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
                  <RenderDishComment comments={props.comments} addcomment ={props.addComment}  dishId={props.dish.id}/>
                    
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
