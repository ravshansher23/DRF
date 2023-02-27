import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import TodoList from './components/Todo';
import ProjectList from './components/projects';
import UsersList from './components/Users.js';
import Navbar from './components/Menu.js';
import FooterList from './components/Footer.js';
import {HashRouter, Route, BrowserRouter, Link, Switch, Redirect} from "react-router-dom"
import NotFound404 from './components/NotFound404';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarItems: [
        {name: 'Users', href: '/'},
        {name: 'Projects', href: '/projects'},
        {name: 'TODOs', href: '/todos'},
    ],
        'users': [],
        'todos': [],
        'projects': [],
        
  }
}

componentDidMount() {


    axios.get('http://127.0.0.1:8000/api/users/').then(response => {
      this.setState(
        {
          'users': response.data

        }
      )
    }).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/TODO/').then(response => {
      console.log(response.data);
      this.setState(
        {
          
          'todos': response.data
        }
      )
    }).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/projects/').then(response => {
      this.setState(
        {
          'projects': response.data,

        }
      )
    }).catch(error => console.log(error))
    
  
}

render () {
  return (
      <div>
      <BrowserRouter> 
      <header>
      <Navbar navbarItems={this.state.navbarItems}/>
                </header>   
          <Switch>
          
          <Route exact path='/' component={() => <UsersList users={this.state.users}/>} />
          
          <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}/>} />
          <Route exact path='/todos' component={() => <TodoList items={this.state.todos}/>} />
          <Redirect from='/project' to='/projects/' />
          <Redirect from='/todo' to='/todos/' />
          <Route component={NotFound404}/>
          </Switch>
      </BrowserRouter>
      
      </div>
        );
}
}  

export default App;