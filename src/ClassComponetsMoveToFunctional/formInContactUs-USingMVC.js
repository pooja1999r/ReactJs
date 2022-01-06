import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem ,Button,Form,FormGroup,Label,Input,Col,FormFeedback} from 'reactstrap';
import {Link} from 'react-router-dom';
import { findByRole } from '@testing-library/react';

// to tie a form with our react component we have to use class component (this is the only way)
// controlled component (store a state of form to class component)
class Contact extends Component {
    
    constructor(props){
        super(props);

        // information that reflect from form to class component
        this.state = {
            firstname: '',
            lastname:'',
            email:'',
            telnum:'',
            agree:false,
            contactType: 'Tel.',
            message:'',
            // for form validation (four fields validation )
            touched: {
                firstname: false,
                lastname : false,
                telnum :false,
                email :false
            }
        }
        // in order to make use to two handle function bind this constructor
        this.handleSubmit =this.handleSubmit.bind(this);
        this.handleInputChange =this.handleInputChange.bind(this);
        this.handleBlur =this.handleBlur.bind(this);
    }

    // two function as a hendler
    // this functioj invoked when any change to any input value take place
    handleInputChange(event){
        // get target inpute value from event
        const target = event.target;
        const value =target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        // any change in any value we have to said that state has been changed
        this.setState({
             [name]:value 
        })
    }

    // this function invoked when form is submitted
    handleSubmit(event){
        console.log("Current state is :" + JSON.stringify(this.state));
        alert("Current state is :" + JSON.stringify(this.state));
        // default behavior after submitting form is to go to next page we have prevent this
        event.preventDefault();
    }

    // handleBkur tells which perticular field has been modified
    handleBlur = (field) => (evt) => {
        this.setState({
            touched :{ ...this.state.touched ,[field]:true}
        })
    }

    // form validate ecah time whwn user send form 
    validate(firstname ,lastname, email ,telnum){
        const error = {
            firstname: '',
            lastname:'',
            email:'',
            telnum:''
        };
        if(this.state.touched.firstname && firstname.length < 3){
            error.firstname ="first Name should be greater than 3 character ";
        }
        else if(this.state.touched.firstname && firstname.length > 10){
            error.firstname ="first Name should be less than 10 character ";
        }

        if(this.state.touched.lastname && lastname.length < 3){
            error.lastname ="last Name should be greater than 3 character ";
        }
        else if(this.state.touched.lastname && lastname.length > 10){
            error.lastname ="Last Name should be less than 10 character ";
        }

        const reg = /^[0-9]*$/ ;
        if (this.state.touched.telnum && !reg.test(telnum)) {
            // reg.test() is built in method for regrular expression testing (return a boolen value after search if reg in this example is digits only the it return true)
            error.telnum ='Tel. Number should contain digit 0-9 only';   
        }
        if (this.state.touched.telnum && telnum.length !== 10 ) {
            // reg.test() is built in method for regrular expression testing (return a boolen value after search if reg in this example is digits only the it return true)
            error.telnum ='Tel. Number should be 10 digit only';   
        }
        
        if(this.state.touched.email && email.split('').filter(x => x=== '@').length !==1 ){
            error.email ="EMail should contain @ sign "
        }
        return error;
    }

    render(){
        const error = this.validate(this.state.firstname , this.state.lastname,this.state.email, this.state.telnum )
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
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            {/* instead of use for we use htmlFor because js we have for loop */}
                            <Label htmlFor="firstname" md={3} >First Name</Label>
                            <div md={9}>
                                {/* this.state.firstname tied this form to controlled component state */}
                                <Input type="text" id="firstname" name="firstname"
                                      placeholder='First Name' value={this.state.firstname} 
                                      valid = {error.firstname === '' }
                                      invalid ={error.firstname !== ''}
                                      onBlur={this.handleBlur('firstname')}
                                      onChange={this.handleInputChange} />
                                <FormFeedback>
                                    {error.firstname}
                                </FormFeedback>
                            </div>
                        </FormGroup>
                        <FormGroup row>
                           <Label htmlFor="lastname" md={3} >Last Name</Label>
                            <div md={9}>
                                  <Input type="text" id="lastname" name="lastname"
                                      placeholder='Last Name' value={this.state.lastname} 
                                      valid = {error.lastname === '' }
                                      invalid ={error.lastname !== ''}
                                      onBlur={this.handleBlur('lastname')}
                                     onChange={this.handleInputChange} />
                                    <FormFeedback>
                                    {error.lastname}
                                    </FormFeedback>
                            </div>
                        </FormGroup>
                        <FormGroup row>
                           <Label htmlFor="telnum" md={3} >Contact Tel. </Label>
                            <div md={9}>
                                  <Input type="tel" id="telnum" name="telnum"
                                      placeholder='Tel. Number' value={this.state.telnum}
                                      valid = {error.telnum === '' }
                                      invalid ={error.telnum !== ''}
                                      onBlur={this.handleBlur('telnum')}
                                      onChange={this.handleInputChange} />
                                     <FormFeedback>
                                    {error.telnum}
                                     </FormFeedback>
                            </div>
                        </FormGroup>
                        <FormGroup row>
                           <Label htmlFor="email" md={3} >Email</Label>
                            <div md={9}>
                                  <Input type="email" id="email" name="email"
                                      placeholder='email' value={this.state.email}
                                      valid = {error.email === '' }
                                      invalid ={error.email !== ''}
                                      onBlur={this.handleBlur('email')}
                                     onChange={this.handleInputChange} />
                                       <FormFeedback>
                                    {error.email}
                                </FormFeedback>
                            </div>
                        </FormGroup>
                        <FormGroup row >
                            <Col md={{size : 5, offset:3}} >
                                <FormGroup check>
                                     <Label check>
                                         <Input type="checkbox" name="agree"
                                               checked={this.setState.agree} 
                                               onChange={this.handleInputChange} /> {' '}
                                               <strong>May we Contact You?</strong>
                                     </Label>
                                </FormGroup>
                            </Col>
                            <div md={{size : 3 ,offset:1}} >
                                <Input type="select" name="contactType"
                                     value={this.state.contactType}
                                     onChange={this.handleInputChange} >
                                         <option>Tel.</option>
                                         <option>Email</option>
                                     </Input>
                            </div>
                        </FormGroup>
                        <FormGroup row>
                           <Label htmlFor="feedback" md={3} >Your Feedback</Label>
                            <div md={9}>
                                  <Input type="textarea" id="feedback" name="message"
                                      rows="12" value={this.state.message}
                                      onChange={this.handleInputChange} />
                            </div>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:10,offset:3}}>
                                <Button type="submit" color='primary'>
                                    Send Feedback
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    );
    }
}

export default Contact;