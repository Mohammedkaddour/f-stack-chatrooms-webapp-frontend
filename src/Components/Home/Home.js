import React,{Component} from "react"
import SignUp from "../SignUp/SignUp"
import SignIn from "../SignIn/SignIn"
import { Slide , Slider} from "react-materialize";
import NavBar from "../NavBar/NavBar"
class Home extends Component{


    render(){
        return(<div>
             <NavBar/>
            <Slider>
  <Slide
 
    src="https://images.pexels.com/photos/704767/pexels-photo-704767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    title="This is our big Tagline!">
    Here's our small slogan.
  </Slide>
  <Slide
    src="https://images.pexels.com/photos/1246743/pexels-photo-1246743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    title="Left aligned Caption"
    placement="left">
    Here's our small slogan.
  </Slide>
  <Slide
    src="https://images.pexels.com/photos/1449059/pexels-photo-1449059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    title="Right aligned Caption"
    placement="right">
    Here's our small slogan.
  </Slide>
</Slider>
            {/* <SignUp/>
            <SignIn/> */}
        </div>)
    }
}

export default Home