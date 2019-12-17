import React , {Component} from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import CreateProducts from './pages/CreateProducts';
import Login from './pages/Login';

class App extends Component {

  render(){
    return (
      <div className="App">
        <AppHeader></AppHeader>
        <Login/>
      </div>
    );
  }
}

export default App;
