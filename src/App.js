import React, { Component } from 'react'
import './App.css';
import RecipeContainer from './RecipeContainer'
import NavBar from './Nav'
import {Route, Switch} from 'react-router-dom'
import RecipeShow from './RecipeShow'
import NewRecipe from './NewRecipe';

class App extends Component{
  state={
    loginModal:false,
    currentUser:{},
    
  }
  doUpdateCurrentUser=user=>{
    this.setState({
      currentUser : user.data,
      loginModal:false
    })
  }
  showLoginModal=()=>{
    this.setState({
      loginModal:true
    })
  }
  logout=()=>{
    this.setState({
      currentUser:{}
    })
  }
  render(){
    return (
        <div className="App">
          <NavBar showLoginModal={this.showLoginModal} currentUser={this.state.currentUser} doUpdateCurrentUser={this.doUpdateCurrentUser} loginModal={this.state.loginModal} logout={this.logout}/>
          
          <Switch>
            <Route exact path = '/recipes/new' render={()=><NewRecipe UserId={this.state.currentUser.id}/>} />
            <Route exact path ='/' render={()=> <RecipeContainer doUpdateCurrentUser ={this.doUpdateCurrentUser} currentUser={this.state.currentUser}/> }/>
            <Route exact path='/recipes/:id' render={() => <RecipeShow />} />
          </Switch>
        </div>
      )
    }  
  
}

export default App;