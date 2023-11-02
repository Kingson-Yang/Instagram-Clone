import './homepage.css'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useHistory, Link } from 'react-router-dom';
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faMessage, faPlus, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

function Home() {
    const history = useHistory()

    const handleClick = () => {
        signOut(auth).then(val => {
            history.push('/')
        })
    }
    return (
        <nav>
            <Link to="/homepage" style={{height: 50}}>
                <img src={logo} alt="logo" style={{width: 150 + "px"}}></img>
            </Link>

            <Link to="/homepage">
                <button className="navBtn"><FontAwesomeIcon icon={faHouse} style={{fontSize: 22.5 + "px"}} /> Home</button>
            </Link>

            <button className="navBtn"><FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize: 22.5 + "px"}} /> Search</button>

            <Link to="/">
                <button className="navBtn"><FontAwesomeIcon icon={faMessage} style={{fontSize: 22.5 + "px"}} /> Messages</button>
            </Link>

            <button className="navBtn"><FontAwesomeIcon icon={faPlus} style={{fontSize: 22.5 + "px"}} /> Create Post</button>

            <button className="navBtn"><FontAwesomeIcon icon={faUser} style={{fontSize: 22.5 + "px"}} /> Profile</button>

            <button className="navBtnMore"><FontAwesomeIcon icon={faBars} style={{fontSize: 22.5 + "px"}} /> More</button>

        </nav>
    )
}

export default Home;