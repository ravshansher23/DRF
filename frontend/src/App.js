import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import TodoList from './components/Todo';
import ProjectList from './components/projects';
import UsersList from './components/Users.js';
import Navbar from './components/Menu.js';
import FooterList from './components/Footer.js';
import { HashRouter, Route, BrowserRouter, Link, Switch, Redirect } from "react-router-dom";
import NotFound404 from './components/NotFound404.js';
import LoginForm from "./components/Auth.js";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarItems: [
        { name: 'Users', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'TODOs', href: '/todos' },
      ],
      'users': [],
      'todos': [],
      'projects': [],
      auth: { username: '', is_login: false }
    }
  }
  login(username, password) {
    axios.post(get_url('token/'), { username: username, password: password })
      .then(response => {
        const result = response.data
        const access = result.access
        const refresh = result.refresh
        localStorage.setItem('login', username)
        localStorage.setItem('access', access)
        localStorage.setItem('refresh', refresh)
        this.setState({ 'auth': { username: username, is_login: true } })
        this.load_data()
      }).catch(error => {
        if (error.response.status === 401) {
          alert('Неверный логин или пароль')
        } else {
          console.log(error)
        }
      })
  }

  logout() {
    localStorage.setItem('login', '')
    localStorage.setItem('access', '')
    localStorage.setItem('refresh', '')
    this.setState({ 'auth': { username: '', is_login: false } })
  }


  load_data() {
    let headers = {
      'Content-Type': 'application/json'
    }
    if (this.state.auth.is_login) {
      const token = localStorage.getItem('access')
      headers['Authorization'] = 'Bearer ' + token
    }

    axios.get('http://127.0.0.1:8000/api/users/', { headers })
      .then(response => {
        this.setState({ users: response.data })
      }).catch(error =>

        console.log(error)
      )

    axios.get('http://127.0.0.1:8000/api/projects/', { headers })
      .then(response => {
        this.setState({ projects: response.data })
      }).catch(error =>
        console.log(error)
      )

    axios.get('http://127.0.0.1:8000/api/TODO/', { headers })
      .then(response => {
        this.setState({ todos: response.data })
      }).catch(error =>
        console.log(error)
      )
  }

  componentDidMount() {

    const username = localStorage.getItem('login')
    if ((username != "") & (username != null)) {
      this.setState({ 'auth': { username: username, is_login: true } }, () => this.load_data())
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <header>
            <Navbar navbarItems={this.state.navbarItems} auth={this.state.auth} logout={() => this.logout()} />
          </header>
          <Switch>
            <Route exact path='/' component={() => <UsersList users={this.state.users} />}>
            </Route>
            <Route exact path='/projects' component={() => <ProjectList items={this.state.projects} />}>
            </Route>
            <Route exact path='/todos' component={() => <TodoList items={this.state.todos} />}>
            </Route>
            <Route exact path='/login'>
              <LoginForm login={(username, password) => this.login(username, password)} />
            </Route>

            <Redirect from='/project' to='/projects/' />
            <Redirect from='/todo' to='/todos/' />
            <Route component={NotFound404} />
            {/* <Route exact path='/login' component={() => <LoginForm get_token={(username,password)=>this.get_token(username,password)}/> } /> */}
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;