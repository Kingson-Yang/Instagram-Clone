import useAuthStore from './components/auth/authStore.js';
import ForgotPassword from './components/auth/ForgotPassword.js';
import Login from './components/auth/Login.js';
import SignUp from './components/auth/SignUp.js';
import Homepage from './components/homepage/Homepage.js';
import PageLayout from './components/PageLayout.js';
import EditProfile from './components/profile/EditProfile.js';
import Profile from './components/profile/Profile.js';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const authUser = useAuthStore(state => state.user);

  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route exact path="/" element={authUser? <Navigate to={'/homepage'} /> : <Login />} />
          <Route path="/auth/signup" element={authUser ? <Navigate to={'/homepage'} /> : <SignUp />} />
          <Route path="/auth/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="/homepage" element={authUser ? <Homepage /> : <Navigate to={'/'} />} />
          <Route path='/:username' element={<Profile />} />
          <Route path='/as' element={<EditProfile />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
