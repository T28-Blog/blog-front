import Main from 'pages/Main';
import SignUp from 'pages/SignUp';
import SignIn from 'pages/SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth, onAuthStateChanged } from './api/Firebase';
import { useEffect, useState } from 'react';
import CustomRouter from './CustomRouter';
import MyBlog from 'pages/myblog/MyBlog';
import WritePost from 'pages/post/WritePost';

function App() {
  const [isUser, setUser] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //log-In
        setUser(true);
      } else {
        //log-Out
        setUser(false);
      }
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <CustomRouter path="/sign-in" user={isUser} component={SignIn} />
        <CustomRouter path="/sign-up" user={isUser} component={SignUp} />
        <Route path="/myblog" component={MyBlog} />
        <Route path="/write" component={WritePost} />
        {/* <CustomRouter path="/my-blog" user={isUser} component={MyBlog} /> */}
      </Switch>
    </Router>
  );
}

export default App;
