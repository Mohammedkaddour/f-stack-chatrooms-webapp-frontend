import React, { Component } from "react";
import axios from "axios";
import { Button, Input, Row } from "react-materialize";
import jwtdecode from "jwt-decode";
import { connect } from "react-redux";
import NavBar from "../NavBar/NavBar";
import "./CreateRoom.css";
class CreateRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: "",
      description: "",
      roomImage: null
    };
  }

  topicHandler = e => {
    this.setState({ topic: e.target.value });
  };

  descriptionHandler = e => {
    this.setState({ description: e.target.value });
  };
  roomImgHandler = e => {
    this.setState({ roomImage: e.target.files[0] });
  };
  CreateHandler = () => {
    let fd = new FormData();
    fd.append("roomImage", this.state.roomImage, this.state.roomImage.name);
    fd.append("topic", this.state.topic);
    fd.append("description", this.state.description);
    let decode = jwtdecode(this.props.token);
    axios
      .post("/addchatroom/" + decode.id, fd)
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
        <NavBar />
        <div className="creatroom">
          <Row>
            <Input
            placeholder="Topic"
              onChange={this.topicHandler}
              type="text"
              label="Topic"
              s={8}
            />
          </Row>
          <Row>
            <Input
            placeholder="description"
              onChange={this.descriptionHandler}
              type="text"
              label="description"
              s={8}
            />
          </Row>
          <Row>
            <Input
              onChange={this.roomImgHandler}
              type="file"
              label="Image"
              placeholder="upload an image"
              s={8}
            />
          </Row>
          <Button onClick={this.CreateHandler} waves="light">
            Create aroom
          </Button>
        </div>
      </div>
    );
  }
}

let connectedCreateRoom = connect(store => {
  return { token: store.token };
})(CreateRoom);
export default connectedCreateRoom;
