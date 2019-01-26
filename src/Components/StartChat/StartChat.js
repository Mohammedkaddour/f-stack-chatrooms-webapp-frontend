import React, { Component } from "react";
import axios from "axios";
import { Input } from "antd";
import jwtdecode from "jwt-decode";
import { connect } from "react-redux";
import "./StartChat.css";
class StartChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentMsg: "",
      messages: []
    };
  }
  componentDidMount = () => {
    setInterval(() => {
      axios
        .get("/getroom/" + this.props.match.params.id)
        .then(response => {
          console.log(response);
          this.setState({ messages: response.data.room.messages });
        })
        .catch(error => {
          console.log(error);
        });
    }, 250);
  };
  changeMsgHandler = e => {
    this.setState({ sentMsg: e.target.value });
  };
  sendMsgHandler = () => {
    let decode = jwtdecode(this.props.token);
    axios.post("/sendmsg/" + this.props.match.params.id, {
      id: decode.id,
      sentMsg: this.state.sentMsg
    });
    this.setState({sentMsg:""})
  };
  render() {
    const { TextArea } = Input;
    return (
      <div>
        <div>{this.state.messages.map(msg => {
          return(<div key={msg._id}>
<p><h5>{msg.user.userName}</h5><p>{msg.userMsg}</p></p>
          </div>)
        })}</div>
        <div className="startChat">
          <TextArea
          value={this.state.sentMsg}
            className="msgwindow"
            onChange={this.changeMsgHandler}
            placeholder="Type your message"
            autosize={{ minRows: 2, maxRows: 6 }}
          />

          <button
            onClick={this.sendMsgHandler}
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Send
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    );
  }
}

let connectedStartChat = connect(store => {
  return { token: store.token };
})(StartChat);
export default connectedStartChat;
