import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import {Route} from "react-router"
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import ChatRooms from "./Components/ChatRooms/ChatRooms"
import StartChat from "./Components/StartChat/StartChat"

import CreateRoom from "./Components/CreateRoom/CreateRoom"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/SignUp" component={SignUp}/>
        <Route exact={true} path="/SignIn" component={SignIn}/>
        <Route exact={true} path="/ChatRooms" component={ChatRooms}/>
        <Route exact={true} path="/StartChat/:id" component={StartChat}/>
        <Route exact={true} path="/CreateRoom" component={CreateRoom}/>
      </div>
    );
  }
}

export default App;
