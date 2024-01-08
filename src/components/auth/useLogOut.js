import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from '../../firebase'
import useAuthStore from "./authStore";
import { Navigate } from "react-router-dom";

const useLogOut = () => {
    const [signOut, error] = useSignOut(auth);
    const logoutUser = useAuthStore((state) => state.logout);

    const handleLogout = async () => {
        try {
            await signOut();
            localStorage.removeItem('user-info');
            logoutUser();
            <Navigate to={'/'} />
            window.location.reload(false);
        } catch (error) {
            console.log(error)
        }
    }

    return { handleLogout, error}
}

export default useLogOut
