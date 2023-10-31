import logo from "./images/logo.png"
import appStore from "./images/Appstore.svg"
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <div className="layout">
            <div className="container">
                <div className="form">
                    <img src={logo} alt="logo" width="175px" height="51px"></img>
                    <h3 style={{color: "gray"}}>Sign up to see photos and videos from your friends</h3>
                    <button className="submit">Log in with Facebook</button>
                    <p className="hr-lines" style={{fontSize: 15 + 'px'}}>OR</p>
                    <input type="text" placeholder="Email" required></input>
                    <input type="text" placeholder="Full Name" required></input>
                    <input type="text" placeholder="Username" required></input>
                    <input type="password" name="password" placeholder="Password" required></input>
                    <p style={{fontSize: 12.5, color: "gray"}}>People who use our service may have uploaded your contact information to Instagram. <a href="https://www.facebook.com/help/instagram/261704639352628">Learn More</a></p>
                    <p style={{fontSize: 12.5, color: "gray"}}>By signing up, you agree to our <a href="https://help.instagram.com/581066165581870/?locale=en_US">Terms, </a><a href="https://www.facebook.com/privacy/policy">Privacy Policy</a> and <a href="https://privacycenter.instagram.com/policies/cookies/">Cookie Policy</a></p>
                    <button className="submit" type="submit">Sign Up</button>
                </div>
                <p className="signUp">Have an account? <Link to="/">Log in</Link></p>
                <p>Get the app</p>
                <a href="https://apps.apple.com/us/app/instagram/id389801252?vt=lo"><img src={appStore} alt="appStore" className="appstore"></img></a>
            </div>
        </div>
    )
}

export default SignUp;