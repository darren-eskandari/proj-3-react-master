import React, { Component } from 'react'
import NewRecipe from "./NewRecipe"
import './App.css';
import Register from './Register'
import UserShow from "./User"
import NavBar from "./Nav"
import Login from "./Login"

class App extends Component {
  state = {
    currentUser:{}
  }

  doUpdateCurrentUser=user=>{
    this.setState({
      currentUser : user
    })
  }
  render(){
    return (
      <div className="App">
        <NavBar />
        <Register />
        <Login doUpdateCurrentUser={this.doUpdateCurrentUser}/>
        {/* <NewRecipe />    */}
        {/* <UserShow user={this.state.currentUser}/> */}
      </div>
    )
  }
}

export default App;