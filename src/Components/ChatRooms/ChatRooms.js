import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
// import { Card , CardTitle} from "react-materialize";
import { Link } from "react-router-dom";
import { Card, Icon, Avatar ,Badge, Button} from "antd";
import "./ChatRooms.css"
class ChatRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatrooms: []
    };
  }

  componentDidMount = () => {
    axios
      .get("/chatrooms")
      .then(response => {
        console.log(response);
        this.setState({ chatrooms: response.data.rooms });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { Meta } = Card;
    return (
      <div>
        <NavBar showCreate={true} />
        {this.state.chatrooms.map(room => {
          return (
            <div key={room._id} className="container">
           
              <Card
               
                title={ <h3>{room.topic}</h3>}
                style={{ width: 150 }}
                cover={<img onClick={()=>{this.props.history.push("/StartChat/"+room._id)}} alt="roomImage" src={room.roomImage} width="150px"/>}
              >
             <div> <h5>description:</h5><p> {room.description}</p></div>
             <p>Created By:</p>
                <Meta
                  avatar={
                    <img size="small" width="50px" src={room.createdBy.userImage} />
                  }
                  title={room.createdBy.userName}
                />
              <div>
              <p>Active users:</p>
                  <Badge count={room.active.length}><Avatar size="larg" shape="square" icon="user" /></Badge> 
             </div>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ChatRooms;
