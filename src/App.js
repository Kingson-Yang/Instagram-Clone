import Login from './components/auth/Login.js';
import SignUp from './components/auth/SignUp.js';
import Homepage from './components/homepage/Homepage.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/auth/signup" component={SignUp}/>
          <Route exact path="/homepage" component={Homepage}/>
        </Switch>
    </Router>
  );
}

export default App;
