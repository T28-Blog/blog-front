import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from 'components/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index'
import ContactUs from './pages/contact'
import SignUp from './pages/signup'
import SignIn from './pages/signin'
import Search from './pages/search'
import NaverLogin from './components/NaverLogin'
import NaverLoginCallback from './components/NaverLoginCallback'

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/search" exact component={Search} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/naver-login" exact component={NaverLogin} />
        <Route path="/" exact component={NaverLoginCallback} />
      </Switch>
    </Router>
  );
}

export default App;
