import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard'
import WebApp2 from './WebApp2'


function App() {
  return (
    <div className="App">
      <Link to="/dashboard">Dashboard</Link>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/webApp2" component={WebApp2}/>
   
    </div>
  );
}

export default App;
