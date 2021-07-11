//DEPENDENCIES
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//PAGES
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

//COMPONENTS
import Footer from './components/partials/Footer';
import { useSelector } from 'react-redux';
import { selectUser } from './app/globalSlice';

//ASSETS

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="flex flex-col font-sans bg-black">
      <Router>
        <Switch>
          <Route path="/" exact component={user ? Dashboard : Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
