import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from '../../firebase'
import useAuthStore from "./authStore";

const useLogOut = () => {
    const [signOut, error] = useSignOut(auth);
    const logoutUser = useAuthStore((state) => state.logout);

    const handleLogout = async () => {
        try {
            await signOut();
            localStorage.removeItem('user-info');
            logoutUser();
            window.location.reload(false);
        } catch (error) {
            console.log(error)
        }
    }

    return { handleLogout, error}
}

export default useLogOut
