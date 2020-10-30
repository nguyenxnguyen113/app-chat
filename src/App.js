import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import {Login} from './components/Auth/Login'
import {Register} from './components/Auth/Register'
import { Auth } from './components/Auth/Auth';
import {Home} from './components/Auth/Home/Home'
function App() {
  return (
    <div className="App">
      <Route path="/auth/" component={Auth}/>
      <Route path="/home/" component={Home}/>
    </div>
  );
}

export default App;
