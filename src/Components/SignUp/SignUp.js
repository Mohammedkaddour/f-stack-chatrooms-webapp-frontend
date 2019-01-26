import React, { Component } from "react";
import axios from "axios";
import { Button, Input, Row } from "react-materialize";
class SignUp extends Component {
  state = {
    email: "",
    passWord: "",
    userName: "",
    userImage: null
  };
  emailHandler = e => {
    this.setState({ email: e.target.value });
  };
  passWordHandler = e => {
    this.setState({ passWord: e.target.value });
  };
  userNameHandler = e => {
    this.setState({ userName: e.target.value });
  };
  userImageHandler = e => {
    this.setState({ userImage: e.target.files[0] });
  };
  signupHandler = () => {
    let fd = new FormData();
    fd.append("userImage", this.state.userImage, this.state.userImage.name);
    fd.append("email", this.state.email);
    fd.append("passWord", this.state.passWord);
    fd.append("userName", this.state.userName);
    axios
      .post("/signup", fd)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Row>
          <Input
            onChange={this.emailHandler}
            type="email"
            label="Email"
            s={6}
          />
        </Row>

        <Row>
          <Input
            onChange={this.passWordHandler}
            type="password"
            label="password"
            s={6}
          />
        </Row>
        <Row>
          <Input
            onChange={this.userNameHandler}
            placeholder="User Name"
            s={6}
            label="User Name"
          />
        </Row>
        <Row>
          <Input
            onChange={this.userImageHandler}
            type="file"
            label="File"
            s={6}
            multiple
            placeholder="Upload Image"
          />
        </Row>
        <Button onClick={this.signupHandler} waves="light">
          Sign Up
        </Button>
      </div>
    );
  }
}

export default SignUp;
