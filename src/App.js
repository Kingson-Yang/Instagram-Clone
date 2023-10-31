import LoginPage from './Components/Accounts/LoginPage.js'
import SignUp from './Components/Accounts/SignUp.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage/>
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
