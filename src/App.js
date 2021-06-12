import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/index";
import MyBlog from "./pages/myblog";
import ContactUs from "./pages/contact";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Search from "./pages/search";
import WritePost from "pages/writePost";
import Footer from "./components/Footer";
import Comments from "components/Comments";
import Error from "pages/Error";
// import NaverLogin from './components/NaverLogin'
// import NaverLoginCallback from './components/NaverLoginCallback'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/writepost" exact component={WritePost} />
        <Route path="/my-blog" exact component={MyBlog} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/search" exact component={Search} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/comment" exact component={Comments} />
        {/* <Route path="/naver-login" exact component={NaverLogin} /> */}
        {/* 404 Error Page */}
        <Route path={"*"} exact component={Error} /> 
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
