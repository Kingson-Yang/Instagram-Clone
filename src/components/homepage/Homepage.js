import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory()

    const handleClick = () => {
        signOut(auth).then(val => {
            history.push('/')
        })
    }
    return(
        <button onClick={handleClick}>Sign Out</button>
    )
}

export default Home;