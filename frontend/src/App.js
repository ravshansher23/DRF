import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import UsersList from './components/Users';
import MenuList from './components/Menu';
import FooterList from './components/Footer';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        'users': [],
        'menus': [],
        'footers': []
  }
}

componentDidMount() {
  const menus = [
    {
      'name': 'All users',
    },
    {
      'name': 'Project',
    },
    {
      'name': 'TODO',
    }
  ]
  const footers = [
    {
      'name': 'Created',
    },
    {
      'name': 'Contact',
    }
  ]
    axios.get('http://127.0.0.1:8000/api/users/').then(response => {
      this.setState(
        {
          'users': response.data,
          'menus': menus,
          'footers': footers

        }
      )
    }).catch(error => console.log(error))
    

  
}

render () {
  return (
      <div>
          <MenuList menus={this.state.menus}/>
          <UsersList users={this.state.users}/>
          <FooterList footers={this.state.footers}/>
      </div>
        );
}
}  

export default App;