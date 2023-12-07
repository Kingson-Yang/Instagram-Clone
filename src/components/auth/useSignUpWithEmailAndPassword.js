import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../firebase";
import { collection, doc, setDoc} from "firebase/firestore";
import { Alert } from "@mui/material";
import useAuthStore from "./authStore";

const useSignUpWithEmailAndPassword = () => {

    const [createUserWithEmailAndPassword, error] = useCreateUserWithEmailAndPassword(auth);
    const loginUser = useAuthStore(state => state.login)

    const signup = async (inputs) => {
        if (inputs.email === null || !inputs.password === null|| !inputs.username === null) {
            <Alert severity="error">This is an error message!</Alert>
            return;
        }

        const usersRef = collection(firestore, "users");

        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if (!newUser && error) {
                console.log("Error", error.message, "error");
                return;
            }
            if (newUser) {
                const userDoc = {
                    uid: newUser.user.uid,
                    email: inputs.email,
                    username: inputs.username,
                    bio: "",
                    profilePicURL: "",
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now(),
                };
                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));
                loginUser(userDoc)
            }
        } catch (error) {
            console.log("Error", error.message, "error");
        }
    };

    return { error, signup };
}

export default useSignUpWithEmailAndPassword;
