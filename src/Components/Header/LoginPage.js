import "./LoginPage.css"
import logo from "./images/logo.png"
import appStore from "./images/Appstore.svg"
import gif from "./images/instagram.gif"
import playBadge from "./images/playbadge.png"
import { SocialIcon } from 'react-social-icons'

function LoginPage() {
    return (
        <div className="loginPage">
            <img src={gif} alt="gif" width="425px"></img>
            <div className="container">
                <div className="form">
                    <img src={logo} alt="logo" width="175px" height="51px"></img>
                    <input type="text" placeholder="Phone number, username, or email" required></input>
                    <input type="password" name="password" placeholder="Password" required></input>
                    <button className="submit" type="submit">Log in</button>
                    <p className="hr-lines" style={{fontSize: 15 + 'px'}}>OR</p>
                    <button class="fb">Log in with Facebook</button>
                    <button class="fp">Forgot Password?</button>
                </div>
                <p className="signUp">Don't have an account? <button>Sign up</button></p>
                <p>Get the app</p>
                <a href="https://apps.apple.com/us/app/instagram/id389801252?vt=lo"><img src={appStore} alt="appStore" className="appstore"></img></a>
            </div>
        </div>
    )
};

export default LoginPage;