import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Contact from './components/contact/Contact';
import Navbar from './components/dashboard/Navbar';
import Home from './components/home/Home';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import Profile from './components/profile/Profile';
import ErrorPage from './components/error/ErrorPage';
import Dashboard from './components/dashboard/Dashboard';


function App() {
  const [view, setView ] = React.useState(0)
  const onSetView = (data) => {
        setView(data);
  }
  return (
    <div className='App'>
      {view===1 ? (<Navbar onSetView={onSetView}/>) :
      (<Dashboard />)}
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path='/profile'><Profile /></Route>
        <Route path='/contact'><Contact /></Route>
        <Route path='/signup'><Signup /></Route>
        <Route path='/signin'><Signin onSetView={onSetView}/></Route>
        <Route path='/'><ErrorPage /></Route>
      </Switch>
    </div>
  );
}

export default App;
