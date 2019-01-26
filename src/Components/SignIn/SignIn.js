import React, { Component } from "react";
import { Button, Input, Row } from "react-materialize";
import axios from "axios";
import { connect } from "react-redux";
import NavBar from "../NavBar/NavBar"
class SignIn extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: "",
      passWord: "",
      flagShow:false
    };
  }
 
  emailHandler = e => {
    this.setState({ email: e.target.value });
  };
  passWordHandler = e => {
    this.setState({ passWord: e.target.value });
  };
  siginHandler = () => {
    axios
      .post("/signin", {
        email: this.state.email,
        passWord: this.state.passWord
      })
      .then(response => {
        console.log(response);
        this.props.dispatch({
          type: "token",
          token: response.data.token
        })
        if (response.data.token){
            this.props.history.push("/ChatRooms")
          this.setState({flagShow: true})
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    
    return (
      <div>
          {this.state.flagShow?<NavBar create={true}/>:null}
        <Row>
          <Input onChange={this.emailHandler} type="email" label="Email" s={6} />
          </Row>
          <Row>
          <Input  onChange={this.passWordHandler}  type="password" label="password" s={6} />
        </Row>
        <Button onClick={this.siginHandler} waves='light'>Sign In</Button>
       
      </div>
    );
  }
}

let connectedSignIn=connect()(SignIn)
export default connectedSignIn;
