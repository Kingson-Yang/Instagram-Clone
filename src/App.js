import Login from './components/auth/Login.js';
import SignUp from './components/auth/SignUp.js';
import Homepage from './components/homepage/Homepage.js';
import PageLayout from './components/PageLayout.js';
import Profile from './components/profile/Profile.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <PageLayout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/auth/signup" component={SignUp} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/homepage/profile" component={Profile} />
        </Switch>
      </PageLayout>
    </Router>
  );
}

export default App;
