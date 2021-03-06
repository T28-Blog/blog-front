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
import Error from "pages/Error";
import SuccessSignUp from "./pages/SuccessSignUp";
import SuccessLogout from "./pages/SuccessLogout";
import UserInfo from "pages/UsersInfo";
import PreLoader from "pages/PreLoader";
import GlobalStyle from "styles/GlobalStyles";
import PageLocationTop from "components/PageLocationTop";
import TopicPage from "pages/TopicPage";

function App() {
  return (
    <Router>
      <PageLocationTop />
      <GlobalStyle />
      <Header />
      <Route
        render={(props) => (
          <>
            {/* {props.location.pathname !== '/search' ? <Footer /> : null} */}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/writepost" exact component={WritePost} />
              <Route path="/detailPost/:postID" exact component={DetailPost} />
              <Route path="/my-blog" exact component={MyBlog} />
              <Route path="/contact-us" exact component={ContactUs} />
              <Route path="/sign-in" exact component={SignIn} />
              <Route path="/search" exact component={Search} />
              <Route path="/sign-up" exact component={SignUp} />
              <Route path="/success" exact component={SuccessSignUp} />
              <Route path="/logout" exact component={SuccessLogout} />
              <Route path="/userinfo" exact component={UserInfo} />
              <Route path="/loading" exact component={PreLoader} />
              <Route path="/topic/:hashtag" exact component={TopicPage} />
              {/* 404 Error Page */}
              <Route path={"*"} exact component={Error} />
              {/* <Footer /> */}
            </Switch>
          </>
        )}
      />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
