import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem ,Button,Label,Col,Row} from 'reactstrap';
import {Link} from 'react-router-dom'; 
import { Control, LocalForm ,Errors } from 'react-redux-form';

const required = (val) => val && val.length; //value > 0
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) &&( val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



// method to define form velidation
// to check the length of val is greater than zero
// const required = (val) => val && val.length;

// fiunction of function // lenth value should be less thab or equal to max length specified
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => !(val) && (val.length >= len);
// const isNumber =(val) => !isNaN(Number(val));
// const validEmail = (val) => /![A-z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i.test(val);
// to tie a form with our react component we have to use class component (this is the only way)
// controlled component (store a state of form to class component)
class Contact extends Component {
    
    constructor(props){
        super(props); 
        
        // in order to make use to two handle function bind this constructor
        this.handleSubmit =this.handleSubmit.bind(this);
    }

    // this function invoked when form is submitted
    handleSubmit(values){
        console.log("Current state is :" + JSON.stringify(values));
        alert("Current state is :" + JSON.stringify(values));
    }

   
    render(){
        
        return(
        <div className="container">
           <div className="row">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/home" >Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link to="/contactus" >ContactUs</Link>
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>Contact Us</h3>
                <hr />
            </div>
           </div>
           <div>

           </div>
           <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>

             <div className='row row-content'>
                <div className='col-12'>
                    <h3>Send us Your Feedback</h3>
                </div>
                <div className='col-12 col-md-9'>
                <LocalForm onSubmit={ (values) => this.handleSubmit(values) } >
                            
                            {/* firstname */}
                            <Row className="form-group">
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text  model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"   
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}                                 
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minLength: 'Must be greater that 2 characters',
                                            maxLength: 'Must be 15 characters or less',
                                        }}
                                    ></Errors>
                                </Col>
                            </Row>

                            {/* lastname */}
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>

                            {/* telphone */}
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                    />
                                </Col>
                            </Row>

                            {/* email */}
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                    />
                                </Col>
                            </Row>

                            {/* ? */}
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree"  name="agree"
                                                className="form-check-input"
                                            />{' '}
                                            <strong>May we contact you? </strong>
                                        </Label>
                                    </div>
                                </Col>

                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select model=".contactType"  
                                        className="form-control"
                                        name="contactType"
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            {/* feedback */}
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message"  id="message" name="message"
                                        rows="12"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>

                            {/* submit button */}
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>

                        </LocalForm>
                    </div>

                </div>
            </div>
        );
        
    }
}

export default Contact;
       

//  {/* this values pass from our application to handleSubmit */}
//  <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
//  <Row className="form-group">
//      {/* instead of use for we use htmlFor because js we have for loop */}
//      <Label htmlFor="firstname" md={3} >First Name</Label>
//      <div md={9}>
//          {/* this.state.firstname tied this form to controlled component state */}
//          <Control.Text  model=".firstname" id="firstname" name="firstname"
//                placeholder='First Name' 
//                className='form-control'
//               validators={{
//                   //   if any of these is true corresponding message is shown
//                   required,minLength: minLength(3),maxLength: maxLength(15)
//                 }}
//            />
//           <Errors
//              className="text-danger"
//              model=".firstname" // this error is applied to modal name '.firstname'
//              show="touched"  //this means you show this message only after item is touched
//              // actual message that would be display after item is touched is
//              messages={{
//                  // if required is true we will display message as Required 
//                  required: 'Required',
//                  // if the min length true
//                  minLength: "Must be greater than 2 characters",
//                  maxLength: "Must be less than 15 characters"
//              }}
//          />
//      </div>
//  </Row>
//  <Row className="form-group">
//     <Label htmlFor="lastname" md={3} >Last Name</Label>
//      <div md={9}>
//      <Control.Text  model=".lastname" id="lastname" name="lastname"
//                placeholder="Last Name" 
//                className="form-control"
//                validators={{
//                  //   if any of these is true corresponding message is shown
//                    required,minLength: minLength(3),maxLength: maxLength(15)
//                }}
//          />
//          <Errors
//              className='text-danger'
//              model=".lastname"
//              show="touched"  
//              messages={{
//                  required: 'Required',
//                  minLength: "Must be greater than 2 characters",
//                  maxLength: "Must be less than 15 characters"
//              }}
//          />

//      </div>
//  </Row>
//  <Row className="form-group">
//     <Label htmlFor="telnum" md={3} >Contact Tel. </Label>
//      <div md={9}>
//      <Control.Text  model=".telnum" id="telnum" name="telnum"
//                placeholder="Tel. Number" 
//                className="form-control"
//                validators={{
//                    required,minLength: minLength(10),maxLength: maxLength(12)
//                }}
//          />
//          <Errors
//              className="text-danger"
//              model=".telnum"
//              show="touched"  
//              messages={{
//                  required: 'Required',
//                  minLength: "Must be equal to 10 characters",
//                  maxLength: "Must be  equal to 10characters",
//                  isNumber : "Must be a Digit from 0-9"
//              }}
//          />
//      </div>
//  </Row>
//  <Row className="form-group">
//     <Label htmlFor="email" md={3} >Email</Label>
//      <div md={9}>
//      <Control.Text  model=".email" id="email" name="email"
//                placeholder="email"
//                className="form-control"
//                validators={{
//                  required,validEmail
//              }}
//           />
//           <Errors
//               className="text-danger"
//               model=".email"
//               show="touched"  
//               messages={{
//                   required: 'Required',
//                   validEmail :"Invalid Email address"
//               }}
//           />
//      </div>
//  </Row>
//  <Row className="form-group">
//      <div md={{size : 5, offset:3}} >
//          <div className="form-check">
//               <Label check>
//                      <Control.Checkbox model=".agree" name="agree"
//                         className="form-check-input"
//                       /> {' '}
//                      <strong>May we Contact You?</strong>
//               </Label>
//          </div>
//      </div>
//      <div md={{size : 3 ,offset:1}} >
//          <Control.Select model=".contactType" name="contactType"
//               className="form-control" >
//                   <option>Tel.</option>
//                   <option>Email</option>
//          </Control.Select>
//      </div>
//  </Row>
//  <Row className="form-group">
//     <Label htmlFor="feedback" md={3} >Your Feedback</Label>
//      <div md={9}>
//              <Control.Textarea model=".message" id="feedback" name="message"
//                rows="12" 
//                className="form-control"
//              />
//      </div>
//  </Row>
//  <Row className="form-group">
//      <div md={{size:10,offset:3}}>
//          <Button type="submit" color="primary">
//              Send Feedback
//          </Button>
//      </div>
//  </Row>
// </LocalForm>

