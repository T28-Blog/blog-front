import Main from 'pages/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
