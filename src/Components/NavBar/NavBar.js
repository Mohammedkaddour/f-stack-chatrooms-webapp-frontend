import React ,{Component} from "react"
import { Navbar, NavItem } from "react-materialize";
import {withRouter} from "react-router"


class NavBar extends Component{

   

    render(){
  return(<Navbar divider="true" fixed="true" brand='Chachat' left>
        <NavItem onClick={()=>{this.props.history.push("/ChatRooms")}} >Chat Rooms</NavItem>
        <NavItem onClick={()=>{this.props.history.push("/SignUp")}} >Sign Up</NavItem>
        <NavItem onClick={()=>{this.props.history.push("/SignIn")}} >Sign IN</NavItem>
        {this.props.showCreate?<NavItem onClick={()=>{this.props.history.push("/CreateRoom")}}>Create Room</NavItem>:null}
        
      </Navbar>)
    }
}


export default withRouter(NavBar)