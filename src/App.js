import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Index";
import MyBlog from "./pages/Myblog";
import ContactUs from "./pages/Contact";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Search from "./pages/Search";
import WritePost from "pages/WritePost";
import DetailPost from "pages/DetailPost";
import Footer from "./components/Footer";
import Comments from "components/Comments";
import Error from "pages/Error";
import SuccessSignUp from "./pages/SuccessSignUp";
import SuccessLogout from "./pages/SuccessLogout";
import UserInfo from "pages/UsersInfo";
import PreLoader from "pages/PreLoader";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/writepost" exact component={WritePost} />
        <Route path="/detailPost" exact component={DetailPost} />
        <Route path="/my-blog" exact component={MyBlog} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/search" exact component={Search} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/comment" exact component={Comments} />
        <Route path="/success" exact component={SuccessSignUp} />
        <Route path="/logout" exact component={SuccessLogout} />
        <Route path="/userinfo" exact component={UserInfo} />
        <Route path="/loading" exact component={PreLoader} />
        {/* 404 Error Page */}
        <Route path={"*"} exact component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
