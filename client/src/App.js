//DEPENDENCIES
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch }
from 'react-router-dom';

//PAGES
import Home from './pages/Home';
import Login from './pages/Login';

//COMPONENTS
import Navbar from './components/Navbar';

//ASSETS

function App() {
  return (
    <div className="font-sans">
      <Router>
        <Navbar />  
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
