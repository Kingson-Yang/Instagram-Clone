import "./style.css"
import logo from "./images/logo.png"
import appStore from "./images/Appstore.svg"
import gif from "./images/instagram.gif"
import { Link, useHistory } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from 'react';
import { auth } from '../../firebase';

function Login() {

    const history = useHistory()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                history.push("/homepage")
            })
            .catch((error) => {
                alert(error.code);
            })
    }

    return (
        <div className="layout">
            <img src={gif} alt="gif" width="425px"></img>
            <div className="container">
                <form className="form" onSubmit={logIn}>
                    <img src={logo} alt="logo" width="175px" height="51px"></img>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                    <button className="submit" type="submit">Log in</button>
                    <p className="hr-lines" style={{fontSize: 15 + 'px'}}>OR</p>
                    <button className="fb">Log in with Facebook</button>
                    <button className="fp">Forgot Password?</button>
                </form>
                <p className="signUp">Don't have an account? <Link to="/auth/signup">Sign up</Link></p>
                <p>Get the app</p>
                <a href="https://apps.apple.com/us/app/instagram/id389801252?vt=lo"><img src={appStore} alt="appStore" className="appstore"></img></a>
            </div>
        </div>
    )
};

export default Login;