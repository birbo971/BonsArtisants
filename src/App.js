import React , {Component} from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import CreateProducts from './pages/CreateProducts';

class App extends Component {

  render(){
    return (
      <div className="App">
        <AppHeader></AppHeader>
        <Home/>
      </div>
    );
  }
}

export default App;
