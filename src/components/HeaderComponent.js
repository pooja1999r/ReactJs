import React,{ Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler,Collapse,NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false
        };
        // in order to make use of method  toggleNav  within jsx we need to bind this in our code for js in strict mode
        this.toggleNav=this.toggleNav.bind(this);
        // this toggleNav now avaliable 
        // for all function we have to bind them in constructor by above syntex
    }
    toggleNav(){
        this.setState({
           isNavOpen:!this.state.isNaveOpen 
        });
    }
    render(){
        return(
            // <></> react fragment(short form sentex of react fragment)  used to bunch a group of elements amd return it
            //  long form syntex of react fragment is <React.Fragment> </>
            //  it is also used to alternative use of div to grabe all the elements
            // by use of react fragment , it does not add an extra node (div) in Dom 
            // just add react fragment directly into dom
            <>
            {/* md to extra  large screen size navbaar expend */}
            <Navbar dark expand="md" > 
                <div className='container'>
                    {/* in order to toggle navbar fro extra small to small screen size */}
                    <NavbarToggler onClick={this.toggleNav} />
                   <NavbarBrand className="mr-auto" href='/'>
                        <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" /> 
                    </NavbarBrand>
                    {/* to collapse from extra small to md size */}
                    {/* isOpen={this.state.isOpen} bollen attribute if it is false collapse is hidden andif true navebar become collapse  */}
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"></span>Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/aboutus">
                                <span className="fa fa-info fa-lg"></span>AboutUs
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/menu">
                                <span className="fa fa-list fa-lg"></span>Menu
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                                <span className="fa fa-address-card fa-lg"></span>Contact us
                            </NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <div className="jumbotron">
                <div className='container'>
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
                    </div>
                </div>
            </div>
             </>
        );
    }
}
export default Header;